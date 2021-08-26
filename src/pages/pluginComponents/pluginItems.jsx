import React, { Component } from "react";
import "./plugin.css";

class PluginItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`plugin-item ${this.props.class}`}>
        {
          this.props.hot ?  <div className='gva hot'></div> : ''
        }
        <img className='plugin-item-img' src="https://www.swiftadmin.net/upload/images/2021-05-17/60a25d7e1f039.png" alt="" />
        <div className='mt-20'>
          <div className='plugin-item-title'>gva插件服务</div>
          <div className='plugin-item-con'>gva插件正式上线啦cjaiocjasiojcasijiasjioasjdioajdioasjdioasjdioasjdioasjdioasjdioasjiodjasoidjasoidjioasjdoasijdioasjdoid</div>
        </div>
        <div className='plugin-item-fotter'>
          下载量: 100
        </div>
      </div>
    );
  }
}

class PluginItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="plugin-items">
        <div className="plugin-items-header">
          <div className="plugin-items-header-title">{this.props.title}</div>
          <div>全部</div>
        </div>
        <div className="plugin-items-content">
          {[1,2,3,4].map((item , index) => {
            return <PluginItem  hot={ index == 1}  class={ index % 2 == 0 ? 'slide-in-left' : 'slide-in-right'}  key={item}></PluginItem>;
          })}
        </div>
      </div>
    );
  }
}

export default PluginItems;
