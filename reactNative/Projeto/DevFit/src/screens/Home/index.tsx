import React from 'react';
import {connect} from 'react-redux';
import {
  ConfigButtonArea,
  ConfigButtonImage,
  PageContainer,
  Legend,
  LegendItem,
  LegendBox,
  LegendText,
} from './styled';
import MonthScroll from '../components/MonthScroll';
import DaysScroll from '../components/DaysScroll';
import DayStatus from '../components/DayStatus';
import { addProgress, delProgress } from '../actions/userActions';

const ConfigButton = props => {
  const btnAction = () => {
    props.navigation.navigate('HomeConfig');
  };;
  return (
    <ConfigButtonArea onPress={btnAction} underlayColor="transparent">
      <ConfigButtonImage source={require('../assets/config.png')} />
    </ConfigButtonArea>
  );
};;

const Home = props => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const [selectedMonth, setSelectedMonth] = React.useState(currentMonth);
  const [selectedDay, setSelectedDay] = React.useState(currentDay);

  return (
    <PageContainer>
      <MonthScroll
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <DaysScroll
        workoutDays={props.workoutDays}
        dailyProgress={props.dailyProgress}
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <DayStatus
        workoutDays={props.workoutDays}
        dailyProgress={props.dailyProgress}
        selectedMonth={selectedMonth}
        selectedDay={selectedDay}
        addProgress={props.addProgress}
        delProgress={props.delProgress}
        goToWorkout={() => props.navigation.navigate('WorkoutStack')}
      />
      <Legend>
        <LegendText>Legenda:</LegendText>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#B5EEFF'}} />
          <LegendText>Hoje</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#B5FFB8'}} />
          <LegendText>Treino feito</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#FFB5B5'}} />
          <LegendText>Treino perdido</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox
            style={{backgroundColor: '#F4F4F4', opacity: 00.2}} />
          <LegendText>Dia de descanso</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendBox style={{backgroundColor: '#F4F4F4'}} />
          <LegendText>Dia futuro</LegendText>
        </LegendItem>
      </Legend>
    </PageContainer>
  );
};

Home.navigationOptions = ({navigation}) => {
  return {
    title: 'Seu progresso diário',
    headerRight: <ConfigButton navigation={navigation} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
} ;

const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
    dailyProgress: state.userReducer.dailyProgress,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProgress: date => addProgress(date, dispatch),
    delProgress: date => delProgress(date, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
