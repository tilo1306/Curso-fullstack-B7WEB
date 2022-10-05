import React from 'react';
import {
  Container,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImage,
  CloseButton,
  CloseButtonImage,
} from './styles';
import {useAppSelector, useAppDispatch} from '../../hooks/hooksRedux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Alert} from 'react-native';

export const EditNoteScreen = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [status, setStatus] = React.useState('new');

  interface Routes {
    [key: string]: any | undefined;
    key: string;
    name: string;
    path?: string | undefined;
  }

  const navigation = useNavigation();
  const route = useRoute<Routes>();
  const dispatch = useAppDispatch();
  const list = useAppSelector(state => state.notes.list);

  React.useEffect(() => {
    if (route.params?.key !== undefined && list[route.params?.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Nova Anotação' : 'Editar Anotação',
      headerLeft: () => (
        <CloseButton underlayColor="transparent" onPress={handleCloseButton}>
          <CloseButtonImage source={require('../../assets/close.png')} />
        </CloseButton>
      ),
      headerRight: () => (
        <SaveButton underlayColor="transparent" onPress={handleSaveButton}>
          <SaveButtonImage source={require('../../assets/save.png')} />
        </SaveButton>
      ),
    });
  }, [status, title, body]);

  const handleSaveButton = () => {
    if (title !== '' && body !== '') {
    } else {
      Alert.alert('Preencha Titulo e corpo!');
    }
  };

  const handleCloseButton = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={t => setTitle(t)}
        placeholder="Digite o título da anotação"
        placeholderTextColor="#CCC"
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={t => setBody(t)}
        placeholder="Digite o corpo da anotação"
        placeholderTextColor="#CCC"
        multiline={true}
        textAlignVertical="top"
      />
    </Container>
  );
};
