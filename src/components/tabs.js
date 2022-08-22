import { Tabs, Skeleton } from 'antd';
import React from 'react';

import '../css/tabs.css'
import TabContent from './tabContent';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const AppTabs = ({ categories, categoriesLoader }) => {
  console.log(categories, categoriesLoader, "sdsd")
  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      {
        categoriesLoader ? <Skeleton />
          :
          categories.length > 0 ? categories.map((category, index) =>
            <TabPane tab={category} key={category}>
              <TabContent content={category} />
            </TabPane>)
            :
            <Skeleton />
      }

    </Tabs>)
}

export default AppTabs;