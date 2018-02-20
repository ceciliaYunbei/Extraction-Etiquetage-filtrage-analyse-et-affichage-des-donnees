# Extraction, Etiquetage, Filtrage, Analyse et affichage-des-donnees

1. Intro
	Nous avons extrait, filtré et reconstruit des données pour comparer la Chine et la France sur la distribution de population, la répartition des femmes et des hommes et le niveau d'éducation. Les données sont structurées en XML, pour avoir une visualisation sur les données, avec le langage xslt nous avons pu transformer les données du XML en HTML et réaliser une affichage graphique.

	Il s'git de 5 phrases dans notre processus: Récupération des données, nettoyage et modélisation des données en XML, génération de la grammaire DTD, génération des graphes de présentation à l'aide de javascript, analyse des données et transformation des données pour le site web.

2. Données
Il y a quatre dossiers:
	1)  Données_Originales
		I. estim.pop.anciennes.regions.sexe.gca.1975.2015.1.fr.xls 
		contient les données de 1975 à 2015 les nombre de la population, des hommes et des femmes chaque région française
		II. population_chine.xlsx
		contient les données utilisés dans la partie Chine de notre projet
		III. diplomes-formation-2014.xls
		contient les données de situation de formation de France
	2)  CSV
		I. population_chine_final.csv
		Le tableau de données traitées à partir de corpus de Chine
		II. population_france_final.csv
		Le tableau de données traitées à partir de corpus de France
	3)  xml
		I. chine_population_final.xml
		Le document xml généré par script "turnToXML.py" avec le tableau "population_chine_final.csv"
		II.chine_population_final_final.dtd
		Le schéma dtd de document "chine_population_final.xml" par Oxygen XML Editor
		III. chine_population_final_final.rng
		Le schéma relax NG de document "chine_population_final.xml" par Oxygen XML Editor
		IV.france_population_final.xml
		Le document xml généré par script "turnToXML.py" avec le tableau "population_france_final.csv"
		V. france_population_final_final.dtd
		Le schéma dtd de document "france_population_final.xml" par Oxygen XML Editor
		VI. france_population_final_final.rng
		Le schéma relax NG de document "france_population_final.xml" par Oxygen XML Editor
		VII. france_rng_valide.txt
		Le résultat de validation de "france_population_final.xml" avec "france_population_final_final.rng"
		VIII. chine_rng_valide.txt
		Le résultat de validation de "chine_population_final.xml" avec "chine_population_final_final.rng"
		IX. valide_france_dtd.txt
		Le résultat de validation de "france_population_final.xml" avec "france_population_final_final.dtd"
		X. valide_chine_dtd.txt
		Le résultat de validation de "chine_population_final.xml" avec "chine_population_final_final.dtd"
	4)  html
		I. population_chine_final.html
		Html tableau généré à partir de "population_chine_final.csv" avec script "turnToHtml.py"
		II. population_france_final.html
		Html tableau généré à partir de "population_france_final.csv" avec script "turnToHtml.py"

3. python
Il y a trois scripts et un fichier texte:
	1). calcul_education_francaise.py
	Sert à calculter le taux de diplome universitaire de population plus que 15 ans par région
	2). turnToHtml.py
	Sert à transformer le fichier csv en tableau HTML
	3). turnToXml.py
	Sert à transformer le fichier csv en fichier XML
	4). pop_france.txt
	Extrait depuis le document "diplomes-formation-2014.xls", traité par script "calcul_education_francaise.py" 
	afin d'obtenir la proportion  de diplome universitaire deplus que 15 ans par région.

4. xml_xsl
Les documents xml et leurs xsl pour faire des pages web:
	education.xml
	education.xsl
	homme_femme.xml
	homme_femme.xsl
	index.xml
	index.xsl
	population.xml
	population.xsl
Le saxon9.jar sert à transformer ces xml documents en html avec leurs xsl. C'est faire une ligne de code dans terminal:
java -jar saxon9.jar -s:xmlSource.xml -o:outputTarget.html -xsl:name.xslt

5. site_HTML
	1). Les documents HTML générés par les documents xml et xsl dans le dossier xml_xsl, il y a en total 4:
		education.html
		homme_femme.html
		population.html
		index.html
	2). Un page web de données contenant les tableaux générés par turnToHtml:
		données.html
	3). un dossier images
		contient les images utilisés dans notre site
	4). un dossier Javascript
		contient les javascripts utilisés pour afficher les images présentant notre données
	4)style.css
		pour l'affichage de site

# Mode d'emploi
ouvrir le fichier Site_HTML/index.html sur Firefox (la page d'accueil)




