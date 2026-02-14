# SSA Platform — Space Situational Awareness

Piattaforma web per il monitoraggio e l'analisi della situazione spaziale (Space Situational Awareness). L'applicazione consente di tracciare, analizzare e prevedere eventi relativi a oggetti spaziali in orbita terrestre, tra cui collisioni, rientri atmosferici, frammentazioni, manovre orbitali e avvicinamenti.

## Tech Stack

- **React 19** — libreria UI
- **React Router 7** — routing client-side
- **Vite 7** — build tool e dev server
- **ESLint 9** — linting del codice
- **CSS puro** — design system basato su custom properties

## Prerequisiti

- **Node.js** >= 18
- **npm** >= 9

## Installazione

```bash
# Clona il repository
git clone <repository-url>
cd space_react

# Installa le dipendenze
npm install
```

## Comandi disponibili

| Comando             | Descrizione                                                   |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Avvia il server di sviluppo con Hot Module Reload             |
| `npm run build`     | Crea la build di produzione nella cartella `dist/`            |
| `npm run preview`   | Avvia un server locale per testare la build di produzione     |
| `npm run lint`      | Esegue il linting del codice con ESLint                       |

Il server di sviluppo viene avviato di default su `http://localhost:5173`.

## Struttura del progetto

```
src/
├── assets/             # Immagini e risorse statiche
├── components/         # Componenti React riutilizzabili
│   ├── common/         #   Componenti generici (Button, DataTable, Badge, ...)
│   ├── layout/         #   Layout (Navbar, Footer, PageLayout)
│   ├── home/           #   Componenti della homepage
│   ├── collision/      #   Analisi collisioni
│   ├── reentry/        #   Previsione rientri
│   ├── approach/       #   Avvicinamenti
│   ├── fragmentation/  #   Eventi di frammentazione
│   ├── maneuver/       #   Rilevamento manovre
│   ├── catalog/        #   Catalogo oggetti
│   └── search/         #   Ricerca avanzata
├── context/            # React Context per lo stato globale (AppContext)
├── data/               # Dati mock per le varie sezioni
├── hooks/              # Custom hooks (useDebounce, useAnimatedValue)
├── icons/              # Componenti SVG per le icone
├── pages/              # Componenti pagina associati alle route
├── styles/             # Fogli di stile CSS (design system, globali, componenti, pagine)
└── utils/              # Funzioni di utilità (formattazione date, numeri)
```

## Pagine e funzionalità

| Route              | Pagina            | Descrizione                                                          |
| ------------------ | ----------------- | -------------------------------------------------------------------- |
| `/`                | Home              | Dashboard con panoramica del sistema e statistiche                   |
| `/collision`       | Collision         | Screening congiunzioni e analisi del rischio di collisione           |
| `/reentry`         | Reentry           | Tracciamento oggetti in decadimento e previsione finestre di rientro |
| `/approach`        | Close Approach    | Monitoraggio eventi di prossimità tra oggetti spaziali               |
| `/fragmentation`   | Fragmentation     | Analisi eventi di frammentazione e evoluzione nubi di detriti        |
| `/maneuver`        | Maneuver          | Rilevamento e caratterizzazione manovre orbitali                     |
| `/catalog`         | Catalog           | Database completo degli oggetti tracciati in orbita                  |
| `/search`          | Search            | Ricerca avanzata con filtri e navigazione per categorie              |

## Architettura

- **State management** — React Context (`AppContext`) per lo stato globale dell'applicazione (stato del sistema, filtri, statistiche)
- **Routing** — React Router con layout annidati tramite `PageLayout`
- **Design system** — CSS custom properties per colori, spaziatura e tipografia; tema scuro con accento ciano
- **Icone** — 40+ icone SVG custom in stile Feather
- **Dati** — L'applicazione utilizza attualmente dati mock; non richiede configurazione di backend o variabili d'ambiente

## Build di produzione

```bash
# Genera la build ottimizzata
npm run build

# Testa la build in locale
npm run preview
```

I file di output vengono generati nella cartella `dist/` e possono essere deployati su qualsiasi servizio di hosting statico (Netlify, Vercel, GitHub Pages, ecc.).
