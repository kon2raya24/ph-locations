# ph-locations

Philippine location data for Node.js/TypeScript. Comprehensive regions, provinces, cities, and barangays.

[![npm version](https://img.shields.io/npm/v/ph-locations.svg)](https://www.npmjs.com/package/ph-locations)
[![license](https://img.shields.io/npm/l/ph-locations.svg)](https://github.com/kon2raya/ph-locations/blob/main/LICENSE)

## Features

- 🗺️ **All 17 Philippine Regions** — Including NCR, CAR, BARMM
- 📍 **81 Provinces** — Complete province data by region
- 🏙️ **1,488 Cities/Municipalities** — Comprehensive city data
- 🏘️ **42,000+ Barangays** — Complete barangay data
- 🔍 **Search Functions** — Find locations by code, name, or region

## Installation

```bash
npm install ph-locations
```

## Quick Start

```typescript
import {
  REGIONS,
  getRegionByCode,
  getProvinceByCode,
  getCityByName,
  searchLocations,
} from 'ph-locations';

// Get region
const ncr = getRegionByCode('NCR');
// { code: 'NCR', name: 'National Capital Region', provinces: ['Metro Manila'] }

// Get province
const laguna = getProvinceByCode('LAG');
// { code: 'LAG', name: 'Laguna', region: 'IV-A', cities: [...] }

// Search
const results = searchLocations('Manila');
// [{ type: 'region', code: 'NCR', name: 'National Capital Region' }, ...]
```

## API Reference

### Regions

```typescript
import {
  REGIONS,              // Array of all regions
  getRegionByCode,      // Get region by code (NCR, IV-A, etc.)
  getRegionByName,      // Get region by name
  getRegionByProvince,  // Get region containing a province
  getRegionCodes,       // Get all region codes
} from 'ph-locations';

REGIONS.length;         // 17

getRegionByCode('NCR');
// { code: 'NCR', name: 'National Capital Region', provinces: ['Metro Manila'] }

getRegionByCode('IV-A');
// { code: 'IV-A', name: 'Region IV-A (CALABARZON)', provinces: ['Batangas', 'Cavite', 'Laguna', 'Quezon', 'Rizal'] }

getRegionByProvince('Laguna');
// { code: 'IV-A', name: 'Region IV-A (CALABARZON)', ... }
```

### Provinces

```typescript
import {
  PROVINCES,            // Array of all provinces
  getProvinceByCode,    // Get province by code
  getProvinceByName,    // Get province by name
  getProvincesByRegion, // Get all provinces in a region
  getProvinceCodes,     // Get all province codes
} from 'ph-locations';

PROVINCES.length;       // 81

getProvinceByCode('LAG');
// { code: 'LAG', name: 'Laguna', region: 'IV-A', capital: 'Santa Cruz', cities: [...] }

getProvincesByRegion('IV-A');
// [{ code: 'BTG', name: 'Batangas' }, { code: 'CAV', name: 'Cavite' }, ...]
```

### Cities/Municipalities

```typescript
import {
  CITIES,               // Array of all cities/municipalities
  getCityByCode,        // Get city by code
  getCityByName,        // Get city by name
  getCitiesByProvince,  // Get all cities in a province
  getCityByZipCode,     // Get city by ZIP code
  getCityCodes,         // Get all city codes
} from 'ph-locations';

CITIES.length;          // 1,488

getCityByCode('LAG-063');
// { code: 'LAG-063', name: 'Biñan', province: 'LAG', zipCode: '4024', type: 'city' }

getCitiesByProvince('LAG');
// [{ code: 'LAG-001', name: 'Alaminos' }, { code: 'LAG-002', name: 'Bay' }, ...]

getCityByZipCode('4024');
// { code: 'LAG-063', name: 'Biñan', province: 'LAG', ... }
```

### Barangays

```typescript
import {
  BARANGAYS,              // Array of all barangays
  getBarangayByCode,      // Get barangay by code
  getBarangaysByCity,     // Get all barangays in a city
  searchBarangays,        // Search barangays by name
} from 'ph-locations';

BARANGAYS.length;         // 42,000+

getBarangayByCode('LAG-063-BRG001');
// { code: 'LAG-063-BRG001', name: 'Barangay 1', city: 'LAG-063', zipCode: '4024' }

getBarangaysByCity('LAG-063');
// [{ code: 'LAG-063-BRG001', name: 'Barangay 1' }, ...]
```

### Search

```typescript
import { searchLocations } from 'ph-locations';

searchLocations('Manila');
// [
//   { type: 'region', code: 'NCR', name: 'National Capital Region' },
//   { type: 'city', code: 'NCR-015', name: 'City of Manila' },
//   { type: 'barangay', code: '...', name: 'Manila' },
// ]

searchLocations('Biñan');
// [{ type: 'city', code: 'LAG-063', name: 'Biñan', province: 'Laguna' }]
```

## Types

```typescript
interface Region {
  code: string;           // 'NCR', 'IV-A', 'BARMM'
  name: string;           // 'National Capital Region'
  provinces: string[];    // ['Metro Manila']
}

interface Province {
  code: string;           // 'LAG', 'CAV', 'BTG'
  name: string;           // 'Laguna'
  region: string;         // 'IV-A'
  capital: string;        // 'Santa Cruz'
  cities: string[];       // ['LAG-001', 'LAG-002', ...]
}

interface City {
  code: string;           // 'LAG-063'
  name: string;           // 'Biñan'
  province: string;       // 'LAG'
  zipCode: string;        // '4024'
  type: 'city' | 'municipality';
}

interface Barangay {
  code: string;           // 'LAG-063-BRG001'
  name: string;           // 'Barangay 1'
  city: string;           // 'LAG-063'
  zipCode: string;        // '4024'
}
```

## Examples

### Address Form

```typescript
import { REGIONS, getProvincesByRegion, getCitiesByProvince } from 'ph-locations';

function populateAddressForm(regionCode: string) {
  const region = REGIONS.find(r => r.code === regionCode);
  if (!region) return;

  // Populate provinces dropdown
  const provinces = getProvincesByRegion(regionCode);
  // Update UI with provinces...

  // When province is selected
  function onProvinceSelect(provinceCode: string) {
    const cities = getCitiesByProvince(provinceCode);
    // Update UI with cities...
  }
}
```

### ZIP Code Lookup

```typescript
import { getCityByZipCode } from 'ph-locations';

function lookupAddress(zipCode: string) {
  const city = getCityByZipCode(zipCode);
  if (!city) return 'Invalid ZIP code';

  return {
    city: city.name,
    province: city.province,
    zipCode: city.zipCode,
  };
}

lookupAddress('4024');
// { city: 'Biñan', province: 'LAG', zipCode: '4024' }
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © kon2raya
