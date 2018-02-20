 google.charts.load('current', {
        'packages':['geomap'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawMap);

      function drawMap() {
        var data = google.visualization.arrayToDataTable([
        ['Province', 'Population de 15 ans ou plus ayant le diplôme universitaire (%) '],
        ['山东省', 10.32],
        ['北京', 34.47],
        ['天津', 19.38],
        ['河北', 8.77],
        ['广东省', 9.88],
        ['浙江', 9.71],
        ['河南', 8.10],
        ['江苏省', 12.43],
        ['广西', 7.64],
        ['安徽', 8.17],
        ['四川', 8.04],
        ['重庆市', 10.41],
        ['山西', 10.52],
        ['辽宁省', 13.51],
        ['上海', 24.02],
        ['吉林省', 11.24],
        ['黑龙江省', 10.30],
        ['陕西省', 12.38],
        ['内蒙古', 11.88],
        ['湖南', 9.22],
        ['湖北', 11.07],
        ['江西', 8.76],
        ['福建', 9.05],
        ['海南', 9.71],
        ['云南省', 7.26],
        ['贵州省', 7.08],
        ['甘肃省', 9.19],
        ['宁夏', 11.66],
        ['新疆', 13.48],
        ['西藏', 7.28],
        //['青海省', 0],
        //['台湾省', 0]
      ]);

        var chart = new google.visualization.GeoChart(document.getElementById('china_education'));
        chart.draw(data, {region: "CN", resolution: "provinces", colors:['#e6ecff', '#0039e6', '#072378']});
      
      }