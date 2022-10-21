import React from 'react';
import {Container, HeaderText, NameInput, NextButton} from './styled';
import {connect} from 'react-redux';
import {Alert} from 'react-native';
import {produceWithPatches} from 'immer';
import {NavigationActions} from 'react-navigation';

const Page = props => {
  const nextAction = () => {
    if (!props.name) {
      Alert.alert('Você precisa de um nome!');
      return;
    }
    props.navigation.navigate('StarterDias');
  };
  const handleChangeName = t => {
    props.setName(t);
    props.navigation.setParams({name: t});
  };
  return (
    <Container>
      <HeaderText>Qual é o seu nome?</HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      Alert.alert('Você precisa de um nome!');
      return;
    }
    navigation.navigate('StarterDias');
  };
  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);
