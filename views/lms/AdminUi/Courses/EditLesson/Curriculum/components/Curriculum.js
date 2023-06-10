import React, { useContext, useState } from 'react';

import { CardsContext } from '../../../../../CardsComponent/CardsContext';

import { Input, Card, Checkbox, Radio } from 'components/ui';

import Notification from 'components/ui/Notification/';

import toast from 'components/ui/toast';

import { Button } from 'components/ui';
import { AiOutlineGlobal, AiOutlinePlus } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import FileItem from '@/components/ui/Upload/FileItem';

import CurrAndBulkSideBar from './CurrAndBulkSideBar';

import LessonsOptions from '../../LessonsOptions/index';

import { setSideNavCollapse } from 'store/theme/themeSlice';

import { useDispatch, useSelector } from 'react-redux';

// Curriculum

const Curriculum = () => {
  const { curriculumValue, setCurriculumValue } = useContext(CardsContext);

  const { tabMenu, setTabMenu } = useContext(CardsContext);

  const { LessonsOptionTab, setLessonsOptionTab } = useContext(CardsContext);

  const { curriculumAndCards, setCurriculumAndCards } =
    useContext(CardsContext);

  const { selectedCard, setSelectedCard } = useContext(CardsContext);

  const { sideBar, setSideBar } = useContext(CardsContext);

  const currVal = curriculumAndCards.filter(
    (eachCard) => eachCard.type === 'curriculum'
  );

  //   const [curriculumValue, setCurriculumValue] = useState('Untitled chapter');
  // const [selectedCard, setSelectedCard] = useState(currVal[0]);

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
    setSelectedCard(eachCard);
    setInputVal('');
  };

  const cardsDisplaySideBar = (eachCard) => {
    // console.log('eachCardCart', cardsList);
    return (
      <Card
        onClick={() => {
          onSelectCurr(eachCard);
        }}
        key={eachCard.id}
        className="mb-2 cursor-pointer">
        <h5 className="mb-2">{eachCard.name}</h5>
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

  const displayEachUpload = (eachUpload) => {
    return (
      <div className="upload-file-list">
        {eachUpload.map((file, index) => (
          <FileItem file={file} key={file.name + index}></FileItem>
        ))}
      </div>
    );
  };

  const BulkImpSideBar = (cardsList) => {
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
      id: Math.random() * Math.random() * Math.random(),
      name: `Untitled chapter ${curriculumAndCards.length + 1}`,
      type: 'curriculum',
    };

    setCurriculumAndCards([...curriculumAndCards, newCuruculumCard]);
    setSelectedCard(newCuruculumCard);
  };

  const curruculamSideBarDisplay = () => {
    return (
      <div className="align-stretch" style={{ minWidth: 345, maxWidth: 335 }}>
        <div className="sidebar">{curruculamSideBarcards()}</div>

        <Card className="flex fixed-card mt-3">
          <Button
            onClick={handleAddChapter}
            size="sm"
            className="mr-2 pr-5 pl-5 w-60 "
            variant="solid"
            //block="true"
            color="blue-900">
            ADD CHAPTER
          </Button>

          <Button size="sm" className=" " variant="solid" color="blue-900">
            <BsThreeDotsVertical />
          </Button>
        </Card>
      </div>
    );
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

  const sideNavCollapse = useSelector(
    (state) => state.theme.layout.sideNavCollapse
  );

  const dispatch = useDispatch();

  const onCollapse = () => {
    dispatch(setSideNavCollapse(!sideNavCollapse));
  };

  const onSideBarClose = () => {
    // setSideBar(!sideBar);

    setTimeout(() => {
      setSideBar(!sideBar);
    }, 100);
  };

  return (
    <div className="flex ">
      {sideBar && <CurrAndBulkSideBar />}
      {/* {curruculamSideBarDisplay()} */}
      {LessonsOptionTab !== 'LessonsOptionTab' && (
        <div className="ml-2 orderFlex">
          <div className="flexWrap  pt-1 pb-2  ">
            <div className="flexWrap">
              <Button
                size="sm"
                onClick={onSideBarClose}
                className="mb-2 mt-2  mr-3">
                <BsThreeDotsVertical className="text-xl mb-2" />
              </Button>
              <h5>New Chapter: {selectedCard.name}</h5>
            </div>

            {/* {selectedCard.name} */}
            <div className="">
              <Button size="sm" className="mr-2  mb-1 mt-1 text-blue-900">
                DISCARD CHANGES
              </Button>

              <Button
                className="mr-2  mb-1 mt-1"
                variant="solid"
                color="blue-900"
                size="sm"
                onClick={onSaveBtn}>
                SAVE
              </Button>
            </div>
          </div>
          <Card>
            <div className="mb-s">
              <h6>Course name</h6>
              <Input
                value={inputVal}
                onChange={onLessonHeading}
                className=""
                placeholder="My Chapter"
              />
            </div>

            <div className="mt-4"></div>
          </Card>
        </div>
      )}

      {LessonsOptionTab === 'LessonsOptionTab' && (
        <div className="ml-2">
          <Button
            size="sm"
            onClick={onSideBarClose}
            className="mb-2 mt-2  mr-3">
            <BsThreeDotsVertical className="text-xl mb-2" />
          </Button>
          <LessonsOptions />
        </div>
      )}
    </div>
  );
};

export default Curriculum;
