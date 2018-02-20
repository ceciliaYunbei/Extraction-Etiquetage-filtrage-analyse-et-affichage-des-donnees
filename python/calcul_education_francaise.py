# coding = utf-8
# Source(s) : Insee, Recensements de la population.
fichier = 'france_donnees_complet.csv'
dic = {}
population_plus_15ans = {}
# une liste des numéros de régions correspondants
numero_regions = ['42', '72', '83', '25', '26', '53', '24', '21', '94', '43', '23', '11', '91', '74', '41', '73', '31', '52', '22', '54', '93', '82', '1', '2', '973', '4']
with open(fichier, 'r') as f:
	for ligne in f:
		if len(ligne) == 0:continue
		line = ligne.split('\t')
		for region in numero_regions:
			# si on trouve un numéro de région présenté dans la liste numero_regions
			# line[51] -> Pop 15 ans ou plus non scol. BAC-BP en 2009 (princ)
			# line[52] -> Pop 15 ans ou plus non scol. Enseignement sup court en 2009 (princ)
			# line[53] -> Pop 15 ans ou plus non scol. Enseignement sup long en 2009 (princ)
			if line[1] == region:
				# un dictionnaire qui prend le numéro de région comme clé et la somme de population de 15ans ou plus ayant le diplôme univ comme valeur 
				dic[region] = dic.get(region, 0) + (int(line[51])+int(line[52])+int(line[53]))
				# un dictionnaire qui prend len uméro de région comme clé et la somme de population de 15ans ou plus
				population_plus_15ans[region] = population_plus_15ans.get(region, 0) + (int(line[7])+int(line[8])+int(line[9])+int(line[10]))
# population ayant le diplome universitaire par région		
print(dic, '\n')
for re in dic:
	# proportion de population ayant le diplome universitaire par région
	dic[re] = '%.2f%%' % ((dic[re]/population_plus_15ans[re])*100)		
print(dic)