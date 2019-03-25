import * as React from 'react';
import { openExternalBrowser } from '../service';
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
  flex-wrap: wrap;
  list-style: none;
`;

const ATag = styled.li`
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
`;

class ArticlePanel extends React.Component<ArticleProps, ArticleState> {
  constructor(props: ArticleProps) {
    super(props);
    this.state = { ...props };
    // https://reactjs.org/docs/handling-events.html
    this.openArticle = this.openArticle.bind(this);
  }

  createTagBadges() {
    return this.state.tagList.map((tag, tagKey) => {
      return <ATag key={tagKey}>{tag}</ATag>;
    });
  }

  openArticle(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    openExternalBrowser('https://qiita.com/' + this.state.url);
  }

  render() {
    return (
      <Panel>
        <Item>
          <UserIcon>User</UserIcon>
        </Item>
        <Item>
          <UploadDate>
            <p>投稿日付：2019/12/31</p>
          </UploadDate>
          <div>
            <Link href="#" onClick={this.openArticle}>
              {this.state.title}
            </Link>
          </div>
          <div>
            <TagList>{this.createTagBadges}</TagList>
          </div>
        </Item>
      </Panel>
    );
  }
}

export default ArticlePanel;
