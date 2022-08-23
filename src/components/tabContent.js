import React from 'react';

import { Skeleton } from 'antd';

const TabContent = ({ content, contentLoader }) => {
  return (
    <div>
      {contentLoader ? <Skeleton /> : content.map((item, key) => <div key={key}>{item.title}</div>)}
    </div>
  );
}

export default TabContent;