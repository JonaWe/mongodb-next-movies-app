import styled from 'styled-components';

const Wrapper = styled.span`
  --transition: background-color 0.1s ease;
  padding: 0.5em 0.75em;
  background-color: hsl(223, 45%, 25%);
  border-radius: 9999px;
  margin-right: 0.5em;
  cursor: default;
  transition: var(--transition);
  user-select: none;
  &:hover {
    background-color: hsl(223, 45%, 35%);
    transition: var(--transition);
  }
`;

export default function Tag({ name }) {
  return <Wrapper>{name}</Wrapper>;
}
