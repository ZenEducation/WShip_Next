import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import { Input, Card, Checkbox, Radio } from 'components/AfterAuth/ui';

import Notification from 'components/AfterAuth/ui/Notification/';

import toast from 'components/AfterAuth/ui/toast';

import FileItem from '@/components/AfterAuth/ui/Upload/FileItem';

import { Button } from 'components/AfterAuth/ui';
import { AiOutlineGlobal, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';

const CurrAndBulkSideBar = () => {
  // const { curriculumValue, setCurriculumValue } = useContext(CardsContext);

  const { tabMenu, setTabMenu } = useContext(CardsContext);
  const { LessonsOptionTab, setLessonsOptionTab } = useContext(CardsContext);
  const { selectedLesson, setSelectedLesson } = useContext(CardsContext);

  const { lessonFrom, setLessonFrom } = useContext(CardsContext);

  // console.log('lessonFrom', lessonFrom);

  const { curriculumAndCards, setCurriculumAndCards } =
    useContext(CardsContext);

  const { sideBar, setSideBar } = useContext(CardsContext);

  const { selectedCard, setSelectedCard } = useContext(CardsContext);

  const currVal = curriculumAndCards.filter(
    (eachCard) => eachCard.type === 'curriculum'
  );

  //   const [curriculumValue, setCurriculumValue] = useState('Untitled chapter');
  //   const [selectedCard, setSelectedCard] = useState(currVal[0]);

  const { inputVal, setInputVal } = useContext(CardsContext);

  // lessonHeading

  const onLessonHeading = (e) => {
    const value = e.target.value;

    let newName;

    if (value === '') {
      newName = 'Untitled chapter';
    } else {
      newName = value;
    }

    if (value === '') {
      setSelectedCard({ id: selectedCard.id, name: 'Untitled chapter' });
      setInputVal('');
    } else {
      setSelectedCard({ id: selectedCard.id, name: value });
      setInputVal(newName);
    }

    const changedChapter = curriculumAndCards.map((eachCard) => {
      if (eachCard.id !== selectedCard.id) {
        return eachCard;
      }
      return { id: eachCard.id, name: newName, type: 'curriculum' };
    });

    setCurriculumAndCards(changedChapter);
  };

  const onSelectCurr = (eachCard) => {
    console.log(' ON SELETE CHAPTER');
    setSelectedCard(eachCard);
    setInputVal('');
    setLessonsOptionTab('Curriculum');
    setTabMenu('Curriculum');
  };

  const onAddLesson = (eachCard) => {
    // console.log(' ON SELETE LESSON');

    setLessonFrom(eachCard);

    if (eachCard.type === 'curriculum') {
      setTabMenu('Curriculum');

      // setLessonsOptionTab('LessonsOptionTab');
    } else if (eachCard.type === 'bulkImporter') {
      setTabMenu('BulkImporter');
      setLessonsOptionTab('BulkImporter');

      // setLe
    }
    setLessonsOptionTab('LessonsOptionTab');
  };

  const cardsDisplaySideBar = (eachCard) => {
    // console.log('eachCardCart', cardsList);
    return (
      <Card
        onClick={() => {
          onSelectCurr(eachCard);
        }}
        key={eachCard.id}
        className="mb-2 cursor-pointer ">
        <h5 className="mb-2">{eachCard.name}</h5>
        {displayAddedLessons(eachCard.lessons)}
        <div className="flexWrap">
          <Button
            onClick={(event) => {
              event.stopPropagation(); // Prevent event propagation
              onAddLesson(eachCard);
            }}
            size="xs"
            className="mr-2 flex items-center mb-1 mt-1"
            variant="solid"
            color="blue-900">
            <AiOutlinePlus className="text-lg mr-1" />
            ADD LESSON
          </Button>
          <Button size="xs" className="mr-2  mb-1 mt-1 text-blue-900">
            COPY LESSON FROM
          </Button>
        </div>
      </Card>
    );
  };

  const displayEachUpload = (eachUpload) => {
    return (
      <div className="upload-file-list">
        {eachUpload.map((file, index) => {
          // console.log('file', file);
          return <FileItem file={file} key={file.name + index}></FileItem>;
        })}
      </div>
    );
  };

  const displayAddedLessons = (eachLesson, chapterType) => {
    // onClick={(event) => {
    //   event.stopPropagation(); // Prevent event propagation
    //   console.log('Lesson Clicked');
    //   setLessonsOptionTab('ShowLessonPage');
    // }}
    return (
      <div className="  upload-file-list">
        {eachLesson.map((lesson, index) => {
          const file = {
            ...lesson,
            name: lesson.lessonHeading,
          };
          return (
            <div
              className="cursor-pointer"
              key={lesson.id}
              onClick={(event) => {
                event.stopPropagation(); // Prevent event propagation
                // console.log('Lesson Clicked', lesson);
                setSelectedLesson({
                  lessonId: lesson.id,
                  lessonType: lesson.type,
                  isShowLesson: true,
                });
                if (chapterType === 'bulkImporter') {
                  setTabMenu('BulkImporter');
                } else {
                  setTabMenu('Curriculum');
                }
                setLessonsOptionTab('ShowLessonPage');
              }}>
              <FileItem
                file={file}
                onlyName={true}
                key={lesson.lessonHeading + index}></FileItem>
            </div>
          );
        })}
      </div>
    );
  };

  const BulkImpSideBar = (cardsList) => {
    return (
      <Card
        onClick={() => {
          console.log('Bulk importer Clicked');
          setTabMenu('BulkImporter');
          setLessonsOptionTab('BulkImporter');
        }}
        key={cardsList.id}
        className="mb-2 "
        // style={{ minWidth: 335, maxWidth: 335 }}
      >
        <h5 className="mb-2">{cardsList.name}</h5>
        {displayEachUpload(cardsList.uploads)}
        {displayAddedLessons(cardsList.lessons, cardsList.type)}
        <div className="flexWrap">
          <Button
            onClick={(event) => {
              event.stopPropagation(); // Prevent event propagation
              onAddLesson(cardsList);
            }}
            size="xs"
            className="mr-2 flex items-center mb-1 mt-1"
            variant="solid"
            color="blue-900">
            <AiOutlinePlus className="text-lg mr-1" />
            ADD LESSON
          </Button>
          <Button size="xs" className="mr-2  mb-1 mt-1 text-blue-900">
            COPY LESSON FROM
          </Button>
        </div>
      </Card>
    );
  };

  const curruculamSideBarcards = () => {
    return curriculumAndCards.map((eachCard) => {
      if (eachCard.type === 'curriculum') {
        return cardsDisplaySideBar(eachCard);
      }
      return BulkImpSideBar(eachCard);
    });
  };

  const handleAddChapter = () => {
    const newCuruculumCard = {
      id: uuidv4(),
      name: `Untitled chapter ${curriculumAndCards.length + 1}`,
      lessons: [],
      type: 'curriculum',
    };

    setCurriculumAndCards([...curriculumAndCards, newCuruculumCard]);
    setSelectedCard(newCuruculumCard);
    setLessonsOptionTab('Curriculum');

    setTabMenu('Curriculum');
  };

  const triggerMessage = (msg) => {
    toast.push(
      <Notification className="bg-green-200" type="success" duration={3000}>
        <h6>{msg || 'Successfully saved the chapter!'}</h6>
      </Notification>,
      {
        placement: 'top-center',
      }
    );
  };

  const onSaveBtn = () => {
    triggerMessage();
    setInputVal('');
  };

  //   style={{ minWidth: 345, maxWidth: 335 }}
  return (
    <div
      style={{ minWidth: 345, maxWidth: 335 }}
      className="align-stretch sidebae-width">
      {/* sidebae-width */}

      <div className="sidebar">{curruculamSideBarcards()}</div>

      <Card className=" fixed-card mt-3 ">
        <div className="flexWrap ">
          <Button
            onClick={handleAddChapter}
            size="xs"
            className="mr-2 pr-5 pl-5  orderFlex"
            variant="solid"
            //block="true"
            color="blue-900">
            ADD CHAPTER
          </Button>

          <Button size="xs" className="mt-2 " variant="solid" color="blue-900">
            <BsThreeDotsVertical />
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CurrAndBulkSideBar;
