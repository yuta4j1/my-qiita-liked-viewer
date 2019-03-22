import * as React from 'react';
import { Column, ArticleInfo } from '../types';
import ArticlePanel from './ArticlePanel';
import styled from '../theme/index';

type ColumnProps = Column & { columnNum: number };
type ColumnState = Column & { columnNum: number };

const ColumnHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-size: 20px;
`;

const PanelColumn = styled.div<ColumnProps>`
  width: ${props => `${100 / props.columnNum}%`};
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
      <PanelColumn {...this.props}>
        <ColumnHeader>{this.state.categoryName}</ColumnHeader>
      </PanelColumn>
    );
  }
}

export default CategoryColumn;
