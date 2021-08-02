import color from './palette.module.scss';
import styled from 'styled-components';
import { Button } from 'antd';

export const Btn = styled(Button)`
  &&& {
    background: ${color.secondary};
    border: none;
  }
`;
