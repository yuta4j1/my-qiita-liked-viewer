import * as React from 'react';
import { shallow } from 'enzyme';
import CategoryColumn from './index';
import { Column } from '@/types';
import { Scrollbars } from 'react-custom-scrollbars';

describe('<CategoryColumn /> snapshot', () => {
  it('render three <ArticlePanel />', () => {
    const props: Column & { columnNum: number } = {
      categoryName: 'none',
      articles: [
        {
          uuid: '1',
          title: 'test1',
          url: '',
          userImageUrl: '',
          updateDate: '2019/00/00',
          tagList: ['a', 'b', 'c']
        },
        {
          uuid: '2',
          title: 'test2',
          url: '',
          userImageUrl: '',
          updateDate: '2019/00/00',
          tagList: ['a', 'b', 'c']
        },
        {
          uuid: '3',
          title: 'test3',
          url: '',
          userImageUrl: '',
          updateDate: '2019/00/00',
          tagList: ['a', 'b', 'c']
        }
      ],
      columnNum: 1
    };
    const wrapper = shallow(<CategoryColumn {...props} />);
    expect(wrapper.find(Scrollbars)).toHaveLength(1);
  });
});
