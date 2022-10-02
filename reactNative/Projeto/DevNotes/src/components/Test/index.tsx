import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from '../../hooks/hooksRedux';

export const Test: React.FunctionComponent = () => {
  const note = useAppSelector(state => state.note);
  return (
    <View>
      {note.list.map((p, index) => (
        <Text key={index}>{p.title}</Text>
      ))}
    </View>
  );
};
