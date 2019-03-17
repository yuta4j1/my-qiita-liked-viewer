import * as React from 'react';
import styled from '../theme/index'
import { ArticleInfo } from '../types'

type ArticleProps = ArticleInfo;
type ArticleState = ArticleInfo;

const Panel = styled.div`
  display: flex;
  align-items: center;
  border-style: solid none solid none;
  border-width: 0.25px;
  border-color: #EEEEEE;
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
  border-color: #BDBDBD;
`;
class ArticlePanel extends React.Component<ArticleProps, ArticleState> {
    constructor(props: ArticleProps) {
        super(props);
        this.state = {...props};
    }

    render() {
        return (
            <Panel></Panel>
        );
    }
}

export default ArticlePanel;