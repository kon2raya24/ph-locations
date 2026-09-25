# ph-locations

Philippine regions, provinces, cities/municipalities and a **sample** of barangays, as TypeScript arrays with lookup and search helpers. No runtime dependencies.

[![license](https://img.shields.io/github/license/kon2raya24/ph-locations)](https://github.com/kon2raya24/ph-locations/blob/main/LICENSE)

## Status

This is an early, unfinished library. Before you use it:

- **It's not on npm.** `npm install ph-locations` installs a **different, unrelated package** by another maintainer (v1.1.3, first published 2020). Installing from GitHub (`npm install github:kon2raya24/ph-locations`) doesn't work either: you get no code, because `dist/` isn't committed and there's no `prepare` script to build it.
- **`main` doesn't build right now.** Commit `9cca2b2` put an input check inside the return-type annotations of `getCityHierarchy` and `getBarangayHierarchy` (`src/search.ts`, lines 409 and 432). `tsc` stops on syntax errors, and the `dist/index.js` it writes throws `SyntaxError` when loaded. Until that's fixed, none of the helpers below can be imported.
- **The data is a sample, not the full PSGC.** It has 397 cities/municipalities (PSA lists 1,634) and 374 barangays (PSA lists 42,046). The codes look like PSGC codes, but many aren't the official PSA codes and some are duplicated. See [Known data issues](#known-data-issues).
- **Tests and CI fail.** See [Development](#development).

## Need the full dataset?

Use the published `@ph-dev-utils` packages. They carry the complete PSA Q4 2024 PSGC data:

| Package | What's in it | Repo |
|---|---|---|
| [`@ph-dev-utils/core`](https://www.npmjs.com/package/@ph-dev-utils/core) (0.5.0) | 17 regions, 82 provinces, all 1,634 cities/municipalities, plus peso formatting, government ID validators (TIN, SSS, PhilHealth, Pag-IBIG, PhilSys and more), phone parsing and holidays | [kon2raya24/ph-dev-utils](https://github.com/kon2raya24/ph-dev-utils) |
| [`@ph-dev-utils/psgc-barangays`](https://www.npmjs.com/package/@ph-dev-utils/psgc-barangays) (0.1.0) | All 42,046 barangays, joined to `core` by city/municipality code | [kon2raya24/ph-psgc-barangays](https://github.com/kon2raya24/ph-psgc-barangays) |
| [`@ph-dev-utils/postal`](https://www.npmjs.com/package/@ph-dev-utils/postal) (0.2.0) | 2,048 ZIP code entries (GeoNames, CC BY 4.0), joined to `core` by city/municipality code | [kon2raya24/ph-postal](https://github.com/kon2raya24/ph-postal) |

```bash
npm install @ph-dev-utils/core @ph-dev-utils/psgc-barangays @ph-dev-utils/postal
```

```js
// These packages are ESM-only: use import, not require().
import { findCityMunicipality } from '@ph-dev-utils/core';
import { countBarangays } from '@ph-dev-utils/psgc-barangays';
import { findPostalCodesByCity } from '@ph-dev-utils/postal';

const binan = findCityMunicipality('Biñan');
// { code: '043403', name: 'City of Biñan', province: '0434', region: '04', isCity: true, isCapital: false }

countBarangays({ cityMunCode: binan.code });      // 24
findPostalCodesByCity('Biñan').map((p) => p.zip); // ['4024']
```

This repo has no ZIP code data. If you need ZIP codes, use `@ph-dev-utils/postal`.

## What's in this repo

| Level | Records | Notes |
|---|---|---|
| Regions | 17 | All 17. Codes are short labels (`NCR`, `CAR`, `BARMM`, and `01`–`13` with `04A`/`04B` in place of `04`), not PSA region codes. |
| Provinces | 84 | 81 provinces, a `NCR` entry named "Metro Manila", and Zamboanga City and Davao City marked `isIndependent: true`. |
| Cities/municipalities | 397 | 146 cities and 251 municipalities, a few per province (for example, 15 of Laguna's 30). |
| Barangays | 374 | 5 to 20 barangays each for 36 major cities (for example, 14 of Cebu City's 80). |

The data lives in `src/regions.ts`, `src/provinces.ts`, `src/cities.ts` and `src/barangays.ts`. The helpers are in `src/search.ts`.

Once it builds, it's usable for demos and prototypes. Don't use it for a real address form: most cities and barangays are missing. Use the packages above instead.

## Using it from source

```bash
git clone https://github.com/kon2raya24/ph-locations.git
cd ph-locations
npm ci
npm run build   # fails on main right now, see Status
```

The build outputs CommonJS to `dist/`. When the build works, load it from the repo root with `require('./dist')`.

## API

Everything is exported from `src/index.ts`.

**Data arrays:** `REGIONS`, `PROVINCES`, `CITIES`, `BARANGAYS`.

| Function | Returns |
|---|---|
| `getRegionByCode(code)` | `Region \| undefined` |
| `getRegionByName(name)` | First region whose `name` or `shortName` contains `name` |
| `getAllRegions()` | Copy of `REGIONS` |
| `getProvinceByCode(code)` | `Province \| undefined` |
| `getProvinceByName(name)` | First province whose name contains `name` |
| `getAllProvinces()` | Copy of `PROVINCES` |
| `getProvincesByRegion(regionCode)` | `Province[]` |
| `getCityByCode(code)` | `City \| undefined` |
| `getCityByName(name)` | First city/municipality whose name contains `name` |
| `getAllCities()` | Copy of `CITIES` |
| `getCitiesByProvince(provinceCode)` | Cities and municipalities in a province |
| `getCitiesByRegion(regionCode)` | Cities and municipalities in a region |
| `getCityCitiesByProvince(provinceCode)` | Only `classification: 'city'` |
| `getMunicipalitiesByProvince(provinceCode)` | Only `classification: 'municipality'` |
| `getBarangayByCode(code)` | `Barangay \| undefined` |
| `getBarangayByName(name)` | First barangay whose name contains `name` |
| `getAllBarangays()` | Copy of `BARANGAYS` |
| `getBarangaysByCity(cityCode)` / `getBarangaysByProvince(provinceCode)` / `getBarangaysByRegion(regionCode)` | `Barangay[]` |
| `searchLocations(query, options?)` | `SearchResult[]` across all four levels |
| `getCityHierarchy(cityCode)` | `{ region, province, city, barangays }` |
| `getBarangayHierarchy(barangayCode)` | `{ region, province, city, barangay }` |
| `getStats()` | Record counts per level |

Behavior to know about:

- Code lookups are exact matches. If a code is duplicated, you get the first record.
- `*ByName` lookups and `searchLocations` use case-insensitive substring matching. `*ByName` returns the first hit, so `getProvinceByName('Samar')` returns Eastern Samar.
- Every function that takes an argument throws `Error('Invalid input')` if it's `null` or `undefined`.
- `searchLocations` options: `type` and `limit` apply to all results. `regionCode` filters provinces, cities and barangays. `provinceCode` filters cities and barangays only. `fuzzy` is declared in the type but ignored.

## Examples

These outputs come from the current data, checked with Node after moving the two misplaced lines in `src/search.ts` into the function bodies. On `main` as it is, `require('./dist')` fails first (see Status).

```js
const {
  getRegionByCode,
  getProvincesByRegion,
  getCitiesByProvince,
  getBarangaysByCity,
  searchLocations,
  getCityHierarchy,
  getStats,
} = require('./dist');

getRegionByCode('04A').name;
// 'Region IV-A (CALABARZON)'

getProvincesByRegion('04A').map((p) => `${p.code} ${p.name}`);
// ['0410 Batangas', '0421 Cavite', '0434 Laguna', '0456 Quezon', '0458 Rizal']

getCitiesByProvince('0434').length;
// 15

getBarangaysByCity('072201').map((b) => b.name);
// ['Bacayan', 'Basak San Nicolas', 'Capitol Site', 'Guadalupe', 'Labangon', 'Lahug', 'Mabolo',
//  'Nasipit', 'Pardo', 'Sambag I', 'Sambag II', 'San Nicolas', 'Talamban', 'Tisa']

searchLocations('Biñan');
// [{
//   location: { code: '043405', name: 'Biñan', provinceCode: '0434', regionCode: '04A',
//               classification: 'city', isIndependent: false },
//   type: 'city',
//   path: ['Region IV-A (CALABARZON)', 'Laguna', 'Biñan'],
// }]

const h = getCityHierarchy('043402');
[h.region.name, h.province.name, h.city.name, h.barangays.length];
// ['Region IV-A (CALABARZON)', 'Laguna', 'City of Calamba', 10]

getStats();
// { regions: 17, provinces: 84, cities: 146, municipalities: 251, barangays: 374 }
```

## Types

From `src/types.ts`:

```ts
interface Region {
  code: string;          // 'NCR', '01', '04A', 'BARMM'
  name: string;          // 'Region IV-A (CALABARZON)'
  shortName: string;     // 'CALABARZON'
  provinces: string[];   // province names; for NCR, city names
}

interface Province {
  code: string;          // '0434'
  name: string;          // 'Laguna'
  regionCode: string;    // '04A'
  isIndependent: boolean;
}

interface City {
  code: string;          // '043402'
  name: string;          // 'City of Calamba'
  provinceCode: string | null;
  regionCode: string;
  classification: 'city' | 'municipality';
  isIndependent: boolean;
}

interface Barangay {
  code: string;          // '043402004'
  name: string;          // 'Canlubang'
  cityCode: string;
  provinceCode: string;  // but 27 records have null, see Known data issues
  regionCode: string;
}

interface SearchResult {
  location: Region | Province | City | Barangay;
  type: 'region' | 'province' | 'city' | 'barangay';
  path: string[];        // names from region down to the match
}

interface SearchOptions {
  type?: 'region' | 'province' | 'city' | 'barangay';
  regionCode?: string;
  provinceCode?: string;
  fuzzy?: boolean;       // ignored
  limit?: number;
}

interface LocationStats {
  regions: number;
  provinces: number;
  cities: number;
  municipalities: number;
  barangays: number;
}
```

## Known data issues

Don't join this data to official PSGC datasets by code. The codes don't line up:

- **Many codes differ from PSA's.** Region `13` is Caraga here, but in PSA it's NCR. Code `043405` is Biñan here, but in PSA it's Calamba (PSA's Biñan is `043403`). Cebu City is `072201` here and `072217` in PSA.
- **Some codes are duplicated,** and code lookups return the first match:
  - 16 of the 17 NCR cities and municipalities share just three codes (`137400`, `137500`, `137600`). For example, `getCityByCode('137600')` always returns Makati, so Taguig, Parañaque, Muntinlupa, Pasay and Pateros can't be reached by code.
  - `112401` is both Tagum and City of Davao, and `126301` is both Koronadal and General Santos.
  - Province codes `1124` (Davao del Norte and Davao City) and `0604` (Aklan and Samar) are also shared.
  - 29 barangay codes are used more than once.
- **Some records are wrong or out of date:**
  - Laguna has two "San Pedro" entries (`043404` as a city and `043412` as a municipality).
  - Southern Leyte (`0860`) contains Catbalogan, which is a Samar city, and a second "Tacloban" entry listed as a municipality. The main City of Tacloban entry is under Leyte.
  - Maasin and Sogod point to province `0864`, which isn't in `PROVINCES`.
  - Maguindanao is listed as one province, but it was split into Maguindanao del Norte and del Sur in 2022.
  - "La Trinidad" appears both as a Benguet municipality and as a Baguio barangay.
- **Search can crash on Zamboanga City and Davao City barangays.** Their 27 barangays have `provinceCode: null`. `searchLocations` throws `Error('Invalid input')` if the query matches any of them. For example, `searchLocations('san')` and `searchLocations('Poblacion')` both throw. `getBarangayHierarchy` throws for those barangays too. A `type` other than `'barangay'` avoids the crash, for example `searchLocations('san', { type: 'city' })`.

## Development

```bash
npm ci
npm test         # Jest + ts-jest: fails right now
npm run build    # tsc: fails right now
npm run lint     # tsc --noEmit: same errors as build
```

**Why CI is red:** `.github/workflows/ci.yml` runs `npm ci`, `npm test` and `npm run build` on Node 20. It triggers on pushes and PRs to `main` that touch `src/`, `package.json`, `tsconfig.json` or the workflow. Every run so far (8, from 2026-06-18 to 06-21) failed within 2–4 seconds without starting. GitHub's message: *"The job was not started because your account is locked due to a billing issue."* So CI has never actually tested a commit.

If CI did run, it would still fail. This reproduces locally on Node 20:

- **`npm test`:** `tests/regions.test.ts` is the only test file (15 tests, regions only), and it doesn't compile, for two reasons:
  - It imports `REGIONS` from `src/search`, which doesn't export it.
  - TypeScript 6 no longer loads `@types/jest` automatically (`tsconfig.json` has no `types` setting), so the compiler doesn't recognize `describe`, `it` and `expect`.
- **`npm run build`:** it hits the syntax errors described in [Status](#status). Fixing those uncovers more errors:
  - TypeScript 6 rejects `"moduleResolution": "node"` (TS5107).
  - 28 type errors: 27 barangays have `provinceCode: null` where the type says `string`, and one error is in `getCityHierarchy`.

`vitest.config.ts` is in the repo, but Vitest isn't installed. The tests run on Jest (`jest.config.js`).

## Contributing

Issues and PRs are welcome at [kon2raya24/ph-locations](https://github.com/kon2raya24/ph-locations).

## License

MIT © kon2raya
