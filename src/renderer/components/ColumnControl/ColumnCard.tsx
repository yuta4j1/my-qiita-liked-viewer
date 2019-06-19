import * as React from 'react';
import { ColumnCardState } from '../../types';
import styled from '@/theme';

const Card = styled.div`
  padding: 5px;
  margin: 5px;
  border-radius: 3px;
  background-color: #f6f6f6;
`;

type ColumnCardProps = {
  key: number;
  card: ColumnCardState;
};

const ColumnCard: React.FC<ColumnCardProps> = props => {
  const [card, setCard] = React.useState(props.card);

  return <Card>{card.text}</Card>;
};

export default ColumnCard;
