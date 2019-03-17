import * as React from 'react';
import { Column, ArticleInfo } from '../types'

type ColumnProps = Column;
type ColumnState = Column;
class CategoryColumn extends React.Component<ColumnProps, ColumnState> {
    constructor(props: ColumnProps) {
        super(props);
        this.state = {...props};
    }
    render() {
        return (
            <div></div>

        );
    }
}

export default CategoryColumn;
