import React from 'react';
import Layout from '@theme/Layout';
import { Row, Typography, Divider, Image, Col,Tag ,Space} from 'antd';
const { Title, Text } = Typography;

import "antd/dist/antd.css";

const listData = [{
    href: 'https://github.com/LLemonGreen',
    title: `**LLemonGreen**`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
        '创业 · 深圳',
    content:
        '敲代码，做潮牌，~~玩音乐~~，~~拍视频~~。目前在代码外包、潮牌同步发展阶段。github缝合怪。',
    duty: "参与gin-vue-admin的一些功能测试和文档维护，参与社区吹水",
    stack: ["Golang", "Flutter", "UI设计"]
}];


function Hello() {
    return (
        <Layout title="关于我们">
            <div style={{ padding: "40px 10% 40px 10%" }}>
                <Row gutter={16}>
                    <Title level={3}>框架交流</Title>
                </Row>
                <Row gutter={16}>
                    <Text>gin-vue-admin采用Apache Licene 2.0 协议，闭源项目不受影响，开源项目需保留原协议。无需商业授权即可商用。</Text>
                </Row>
                <Row gutter={16}>
                    <Text>qq交流群群号：622360840</Text>
                </Row>
                <Divider orientation="left"></Divider>
                <Row gutter={16}>
                    <Title level={3}>作者简介</Title>
                </Row>

                <Row gutter={16}>
                    <Text>Mr.奇淼,本名蒋吉兆，目前工作于北京某创业公司。</Text>
                </Row>
                <Row gutter={16}>
                    <Text>个人本职为公司前端技术负责人，业余时间会做一些开源的小东西，gin-vue-admin就是疫情期间的无心插柳。 </Text>
                </Row>
                <Row gutter={16}>
                    <Text>个人技术栈为前端VUE React UNI weex RN 等，后端golang python node    </Text>
                </Row>
                <Row gutter={16}>
                    <Text>期待更多小伙伴加入Gin-Vue-Admin的大家庭</Text>
                </Row>
                <Divider orientation="left"></Divider>
                <Row gutter={16}>
                    <Title level={3}>研发小组</Title>
                </Row>
                <Row align="left" justify="start">
                    <div style={{display:"inline-block",padding:"20px"}}>
                    <Image
                        width={140}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    </div>
                    <div style={{display:"inline-block",padding:"20px"}}>
                        <div>
                            <Title level={5}>名字</Title>
                        </div>
                        <Text type="secondary">创业 · 深圳</Text>
                        <div style={{paddingTop:"5px"}}>
                        <Text>个人介绍：敲代码，做潮牌，~~玩音乐~~，~~拍视频~~。目前在代码外包、潮牌同步发展阶段。github缝合怪。</Text>
                        </div>
                        <div style={{paddingTop:"5px"}}>
                        <Text>主要职责：参与gin-vue-admin的一些功能测试和文档维护，参与社区吹水</Text>
                        </div>
                         <div style={{paddingTop:"5px"}}>
                         <Text>主要技能：</Text>
                         <Tag color="green">golang</Tag>
                         <Tag color="green">golang</Tag>
                         <Tag color="green">golang</Tag>
                        </div>
                    </div>
                </Row>
            </div>
        </Layout >
    );
}

export default Hello;