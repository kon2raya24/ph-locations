/**
 * ph-locations — Philippine Administrative Location Data
 *
 * Comprehensive dataset of Philippine regions, provinces, cities/municipalities,
 * and barangays with TypeScript types and utility functions.
 *
 * @packageDocumentation
 * @module ph-locations
 */

// ── Type Definitions ──────────────────────────────────────────────
export type {
  Region,
  Province,
  City,
  Barangay,
  SearchResult,
  SearchOptions,
  LocationStats,
} from './types';

// ── Data ──────────────────────────────────────────────────────────
export { REGIONS } from './regions';
export { PROVINCES } from './provinces';
export { CITIES } from './cities';
export { BARANGAYS } from './barangays';

// ── All Utilities ─────────────────────────────────────────────────
export {
  // Region Lookups
  getRegionByCode,
  getRegionByName,
  getAllRegions,
  // Province Lookups
  getProvinceByCode,
  getProvinceByName,
  getAllProvinces,
  getProvincesByRegion,
  // City/Municipality Lookups
  getCityByCode,
  getCityByName,
  getAllCities,
  getCitiesByProvince,
  getCitiesByRegion,
  getCityCitiesByProvince,
  getMunicipalitiesByProvince,
  // Barangay Lookups
  getBarangayByCode,
  getBarangayByName,
  getAllBarangays,
  getBarangaysByCity,
  getBarangaysByProvince,
  getBarangaysByRegion,
  // Full Search
  searchLocations,
  // Hierarchy Resolution
  getCityHierarchy,
  getBarangayHierarchy,
  // Statistics
  getStats,
} from './search';
