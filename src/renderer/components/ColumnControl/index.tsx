import * as React from 'react';
import ColumnCard from './ColumnCard';
import { ColumnCardState } from '../../types';
import styled from '@/theme/index';

const Explain = styled.div`
  margin: 5% 5%;
`;

const CardTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

type ColumnControlProps = {
  columnNames: string[];
};

const ColumnControl: React.FC<ColumnControlProps> = props => {
  const [columnNames, setColumnNames] = React.useState(props.columnNames);

  const generateCard = (): JSX.Element[] => {
    return columnNames.map((columnName: string, idx: number) => {
      const card: ColumnCardState = {
        id: '1',
        text: columnName,
        order: idx + 1
      };
      return <ColumnCard key={idx} card={card} />;
    });
  };

  return (
    <div>
      <Explain>// TODO 列の追加、ソートをここでやる</Explain>
      <CardTable>{generateCard()}</CardTable>
    </div>
  );
};

export default ColumnControl;
