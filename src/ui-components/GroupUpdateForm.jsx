/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Group } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function GroupUpdateForm(props) {
  const {
    id: idProp,
    group: groupModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    groupName: "",
    session: "",
    groupImgUrl: "",
  };
  const [groupName, setGroupName] = React.useState(initialValues.groupName);
  const [session, setSession] = React.useState(initialValues.session);
  const [groupImgUrl, setGroupImgUrl] = React.useState(
    initialValues.groupImgUrl
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = groupRecord
      ? { ...initialValues, ...groupRecord }
      : initialValues;
    setGroupName(cleanValues.groupName);
    setSession(cleanValues.session);
    setGroupImgUrl(cleanValues.groupImgUrl);
    setErrors({});
  };
  const [groupRecord, setGroupRecord] = React.useState(groupModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Group, idProp)
        : groupModelProp;
      setGroupRecord(record);
    };
    queryData();
  }, [idProp, groupModelProp]);
  React.useEffect(resetStateValues, [groupRecord]);
  const validations = {
    groupName: [],
    session: [],
    groupImgUrl: [],
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
          groupName,
          session,
          groupImgUrl,
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
            Group.copyOf(groupRecord, (updated) => {
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
      {...getOverrideProps(overrides, "GroupUpdateForm")}
      {...rest}
    >
      <TextField
        label="Group name"
        isRequired={false}
        isReadOnly={false}
        value={groupName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName: value,
              session,
              groupImgUrl,
            };
            const result = onChange(modelFields);
            value = result?.groupName ?? value;
          }
          if (errors.groupName?.hasError) {
            runValidationTasks("groupName", value);
          }
          setGroupName(value);
        }}
        onBlur={() => runValidationTasks("groupName", groupName)}
        errorMessage={errors.groupName?.errorMessage}
        hasError={errors.groupName?.hasError}
        {...getOverrideProps(overrides, "groupName")}
      ></TextField>
      <TextField
        label="Session"
        isRequired={false}
        isReadOnly={false}
        value={session}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName,
              session: value,
              groupImgUrl,
            };
            const result = onChange(modelFields);
            value = result?.session ?? value;
          }
          if (errors.session?.hasError) {
            runValidationTasks("session", value);
          }
          setSession(value);
        }}
        onBlur={() => runValidationTasks("session", session)}
        errorMessage={errors.session?.errorMessage}
        hasError={errors.session?.hasError}
        {...getOverrideProps(overrides, "session")}
      ></TextField>
      <TextField
        label="Group img url"
        isRequired={false}
        isReadOnly={false}
        value={groupImgUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              groupName,
              session,
              groupImgUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.groupImgUrl ?? value;
          }
          if (errors.groupImgUrl?.hasError) {
            runValidationTasks("groupImgUrl", value);
          }
          setGroupImgUrl(value);
        }}
        onBlur={() => runValidationTasks("groupImgUrl", groupImgUrl)}
        errorMessage={errors.groupImgUrl?.errorMessage}
        hasError={errors.groupImgUrl?.hasError}
        {...getOverrideProps(overrides, "groupImgUrl")}
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
          isDisabled={!(idProp || groupModelProp)}
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
              !(idProp || groupModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
