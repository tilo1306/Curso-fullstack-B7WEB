import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkPhotos = styled(Link)`
  border: 2px solid #000;
  padding: 20px;
  cursor: pointer;
  margin: 10px;
  display: inline-block;
  text-decoration: none;
  color: #000;
  img {
    display: block;
  }
  :hover {
    background-color: #eee;
  }
`;
