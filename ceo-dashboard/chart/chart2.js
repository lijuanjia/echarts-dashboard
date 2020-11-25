var chart2 = echarts.init(document.getElementById('chart2'));
option2 = {
    backgroundColor: 'transparent',
    title: {
        show: false,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        },
        formatter: function (prams) {
            return prams[0].axisValueLabel + "访问量：" + prams[0].data + "万人"
        }
    },
    legend: {
        show: false,
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#292f39'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '3%',
        containLabel: true
    },
    xAxis: [{
        show: true,
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
            color: 'rgb(170,170,170)',
            fontSize: 14
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
    }],
    yAxis: [{
        show: true,
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                
                color: '#0c3b71'
            }
        },
        axisLabel: {
            color: 'rgb(170,170,170)',
            margin: 10,
            textStyle: {
                fontSize: 12
            },
            formatter: '{value} 万人'
        },
        splitLine: {
            lineStyle: {
                show: false,
                color: 'transparent'
            }
        }
    }],
    series: [{
        name: '访问量',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(205,52,42, 0.5)'
                }, {
                    offset: 0.8,
                    color: 'rgba(235,235,21, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            },
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(205,52,42,1)'
                }, {
                    offset: 1,
                    color: 'rgba(235,235,21,1)'
                }])
            },
            emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
        },
        data: [25, 38, 52, 36, 63, 86]
    }]
};

chart2.setOption(option2);