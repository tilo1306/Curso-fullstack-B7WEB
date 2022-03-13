import axios from 'axios';

const BASEALBUM = 'https://jsonplaceholder.typicode.com/albums';
const BASEPHOTOS = 'https://jsonplaceholder.typicode.com/photos';

export const api = {
  getAllAlbum: async () => {
    let response = await axios.get(BASEALBUM);
    return response.data;
  },
  getAlbum: async (id: number) => {
    let response = await axios.get(`${BASEALBUM}/${id}`);
    return response.data;
  },
  getAlbumPhoto: async (id: number) => {
    let response = await axios.get(`${BASEALBUM}/${id}/photos`);
    return response.data;
  },
  getPhoto: async (id: number) => {
    let response = await axios.get(`${BASEPHOTOS}/${id}`);
    return response.data;
  },
};
