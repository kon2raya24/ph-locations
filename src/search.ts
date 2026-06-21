/**
 * Search and lookup utilities for Philippine locations.
 *
 * Provides powerful search functions across all administrative levels:
 * regions, provinces, cities/municipalities, and barangays.
 */

import { REGIONS } from './regions';
import { PROVINCES } from './provinces';
import { CITIES } from './cities';
import { BARANGAYS } from './barangays';
import { Region, Province, City, Barangay, SearchOptions, SearchResult, LocationStats } from './types';

// Type exports for consumers
// Add specific types as needed

// ═══════════════════════════════════════════════════════════════════
// Region Lookups
// ═══════════════════════════════════════════════════════════════════

/**
 * Get a region by its PSGC code.
 *
 * @param code - Region code (e.g. "NCR", "01", "BARMM")
 * @returns The matching region or undefined
 *
 * @example
 * ```ts
 * const region = getRegionByCode('NCR');
 * // → { code: 'NCR', name: 'National Capital Region', ... }
 * ```
 */
export function getRegionByCode(code: string): Region | undefined {
  if (code === null || code === undefined) throw new Error("Invalid input");
  return REGIONS.find(r => r.code === code);
}

/**
 * Get a region by name (case-insensitive substring match).
 *
 * @param name - Region name to search for
 * @returns The matching region or undefined
 *
 * @example
 * ```ts
 * const region = getRegionByName('Davao');
 * // → { code: '11', name: 'Region XI (Davao Region)', ... }
 * ```
 */
export function getRegionByName(name: string): Region | undefined {
  if (name === null || name === undefined) throw new Error("Invalid input");
  const lower = name.toLowerCase();
  return REGIONS.find(r =>
    r.name.toLowerCase().includes(lower) ||
    r.shortName.toLowerCase().includes(lower)
  );
}

/**
 * Get all regions.
 * @returns Array of all Philippine regions
 */
export function getAllRegions(): Region[] {
  return [...REGIONS];
}

// ═══════════════════════════════════════════════════════════════════
// Province Lookups
// ═══════════════════════════════════════════════════════════════════

/**
 * Get a province by its PSGC code.
 *
 * @param code - Province code (e.g. "0128" for Ilocos Norte)
 * @returns The matching province or undefined
 */
export function getProvinceByCode(code: string): Province | undefined {
  if (code === null || code === undefined) throw new Error("Invalid input");
  return PROVINCES.find(p => p.code === code);
}

/**
 * Get a province by name (case-insensitive substring match).
 *
 * @param name - Province name to search for
 * @returns The matching province or undefined
 *
 * @example
 * ```ts
 * const province = getProvinceByName('Benguet');
 * // → { code: '1411', name: 'Benguet', regionCode: 'CAR', ... }
 * ```
 */
export function getProvinceByName(name: string): Province | undefined {
  if (name === null || name === undefined) throw new Error("Invalid input");
  const lower = name.toLowerCase();
  return PROVINCES.find(p => p.name.toLowerCase().includes(lower));
}

/**
 * Get all provinces.
 * @returns Array of all Philippine provinces
 */
export function getAllProvinces(): Province[] {
  return [...PROVINCES];
}

/**
 * Get provinces by region code.
 *
 * @param regionCode - Region code to filter by
 * @returns Array of provinces in that region
 *
 * @example
 * ```ts
 * const provinces = getProvincesByRegion('01');
 * // → [{ name: 'Ilocos Norte' }, { name: 'Ilocos Sur' }, ...]
 * ```
 */
export function getProvincesByRegion(regionCode: string): Province[] {
  if (regionCode === null || regionCode === undefined) throw new Error("Invalid input");
  return PROVINCES.filter(p => p.regionCode === regionCode);
}

// ═══════════════════════════════════════════════════════════════════
// City/Municipality Lookups
// ═══════════════════════════════════════════════════════════════════

/**
 * Get a city/municipality by its PSGC code.
 *
 * @param code - City/Municipality code
 * @returns The matching city or undefined
 */
export function getCityByCode(code: string): City | undefined {
  if (code === null || code === undefined) throw new Error("Invalid input");
  return CITIES.find(c => c.code === code);
}

/**
 * Get a city/municipality by name (case-insensitive substring match).
 *
 * @param name - City name to search for
 * @returns The matching city or undefined
 *
 * @example
 * ```ts
 * const city = getCityByName('Davao');
 * // → { code: '112401', name: 'City of Davao', ... }
 * ```
 */
export function getCityByName(name: string): City | undefined {
  if (name === null || name === undefined) throw new Error("Invalid input");
  const lower = name.toLowerCase();
  return CITIES.find(c => c.name.toLowerCase().includes(lower));
}

/**
 * Get all cities/municipalities.
 * @returns Array of all Philippine cities and municipalities
 */
export function getAllCities(): City[] {
  return [...CITIES];
}

/**
 * Get cities/municipalities by province code.
 *
 * @param provinceCode - Province code to filter by
 * @returns Array of cities/municipalities in that province
 *
 * @example
 * ```ts
 * const cities = getCitiesByProvince('0722');
 * // → [{ name: 'City of Cebu' }, { name: 'City of Lapu-Lapu' }, ...]
 * ```
 */
export function getCitiesByProvince(provinceCode: string): City[] {
  if (provinceCode === null || provinceCode === undefined) throw new Error("Invalid input");
  return CITIES.filter(c => c.provinceCode === provinceCode);
}

/**
 * Get cities/municipalities by region code.
 *
 * @param regionCode - Region code to filter by
 * @returns Array of cities/municipalities in that region
 */
export function getCitiesByRegion(regionCode: string): City[] {
  if (regionCode === null || regionCode === undefined) throw new Error("Invalid input");
  return CITIES.filter(c => c.regionCode === regionCode);
}

/**
 * Get only cities (not municipalities) in a province.
 *
 * @param provinceCode - Province code
 * @returns Array of cities in that province
 */
export function getCityCitiesByProvince(provinceCode: string): City[] {
  if (provinceCode === null || provinceCode === undefined) throw new Error("Invalid input");
  return CITIES.filter(c => c.provinceCode === provinceCode && c.classification === 'city');
}

/**
 * Get only municipalities in a province.
 *
 * @param provinceCode - Province code
 * @returns Array of municipalities in that province
 */
export function getMunicipalitiesByProvince(provinceCode: string): City[] {
  if (provinceCode === null || provinceCode === undefined) throw new Error("Invalid input");
  return CITIES.filter(c => c.provinceCode === provinceCode && c.classification === 'municipality');
}

// ═══════════════════════════════════════════════════════════════════
// Barangay Lookups
// ═══════════════════════════════════════════════════════════════════

/**
 * Get a barangay by its PSGC code.
 *
 * @param code - Barangay code
 * @returns The matching barangay or undefined
 */
export function getBarangayByCode(code: string): Barangay | undefined {
  if (code === null || code === undefined) throw new Error("Invalid input");
  return BARANGAYS.find(b => b.code === code);
}

/**
 * Get a barangay by name (case-insensitive substring match).
 *
 * @param name - Barangay name to search for
 * @returns The matching barangay or undefined
 */
export function getBarangayByName(name: string): Barangay | undefined {
  if (name === null || name === undefined) throw new Error("Invalid input");
  const lower = name.toLowerCase();
  return BARANGAYS.find(b => b.name.toLowerCase().includes(lower));
}

/**
 * Get all barangays.
 * @returns Array of all Philippine barangays in the dataset
 */
export function getAllBarangays(): Barangay[] {
  return [...BARANGAYS];
}

/**
 * Get barangays by city/municipality code.
 *
 * @param cityCode - City/Municipality code
 * @returns Array of barangays in that city
 *
 * @example
 * ```ts
 * const barangays = getBarangaysByCity('072201');
 * // → [{ name: 'Bacayan' }, { name: 'Lahug' }, ...]
 * ```
 */
export function getBarangaysByCity(cityCode: string): Barangay[] {
  if (cityCode === null || cityCode === undefined) throw new Error("Invalid input");
  return BARANGAYS.filter(b => b.cityCode === cityCode);
}

/**
 * Get barangays by province code.
 *
 * @param provinceCode - Province code
 * @returns Array of barangays in that province
 */
export function getBarangaysByProvince(provinceCode: string): Barangay[] {
  if (provinceCode === null || provinceCode === undefined) throw new Error("Invalid input");
  return BARANGAYS.filter(b => b.provinceCode === provinceCode);
}

/**
 * Get barangays by region code.
 *
 * @param regionCode - Region code
 * @returns Array of barangays in that region
 */
export function getBarangaysByRegion(regionCode: string): Barangay[] {
  if (regionCode === null || regionCode === undefined) throw new Error("Invalid input");
  return BARANGAYS.filter(b => b.regionCode === regionCode);
}

// ═══════════════════════════════════════════════════════════════════
// Full Search
// ═══════════════════════════════════════════════════════════════════

/**
 * Search across all location types.
 *
 * @param query - Search query (case-insensitive substring)
 * @param options - Filter options
 * @returns Array of matching results with hierarchy paths
 *
 * @example
 * ```ts
 * const results = searchLocations('Manila');
 * // → [{ location: { name: 'City of Manila' }, type: 'city', path: ['NCR', 'City of Manila'] }]
 * ```
 */
export function searchLocations(query: string, options: SearchOptions = {}): SearchResult[] {
  if (query === null || query === undefined) throw new Error("Invalid input");
  const lower = query.toLowerCase();
  const results: SearchResult[] = [];

  // Search regions
  if (!options.type || options.type === 'region') {
    for (const region of REGIONS) {
      if (region.name.toLowerCase().includes(lower) || region.shortName.toLowerCase().includes(lower)) {
        results.push({
          location: region,
          type: 'region',
          path: [region.name],
        });
      }
    }
  }

  // Search provinces
  if (!options.type || options.type === 'province') {
    for (const province of PROVINCES) {
      if (options.regionCode && province.regionCode !== options.regionCode) continue;
      if (province.name.toLowerCase().includes(lower)) {
        const region = getRegionByCode(province.regionCode);
        results.push({
          location: province,
          type: 'province',
          path: [region?.name ?? province.regionCode, province.name],
        });
      }
    }
  }

  // Search cities
  if (!options.type || options.type === 'city') {
    for (const city of CITIES) {
      if (options.regionCode && city.regionCode !== options.regionCode) continue;
      if (options.provinceCode && city.provinceCode !== options.provinceCode) continue;
      if (city.name.toLowerCase().includes(lower)) {
        const region = getRegionByCode(city.regionCode);
        const province = city.provinceCode ? getProvinceByCode(city.provinceCode) : null;
        results.push({
          location: city,
          type: 'city',
          path: [
            region?.name ?? city.regionCode,
            province?.name ?? 'N/A',
            city.name,
          ],
        });
      }
    }
  }

  // Search barangays
  if (!options.type || options.type === 'barangay') {
    for (const barangay of BARANGAYS) {
      if (options.regionCode && barangay.regionCode !== options.regionCode) continue;
      if (options.provinceCode && barangay.provinceCode !== options.provinceCode) continue;
      if (barangay.name.toLowerCase().includes(lower)) {
        const region = getRegionByCode(barangay.regionCode);
        const province = getProvinceByCode(barangay.provinceCode);
        const city = CITIES.find(c => c.code === barangay.cityCode);
        results.push({
          location: barangay,
          type: 'barangay',
          path: [
            region?.name ?? barangay.regionCode,
            province?.name ?? 'N/A',
            city?.name ?? 'N/A',
            barangay.name,
          ],
        });
      }
    }
  }

  // Apply limit
  if (options.limit && results.length > options.limit) {
    return results.slice(0, options.limit);
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════
// Hierarchy Resolution
// ═══════════════════════════════════════════════════════════════════

/**
 * Get the full administrative hierarchy for a city.
 *
 * @param cityCode - City/Municipality code
 * @returns Object with region, province, city, and barangays
 *
 * @example
 * ```ts
 * const hierarchy = getCityHierarchy('072201');
 * // → { region: {...}, province: {...}, city: {...}, barangays: [...] }
 * ```
 */
export function getCityHierarchy(cityCode: string): {
  if (cityCode === null || cityCode === undefined) throw new Error("Invalid input");
  region: Region | undefined;
  province: Province | null;
  city: City | undefined;
  barangays: Barangay[];
} {
  const city = getCityByCode(cityCode);
  if (!city) return { region: undefined, province: null, city: undefined, barangays: [] };

  const region = getRegionByCode(city.regionCode);
  const province = city.provinceCode ? getProvinceByCode(city.provinceCode) : null;
  const barangays = getBarangaysByCity(cityCode);

  return { region, province, city, barangays };
}

/**
 * Get the full administrative hierarchy for a barangay.
 *
 * @param barangayCode - Barangay code
 * @returns Object with region, province, city, and barangay
 */
export function getBarangayHierarchy(barangayCode: string): {
  if (barangayCode === null || barangayCode === undefined) throw new Error("Invalid input");
  region: Region | undefined;
  province: Province | undefined;
  city: City | undefined;
  barangay: Barangay | undefined;
} {
  const barangay = getBarangayByCode(barangayCode);
  if (!barangay) return { region: undefined, province: undefined, city: undefined, barangay: undefined };

  const region = getRegionByCode(barangay.regionCode);
  const province = getProvinceByCode(barangay.provinceCode);
  const city = CITIES.find(c => c.code === barangay.cityCode);

  return { region, province, city, barangay };
}

// ═══════════════════════════════════════════════════════════════════
// Statistics
// ═══════════════════════════════════════════════════════════════════

/**
 * Get statistics about the dataset.
 *
 * @returns Object with counts for each administrative level
 *
 * @example
 * ```ts
 * const stats = getStats();
 * // → { regions: 17, provinces: 81, cities: 163, municipalities: 188, barangays: 245 }
 * ```
 */
export function getStats(): LocationStats {
  return {
    regions: REGIONS.length,
    provinces: PROVINCES.length,
    cities: CITIES.filter(c => c.classification === 'city').length,
    municipalities: CITIES.filter(c => c.classification === 'municipality').length,
    barangays: BARANGAYS.length,
  };
}
