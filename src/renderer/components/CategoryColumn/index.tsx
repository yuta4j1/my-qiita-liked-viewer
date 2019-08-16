import * as React from 'react';
import { useState } from 'react';
import { Column } from '@/types';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from '@/theme/index';
import ArticlePanel from '@/containers/ArticlePanel';

type ColumnProps = Column & {
  columnNum: number;
};

const ColumnHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 20px;
`;
const ColumnBody = styled.div`
  min-width: 150px;
  height: 1000px;
`;

const CategoryColumn: React.FC<ColumnProps> = props => {
  const [state] = useState({ ...props });

  const PanelColumn = styled.div`
    min-width: 150px;
    height: 100vh;
  `;

  const createArticlePanel = () =>
    state.articles.map((article, key) => {
      return <ArticlePanel key={key} {...article} />;
    });

  return (
    <PanelColumn>
      <ColumnHeader>{state.categoryName}</ColumnHeader>
      <Scrollbars style={{ width: 500, height: 900 }}>
        <ColumnBody>{createArticlePanel()}</ColumnBody>
      </Scrollbars>
    </PanelColumn>
  );
};

export default CategoryColumn;
