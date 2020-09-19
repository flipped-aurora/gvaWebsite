import React from 'react';
import Layout from '@theme/Layout';
import { Row, Typography, Card, Image, Col } from 'antd';
const { Title } = Typography;
import "antd/dist/antd.css";

function Hello() {
    return (
        <Layout title="恰饭专区">
            <div style={{ padding: "40px 10% 40px 10%" }}>
                <Row gutter={16}>
                    <Title level={3}>投食说明</Title>
                </Row>
                    <Title level={5}>gin-vue-admin是一款完全免费使用的开源框架，但是服务器等日常开支是一笔不小的费用，这里是一些作者可以拿到返利的教程，对大家平时的工作也会有一定的帮助。</Title>
                    <Title level={5}>如果您想支持gin-vue-admin，可以在这里购买一份教程。所得返利，会用于gin-vue-admin日常维护和服务器开支，感谢各位。</Title>
                    <Title level={5}>当然您也可以点击这里 |<a href="https://www.gin-vue-admin.com/docs/coffee">进行捐赠</a>|</Title>
                <div style={{
                    height: "20px"
                }}
                ></div>
                <Row gutter={16}>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/1.jpg" />}
                        >
                    <Card.Meta title="docker入门推荐"/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/2.jpg" />}
                        >
                            <Card.Meta title="k8s深入学习"/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/3.jpg" />}
                        >
                            <Card.Meta title="vue3马上就来了"/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/4.jpg" />}
                        >
                            <Card.Meta title="微服务，分布式，可以了解"/>
                        </Card>
                    </Col>
                </Row>
                <div style={{
                    height: "20px"
                }}
                ></div>
                <Row gutter={16}>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/5.jpg" />}
                        >
                            <Card.Meta title="制造工具，打造前端懒人"/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/6.jpg" />}
                        >
                            <Card.Meta title="如果你在搞大屏数据"/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/7.jpg" />}
                        >
                            <Card.Meta title="rpc？微服务？云原生？"/>
                        </Card>
                    </Col>
                    <Col xs={24} sm={18} md={14} lg={10} xl={6}>
                        <Card
                            hoverable
                            style={{ width: 300 }}
                            cover={<img alt="example" src="http://qmplusimg.henrongyi.top/guanwang/8.jpg" />}
                        >
                            <Card.Meta title="非go，架构。"/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
}

export default Hello;