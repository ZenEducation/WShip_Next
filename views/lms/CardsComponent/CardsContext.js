// CardsContext.js
import React, { useState } from 'react';

const CardsContext = React.createContext();

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([
    { id: 1, heading: 'Chapter 1', uploads: [], type: 'bulkImporter' },
  ]);

  const [curriculumAndCards, setCurriculumAndCards] = useState([
    { id: 1, heading: 'Chapter 1', uploads: [], type: 'bulkImporter' },
    { id: 2, name: 'Untitled chapter 1', type: 'curriculum' },
  ]);

  const [curriculumValue, setCurriculumValue] = useState([
    { id: 2, name: 'Untitled chapter 1', type: 'curriculum' },
    { id: 3, name: 'Untitled chapter 2', type: 'curriculum' },
    { id: 4, name: 'Untitled chapter 3', type: 'curriculum' },
  ]);

  const currVal = curriculumAndCards.filter(
    (eachCard) => eachCard.type === 'curriculum'
  );

  const [selectedCard, setSelectedCard] = useState(currVal[0]);

  const [inputVal, setInputVal] = useState('');

  const [tabMenu, setTabMenu] = useState('Curriculum');

  const [sideBar, setSideBar] = useState(true);

  const [LessonsOptionTab, setLessonsOptionTab] = useState('Curriculum');

  return (
    <CardsContext.Provider
      value={{
        cards,
        setCards,
        curriculumValue,
        setCurriculumValue,
        curriculumAndCards,
        setCurriculumAndCards,
        selectedCard,
        setSelectedCard,
        inputVal,
        setInputVal,
        tabMenu,
        setTabMenu,
        LessonsOptionTab,
        setLessonsOptionTab,
        sideBar,
        setSideBar,
      }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider, CardsContext };
