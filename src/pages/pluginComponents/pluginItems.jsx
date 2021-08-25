import React, { Component } from "react";
import "./plugin.css";

class PluginItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`plugin-item ${this.props.class}`}>
        <img className='plugin-item-img' src="http://localhost:3000/img/logo.png" alt="" />
        <div className='ml-20'>
          <div className='plugin-item-title'>gva插件服务</div>
          <div className='plugin-item-con'>gva插件正式上线啦cjaiocjasiojcasijiasjioasjdioajdioasjdioasjdioasjdioasjdioasjdioasjiodjasoidjasoidjioasjdoasijdioasjdoid</div>
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
          {[1,2,3,4,5,6].map((item , index) => {
            return <PluginItem class={ index %2 == 0 ? 'slide-in-left' : 'slide-in-right'}  key={item}></PluginItem>;
          })}
        </div>
      </div>
    );
  }
}

export default PluginItems;
