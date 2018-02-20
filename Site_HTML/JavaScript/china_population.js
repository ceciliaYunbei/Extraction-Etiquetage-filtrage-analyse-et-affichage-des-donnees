      google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['Province', 'Population chinoise en 2010 (Unité : 10 000)'],
            ['山东省', 9579.31],
            ['北京', 1961.2],
            ['天津', 1293.8],
            ['河北', 7185.42],
            ['广东省', 10430.3],
            ['浙江', 5442.69],
            ['河南', 9402.36],
            ['江苏省', 7865.99],
            ['广西', 4602.66],
            ['安徽', 5950.1],
            ['四川', 8041.82],
            ['重庆市', 2884.62],
            ['山西', 3571.2],
            ['辽宁省', 4374.63],
            ['上海', 2301.91],
            ['吉林省', 2746.22],
            ['黑龙江省', 3831.2],
            ['陕西省', 3732.74],
            ['内蒙古', 2470.63],
            ['湖南', 6568.37],
            ['湖北', 5723.77],
            ['江西', 4456.75],
            ['福建', 3689.42],
            ['海南', 867.15],
            ['云南省', 4596.6],
            ['贵州省', 3474.65],
            ['甘肃省', 2557.53],
            ['宁夏', 630.14],
            ['新疆', 2181.33],
            ['西藏', 300.22],
            //['青海省', 0],
            //['台湾省', 0]
        ]);
    var chart = new google.visualization.GeoChart(document.getElementById('china_population'));
    chart.draw(data, {region: "CN", resolution: "provinces", colors:['#ffece6', '#ffb399', '#FF4000', '#B43104']}, );
      
    }