var chart4 = echarts.init(document.getElementById('chart4'));
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 0,
        shadowColor: '#203665'
    }
};
var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
    }
};
option = {
    backgroundColor: "transparent",
    series: [{
        name: '第一个圆环',
        type: 'pie',
        clockWise: false,
        radius: [60, 65],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['15%', '50%'],
        data: [{
            value: 20,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#3dd4de',
                            align: 'center',
                            fontSize: 18,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 14
                        }
                    },
                    formatter: function (params) {
                        return "{b|制药业}\n\n" + "{a|" + params.value + "%}"; // + "\n\n{b|增长2%}"
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#3dd4de',
                    shadowColor: '#3dd4de',
                    shadowBlur: 10
                }
            }
        }, {
            value: 80,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    }, {
        name: '第二个圆环',
        type: 'pie',
        clockWise: false,
        radius: [60, 65],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '50%'],
        data: [{
            value: 25,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#f7d154',
                            align: 'center',
                            fontSize: 18,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 14
                        }
                    },
                    formatter: function (params) {
                        return "{b|制造业}\n\n" + "{a|" + params.value + "%}"; // + "\n\n{b|增长3%}"
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#f7d154',
                    shadowColor: '#f7d154',
                    shadowBlur: 10
                }
            }
        }, {
            value: 75,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    }, {
        name: '第三个圆环',
        type: 'pie',
        clockWise: false,
        radius: [60, 65],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['85%', '50%'],
        data: [{
            value: 55,
            label: {
                normal: {
                    rich: {
                        a: {
                            color: '#a6f08f',
                            align: 'center',
                            fontSize: 18,
                            fontWeight: "bold"
                        },
                        b: {
                            color: '#fff',
                            align: 'center',
                            fontSize: 14
                        }
                    },
                    formatter: function (params) {
                        return "{b|其他行业}\n\n" + "{a|" + params.value + "%}"; // + "\n\n{b|增长1%}"
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'normal',
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#a6f08f',
                    shadowColor: '#a6f08f',
                    shadowBlur: 10
                }
            }
        }, {
            value: 45,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    }]
}


chart4.setOption(option);