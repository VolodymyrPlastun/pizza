import { Card, CardMedia } from '@mui/material';
import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const Img = styled(CardMedia)`
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const PizzaCard = styled(Card)`
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const TextBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 20px 0;
  height: 100%;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Amount = styled.p`
  color: blue;
  font-size: 1.5rem;
  margin: 0;
`;

export const PriceText = styled.h2`
  display: flex;
  justify-content: space-between;
  color: #0288d1;
`;

export const PriceTotal = styled.span`
  margin-left: 10px;
`;
