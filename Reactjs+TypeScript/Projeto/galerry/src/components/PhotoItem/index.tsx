import * as C from './styles';

type Props = {
  url: string;
  name: string;
  onDelete: (name: string) => void;
};

export const PhotoItem = ({ url, name, onDelete }: Props) => (
  <C.Container>
    <img src={url} alt={name} />
    {name}
    <button type="button" onClick={() => onDelete(name)}>
      del
    </button>
  </C.Container>
);
