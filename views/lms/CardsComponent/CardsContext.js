// CardsContext.js
import React, { useState } from 'react';

const CardsContext = React.createContext();

const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([
    { id: 1, heading: 'Chapter 1', uploads: [] },
  ]);

  const [curriculumValue, setCurriculumValue] = useState('Untitled chapter');
  console.log('curriculumValue', curriculumValue);

  return (
    <CardsContext.Provider
      value={{ cards, setCards, curriculumValue, setCurriculumValue }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider, CardsContext };
