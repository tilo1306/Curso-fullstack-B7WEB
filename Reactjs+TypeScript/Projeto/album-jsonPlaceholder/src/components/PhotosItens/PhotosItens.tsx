import React from 'react';
import { LinkPhotos } from './styledPhotosItens';

type Props = {
  id: number;
  title: string;
  url: string;
};

export const PhotosItens = ({ id, title, url }: Props) => {
  return (
    <LinkPhotos to={`/photo/${id}`}>
      <img src={url} alt={title} />
    </LinkPhotos>
  );
};
