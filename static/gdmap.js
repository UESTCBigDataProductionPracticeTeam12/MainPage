$(function () {
    pie_chart.get_data();
    // pie_chart.render();
});

var pie_chart = {
    get_data: function () {
        $.ajax({
            url: '/data/get_city_count_pie',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                pie_chart.render(data)
            }
        });
    },

    render: function (data) {
        var myChart = echarts.init(document.getElementById('gdMap'));

        var option = {
            backgroundColor: '#2c343c',

            title: {
                text: '扇形图',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    // data: [
                    //     {value: 335, name: '直接访问'},
                    //     {value: 310, name: '邮件营销'},
                    //     {value: 274, name: '联盟广告'},
                    //     {value: 235, name: '视频广告'},
                    //     {value: 400, name: '搜索引擎'}
                    // ].sort(function (a, b) {
                    //     return a.value - b.value;
                    // }),
                    data: data.sort(function (a, b) {
                        return a.value - b.value;
                    }),
                    roseType: 'radius',
                    label: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    labelLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    },
                    itemStyle: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };


        myChart.setOption(option);

        window.addEventListener('resize', function () {
            myChart.resize();
        });
    }
};