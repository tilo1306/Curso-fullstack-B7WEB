import React from 'react';
import {useMuscleImage} from '../UsemuscleImage';
import {
  Container,
  WorkoutInfo,
  WorkoutActions,
  WorkoutTitle,
  MuscleScroll,
  WorkoutButton,
  WorkoutButtonImage,
  MuscleGroup,
  MuscleImage,
} from './styled';

export const Workout = props => {
  const muscleGroups = [];
  for (const key in props.data.exercises) {
    if (!muscleGroups.includes(props.data.exercises[key].muscle)) {
      muscleGroups.push(props.data.exercises[key].muscle);
    }
  }
  return (
    <Container>
      <WorkoutInfo>
        <WorkoutTitle>{props.data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true}>
          {muscleGroups.map((m, index) => {
            <MuscleGroup key={index}>
              <MuscleImage source={useMuscleImage(m)} />
            </MuscleGroup>;
          })}
        </MuscleScroll>
      </WorkoutInfo>
      <WorkoutActions>
        <WorkoutButton>
          <WorkoutButtonImage source={require('../../assets/add.png')} />
        </WorkoutButton>
      </WorkoutActions>
    </Container>
  );
};
