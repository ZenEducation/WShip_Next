import React from 'react';
import { VscFilePdf, VscFileZip, VscFile } from 'react-icons/vsc';

const BYTE = 1000;
const getKB = (bytes) => Math.round(bytes / BYTE);

const FileIcon = ({ children }) => {
  return <span className="text-4xl">{children}</span>;
};

const FileItem = (props) => {
  const { file, children, onlyName } = props;
  const { type, name, size } = file;

  const renderThumbnail = () => {
    const isImageFile = type.split('/')[0] === 'image';

    if (isImageFile) {
      return (
        <img
          className="upload-file-image"
          src={URL.createObjectURL(file)}
          alt={`file preview ${name}`}
        />
      );
    }

    if (type === 'application/zip') {
      return (
        <FileIcon>
          <VscFileZip />
        </FileIcon>
      );
    }

    if (type === 'application/pdf') {
      return (
        <FileIcon className="">
          <VscFilePdf />
        </FileIcon>
      );
    }

    return (
      <FileIcon>
        <VscFile className="file-icon-course" />
      </FileIcon>
    );
  };

  return (
    <div className="">
      {/* upload-file */}
      <div className="flex items-center">
        <div className=" mr-1 ml-1">{renderThumbnail()}</div>
        <div className="upload-file-info">
          <button className="upload-file-name text-black dark:text-white">
            {name}
          </button>
          {onlyName !== true && (
            <span className="upload-file-size">{getKB(size)} kb</span>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default FileItem;
