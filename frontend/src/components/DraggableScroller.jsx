// DraggableScroller.jsx

import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useDraggable } from '../pages/useDraggable';

const Container = styled.div`
  display: flex;
  overflow: scroll;
  max-width: ${(props) => props.maxWidth || '100%'};
`;

const DraggableScroller = ({ children, maxWidth, style }) => {
  const containerRef = useRef(null);
  const events = useDraggable(containerRef);

  return (
    <Container
      maxWidth={maxWidth}
      style={style}
      ref={containerRef}
      {...events}
    >
      {children}
    </Container>
  );
};

export default DraggableScroller;

