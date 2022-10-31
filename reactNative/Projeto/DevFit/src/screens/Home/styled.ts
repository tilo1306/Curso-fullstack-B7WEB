import styled from 'styled-components/native';

export const ConfigButtonArea = styled.TouchableHighlight`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
export const ConfigButtonImage = styled.Image`
  width: 25px;
  height: 25px;
`;
export const PageContainer = styled.SafeAreaView`
  align-items: center;
`;

export const Legend = styled.View`
  width: 90%;
  align-items: flex-start;
  margin-top: 30px;
`;
export const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;
export const LegendBox = styled.View`
  width: 15px;
  height: 15px;
  background-color: #000;
  margin-right: 5px;
`;
export const LegendText = styled.Text`
  color: #555;
`;
