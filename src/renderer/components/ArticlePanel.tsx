import * as React from 'react';
import { useState } from 'react';
import { openExternalBrowser } from '@/service';
import styled from '@/theme/index';
import { ArticleInfo } from '../types';

type ArticleProps = ArticleInfo;
type ArticleState = ArticleInfo;

const Panel = styled.div`
  display: flex;
  align-items: center;
  border-style: solid none solid none;
  border-width: 0.25px;
  border-color: #eeeeee;
`;

const UploadDate = styled.div`
  font-size: 10.9px;
`;

const Item = styled.div`
  margin: 10px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  letft: 20%;
`;

const ATag = styled.div`
  margin: 2px 2px;
  padding: 5px;
  border-radius: 10px;
  background-color: #f5f5f5;
  font-family: 'Assistant', sans-serif;
  font-size: 1em;
`;

const Link = styled.a`
  font-family: 'Noto Sans JP', sans-serif;
  text-decoration: none;
  color: #337ab7;
`;

const ArticlePanel: React.FC<ArticleProps> = props => {
  const [state, setState] = useState({ ...props });

  const createTagBadges = () =>
    state.tagList.map((tag, key) => {
      return <ATag key={key}>{tag}</ATag>;
    });

  const openArticle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    openExternalBrowser('https://qiita.com/' + state.url);
  };

  return (
    <Panel>
      <Item>
        <div>
          <img src={state.userImageUrl} width={100} height={100} />
        </div>
      </Item>
      <Item>
        <UploadDate>
          <p>投稿日付：{state.updateDate}</p>
        </UploadDate>
        <div>
          <Link href="#" onClick={e => openArticle(e)}>
            {state.title}
          </Link>
        </div>
        <div>
          <TagList>{createTagBadges()}</TagList>
        </div>
      </Item>
    </Panel>
  );
};

export default ArticlePanel;
