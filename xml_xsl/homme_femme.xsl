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
                <script src="JavaScript/china_hf_bar.js"></script>
                <script src="JavaScript/china_hf_map.js"></script>
                <script src="JavaScript/france_hf_bar.js"></script>
                <script src="JavaScript/france_hf_map.js"></script>
                
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
                        <h1><xsl:value-of select="homme_femme/big_title"/></h1>
                        <p><xsl:value-of select="homme_femme/description_bref"/></p>
                    </div>
                    <div class="divider"> </div>
                    
                    <div id="page" class="container">                                              
                        <h3 class="title"><xsl:value-of select="homme_femme/principal/china/title"/></h3>
                        <div class="entry">
                            <div id="china_hf_bar" style="width: 97%; height: 500px;"></div>
                            <div id="china_hf_map" style="width: 90%; height: 90%; defaultColor: blue;"></div>
                            <p><xsl:value-of select="homme_femme/principal/china/content"/></p>
                        </div>
                        <br/>
                        
                        <h3 class="title"><xsl:value-of select="homme_femme/principal/france/title"/></h3>
                        <div class="entry">
                            <div id="france_hf_bar" style="width: 97%; height: 500px;"></div>
                            <div id="france_hf_map" style="width: 90%; height: 90%; defaultColor: blue;"></div>
                            <p><xsl:value-of select="homme_femme/principal/france/content"/></p>
                        </div>
                        <br/>
                        
                        <h3 class="title"><xsl:value-of select="homme_femme/principal/conclusion/title"/></h3>
                        <div class="entry">
                            <p><xsl:value-of select="homme_femme/principal/conclusion/content"/></p>
                        </div>
                        <br/>
                        
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