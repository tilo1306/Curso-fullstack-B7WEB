import React from 'react';
import {
  Container,
  WorkoutInfo,
  WorkoutActions,
  WorkoutTitle,
  MuscleScroll,
  WorkoutButton,
  WorkoutButtonImage,
} from './styled';

export const Workout = props => {
  return (
    <Container>
      <WorkoutInfo>
        <WorkoutTitle>{props.data.name}</WorkoutTitle>
        <MuscleScroll horizontal={true} />
      </WorkoutInfo>
      <WorkoutActions>
        <WorkoutButton>
          <WorkoutButtonImage />
        </WorkoutButton>
      </WorkoutActions>
    </Container>
  );
};
