<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="utf-8"/>
    <xsl:template match="/">
        <html lang="fr">
            <head>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                <title><xsl:value-of select="index/first_title"/></title>
                <link href="http://fonts.googleapis.com/css?family=Dancing+Script|Open+Sans+Condensed:300" rel="stylesheet" type="text/css" />
                <link href="style.css" rel="stylesheet" type="text/css" media="screen" />
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <script src="JavaScript/china_education.js"></script>
                <script src="JavaScript/france_education.js"></script>
            </head>
            <body>
                <div id="wrapper">
                    <div id="menu-wrapper">
                        <div id="menu" class="container">
                            <ul>
                                <li class="current_page_item"><a href="#">Home</a></li>
                                <li><a href="#">Population</a></li>
                                <li><a href="#">Homme&amp;Femme</a></li>
                                <li><a href="#">Education</a></li>
                                <li><a href="#">Tableau de données</a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div id="logo" class="container">
                        <h1><xsl:value-of select="education/big_title"/></h1>
                        <p><xsl:value-of select="education/description_bref"/></p>
                    </div>
                    <div class="divider"> </div>
                    
                    
                    <div id="page" class="container">   
                        <p><xsl:value-of select="education/principal/devant"/></p>
                        <h3 class="title"><xsl:value-of select="education/principal/china/title"/></h3>
                        <div class="entry">
                            <div id="china_education" style="width: 100%; height: 100%"></div>
                            <p><xsl:value-of select="education/principal/china/content"/></p>
                        </div>
                        <br/>
                        
                        <h3 class="title"><xsl:value-of select="education/principal/france/title"/></h3>
                        <div class="entry">
                            <div id="france_education" style="width: 100%; height: 100%"></div>
                            <p><xsl:value-of select="education/principal/france/content"/></p>
                        </div>
                        <br/>
                        
                        <h3 class="title"><xsl:value-of select="education/principal/conclusion/title"/></h3>
                        <div class="entry">
                            <p><xsl:value-of select="education/principal/conclusion/content"/></p>
                        </div>
                        
                        <div style="clear: both;"> </div>
                    </div>
                    
                    <div class="divider"> </div>
                    
                    
                    
                </div>
                <div id="footer-content" class="container">  
                </div>
                <div id="footer">
                    <p>@2017-2018 Inalco M2 TAL RONG Xi, YANG Mengwei, ZHANG Yunbei</p>
                </div>
                <!-- end #footer -->
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>