import styled from 'styled-components';

export const Item = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  margin-bottom: 6px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: var(--dark);
    color: var(--white);

    .title {
      background-color: var(--light);
      color: var(--black);
    }

    a {
      border-color: var(--black);
      background-color: var(--light);
      color: var(--black);
    }
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
  background-color: var(--light);
  text-align: center;
`;

export const ListItem = styled.li`
  padding: 4px 4px;
  line-height: 18px;
`;

export const Link = styled.a`
  border-color: var(--cor-principal);
  background-color: var(--dark);
  color: var(--white);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`;
