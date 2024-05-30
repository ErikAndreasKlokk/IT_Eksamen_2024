# IT_Eksamen_2024
 IT eksamen for Erik Andreas Klokk, 30. mai 2024

## Veiledning

##### Denne nettsiden er laget med Svelte, TailwindCSS og Sanity.

###### Hvis du vil klone dette prosjektet må du gjøre noen få ting for å få det til å funke.
*Det er forventet at du har Node.js installert på maskinen*

Start med å navigere deg inn i *sanity* mappen. Når du har navigert deg inn her må du skrive dette inn i terminalen;

```
npm i
```
 
Etter at du har gjort dette, må du gå til [Sanity](https://www.sanity.io) for å lage et prosjekt. Du må nemlig lage et prosjekt for å få noen nøkler som du må putte i en .env fil for å få nettsiden til å funke. Når du har laget et prosjekt i Sanity kan du lage en ny .env fil i *sanity* mappen. I denne filen skal du putte følgende kode;

```
PUBLIC_SANITY_STUDIO_PROJECTID={sanity project id'en din}
PUBLIC_SANITY_STUDIO_DATASET=production
```

Når du har gjort dette kan du navigere deg ut av *sanity* mappen, og inn i *nettside* mappen. Her skal du gjøre nesten akkurat det samme som du gjorde i den forrige mappen. Start med å skrive følgende inn i terminalen;

```
npm i
```

Etter dette skal du lage en .env fil hvor du skal putte følgende kode;

```
PUBLIC_ENVPROJECTID={sanity project id'en din}
PUBLIC_ENVDATASET=production
```

Nå har du satt opp nettsiden og er klar til å bruke den.

---

For å starte nettsiden lokalt, må du gå inn i terminalen og skrive;

```
npm run dev
```

*NB: Du må gjøre dette for begge delene av nettsiden, altså du må gjøre det en gang for sanity mappen, og en gang for nettside mappen.*

---

Nå som du har satt opp nettsiden, vil du kanskje endre litt på den. Hvis du vil lage custom schematypes (Som er det du ser når du er inne i sanity delen av prosjektet) så kan du navigere deg inn i *klokkproject* mappen. Når du er der navigerer du deg videre inn i *schemaTypes* mappen. I denne mappen ligger alle schematypesene som du kan se på sanity nettsiden. Hvis du vil lære mer om schematypes og hvordan det fungerer, anbefaler jeg å lese [sanity docs'a](https://www.sanity.io/docs/schemas-and-forms)
