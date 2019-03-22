import * as React from 'react';
import styled from '../theme/index';
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

const UserIcon = styled.div`
  padding: 20px;
  align-items: center;
  border-style: solid;
  border-width: 0.5px;
  border-radius: 50%;
  border-color: #bdbdbd;
`;

const Item = styled.div`
  margin: 10px;
`;

const TagList = styled.ul`
  display: flex;
  list-style: none;
`;

const ATag = styled.li`
  margin: 0px 5px;
`;

class ArticlePanel extends React.Component<ArticleProps, ArticleState> {
  constructor(props: ArticleProps) {
    super(props);
    this.state = { ...props };
  }

  createTagBadges() {
    return this.state.tagList.map((tagKey, tag) => {
      return <ATag key={tagKey}>{tag}</ATag>;
    });
  }

  render() {
    return (
      <Panel>
        <Item>
          <UserIcon>User</UserIcon>
        </Item>
        <Item>
          <UploadDate>
            <p>投稿日付：2019/12/31</p>/** TODO this.state.UploadDate */
          </UploadDate>
          <div>
            <a href="#">{this.state.title}</a>
          </div>
          <div>
            <TagList>{this.createTagBadges()}</TagList>
          </div>
        </Item>
      </Panel>
    );
  }
}

export default ArticlePanel;
