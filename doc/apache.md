Harald De Vriendt
r0613297
# Apache documentatie  #
Deze markdown geeft meer informatie over de configuratie van **apache** in kader van het project voor webservices. Voor algemene informatie, zie [README](..\readme.md).

----------

### Overzicht ###
- [README](..\readme.md)
- Apache
- [Https](..\doc\https.md)
- [Laravel](..\doc\laravel.md)

----------

#### httpd.conf ####
**Documentroot**

Documentroot is de directory waar de server zijn documenten moet zoeken.

    DocumentRoot "D:\Onedrive\DeNayer\FASE 3\semester 1\Webservices\Project-Webservices\src\projectWebservicesLaravel\public"

    <Directory "D:\Onedrive\DeNayer\FASE 3\semester 1\Webservices\Project-Webservices\src\projectWebservicesLaravel\public">


##### Automatisch redirecten naar https:// #####

    NameVirtualHost *:80
    <VirtualHost *:80>
       Redirect permanent / https://haralddv.ddns.net/
    </VirtualHost>

Meer informatie over https configuratie: zie [Https markdown](..\doc\https.md)

#### httpd-xampp.conf ####
Om remote te kunnen inloggen op phpMyAdmin moet deze directory extern toegankelijk zijn. Standaard is deze '**Recuire local**' Om toegang vanaf het internet toe te staan moet je dit aanpassen naar '**Require all granted**'.

    <Directory "C:/xampp/phpMyAdmin">
        AllowOverride AuthConfig
        Require all granted
        ErrorDocument 403 /error/XAMPP_FORBIDDEN.html.var
    </Directory>

 

#### config.inc.php ####

Met de standaardconfiguratie toont PhpMyAdmin geen loginscherm. Dit wordt aangepast door volgende lijn aan te passen:

vervang:

	$cfg['Servers'][$i]['auth_type'] = 'config';
met:

    $cfg['Servers'][$i]['auth_type'] = 'cookie';


