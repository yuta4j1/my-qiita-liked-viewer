import * as React from 'react';
import { useState } from 'react';
import { openExternalBrowser } from '@/service';
import styled from '@/theme';
import { ArticleInfo, ColumnState } from '@/types';

type ArticleProps = ArticleInfo & {
  columns: ColumnState;
  setColumns: (data: ColumnState) => void;
};

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
  cursor: pointer;
  transition: color .3s
  &:hover {
    color: #2196f3;
  }
`;

const Link = styled.a`
  font-family: 'Noto Sans JP', sans-serif;
  text-decoration: none;
  color: #337ab7;
`;

const UserImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: url(${props => props.src});
`;

const ArticlePanel: React.FC<ArticleProps> = props => {
  const [state] = useState({ ...props });

  const tagClickEvent = (tag: string) => {
    props.setColumns([...props.columns, tag]);
  };

  const createTagBadges = () =>
    state.tagList.map((tag, key) => {
      return (
        <ATag key={key} onClick={e => tagClickEvent(tag)}>
          {tag}
        </ATag>
      );
    });

  const openArticle = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    openExternalBrowser('https://qiita.com/' + state.url);
  };

  return (
    <Panel>
      <Item>
        <div>
          <UserImage src={state.userImageUrl} />
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
