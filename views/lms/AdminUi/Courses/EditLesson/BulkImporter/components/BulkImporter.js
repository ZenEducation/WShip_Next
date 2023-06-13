import React, { forwardRef, useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import { Input, Card, Upload } from 'components/ui';

import style from '../../../../../../../styles/Home.module.css';

import SelectedLessonPage from '../../SelectedLessonPage/index';

import { HiOutlineTrash } from 'react-icons/hi';
import { Button } from 'components/ui';
import FileItem from '@/components/ui/Upload/FileItem';
import { AiOutlineGlobal, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

import CurrAndBulkSideBar from '../../Curriculum/components/CurrAndBulkSideBar';

import LessonsOptions from '../../LessonsOptions/index';

const BulkImporter = forwardRef((props, ref) => {
  const { mode } = props;

  // const { cards, setCards } = useContext(CardsContext);

  const { tabMenu, setTabMenu } = useContext(CardsContext);
  const { LessonsOptionTab, setLessonsOptionTab } = useContext(CardsContext);

  const { curriculumAndCards, setCurriculumAndCards } =
    useContext(CardsContext);

  const { lessonFrom, setLessonFrom } = useContext(CardsContext);

  const { sideBar, setSideBar } = useContext(CardsContext);

  const handleDelete = (id) => {
    // setCards(cards.filter((card) => card.id !== id));

    setCurriculumAndCards(curriculumAndCards.filter((card) => card.id !== id));
  };

  const handleUploadChange = (id, updatedFiles) => {
    // const updatedCards = cards.map((card) => {
    //   if (card.id === id) {
    //     return { ...card, uploads: updatedFiles };
    //   }
    //   return card;
    // });

    const updatedBulk = curriculumAndCards.map((card) => {
      if (card.id === id) {
        return { ...card, uploads: updatedFiles };
      }
      return card;
    });

    // setCards(updatedCards);
    setCurriculumAndCards(updatedBulk);
  };
  // fileList
  const newPdfLesson = (id, heading, onUploadChange, card) => {
    const onHeadingChange = (e) => {
      const value = e.target.value;

      // const newHeadingCards = cards.map((eachCard) => {
      //   if (eachCard.id === id) {
      //     eachCard.heading = value;
      //     return eachCard;
      //   }
      //   return eachCard;
      // });

      curriculumAndCards;

      const newHeadingBulk = curriculumAndCards.map((eachCard) => {
        if (eachCard.id === id) {
          eachCard.heading = value;
          return eachCard;
        }
        return eachCard;
      });
      // setCards(newHeadingCards);
      setCurriculumAndCards(newHeadingBulk);
    };

    const onDelteBtn = () => {
      handleDelete(id);
    };

    return (
      <Card key={id} className="mb-5 ">
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
          fileList={card.uploads}
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
            <div>
              <p className=" mt-5 p-4 pl-auto bg-colour-yellow text-yellow-600 mt-2 opacity-20 dark:text-white">
                You can upload files with the extensions: 3g2, 3gp, 3gpp, 3gpp2,
                asf, asx, avi, dv, f4p, f4v, flv, mjpeg, mjpg, mkv, mov, movie,
                mp2, mp3g, mp4, mpe, mpeg, mpg, mpg4, ogg, ogv, ogx, qt, rm,
                viv, vivo, webm, wm, wmv, wmx, wvx, m4v, aac, mp2, mp3, mpga,
                ogg, wav, m4a, pdf
              </p>
            </div>
          </div>
        </Upload>
      </Card>
    );
  };

  const handleAddChapter = () => {
    const newCard = {
      id: uuidv4(),
      heading: `Chapter ${curriculumAndCards.length + 1}`,
      uploads: [],
      lessons: [
        {
          id: uuidv4(),
          lessonHeading: 'New Quiz Lesson',
          lessonContent: [
            {
              id: uuidv4(),
              question: 'What is your question?',
              questionType: 'one',
              choices: [
                { id: uuidv4(), choice: 'Yes' },
                { id: uuidv4(), choice: 'No' },
              ],
              explanation: '',
            },
          ],
          type: 'Quiz',
        },
      ],
      type: 'bulkImporter',
    };

    // setCards([...cards, newCard]);
    setCurriculumAndCards([...curriculumAndCards, newCard]);
  };

  const cardsDisplay = () => {
    const bulkImporterCards = curriculumAndCards.filter(
      (eachCard) => eachCard.type === 'bulkImporter'
    );
    // return cards.map((card) =>
    //   newPdfLesson(card.id, card.heading, handleUploadChange, card)
    // );

    return bulkImporterCards.map((card) =>
      newPdfLesson(card.id, card.heading, handleUploadChange, card)
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

  const onSideBarClose = () => {
    // setSideBar(!sideBar);

    setTimeout(() => {
      setSideBar(!sideBar);
    }, 100);
  };

  return (
    <div className="flex">
      {/* <div className="">
        <div className="sidebar">{cardsDisplaySideBar()}</div>

        <Card className="flex fixed-card mt-3">
          <Button
            size="sm"
            className="mr-2 pr-5 pl-5 w-60 "
            variant="solid"
            // block="true"
            color="blue-900">
            ADD CHAPTER
          </Button>

          <Button size="sm" className=" " variant="solid" color="blue-900">
            <BsThreeDotsVertical />
          </Button>
        </Card>
      </div> */}
      {sideBar && <CurrAndBulkSideBar />}

      {LessonsOptionTab === 'BulkImporter' && (
        <div className="ml-2 orderFlex">
          <Button
            size="sm"
            onClick={onSideBarClose}
            className="mb-2 mt-2  mr-3">
            <BsThreeDotsVertical className="text-xl mb-2" />
          </Button>
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

            <Button
              className="mr-2  mb-1 mt-1"
              variant="solid"
              color="blue-900">
              SAVE
            </Button>
          </div>
        </div>
      )}

      {LessonsOptionTab === 'LessonsOptionTab' && (
        <div className="ml-2 orderFlex">
          <Button
            size="sm"
            onClick={onSideBarClose}
            className="mb-2 mt-2  mr-3">
            <BsThreeDotsVertical className="text-xl mb-2" />
          </Button>
          <LessonsOptions lessonFrom={lessonFrom} />
        </div>
      )}

      {LessonsOptionTab === 'ShowLessonPage' && (
        <div className="ml-2 orderFlex">
          <Button
            size="sm"
            onClick={onSideBarClose}
            className="mb-2 mt-2  mr-3">
            <BsThreeDotsVertical className="text-xl mb-2" />
          </Button>
          <SelectedLessonPage />
        </div>
      )}
    </div>
  );
});

BulkImporter.defaultProps = {
  mail: {},
  mode: 'new',
};

export default BulkImporter;
