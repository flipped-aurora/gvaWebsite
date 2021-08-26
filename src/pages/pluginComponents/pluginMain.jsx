import React, { Component } from "react";
import "./plugin.css";
import PluginBanner from "./pluginBanner";
import PluginItems from './pluginItems'
import PluginChoose from './pluginChoose'


class PluginMain extends Component {
  render() {
    return (
      <div className="plugin-main">
        <div>
          <PluginBanner />
          <PluginChoose></PluginChoose>
          <div>
            <PluginItems title={`推荐`} ></PluginItems>
            <PluginItems title={`排行`}></PluginItems>
          </div>
        </div>
      </div>
    );
  }
}

export default PluginMain;
