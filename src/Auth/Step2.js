import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import { useData } from "../DataContext";
import Typography from "@material-ui/core/Typography";
import { PrimaryButton } from "../components/PrimaryButton";
import { MainContainer } from "../components/MainContainer";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { FileInput } from "../components/FileInput";
import * as yup from "yup";

const schema = yup.object().shape({
  companyName: yup
    .string()
    .required("Company Name is required"),
 
});

export const Step2 = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, errors, control } = useForm({
    defaultValues: {
      companyName: data.companyName,
      pin: data.pin,
      industry: data.industry,
      address: data.address,
      preferredUrl: data.preferredUrl,
      files: data.files,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    history.push("./step3");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        <span>Step 2</span>
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="companyName"
          type="text"
          label="Company Name"
          name="companyName"
          error={!!errors.companyName}
          helperText={errors?.companyName?.message}
          required
        />
        <Input
          ref={register}
          id="companyPin"
          type="text"
          label="Company Pin"
          name="companyPin"
        />
        <Input
          ref={register}
          id="address"
          type="text"
          label="Address"
          name="address"
        />
        <FileInput
          name="files" 
          control={control} 
          label="Company Logo"
        />

        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
