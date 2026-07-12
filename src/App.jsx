import React, { useState } from 'react';
import { Layout, Menu, Button, Typography, Space, Card, Row, Col, Table, message } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { Title, Text } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('داشبورد', '1', <PieChartOutlined />),
  getItem('آمارها', '2', <DesktopOutlined />),
  getItem('کاربران', 'sub1', <UserOutlined />, [
    getItem('مدیران', '3'),
    getItem('کارکنان', '4'),
    getItem('مشتریان', '5'),
  ]),
  getItem('تیم', 'sub2', <TeamOutlined />, [getItem('تیم الف', '6'), getItem('تیم ب', '8')]),
  getItem('فایل‌ها', '9', <FileOutlined />),
];

const dataSource = [
  {
    key: '1',
    name: 'علی احمدی',
    age: 32,
    address: 'تهران، خیابان ولیعصر',
  },
  {
    key: '2',
    name: 'سارا حسینی',
    age: 42,
    address: 'اصفهان، میدان نقش جهان',
  },
  {
    key: '3',
    name: 'محمد رضایی',
    age: 28,
    address: 'مشهد، خیابان امام رضا',
  },
];

const columns = [
  {
    title: 'نام',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'سن',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'آدرس',
    dataIndex: 'address',
    key: 'address',
  },
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const showMessage = () => {
    message.success('این یک پیام آزمایشی است!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', borderRadius: 6 }} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '0 16px' }}>
          <Space direction="vertical" size="middle" style={{ display: 'flex', marginTop: 16 }}>
            <Card>
              <Title level={2}>سلام! به پروژه جدید خوش آمدید</Title>
              <Text>
                محیط ریکت به همراه Ant Design با موفقیت نصب شد. حالت راست‌چین (RTL) به صورت پیش‌فرض فعال است.
              </Text>
              <div style={{ marginTop: 16 }}>
                <Button type="primary" onClick={showMessage}>
                  تست کامپوننت دکمه
                </Button>
              </div>
            </Card>

            <Row gutter={16}>
              <Col span={8}>
                <Card title="کارت اول" bordered={false}>
                  محتوای تستی کارت اول
                </Card>
              </Col>
              <Col span={8}>
                <Card title="کارت دوم" bordered={false}>
                  محتوای تستی کارت دوم
                </Card>
              </Col>
              <Col span={8}>
                <Card title="کارت سوم" bordered={false}>
                  محتوای تستی کارت سوم
                </Card>
              </Col>
            </Row>

            <Card title="جدول داده‌ها">
              <Table dataSource={dataSource} columns={columns} pagination={false} />
            </Card>
          </Space>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          طراحی شده با Ant Design ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
