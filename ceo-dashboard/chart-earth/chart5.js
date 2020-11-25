var chart5 = echarts.init(document.getElementById('chart5'));
var lightBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(0, 192, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(0, 192, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
var darkBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(41, 121, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

function randomData() {
    let value = Math.random() * 50;
    return {
        value: Math.round(value)
    }
}
// 时间设置
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function timeSet() {
    var newTime = new Date();
    var m = newTime.getMinutes();
    var s = newTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    return [m, s].join(':');
}

var data = [];
var timeData = [];

for (var i = 0; i < 9; i++) {
    timeData.unshift(timeSet());
    data.unshift(randomData());
}
// 指定图表的配置项和数据
var option = {
    tooltip: {
        show: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // boundaryGap: 100,
        min: -1,
        max: 9,
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisTick: {
            interval: (index) => {
                if (index === -1 || index === 9) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        axisLabel: {
            color: 'rgb(170,170,170)',
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        data: timeData,

    },
    yAxis: [{
        max: 50,
        min: 0,
        axisLine: {
            lineStyle: {
                color: '#4bbbf8',
                shadowColor: 'rgba(75, 211, 255, 0.5)',
                shadowBlur: 5
            }
        },
        axisLabel: {
            color: 'rgb(170,170,170)',
            fontSize: 12
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(75, 211, 255, 0.2)',
                type: 'dashed'
            }
        }
    }],
    series: [{
        name: '数量',
        type: 'pictorialBar',
        barCategoryGap: '-60%',
        symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
        label: {
            show: true,
            position: 'top',
            color: '#1798ff',
            fontSize: 14
        },
        itemStyle: {

            color: function (params) {
                return params.dataIndex % 2 ? darkBlue : lightBlue;
            }
        },
        data: data
    }],
    grid: {
        top: 20,
        bottom: 30,
        right: 20
    },
    backgroundColor: "transparent",
};

chart5.setOption(option);
var key = 0;
setInterval(function () {

    timeData.shift();
    timeData.push(timeSet());

    data.shift();
    data.push(randomData());

    // 颜色控制
    key = (key === 1) ? 0 : 1;

    chart5.setOption({
        xAxis: {
            data: timeData
        },
        series: [{
            itemStyle: {
                normal: {
                    color: function (params) {
                        return (params.dataIndex + key) % 2 ? darkBlue : lightBlue;
                    }
                }
            },
            data: data
        }]
    });
}, 1000);


chart5.setOption(option);