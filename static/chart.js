$(function () {
    chart3.get_data();
    chart3.render();
});

var chart3 = {
    get_data: function () {
        $.ajax({
            url: '/data/get_city_count',
            type: 'GEt',
            dataType: 'json',
            success: function (data) {
                chart3.render(data);
            }
        });
    },
    render: function (data) {
        var myChart = echarts.init(document.getElementById('chart3'));
        var option = {
            xAxis: {
                type: 'category',
                data: data.xAxis_data
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: data.series_data,
                type: 'bar'
            }]
        };

        myChart.setOption(option);

        // window.addEventListener('resize', function () {
        //     myChart.resize();
        // });
    }
};
