import * as React from 'react';
import {
  SourceArticleInfo,
  Column,
  LoadingState,
  User,
  ColumnState
} from '@/types';
import { fetchArticleList } from '@/api-facade';
import CategoryColumn from './CategoryColumn';
import styled from '@/theme';

const ColumnsView = styled.div`
  display: flex;
`;

type Props = {
  userInfo: User;
  columns: ColumnState;
  dispatchLoadingState?: (loading: LoadingState) => void;
};

type State = {
  srcArticles: SourceArticleInfo[];
  columnNum: number;
};

class MainView extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      srcArticles: [],
      columnNum: 0
    };
  }

  async componentDidMount() {
    try {
      // access API, and fetch Qiita article's info
      const sourceArticleInfos = await fetchArticleList(
        `/list?uid=${this.props.userInfo.id}`
      );
      console.log(
        '[MainView] componentDidMount sourceArticleInfos',
        sourceArticleInfos
      );
      if (sourceArticleInfos) {
        this.setState({
          srcArticles: [...sourceArticleInfos],
          columnNum: 0
        });
      } else {
        this.setState({ srcArticles: [], columnNum: 0 });
      }
      // hide the loading component
      this.props.dispatchLoadingState({ isActive: false });
    } catch (error) {
      console.log(error);
    }
  }

  existsMatchTag(tagList: string[], matchStr): boolean {
    return tagList.some(tag => tag === matchStr);
  }

  generateCategoryColumnProps(categoryName: string): Column {
    return {
      categoryName: categoryName,
      articles:
        categoryName === 'All'
          ? this.state.srcArticles.filter(
              src => !this.existsMatchTag(src.tagList, categoryName)
            )
          : this.state.srcArticles.filter(src =>
              this.existsMatchTag(src.tagList, categoryName)
            )
    };
  }

  renderCategoryColumn() {
    const specTags: ColumnState = this.props.columns;
    const columns: Column[] = specTags
      .map(tag => this.generateCategoryColumnProps(tag))
      .filter(prop => prop.articles.length > 0);
    const columnNum = columns.length;
    if (columnNum === 0) {
      return (
        <div>
          <p>記事情報がありません。</p>
        </div>
      );
    }
    console.log('[MainView] renderCategoryColumn -> props', columns);
    return columns.map(prop => {
      const categoryColumnProp = Object.assign(prop, {
        columnNum: columnNum
      });
      return <CategoryColumn key={prop.categoryName} {...categoryColumnProp} />;
    });
  }

  render() {
    return <ColumnsView>{this.renderCategoryColumn()}</ColumnsView>;
  }
}

export default MainView;
