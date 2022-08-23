import React from 'react';

import { Skeleton, Card, Row, Col } from 'antd';

const { Meta } = Card;

const TabContent = ({ content, contentLoader }) => {
  return (
    <Row gutter={16} style={{ maxWidth: 1280, margin: '0 auto' }}>
      {contentLoader ? <Skeleton /> : content.map((item, key) =>
        <Col className="gutter-row" span={6}>
          <Card key={key}
            hoverable
            style={{ width: 240, marginBottom: 10 }}
            cover={<img alt="example" style={{ height: 200, padding: '10px 10px 0 10px' }} src={item.image} />}
          >
            <Meta title={item.title} description={`$ ${item.price}`} />
          </Card>
        </Col>
      )}
    </Row>
  );
}

export default TabContent;