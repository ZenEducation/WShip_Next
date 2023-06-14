import React from "react";
import { Button, FormItem, FormContainer, Select, Input } from "components/ui";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Textarea from "@/views/ui-components/forms/Input/Textarea";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required"),
  jobTitle: Yup.string().required("jobTitle is required"),
  jobType: Yup.string().required("JobType is required"),
  phone: Yup.string().required("phone is required"),
  file: Yup.string().required("File is required"),
  comment: Yup.string().required("comment is required"),
});

const index = () => {
  const sizes = [
    { label: "Full Time", value: "full time" },
    { label: "Part Time", value: "part time" },
    { label: "Remote", value: "remote" },
    { label: "In Office", value: "in office" },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    window.location.reload();
  };
  return (
    <div className="w-full h-full p-1 md:p-3">
      <div className="w-full h-full border rounded-md bg-white p-8">
        <Formik
          initialValues={{
            name: "",
            email: "",
            jobTitle: "",
            jobType: "",
            phone: "",
            file: "",
            comment: "",
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {({ values, touched, errors }) => {
            return (
              <Form onSubmit={submitHandler}>
                <FormContainer className="w-full flex flex-col md:flex-row gap-3">
                  <FormContainer className="w-full flex flex-col">
                    <FormItem
                      label="Your Name"
                      invalid={errors.name && touched.name}
                      errorMessage={errors.name}
                    >
                      <Field
                        type="text"
                        autoComplete="off"
                        name="name"
                        placeholder="Name :"
                        component={Input}
                      />
                    </FormItem>
                    <FormItem
                      label="Phone No"
                      invalid={errors.phone && touched.phone}
                      errorMessage={errors.phone}
                    >
                      <Field
                        type="text"
                        autoComplete="off"
                        name="phone"
                        placeholder="Phone :"
                        component={Input}
                      />
                    </FormItem>

                    <FormItem
                      label="Job Type"
                      invalid={errors.jobType && touched.jobType}
                      errorMessage={errors.jobType}
                    >
                      <Field name="jobType">
                        {({ field, form }) => (
                          <Select
                            placeholder="All Jobs"
                            field={field}
                            form={form}
                            options={sizes}
                            value={sizes.filter(
                              (size) => size.value === values.jobType
                            )}
                            onChange={(size) =>
                              form.setFieldValue(field.name, size.value)
                            }
                          />
                        )}
                      </Field>
                    </FormItem>
                  </FormContainer>
                  <FormContainer className="w-full">
                    <FormItem
                      label="Your Email"
                      invalid={errors.name && touched.name}
                      errorMessage={errors.email}
                    >
                      <Field
                        type="email"
                        autoComplete="off"
                        name="email"
                        placeholder="Email :"
                        component={Input}
                      />
                    </FormItem>
                    <FormItem
                      label="Job Title"
                      invalid={errors.jobTitle && touched.jobTitle}
                      errorMessage={errors.jobTitle}
                    >
                      <Field
                        type="text"
                        autoComplete="off"
                        name="jobTitle"
                        placeholder="Job title :"
                        component={Input}
                      />
                    </FormItem>
                  </FormContainer>
                </FormContainer>
                <FormContainer className="w-full">
                  <FormItem label="Upload Comment">
                    <Textarea
                      type="text"
                      autoComplete="off"
                      name="comment"
                      placeholder="Job title :"
                      component={Input}
                    />
                  </FormItem>
                  <FormItem
                    label="Upload File"
                    invalid={errors.file && touched.file}
                    errorMessage={errors.file}
                  >
                    <Field
                      type="file"
                      autoComplete="off"
                      name="file"
                      placeholder="Job title :"
                      component={Input}
                    />
                  </FormItem>
                  <Button
                    block
                    variant="solid"
                    type="submit"
                    className="max-w-[200px]"
                  >
                    Send Message
                  </Button>
                </FormContainer>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default index;
