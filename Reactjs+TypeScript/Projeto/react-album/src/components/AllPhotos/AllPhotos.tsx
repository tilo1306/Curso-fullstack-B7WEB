import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { AlbumsApi } from '../../types/AlbumsApi';
import { Photos } from '../../types/Photos';
type props = {
  id: number;
};

export const AllPhotos = ({ id }: props) => {
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState<AlbumsApi[]>([]);
  const [albumPhoto, setAlbumPhoto] = useState<Photos[]>([]);

  useEffect(() => {
    loadApi();
  }, []);
  const loadApi = async () => {
    setLoading(true);
    const jsonPhoto = await api.getAlbumPhoto(Number(id));
    const json = await api.getAlbum(Number(id));
    setLoading(false);
    setAlbum(json);
    setAlbumPhoto(jsonPhoto);
  };

  return (
    <div>
      {loading && <div>Carregando...</div>}
      {!loading && (
        <div>
          <button>Voltar</button>
          <h1>{album.title}</h1>
          {albumPhoto.map((p, index) => (
            <div key={index}>
              <Link to={`/photo/${p.id}`}>
                <img src={p.url} alt={p.title} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
