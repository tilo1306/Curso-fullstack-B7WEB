import React from 'react';
import {Container, HeaderText, NextButton, WorkoutList} from './styled';
import {connect} from 'react-redux';
import {Alert, Text} from 'react-native';
import workoutJson from '../../presetWorkouts.json';
import {Workout} from '../../components/Workout';

interface IPresetWorkouts {
  id: string;
  name: string;
  exercises: [];
}

const NextButton = props => {
  let btnTitle = 'Ignorar';
  if (
    props.navigation.state.params &&
    props.navigation.state.params.hasWorkout
  ) {
    btnTitle = 'Concluir';
  }

  const nextAction = () => {
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'AppTab'})]
      }),
    );
  };;

  return <Button title={btnTitle} onPress={nextAction} />;
};;

const StarterRecommendations = props => {
  const addWorkout = item => {
    if (props.myWorkouts.findIndex(i => i.id == item.id) < 0) {
      props.addWorkout(item);
    } else {
      props.delWorkout(item);
    }
  };;

  useEffect(() => {
    if  (props.myWorkouts.length > 0) {
      props.navigation.setParams({hasWorkout: true});
    } else {
      props.navigation.setParams({hasWorkout: false});
    }
  }, [props.myWorkouts]);

  return (
    <Container>
      <HeaderText>
        Opções de treino pré-criados com base no seu nível.
      </HeaderText>
      <HeaderText>Você selecionou {props.myWorkouts.length} treinos</HeaderText>
      <WorkoutList
        data={workoutJson}
        renderItem={({item}) => (
          <Workout data={item} addAction={() => addWorkout(item)} />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

Page.navigationOptions = ({navigation}) => {
  return {
    title: '',
    headerRight: <NextButton navigation={navigation} />,
    headerRightContainerStyle: {
      marginRight: 10,,
    },,
  };
};

const mapStateToProps = state => {
  return {
    level: state.userReducer.level,
    myWorkouts: state.userReducer.myWorkouts,,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addWorkout: workout => addWorkout(workout, dispatch),
    delWorkout: workout => delWorkout(workout, dispatch),,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
