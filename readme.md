Harald De Vriendt
r0613297
# Project Webservices #
## Beschrijving ##
Als project maak ik een tool waarop instructeurs van de zweefvliegclub kunnen inloggen en vluchtverslagen kunnen schrijven, opslaan en bekijken.

### vereisten: ###
- (inloggen)
- overzicht verslagen
- nieuw verslag schrijven
- bestaand verslag bewerken
- verslag zoeken op datum

Deze componenten moeten vertaald worden naar Angular componenten.

**bespreken met WDA**

## Components ##

### Login ###
Deze component wordt getoonds als de user nog niet aangemeld is.
### Overzicht ###
Wanneer de gebruiker aangemeld is ziet hij het overzicht van alle verslagen met het nieuwste verslag bovenaan.
### Date-picker ###
Met deze component kan een verslag van een bepaalde datum getoond worden.
### Report ###
#### New Report ####
Deze component zorgt dat er nieuwe verslagen aangemaakt kunnen worden.
		controleren of er al een verlag van deze datum is?!
#### Edit Report ####
Met deze component kunnen bestaande verslagen aangepast worden. De datum kan uiteraard niet aangepast worden en dus is dat veld uitgeschakeld.