import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api/api';
import { Button } from '../components/Button/Button';
import { Photo as PhotoType } from '../types/Photo';
import { SectionPhoto } from './stylePhoto';
interface typePhoto {
  url: string;
  title: string;
}
export const Photo = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [apiPhoto, setApiPhoto] = useState<PhotoType<typePhoto>>([]);

  useEffect(() => {
    loadApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadApi = async () => {
    setLoading(true);
    const json = await api.getPhoto(String(params.id));
    setLoading(false);
    setApiPhoto(json);
  };
  return (
    <SectionPhoto>
      <Button />
      {loading && 'Carregando'}
      {<p>{apiPhoto.title}</p>}
      <img src={apiPhoto.url} alt={apiPhoto.title} />
    </SectionPhoto>
  );
};
