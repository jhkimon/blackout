// CardSelect.jsx

import React from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 354px;
  height: 530px;
  margin: 8px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 16px;
  gap: 16px;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
`;

const CardSelect = ({ totalCards = 20, onSelect }) => {
  const handleClick = (id) => {
    if (onSelect) {
      onSelect(id);
    }
  };

  return (
    <CardsWrapper>
      {[...Array(totalCards)].map((_, index) => (
        <CardContainer key={index} onClick={() => handleClick(index)}>
          Card {index + 1}
        </CardContainer>
      ))}
    </CardsWrapper>
  );
};

export default CardSelect;
