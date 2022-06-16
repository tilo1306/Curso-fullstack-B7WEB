import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import styled from 'styled-components/native';

export default () => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [pct, setPct] = useState(5);
  const calc = () => {
    let nBill = parseFloat(bill);
    if (nBill) {
      setTip(nBill * (pct / 100));
    } else {
      Alert.alert('Digite o valor da sua conta!');
    }
  };
  useEffect(() => {
    if (bill.length > 0) {
      calc();
    }
  }, [pct]);

  return (
    <Page>
      <Header>Calculadora de Gorjeta</Header>
      <Input
        placeholder="Quanto deu a conta?"
        placeholderTextColor="#000"
        keyboardType="numeric"
        value={bill}
        onChangeText={n => setBill(n)}
      />
      <PctArea>
        <PctItem title="5%" onPress={() => setPct(5)} />
        <PctItem title="10%" onPress={() => setPct(10)} />
        <PctItem title="15%" onPress={() => setPct(15)} />
        <PctItem title="20%" onPress={() => setPct(20)} />
      </PctArea>
      <CalButton title={`Calcular ${pct}%`} onPress={calc} />
      {tip > 0 && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R${parseFloat(bill).toFixed(2)}</ResultItem>

          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R${tip.toFixed(2)} ({pct}%)
          </ResultItem>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R${(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
        </ResultArea>
      )}
    </Page>
  );
};

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  font-size: 30px;
`;
const Header = styled.Text`
  font-size: 25px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
`;
const CalButton = styled.Button`
  margin-top: 20px;
  color: red;
`;
const ResultArea = styled.View`
  width: 90%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;
const PctArea = styled.View`
  flex-direction: row;
  margin: 20px;
`;
const PctItem = styled.Button``;
