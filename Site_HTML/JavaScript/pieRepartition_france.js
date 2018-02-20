      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
        ['Région', 'Population (Unité : 10 000)'],
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

        var options = {
          title: 'Répartition de population française en 2010',
          pieHole: 0.4,
          colors:['#F5A9A9', '#F78181', '#FA5858', '#FE2E2E', '#FE642E', '#FE642E', '#F79F81','#F5BCA9', '#F5D0A9', '#F7BE81', '#FAAC58', '#FE9A2E', '#FACC2E', '#F7D358', '#F5DA81', '#F3E2A9', '#F2F5A9', '#F3F781', '#F4FA58', '#F7FE2E', '#C8FE2E', '#D0FA58', '#D8F781', '#E1F5A9' ]
        };

        var chart = new google.visualization.PieChart(document.getElementById('pieRepartition_france'));
        chart.draw(data, options);
      }