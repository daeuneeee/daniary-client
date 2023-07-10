import styled from '@emotion/styled';

interface IButtonProps {
  text?: string;
  background?: string;
  hoverBackground?: string;
}

const Button = (props: IButtonProps) => {
  return (
    <Container
      background={props.background}
      hoverBackground={props.hoverBackground}
    >
      {props.text ? props.text : '이름입력'}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  padding: 0.5rem 1rem;
  width: 6.5rem;
  font-size: 1.125rem;
  background: ${(props: IButtonProps) =>
    props.background ? props.background : ''};
  border: none;
  border-radius: 3px;
  cursor: pointer;

  :hover {
    background-color: ${(props: IButtonProps) =>
      props.hoverBackground ? props.hoverBackground : ''};
  }
`;
