import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api/api';
import { Button } from '../components/Button/Button';
import { PhotosItens } from '../components/PhotosItens/PhotosItens';
import { Album as AlbumType } from '../types/Album';
import { Photo } from '../types/Photo';
import { SectionAlbum } from './styleAlbum';

export const Album = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [apiAlbum, setApiAlbum] = useState<AlbumType[]>([]);
  const [apiAlbumPhoto, setApiAlbumPhoto] = useState<Photo[]>([]);

  useEffect(() => {
    loadApiAlbum();
    loadApiPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadApiAlbum = async () => {
    setLoading(true);
    const json = await api.getAlbum(String(params.id));
    setLoading(false);
    setApiAlbum(json.title);
  };
  const loadApiPhotos = async () => {
    setLoading(true);
    const json = await api.getPhotosAlbum(String(params.id));
    setLoading(false);
    setApiAlbumPhoto(json);
  };

  return (
    <SectionAlbum>
      <Button />
      {loading && 'Carregando'}
      <h1>{apiAlbum}</h1>
      {apiAlbumPhoto.map((photo, index) => (
        <PhotosItens key={index} id={photo.id} title={photo.title} url={photo.thumbnailUrl} />
      ))}
    </SectionAlbum>
  );
};
