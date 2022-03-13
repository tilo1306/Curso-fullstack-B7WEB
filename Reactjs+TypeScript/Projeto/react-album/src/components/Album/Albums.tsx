import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';
import { AlbumsApi } from '../../types/AlbumsApi';

export const Albums = () => {
  const [loadAlbums, setLoadAlbums] = useState<AlbumsApi[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAllAlbums();
  }, []);

  const loadAllAlbums = async () => {
    setLoading(true);
    let json = await api.getAllAlbum();
    setLoading(false);
    setLoadAlbums(json);
  };

  return (
    <div className='container'>
      {loading && <div>Carregando...</div>}
      {!loading && loadAlbums.length > 0 && (
        <ul>
          {loadAlbums.map((album, index) => (
            <li key={index}>
              <Link to={`/album/${album.id}`}>{album.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
