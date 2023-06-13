/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Post } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PostUpdateForm(props) {
  const {
    id: idProp,
    post: postModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userid: "",
    name: "",
    designation: "",
    content: "",
    imgUrl: "",
    country: "",
    phoneNo: "",
    gender: "",
    email: "",
    github: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  };
  const [userid, setUserid] = React.useState(initialValues.userid);
  const [name, setName] = React.useState(initialValues.name);
  const [designation, setDesignation] = React.useState(
    initialValues.designation
  );
  const [content, setContent] = React.useState(initialValues.content);
  const [imgUrl, setImgUrl] = React.useState(initialValues.imgUrl);
  const [country, setCountry] = React.useState(initialValues.country);
  const [phoneNo, setPhoneNo] = React.useState(initialValues.phoneNo);
  const [gender, setGender] = React.useState(initialValues.gender);
  const [email, setEmail] = React.useState(initialValues.email);
  const [github, setGithub] = React.useState(initialValues.github);
  const [facebook, setFacebook] = React.useState(initialValues.facebook);
  const [instagram, setInstagram] = React.useState(initialValues.instagram);
  const [linkedin, setLinkedin] = React.useState(initialValues.linkedin);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = postRecord
      ? { ...initialValues, ...postRecord }
      : initialValues;
    setUserid(cleanValues.userid);
    setName(cleanValues.name);
    setDesignation(cleanValues.designation);
    setContent(cleanValues.content);
    setImgUrl(cleanValues.imgUrl);
    setCountry(cleanValues.country);
    setPhoneNo(cleanValues.phoneNo);
    setGender(cleanValues.gender);
    setEmail(cleanValues.email);
    setGithub(cleanValues.github);
    setFacebook(cleanValues.facebook);
    setInstagram(cleanValues.instagram);
    setLinkedin(cleanValues.linkedin);
    setErrors({});
  };
  const [postRecord, setPostRecord] = React.useState(postModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Post, idProp)
        : postModelProp;
      setPostRecord(record);
    };
    queryData();
  }, [idProp, postModelProp]);
  React.useEffect(resetStateValues, [postRecord]);
  const validations = {
    userid: [{ type: "Required" }],
    name: [{ type: "Required" }],
    designation: [],
    content: [],
    imgUrl: [],
    country: [],
    phoneNo: [],
    gender: [],
    email: [],
    github: [],
    facebook: [],
    instagram: [],
    linkedin: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          userid,
          name,
          designation,
          content,
          imgUrl,
          country,
          phoneNo,
          gender,
          email,
          github,
          facebook,
          instagram,
          linkedin,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Post.copyOf(postRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PostUpdateForm")}
      {...rest}
    >
      <TextField
        label="Userid"
        isRequired={true}
        isReadOnly={false}
        value={userid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid: value,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.userid ?? value;
          }
          if (errors.userid?.hasError) {
            runValidationTasks("userid", value);
          }
          setUserid(value);
        }}
        onBlur={() => runValidationTasks("userid", userid)}
        errorMessage={errors.userid?.errorMessage}
        hasError={errors.userid?.hasError}
        {...getOverrideProps(overrides, "userid")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name: value,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Designation"
        isRequired={false}
        isReadOnly={false}
        value={designation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation: value,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.designation ?? value;
          }
          if (errors.designation?.hasError) {
            runValidationTasks("designation", value);
          }
          setDesignation(value);
        }}
        onBlur={() => runValidationTasks("designation", designation)}
        errorMessage={errors.designation?.errorMessage}
        hasError={errors.designation?.hasError}
        {...getOverrideProps(overrides, "designation")}
      ></TextField>
      <TextField
        label="Content"
        isRequired={false}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content: value,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Img url"
        isRequired={false}
        isReadOnly={false}
        value={imgUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl: value,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.imgUrl ?? value;
          }
          if (errors.imgUrl?.hasError) {
            runValidationTasks("imgUrl", value);
          }
          setImgUrl(value);
        }}
        onBlur={() => runValidationTasks("imgUrl", imgUrl)}
        errorMessage={errors.imgUrl?.errorMessage}
        hasError={errors.imgUrl?.hasError}
        {...getOverrideProps(overrides, "imgUrl")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country: value,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Phone no"
        isRequired={false}
        isReadOnly={false}
        value={phoneNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo: value,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.phoneNo ?? value;
          }
          if (errors.phoneNo?.hasError) {
            runValidationTasks("phoneNo", value);
          }
          setPhoneNo(value);
        }}
        onBlur={() => runValidationTasks("phoneNo", phoneNo)}
        errorMessage={errors.phoneNo?.errorMessage}
        hasError={errors.phoneNo?.hasError}
        {...getOverrideProps(overrides, "phoneNo")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender: value,
              email,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email: value,
              github,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Github"
        isRequired={false}
        isReadOnly={false}
        value={github}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github: value,
              facebook,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.github ?? value;
          }
          if (errors.github?.hasError) {
            runValidationTasks("github", value);
          }
          setGithub(value);
        }}
        onBlur={() => runValidationTasks("github", github)}
        errorMessage={errors.github?.errorMessage}
        hasError={errors.github?.hasError}
        {...getOverrideProps(overrides, "github")}
      ></TextField>
      <TextField
        label="Facebook"
        isRequired={false}
        isReadOnly={false}
        value={facebook}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook: value,
              instagram,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.facebook ?? value;
          }
          if (errors.facebook?.hasError) {
            runValidationTasks("facebook", value);
          }
          setFacebook(value);
        }}
        onBlur={() => runValidationTasks("facebook", facebook)}
        errorMessage={errors.facebook?.errorMessage}
        hasError={errors.facebook?.hasError}
        {...getOverrideProps(overrides, "facebook")}
      ></TextField>
      <TextField
        label="Instagram"
        isRequired={false}
        isReadOnly={false}
        value={instagram}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram: value,
              linkedin,
            };
            const result = onChange(modelFields);
            value = result?.instagram ?? value;
          }
          if (errors.instagram?.hasError) {
            runValidationTasks("instagram", value);
          }
          setInstagram(value);
        }}
        onBlur={() => runValidationTasks("instagram", instagram)}
        errorMessage={errors.instagram?.errorMessage}
        hasError={errors.instagram?.hasError}
        {...getOverrideProps(overrides, "instagram")}
      ></TextField>
      <TextField
        label="Linkedin"
        isRequired={false}
        isReadOnly={false}
        value={linkedin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userid,
              name,
              designation,
              content,
              imgUrl,
              country,
              phoneNo,
              gender,
              email,
              github,
              facebook,
              instagram,
              linkedin: value,
            };
            const result = onChange(modelFields);
            value = result?.linkedin ?? value;
          }
          if (errors.linkedin?.hasError) {
            runValidationTasks("linkedin", value);
          }
          setLinkedin(value);
        }}
        onBlur={() => runValidationTasks("linkedin", linkedin)}
        errorMessage={errors.linkedin?.errorMessage}
        hasError={errors.linkedin?.hasError}
        {...getOverrideProps(overrides, "linkedin")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || postModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || postModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
