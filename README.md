# B2B Test Application

Web aplikacija za prikaz i upravljanje tabelom šifri sa funkcionalnostima pretraživanja i prilagođavanja kolona.

## Funkcionalnosti

- Live pretraga (aktivira se nakon 3 karaktera, sa debounce od 1 sekunde)
- Upravljanje kolonama kroz sidebar (dvostruki klik za dodavanje/uklanjanje)
- DevExtreme DataGrid funkcionalnosti:
  - Sortiranje kolona
  - Filtriranje podataka
  - Paginacija
  - Prilagodljive veličine kolona
  - Kontekstualni meni
  - Alternativne boje redova
  - Lokalizacija na bosanski jezik
- Aplikacija je optimizovana za performanse kroz:
  - Debouncing pretrage
  - Memorisane callback funkcije
  - Lazy loading kroz DataGrid
- Korištene su moderne React prakse:
  - Funkcionalne komponente
  - React hooks (useState, useEffect, useCallback)
  - Optimizovano renderovanje kroz memo i useMemo
- Responzivan dizajn za sve veličine ekrana
- Lokalizacija na bosanski jezik
- Implementirana je error handling logika za API pozive
- API endpointi su konfigurisani u `src/services/api.js`
- Konfigurabilni page size (10, 25, 50, 100 redova)

## Tehnologije

- React 18
- Vite
- DevExtreme DataGrid
- Axios
- CSS Modules

## Pokretanje projekta

### Preduslovi

- Node.js (v18 ili noviji)
- npm/yarn/pnpm

### Instalacija

```bash
# Kloniranje repozitorija
git clone https://github.com/your-username/b2b-test-app.git

# Ulazak u direktorij
cd b2b-test-app

# Instalacija dependencies
npm install
```

### Razvoj

```bash
# Pokretanje development servera
npm run dev
```

### Produkcija

```bash
# Build aplikacije
npm run build

# Pregled build verzije
npm run preview
```

## Struktura projekta

```
src/
  ├── components/         # React komponente
  │   ├── DataGrid/      # DevExtreme DataGrid wrapper
  │   ├── Search/        # Komponenta za pretragu
  │   └── Sidebar/       # Sidebar za upravljanje kolonama
  ├── services/          # API servisi
  ├── hooks/             # Custom React hooks
  ├── assets/           # Statički resursi
  └── App.jsx           # Glavna komponenta
```
