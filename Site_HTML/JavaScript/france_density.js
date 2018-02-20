      google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawMap);

      function drawMap() {
      var data = google.visualization.arrayToDataTable([
        ['Région', 'Population française en 2010 (Unité : 10 000)'],
        ['Alsace', 222.9],
        ['Aquitaine', 78.3],
        ['Auvergne', 51.8],
        ['Basse-Normandie', 83.8],
        ['Bourgogne', 52.0],
        ['Bretagne', 117.6],
        ['Centre', 65.1],
        ['Champagne-Ardenne', 52.2],
        ['Corse', 35.7],
        ['Franche-Comté', 72.3],
        ['Haute-Normandie', 149.1],
        ['Île-de-France', 981.2],
        ['Languedoc-Roussillon', 96.3],
        ['Limousin', 43.8],
        ['Lorraine', 99.8],
        ['Midi-Pyrénées', 63.5],
        ['Nord - Pas-de-Calais', 325.3],
        ['Pays de la Loire', 111.3],
        ['Picardie', 98.7],
        ['Poitou-Charentes', 68.6],
        ["Provence-Alpes-Côte d'Azur", 156],
        ['Rhône-Alpes', 142.6],
        ['Guadeloupe', 245.8],
        ['Martinique', 340],
        ['Guyane', 3],
        ['La Réunion', 339]
      ]);

      var chart = new google.visualization.GeoChart(document.getElementById('france_density'));
    chart.draw(data, {region: "FR", resolution: "provinces", colors:['ffddcc', 'ff7733', 'b33c00']}, ); }