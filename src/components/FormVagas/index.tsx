import { FormEvent, useState,ChangeEvent } from 'react';
import { Form, Input, Button } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLowerCase());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value);
  };

  return (
    <Form onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={handleInputChange}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </Form>
  );
};

export default FormVagas;
