import React, { Component } from "react";
import { Carousel } from "antd";

import './plugin.css';



class PluginMain extends Component {
  render() {
    return (
        <Carousel variableWidth autoplay ring className='plugin-main-banner'>
            <div>
                <img className='plugin-main-banner' src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/banner1.png" alt="" />
            </div>
            <div>
                <img className='plugin-main-banner'  src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/banner1.png" alt="" />
            </div>
            <div>
                <img className='plugin-main-banner'  src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/banner1.png" alt="" />
            </div>
            <div>
                <img className='plugin-main-banner' src="https://cdn.jsdelivr.net/gh/bypanghu/assests@master/colorShop/banner1.png" alt="" />
            </div>
            
        </Carousel>
    );
  }
}

export default PluginMain;
