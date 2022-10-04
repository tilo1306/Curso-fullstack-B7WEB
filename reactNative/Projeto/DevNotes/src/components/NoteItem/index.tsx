import React from 'react';
import {Box, Title} from './styles';

interface Props {
  data: {title: string; body: string};
  index: number;
  onPress: (index: number) => void;
}

export const NoteItem = ({data, index, onPress}: Props) => {
  return (
    <Box onPress={() => onPress(index)}>
      <Title>{data.title}</Title>
    </Box>
  );
};
