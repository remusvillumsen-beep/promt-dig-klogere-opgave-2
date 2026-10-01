// ==================================================================
//  OPGAVE 3 – BYG DIN INTERAKTIVE ZOO
//  Noget af koden er skrevet for dig. Du skal tilføje, hvor der står ✏️
// ==================================================================
//
// 🤖 SPARRING MED CHATGPT
// Start med startprompten fra opgavebeskrivelsen.
// Vis altid først din egen plan, kode eller forklaring – også hvis
// den er ufærdig.
// Giver ChatGPT dig færdig kode? Bed den om at stille dig et
// spørgsmål i stedet.


// ------------------------------------------------------------------
// STEP 0: Gør klar
// ------------------------------------------------------------------
// ✏️ A. Forbind index.html med denne fil. Skriv et script-tag med
//       defer inde i <head> i index.html (se kommentaren dér).
//       Hint: Et script-tag skal have attributterne src og defer.
// ✏️ B. Skriv use strict på linjen herunder.
//
// 💬 Sparring: Forklar ChatGPT, hvad defer gør, og hvorfor dit
//    script-tag står i <head>.

// ✏️ B. Skriv use strict her ↓

"use strict;"

// ------------------------------------------------------------------
// STEP 1: Data om dyrene
// ------------------------------------------------------------------
// ✏️ Lav et array med navnet animalInfo med ét objekt for hvert dyr
//    i tabellen.
//
//   className | name   | species | age | food
//   animal1   | Simba  | Løve    | 5   | Kød
//   animal2   | Dumbo  | Elefant | 8   | Blade og frugt
//   animal3   | Gerald | Giraf   | 6   | Blade fra høje træer
//
// Sådan ser et array med objekter ud:
//
//   const variabelnavn = [
//     { property: value, property: value },
//     { property: value, property: value },
//   ];
//
// 💬 Sparring 1: Vis ChatGPT dit array. Forklar forskellen på arrayet
//    og et af objekterne.
// 💬 Sparring 2: Forklar, hvorfor age står uden anførselstegn.

// ✏️ Skriv dit array her ↓

const animalInfo = [
{ className: `animal1`, 
  name: `Simba`,
species: `Løve`,
age: 5,
food: `kød` },
{ className: `animal2`, 
  name: `Dumbo`,
species: `Elefant`,
age: 8,
food: `Blade og frugt` },
{ className: `animal3`, 
  name: `Gerald`,
species: `Giraf`,
age: 6,
food: `Blade fra høje træer` },
]

// ✅ Test: Kig i Console – er der 3 dyr?
console.log(animalInfo);


// ------------------------------------------------------------------
// STEP 2: Hent infoboksen
// ------------------------------------------------------------------
// ✏️ Hent elementet med id'et infobox, og gem det i en variabel
//    med navnet infoboxElement.
//
// 💬 Sparring: Forklar ChatGPT, hvordan din kodelinje finder
//    elementet i HTML'en.

// ✏️ Skriv din kode her ↓

const infoboxElement = document.getElementById("infobox");

// ------------------------------------------------------------------
// STEP 3: Funktion der viser infoboksen
// ------------------------------------------------------------------
// ✏️ A. Skriv funktionshovedet til en funktion med navnet showInfoBox
//       og parameteren text.
// ✏️ B. Gør boksen synlig ved at tilføje CSS-klassen show.
//       Hint: Se på classList.
//
// 💬 Sparring: Før du skriver: Fortæl ChatGPT din plan for funktionen.
//    Bagefter: Forklar, hvordan din funktion og klassen show i
//    css/style.css arbejder sammen.

// ✏️ A. Skriv funktionshovedet på linjen herunder.
//       Krølleparenteserne er skrevet for dig – skriv ikke en ny {
//       (Når du er færdig, må du gerne flytte { op i slutningen
//       af linjen med funktionshovedet.)

function showInfoBox (text) {
  infoboxElement.innerHTML = text;

  // ✏️ B. Skriv din kode her ↓

 infoboxElement.classList.add ("show")


}


// ------------------------------------------------------------------
// STEP 4: Vis info, når man klikker på et dyr
// ------------------------------------------------------------------
// Løkken kører én gang for hvert dyr i animalInfo.
//
// 💬 Sparring 1: Vis ChatGPT din færdige kode, og forklar, hvordan
//    className forbinder dit objekt med HTML'en.
// 💬 Sparring 2: Forklar, hvorfor teksten først vises, når brugeren
//    klikker.

animalInfo.forEach(function (animal) {
  const element = document.querySelector("." + animal.className);

  element.addEventListener("click", function () {

    // ✏️ Navnet er lavet for dig. Tilføj tre linjer under navnet:
    //      Art: ...
    //      Alder: ... år
    //      Føde: ...
    //    Afslut hver linje med <br> (undtagen den sidste).
    const animalDetails = `
      <strong>${animal.name}</strong><br>
      

      
    `;

    // ✏️ Skriv dit funktionskald til funktionen showInfoBox
    //    med animalDetails her ↓


  });
});


// ==================================================================
// ✅ SLUTTJEK
// ==================================================================
// ☐ Script-tagget med defer står i <head> i index.html
// ☐ use strict står i toppen af koden i script.js
// ☐ Boksen er skjult, når siden indlæses
// ☐ Hvert dyr viser sine egne oplysninger
// ☐ Ingen røde fejl i Console
//
// 💬 Afsluttende sparring: Forklar ChatGPT hele forløbet med dine
//    egne ord: objekt → klik → tekst → infoboks.
//    Bed den udfordre din forklaring med ét spørgsmål.
