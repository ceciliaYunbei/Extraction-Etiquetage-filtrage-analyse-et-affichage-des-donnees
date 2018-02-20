      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Province', 'hommes', 'Femmes'],
          ['山东省 Shandong', 4844.71, 4734.59],
          ['北京 Beijing', 1012.6, 948.6],
          ['天津 Tianjin', 690.7, 603.1],
          ['河北 Hebei', 3643, 3542.4],
          ['广东省 Guangdong', 5439.74, 4990.57],
          ['浙江 Zhejiang', 2796.57, 2646.12],
          ['河南 Henan', 4748.99, 4653.36],
          ['江苏省 Jiangsu', 3963, 3902.97],
          ['广西 Guangxi', 2392.62, 2210.04],
          ['安徽 Anhui', 3024.6, 2925.5],
          ['四川 Sichuan', 4083.1, 3958.73],
          ['重庆市 Chongqing', 1459.59, 1425.03],
          ['山西 Shanxi', 1833.88, 1737.33],
          ['辽宁省 Liaoning', 2214.77, 2159.86],
          ['上海 Shanghai', 1185.48, 1116.44],
          ['吉林省 Jilin', 1391.2, 1355.02],
          ['黑龙江省 Heilongjiang', 1945.98, 1885.25],
          ['陕西省 Shanxi', 1928.76, 1803.98],
          ['内蒙古 Neimenggu', 1283.14, 1187.5],
          ['湖南 Hunan', 3376.82, 3191.55],
          ['湖北 Hubei', 2939.29, 2784.48],
          ['江西 Jiangxi', 2308.46, 2148.28],
          ['福建 Fujian', 1898.11, 1791.32],
          ['海南 Hainan', 455.99, 411.16],
          ['云南省 Yunnan', 2385, 2211.6],
          ['贵州省 Guizhong', 1795.15, 1679.50],
          ['甘肃省 Gansu', 1306.41, 1251.11],
          ['宁夏 Ningxia', 322.88, 307.25],
          ['新疆 Xinjiang', 1119.02, 1062.31],
          ['西藏 Xizang', 154.26, 145.95],
          //['青海省 Qinghai', 0, 0],
          //['台湾 Taiwan', 0, 0]
        ]);

        var options = {
          chart: {
            title: "Répartition de nombre d'hommes et de femmes",
            subtitle: 'Chine, 2010',
          },

          legend: { position: 'right', itemGap: 20},

          bar:{
            groupWidth: '70%'
          },

          isStacked: 'true',
          bars: 'horizontal',
  
          hAxis: {
            title: "Nombre de gens (unité : 10 000)",
          },

          vAxis: {
            title: "Province"
          }
        };
        var chart = new google.charts.Bar(document.getElementById('china_hf_bar'));
        chart.draw(data, google.charts.Bar.convertOptions(options));

      }