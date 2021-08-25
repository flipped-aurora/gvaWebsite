import React, { Component } from "react";
import "./plugin.css";
import PluginBanner from "./pluginBanner";
import PluginItems from  './pluginItems'


class PluginMain extends Component {
  render() {
    return (
      <div className="plugin-main">
        <div>
          <PluginBanner />
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
