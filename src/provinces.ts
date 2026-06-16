/**
 * Philippine Provinces (81 as of 2024)
 *
 * Each province belongs to a single region. NCR is special:
 * it has no provinces — instead, it contains directly-administered
 * cities and one municipality (Pateros).
 *
 * PSGC codes follow the Philippine Statistics Authority format.
 */

import { Province } from './types';

export const PROVINCES: Province[] = [
  // ── NCR (directly-administered cities, treated as "provinces") ──
  { code: 'NCR', name: 'Metro Manila', regionCode: 'NCR', isIndependent: false },

  // ── Region I — Ilocos Region ──
  { code: '0128', name: 'Ilocos Norte', regionCode: '01', isIndependent: false },
  { code: '0129', name: 'Ilocos Sur', regionCode: '01', isIndependent: false },
  { code: '0133', name: 'La Union', regionCode: '01', isIndependent: false },
  { code: '0155', name: 'Pangasinan', regionCode: '01', isIndependent: false },

  // ── Region II — Cagayan Valley ──
  { code: '0209', name: 'Batanes', regionCode: '02', isIndependent: false },
  { code: '0215', name: 'Cagayan', regionCode: '02', isIndependent: false },
  { code: '0231', name: 'Isabela', regionCode: '02', isIndependent: false },
  { code: '0250', name: 'Nueva Vizcaya', regionCode: '02', isIndependent: false },
  { code: '0257', name: 'Quirino', regionCode: '02', isIndependent: false },

  // ── Region III — Central Luzon ──
  { code: '0308', name: 'Aurora', regionCode: '03', isIndependent: false },
  { code: '0314', name: 'Bataan', regionCode: '03', isIndependent: false },
  { code: '0315', name: 'Bulacan', regionCode: '03', isIndependent: false },
  { code: '0349', name: 'Nueva Ecija', regionCode: '03', isIndependent: false },
  { code: '0354', name: 'Pampanga', regionCode: '03', isIndependent: false },
  { code: '0369', name: 'Tarlac', regionCode: '03', isIndependent: false },
  { code: '0371', name: 'Zambales', regionCode: '03', isIndependent: false },

  // ── Region IV-A — CALABARZON ──
  { code: '0410', name: 'Batangas', regionCode: '04A', isIndependent: false },
  { code: '0421', name: 'Cavite', regionCode: '04A', isIndependent: false },
  { code: '0434', name: 'Laguna', regionCode: '04A', isIndependent: false },
  { code: '0456', name: 'Quezon', regionCode: '04A', isIndependent: false },
  { code: '0458', name: 'Rizal', regionCode: '04A', isIndependent: false },

  // ── Region IV-B — MIMAROPA ──
  { code: '0440', name: 'Marinduque', regionCode: '04B', isIndependent: false },
  { code: '0447', name: 'Occidental Mindoro', regionCode: '04B', isIndependent: false },
  { code: '0448', name: 'Oriental Mindoro', regionCode: '04B', isIndependent: false },
  { code: '0459', name: 'Palawan', regionCode: '04B', isIndependent: false },
  { code: '0462', name: 'Romblon', regionCode: '04B', isIndependent: false },

  // ── Region V — Bicol Region ──
  { code: '0505', name: 'Albay', regionCode: '05', isIndependent: false },
  { code: '0516', name: 'Camarines Norte', regionCode: '05', isIndependent: false },
  { code: '0517', name: 'Camarines Sur', regionCode: '05', isIndependent: false },
  { code: '0520', name: 'Catanduanes', regionCode: '05', isIndependent: false },
  { code: '0541', name: 'Masbate', regionCode: '05', isIndependent: false },
  { code: '0562', name: 'Sorsogon', regionCode: '05', isIndependent: false },

  // ── Region VI — Western Visayas ──
  { code: '0604', name: 'Aklan', regionCode: '06', isIndependent: false },
  { code: '0606', name: 'Antique', regionCode: '06', isIndependent: false },
  { code: '0618', name: 'Capiz', regionCode: '06', isIndependent: false },
  { code: '0630', name: 'Guimaras', regionCode: '06', isIndependent: false },
  { code: '0637', name: 'Iloilo', regionCode: '06', isIndependent: false },
  { code: '0645', name: 'Negros Occidental', regionCode: '06', isIndependent: false },

  // ── Region VII — Central Visayas ──
  { code: '0712', name: 'Bohol', regionCode: '07', isIndependent: false },
  { code: '0722', name: 'Cebu', regionCode: '07', isIndependent: false },
  { code: '0746', name: 'Negros Oriental', regionCode: '07', isIndependent: false },
  { code: '0761', name: 'Siquijor', regionCode: '07', isIndependent: false },

  // ── Region VIII — Eastern Visayas ──
  { code: '0807', name: 'Biliran', regionCode: '08', isIndependent: false },
  { code: '0826', name: 'Eastern Samar', regionCode: '08', isIndependent: false },
  { code: '0837', name: 'Leyte', regionCode: '08', isIndependent: false },
  { code: '0848', name: 'Northern Samar', regionCode: '08', isIndependent: false },
  { code: '0604', name: 'Samar', regionCode: '08', isIndependent: false },
  { code: '0860', name: 'Southern Leyte', regionCode: '08', isIndependent: false },

  // ── Region IX — Zamboanga Peninsula ──
  { code: '0972', name: 'Zamboanga del Norte', regionCode: '09', isIndependent: false },
  { code: '0973', name: 'Zamboanga del Sur', regionCode: '09', isIndependent: false },
  { code: '0983', name: 'Zamboanga Sibugay', regionCode: '09', isIndependent: false },
  { code: '0979', name: 'Zamboanga City', regionCode: '09', isIndependent: true },

  // ── Region X — Northern Mindanao ──
  { code: '1013', name: 'Bukidnon', regionCode: '10', isIndependent: false },
  { code: '1018', name: 'Camiguin', regionCode: '10', isIndependent: false },
  { code: '1035', name: 'Lanao del Norte', regionCode: '10', isIndependent: false },
  { code: '1042', name: 'Misamis Occidental', regionCode: '10', isIndependent: false },
  { code: '1043', name: 'Misamis Oriental', regionCode: '10', isIndependent: false },

  // ── Region XI — Davao Region ──
  { code: '1123', name: 'Davao de Oro', regionCode: '11', isIndependent: false },
  { code: '1124', name: 'Davao del Norte', regionCode: '11', isIndependent: false },
  { code: '1125', name: 'Davao del Sur', regionCode: '11', isIndependent: false },
  { code: '1186', name: 'Davao Occidental', regionCode: '11', isIndependent: false },
  { code: '1126', name: 'Davao Oriental', regionCode: '11', isIndependent: false },
  { code: '1124', name: 'Davao City', regionCode: '11', isIndependent: true },

  // ── Region XII — SOCCSKSARGEN ──
  { code: '1247', name: 'North Cotabato', regionCode: '12', isIndependent: false },
  { code: '1280', name: 'Sarangani', regionCode: '12', isIndependent: false },
  { code: '1263', name: 'South Cotabato', regionCode: '12', isIndependent: false },
  { code: '1265', name: 'Sultan Kudarat', regionCode: '12', isIndependent: false },

  // ── Region XIII — Caraga ──
  { code: '1301', name: 'Agusan del Norte', regionCode: '13', isIndependent: false },
  { code: '1302', name: 'Agusan del Sur', regionCode: '13', isIndependent: false },
  { code: '1385', name: 'Dinagat Islands', regionCode: '13', isIndependent: false },
  { code: '1381', name: 'Surigao del Norte', regionCode: '13', isIndependent: false },
  { code: '1382', name: 'Surigao del Sur', regionCode: '13', isIndependent: false },

  // ── BARMM — Bangsamoro ──
  { code: '1506', name: 'Basilan', regionCode: 'BARMM', isIndependent: false },
  { code: '1536', name: 'Lanao del Sur', regionCode: 'BARMM', isIndependent: false },
  { code: '1538', name: 'Maguindanao', regionCode: 'BARMM', isIndependent: false },
  { code: '1566', name: 'Sulu', regionCode: 'BARMM', isIndependent: false },
  { code: '1570', name: 'Tawi-Tawi', regionCode: 'BARMM', isIndependent: false },

  // ── CAR — Cordillera Administrative Region ──
  { code: '1401', name: 'Abra', regionCode: 'CAR', isIndependent: false },
  { code: '1481', name: 'Apayao', regionCode: 'CAR', isIndependent: false },
  { code: '1411', name: 'Benguet', regionCode: 'CAR', isIndependent: false },
  { code: '1427', name: 'Ifugao', regionCode: 'CAR', isIndependent: false },
  { code: '1432', name: 'Kalinga', regionCode: 'CAR', isIndependent: false },
  { code: '1444', name: 'Mountain Province', regionCode: 'CAR', isIndependent: false },
];
