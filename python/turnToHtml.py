def turnToHtml(file):
    fileName=file.split(".")[0]
    with open(file,"r",encoding="utf-8") as file:
        text=file.read()
        univ=[]
        cpt=0
        with open(fileName+".html","w",encoding="utf-8") as out:
            out.write("<table id=\"donnees\">\n")
            for line in text.split("\n"):
                if cpt==0:
                 balises=tuple(line.split("\t"))
                 out.write("<tr>\n")
                 for balise in balises:
                     if "|" not in balise:
                         out.write("<th>"+balise+"</th>\n")
                     else:
                         balise,unity=balise.split("|")
                         out.write("<th>"+balise+"("+unity+")"+"</th>\n")
                 out.write("</tr>\n")
                 cpt+=1
                else:
                    out.write("<tr>\n")
                    elements=line.split("\t")
                    for element in elements:
                        out.write("<td>"+element+"</td>\n")
                    out.write("</tr>\n")
            out.write("</table>\n")


turnToHtml("population_france_final.csv")