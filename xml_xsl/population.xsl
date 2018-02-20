<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" encoding="utf-8"/>
    <xsl:template match="/">
        <html lang="fr">
            <head>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta http-equiv="content-type" content="text/html; charset=utf-8" />
                <title><xsl:value-of select="population/big_title"/></title>
                <link href="http://fonts.googleapis.com/css?family=Dancing+Script|Open+Sans+Condensed:300" rel="stylesheet" type="text/css" />
                <link href="style.css" rel="stylesheet" type="text/css" media="screen" />
                <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
                <script src="JavaScript/pieRepartition_chine.js"></script>
                <script src="JavaScript/china_population.js"></script>
                <script src="JavaScript/china_density.js"></script>
                <script src="JavaScript/pieRepartition_france.js"></script>
                <script src="JavaScript/france_population.js"></script>
                <script src="JavaScript/france_density.js"></script>
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
                        <h1><xsl:value-of select="population/big_title"/></h1>
                        <p><xsl:value-of select="population/description_bref"/></p>
                    </div>
                    <div class="divider"> </div>
                    
                    <div id="page" class="container"> 
                        <p><xsl:value-of select="population/principal/devant"/></p>
                        <h3 class="title"><xsl:value-of select="population/principal/china/title"/></h3>
                        <div class="entry">
                            <h4 class="title"><xsl:value-of select="population/principal/china/first_content/title"/></h4>
                            <div id="pieRepartition_chine" style="width: 100%; height: 400px;"></div>
                            <div id="china_population" style="width: 100%; height: 100%"></div>
                            <xsl:for-each select="population/principal/china/first_content/content/p">
                                <p><xsl:value-of select="text()"/></p>                            
                            </xsl:for-each>
                        </div>
            
                        <div class="entry">
                            <h4 class="title"><xsl:value-of select="population/principal/china/second_content/title"/></h4>
                            <div id="china_density" style="width: 100%; height: 100%;"></div>
                            <xsl:for-each select="population/principal/china/second_content/content/p">
                                <p><xsl:value-of select="text()"/></p>                            
                            </xsl:for-each>
                        </div>
                        <div style="clear: both;"> </div>
                        <br/>
                        
                        <h3 class="title"><xsl:value-of select="population/principal/france/title"/></h3>
                        <div class="entry">
                            <h4 class="title"><xsl:value-of select="population/principal/france/first_content/title"/></h4>
                            <div id="pieRepartition_france" style="width: 100%; height: 400px;"></div>
                            <div id="france_population" style="width: 100%; height: 100%"></div>
                            <xsl:for-each select="population/principal/france/first_content/content/p">
                                <p><xsl:value-of select="text()"/></p>                            
                            </xsl:for-each>
                        </div>
                        
                        <div class="entry">
                            <h4 class="title"><xsl:value-of select="population/principal/france/second_content/title"/></h4>
                            <div id="france_density" style="width: 100%; height: 100%;"></div>
                            <xsl:for-each select="population/principal/france/second_content/content/p">
                                <p><xsl:value-of select="text()"/></p>                            
                            </xsl:for-each>
                        </div>
                        
                        <div class="entry">
                            <h3 class="title"><xsl:value-of select="population/principal/conclusion/title"/></h3>
                            <xsl:for-each select="population/principal/conclusion/content">
                                <p><xsl:value-of select="text()"/></p>                            
                            </xsl:for-each>
                        </div>
                        <div style="clear: both;"> </div>
                    </div>
                    
                    
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