import React, { useState } from 'react';

import { Input, Upload, Card, Checkbox, Dialog, Button } from 'components/AfterAuth/ui';

import DpUpload from 'components/AfterAuth/ui/Upload/DpUpload';

import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiInfo } from 'react-icons/fi';
import { HiOutlineTrash } from 'react-icons/hi';

// Settings

const CourseImgDescription = () => {
  const [dialogIsOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const onDialogClose = (e) => {
    console.log('onDialogClose', e);
    setIsOpen(false);
  };

  const onDialogOk = (e) => {
    console.log('onDialogOk', e);
    setIsOpen(false);
  };

  const [image, setImage] = useState(null);
  console.log('image', image);
  const [modalOpen, setModalOpen] = useState(false);
  console.log('modalOpen', modalOpen);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log('handleImageUpload', file);
    const reader = new FileReader();
    console.log('reader', reader.result);

    reader.onload = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    //   setModalOpen(true);
  };

  const handleDeleteClick = () => {
    setImage(null);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onUploadChange = (updatedFiles) => {
    console.log('updatedFiles', updatedFiles['0']);
    const file = updatedFiles['0'];
    if (file !== undefined) {
      const reader = new FileReader();
      console.log('reader', reader.result);

      reader.onload = () => {
        setImage(reader.result);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setImage(null);
    }
  };

  const dummyFunc = () => {
    console.log('IMAGE FUNC');
  };

  return (
    <>
      <Card className="mb-5">
        <div className="flexWrap  mb-2">
          <h4>Course image & description</h4>
          <div className="flexWrap">
            <Button
              className="mr-2  mb-1 mt-1"
              variant="solid"
              color="blue-900"
              onClick={dummyFunc}>
              SAVE
            </Button>
          </div>
        </div>
        <div className="flexWrap ">
          <div>
            <div className="flex  items-center  mt-4 mb-1">
              <h6 className="">Course Image</h6>
              <FiInfo className="text-xl ml-2 step-clickable" />
            </div>
            <p>Suggested Dimensions: 760x420px</p>
          </div>
          <div className="m-3 mb-4">
            <div className=" dp-image-container">
              {image ? (
                <>
                  <button onClick={() => openDialog()}>
                    <img
                      className="dp-image-container"
                      src={image}
                      alt="Uploaded"
                      onClick={handleImageClick}
                    />
                  </button>
                  <div className="flex flexWrap-end">
                    <Button
                      variant="twoTone"
                      color="rose-600"
                      size="xs"
                      className="w-10 text-center "
                      onClick={handleDeleteClick}>
                      {' '}
                      <HiOutlineTrash />
                    </Button>
                  </div>

                  {/* {modalOpen && (
                    <div className="modal">
                      <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                          &times;
                        </span>
                        <img className="w-80" src={image} alt="Uploaded" />
                      </div>
                    </div>
                  )} */}
                </>
              ) : (
                <div>
                  <DpUpload
                    allowedFileTypes={[
                      'jpeg',
                      'jpg',
                      'png',
                      'gif',
                      'bmp',
                      'svg',
                      'psd',
                      'ai',
                      'eps',
                      'webp',
                      'ico',
                      'raw',
                      'heic',
                      'exr',
                    ]}
                    onUploadChange={(files) => onUploadChange(files)}
                    uploadSingleFiles="true"
                    className="bg-gray-600 border-gray-600 w-60"
                    draggable>
                    <div className="text-center ">
                      <div className="avatar-icon mt-3">
                        <img
                          src="https://openclipart.org/image/2400px/svg_to_png/278691/teaching.png"
                          className="avatar-inner-lg "
                        />
                      </div>

                      <p className="mt-2 p-4 text-center  bg-gray-800 text-white mt-2 opacity-20 dark:text-white">
                        You can upload files
                        {/* <HiOutlineTrash /> */}
                      </p>
                    </div>
                  </DpUpload>
                </div>
              )}
            </div>

            <Dialog
              isOpen={dialogIsOpen}
              onClose={onDialogClose}
              onRequestClose={onDialogClose}
              // width={1000}
              // height={250}
              shouldCloseOnOverlayClick={false}
              shouldCloseOnEsc={false}>
              <div className="flex flex-col h-full justify-between">
                <h5 className="mb-4">Display picture</h5>
                <img className="h-80" src={image} alt="Uploaded" />

                <div className="text-right mt-6">
                  {/* <Button
                    className="ltr:mr-2 rtl:ml-2"
                    variant="plain"
                    onClick={onDialogClose}>
                    Cancel
                  </Button> */}
                  <Button variant="solid" onClick={onDialogOk}>
                    Okay
                  </Button>
                </div>
              </div>
            </Dialog>
          </div>
        </div>

        <div className="flex  items-center  mt-4 mb-1">
          <h6 className="">Course description</h6>
          <FiInfo className="text-xl ml-2 step-clickable" />
        </div>
        <p>Include a brief description of your course. Max 250 characters.</p>
        <Input className="mt-3" textArea placeholder="Course description" />
      </Card>
    </>
  );
};

export default CourseImgDescription;
