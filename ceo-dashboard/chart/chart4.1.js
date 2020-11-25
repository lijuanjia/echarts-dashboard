var chart4_1 = echarts.init(document.getElementById('chart4_1'));
var data1 = [
    { name: "张三", value: 88 },
    { name: "李四", value: 250 },
    { name: "王五", value: 5438 },
].sort(function (a, b) {
    return a.value > b.value
});
var data2 = [
    { name: "赵六", value: 8848 },
    { name: "陈七", value: 9527 },
    { name: "朱八", value: 10086 },
].sort(function (a, b) {
    return a.value > b.value
});


option = {
    backgroundColor: "transparent",
    polar: {},
    angleAxis: {
        show: false,
        min: function (value) {
            return value.min >= 1 ? value.min - value.max / 3 : 0
        },
        max: function (value) {
            return value.max * 4 / 3;
        }
    },
    radiusAxis: {
        type: 'category',
        axisLabel: {
            show: false,
            interval: 0,
            color: "#2df",
            fontSize: 16
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(17, 51, 68, 0.8)"
            }
        },
        data: data1.map(function (item) { return item.name }),
    },
    series: [
        {   
            name: 'bar1',
            type: 'bar',
            coordinateSystem: 'polar',
            barWidth: 4,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 1, y: 0, x2: 0, y2: 0.5,
                    colorStops: [
                        { offset: 0, color: 'rgba(50, 120, 150, 0.5)' },
                        { offset: 0.5, color: "rgba(80, 190, 210, 0.7)" },
                        { offset: 1, color: "rgba(255, 255, 255, 0.9)" }
                    ]
                },
                barBorderRadius: 10,
                shadowBlur: 20,
                shadowColor: "rgba(255, 255, 255, 0.8)",
            },
            emphasis: {
                itemStyle: {
                    shadowColor: "rgba(255, 255, 255, 1)",
                }
            },
            data: data1
        },
        {
            name: 'bar2',
            type: 'bar',
            coordinateSystem: 'polar',
            barWidth: 4,
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 1, y: 0, x2: 0, y2: 0.5,
                    colorStops: [
                        { offset: 0, color: 'rgba(50, 120, 150, 0.5)' },
                        { offset: 0.5, color: "rgba(80, 190, 210, 0.7)" },
                        { offset: 1, color: "rgba(255, 255, 255, 0.9)" }
                    ]
                },
                barBorderRadius: 10,
                shadowBlur: 20,
                shadowColor: "rgba(255, 255, 255, 0.8)",
            },
            emphasis: {
                itemStyle: {
                    shadowColor: "rgba(255, 255, 255, 1)",
                }
            },
            data: data2
        },
    ]
};


chart4_1.setOption(option);