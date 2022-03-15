import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import { AlbumItem } from '../components/AlbumItem/AlbumItem';
import { Album } from '../types/Album';

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [apiLoading, setApiLoading] = useState<Album[]>([]);

  useEffect(() => {
    loadApi();
  }, []);
  const loadApi = async () => {
    setLoading(true);
    const json = await api.getAllAlbum();
    setLoading(false);
    setApiLoading(json);
  };
  return (
    <section>
      {loading && 'Carregando'}
      {!loading &&
        apiLoading.length > 0 &&
        apiLoading.map((album, index) => <AlbumItem key={index} id={album.id} title={album.title} />)}
    </section>
  );
};
