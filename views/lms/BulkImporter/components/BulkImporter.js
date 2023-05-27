import React, { forwardRef, useState } from 'react';
import { Input, Card, Upload } from 'components/ui';

import style from '../../../../styles/Home.module.css';
import { HiOutlineTrash } from 'react-icons/hi';
import { Button } from 'components/ui';

const BulkImporter = forwardRef((props, ref) => {
  const { mode } = props;

  const [cards, setCards] = useState([{ id: 1, heading: 'Chapter 1' }]);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const newPdfLesson = (id, heading, onDelete, onUpload) => {
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
        <Upload draggable className="hover:border-yellow-900 border-yellow-600">
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
      id: Math.random() * 12.34324,
      heading: `Chapter ${cards.length + 1}`,
    };
    setCards([...cards, newCard]);
  };

  const cardsDisplay = () => {
    return cards.map((card) => newPdfLesson(card.id, card.heading));
  };

  return (
    <>
      <div className="p-4">
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
    </>
  );
});

BulkImporter.defaultProps = {
  mail: {},
  mode: 'new',
};

export default BulkImporter;
