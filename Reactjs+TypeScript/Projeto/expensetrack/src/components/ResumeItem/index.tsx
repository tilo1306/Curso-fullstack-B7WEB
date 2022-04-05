import * as C from "./styles";

type Props = {
  title: string;
  value: number;
  // eslint-disable-next-line react/require-default-props
  color?: string;
};

export const ResumeItem = ({ title, value, color }: Props) => (
  <C.Container>
    <C.Title>{title}</C.Title>
    <C.Info color={color}>R$ {value}</C.Info>
  </C.Container>
);
