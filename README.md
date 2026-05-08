# AI Audit Log - [xzezulp00]

**Datum:** [03. 05. 2026]

---

## 1. Návrh rozložení, sekcí a jejich tématického obsahu pro osobní web.
* **Nástroj:** Gemini Pro 3.1
* **Prompt (nebo způsob použití):**
  > "Navrhni rozložení a sekce pro můj osobní web. Chci mít alespoň 5 sekcí jako 'About Me', atd. Každá sekce by měla obsahovat informace o mých zkušenostech, dovednostech a projektech." 
* **Míra generování v této sekci:** 20 % (pouze návrh struktury a tématického obsahu), 20 % (template pro každou sekci), 60 % (ruční úpravy a modifikace)

---

## 2. Rozšíření a generace informací (mockdata) do sekce: "About Me" a "Education".
* **Nástroj:** GitHub Copilot: GPT-5.4 Codex Mini
* **Prompt (nebo způsob použití):**
  > "Doplň sekci 'About Me' a 'Education' na mém osobním webu. Přidej informace o mých zájmech, dovednostech a vzdělání, které by mohly být relevantní." 
* **Míra generování v této sekci:** 100 % (pouze doplnění informací)

---

## 3. Animace "animateScrollTo" a lightbox pro obrázky.
* **Nástroj:** Gemini Pro 3.1
* **Prompt (nebo způsob použití):**
  > "Přidej animaci 'animateScrollTo' pro navigační odkazy na mém webu. Když uživatel klikne na odkaz v navigaci, stránka by měla plynule přejít na odpovídající sekci s použitím kubické křivky pro plynulý efekt s časem 1s."

   > "Prosím implementuj mi jednoduchý lightbox efekt pro kliknutí na obrázky z galerie v sekci about-me" 
* **Míra generování v této sekci:** 75 % (pouze přidání funkce pro animaci a lightbox), 25 % (ruční úpravy a modifikace)

# Poznámky

- Webová stránka je umústěna na VUT FIT studentském serveru, konkrétně na adrese: [https://www.stud.fit.vutbr.cz/~xzezulp00/](https://www.stud.fit.vutbr.cz/~xzezulp00/).

- Jednoduchá a přehledná web sebe-prezentace, zlomek návrhu a informačního obsahu byl částečně generován pomocí AI (více v ai auditu výše), ale většina úprav a finálního obsahu byla vytvořena ručně.

- Velká inspirace pro návrh pochází z volně dostupného GitHub repozitáře s osobními weby, hlavní inspirací pro strukturu a obsah jsou od uživatele "Aathif Zahir", vše uvedeno ve zdrojích.

# Zdroje

- [Gemini Pro 3.1](https://gemini.google.com/app?hl=cs) - Použitý nástroj pro generování obsahu a návrh struktury webu.
- [Zadání projektu 1](https://www.fit.vut.cz/study/course/ITW/private/cviceni/projekt1/) - Inspirace pro `script.js` a strukturu hlavního adresáře.
- [Developers Portfolios](https://github.com/emmabostian/developer-portfolios) - Inspirace pro design a strukturu osobních webů.
- [GitHub - Aathif Zahir](https://az-dev.vercel.app/#home) - Inspirace pro design a strukturu osobního webu.