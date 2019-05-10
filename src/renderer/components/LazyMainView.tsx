import * as React from 'react';
import { SourceArticleInfo } from '../types';
import MainView from './MainView';
import { fetchArticleList } from '~/api-facade';

let content: SourceArticleInfo[] | void = null;

const fetchQiitaArticles = async () => await fetchArticleList('/list');

const LazyMainView = () => {
  if (content) {
    return <MainView srcArticles={content} />;
  }

  throw new Promise(async resolve => {
    try {
      content = await fetchQiitaArticles();
      resolve();
    } catch (error) {
      console.log(error);
    }
  });
};

export default LazyMainView;
