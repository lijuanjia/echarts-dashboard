var schart1 = echarts.init(document.getElementById('schart1'));
var yAxisData = ['1月', '2月', '3月', '4月', '5月', '6月'];
var option = {
    backgroundColor: 'transparent',
    tooltip: {
        formatter: '{b} 离职率({c}%)</br>全公司平均离职率7%'
    },
    grid: {
        left: 30
    },
    title: {
        text: '离职率月度统计(%)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: '#F1F1F3'
        },
        top: 25
    },
    xAxis: [{
        max: 22,
        gridIndex: 0,
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }

    },],
    yAxis: [{
        gridIndex: 0,
        interval: 0,
        data: yAxisData.reverse(),
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: "8px",
                color: "#36a8fa"
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        }

    }],
    series: [{
        type: 'bar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        barWidth: '45%',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(41,134,207,1)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0,255,205,.9)'
                }], false)
            }
        },
        markLine: {
            data: [{
                xAxis: 7
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
                // position: 'middle',
                formatter: function (params) {
                    return '平均值85万元／人'
                }
            }

        },
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return params.value + '%'
                },
                position: "right",
                textStyle: {
                    color: "#00FFCD"
                },

            }
        },
        data: ['135', '764', '692', '834', '549', '734']
    },

    ]
};


schart1.setOption(option);

var setData1 = function (params) {
    schart1.setOption(params);
}

schart1.on('click', function (params) {
    if (params.value > 7) {
        // $('.back-0').addClass('back-1')
        $('.error-part').addClass('error-part-active')
        // window.location.href = window.location.origin + window.location.pathname.split('/ceo')[0] + '/db'
    }
});