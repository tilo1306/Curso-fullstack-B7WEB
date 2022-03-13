import { useParams } from 'react-router-dom';
import { AllPhotos } from '../components/AllPhotos/AllPhotos';

export const Album = () => {
  const params = useParams();
  return (
    <div>
      <AllPhotos id={Number(params.id)} />
    </div>
  );
};
