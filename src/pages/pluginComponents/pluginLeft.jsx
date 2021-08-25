import React, { Component } from "react";
import "./plugin.css";
import { Input } from "antd";

const { Search } = Input;
class pluginLeft extends Component {
  constructor() {
    super();
    this.state = {
      leftKey: ["全部", "官方", "免费"],
      currentKey: 0,
    };
  }
  handleClick = (e) => {
    this.setState({
      currentKey: e,
    });
  };
   onSearch = (e)=>{
    console.log(e)
  }

  render() {
    return (
      <div className="plugin-left">
        <div className="plugin-left-search">
          <Search
            placeholder="请输入关键词"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={this.onSearch.bind(this)}
          />
        </div>
        <ul>
          {this.state.leftKey.map((item, index) => {
            return (
              <li
                className={`plugin-left-item ${
                  this.state.currentKey == index ? "active" : ""
                }`}
                key={index}
                onClick={this.handleClick.bind(this, index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default pluginLeft;
