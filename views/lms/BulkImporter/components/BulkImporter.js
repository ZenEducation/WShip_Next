import React, { forwardRef, useContext, useState } from 'react';

import { CardsContext } from '../../CardsComponent/CardsContext';

import { Input, Card, Upload } from 'components/ui';

import style from '../../../../styles/Home.module.css';
import { HiOutlineTrash } from 'react-icons/hi';
import { Button } from 'components/ui';
import FileItem from '@/components/ui/Upload/FileItem';
import { AiOutlineGlobal, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const BulkImporter = forwardRef((props, ref) => {
  const { mode } = props;

  // const [cards, setCards] = useState([
  //   { id: 1, heading: 'Chapter 1', uploads: [] },
  // ]);

  const { cards, setCards } = useContext(CardsContext);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleUploadChange = (id, updatedFiles) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, uploads: updatedFiles };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const newPdfLesson = (id, heading, onUploadChange) => {
    const onHeadingChange = (e) => {
      const value = e.target.value;

      const newHeadingCards = cards.map((eachCard) => {
        if (eachCard.id === id) {
          eachCard.heading = value;
          return eachCard;
        }
        return eachCard;
      });
      setCards(newHeadingCards);
    };

    const onDelteBtn = () => {
      handleDelete(id);
    };

    return (
      <Card key={id} className="mb-5">
        <div className="flex justify-between mb-5">
          <Input
            placeholder="New Lesson"
            onChange={onHeadingChange}
            value={heading}
          />
          <Button onClick={onDelteBtn} className="ml-3">
            <HiOutlineTrash />
          </Button>
        </div>
        <Upload
          notAllowedFileTypes={[
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
          onUploadChange={(files) => onUploadChange(id, files)}
          draggable
          className="hover:border-yellow-900 border-yellow-600">
          <div className="mt-5 text-center">
            <p className="mt-2 font-semibold">
              <span className=" text-yellow-600 dark:text-white">
                Drag & drop video, audio,& PDF files here
              </span>
              <br />
              <span className="text-yellow-600 dark:text-white">or</span>
            </p>
            <Button
              className="mt-3 mb-4 p-3 pl-5 pr-5"
              variant="solid"
              color="blue-900">
              SELECT FILE
            </Button>

            <p className="mt-5 p-4 pl-auto bg-colour-yellow text-yellow-600 mt-2 opacity-20 dark:text-white">
              You can upload files with the extensions: pdf, ppt, doc, docx,
              xls, xlsx, txt, odt, odp, ods, csv, rtf, html, xml, epub, jpg,
              jpeg, png, gif, mp3, mp4, zip, rar, psd, ai, indd, svg, cdr, dwg,
              tif, bmp, pub, vsd, xps, wps, md, tex, odg, ott, otp, odb, odf,
              odm, xlsb, ods, csv, pptm, potx, potm, ppam, ppsx, ppsm, sldx,
              sldm, thmx, xltx, xltm, xlam, xlsx, xlsm, docm, dotx, dotm, one,
              onetoc2, onetmp, onepkg.
            </p>
          </div>
        </Upload>
      </Card>
    );
  };

  const handleAddChapter = () => {
    const newCard = {
      id: Math.random() * Math.random(),
      heading: `Chapter ${cards.length + 1}`,
      uploads: [],
    };

    setCards([...cards, newCard]);
  };

  const cardsDisplay = () => {
    return cards.map((card) =>
      newPdfLesson(card.id, card.heading, handleUploadChange)
    );
  };

  const displayEachUpload = (eachUpload) => {
    return (
      <div className="upload-file-list">
        {eachUpload.map((file, index) => (
          <FileItem file={file} key={file.name + index}></FileItem>
        ))}
      </div>
    );
  };

  const eachCardCart = (cardsList) => {
    return (
      <Card
        key={cardsList.id}
        className="mb-2"
        style={{ minWidth: 335, maxWidth: 335 }}>
        <h5 className="mb-2">{cardsList.heading}</h5>
        {displayEachUpload(cardsList.uploads)}
        <div className="flexWrap">
          <Button
            size="xs"
            className="mr-2 flexWrap mb-1 mt-1"
            variant="solid"
            color="blue-900">
            <AiOutlinePlus className="text-xl mr-1" />
            ADD LESSON
          </Button>
          <Button size="xs" className="mr-2  mb-1 mt-1 text-blue-900">
            COPY LESSON FROM
          </Button>
        </div>
      </Card>
    );
  };

  const cardsDisplaySideBar = () => {
    return cards.map((eachCard) => eachCardCart(eachCard));
  };

  return (
    <div className="flex">
      <div className="">
        <div className="sidebar">
          {cardsDisplaySideBar()}
          <h6 className="flex items-center">
            <AiOutlineGlobal className="text-xl mr-1" /> Pro Tip
          </h6>
          <p>
            You can customize the course completion experience with a
            certificate or a custom completion page!
          </p>
        </div>

        <Card className="flex fixed-card mt-3">
          <Button
            size="sm"
            className="mr-2 pr-5 pl-5 w-60 "
            variant="solid"
            // block="true"
            color="blue-900">
            ADD LESSON
          </Button>

          <Button size="sm" className=" " variant="solid" color="blue-900">
            <BsThreeDotsVertical />
          </Button>
        </Card>
      </div>

      <div className="ml-2">
        <div>
          {cardsDisplay()}

          <Button
            onClick={handleAddChapter}
            className="mr-2  mb-1 mt-1 text-blue-900">
            ADD CHAPTER
          </Button>
        </div>

        <div className={`${style['flexWrap-end']} mt-3 mb-5`}>
          <Button className="mr-2  mb-1 mt-1 text-blue-900">
            DISCARD CHANGES
          </Button>

          <Button className="mr-2  mb-1 mt-1" variant="solid" color="blue-900">
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
});

BulkImporter.defaultProps = {
  mail: {},
  mode: 'new',
};

export default BulkImporter;
