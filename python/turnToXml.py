def turnToXml(file):
    fileName=file.split(".")[0]
    with open(file,"r",encoding="utf-8") as file:
        text=file.read()
        univ=[]
        cpt=0
        with open(fileName+".xml","w",encoding="utf-8") as out:
            out.write("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n")
            out.write("<"+fileName+">\n")
            for line in text.split("\n"):
                if cpt==0:
                 balises=tuple(line.split("\t"))
                 cpt+=1
                else:
                    out.write("<province>\n")
                    content=line.split("\t")
                    for i in range(0,len(content)):
                        balise=balises[i]
                        item=content[i]
                        if "|" not in balise:
                            out.write("<"+balise+">"+str(item)+'</'+balise+'>\n')
                        else:
                            balise,attribut=balise.split("|")
                            out.write("<" + balise +" unit=\""+attribut+ "\">" + str(item) + '</' + balise + '>\n')

                    out.write("</province>\n")
            out.write("</"+fileName+">")


turnToXml("population_france_final.csv")