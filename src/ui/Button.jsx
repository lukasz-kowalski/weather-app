import styled from 'styled-components';
import { buttonInputStyles } from './commonStyles';

const Button = styled.button`
  ${buttonInputStyles}
  margin: 2rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #000;
    color: #fff;
    border-color: #000;
  }
`;

export default Button;
