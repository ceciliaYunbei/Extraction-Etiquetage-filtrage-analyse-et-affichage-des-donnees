  google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
            ['Province', 'Population chinoise en 2010 (Unité : 10 000'],
            ['山东省', 609.66],
            ['北京', 1195.05],
            ['天津', 1085.40],
            ['河北', 378.18],
            ['广东省', 580.11],
            ['浙江', 522.63],
            ['河南', 563.02],
            ['江苏省', 766.23],
            ['广西', 194.45],
            ['安徽', 426.75],
            ['四川', 164.79],
            ['重庆市', 350.08],
            ['山西', 227.90],
            ['辽宁省', 295.58],
            ['上海', 3630.49],
            ['吉林省', 146.54],
            ['黑龙江省', 81.69],
            ['陕西省', 181.38],
            ['内蒙古', 20.88],
            ['湖南', 310.08],
            ['湖北', 307.90],
            ['江西', 267.03],
            ['福建', 297.53],
            ['海南', 245.28],
            ['云南省', 116.66],
            ['贵州省', 197.42],
            ['甘肃省', 56.28],
            ['宁夏', 94.90],
            ['新疆', 13.10],
            ['西藏', 2.46]
            //['青海省', 0],
            //['台湾省', 0]
        ]);
    var chart = new google.visualization.GeoChart(document.getElementById('china_density'));
    chart.draw(data, {region: "CN", resolution: "provinces", colors:['ffddcc', 'ff7733', 'b33c00', '662200', '662200']}, );
      
    }