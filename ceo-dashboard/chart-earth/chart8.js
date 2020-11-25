var chart7 = echarts.init(document.getElementById('chart7'));
var airSections = airports.slice(1000, 2000);
var airDatas = [];
for (var i = 0; i < airSections.length; i += 2) {
    airDatas.push([
        [airSections[i][3], airSections[i][4]],
        [airSections[i + 1][3], airSections[i + 1][4]]
    ])
}
var canvas = document.createElement('canvas');
var canvas2 = document.createElement('canvas');
var mapChart = echarts.init(canvas, null, {
    width: 2048,
    height: 1024,
});
var mapHeightChart = echarts.init(canvas2, null, {
    width: 2048,
    height: 1024,
})
mapChart.setOption({
    backgroundColor: 'transparent',
    series: [{
        type: 'map',
        map: 'china',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [
            [-180, 90],
            [180, -90]
        ],
        label: {
            normal: {
                show: false,
                fontSize: 4,
                lineHeigh: 4,
                color: '#000',

            }
        },
        itemStyle: {
            normal: {
                areaColor: 'transparent',
                borderWidth: 1,
                borderType: 'solid',
                borderColor: '#a85000'
            }
        },

    }]
});

mapHeightChart.setOption({
    backgroundColor: 'transparent',
    series: [{
        type: 'map',
        map: 'world',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        silent: true,
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#fff',
                areaColor: '#f00'
            }
        },
        boundingCoords: [
            [-180, 90],
            [180, -90]
        ]
    }]
})
option = {
    backgroundColor: 'transparent',
    globe: {
        globeRadius: 100,
        baseTexture: './js/pic2.jpg',
        silent: true,
        // environment: './js/pic1.jpg',

        displacementQuality: 'ultra',
        shading: 'realistic',
        light: {
            main: {
                shadow: true,
                intensity: 1
            },
            ambient: {
                intensity: 0
            },
            ambientCubemap: {
                texture: './js/data1.hdr',
                diffuseIntensity: 1
            }
        },
        viewControl: {
            autoRotate: true,
            targetCoord: [96.46, 35.92]
        },
        postEffect: {
            enable: true,
            SSAO: {
                enable: true,
                radius: 10
            }
        },
        layers: [{
            type: 'overlay',
            show: true,
            texture: mapChart,
            distance: 0
            // type:'blend'
        }]
    },
    series: [{
        type: 'lines3D',
        effect: {
            show: true,
            period: 2,
            trailWidth: 3,
            trailLength: 0.5,
            trailOpacity: 1,
            trailColor: '#0087f4'
        },
        lineStyle: {
            width: 1,
            color: '#0087f4',
            opacity: 0
        },
        blendMode: 'lighter',
        data: airDatas
    }]
};
chart7.setOption(option);