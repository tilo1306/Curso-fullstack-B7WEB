import React, {useEffect, useState, useRef} from 'react';
import {Dimensions} from 'react-native';
import {MonthScroll, MonthButton, MonthItem, MonthText} from './styled';
const MonthItemSelected = {backgroundColor: '#CCC', width: '100%', height: 40};
const screenWidth = Math.round(Dimensions.get('window').width);
const thirdW = screenWidth / 3;
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

export const HomeMonthScroll = props => {
  const MonthRef = useRef();
  const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

  const scrollToMonth = m => {
    const posX = m * thirdW;
    MonthRef.current.scrollTo({x: posX, y: 0, animated: true});
  };

  const monthScrollEndAction = e => {
    const posX = e.nativeEvent.contentOffset.x;
    const targetMonth = Math.round(posX / thirdW);
    setSelectedMonth(targetMonth);
  };

  useEffect(() => {
    props.setSelectedMonth(selectedMonth);
  }, [selectedMonth]);

  useEffect(() => {
    setTimeout(() => {
      scrollToMonth(selectedMonth);
    }, 10);
  }, [props.selectedMonth]);

  return (
    <MonthScroll
      ref={MonthRef}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={thirdW}
      snapToAlignment="center"
      contentContainerStyle={{paddingLeft: thirdW, paddingRight: thirdW}}
      onMomentumScrollEnd={monthScrollEndAction}>
      {months.map((m, k) => (
        <MonthButton
          width={thirdW}
          key={k}
          onPress={() => setSelectedMonth(k)}
          underlayColor="transparent">
          <MonthItem style={k == selectedMonth ? MonthItemSelected : {}}>
            <MonthText>{m}</MonthText>
          </MonthItem>
        </MonthButton>
      ))}
    </MonthScroll>
  );
};
