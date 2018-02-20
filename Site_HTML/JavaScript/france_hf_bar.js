
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['Région', 'hommes', 'Femmes'],
        ['Alsace', 90.12, 94.45],
        ['Aquitaine', 155.47, 167.77],
        ['Auvergne', 65.22, 69.52],
        ['Basse-Normandie', 71.39, 75.96],
        ['Bourgogne', 79.54, 84.67],
        ['Bretagne', 155.32, 164.58],
        ['Centre', 123.87, 130.94],
        ['Champagne-Ardenne', 65.11, 68.48],
        ['Corse', 15.16, 15.81],
        ['Franche-Comté', 57.62, 59.55],
        ['Haute-Normandie', 88.72, 94.98],
        ['Île-de-France', 569.12, 609.5],
        ['Languedoc-Roussillon', 126.44, 137.19],
        ['Limousin', 35.80, 38.48],
        ['Lorraine', 114.67, 120.42],
        ['Midi-Pyrénées', 140.36, 147.82],
        ['Nord - Pas-de-Calais', 194.87, 208.95],
        ['Pays de la Loire', 173.99, 183.16],
        ['Picardie', 93.57, 97.91],
        ['Poitou-Charentes', 85.70, 91.34],
        ["Provence-Alpes-Côte d'Azur", 234.06, 255.85],
        ['Rhône-Alpes', 303.67, 319.4],
        ['Guadeloupe', 18.79, 21.54],
        ['Martinique', 18.21, 21.21],
        ['Guyane', 11.36, 11.54],
        ['La Réunion', 39.80, 42.32]
        ]);

        var options = {
          chart: {
            title: "Répartition de nombre d'hommes et de femmes",
            subtitle: 'France, 2010',
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
        var chart = new google.charts.Bar(document.getElementById('france_hf_bar'));
        chart.draw(data, google.charts.Bar.convertOptions(options));

      }
 