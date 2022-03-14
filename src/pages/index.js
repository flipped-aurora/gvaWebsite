import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Typography } from "antd";
const { Title, Text } = Typography;
const features = [
  {
    title: <> 简单易用 </>,
    imageUrl: "img/coding__isometric.svg",
    description: (
      <>
        大幅度降低应用层代码难度， 让每一个刚开始学习 <code> gin </code>和
        <code>vue</code> 的新手都能快速上手.这将会是你上手学习{" "}
        <code> gin + vue </code>的最佳代码。{" "}
      </>
    ),
  },
  {
    title: <> 自动化代码 </>,
    imageUrl: "img/html_two_color.svg",
    description: (
      <>
        系统提供自动化代码功能， 对于简单业务逻辑，
        只需配置结构体或者导入数据库即可一键创建对应前后端简单业务逻辑代码。{" "}
      </>
    ),
  },
  {
    title: <> 标准化目录 </>,
    imageUrl: "img/logistics_isometric.svg",
    description: (
      <>
        项目目录分层清晰， 项目模式结构清晰， 包名语义化，
        让你更加容易理解目录结构， 读懂代码更加方便！{" "}
      </>
    ),
  },
];

const features2 = [
  {
    title: <> 开箱即用 </>,
    imageUrl: "img/pie_chart_isometric.svg",
    description: (
      <>
        已集成各类鉴权功能， 对各类基础服务提供支持， 安装依赖完成即可轻松使用。{" "}
      </>
    ),
  },
  {
    title: <> 自由拓展 </>,
    imageUrl: "img/chat_isometric.svg",
    description: (
      <>
        系统底层代码和业务逻辑代码分层清晰， 不会发生相互干扰，
        便于根据自己业务方向进行拓展。{" "}
      </>
    ),
  },
  {
    title: <> 更新迅速 </>,
    imageUrl: "img/bug_fixed_isometric.svg",
    description: (
      <>
        专业的开发团队， 更新及时， bug响应迅速， 交流社群活跃， 让你有了问题，
        有迹可循。{" "}
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {" "}
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />{" "}
        </div>
      )}{" "}
      <Title level={3}> {title} </Title> <Text> {description} </Text>{" "}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const urlLeft = useBaseUrl("/img/left.svg");
  const urlright = useBaseUrl("/img/right.svg");
  return (
    <Layout
      title={`自动化全栈开发基础平台`}
      description="gin+vue编写的自动化代码开发脚手架，是gin+vue全栈学习最好的项目，腾讯阿里开发均有采用gin-vue-admin为模型进行相关业务开发，代码自动化，加快开发速度，权限系统齐全，减少重复工作"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.featureImageA} style={{ float: "left" }}>
            <img className={styles.featureImage} src={urlLeft} />{" "}
          </div>
          <div className={styles.featureImageA} style={{ float: "right" }}>
            <img className={styles.featureImage} src={urlright} />{" "}
          </div>
          <div
            className="hero__title"
            style={{ zIndex: "9999", fontWeight: 700, marginBottom: "20px" }}
          >
            {" "}
            {siteConfig.title}{" "}
          </div>{" "}
          <p className="hero__subtitle" style={{ zIndex: "9999" }}>
            {" "}
            {siteConfig.tagline}{" "}
          </p>{" "}
          <div className={styles.buttons} style={{ zIndex: "9999" }}>
            <Link
              style={{ border: "2px solid #fff" }}
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              快速开始{" "}
            </Link>{" "}
            {/* <Link
              style={{ border: "2px solid #fff", marginLeft: "30px" }}
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/coffee")}
            >
              捐赠项目{" "}
            </Link>{" "} */}
            <Link
              style={{ border: "2px solid #fff", marginLeft: "30px" }}
              className={clsx(
                "button button--outline button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/payment")}
            >
              付费支持{" "}
            </Link>{" "}
          </div>
        </div>{" "}
      </header>{" "}
      <div className={styles.jinpai}>合作企业</div>
      <div className={styles.adbox}>
      <Link className={clsx(
                styles.ad
              )}
              to="https://www.geelevel.com/"
              >
                <img
                onClick={()=>{return fasle}}
                            src={useBaseUrl('guanwang/miaodian2.png')}
                        />
      </Link>
      </div>
      <main>
        {" "}
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {" "}
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </section>
        )}{" "}
        {features2 && features2.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {" "}
                {features2.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </section>
        )}{" "}
      </main>{" "}
      
    </Layout>
  );
}

export default Home;
