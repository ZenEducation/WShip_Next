import React, { useRef, useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useConfig } from '../ConfigProvider';
import cloneDeep from 'lodash/cloneDeep';
import FileItem from './FileItem';
import Button from '../Buttons';
import CloseButton from '../CloseButton';
import Notification from '../Notification';
import toast from '../toast';
import { HiOutlineTrash } from 'react-icons/hi';

const filesToArray = (files) => Object.keys(files).map((key) => files[key]);

const Upload = React.forwardRef((props, ref) => {
  const {
    accept,
    beforeUpload,
    disabled,
    draggable,
    fileList,
    multiple,
    onChange,
    onFileRemove,
    showList,
    tip,
    uploadLimit,
    children,
    className,
    field,
    form,

    allowedFileTypes,
    notAllowedFileTypes,
    uploadSingleFiles,

    onUploadChange,

    ...rest
  } = props;

  const fileInputField = useRef(null);
  const [files, setFiles] = useState(fileList);

  const [dragOver, setDragOver] = useState(false);

  const { themeColor, primaryColorLevel } = useConfig();

  useEffect(() => {
    setFiles(fileList);
  }, [fileList]);

  const triggerMessage = (msg) => {
    toast.push(
      <Notification type="danger" duration={2000}>
        {msg || 'Upload Failed!'}
      </Notification>,
      {
        placement: 'top-center',
      }
    );
  };

  const pushFile = (newFiles, file) => {
    for (let f of newFiles) {
      file.push(f);
    }

    return file;
  };

  const addNewFiles = (newFiles) => {
    let file = cloneDeep(files);
    if (typeof uploadLimit === 'number' && uploadLimit !== 0) {
      if (Object.keys(file).length >= uploadLimit) {
        if (uploadLimit === 1) {
          file.shift();
          file = pushFile(newFiles, file);
        }

        return filesToArray({ ...file });
      }
    }
    file = pushFile(newFiles, file);

    let len = file.length - 1;
    if (uploadSingleFiles) {
      return filesToArray({ 0: file[len] });
    }

    return filesToArray({ ...file });
  };

  const isFileTypeAllowed = (file) => {
    const fileType = file.name.split('.').pop().toLowerCase();
    return allowedFileTypes.includes(fileType);
  };

  const isFileTypeNotAllowed = (file) => {
    const fileType = file.name.split('.').pop().toLowerCase();
    return notAllowedFileTypes.includes(fileType);
  };

  const onNewFileUpload = (e) => {
    const { files: newFiles } = e.target;

    if (allowedFileTypes !== undefined) {
      if (!isFileTypeAllowed(newFiles[0])) {
        triggerMessage('Invalid file type. Please upload a different file.');
        return;
      }
    }
    if (notAllowedFileTypes !== undefined) {
      if (isFileTypeNotAllowed(newFiles[0])) {
        triggerMessage('Invalid file type. Please upload a different file.');
        return;
      }
    }

    let result = true;

    if (beforeUpload) {
      result = beforeUpload(newFiles, files);

      if (result === false) {
        triggerMessage();
        return;
      }

      if (typeof result === 'string' && result.length > 0) {
        triggerMessage(result);
        return;
      }
    }

    if (result) {
      let updatedFiles = addNewFiles(newFiles);

      if (onUploadChange !== undefined) {
        onUploadChange?.(updatedFiles);
      }

      setFiles(updatedFiles);
      onChange?.(updatedFiles, files);
    }
  };

  const removeFile = (fileIndex) => {
    const deletedFileList = files.filter((_, index) => index !== fileIndex);
    setFiles(deletedFileList);

    if (onUploadChange !== undefined) {
      onUploadChange?.(deletedFileList);
    }

    onFileRemove?.(deletedFileList);
  };

  const triggerUpload = (e) => {
    if (!disabled) {
      fileInputField.current?.click();
    }
    e.stopPropagation();
  };

  const renderChildren = () => {
    if (!draggable && !children) {
      return (
        <Button disabled={disabled} onClick={(e) => e.preventDefault()}>
          Upload
        </Button>
      );
    }

    if (draggable && !children) {
      return <span>Choose a file or drag and drop here</span>;
    }

    return children;
  };

  const handleDragLeave = useCallback(() => {
    if (draggable) {
      setDragOver(false);
    }
  }, [draggable]);

  const handleDragOver = useCallback(() => {
    if (draggable && !disabled) {
      setDragOver(true);
    }
  }, [draggable, disabled]);

  const handleDrop = useCallback(() => {
    if (draggable) {
      setDragOver(false);
    }
  }, [draggable]);

  const draggableProp = {
    onDragLeave: handleDragLeave,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
  };

  const draggableEventFeedbackClass = `border-${themeColor}-${primaryColorLevel}`;

  const uploadClass = classNames(
    'upload',
    draggable && `upload-draggable`,
    draggable && !disabled && `hover:${draggableEventFeedbackClass}`,
    draggable && disabled && 'disabled',
    dragOver && draggableEventFeedbackClass,
    className
  );

  const uploadInputClass = classNames('upload-input', draggable && `draggable`);

  return (
    <>
      <div
        // onEventUpload={files}
        ref={ref}
        className={uploadClass}
        {...(draggable ? draggableProp : { onClick: triggerUpload })}
        {...rest}>
        <input
          className={uploadInputClass}
          type="file"
          ref={fileInputField}
          onChange={onNewFileUpload}
          disabled={disabled}
          multiple={multiple}
          accept={accept}
          title=""
          value=""
          {...field}
          {...rest}></input>
        {renderChildren()}
      </div>
      {tip}
      {console.log('tip', tip)}
      {console.log('showList', showList)}
      {console.log('files', files)}
      {showList && (
        <div className="upload-file-list">
          {files.map((file, index) => (
            <FileItem file={file} key={file.name + index}>
              <Button
                onClick={() => removeFile(index)}
                className="upload-file-remove upload-file-delete">
                <HiOutlineTrash />
              </Button>
            </FileItem>
          ))}
        </div>
      )}
    </>
  );
});

Upload.propTypes = {
  uploadLimit: PropTypes.number,
  draggable: PropTypes.bool,
  disabled: PropTypes.bool,
  showList: PropTypes.bool,
  multiple: PropTypes.bool,
  accept: PropTypes.string,
  tip: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Upload.defaultProps = {
  draggable: false,
  showList: true,
  disabled: false,
  fileList: [],
};

export default Upload;
