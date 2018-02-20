      google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawMap);

      function drawMap() {
        var data = google.visualization.arrayToDataTable([
        ['Province', "Différence entre le nombre de femmes et d'hommes (unité : 10 000) "],
        ['山东省', 110.12],
        ['北京', 64],
        ['天津', 87.6],
        ['河北', 100.6],
        ['广东省', 449.17],
        ['浙江', 150.45],
        ['河南', 95.63],
        ['江苏省', 60.1],
        ['广西', 182.58],
        ['安徽', 99.1],
        ['四川', 124.37],
        ['重庆市', 34.56],
        ['山西', 96.55],
        ['辽宁省', 54.91],
        ['上海', 69.04],
        ['吉林省', 36.18],
        ['黑龙江省', 60.73],
        ['陕西省', 124.78],
        ['内蒙古', 95.64],
        ['湖南', 185.27],
        ['湖北', 154.81],
        ['江西', 160.18],
        ['福建', 106.79],
        ['海南', 44.83],
        ['云南省', 173.4],
        ['贵州省', 115.65],
        ['甘肃省', 55.3],
        ['宁夏', 15.63],
        ['新疆', 56.71],
        ['西藏', 8.31],
        //['青海省', 0],
        //['台湾省', 0]
      ]);
        var chart = new google.visualization.GeoChart(document.getElementById('china_hf_map'));
        chart.draw(data, {region: "CN", resolution: "provinces", colors:['#F5FBEF', '#289603', '#298A08']});
      
      }