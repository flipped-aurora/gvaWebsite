import React from 'react';
import Layout from '@theme/Layout';
import { Row, Typography, Divider, Image, Col, Tag, Popover } from 'antd';
import { BarcodeOutlined } from "@ant-design/icons"
import useBaseUrl from '@docusaurus/useBaseUrl';
const { Title, Text } = Typography;
import "antd/dist/antd.css";

function Hello() {
    return (
        <Layout title="关于我们">
            <div style={{ padding: "40px 10% 40px 10%" }}>
                <Row gutter={16}>
                    <Title level={3}>框架交流</Title>
                </Row>
                <Row gutter={16}>
                    <Text><span style={{ color: "#25c2a0", fontWeight: 800 }}>gin-vue-admin</span>采用Apache Licene 2.0 协议，闭源项目不受影响，开源项目需保留原协议。无需商业授权即可商用。</Text>
                </Row>
                <Row gutter={16}>
                    <Text>qq交流群群号：622360840</Text>
                </Row>
                <Row gutter={16}>
                    <Text>微信：shouzi_1994</Text>
                </Row>
                <Row gutter={16}>
                    <Popover content={<Image
                        width={200}
                        src={useBaseUrl('guanwang/weixin.jpg')}
                    />} title="加群备注（加入gin-vue-admin交流群）" trigger="hover">
                        <Text style={{ color: "#25c2a0", fontWeight: 800,cursor:"pointer" }}>点我获取微信加群二维码 <BarcodeOutlined /></Text>
                    </Popover>
                </Row>
                <Divider orientation="left"></Divider>

                <Row gutter={16}>
                    <Title level={3}>作者简介</Title>
                </Row>
                <Row gutter={16}>
                    <Text><span style={{ color: "#25c2a0", fontWeight: 800 }}>Mr.奇淼</span>,本名蒋吉兆，目前工作于北京某创业公司。</Text>
                </Row>
                <Row gutter={16}>
                    <Text>个人本职为公司前端技术负责人，业余时间会做一些开源的小东西，<span style={{ color: "#25c2a0", fontWeight: 800 }}>gin-vue-admin</span>就是疫情期间的无心插柳。 </Text>
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

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/jjz.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**奇淼**</Title>
                        </div>
                        <Text type="secondary">全栈开发 · 北京</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍: 用魔法打败魔法，用代码打败代码，一个普普通通的IT从业者，一台<del>se</del>无情的编码机器。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责: gin-vue-admin项目发起者，团队一块砖，随便用，随便搬，负责gin-vue-admin的整体功能开发，基础设施建设。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">VUE</Tag>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">NODE</Tag>
                            <Tag color="red">豪火球之术</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/sc2.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**krank**</Title>
                        </div>
                        <Text type="secondary">前端开发 · 北京</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍: 风暴中出生的krank， vue使用者，go学习者，前端开发，奇淼的马仔。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责: 负责gin-vue-admin的前端页面开发，功能完善，基础前端工具开发。辅助进行前端基础架构建设，通用功能组件封装。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">VUE</Tag>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">UNIAPP</Tag>
                            <Tag color="blue">德鲁伊</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/sh.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**SliverHorn**</Title>
                        </div>
                        <Text type="secondary">后端开发 · 广州</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍: 热爱编程,对代码有洁癖,好的代码就是気持ちいい。任何时候，绝不骄傲，绝不轻敌，摸清对方心里，使劲浑身解数，保持笑容和品行，无论发生什么，千万不要忘记扑克脸。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责: 负责gin-vue-admin的新功能研发测试与改进,gf-vue-admin的后端开发及维护,社区日常维护管理等工作。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">Python</Tag>
                            <Tag color="#25c2a0">Docker</Tag>
                            <Tag color="#66ccff">Gram Dispersion</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/LL.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**LLemonGreen**</Title>
                        </div>
                        <Text type="secondary">创业 · 深圳</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：敲代码，做潮牌，<del>玩音乐，拍视频。</del>目前在代码外包、潮牌同步发展阶段。github缝合怪。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：参与gin-vue-admin的一些功能测试和文档维护，参与社区吹水</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">Flutter</Tag>
                            <Tag color="#25c2a0">UI设计</Tag>
                            <Tag color="#ffcc33">千年杀</Tag>
                        </div>
                    </div>
                    </Row>
                    <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/djl.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**djl**</Title>
                        </div>
                        <Text type="secondary">前端研发 · 北京</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：vue使用者，go学习者，前端开发。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：负责gin-vue-admin的前端页面开发，UI样式维护</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">VUE</Tag>
                            <Tag color="#25c2a0">GOLANG</Tag>
                            <Tag color="#25c2a0">UNI</Tag>
                        </div>
                    </div>
                    </Row>
                    <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                    <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/lw.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**LeonardWang**</Title>
                        </div>
                        <Text type="secondary">开发 · 杭州</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：跟着gva大佬们打怪升级，喜欢搞一些底层骚操作，乐于“折腾”的垃圾佬。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责： 负责gin-vue-admin的静态文件打包功能开发，搬砖工程师。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">C++</Tag>
                            <Tag color="volcano">闪现</Tag>
                        </div>
                    </div>
                </Row>
                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/YR.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**rainyan**</Title>
                        </div>
                        <Text type="secondary">架构师 · 深圳</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：武大本硕，鹅厂员工，单身没颜缺钱。善于人际交往，有领导能力，喜欢体验新鲜的事物，喜欢旅游，口才很好。雅思7.5，喜欢学习各种语言和各种方言。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：架构设计，前沿技术探索，技术应用</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">项目管理</Tag>
                            <Tag color="#25c2a0">全栈开发</Tag>
                            <Tag color="#25c2a0">投资理财</Tag>
                            <Tag color="#ffcca0">知心哥哥</Tag>
                        </div>
                    </div>
                </Row>
                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/GL.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**Granty1**</Title>
                        </div>
                        <Text type="secondary">服务器开发·上海</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：萌新一枚，带带弟弟。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：编写部分服务端代码。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">Golang</Tag>
                            <Tag color="#25c2a0">java</Tag>
                            <Tag color="#25c2a0">js</Tag>
                            <Tag color="#25c2a0">database</Tag>
                            <Tag color="#25c2a0">c++</Tag>
                        </div>
                    </div>
                </Row>
                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/sj.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**千里默默**</Title>
                        </div>
                        <Text type="secondary">UI设计•北京</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：生活在帝都的设计师，认知的意义在于理解世界，下定决心别放弃，坚持，机会就在眼前</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要职责：负责用户界面设计，视觉设计，把握产品最终界面实现效果</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">AI</Tag>
                            <Tag color="#25c2a0">AE</Tag>
                            <Tag color="#25c2a0">PS</Tag>
                            <Tag color="#25c2a0">PR</Tag>
                            <Tag color="#25c2a0">SKETCH</Tag>
                        </div>
                    </div>
                </Row>

                <Row align="left" justify="start" style={{ background: "#f2f2f2", marginTop: "10px", borderRadius: "10px", paddingLeft: "10px" }}>
                <div style={{ display: "inline-block", paddingTop: "20px" }}>
                        <Image
                            width={140}
                            src={useBaseUrl('guanwang/zbsh.jpg')}
                        />
                    </div>
                    <div style={{ display: "inline-block", padding: "20px", width: "calc(100% - 140px)" }}>
                        <div>
                            <Title level={5}>**知白守黑**</Title>
                        </div>
                        <Text type="secondary">萌新开发•合肥</Text>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>个人介绍：00后，安徽大学信息技术英才班学生，热爱计算机学科。爱好广泛，美食、旅行、摄影、游戏、聊天。希望能够成为独挡一面的工程师，也想和志同道合的大佬们交朋友。</Text>
                        </div>
                        <div style={{ paddingTop: "5px" }}>
                            <Text>主要技能：</Text>
                            <Tag color="#25c2a0">JS</Tag>
                            <Tag color="#25c2a0">C</Tag>
                        </div>
                    </div>
                </Row>

                
                <Row gutter={16} style={{ marginTop: "30px" }}>
                    <Title level={3}>未来展望</Title>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text><span style={{ color: "#25c2a0", fontWeight: 800 }}>gin-vue-admin单体版</span>将会秉持开源精神，免费到底，一群活跃的小伙伴也会不断进行日常维护，目前项目可以稳定进入生产环境，日后还会根据用户需求增加更多的便于开发的基础功能,将Gin-Vue-Admin做得更加完善，更加强大，非常期待有更多的小伙伴们加入我们Gin-Vue-Admin的团队。</Text>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text>目前项目组急缺<span style={{ color: "#25c2a0", fontWeight: 800 }}>UI工程师</span>如果您想加入我们团队，可以联系微信：shouzi_1994</Text>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text>团队所有成员均可在<span style={{ color: "#25c2a0", fontWeight: 800 }}>Gin-Vue-Admin官网</span>增加个人简介并且附带<span style={{ color: "#25c2a0", fontWeight: 800 }}>专属技能</span></Text>
                </Row>
                <Row gutter={16} style={{ marginTop: "30px" }}>
                    <Title level={3}>广告赞助</Title>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text>目前<span style={{ color: "#25c2a0", fontWeight: 800 }}>Gin-Vue-Admin</span>Github已经拥有<span style={{ color: "#25c2a0", fontWeight: 800 }}>4.6K+</span>的star，项目官网以及github页面每天都有大量的访问量，您可以成为Gin-Vue-Admin的赞助商，我们会在适当的位置，悬挂您的推广内容</Text>
                </Row>
                <Row gutter={16} style={{ marginTop: "10px" }}>
                    <Text>赞助请加微信：<span style={{ color: "#25c2a0", fontWeight: 800 }}>shouzi_1994</span>标明<span style={{ color: "#25c2a0", fontWeight: 800 }}>广告赞助</span></Text>
                </Row>
            </div>
        </Layout>
    );
}

export default Hello;