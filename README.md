Denna app ska vara en enkel klädbutik, utan möjligheten att sätta något i en varukorg eller köpa någon produkt. Appen har en "start"-sida, en "About"-sida och en "Clothes"-sida där man ser produkterna.

Man startar appen genom att använda sig utav Terminalen. Man öppnar Terminalen i package.json filen och skriver in "npm run dev" där får man en localhost-kod och man kan öppna den redan där med alt + vänster click, eller command(CMD) + vänster click på macOS.


2) Betygskriterier / Tekniska krav som jag uppfyller med min app. (Checklista)

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

3) Betygskriterier / Tekniska VG-krav
   1.) Jag har delat up appen i komponenter och sidor samt navigationen/footer är i en seperat mapp. Sidorna "Home", "About" och "Clothes" och sina respektive ccs filer är i mappen "pages". Filtreringen, Sorteringen och ProductCard (som är själva upplägget för kläderna, namnet, priset och beskrivning) är indelade i en mapp kallad "components". Appen har även en egen mapp för Layouten för navigationen på alla fyra vyer(detaljerade vyn inräknad)
  
   2.) Extra förbättringar
   * Jag gjorde en extra detail view när man klickar på själva produkten, så ser man beskrivningen för plagget.
   * Jag använder även mig utav useParams 
   
