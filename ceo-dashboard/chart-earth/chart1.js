var chart1 = echarts.init(document.getElementById('chart1'));
const color = {
    color: ['#01FBFC', '#2AB9FF', '#EE7108', '#EEA407', '#65AC17', '#2C76FE',
        '#2A3EFE', '#5D2CFE', '#A82CFE', '#F444AC'],
    line: ['#01FBFC', '#2AB9FF', '#EE7108', '#EEA407', '#65AC17', '#2C76FE',
        '#2A3EFE', '#5D2CFE', '#A82CFE', '#F444AC']
}
option = {
    title: {
        text: '',
        x: 'center'
    },
    color: ['#01FBFC', '#2AB9FF', '#EE7108', '#EEA407', '#65AC17', '#2C76FE', '#2A3EFE',
        '#5D2CFE', '#A82CFE', '#F444AC'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show: true,
    },
    legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
        show: false,
        bottom: 10,
        orient: 'horizontal',
        itemWidth: 12,
        itemHeight: 12,
        padding: [15, 0, 0, 20],
        textStyle: {
            color: 'white',
            lineHeight: 12,
            padding: [1, 25, 1, 0]
        }
    },
    series: [
        {
            name: '用户地域分布',
            type: 'pie',
            radius: [20, 85],
            roseType: 'area',
            center: ['50%', '50%'],
            data: [20, 20, 5, 10, 15, 15, 10, 25, 5, 5].map((item, index) => {
                const dept = ['华南', '华北', '美洲', '西北', '东北',
                    '西南', '欧洲', '华东', '东南亚', '非洲']
                return {
                    value: item, name: dept[index], selected: true,
                    labelLine: {
                        length: 5,
                        length2: 40,
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: color.color[index] // 0% 处的颜色
                                }, {
                                    offset: 1, color: color.line[index] // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                            width: 0.5,
                            opacity: 0.7
                        }
                    },
                }
            })
        }
    ]
};

chart1.setOption(option);