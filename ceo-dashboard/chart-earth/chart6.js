var chart6 = echarts.init(document.getElementById('chart6'));
var fontColor = '#30eee9';
option = {
    baseOption: {
        timeline: {
            show: false,
            type: 'slider',
            axisType: 'category',
            bottom: '0',
            currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            autoPlay: true, //是否自动播放
            loop: true,
            realtime: true, //拖动圆点的时候，是否实时更新视图。
            controlPosition: 'left',
            label: {
                normal: {
                    color: '#2998ff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#2998ff',
                    borderWidth: 2,
                }
            },
            checkpointStyle: { //『当前项』（checkpoint）的图形样式
                color: 'rgb(215, 0, 0)',
            },
            lineStyle: {
                show: true, //false 不显示轴线
                color: '#2998ff',
            },
            controlStyle: { //控制按钮的样式
                show: true,
                showPrevBtn: false,
                showNextBtn: false,
                itemGap: 50,
                itemSize: 36,
                normal: {
                    color: 'rgb(215, 0, 0)',
                    borderColor: 'rgb(215, 0, 0)',
                },
                emphasis: {
                    color: 'rgb(215, 0, 0)',
                    borderColor: 'rgb(215, 0, 0)',
                },
            },
            data: ['2017', '2018', '2019'],
        },
        color: ["#00ffa1", "#00fcff", "#f0e751", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        legend: {
            show: true,
            top: 0,
            right: 0,
            padding: 5,
            textStyle: {
                color: 'rgb(170,170,170)',
            }
        },
        title: {
            // right: '20%',
            // top: '0%',
            textStyle: {
                align: 'center',
                color: '#fff',
                rich: { //富文本
                    white: {
                        color: '#fff',
                        fontSize: 12,
                        fontFamily: 'Microsoft YaHei'
                    },
                    blue: {
                        color: '#00eaff',
                        fontSize: 12,
                        fontFamily: 'Microsoft YaHei'
                    }
                },
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: 'rgb(170,170,170)',
                fontSize: 12
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#11839c'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        },
        grid: {
            top: 30,
            bottom: 20,
            right: 20
        },
        yAxis: {
            type: 'value',
            show: true,
            show: true,
            name: '',
            nameLocation: 'end',
            nameGap: 40,
            nameTextStyle: {
                color: '#FFF',
                fontSize: 16,
                padding: [0, 0, 0, 74]
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                fontSize: 12,
                formatter: '{value}(%)'
            },
      
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#292E46',
                },

                show: true
            },
           
        },
        backgroundColor: "transparent",

        series: [{
            name: '月度人数增加率',
            type: 'line',
            smooth: true,
            symbolSize: 0.5,
            symbol: 'circle',
            lineStyle: {
                normal: {
                    opacity: 0.2
                }
            },
            areaStyle: {
                normal: {
                    opacity: "0.2",
                }
            },

        }

        ] //series结束
    },
    options: Array.from({ length: 3}, (c, d) => {
        const title = [
            '{blue|2017}{white|/2018/2019}',
            '{white|2017/}{blue|2018}{white|/2019}',
            '{white|2017/2018/}{blue|2019}']
        return {
            title: {
                text: title[d],
                show: true,
                top: 0,
                right : 0,
            },
            series: Array.from({ length: 1 }, (a, b) => {
                return {
                    data: Array.from({ length: 12 }, (v, k) => {
                        return Math.floor(Math.random() * 10)
                    })
                }
            })
        }
    })
};

chart6.setOption(option);