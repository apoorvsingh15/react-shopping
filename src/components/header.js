import React from 'react';

import { Badge, PageHeader } from 'antd';
import {
  ShoppingCartOutlined
} from '@ant-design/icons';
import '../css/header.css';

const Header = () => (
  <div className="site-page-header-ghost-wrapper">
    <PageHeader
      ghost={false}
      title="React-Shopping"
      extra={[
        <Badge count={1}>
          <ShoppingCartOutlined style={{ fontSize: '20px', paddingTop: 5 }} />
        </Badge >
      ]}
    >
    </PageHeader>
  </div>
);

export default Header;