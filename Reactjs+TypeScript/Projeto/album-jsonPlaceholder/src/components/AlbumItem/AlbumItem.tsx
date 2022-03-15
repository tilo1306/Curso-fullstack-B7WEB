import React from 'react';

import { LinkAlbum } from './styleAlbumItem';
type Props = {
  id: number;
  title: string;
};
export const AlbumItem = ({ id, title }: Props) => {
  return <LinkAlbum to={`/albums/${id}`}>{title}</LinkAlbum>;
};
