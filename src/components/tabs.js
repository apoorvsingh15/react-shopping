import { Tabs, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';

import getSpecificCategoryContent from '../api/getSpecificCategoryContent';
import '../css/tabs.css'
import TabContent from './tabContent';

const { TabPane } = Tabs;

const AppTabs = ({ categories, categoriesLoader }) => {
  const [content, setContent] = useState([]);
  const [contentLoader, setContentLoader] = useState(false);

  const getContent = async (key) => {
    console.log(categories[0], "<==")
    setContentLoader(true);
    const result = await getSpecificCategoryContent(key === '' ? categories[0] : key);
    setContent(result.response.data);
    setContentLoader(result.loading);
  }

  const onChange = (key) => {
    getContent(key)
  };


  useEffect(() => {
    if (categories.length > 0) getContent('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories])


  console.log(categories, categoriesLoader, "sdsd")
  return (
    <Tabs defaultActiveKey="1" onChange={onChange} style={{ maxWidth: 1280, margin: '0 auto' }}>
      {
        categoriesLoader ? <Skeleton />
          :
          categories.length > 0 ? categories.map((category, index) =>
            <TabPane tab={category} key={category}>
              <TabContent content={content} contentLoader={contentLoader} />
            </TabPane>)
            :
            <Skeleton />
      }

    </Tabs>)
}

export default AppTabs;