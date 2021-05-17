# Steps

0. SETUP



1. zoek knop maken -> die haalt data op over Belgie



- [x] HTML

- [x] knopje maken

- [x] geef hem een id

- [x ] Interactie programmeren

- [x ] Knopje selecteren: document.getElementById

- [x] Voeg een event listener toe: .addEventListener

- [ x] Event handler async functie maken (uitgevoerd als je klikt)

- [x ] Request maken naar de api

- [x ] axios installeren / importeren

- [x ] url opzoeken voor belgie (api docs)

- [ x] axios.get(url)

- [x ] await ervoor zetten (anders krijg je een promise)

- [ x] we data (loggen)

7. Voeg een plaatje toe aan de pagina (de flag van het land)



- [ ] zoek de url van het plaatje (uit de response van de api)

- [ x] HTML

- [ x] div maken (met id)

- [x] div selecteren (getElement)

- [x] createElement -> img

- [x] url toevoegen aan het plaatje `img.src = url`, `img.setAttribute('src', url)`

- [x] appendChild -> aan het divje



8. Maak een inputveld op de pagina en zorg ervoor dat als de gebruiker op enter drukt, de functie wordt aangeroepen waarmee de gegevens over België worden opgehaald.



- [ ] HTML

- [x] Maak een inputveld

- [x] id geven aan het inputveld

- [ ] Interacties programmeren

- [ x] Input veld selecteren

- [ ] Event listener toevoegen aan her inputveld (keyup)

- [ ] In het event kijken naar de "code" (event.code)

- [ ] Als event.code "Enter" is dan -> data ophalen uit de api



9. Zorg ervoor dat de waarde uit het input veld wordt gebruikt als query voor het GET request.



- [ ] selecteer het input veld (const inputfield = document...)

- [ ] const query = inputfield.value

- [ ] vervang belgium in url voor de "dynamische waarde" (query)
    
    