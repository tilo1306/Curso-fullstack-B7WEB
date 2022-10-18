import styled from 'styled-components/native';

interface Width {
  width: string;
  bgcolor: string;
}

export default styled.TouchableHighlight<Width>`
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.bgcolor || '#EEE'};
  padding: 10px 20px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
`;
