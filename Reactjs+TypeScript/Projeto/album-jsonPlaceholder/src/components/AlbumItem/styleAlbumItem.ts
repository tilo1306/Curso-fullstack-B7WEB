import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkAlbum = styled(Link)`
  border: 2px solid #000;
  padding: 20px;
  margin: 10px;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #000;
  border-radius: 15px;
  &:hover {
    background-color: #eee;
  }
`;
