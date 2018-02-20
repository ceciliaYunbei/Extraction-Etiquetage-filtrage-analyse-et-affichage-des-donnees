      google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawMap);

      function drawMap() {
      var data = google.visualization.arrayToDataTable([
        ['Région', 'Population française en 2010 (Unité : 10 000)'],
        ['Alsace', 184.57],
        ['Aquitaine', 323.24],
        ['Auvergne', 134.74],
        ['Basse-Normandie', 147.35],
        ['Bourgogne', 164.21],
        ['Bretagne', 319.91],
        ['Centre', 254.81],
        ['Champagne-Ardenne', 133.59],
        ['Corse', 30.97],
        ['Franche-Comté', 117.18],
        ['Haute-Normandie', 183.70],
        ['Île-de-France', 1178.62],
        ['Languedoc-Roussillon', 263.64],
        ['Limousin', 74.28],
        ['Lorraine', 235.09],
        ['Midi-Pyrénées', 288.18],
        ['Nord - Pas-de-Calais', 403.82],
        ['Pays de la Loire', 357.15],
        ['Picardie', 191.48],
        ['Poitou-Charentes', 177.04],
        ["Provence-Alpes-Côte d'Azur", 489.92],
        ['Rhône-Alpes', 623.07],
        ['Guadeloupe', 40.34],
        ['Martinique', 39.42],
        ['Guyane', 22.90],
        ['La Réunion', 82.11]
      ]);

      var chart = new google.visualization.GeoChart(document.getElementById('france_population'));
    chart.draw(data, {region: "FR", resolution: "provinces", colors:['#ffece6', '#ffb399', '#FF4000', '#B43104']}, );}