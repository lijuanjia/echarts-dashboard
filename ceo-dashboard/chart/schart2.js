var schart2 = echarts.init(document.getElementById('schart2'));
option2 = {
    backgroundColor: 'transparent',
    title: {
        text: '人效月度统计/销售额月度统计',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#F1F1F3'
        },
        top: 25
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        },
        formatter: function(params) {
            // console.log(params[0].data)
            return `<div style="padding: 0 10px;"><div style="border-bottom: 1px dashed rgba(255,255,255, 0.3);font-size: 14px;padding: 5px 0">${params[0].axisValue}人效
            <span style="padding: 0 10px;font-size: 16px;font-weight: 600">${params[0].data}</span>万元/人</div>
            <div style="padding: 3px 0;color: rgba(255,255,255, 0.7)">全公司平均人效80万/人</div>
            <div style="height: 1px;border-bottom: 1px solid white;margin: 5px 0;"></div>

            <div style="border-bottom: 1px dashed rgba(255,255,255, 0.3);font-size: 14px;padding: 5px 0">${params[0].axisValue}销售额
            <span style="padding: 0 10px;font-size: 16px;font-weight: 600">${params[1].data}</span>万元/月</div>
            <div style="padding: 3px 0;color: rgba(255,255,255, 0.7)">全公司平均销售额900万元/月</div></div>`
        }
    },
    legend: {
        show: true,
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        top: 25,
        itemGap: 13,
        data: ['人效月度统计', '销售额月度统计'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '20%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: "8px",
                color: "#36a8fa"
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
            // rotate: -10,
            formatter: function(params) {
                return params + '万元/人'
            },
            textStyle: {
                fontSize: "8px",
                color: "#36a8fa"
            }
        },
        max: 120,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        }
    }, {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            position: 'right',
            axisLabel: {
                show: true,
                formatter: function (params) {
                    return params + '万元/月'
                },
                // rotate: -10,
                textStyle: {
                    fontSize: "8px",
                    color: "#36a8fa"
                }
            },
            max: 3500,
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
    series: [{
        yAxisIndex: 0,
        name: '人效月度统计',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        markLine: {
            data: [{
                yAxis: 80
            }],
            silent: true,
            symbol: 'rect',
            symbolSize: 1,
            lineStyle: {
                normal: {
                    color: '#d6313a',
                    type: 'dashed'
                }
            },
            label: {
                show: false,
                position: 'middle',
                formatter: function (params) {
                    return '平均值85万元／人'
                }
            }
            
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)'
            }
        },
        data: [96.3, 96.4, 97.5, 95.6, 98.1, 94.8]
    }, {
            yAxisIndex: 1,
            name: '销售额月度统计',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            markLine: {
                data: [{
                    yAxis: 900
                }],
                silent: true,
                symbol: 'rect',
                symbolSize: 1,
                lineStyle: {
                    normal: {
                        color: 'rgb(13,208,158)',
                        type: 'dashed'
                    }
                },
                label: {
                    show: false,
                    position: 'middle',
                    formatter: function (params) {
                        return '平均值85万元／人'
                    }
                }

            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(61,212,222, 0.3)'
                    }, {
                        offset: 0.8,
                            color: 'rgba(61,212,222, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(61,212,222)'
                }
            },
            data: [86.3, 86.4, 87.5, 85.6, 88.1, 84.8]
        },]
};

schart2.setOption(option2);

var setData2 = function (params) {
    schart2.setOption(params);
}