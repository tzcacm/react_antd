import React, { Component } from 'react';
import echarts from 'echarts';
import './index.less';

class EchartComponet extends Component {

    //在componentDidMount里面加入echart初始化代码
    componentDidMount() {
        let { options } = this.props;
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(options);
    }

    render() {
        return (
            <div id="main"></div>
        )
    }
}

export default EchartComponet