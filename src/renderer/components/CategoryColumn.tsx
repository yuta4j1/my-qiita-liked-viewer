import * as React from 'react';
import { Column, ArticleInfo } from '../types';
import ArticlePanel from './ArticlePanel';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from '../theme/index';

type ColumnProps = Column & { columnNum: number };
type ColumnState = Column & { columnNum: number };

const ColumnHeader = styled.div`
  /** position: fixed; */
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

const PanelColumn = styled.div`
  min-width: 150px;
  height: 900px;
`;

class CategoryColumn extends React.Component<ColumnProps, ColumnState> {
  constructor(props: ColumnProps) {
    super(props);
    this.state = { ...props };
  }
  createArticlePanel() {
    return this.state.articles.map((article, key) => {
      return <ArticlePanel key={key} {...article} />;
    });
  }
  render() {
    return (
      <PanelColumn>
        <ColumnHeader>{this.state.categoryName}</ColumnHeader>
        <Scrollbars style={{ width: 500, height: 900 }}>
          <ColumnBody>{this.createArticlePanel()}</ColumnBody>
        </Scrollbars>
      </PanelColumn>
    );
  }
}

export default CategoryColumn;
