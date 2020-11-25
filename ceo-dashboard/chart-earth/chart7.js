var initRan = function (Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    if (Math.round(Rand * Range) == 0) {
        return Min + 1;
    } else if (Math.round(Rand * Max) == Max) {
        return Max - 1;
    } else {
        var num = Min + Math.round(Rand * Range) - 1;
        return num;
    }
}
var chart7 = echarts.init(document.getElementById('chart7'));
var allData = {
    "citys": [{
        "name": "上海分公司",
        "ename": 'ShangHai',
        "value": [121.472644, 31.231706, 19500],
        "a_data": 99,
        "b_data": 1,
        visualMap: false,
        "barray": [2, 1, 0, 1, 0, 0].reverse(),
        "aarray": [90, 95, 101, 97, 106, 111],
        "aarray2": [3001, 3102, 3240, 3110, 3350, 3400],
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
            "name": "东京分公司",
        "ename": 'Tokyo',
        "value": [139.46, 35.42, 8580],
        "a_data": 75,
        "b_data": 8,
        visualMap: false,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1200, 1430)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
            "name": "多伦多分公司",
        "ename": 'Toronto',
        "value": [-79.375941, 43.671939, 13180],
        "a_data": 76,
        "b_data": 8,
        visualMap: false,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1250)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
            "name": "纽约分公司",
        "ename": 'New York',
        "value": [-73.864711, 40.700099, 10250],
        "a_data": 85,
        "b_data": 4,
        visualMap: false,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(1, 7)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(2000, 2500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    },
    {
        "name": "墨尔本分公司",
        "ename": 'Melbourne',
        "value": [144.999416, -37.781726, 9250],
        "a_data": 80,
        "b_data": 8,
        visualMap: false,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(70, 90)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "新加坡分公司",
        "ename": 'Singapore',
        "value": [103.9697265625, 1.331445312499994, 8820],
        "a_data": 80,
        visualMap: false,
        "b_data": 7,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(4, 10)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(70, 90)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "新德里分公司",
        "ename": 'New Delhi',
        "value": [77.210407, 28.607340, 5120],
        "a_data": 45,
        "b_data": 20,
        visualMap: false,
        "barray": [19, 20, 17, 21, 18, 17].reverse(),
        "aarray": [37, 35, 43, 33, 41, 44],
        "aarray2": [650, 603, 750, 590, 734, 796],
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "巴黎分公司",
        visualMap: false,
        "ename": 'Paris',
        "value": [5.789746093749983, 49.53828125000001, 8325],
        "a_data": 75,
        "b_data": 8,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(900, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "慕尼黑分公司",
        "ename": 'Munich',
        visualMap: false,
        "value": [8.307714843750034, 54.786962890625034, 9522],
        "a_data": 78,
        "b_data": 8,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(900, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "伦敦分公司",
        "ename": 'London',
        visualMap: false,
        "value": [-1.657222, 51.886863, 10205],
        "a_data": 85,
        "b_data": 5,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(2, 8)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1550)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }, {
        "name": "巴西利亚分公司",
        "ename": 'Brasilia',
        visualMap: false,
        "value": [-47.904010, -15.796092, 5502],
        "a_data": 85,
        "b_data": 5,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(2, 8)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1550)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }, {
        "name": "开普敦分公司",
        "ename": 'Cape Town',
        visualMap: false,
        "value": [18.416095, -33.921572, 8205],
        "a_data": 85,
        "b_data": 5,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(2, 8)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1550)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }, {
        "name": "开罗分公司",
        "ename": 'Cairo',
        visualMap: false,
        "value": [31.235859, 30.044403, 5502],
        "a_data": 85,
        "b_data": 5,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(2, 8)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1550)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }],
}
var allData2 = {
    "citys": [{
        "name": "China",
        "ename": '上海分公司',
        "value": 19500,
        "a_data": 99,
        "b_data": 1,
        "barray": [2, 1, 0, 1, 0, 0].reverse(),
        "aarray": [90, 95, 101, 97, 106, 111],
        "aarray2": [3001, 3102, 3240, 3110, 3350, 3400],
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "Japan",
        "ename": '东京分公司',
        "value": 8580,
        "a_data": 75,
        "b_data": 8,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1200, 1430)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "Canada",
        "ename": '多伦多分公司',
        "value": 13180,
        "a_data": 76,
        "b_data": 8,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1250)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "United States",
        "ename": '纽约分公司',
        "value": 10250,
        "a_data": 85,
        "b_data": 4,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(1, 7)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(2000, 2500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    },
    {
        "name": "Australia",
        "ename": '墨尔本分公司',
        "value": 9250,
        "a_data": 80,
        "b_data": 8,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(70, 90)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "Singapore",
        "ename": '新加坡分公司',
        "value": 8820,
        "a_data": 80,
        "b_data": 7,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(4, 10)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(70, 90)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "India",
        "ename": '新德里分公司',
        "value": 5120,
        "a_data": 45,
        "b_data": 20,
        "barray": [19, 20, 17, 21, 18, 17].reverse(),
        "aarray": [37, 35, 43, 33, 41, 44],
        "aarray2": [650, 603, 750, 590, 734, 796],
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "France",
        "ename": '巴黎分公司',
        "value": 8325,
        "a_data": 75,
        "b_data": 8,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(900, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "Germany",
        "ename": '慕尼黑分公司',
        "value": 9522,
        "a_data": 78,
        "b_data": 8,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(5, 11)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(65, 85)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(900, 1500)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }
    }, {
        "name": "United Kingdom",
        "ename": '伦敦分公司',
        "value": 10205,
        "a_data": 85,
        "b_data": 5,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(2, 8)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(1000, 1550)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }, {
        "name": "South Africa",
        "ename": '开普敦分公司',
        "value": 8205,
        "a_data": 85,
        "b_data": 5,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(2, 8)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(800, 1150)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }, {
        "name": "Egypt",
        "ename": '开罗分公司',
        "value": 5502,
        "a_data": 85,
        "b_data": 5,
        "barray": Array.from({ length: 6 }, (v, k) => {
            return initRan(2, 8)
        }),
        "aarray": Array.from({ length: 6 }, (v, k) => {
            return initRan(75, 95)
        }),
        "aarray2": Array.from({ length: 6 }, (v, k) => {
            return initRan(600, 850)
        }),
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }, {
        "name": "Brazil",
        "ename": '巴西利亚分公司',
        "value": 5502,
        "a_data": 85,
        "b_data": 5,
        "barray": [6, 5, 8, 6, 10, 6].reverse(),
        "aarray": [70, 78, 60, 71, 53, 70],
        "aarray2": [600, 700, 550, 612, 500, 620],
        "symbolSize": 12,
        "itemStyle": {
            "normal": {
                "color": "rgb(0,55,255)"
            }
        }

    }],
}
option = {
    title: {
        text: '2019年全球分公司实时销售额统计图',
        left: 'center',
        textStyle: {
            color: '#30A9DE'
        }
    },
    visualMap: [{
        min: 5000,
        max: 20000,
        left: 50,
        calculable: true,
        color: ['rgb(80,227,194)', '#8CD790', 'rgb(254,153,44)'],
        textStyle: {
            color: '#fff'
        },
        formatter: function (params) {
            return parseInt(params) + '万元'
        }
    }],
    backgroundColor: 'transparent',

    tooltip: {
        trigger: "item",
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: "z-index:100",
        formatter: function (params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            if (params.seriesType == "effectScatter") {
                var res = "";
                var name = params.name;
                var value = params.value[2];
                var value2 = params.data.a_data;
                var value3 = params.data.b_data;
                res =
                    "<div style='padding:5px'>" +
                    "<span style='color:#fff;font-size: 18px;border-bottom:1px solid #fff;display:inline-block;width:100%;margin-bottom:3px;padding-bottom:5px'><strong>" +
                    name +
                    "</strong></span><br/><span>销售额</span>：" +
                    value + "万元"
                    // "<br/><span>人效：</span>" + value2 + "%" +
                    // "<br/><span>员工离职率：</span>" + value3 + "%"
                    + "</div>"
                return res;
            }
        }
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        zoom: 1.35,
        top: 100,
        roam: false,
        itemStyle: {
            normal: {
                areaColor: 'rgba(42,185,255, 0.5)',
                borderColor: 'rgba(67,206,255, 0.5)',
                borderWidth: 1.5
            },
            emphasis: {
                areaColor: 'rgb(42,185,255)'
            }
        }
    },
    series: [
        {
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allData.citys
        },
        {
            type: 'map',
            mapType: 'world',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            zoom: 1.35,
            top: 100,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(42,185,255, 0.5)',
                    borderColor: 'rgba(67,206,255, 0.5)',
                    borderWidth: 1.5
                },
                emphasis: {
                    areaColor: 'rgb(42,185,255)'
                }
            },
            data: allData2.citys
        }
    ]
};

chart7.setOption(option);
chart7.on('click', function (params) {
    if (params.data && typeof (params.data.value) == 'number') {
        showModal(params.data)
    }
});