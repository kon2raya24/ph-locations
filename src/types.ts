/**
 * Type definitions for Philippine administrative divisions.
 *
 * Administrative hierarchy:
 *   Region → Province → City/Municipality → Barangay
 *
 * Official reference: Philippine Statistics Authority (PSA)
 * Standard: Philippine Standard Geographic Code (PSGC)
 */

/**
 * A Philippine region.
 *
 * The Philippines is divided into 17 regions (as of 2024):
 * - 16 regular regions identified by Roman numerals
 * - 1 autonomous region (BARMM)
 * - NCR (National Capital Region) — does not contain provinces
 *   but instead contains directly-administered cities and a municipality
 */
export interface Region {
  /** Region PSGC code (e.g. "01", "02", "NCR", "BARMM") */
  code: string;
  /** Official region name */
  name: string;
  /** Short name / abbreviation (e.g. "Region I", "NCR") */
  shortName: string;
  /** List of province names within this region */
  provinces: string[];
}

/**
 * A Philippine province or independent component city.
 *
 * Each province belongs to exactly one region and contains
 * one or more cities and municipalities.
 */
export interface Province {
  /** Province PSGC code (e.g. "0128" for Ilocos Norte) */
  code: string;
  /** Province name */
  name: string;
  /** Region code this province belongs to */
  regionCode: string;
  /** Whether this is an independent component city */
  isIndependent: boolean;
}

/**
 * A Philippine city or municipality.
 *
 * Cities have higher classification and more autonomy than municipalities.
 * Some cities are directly under a region (IRCCs) rather than a province.
 */
export interface City {
  /** City/Municipality PSGC code */
  code: string;
  /** City/Municipality name */
  name: string;
  /** Province code this city belongs to (null for IRCCs) */
  provinceCode: string | null;
  /** Region code */
  regionCode: string;
  /** Classification: "city" or "municipality" */
  classification: 'city' | 'municipality';
  /** Whether this is an independent component city */
  isIndependent: boolean;
}

/**
 * A Philippine barangay (smallest administrative unit).
 *
 * Every city and municipality is divided into barangays.
 * The Philippines has approximately 42,000+ barangays.
 */
export interface Barangay {
  /** Barangay PSGC code */
  code: string;
  /** Barangay name */
  name: string;
  /** City/Municipality code */
  cityCode: string;
  /** Province code */
  provinceCode: string;
  /** Region code */
  regionCode: string;
}

/**
 * Search result containing a location and its hierarchy path.
 */
export interface SearchResult {
  /** The matched location */
  location: Region | Province | City | Barangay;
  /** Type of the matched location */
  type: 'region' | 'province' | 'city' | 'barangay';
  /** Full path from region down to the matched location */
  path: string[];
}

/**
 * Filter options for searching locations.
 */
export interface SearchOptions {
  /** Limit the search to a specific type */
  type?: 'region' | 'province' | 'city' | 'barangay';
  /** Limit the search to a specific region code */
  regionCode?: string;
  /** Limit the search to a specific province code */
  provinceCode?: string;
  /** Enable fuzzy matching (default: false — uses exact substring matching) */
  fuzzy?: boolean;
  /** Maximum number of results to return */
  limit?: number;
}

/**
 * Statistics about the dataset.
 */
export interface LocationStats {
  regions: number;
  provinces: number;
  cities: number;
  municipalities: number;
  barangays: number;
}
