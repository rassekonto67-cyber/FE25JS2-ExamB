Denna app ska vara en enkel klädbutik, utan möjligheten att sätta något i en varukorg eller köpa någon produkt. Appen har en "start"-sida, en "About"-sida och en "Clothes"-sida där man ser produkterna.

Man startar appen genom att använda sig utav Terminalen. Man öppnar Terminalen i package.json filen och skriver in "npm run dev" där får man en localhost-kod och man kan öppna den redan där med alt + vänster click på Windows, eller command(CMD) + vänster click på macOS.

2. Betygskriterier / Tekniska krav som jag uppfyller med min app. (Checklista)
   
(A) SPA + Routing (React Router)

* Appen har SPA med client-side routing (React Router)
* Appen har minst 3 routes/views, Home-sidan, About-sidan och Clothes-sidan.
* Appen använder sig av React Routers inbyggda Link för navigationen.
  
(B) Komponentsstruktur + Props

* Jag har flera återanvändbara komponenter såsom Filter, Sorting och ProductCard där kläderna visas på sidan.
* Jag använder props till dessa.
  
(C) State + Interaktivitet (useState)

* Jag använder useState för filtreringen och sorteringen av kläderna.
  
(D) Data + API (useEffect + ex: fetch)

* Appen hämtar data från ett API med fetch i useEffect.
* Appen har både loading state och felhantering.
* API datan hämtas och visas i gränssnittet.
  
3. Betygskriterier / Tekniska VG-krav samt "Tekniska val - reflektion" 1.) Jag har delat up appen i komponenter och sidor samt navigationen/footer är i en seperat mapp. Sidorna "Home", "About" och "Clothes" och sina respektive ccs filer är i mappen "pages". Filtreringen, Sorteringen och ProductCard (som är själva upplägget för kläderna, namnet, priset och beskrivning) är indelade i en mapp kallad "components". Appen har även en egen mapp för Layouten för navigationen på alla fyra vyer(detaljerade vyn inräknad).
Jag tyckte att det blev enklare att använda tydliga filstrukturer för att veta vad man skulle leta efter. Som sagt tidigare, komponentindelningen gjorde jag för att det kan vara enklare att få in sortering, filtrering samt "ProductCard" om man vill återanvända det på andra sidor av appen.

Eftersom vi skulle använda SPA, som bygger på React Router så skapade jag separata routes för "Home", "About", "Clothes" samt Product-sidan där man ser produkterna med hjälp av useParams som gör att produkterna kommer visas dynamiskt och korrekt. Och med SPA så kan man enkelt gå mellan sidorna utan att sidan laddas om.

Props lösningen är för att man ska kunna skicka data och funktioner mellan komponenter, i mitt fall är det sortering, filtrering samt produktkorten från själva föräderkomponenten till knapparna och dropdown menyn. State lösningen använder useState och useEffect, state hjälper med att lagra t.ex produkter, sortering, filtrering men även laddningstatus eller errors. Och jag använder det till alla dessa i min app. Det har med att komponenterna uppdateras dynamiskt när användaren använder appen eller när själva API datan hämtas.

Jag använder mig utav ett API som heter Fake Store API (https://fakestoreapi.com/), det är enkelt att använda för en mockup som jag har gjort, och var enkelt att se vilka parametrar man behövde använda osv med deras dokument. Det jag ville ha var bilderna, namnen på plaggen, pris, katogerier (så det gick att sortera mellan men och women) och beskrivning. Det gjorde att jag kunde få in min sortering, filtering och få denna produktlista(id) så det gick att få rätt beskrivning när man gick in på en produkt.

2.) Extra förbättringar

* Jag gjorde en extra detail view när man klickar på själva produkten, så ser man beskrivningen för plagget.
* Jag använder även mig utav useParams för att få rätt id till kläderna på produkt sidan där man ser beskrivning (detaljerade vyn).
"Och minst 1 av dessa:"

* Appen har en sorteringsfunktion (UI-funktion)

Något som jag hade problem var med navigeringen i början, jag hade dubblerat både från navigerings.jsx och i själva filerna om home, about osv.. så det fixades med MainLayout och att man importerade den i app.jsx. Annars hade jag inte så mycket problem, det mesta problemen kom med css:en som inte var prioritet i detta projekt.


