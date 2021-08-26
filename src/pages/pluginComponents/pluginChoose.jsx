import React, { Component } from "react";
import "./plugin.css";
import { Input } from "antd";

const { Search } = Input;
class pluginLeft extends Component {
  constructor() {
    super();
    this.state = {
      types: ["全部", "后端", "前端", "拓展", "未归类"],
      leftKey: ["全部", "官方", "免费", "热门"],
      currentKey: 0,
      currentTypeKey: 0,
    };
  }
  handleClick(e){
    this.setState({
      currentTypeKey: e,
    });
  };
  handleClick2(e){
    this.setState({
      currentKey: e,
    });
  };
  render() {
    return (
      <div className="plugin-choose">
        <div className="flex-center">
          <div className="chooseTitle">插件分类:</div>
          <div className="flex-center">
            {this.state.types.map((item, index) => {
              return (
                <div
                  className={`chooseItem ${
                    this.state.currentTypeKey == index ? "active" : ""
                  }`}
                  key={index}
                  onClick={()=>{this.handleClick(index)}}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-center mt-10">
          <div className="chooseTitle">选项标签:</div>
          <div className="flex-space">
            <div className="flex-center">
            {this.state.leftKey.map((item, index) => {
              return (
                <div
                  className={`chooseItem ${
                    this.state.currentKey == index ? "active" : ""
                  }`}
                  key={index}
                  onClick={()=>{this.handleClick2(index)}}
                >
                  {item}
                </div>
              );
            })}
            </div>
            <div className='plugin-search'>
            <Search
              placeholder="请输入关键词"
              allowClear
              enterButton="搜索"
              size="large"
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default pluginLeft;
