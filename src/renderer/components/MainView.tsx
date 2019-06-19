import * as React from 'react';
import { SourceArticleInfo, Column, LoadingState, User } from '../types';
import { fetchArticleList } from '../api-facade';
import CategoryColumn from './CategoryColumn';
import styled from '../theme/index';

const ColumnsView = styled.div`
  display: flex;
`;

type Props = {
  userInfo: User;
  dispatchLoadingState?: (LoadingState) => void;
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
        categoryName === 'Other'
          ? this.state.srcArticles.filter(
              src => !this.existsMatchTag(src.tagList, categoryName)
            )
          : this.state.srcArticles.filter(src =>
              this.existsMatchTag(src.tagList, categoryName)
            )
    };
  }

  renderCategoryColumn() {
    // TODO 何らかの外部リソースから取得する
    // それぞれ一つのカラムとなるカテゴリリスト
    const specTags = [
      'Java',
      'JavaScript',
      'Scala',
      'Typescript',
      'Git',
      'Other'
    ];
    const props: Column[] = specTags
      .map(tag => this.generateCategoryColumnProps(tag))
      .filter(prop => prop.articles.length > 0);
    const columnNum = props.length;
    if (columnNum === 0) {
      return (
        <div>
          <p>記事情報がありません。</p>
        </div>
      );
    }
    console.log('[MainView] renderCategoryColumn -> props', props);
    return props.map((prop, key) => {
      const categoryColumnProp = Object.assign(prop, { columnNum: columnNum });
      return <CategoryColumn key={key} {...categoryColumnProp} />;
    });
  }

  render() {
    return <ColumnsView>{this.renderCategoryColumn()}</ColumnsView>;
  }
}

export default MainView;
