# JavaScript – Opgave 3: Byg din interaktive zoo

## Selvstændig opgave med ChatGPT som sparringspartner

I denne opgave arbejder du videre med **JavaScript DOM, events, arrays, objekter og funktioner**.

Du skal bygge en **interaktiv zoo**, hvor tre dyr vises på siden. Når man klikker på et dyr, vises dyrets oplysninger i en infoboks: navn, art, alder og føde.

Alle dyrenes oplysninger samles i et **array af objekter**, og en **forEach-løkke** kobler data og HTML-elementer sammen, så hvert dyr får sit eget klik-event.

HTML og CSS er klar. Du skal selv forbinde `index.html` med `js/script.js` og skrive JavaScript-koden ved at følge kommentarerne i `js/script.js` fra **STEP 0**.

Du arbejder selvstændigt og bruger **ChatGPT (gratisversionen) som sparringspartner** på **prompting-niveau 3**. Læs afsnittet [Sådan bruger du ChatGPT som sparringspartner](#4-sådan-bruger-du-chatgpt-som-sparringspartner), før du begynder at skrive kode.

---

# Fremgangsmåde – sådan kommer du i gang med projektet

I denne opgave skal du bruge **GitHub Template-metoden**.

Du skal derfor **ikke downloade projektet som ZIP og ikke bruge Fork**.

Følg denne rækkefølge:

```text
GitHub Template
↓
Dit eget repository på GitHub.com
↓
GitHub Desktop
↓
Visual Studio Code
↓
Start en ny chat i ChatGPT med startprompten
↓
Arbejd med opgaven STEP for STEP
↓
Commit
↓
Push
```

> Følg punkterne **ét ad gangen og i den viste rækkefølge**.

---

## 1. Opret dit eget repository på GitHub.com

Åbn det udleverede **template-repository** på GitHub.com.

Du skal være logget ind på din egen GitHub-konto.

Klik på:

**Use this template**

Vælg derefter:

**Create a new repository**

Vælg din egen GitHub-konto som ejer, og brug det repository-navn, som din underviser har angivet.

Klik derefter på:

**Create repository**

Vent et øjeblik, mens GitHub opretter dit nye repository.

### Kontrollér, at du er i dit eget repository

Når repositoryet er oprettet, skal du kontrollere navnet øverst på siden.

Det skal være **dit eget GitHub-brugernavn**, der står foran repositoryets navn.

Det kan fx se sådan ud:

```text
dit-brugernavn/js-interactive-zoo-starter
```

> **Stop her og kontrollér dette, før du går videre.**

---

## 2. Hent dit repository ned på din computer

Nu ligger projektet på **GitHub.com**, men du skal også have det ned på din egen computer.

Åbn **GitHub Desktop**.

Vælg:

**File → Clone repository...**

Vælg fanebladet **GitHub.com**, og find det repository, du netop har oprettet.

Hvis repositoryet ikke vises, kan du i stedet vælge fanebladet **URL** og indsætte adressen til dit repository fra GitHub.com.

### Vælg, hvor projektet skal gemmes

I feltet **Local path** vælger du, hvor projektet skal ligge på din computer.

> **Local path** betyder den mappe på din computer, hvor projektets filer bliver gemt.

Klik derefter på:

**Clone**

Vent, mens GitHub Desktop henter projektet ned på din computer.

---

## 3. Åbn projektet i Visual Studio Code

Når projektet er klonet, vælg:

**Open in Visual Studio Code**

Du skal arbejde direkte i den projektmappe, som GitHub Desktop har klonet.

Kontrollér, at projektet har denne struktur:

```text
js-interactive-zoo-starter/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

---

## 4. Sådan bruger du ChatGPT som sparringspartner

### Prompting-niveau 3: Sparringspartneren

> *"Udfordr mig, så jeg forstår det."*

| Du | ChatGPT |
|---|---|
| Skriver, tester og forbedrer selv koden | Skriver **ikke** koden for dig |
| Viser først din egen plan, kode eller forklaring | Udfordrer dine valg og din forståelse |
| Forklarer og begrunder dine valg | Stiller **ét spørgsmål ad gangen** |
| Svarer selv, før du får feedback | Venter på dit svar og giver derefter konkret feedback |

Målet er ikke at blive hurtigere færdig, men at **forstå** den kode, du skriver.

### 4.1 Start en ny chat

Åbn ChatGPT (gratisversionen), og start en **ny chat**, så tidligere samtaler ikke blander sig.

Kopiér **startprompten** herunder ind som din første besked:

```text
Jeg er nybegynder i JavaScript. Vær min sparringspartner. Vent på min egen plan,
kode eller forklaring. Udfordr mine valg og min forståelse med ét spørgsmål ad
gangen. Vent på mit svar, og giv derefter konkret feedback. Giv ikke færdig kode
eller rettede kodelinjer. Jeg skriver, tester og forbedrer selv løsningen.
```

Du må derefter uploade hele `js/script.js` og `index.html` eller kopiere indholdet ind i chatten, så ChatGPT kender opgaven.

### 4.2 Arbejdsgangen i hvert STEP

Brug den samme arbejdsgang i hvert STEP i `js/script.js`:

```text
1. Læs STEP'et i js/script.js
↓
2. Fortæl ChatGPT din plan – med dine egne ord
↓
3. Skriv selv koden i VS Code
↓
4. Test i browseren og i Console
↓
5. Vis ChatGPT din kode, og forklar den (brug 💬 Sparring i script.js)
↓
6. Svar på ChatGPT's spørgsmål – ét ad gangen
↓
7. Vurdér feedbacken, og forbedr selv din kode
```

Hvert STEP i `js/script.js` har et eller flere **💬 Sparring**-punkter. De fortæller dig, hvad du skal forklare for ChatGPT. Brug dem – de er en del af opgaven.

### 4.3 Gode og dårlige beskeder til ChatGPT

En god besked viser altid **dit eget forsøg** – også hvis det er ufærdigt eller forkert.

| ✅ Sådan | ❌ Ikke sådan |
|---|---|
| "Min plan til STEP 3 er … Hvad tænker du om den?" | "Hvordan laver jeg STEP 3?" |
| "Her er mit array. Jeg har skrevet age uden anførselstegn, fordi …" | "Skriv arrayet for mig." |
| "Jeg får fejlen *animalInfo is not defined*. Jeg tror, det skyldes … Har jeg ret?" | "Ret min fejl." |
| "Jeg forstår ikke helt, hvad `${ }` gør. Jeg tror, det betyder … Stil mig et spørgsmål, der kan hjælpe mig." | "Forklar template literals." |
| "Jeg er uenig i din feedback, fordi …" | *(Kopiere ChatGPT's svar uden at tænke over det)* |

### 4.4 Når du får en fejl i Console

Fejlbeskeder er en del af læringen. Gør sådan:

1. **Læs fejlbeskeden** i Console. Notér, hvilken linje den peger på.
2. **Gæt selv** på, hvad fejlen skyldes.
3. **Vis ChatGPT** fejlbeskeden, den del af koden det handler om, og dit eget gæt.
4. **Svar på spørgsmålet**, ChatGPT stiller dig, og ret selv koden.

> **Godt at vide:** Mens du arbejder, vil du se fejl som `animalInfo is not defined`, `infoboxElement is not defined` og `text is not defined`. Det er forventet – de forsvinder, efterhånden som du løser dine STEPs.

### 4.5 Hvis ChatGPT giver dig færdig kode

Gratisversionen af ChatGPT kan glemme sin rolle, især i lange samtaler. Hvis den giver dig færdig kode eller rettede kodelinjer:

- **Kopiér ikke koden** ind i dit projekt.
- Skriv til ChatGPT:

```text
Husk startprompten: Giv mig ikke færdig kode. Stil mig i stedet ét spørgsmål,
der hjælper mig videre.
```

- Hvis det bliver ved, så start en **ny chat** med startprompten igen.

### 4.6 Vurdér altid ChatGPT's feedback

ChatGPT kan tage fejl. Du er den, der bestemmer over din kode.

- **Test** altid feedbacken i browseren og Console, før du stoler på den.
- **Spørg dig selv:** Forstår jeg, *hvorfor* ændringen er bedre?
- **Sig fra**, hvis du er uenig, og forklar hvorfor.

---

## 5. Arbejd med opgaven

Åbn `js/script.js`, og følg kommentarerne fra **STEP 0** til **STEP 4**:

| STEP | Indhold |
|---|---|
| STEP 0 | Forbind `index.html` med `js/script.js`, og skriv use strict |
| STEP 1 | Lav et array med objekter med dyrenes data |
| STEP 2 | Hent infoboksen fra HTML'en |
| STEP 3 | Skriv funktionen, der viser infoboksen |
| STEP 4 | Vis dyrets oplysninger, når man klikker på det |

Du skal kun skrive kode, hvor der står **✏️**. Den øvrige kode er skrevet for dig.

> **Tip:** Lav et **commit** efter hvert STEP, der virker. Så kan du altid gå tilbage til en version, der fungerede.

---

## 6. Commit og push dit arbejde

Når du har gemt dine filer i VS Code, skal du gemme dit arbejde i Git og sende det op til GitHub.com.

Åbn **GitHub Desktop**.

I venstre side kan du se de filer, du har ændret.

Skriv en kort beskrivelse i feltet **Summary**, fx:

```text
STEP 1: Array med dyrenes data
```

Klik derefter på:

**Commit to main**

Klik til sidst på:

**Push origin**

Kontrollér på GitHub.com, at dine ændringer er kommet op i dit repository.

---

## 7. Sluttjek

Gennemgå listen, før du afleverer:

- [ ] Script-tagget med `defer` står i `<head>` i `index.html`
- [ ] use strict står i toppen af koden i `js/script.js`
- [ ] Infoboksen er skjult, når siden indlæses
- [ ] Hvert dyr viser sine egne oplysninger, når man klikker på det
- [ ] Indholdet skifter, når man klikker på et nyt dyr
- [ ] Der er ingen røde fejl i Console
- [ ] Du har brugt 💬 Sparring i hvert STEP
- [ ] Dit arbejde er committet og pushet til GitHub.com

### Afsluttende sparring

Forklar til sidst ChatGPT hele forløbet med dine egne ord:

```text
objekt → klik → tekst → infoboks
```

Bed ChatGPT udfordre din forklaring med ét spørgsmål, og svar på det.

> **Husk:** Prompt dig klogere – ikke hurtigere.
