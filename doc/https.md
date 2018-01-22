Harald De Vriendt
r0613297
# Https documentatie  #
Deze markdown geeft meer informatie over de **https** of TSL certificaat configuratie  in kader van het project voor webservices.

### Overzicht ###
- [README](../readme.md)
- [Apache](../doc/apache.md)
- Https
- [Laravel](../doc/laravel.md)

----------

### Configuratie:  ###

Om SSL/TLS certificaten te verkrijgen heb ik gebruik gemaakt van de website "[https://www.sslforfree.com/](https://www.sslforfree.com/ "SSL for free")
deze website maakt gebruik van let's encrypt en is heel duidelijk en gebruiksvriendelijk.

1. URL ingeven
2. Manual verification
3. Download de verification files en plaats deze in de juiste map
4. SSLforfree controleert de files en genereert uw SSL certificaat.
5. SSL certificaat downloaden en in de xampp configuratie zetten (zie verder)

#### httpd-ssl.conf ####

de locatie van de files en de paths moeten overeen komen.

	SSLCertificateKeyFile "C:/xampp/apache/bin/key/private.key"

	SSLCACertificateFile "C:/xampp/apache/bin/key/ca_bundle.crt"
Als men deze files ergens anders wil bewaren moet men ook de paths aanpassen!



