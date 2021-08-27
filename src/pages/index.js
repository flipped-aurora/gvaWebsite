import React, { Component } from 'react';
import Layout from '@theme/Layout';
import { Button, Row, Col } from 'antd';
import { ArrowRightOutlined, GithubOutlined, OrderedListOutlined } from '@ant-design/icons';
import "animate.css"
import '../css/index.css'
import axios from 'axios'
import CountUp from 'react-countup';
import wow from 'wowjs'

const list = [
  {
    title: <>简单易用</>,
    imageUrl: 'img/coding__isometric.svg',
    description: (
      <>
        大幅度降低应用层代码难度，让每一个刚开始学习<code>gin</code>和<code>vue</code>的新手都能快速上手.这将会是你上手学习<code>gin+vue</code>的最佳代码。
      </>
    ),
  },
  {
    title: <>自动化代码</>,
    imageUrl: 'img/html_two_color.svg',
    description: (
      <>
        系统提供自动化代码功能，对于简单业务逻辑，只需配置结构体或者导入数据库即可一键创建对应前后端简单业务逻辑代码。
      </>
    ),
  },
  {
    title: <>标准化目录</>,
    imageUrl: 'img/logistics_isometric.svg',
    description: (
      <>
        项目目录分层清晰，项目模式结构清晰，包名语义化，让你更加容易理解目录结构，读懂代码更加方便！
      </>
    ),
  },
  {
    title: <>开箱即用</>,
    imageUrl: 'img/pie_chart_isometric.svg',
    description: (
      <>
        已集成各类鉴权功能，对各类基础服务提供支持，安装依赖完成即可轻松使用。
      </>
    ),
  },
  {
    title: <>自由拓展</>,
    imageUrl: 'img/chat_isometric.svg',
    description: (
      <>
        系统底层代码和业务逻辑代码分层清晰，不会发生相互干扰，便于根据自己业务方向进行拓展。
      </>
    ),
  },
  {
    title: <>更新迅速</>,
    imageUrl: 'img/bug_fixed_isometric.svg',
    description: (
      <>
        专业的开发团队，更新及时，bug响应迅速，交流社群活跃，让你有了问题，有迹可循。
      </>
    ),
  },
]

class Home extends Component {
  constructor() {
    super()
    this.state = {
      star: 0,
      forks: 0,
      subscribers_count: 0
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/repos/flipped-aurora/gin-vue-admin', {})
      .then((response) => {
        if (response.status == 200) {
          this.setState({
            star: Number(response.data.stargazers_count),
            forks: response.data.forks_count,
            subscribers_count: response.data.subscribers_count
          })


        }
      })
      .catch(function (error) {
        console.log(error);
      });
    
   
  }
  goTo(e) {
    //获取 当前路由
    const url = window.location.href
    if (e == 'https://github.com/flipped-aurora/gin-vue-admin') {
      window.open(e)
    } else {
      window.open(url + e,'_self')
    }
  }
  render() {
    const wowUtil = new wow.WOW({
      live: false,
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated',
    })
    wowUtil.init()

    return (
      <Layout
        title={`自动化全栈后台管理系统`}
        description="gin+vue编写的自动化代码开发脚手架，是gin+vue全栈学习最好的项目，腾讯阿里开发均有采用gin-vue-admin为模型进行相关业务开发，代码自动化，加快开发速度，权限系统齐全，减少重复工作">
        <section className='wow animate__animated animate__fadeInUp' data-wow-duration="1s" data-wow-delay="0.3s">
          <div className='card'>
            <div className='dashbord '>
              <div className='pt-20 flex-around'>
                <div>
                  <h1 className='dashbord-title animate__animated animate__zoomIn'>Gin-Vue-admin</h1>
                  <div className='dashbord-dot animate__animated animate__lightSpeedInLeft'>使用gin+vue进行极速开发的全栈后台管理系统</div>
                  <div className='flex-center mt-10'>
                    <Button type="primary" shape="round" onClick={this.goTo.bind(this,'docs')} icon={<ArrowRightOutlined />} size='large'>
                      快速开始
                    </Button>
                    <Button type="dashed" className='ml-10' shape="round" onClick={this.goTo.bind(this,'https://github.com/flipped-aurora/gin-vue-admin')} icon={<GithubOutlined />} size='middle'>
                      Github
                    </Button>
                    <Button type="dashed" className='ml-10' shape="round" onClick={this.goTo.bind(this,'docs/coffee')} icon={<OrderedListOutlined />} size='middle'>
                      捐赠列表
                    </Button>
                  </div>
                </div>
                <div>
                  <img className='dashbord-img' src='../../static/img/left.svg'></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wow animate__animated animate__zoomIn" data-wow-duration="1s" data-wow-delay="0.3s">
          <div >
            <div className='card'>
              <div>
                <Row gutter={[16, 16]}>

                  {
                    list.map((item, index) => {
                      return <Col xs={12} md={8} key={index} className='flex-center-center' span={8} >
                        <div className='postCard'>
                          <img className='postCard-img' src={item.imageUrl}></img>
                          <div className='postCard-body'>
                            <div className='postCard-title'>{item.title}</div>
                            <div className='postCard-des'>{item.description}</div>
                          </div>
                        </div>
                      </Col>
                    })
                  }

                </Row>
              </div>
            </div>
          </div>
        </section>
        <section className="wow animate__animated animate__zoomIn" data-wow-duration="1s" data-wow-delay="0.3s">
          <div  className='num'>
            <div className='num-body'>
              <div className='card-title'>GVA 服务数据</div>
              <div className='numcardList' >
                    <div className='numCard'>
                      <div className='numCard-num'>
                        <CountUp start={0} end={this.state.star} duration={4} />
                      </div>
                      <div className='numCard-title'>Star数</div>
                    </div>

                    <div className='numCard'>
                      <div className='numCard-num'>
                        <CountUp start={0} end={this.state.forks} duration={4} />
                      </div>
                      <div className='numCard-title'>Forks数</div>
                    </div>
                    <div className='numCard'>
                      <div className='numCard-num'>
                        <CountUp start={0} end={this.state.subscribers_count} duration={4} />
                      </div>
                      <div className='numCard-title'>Subscribers数</div>
                    </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Home;
