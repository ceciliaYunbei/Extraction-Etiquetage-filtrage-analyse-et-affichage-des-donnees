google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
        ['Province', 'Population (Unité : 10 000)'],
        ["山东省 Shandong", 9579.31],
        ['北京 Beijing', 1961.2],
        ['天津 Tianjin', 1293.8],
        ['河北 Hebei', 7185.42],
        ['广东省 Guangdong', 10430.3],
        ['浙江 Zhejiang', 5442.69],
        ['河南 Henan', 9402.36],
        ['江苏省 Jiangsu', 7865.99],
        ['广西 Guangxi', 4602.66],
        ['安徽 Anhui', 5950.1],
        ['四川 Sichuan', 8041.82],
        ['重庆市 Chongqing', 2884.62],
        ['山西 Shanxi', 3571.2],
        ['辽宁省 Liaoning', 4374.63],
        ['上海 Shanghai', 2301.91],
        ['吉林省 Jilin', 2746.22],
        ['黑龙江省 Heilongjiang', 3831.2],
        ['陕西省 Shanxi', 3732.74],
        ['内蒙古 Neimenggu', 2470.63],
        ['湖南 Hunan', 6568.37],
        ['湖北 Hubei', 5723.77],
        ['江西 Jiangxi', 4456.75],
        ['福建 Fujian', 3689.42],
        ['海南 Hainan', 867.15],
        ['云南省 Yunnan', 4596.6],
        ['贵州省 Guizhong', 3474.65],
        ['甘肃省 Gansu', 2557.53],
        ['宁夏 Ningxia', 630.14],
        ['新疆 Xinjiang', 2181.33],
        ['西藏 Xizang', 300.22],
        //['青海省 Qinghai', 0],
        //['台湾 Taiwan', 0]

        ]);

        var options = {
          title: 'Répartition de population chinoise en 2010',
          pieHole: 0.4,
          colors:['#F5A9A9', '#F78181', '#FA5858', '#FE2E2E', '#FE642E', '#FE642E', '#F79F81','#F5BCA9', '#F5D0A9', '#F7BE81', '#FAAC58', '#FE9A2E', '#FACC2E', '#F7D358', '#F5DA81', '#F3E2A9', '#F2F5A9', '#F3F781', '#F4FA58', '#F7FE2E', '#C8FE2E', '#D0FA58', '#D8F781', '#E1F5A9', '#D0F5A9', '#BEF781', '#ACFA58', '#9AFE2E', '#64FE2E', '#82FA58', '#D8D8D8', '#D8D8D8' ]
        };

        var chart = new google.visualization.PieChart(document.getElementById('pieRepartition_chine'));
        chart.draw(data, options);
      }