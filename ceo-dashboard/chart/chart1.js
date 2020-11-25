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
            name: '员工分布区域',
            type: 'pie',
            radius: [20, 85],
            roseType: 'area',
            center: ['50%', '40%'],
            data: [40, 10, 25, 30, 15, 35, 25, 45, 30, 15].map((item, index) => {
                const dept = ['研发部', '市场部', '设计部', '销售部', 'IT',
            '人事部', '财务部', '法务部', '创新组', '测试部']
                return {
                    value: item, name: dept[index], selected: true,
                    labelLine: {
                        length: 10,
                        length2: 60,
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