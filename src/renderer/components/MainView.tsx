import * as React from 'react';
import { SourceArticleInfo } from '../types';
import { get } from '../api-facade';


type State = SourceArticleInfo[];  

class MainView extends React.Component<{}, State> {

    async componentDidMount() {
        // エンドポイントにアクセスし、記事情報を取得する
        const sourceArticleInfos = await get('/list');
        if (sourceArticleInfos) {
            this.setState({...sourceArticleInfos.data});
        } else {
            this.setState([]);
        }
    }

    render() {
        // TODO 何らかの外部リソースから取得する
        // それぞれ一つのカラムとなるカテゴリリスト
        const tags = ['Java', 'JavaScript', 'Scala', 'Vue', 'Electron'];

        return (
            // TODO Columns
            <div>Main View</div>
        );

    }
}

export default MainView;