import React, { Component } from 'react';
import Layout from '@theme/Layout';
// import NavBar from '@theme/Layout'
import { Button, Row, Col } from 'antd';
import { ArrowRightOutlined, GithubOutlined, OrderedListOutlined } from '@ant-design/icons';
import "animate.css"
import '../css/index.css'
import axios from 'axios'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex : 0
    }
  }
  componentDidMount() {
    // axios.get('https://api.github.com/repos/flipped-aurora/gin-vue-admin', {})
    //   .then((response) => {
    //     if (response.status == 200) {
    //       this.setState({
    //         star: Number(response.data.stargazers_count),
    //         forks: response.data.forks_count,
    //         subscribers_count: response.data.subscribers_count
    //       })


    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


  }

  render() {
    return (
     <div>
       {/* <NavBar></NavBar> */}
        <Swiper
        modules={[Pagination]}
        direction={'vertical'}
        mousewheel={true}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={(res) =>{
          this.setState({
            currentIndex : res.activeIndex
          })
          if(res.activeIndex != 2){
            var box=document.getElementsByClassName("footer");
            if(box){ //此处在加一层判断，更加严密，如果box存在的情况下获取
              console.log(box[0].offsetHeight);
           }
          }
        }}
      >
        <SwiperSlide>
          <div className='swiperdemo'>1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperdemo'>2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperdemo'>3</div>
        </SwiperSlide>
      </Swiper>
     </div>
    )
  }
}

export default Home;
