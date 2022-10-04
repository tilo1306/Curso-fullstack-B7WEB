import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../hooks/hooksRedux';
import {
  Container,
  AddButton,
  AddButtonImage,
  NoteList,
  NoNotes,
  NoNotesImage,
  NoNotesText,
} from './styles';
import {NoteItem} from '../../components/NoteItem';

export const ListScreen = () => {
  const navigation = useNavigation();
  const list = useAppSelector(state => state.notes.list);

  const handleNotePress = (index: number) => {
    navigation.navigate(
      'EditNote' as never,
      {
        key: index,
      } as never,
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerRight: () => (
        <AddButton
          underlayColor="transparent"
          onPress={() => {
            navigation.navigate('EditNote' as never);
          }}>
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, []);
  return (
    <Container>
      {list.length > 0 && (
        <NoteList<React.ElementType>
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      {list.length === 0 && (
        <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
