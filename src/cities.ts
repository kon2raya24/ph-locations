/**
 * Philippine Cities and Municipalities
 *
 * Representative major cities and municipalities for each province.
 * The Philippines has 1634 cities and municipalities total.
 * This dataset includes the most significant ones per province
 * for practical lookup purposes.
 *
 * Classification:
 *   - "city" — Chartered cities (independent or component)
 *   - "municipality" — Municipalities
 */

import { City } from './types';

export const CITIES: City[] = [
  // ═══════════════════════════════════════════════════════════════
  // NCR — National Capital Region
  // ═══════════════════════════════════════════════════════════════
  { code: '133900', name: 'City of Manila', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137400', name: 'City of Quezon', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137600', name: 'City of Makati', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137500', name: 'City of Pasig', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137600', name: 'City of Taguig', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137600', name: 'City of Parañaque', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137400', name: 'City of Las Piñas', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137600', name: 'City of Muntinlupa', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137500', name: 'City of Caloocan', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137500', name: 'City of Malabon', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137500', name: 'City of Navotas', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137500', name: 'City of Valenzuela', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137400', name: 'City of Marikina', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137600', name: 'City of Pasay', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137400', name: 'City of San Juan', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137400', name: 'City of Mandaluyong', provinceCode: 'NCR', regionCode: 'NCR', classification: 'city', isIndependent: false },
  { code: '137600', name: 'Pateros', provinceCode: 'NCR', regionCode: 'NCR', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region I — Ilocos Region
  // ═══════════════════════════════════════════════════════════════
  // Ilocos Norte
  { code: '012801', name: 'City of Laoag', provinceCode: '0128', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '012802', name: 'Batac', provinceCode: '0128', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '012803', name: 'Pagudpud', provinceCode: '0128', regionCode: '01', classification: 'municipality', isIndependent: false },
  { code: '012804', name: 'Paoay', provinceCode: '0128', regionCode: '01', classification: 'municipality', isIndependent: false },
  { code: '012805', name: 'Bangui', provinceCode: '0128', regionCode: '01', classification: 'municipality', isIndependent: false },

  // Ilocos Sur
  { code: '012901', name: 'City of Vigan', provinceCode: '0129', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '012902', name: 'Candon', provinceCode: '0129', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '012903', name: 'Bantay', provinceCode: '0129', regionCode: '01', classification: 'municipality', isIndependent: false },

  // La Union
  { code: '013301', name: 'City of San Fernando', provinceCode: '0133', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '013302', name: 'Agoo', provinceCode: '0133', regionCode: '01', classification: 'municipality', isIndependent: false },
  { code: '013303', name: 'San Juan', provinceCode: '0133', regionCode: '01', classification: 'municipality', isIndependent: false },

  // Pangasinan
  { code: '015501', name: 'City of Dagupan', provinceCode: '0155', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '015502', name: 'City of Urdaneta', provinceCode: '0155', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '015503', name: 'San Carlos City', provinceCode: '0155', regionCode: '01', classification: 'city', isIndependent: false },
  { code: '015504', name: 'Lingayen', provinceCode: '0155', regionCode: '01', classification: 'municipality', isIndependent: false },
  { code: '015505', name: 'Alaminos', provinceCode: '0155', regionCode: '01', classification: 'city', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region II — Cagayan Valley
  // ═══════════════════════════════════════════════════════════════
  // Batanes
  { code: '020901', name: 'Basco', provinceCode: '0209', regionCode: '02', classification: 'municipality', isIndependent: false },
  { code: '020902', name: 'Itbayat', provinceCode: '0209', regionCode: '02', classification: 'municipality', isIndependent: false },

  // Cagayan
  { code: '021501', name: 'City of Tuguegarao', provinceCode: '0215', regionCode: '02', classification: 'city', isIndependent: false },
  { code: '021502', name: 'Aparri', provinceCode: '0215', regionCode: '02', classification: 'municipality', isIndependent: false },
  { code: '021503', name: 'Lal-lo', provinceCode: '0215', regionCode: '02', classification: 'municipality', isIndependent: false },

  // Isabela
  { code: '023101', name: 'City of Ilagan', provinceCode: '0231', regionCode: '02', classification: 'city', isIndependent: false },
  { code: '023102', name: 'City of Cauayan', provinceCode: '0231', regionCode: '02', classification: 'city', isIndependent: false },
  { code: '023103', name: 'Santiago City', provinceCode: '0231', regionCode: '02', classification: 'city', isIndependent: true },
  { code: '023104', name: 'San Mateo', provinceCode: '0231', regionCode: '02', classification: 'municipality', isIndependent: false },

  // Nueva Vizcaya
  { code: '025001', name: 'Bayombong', provinceCode: '0250', regionCode: '02', classification: 'municipality', isIndependent: false },
  { code: '025002', name: 'Bambang', provinceCode: '0250', regionCode: '02', classification: 'municipality', isIndependent: false },

  // Quirino
  { code: '025701', name: 'Cabarroguis', provinceCode: '0257', regionCode: '02', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region III — Central Luzon
  // ═══════════════════════════════════════════════════════════════
  // Aurora
  { code: '030801', name: 'Baler', provinceCode: '0308', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '030802', name: 'Casiguran', provinceCode: '0308', regionCode: '03', classification: 'municipality', isIndependent: false },

  // Bataan
  { code: '031401', name: 'City of Balanga', provinceCode: '0314', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '031402', name: 'Mariveles', provinceCode: '0314', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '031403', name: 'Limay', provinceCode: '0314', regionCode: '03', classification: 'municipality', isIndependent: false },

  // Bulacan
  { code: '031501', name: 'City of Malolos', provinceCode: '0315', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '031502', name: 'City of Meycauayan', provinceCode: '0315', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '031503', name: 'City of San Jose del Monte', provinceCode: '0315', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '031504', name: 'Bocaue', provinceCode: '0315', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '031505', name: 'Marilao', provinceCode: '0315', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '031506', name: 'Bulacan', provinceCode: '0315', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '031507', name: 'Guiguinto', provinceCode: '0315', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '031508', name: 'Pulilan', provinceCode: '0315', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '031509', name: 'Hagonoy', provinceCode: '0315', regionCode: '03', classification: 'municipality', isIndependent: false },

  // Nueva Ecija
  { code: '034901', name: 'City of Cabanatuan', provinceCode: '0349', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '034902', name: 'City of San Jose', provinceCode: '0349', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '034903', name: 'Palayan', provinceCode: '0349', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '034904', name: 'Gapan', provinceCode: '0349', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '034905', name: 'Muñoz', provinceCode: '0349', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '034906', name: 'Talavera', provinceCode: '0349', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '034907', name: 'Cabanatuan', provinceCode: '0349', regionCode: '03', classification: 'municipality', isIndependent: false },

  // Pampanga
  { code: '035401', name: 'City of San Fernando', provinceCode: '0354', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '035402', name: 'City of Angeles', provinceCode: '0354', regionCode: '03', classification: 'city', isIndependent: true },
  { code: '035403', name: 'Mabalacat', provinceCode: '0354', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '035404', name: 'Guagua', provinceCode: '0354', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '035405', name: 'Bacolor', provinceCode: '0354', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '035406', name: 'Porac', provinceCode: '0354', regionCode: '03', classification: 'municipality', isIndependent: false },

  // Tarlac
  { code: '036901', name: 'City of Tarlac', provinceCode: '0369', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '036902', name: 'Capas', provinceCode: '0369', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '036903', name: 'Concepcion', provinceCode: '0369', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '036904', name: 'Paniqui', provinceCode: '0369', regionCode: '03', classification: 'municipality', isIndependent: false },

  // Zambales
  { code: '037101', name: 'City of Olongapo', provinceCode: '0371', regionCode: '03', classification: 'city', isIndependent: false },
  { code: '037102', name: 'Subic', provinceCode: '0371', regionCode: '03', classification: 'municipality', isIndependent: false },
  { code: '037103', name: 'Iba', provinceCode: '0371', regionCode: '03', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region IV-A — CALABARZON
  // ═══════════════════════════════════════════════════════════════
  // Batangas
  { code: '041001', name: 'City of Batangas', provinceCode: '0410', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '041002', name: 'Lipa', provinceCode: '0410', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '041003', name: 'Tanauan', provinceCode: '0410', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '041004', name: 'Santo Tomas', provinceCode: '0410', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '041005', name: 'Nasugbu', provinceCode: '0410', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '041006', name: 'Calatagan', provinceCode: '0410', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '041007', name: 'Mabini', provinceCode: '0410', regionCode: '04A', classification: 'municipality', isIndependent: false },

  // Cavite
  { code: '042101', name: 'City of Trece Martires', provinceCode: '0421', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '042102', name: 'City of Dasmariñas', provinceCode: '0421', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '042103', name: 'City of Bacoor', provinceCode: '0421', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '042104', name: 'City of Imus', provinceCode: '0421', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '042105', name: 'City of General Trias', provinceCode: '0421', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '042106', name: 'City of Cavite', provinceCode: '0421', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '042107', name: 'Tagaytay', provinceCode: '0421', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '042108', name: 'Kawit', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042109', name: 'Rosario', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042110', name: 'Noveleta', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042111', name: 'General Mariano Alvarez', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042112', name: 'Amadeo', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042113', name: 'Indang', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042114', name: 'Mendez', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042115', name: 'Alfonso', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042116', name: 'Maragondon', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042117', name: 'Silang', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042118', name: 'Tanza', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042119', name: 'Naic', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042120', name: 'Ternate', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042121', name: 'Carmona', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '042122', name: 'Bailen', provinceCode: '0421', regionCode: '04A', classification: 'municipality', isIndependent: false },

  // Laguna
  { code: '043401', name: 'City of San Pablo', provinceCode: '0434', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '043402', name: 'City of Calamba', provinceCode: '0434', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '043403', name: 'City of Santa Rosa', provinceCode: '0434', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '043404', name: 'San Pedro', provinceCode: '0434', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '043405', name: 'Biñan', provinceCode: '0434', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '043406', name: 'Cabuyao', provinceCode: '0434', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '043407', name: 'Santa Cruz', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043408', name: 'Los Baños', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043409', name: 'Lumban', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043410', name: 'Pagsanjan', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043411', name: 'Nagcarlan', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043412', name: 'San Pedro', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043413', name: 'Calauan', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043414', name: 'Victoria', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '043415', name: 'Luisiana', provinceCode: '0434', regionCode: '04A', classification: 'municipality', isIndependent: false },

  // Quezon
  { code: '045601', name: 'City of Lucena', provinceCode: '0456', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '045602', name: 'Tayabas', provinceCode: '0456', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '045603', name: 'Sariaya', provinceCode: '0456', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '045604', name: 'Candelaria', provinceCode: '0456', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '045605', name: 'Pagbilao', provinceCode: '0456', regionCode: '04A', classification: 'municipality', isIndependent: false },

  // Rizal
  { code: '045801', name: 'City of Antipolo', provinceCode: '0458', regionCode: '04A', classification: 'city', isIndependent: false },
  { code: '045802', name: 'Taytay', provinceCode: '0458', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '045803', name: 'Cainta', provinceCode: '0458', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '045804', name: 'Angono', provinceCode: '0458', regionCode: '04A', classification: 'municipality', isIndependent: false },
  { code: '045805', name: 'Binangonan', provinceCode: '0458', regionCode: '04A', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region IV-B — MIMAROPA
  // ═══════════════════════════════════════════════════════════════
  // Marinduque
  { code: '044001', name: 'Boac', provinceCode: '0440', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '044002', name: 'Gasan', provinceCode: '0440', regionCode: '04B', classification: 'municipality', isIndependent: false },

  // Occidental Mindoro
  { code: '044701', name: 'Mamburao', provinceCode: '0447', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '044702', name: 'San Jose', provinceCode: '0447', regionCode: '04B', classification: 'municipality', isIndependent: false },

  // Oriental Mindoro
  { code: '044801', name: 'City of Calapan', provinceCode: '0448', regionCode: '04B', classification: 'city', isIndependent: false },
  { code: '044802', name: 'Roxas', provinceCode: '0448', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '044803', name: 'Baco', provinceCode: '0448', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '044804', name: 'Naujan', provinceCode: '0448', regionCode: '04B', classification: 'municipality', isIndependent: false },

  // Palawan
  { code: '045901', name: 'City of Puerto Princesa', provinceCode: '0459', regionCode: '04B', classification: 'city', isIndependent: true },
  { code: '045902', name: 'Quezon', provinceCode: '0459', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '045903', name: 'Roxas', provinceCode: '0459', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '045904', name: 'San Vicente', provinceCode: '0459', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '045905', name: 'El Nido', provinceCode: '0459', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '045906', name: 'Narra', provinceCode: '0459', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '045907', name: 'Puerto Princesa', provinceCode: '0459', regionCode: '04B', classification: 'municipality', isIndependent: false },

  // Romblon
  { code: '046201', name: 'Romblon', provinceCode: '0462', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '046202', name: 'Odiongan', provinceCode: '0462', regionCode: '04B', classification: 'municipality', isIndependent: false },
  { code: '046203', name: 'San Fernando', provinceCode: '0462', regionCode: '04B', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region V — Bicol Region
  // ═══════════════════════════════════════════════════════════════
  // Albay
  { code: '050501', name: 'City of Legazpi', provinceCode: '0505', regionCode: '05', classification: 'city', isIndependent: false },
  { code: '050502', name: 'City of Tabaco', provinceCode: '0505', regionCode: '05', classification: 'city', isIndependent: false },
  { code: '050503', name: 'Ligao', provinceCode: '0505', regionCode: '05', classification: 'city', isIndependent: false },
  { code: '050504', name: 'Daraga', provinceCode: '0505', regionCode: '05', classification: 'municipality', isIndependent: false },
  { code: '050505', name: 'Cagsawa', provinceCode: '0505', regionCode: '05', classification: 'municipality', isIndependent: false },
  { code: '050506', name: 'Camalig', provinceCode: '0505', regionCode: '05', classification: 'municipality', isIndependent: false },

  // Camarines Norte
  { code: '051601', name: 'Daet', provinceCode: '0516', regionCode: '05', classification: 'municipality', isIndependent: false },
  { code: '051602', name: 'Labo', provinceCode: '0516', regionCode: '05', classification: 'municipality', isIndependent: false },

  // Camarines Sur
  { code: '051701', name: 'City of Naga', provinceCode: '0517', regionCode: '05', classification: 'city', isIndependent: true },
  { code: '051702', name: 'Iriga', provinceCode: '0517', regionCode: '05', classification: 'city', isIndependent: false },
  { code: '051703', name: 'Pili', provinceCode: '0517', regionCode: '05', classification: 'municipality', isIndependent: false },
  { code: '051704', name: 'Ocampo', provinceCode: '0517', regionCode: '05', classification: 'municipality', isIndependent: false },

  // Catanduanes
  { code: '052001', name: 'Virac', provinceCode: '0520', regionCode: '05', classification: 'municipality', isIndependent: false },
  { code: '052002', name: 'San Andres', provinceCode: '0520', regionCode: '05', classification: 'municipality', isIndependent: false },

  // Masbate
  { code: '054101', name: 'City of Masbate', provinceCode: '0541', regionCode: '05', classification: 'city', isIndependent: false },
  { code: '054102', name: 'Aroroy', provinceCode: '0541', regionCode: '05', classification: 'municipality', isIndependent: false },
  { code: '054103', name: 'Baleno', provinceCode: '0541', regionCode: '05', classification: 'municipality', isIndependent: false },

  // Sorsogon
  { code: '056201', name: 'City of Sorsogon', provinceCode: '0562', regionCode: '05', classification: 'city', isIndependent: false },
  { code: '056202', name: 'Bulan', provinceCode: '0562', regionCode: '05', classification: 'municipality', isIndependent: false },
  { code: '056203', name: 'Gubat', provinceCode: '0562', regionCode: '05', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region VI — Western Visayas
  // ═══════════════════════════════════════════════════════════════
  // Aklan
  { code: '060401', name: 'Kalibo', provinceCode: '0604', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '060402', name: 'Malay (Boracay)', provinceCode: '0604', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '060403', name: 'New Washington', provinceCode: '0604', regionCode: '06', classification: 'municipality', isIndependent: false },

  // Antique
  { code: '060601', name: 'San Jose de Buenavista', provinceCode: '0606', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '060602', name: 'Pandan', provinceCode: '0606', regionCode: '06', classification: 'municipality', isIndependent: false },

  // Capiz
  { code: '061801', name: 'City of Roxas', provinceCode: '0618', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '061802', name: 'Pontevedra', provinceCode: '0618', regionCode: '06', classification: 'municipality', isIndependent: false },

  // Guimaras
  { code: '063001', name: 'Jordan', provinceCode: '0630', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '063002', name: 'Nueva Valencia', provinceCode: '0630', regionCode: '06', classification: 'municipality', isIndependent: false },

  // Iloilo
  { code: '063701', name: 'City of Iloilo', provinceCode: '0637', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '063702', name: 'City of Passi', provinceCode: '0637', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '063703', name: 'Miagao', provinceCode: '0637', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '063704', name: 'Oton', provinceCode: '0637', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '063705', name: 'Pavia', provinceCode: '0637', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '063706', name: 'Santa Barbara', provinceCode: '0637', regionCode: '06', classification: 'municipality', isIndependent: false },

  // Negros Occidental
  { code: '064501', name: 'City of Bacolod', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: true },
  { code: '064502', name: 'City of Talisay', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064503', name: 'Silay', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064504', name: 'Bago', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064505', name: 'La Carlota', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064506', name: 'Kabankalan', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064507', name: 'Victorias', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064508', name: 'Cadiz', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064509', name: 'San Carlos', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064510', name: 'Himamaylan', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064511', name: 'Escalante', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064512', name: 'Sagay', provinceCode: '0645', regionCode: '06', classification: 'city', isIndependent: false },
  { code: '064513', name: 'Toboso', provinceCode: '0645', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '064514', name: 'Calatrava', provinceCode: '0645', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '064515', name: 'Pontevedra', provinceCode: '0645', regionCode: '06', classification: 'municipality', isIndependent: false },
  { code: '064516', name: 'Murcia', provinceCode: '0645', regionCode: '06', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region VII — Central Visayas
  // ═══════════════════════════════════════════════════════════════
  // Bohol
  { code: '071201', name: 'City of Tagbilaran', provinceCode: '0712', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '071202', name: 'Panglao', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071203', name: 'Loboc', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071204', name: 'Baclayon', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071205', name: 'Jagna', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071206', name: 'Anda', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071207', name: 'Carmen', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071208', name: 'Sikatuna', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071209', name: 'Dauis', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '071210', name: 'Tubigon', provinceCode: '0712', regionCode: '07', classification: 'municipality', isIndependent: false },

  // Cebu
  { code: '072201', name: 'City of Cebu', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072202', name: 'City of Lapu-Lapu', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072203', name: 'City of Mandaue', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072204', name: 'Talisay', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072205', name: 'Naga', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072206', name: 'Carcar', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072207', name: 'Danao', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072208', name: 'Toledo', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072209', name: 'Bogo', provinceCode: '0722', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '072210', name: 'Minglanilla', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072211', name: 'Cordova', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072212', name: 'Liloan', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072213', name: 'Consolacion', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072214', name: 'San Fernando', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072215', name: 'Balamban', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072216', name: 'Argao', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072217', name: 'Dalaguete', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072218', name: 'Moalboal', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072219', name: 'Badian', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '072220', name: 'Oslob', provinceCode: '0722', regionCode: '07', classification: 'municipality', isIndependent: false },

  // Negros Oriental
  { code: '074601', name: 'City of Dumaguete', provinceCode: '0746', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '074602', name: 'Bais', provinceCode: '0746', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '074603', name: 'Tanjay', provinceCode: '0746', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '074604', name: 'Bayawan', provinceCode: '0746', regionCode: '07', classification: 'city', isIndependent: false },
  { code: '074605', name: 'Valencia', provinceCode: '0746', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '074606', name: 'Sibulan', provinceCode: '0746', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '074607', name: 'Dauin', provinceCode: '0746', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '074608', name: 'Zamboanguita', provinceCode: '0746', regionCode: '07', classification: 'municipality', isIndependent: false },

  // Siquijor
  { code: '076101', name: 'Siquijor', provinceCode: '0761', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '076102', name: 'Lazi', provinceCode: '0761', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '076103', name: 'San Juan', provinceCode: '0761', regionCode: '07', classification: 'municipality', isIndependent: false },
  { code: '076104', name: 'Enrique Villanueva', provinceCode: '0761', regionCode: '07', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region VIII — Eastern Visayas
  // ═══════════════════════════════════════════════════════════════
  // Biliran
  { code: '080701', name: 'Naval', provinceCode: '0807', regionCode: '08', classification: 'municipality', isIndependent: false },
  { code: '080702', name: 'Kawayan', provinceCode: '0807', regionCode: '08', classification: 'municipality', isIndependent: false },

  // Eastern Samar
  { code: '082601', name: 'Borongan', provinceCode: '0826', regionCode: '08', classification: 'city', isIndependent: false },
  { code: '082602', name: 'Guiuan', provinceCode: '0826', regionCode: '08', classification: 'municipality', isIndependent: false },

  // Leyte
  { code: '083701', name: 'City of Tacloban', provinceCode: '0837', regionCode: '08', classification: 'city', isIndependent: true },
  { code: '083702', name: 'Ormoc', provinceCode: '0837', regionCode: '08', classification: 'city', isIndependent: false },
  { code: '083703', name: 'Baybay', provinceCode: '0837', regionCode: '08', classification: 'city', isIndependent: false },
  { code: '083704', name: 'Palo', provinceCode: '0837', regionCode: '08', classification: 'municipality', isIndependent: false },
  { code: '083705', name: 'Tanauan', provinceCode: '0837', regionCode: '08', classification: 'municipality', isIndependent: false },
  { code: '083706', name: 'Dulag', provinceCode: '0837', regionCode: '08', classification: 'municipality', isIndependent: false },

  // Northern Samar
  { code: '084801', name: 'Catarman', provinceCode: '0848', regionCode: '08', classification: 'municipality', isIndependent: false },
  { code: '084802', name: 'Calbayog', provinceCode: '0848', regionCode: '08', classification: 'city', isIndependent: false },

  // Samar
  { code: '086001', name: 'Catbalogan', provinceCode: '0860', regionCode: '08', classification: 'city', isIndependent: false },
  { code: '086002', name: 'Tacloban', provinceCode: '0860', regionCode: '08', classification: 'municipality', isIndependent: false },

  // Southern Leyte
  { code: '086401', name: 'Maasin', provinceCode: '0864', regionCode: '08', classification: 'city', isIndependent: false },
  { code: '086402', name: 'Sogod', provinceCode: '0864', regionCode: '08', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region IX — Zamboanga Peninsula
  // ═══════════════════════════════════════════════════════════════
  // Zamboanga del Norte
  { code: '097201', name: 'Dipolog', provinceCode: '0972', regionCode: '09', classification: 'city', isIndependent: false },
  { code: '097202', name: 'Dapitan', provinceCode: '0972', regionCode: '09', classification: 'city', isIndependent: false },
  { code: '097203', name: 'Polanco', provinceCode: '0972', regionCode: '09', classification: 'municipality', isIndependent: false },
  { code: '097204', name: 'Pinan', provinceCode: '0972', regionCode: '09', classification: 'municipality', isIndependent: false },

  // Zamboanga del Sur
  { code: '097301', name: 'City of Pagadian', provinceCode: '0973', regionCode: '09', classification: 'city', isIndependent: false },
  { code: '097302', name: 'Molave', provinceCode: '0973', regionCode: '09', classification: 'municipality', isIndependent: false },

  // Zamboanga Sibugay
  { code: '098301', name: 'Ipil', provinceCode: '0983', regionCode: '09', classification: 'municipality', isIndependent: false },
  { code: '098302', name: 'Kabasalan', provinceCode: '0983', regionCode: '09', classification: 'municipality', isIndependent: false },

  // Zamboanga City
  { code: '097901', name: 'City of Zamboanga', provinceCode: null, regionCode: '09', classification: 'city', isIndependent: true },

  // ═══════════════════════════════════════════════════════════════
  // Region X — Northern Mindanao
  // ═══════════════════════════════════════════════════════════════
  // Bukidnon
  { code: '101301', name: 'Malaybalay', provinceCode: '1013', regionCode: '10', classification: 'city', isIndependent: false },
  { code: '101302', name: 'Valencia', provinceCode: '1013', regionCode: '10', classification: 'city', isIndependent: false },
  { code: '101303', name: 'Manolo Fortich', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101304', name: 'Bukangon', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101305', name: 'Talakag', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101306', name: 'Lantapan', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101307', name: 'Baungon', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101308', name: 'Libona', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101309', name: 'Impasug-ong', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101310', name: 'Damulog', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101311', name: 'Kadingilan', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101312', name: 'Maramag', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101313', name: 'Don Carlos', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101314', name: 'Kibawe', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101315', name: 'Quezon', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101316', name: 'San Fernando', provinceCode: '1013', regionCode: '10', classification: 'municipality', isIndependent: false },

  // Camiguin
  { code: '101801', name: 'Mambajao', provinceCode: '1018', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101802', name: 'Guinsiliban', provinceCode: '1018', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101803', name: 'Sagay', provinceCode: '1018', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101804', name: 'Mahinog', provinceCode: '1018', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '101805', name: 'Catarman', provinceCode: '1018', regionCode: '10', classification: 'municipality', isIndependent: false },

  // Lanao del Norte
  { code: '103501', name: 'Iligan', provinceCode: '1035', regionCode: '10', classification: 'city', isIndependent: true },
  { code: '103502', name: 'Tubod', provinceCode: '1035', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '103503', name: 'Iligan', provinceCode: '1035', regionCode: '10', classification: 'municipality', isIndependent: false },

  // Misamis Occidental
  { code: '104201', name: 'Oroquieta', provinceCode: '1042', regionCode: '10', classification: 'city', isIndependent: false },
  { code: '104202', name: 'Ozamiz', provinceCode: '1042', regionCode: '10', classification: 'city', isIndependent: false },
  { code: '104203', name: 'Tangub', provinceCode: '1042', regionCode: '10', classification: 'city', isIndependent: false },
  { code: '104204', name: 'Aloran', provinceCode: '1042', regionCode: '10', classification: 'municipality', isIndependent: false },

  // Misamis Oriental
  { code: '104301', name: 'City of Cagayan de Oro', provinceCode: '1043', regionCode: '10', classification: 'city', isIndependent: true },
  { code: '104302', name: 'El Salvador', provinceCode: '1043', regionCode: '10', classification: 'city', isIndependent: false },
  { code: '104303', name: 'Gingoog', provinceCode: '1043', regionCode: '10', classification: 'city', isIndependent: false },
  { code: '104304', name: 'Laguindingan', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104305', name: 'Alubijid', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104306', name: 'Initao', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104307', name: 'Manticao', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104308', name: 'Naawan', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104309', name: 'Villanueva', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104310', name: 'Tagoloan', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104311', name: 'Catarman', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },
  { code: '104312', name: 'Balingasag', provinceCode: '1043', regionCode: '10', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // Region XI — Davao Region
  // ═══════════════════════════════════════════════════════════════
  // Davao de Oro
  { code: '112301', name: 'Nabunturan', provinceCode: '1123', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112302', name: 'Maco', provinceCode: '1123', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112303', name: 'Monkayo', provinceCode: '1123', regionCode: '11', classification: 'municipality', isIndependent: false },

  // Davao del Norte
  { code: '112401', name: 'Tagum', provinceCode: '1124', regionCode: '11', classification: 'city', isIndependent: false },
  { code: '112402', name: 'Panabo', provinceCode: '1124', regionCode: '11', classification: 'city', isIndependent: false },
  { code: '112403', name: 'Isidro P. Pacundug', provinceCode: '1124', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112404', name: 'Carmen', provinceCode: '1124', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112405', name: 'New Corella', provinceCode: '1124', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112406', name: 'Braulio E. Dujali', provinceCode: '1124', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112407', name: 'Talaingod', provinceCode: '1124', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112408', name: 'Santo Tomas', provinceCode: '1124', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112409', name: 'Samal', provinceCode: '1124', regionCode: '11', classification: 'city', isIndependent: false },

  // Davao del Sur
  { code: '112501', name: 'City of Digos', provinceCode: '1125', regionCode: '11', classification: 'city', isIndependent: false },
  { code: '112502', name: 'Malita', provinceCode: '1125', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112503', name: 'Sta. Cruz', provinceCode: '1125', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112504', name: 'Hagonoy', provinceCode: '1125', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112505', name: 'Magsaysay', provinceCode: '1125', regionCode: '11', classification: 'municipality', isIndependent: false },

  // Davao Occidental
  { code: '118601', name: 'Malita', provinceCode: '1186', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '118602', name: 'Sta. Maria', provinceCode: '1186', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '118603', name: 'Sarangani', provinceCode: '1186', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '118604', name: 'Jose Abad Santos', provinceCode: '1186', regionCode: '11', classification: 'municipality', isIndependent: false },

  // Davao Oriental
  { code: '112601', name: 'Mati', provinceCode: '1126', regionCode: '11', classification: 'city', isIndependent: false },
  { code: '112602', name: 'Baganga', provinceCode: '1126', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112603', name: 'Manay', provinceCode: '1126', regionCode: '11', classification: 'municipality', isIndependent: false },
  { code: '112604', name: 'Caraga', provinceCode: '1126', regionCode: '11', classification: 'municipality', isIndependent: false },

  // Davao City (IRCC)
  { code: '112401', name: 'City of Davao', provinceCode: null, regionCode: '11', classification: 'city', isIndependent: true },

  // ═══════════════════════════════════════════════════════════════
  // Region XII — SOCCSKSARGEN
  // ═══════════════════════════════════════════════════════════════
  // North Cotabato
  { code: '124701', name: 'City of Kidapawan', provinceCode: '1247', regionCode: '12', classification: 'city', isIndependent: false },
  { code: '124702', name: 'Makilala', provinceCode: '1247', regionCode: '12', classification: 'municipality', isIndependent: false },
  { code: '124703', name: 'Matalam', provinceCode: '1247', regionCode: '12', classification: 'municipality', isIndependent: false },
  { code: '124704', name: 'Kabacan', provinceCode: '1247', regionCode: '12', classification: 'municipality', isIndependent: false },

  // Sarangani
  { code: '128001', name: 'Alabel', provinceCode: '1280', regionCode: '12', classification: 'municipality', isIndependent: false },
  { code: '128002', name: 'Glan', provinceCode: '1280', regionCode: '12', classification: 'municipality', isIndependent: false },
  { code: '128003', name: 'Maasim', provinceCode: '1280', regionCode: '12', classification: 'municipality', isIndependent: false },

  // South Cotabato
  { code: '126301', name: 'City of Koronadal', provinceCode: '1263', regionCode: '12', classification: 'city', isIndependent: false },
  { code: '126302', name: 'Polomolok', provinceCode: '1263', regionCode: '12', classification: 'municipality', isIndependent: false },
  { code: '126303', name: 'Norala', provinceCode: '1263', regionCode: '12', classification: 'municipality', isIndependent: false },

  // Sultan Kudarat
  { code: '126501', name: 'City of Tacurong', provinceCode: '1265', regionCode: '12', classification: 'city', isIndependent: false },
  { code: '126502', name: 'Isulan', provinceCode: '1265', regionCode: '12', classification: 'municipality', isIndependent: false },
  { code: '126503', name: 'Lambayong', provinceCode: '1265', regionCode: '12', classification: 'municipality', isIndependent: false },

  // General Santos City (IRCC)
  { code: '126301', name: 'City of General Santos', provinceCode: null, regionCode: '12', classification: 'city', isIndependent: true },

  // ═══════════════════════════════════════════════════════════════
  // Region XIII — Caraga
  // ═══════════════════════════════════════════════════════════════
  // Agusan del Norte
  { code: '130101', name: 'City of Butuan', provinceCode: '1301', regionCode: '13', classification: 'city', isIndependent: true },
  { code: '130102', name: 'Cabadbaran', provinceCode: '1301', regionCode: '13', classification: 'city', isIndependent: false },
  { code: '130103', name: 'Nasipit', provinceCode: '1301', regionCode: '13', classification: 'municipality', isIndependent: false },
  { code: '130104', name: 'Tubay', provinceCode: '1301', regionCode: '13', classification: 'municipality', isIndependent: false },

  // Agusan del Sur
  { code: '130201', name: 'City of Bayugan', provinceCode: '1302', regionCode: '13', classification: 'city', isIndependent: false },
  { code: '130202', name: 'San Francisco', provinceCode: '1302', regionCode: '13', classification: 'city', isIndependent: false },
  { code: '130203', name: 'Prosperidad', provinceCode: '1302', regionCode: '13', classification: 'municipality', isIndependent: false },
  { code: '130204', name: 'Trento', provinceCode: '1302', regionCode: '13', classification: 'municipality', isIndependent: false },
  { code: '130205', name: 'Veruela', provinceCode: '1302', regionCode: '13', classification: 'municipality', isIndependent: false },

  // Dinagat Islands
  { code: '138501', name: 'San Jose', provinceCode: '1385', regionCode: '13', classification: 'municipality', isIndependent: false },
  { code: '138502', name: 'Dinagat', provinceCode: '1385', regionCode: '13', classification: 'municipality', isIndependent: false },

  // Surigao del Norte
  { code: '138101', name: 'City of Surigao', provinceCode: '1381', regionCode: '13', classification: 'city', isIndependent: false },
  { code: '138102', name: 'Bislig', provinceCode: '1381', regionCode: '13', classification: 'city', isIndependent: false },
  { code: '138103', name: 'Surigao City', provinceCode: '1381', regionCode: '13', classification: 'municipality', isIndependent: false },
  { code: '138104', name: 'Placer', provinceCode: '1381', regionCode: '13', classification: 'municipality', isIndependent: false },

  // Surigao del Sur
  { code: '138201', name: 'City of Bislig', provinceCode: '1382', regionCode: '13', classification: 'city', isIndependent: false },
  { code: '138202', name: 'Tandag', provinceCode: '1382', regionCode: '13', classification: 'city', isIndependent: false },
  { code: '138203', name: 'Cantilan', provinceCode: '1382', regionCode: '13', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // BARMM — Bangsamoro
  // ═══════════════════════════════════════════════════════════════
  // Basilan
  { code: '150601', name: 'City of Isabela', provinceCode: '1506', regionCode: 'BARMM', classification: 'city', isIndependent: false },
  { code: '150602', name: 'Lamitan', provinceCode: '1506', regionCode: 'BARMM', classification: 'city', isIndependent: false },
  { code: '150603', name: 'Maluso', provinceCode: '1506', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },
  { code: '150604', name: 'Lantawan', provinceCode: '1506', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },

  // Lanao del Sur
  { code: '153601', name: 'City of Marawi', provinceCode: '1536', regionCode: 'BARMM', classification: 'city', isIndependent: false },
  { code: '153602', name: 'Balindong', provinceCode: '1536', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },

  // Maguindanao
  { code: '153801', name: 'City of Cotabato', provinceCode: '1538', regionCode: 'BARMM', classification: 'city', isIndependent: true },
  { code: '153802', name: 'Datu Odin Sinsuat', provinceCode: '1538', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },
  { code: '153803', name: 'Sharon (Datu Saudi Ampatuan)', provinceCode: '1538', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },

  // Sulu
  { code: '156601', name: 'Jolo', provinceCode: '1566', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },
  { code: '156602', name: 'Patikul', provinceCode: '1566', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },

  // Tawi-Tawi
  { code: '157001', name: 'Bongao', provinceCode: '1570', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },
  { code: '157002', name: 'Languyan', provinceCode: '1570', regionCode: 'BARMM', classification: 'municipality', isIndependent: false },

  // ═══════════════════════════════════════════════════════════════
  // CAR — Cordillera Administrative Region
  // ═══════════════════════════════════════════════════════════════
  // Abra
  { code: '140101', name: 'Bangued', provinceCode: '1401', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '140102', name: 'Tayum', provinceCode: '1401', regionCode: 'CAR', classification: 'municipality', isIndependent: false },

  // Apayao
  { code: '148101', name: 'Kabugao', provinceCode: '1481', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '148102', name: 'Conner', provinceCode: '1481', regionCode: 'CAR', classification: 'municipality', isIndependent: false },

  // Benguet
  { code: '141101', name: 'City of Baguio', provinceCode: '1411', regionCode: 'CAR', classification: 'city', isIndependent: true },
  { code: '141102', name: 'La Trinidad', provinceCode: '1411', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '141103', name: 'Itogon', provinceCode: '1411', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '141104', name: 'Sablan', provinceCode: '1411', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '141105', name: 'Tuba', provinceCode: '1411', regionCode: 'CAR', classification: 'municipality', isIndependent: false },

  // Ifugao
  { code: '142701', name: 'Lagawe', provinceCode: '1427', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '142702', name: 'Banaue', provinceCode: '1427', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '142703', name: 'Kiangan', provinceCode: '1427', regionCode: 'CAR', classification: 'municipality', isIndependent: false },

  // Kalinga
  { code: '143201', name: 'Tabuk', provinceCode: '1432', regionCode: 'CAR', classification: 'city', isIndependent: false },
  { code: '143202', name: 'Balbalan', provinceCode: '1432', regionCode: 'CAR', classification: 'municipality', isIndependent: false },

  // Mountain Province
  { code: '144401', name: 'Bontoc', provinceCode: '1444', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '144402', name: 'Sagada', provinceCode: '1444', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
  { code: '144403', name: 'Bauko', provinceCode: '1444', regionCode: 'CAR', classification: 'municipality', isIndependent: false },
];
