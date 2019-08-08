import * as React from 'react';
import renderer from 'react-test-renderer';
import ArticlePanel from './index';
import { ArticleInfo } from '../../types';

describe('ArticlePanel test', () => {
  it('<ArticlePanel /> snapshot', () => {
    const props: ArticleInfo[] = [
      {
        tagList: ['Git'],
        title:
          'Git で force pull する方法 ( $ git reset --hard origin/branch_name )',
        updateDate: '2015/11/04',
        url: '/Yinaura/items/30992f25b87f76af3ba2',
        userImageUrl:
          'https://qiita-image-store.s3.amazonaws.com/0/90607/profile-images/1473705145',
        uuid: '30992f25b87f76af3ba2'
      },
      {
        tagList: ['Go'],
        title: 'Goでパスワード入力を読み取る(Windows/Mac/Linux対応)',
        updateDate: '2016/06/27',
        url: '/moutend/items/12d53750363edbbc3d6b',
        userImageUrl:
          'https://qiita-image-store.s3.amazonaws.com/0/89489/profile-images/1473704769',
        uuid: '12d53750363edbbc3d6b'
      }
    ];

    const tree = renderer
      .create(props.map((v, i) => <ArticlePanel key={i} {...v} />))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
