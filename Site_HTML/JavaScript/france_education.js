      google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawMap);

      function drawMap() {
        var data = google.visualization.arrayToDataTable([
        ['Province', 'Population de 15 ans ou plus ayant le diplôme universitaire (%)'],
        ['Alsace', 33.62],
        ['Aquitaine', 35.39],
        ['Auvergne', 32.03],
        ['Basse-Normandie', 29.03],
        ['Bourgogne', 30.25],
        ['Bretagne', 35.77],
        ['Centre', 31.34],
        ['Champagne-Ardenne', 28.73],
        ['Corse', 36.66],
        ['Franche-Comté', 31.55],
        ['Haute-Normandie', 29.71],
        ['Île-de-France', 45.33],
        ['Languedoc-Roussillon', 35.79],
        ['Limousin', 32.07],
        ['Lorraine', 30.80],
        ['Midi-Pyrénées', 38.17],
        ['Nord - Pas-de-Calais', 30.91],
        ['Pays de la Loire', 32.87],
        ['Picardie', 29.28],
        ['Poitou-Charentes', 31.18],
        ["Provence-Alpes-Côte d'Azur", 37.27],
        ['Rhône-Alpes', 37.44],
        ['Guadeloupe', 27.20],
        ['Martinique', 27.77],
        ['La Réunion', 24.16]

      ]);
        
        var chart = new google.visualization.GeoChart(document.getElementById('france_education'));
        chart.draw(data, {region: "FR", resolution: "provinces", colors:['#EFF8FB', '#0039e6', '#072378']});
      
      }