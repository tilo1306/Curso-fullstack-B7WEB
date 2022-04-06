/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-for-in-array */
/* eslint-disable guard-for-in */
/* eslint-disable no-await-in-loop */
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';
import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase';

export const getAll = async () => {
  const list: Photo[] = [];
  const imagesFolder = ref(storage, 'Images');
  const photoList = await listAll(imagesFolder);

  for (const i in photoList.items) {
    const photoUrl = await getDownloadURL(photoList.items[i]);
    list.push({
      name: photoList.items[i].name,
      url: photoUrl,
    });
  }
  return list;
};

export const insert = async (file: File) => {
  if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
    const randomName = createId();
    const newfile = ref(storage, `Images/${randomName}`);
    const upload = await uploadBytes(newfile, file);
    const photoUrl = await getDownloadURL(upload.ref);

    return {
      name: upload.ref.name,
      url: photoUrl,
    } as Photo;
  }
  return new Error('Tipo de arquivo não permitido.');
};

export const deletePhoto = async (name: string) => {
  const photoRef = ref(storage, `Images/${name}`);
  await deleteObject(photoRef);
};
