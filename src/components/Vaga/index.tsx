import { Item, Title, ListItem, Link } from './styled'

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga = (props: Props) => (
  <Item>
    <Title className="title">{props.titulo}</Title>
    <ul>
      <ListItem>Localização: {props.localizacao}</ListItem>
      <ListItem>Senioridade: {props.nivel}</ListItem>
      <ListItem>Tipo de contratação: {props.modalidade}</ListItem>
      <ListItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </ListItem>
      <ListItem>Requisitos: {props.requisitos.join(', ')}</ListItem>
    </ul>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </Item>
);

export default Vaga;
