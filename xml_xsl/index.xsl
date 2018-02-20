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
                        <h1><xsl:value-of select="index/first_title"/></h1>
                        <p><xsl:value-of select="index/description_bref"/></p>
                    </div>
                    <div class="divider"> </div>
                    
                    <div id="page" class="container">                                              
                        <h2 class="title"><xsl:value-of select="index/content_title"/></h2>
                        <div class="entry">
                            <xsl:for-each select="index/home_content/p">
                                <p><xsl:value-of select="text()"/></p>                            
                            </xsl:for-each>
                        </div>
                        <div style="clear: both;"> </div>
                    </div>
                    
                    <div class="divider"> </div>
                    <div id="three-column" class="container">
                        <div id="tbox1">
                            <div class="box-style">
                                <div class="image"><img src="images/img07.jpg" width="320" height="170" alt="" /></div>
                                <div class="arrow"></div>
                                <div class="content">
                                    <h2><xsl:value-of select="index/links/first_link/title"/></h2>
                                    <p><xsl:value-of select="index/links/first_link/content"/></p>
                                </div>
                            </div>
                        </div>
                        <div id="tbox2">
                            <div class="box-style">
                                <div class="image"><img src="images/img08.jpg" width="320" height="170" alt="" /></div>
                                <div class="arrow"></div>
                                <div class="content">
                                    <h2><xsl:value-of select="index/links/second_link/title"/></h2>
                                    <p><xsl:value-of select="index/links/second_link/content"/></p>
                                </div>
                            </div>
                        </div>
                        <div id="tbox3">
                            <div class="box-style">
                                <div class="image"><img src="images/img09.jpg" width="320" height="170" alt="" /></div>
                                <div class="arrow"></div>
                                <div class="content">
                                    <h2><xsl:value-of select="index/links/third_link/title"/></h2>
                                    <p><xsl:value-of select="index/links/third_link/content"/></p>
                                </div>
                            </div>
                        </div>
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