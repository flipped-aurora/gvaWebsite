import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import PluginMain from './pluginComponents/pluginMain.jsx'
import PluginLeft from './pluginComponents/pluginLeft.jsx'

import './pluginComponents/plugin.css'
function Plugin() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`gva 插件市场`}
            description="gin-vue-admin gva 插件市场 golang插件 golang"
        >
            <div >
                <div className={`plugin`}>
                    <PluginLeft />
                    <PluginMain />
                </div>
            </div>
        </Layout>
    );
}

export default Plugin;
