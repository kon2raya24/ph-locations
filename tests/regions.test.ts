/**
 * Tests for region data and lookups.
 */

import {
  REGIONS,
  getRegionByCode,
  getRegionByName,
  getAllRegions,
} from '../src/search';

describe('Regions', () => {
  describe('REGIONS data', () => {
    it('should have 17 regions', () => {
      expect(REGIONS).toHaveLength(17);
    });

    it('should include NCR', () => {
      const ncr = getRegionByCode('NCR');
      expect(ncr).toBeDefined();
      expect(ncr!.name).toBe('National Capital Region');
    });

    it('should include BARMM', () => {
      const barmm = getRegionByCode('BARMM');
      expect(barmm).toBeDefined();
      expect(barmm!.name).toContain('Bangsamoro');
    });

    it('should include CAR', () => {
      const car = getRegionByCode('CAR');
      expect(car).toBeDefined();
      expect(car!.name).toContain('Cordillera');
    });

    it('all regions should have required fields', () => {
      for (const region of REGIONS) {
        expect(region.code).toBeTruthy();
        expect(region.name).toBeTruthy();
        expect(region.shortName).toBeTruthy();
        expect(Array.isArray(region.provinces)).toBe(true);
      }
    });

    it('all region codes should be unique', () => {
      const codes = REGIONS.map(r => r.code);
      const uniqueCodes = new Set(codes);
      expect(codes.length).toBe(uniqueCodes.size);
    });
  });

  describe('getRegionByCode', () => {
    it('should return a region for valid code', () => {
      const region = getRegionByCode('01');
      expect(region).toBeDefined();
      expect(region!.name).toContain('Ilocos');
    });

    it('should return undefined for invalid code', () => {
      const region = getRegionByCode('INVALID');
      expect(region).toBeUndefined();
    });

    it('should find all numeric region codes', () => {
      const regionCodes = ['01', '02', '03', '04A', '04B', '05', '06', '07', '08', '09', '10', '11', '12', '13'];
      for (const code of regionCodes) {
        expect(getRegionByCode(code)).toBeDefined();
      }
    });
  });

  describe('getRegionByName', () => {
    it('should find region by partial name', () => {
      const region = getRegionByName('Davao');
      expect(region).toBeDefined();
      expect(region!.code).toBe('11');
    });

    it('should find region by short name', () => {
      const region = getRegionByName('CALABARZON');
      expect(region).toBeDefined();
      expect(region!.code).toBe('04A');
    });

    it('should be case-insensitive', () => {
      const region = getRegionByName('ilocos');
      expect(region).toBeDefined();
      expect(region!.code).toBe('01');
    });

    it('should return undefined for non-existent region', () => {
      const region = getRegionByName('NonExistent');
      expect(region).toBeUndefined();
    });
  });

  describe('getAllRegions', () => {
    it('should return all regions', () => {
      const regions = getAllRegions();
      expect(regions).toHaveLength(17);
    });

    it('should return a copy (not the original array)', () => {
      const regions = getAllRegions();
      regions.pop();
      expect(REGIONS).toHaveLength(17);
    });
  });
});
