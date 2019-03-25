import * as React from 'react';
import { SourceArticleInfo, Column } from '../types';
import { get } from '../api-facade';
import CategoryColumn from './CategoryColumn';
import styled from '../theme/index';

const ColumnsView = styled.div`
  display: flex;
`;

type State = {
  srcArticles: SourceArticleInfo[];
  columnNum: number;
};

class MainView extends React.Component<{}, State> {
  state: State = {
    srcArticles: [],
    columnNum: 0
  };

  async componentDidMount() {
    try {
      // エンドポイントにアクセスし、記事情報を取得する
      const sourceArticleInfos = await get('/list');
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
