ALOITUS!
- npm install nodejs kansioon
- npm start

Postmanilla voi kokeilla näitä:


--------------- PRODUCTS ---------------
Rupesin laiskaksi, kokeile sovellusta frontendin kanssa :D kuka nyt pelkkää postmania käyttäis

--------------- USERS ---------------
// GET ALL
metodi: GET, URL: localhost:8080/users/

// ADD USER
metodi: POST, URL: localhost:8080/users/
!HOX! Muista täyttää Body osio seuraavilla tiedoilla:
- Valitse Body tyypiksi x-www-form-urlencoded
- Täytä 4 KEY kenttää (name, address, phone, email //ID ON AUTOMAATTINEN!)
- Täytä VALUE kentät haluamallasi tiedoilla


--------------- INVOICES ---------------
// GET ALL
metodi: GET, URL: localhost:8080/invoices/

// GET BY INVOICE ID
metodi: GET, URL: localhost:8080/invoices/single/*invoice id*

// GET ALL INVOICES OF A USER (FIND BY USER'S ID)
metodi: GET, URL: localhost:8080/invoices/*user id*

// ADD NEW INVOICE
metodi: POST, URL: localhost:8080/users/
!HOX! Muista täyttää Body osio seuraavilla tiedoilla:
- Valitse Body tyypiksi x-www-form-urlencoded
- Täytä 3 KEY kenttää (userId, prod1, prod2 (ei siis salli enempää kuin 2 tuotetta toistaiseksi)
- Täytä VALUE kentät käyttäjän ID:llä ja kahden tuotteen ID:llä

// DELETE BY INVOICE ID
metodi: DELETE, URL: localhost:8080/invoices/*invoice id*