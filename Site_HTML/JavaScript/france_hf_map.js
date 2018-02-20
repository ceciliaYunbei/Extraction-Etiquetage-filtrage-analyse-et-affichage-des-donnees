      google.charts.load('current', {
        'packages':['geomap'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawMap);

      function drawMap() {
        var data = google.visualization.arrayToDataTable([
        ['Province', "Différence entre le nombre de femmes et d'hommes (unité : 10 000)"],
        ['Alsace', 4.33],
        ['Aquitaine', 12.30],
        ['Auvergne', 4.30],
        ['Basse-Normandie', 4.57],
        ['Bourgogne', 5.13],
        ['Bretagne', 9.26],
        ['Centre', 7.07],
        ['Champagne-Ardenne', 3.37],
        ['Corse', 0.65],
        ['Franche-Comté', 1.93],
        ['Haute-Normandie', 6.26],
        ['Île-de-France', 40.38],
        ['Languedoc-Roussillon', 10.75],
        ['Limousin', 2.68],
        ['Lorraine', 5.75],
        ['Midi-Pyrénées', 7.46],
        ['Nord - Pas-de-Calais', 14.08],
        ['Pays de la Loire', 9.17],
        ['Picardie', 4.34],
        ['Poitou-Charentes', 5.64],
        ["Provence-Alpes-Côte d'Azur", 21.79],
        ['Rhône-Alpes', 15.73],
        ['Guadeloupe', 2.75],
        ['Martinique', 3.00],
        ['Guyane', 0.18],
        ['La Réunion', 2.52]
    ]);
        var chart = new google.visualization.GeoChart(document.getElementById('france_hf_map'));
        chart.draw(data, {region: "FR", resolution: "provinces", colors:['#F5FBEF', '#289603', '#298A08']});
      
      }