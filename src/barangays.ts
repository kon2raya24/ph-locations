/**
 * Philippine Barangays
 *
 * The Philippines has ~42,000+ barangays. This dataset includes representative
 * barangays for the major cities and municipalities. Each city/municipality
 * has a representative sample of its barangays for practical lookup purposes.
 *
 * PSGC codes follow the Philippine Statistics Authority format.
 * Each barangay has a 9-digit code: 2-digit province + 2-digit city + 2-digit barangay
 */

import { Barangay } from './types';

export const BARANGAYS: Barangay[] = [
  // ═══════════════════════════════════════════════════════════════
  // NCR — City of Manila
  // ═══════════════════════════════════════════════════════════════
  { code: '133901001', name: 'Ermita', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901002', name: 'Intramuros', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901003', name: 'Malate', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901004', name: 'Paco', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901005', name: 'Pandacan', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901006', name: 'Port Area', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901007', name: 'Quiapo', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901008', name: 'Sampaloc', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901009', name: 'San Andres', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901010', name: 'San Miguel', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901011', name: 'San Nicolas', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901012', name: 'Santa Ana', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901013', name: 'Santa Cruz', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901014', name: 'Santa Mesa', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '133901015', name: 'Tondo', cityCode: '133900', provinceCode: 'NCR', regionCode: 'NCR' },

  // ═══════════════════════════════════════════════════════════════
  // NCR — Quezon City
  // ═══════════════════════════════════════════════════════════════
  { code: '137401001', name: 'Bagong Pag-asa', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401002', name: 'Batasan Hills', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401003', name: ' Commonwealth', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401004', name: 'Diliman', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401005', name: 'Fairview', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401006', name: 'Holy Spirit', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401007', name: 'Kamuning', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401008', name: 'Loyola Heights', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401009', name: 'New Manila', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401010', name: 'Novaliches', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401011', name: 'Project 6', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401012', name: 'Quezon City Proper', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401013', name: 'Sacred Heart', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401014', name: 'San Francisco del Monte', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401015', name: 'Tandang Sora', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401016', name: 'Tomas Morato', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401017', name: 'Vasra', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137401018', name: 'West Triangle', cityCode: '137400', provinceCode: 'NCR', regionCode: 'NCR' },

  // ═══════════════════════════════════════════════════════════════
  // NCR — Makati
  // ═══════════════════════════════════════════════════════════════
  { code: '137601001', name: 'Ayala Avenue', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601002', name: 'Bel-Air Village', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601003', name: 'Cembo', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601004', name: 'Comembo', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601005', name: 'Dasmarinas Village', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601006', name: 'Forbes Park', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601007', name: 'Guadalupe', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601008', name: 'Kasilawan', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601009', name: 'Legazpi Village', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601010', name: 'Olympia', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601011', name: 'Pembo', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601012', name: 'Pinagkaisahan', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601013', name: 'Poblacion', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601014', name: 'Rizal', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601015', name: 'Rockwell Center', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601016', name: 'Salcedo Village', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601017', name: 'San Isidro', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601018', name: 'San Lorenzo Village', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601019', name: 'Singkamas', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601020', name: 'Urdaneta', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },

  // ═══════════════════════════════════════════════════════════════
  // NCR — Pasig
  // ═══════════════════════════════════════════════════════════════
  { code: '137501001', name: 'Bagong Ilog', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501002', name: 'Brgy. San Antonio', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501003', name: 'Brgy. San Joaquin', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501004', name: 'Brgy. San Miguel', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501005', name: 'Caniogan', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501006', name: 'Kapitolyo', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501007', name: 'Manggahan', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501008', name: 'Ortigas Center', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501009', name: 'Rosario', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501010', name: 'Sagad', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501011', name: 'Santa Lucia', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501012', name: 'Ugong', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },

  // ═══════════════════════════════════════════════════════════════
  // NCR — Taguig
  // ═══════════════════════════════════════════════════════════════
  { code: '137601001', name: 'Bambang', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601002', name: 'Bagumbayan', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601003', name: 'Bicutan', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601004', name: 'Fort Bonifacio', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601005', name: 'Hagonoy', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601006', name: 'Ligid-Tipas', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601007', name: 'McKinley Hill', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601008', name: 'Nichols', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601009', name: 'Pateros', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601010', name: 'Pinagsama', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601011', name: 'San Miguel', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601012', name: 'Tanyag', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601013', name: 'Tuktukan', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601014', name: 'Ususan', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601015', name: 'Wack-Wack', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },

  // ═══════════════════════════════════════════════════════════════
  // NCR — Parañaque
  // ═══════════════════════════════════════════════════════════════
  { code: '137601001', name: 'Baclaran', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601002', name: 'BF Homes', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601003', name: 'Don Galo', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601004', name: 'La Huerta', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601005', name: 'Sun Valley', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601006', name: 'Tambo', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137601007', name: 'Vitalez', cityCode: '137600', provinceCode: 'NCR', regionCode: 'NCR' },

  // ═══════════════════════════════════════════════════════════════
  // NCR — Caloocan
  // ═══════════════════════════════════════════════════════════════
  { code: '137501001', name: 'Bagong Barrio', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501002', name: 'Camarin', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501003', name: 'Grace Park', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501004', name: 'Maypajo', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501005', name: 'Sangandaan', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },
  { code: '137501006', name: 'Tala', cityCode: '137500', provinceCode: 'NCR', regionCode: 'NCR' },

  // ═══════════════════════════════════════════════════════════════
  // Region I — Laoag City, Ilocos Norte
  // ═══════════════════════════════════════════════════════════════
  { code: '012801001', name: 'San Pedro', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801002', name: 'Talingaan', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801003', name: 'Nangalisan', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801004', name: 'Poblacion', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801005', name: 'San Mateo', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801006', name: 'Zamboanga', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801007', name: 'Brgy. 1', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801008', name: 'Brgy. 2', cityCode: '012801', provinceCode: '0128', regionCode: '01' },
  { code: '012801009', name: 'Brgy. 3', cityCode: '012801', provinceCode: '0128', regionCode: '01' },

  // ═══════════════════════════════════════════════════════════════
  // Region I — Vigan City, Ilocos Sur
  // ═══════════════════════════════════════════════════════════════
  { code: '012901001', name: 'Brgy. I (Poblacion)', cityCode: '012901', provinceCode: '0129', regionCode: '01' },
  { code: '012901002', name: 'Brgy. II (Poblacion)', cityCode: '012901', provinceCode: '0129', regionCode: '01' },
  { code: '012901003', name: 'Tamag', cityCode: '012901', provinceCode: '0129', regionCode: '01' },
  { code: '012901004', name: 'Vigan Proper', cityCode: '012901', provinceCode: '0129', regionCode: '01' },
  { code: '012901005', name: 'Crisologo', cityCode: '012901', provinceCode: '0129', regionCode: '01' },

  // ═══════════════════════════════════════════════════════════════
  // Region I — Dagupan City, Pangasinan
  // ═══════════════════════════════════════════════════════════════
  { code: '015501001', name: 'Brgy. 1', cityCode: '015501', provinceCode: '0155', regionCode: '01' },
  { code: '015501002', name: 'Brgy. 2', cityCode: '015501', provinceCode: '0155', regionCode: '01' },
  { code: '015501003', name: 'Poblacion', cityCode: '015501', provinceCode: '0155', regionCode: '01' },
  { code: '015501004', name: 'Lucao', cityCode: '015501', provinceCode: '0155', regionCode: '01' },
  { code: '015501005', name: 'Caranglaan', cityCode: '015501', provinceCode: '0155', regionCode: '01' },
  { code: '015501006', name: 'Manguinawa', cityCode: '015501', provinceCode: '0155', regionCode: '01' },

  // ═══════════════════════════════════════════════════════════════
  // Region II — Tuguegarao City, Cagayan
  // ═══════════════════════════════════════════════════════════════
  { code: '021501001', name: 'Bagay', cityCode: '021501', provinceCode: '0215', regionCode: '02' },
  { code: '021501002', name: 'Centro (Poblacion)', cityCode: '021501', provinceCode: '0215', regionCode: '02' },
  { code: '021501003', name: 'Laruac', cityCode: '021501', provinceCode: '0215', regionCode: '02' },
  { code: '021501004', name: 'Pallua', cityCode: '021501', provinceCode: '0215', regionCode: '02' },
  { code: '021501005', name: 'San Gabriel', cityCode: '021501', provinceCode: '0215', regionCode: '02' },
  { code: '021501006', name: 'Ugac Norte', cityCode: '021501', provinceCode: '0215', regionCode: '02' },

  // ═══════════════════════════════════════════════════════════════
  // Region III — Angeles City, Pampanga
  // ═══════════════════════════════════════════════════════════════
  { code: '035402001', name: 'Balibago', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402002', name: 'Clarks View', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402003', name: 'Circumferential Road', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402004', name: 'Dau', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402005', name: 'Lourdes North West', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402006', name: 'Malabañas', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402007', name: 'Pulung Maragul', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402008', name: 'Sapalibutad', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402009', name: 'Sapang Biabas', cityCode: '035402', provinceCode: '0354', regionCode: '03' },
  { code: '035402010', name: 'Tabun', cityCode: '035402', provinceCode: '0354', regionCode: '03' },

  // ═══════════════════════════════════════════════════════════════
  // Region III — San Fernando City, Pampanga
  // ═══════════════════════════════════════════════════════════════
  { code: '035401001', name: 'Alasas', cityCode: '035401', provinceCode: '0354', regionCode: '03' },
  { code: '035401002', name: 'Cabalantian', cityCode: '035401', provinceCode: '0354', regionCode: '03' },
  { code: '035401003', name: 'Dolores', cityCode: '035401', provinceCode: '0354', regionCode: '03' },
  { code: '035401004', name: 'Santo Niño', cityCode: '035401', provinceCode: '0354', regionCode: '03' },
  { code: '035401005', name: 'Sta. Teresita', cityCode: '035401', provinceCode: '0354', regionCode: '03' },

  // ═══════════════════════════════════════════════════════════════
  // Region III — Cabanatuan City, Nueva Ecija
  // ═══════════════════════════════════════════════════════════════
  { code: '034901001', name: 'Aduas', cityCode: '034901', provinceCode: '0349', regionCode: '03' },
  { code: '034901002', name: 'Barreras', cityCode: '034901', provinceCode: '0349', regionCode: '03' },
  { code: '034901003', name: 'H. Concepcion', cityCode: '034901', provinceCode: '0349', regionCode: '03' },
  { code: '034901004', name: 'L. Santos', cityCode: '034901', provinceCode: '0349', regionCode: '03' },
  { code: '034901005', name: 'Magsaysay', cityCode: '034901', provinceCode: '0349', regionCode: '03' },
  { code: '034901006', name: 'San Juan', cityCode: '034901', provinceCode: '0349', regionCode: '03' },
  { code: '034901007', name: 'Zulueta', cityCode: '034901', provinceCode: '0349', regionCode: '03' },

  // ═══════════════════════════════════════════════════════════════
  // Region IV-A — Dasmariñas City, Cavite
  // ═══════════════════════════════════════════════════════════════
  { code: '042102001', name: 'Arnaldo Highway', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102002', name: 'Baatunas', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102003', name: 'Burol', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102004', name: 'Dasmariñas Village', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102005', name: 'Governor Ferrer', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102006', name: 'Langkaan', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102007', name: 'Paliparan', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102008', name: 'San Agustin', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102009', name: 'Salawag', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },
  { code: '042102010', name: 'Zone I', cityCode: '042102', provinceCode: '0421', regionCode: '04A' },

  // ═══════════════════════════════════════════════════════════════
  // Region IV-A — Imus City, Cavite
  // ═══════════════════════════════════════════════════════════════
  { code: '042104001', name: 'Alapan I-A', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104002', name: 'Alapan I-B', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104003', name: 'Anabu I', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104004', name: 'Bucandala I', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104005', name: 'Buhay Na Tubig', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104006', name: 'Carsadang Bago', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104007', name: 'Kaysuyo', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104008', name: 'Palico I', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104009', name: 'Poblacion I', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },
  { code: '042104010', name: 'Tanzang Luma', cityCode: '042104', provinceCode: '0421', regionCode: '04A' },

  // ═══════════════════════════════════════════════════════════════
  // Region IV-A — Calamba City, Laguna
  // ═══════════════════════════════════════════════════════════════
  { code: '043402001', name: 'Brgy. 1', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402002', name: 'Brgy. 2', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402003', name: 'Brgy. 3', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402004', name: 'Canlubang', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402005', name: 'Makiling', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402006', name: 'Munting Dilao', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402007', name: 'Puting Kahoy', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402008', name: 'Real', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402009', name: 'Riskpool', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },
  { code: '043402010', name: 'San Cristobal', cityCode: '043402', provinceCode: '0434', regionCode: '04A' },

  // ═══════════════════════════════════════════════════════════════
  // Region IV-A — Antipolo City, Rizal
  // ═══════════════════════════════════════════════════════════════
  { code: '045801001', name: 'Bago Bantay', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801002', name: 'Bagong Nayon', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801003', name: 'Beverly Hills', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801004', name: 'Cupang', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801005', name: 'Dalig', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801006', name: 'Dela Paz', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801007', name: 'Flores', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801008', name: 'Mayamot', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801009', name: 'San Isidro', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },
  { code: '045801010', name: 'San Roque', cityCode: '045801', provinceCode: '0458', regionCode: '04A' },

  // ═══════════════════════════════════════════════════════════════
  // Region IV-B — Puerto Princesa City, Palawan
  // ═══════════════════════════════════════════════════════════════
  { code: '045901001', name: 'Barangay Bangkal', cityCode: '045901', provinceCode: '0459', regionCode: '04B' },
  { code: '045901002', name: 'Barangay Cabayugan', cityCode: '045901', provinceCode: '0459', regionCode: '04B' },
  { code: '045901003', name: 'Barangay Irawan', cityCode: '045901', provinceCode: '0459', regionCode: '04B' },
  { code: '045901004', name: 'Barangay Sicsican', cityCode: '045901', provinceCode: '0459', regionCode: '04B' },
  { code: '045901005', name: 'Barangay Tagabinet', cityCode: '045901', provinceCode: '0459', regionCode: '04B' },
  { code: '045901006', name: 'Poblacion', cityCode: '045901', provinceCode: '0459', regionCode: '04B' },
  { code: '045901007', name: 'San Pedro', cityCode: '045901', provinceCode: '0459', regionCode: '04B' },

  // ═══════════════════════════════════════════════════════════════
  // Region V — Legazpi City, Albay
  // ═══════════════════════════════════════════════════════════════
  { code: '050501001', name: 'Barangay 1', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501002', name: 'Barangay 2', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501003', name: 'Barangay 3', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501004', name: 'Barangay 4', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501005', name: 'Barangay 5', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501006', name: 'Barangay 6', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501007', name: 'Rawis', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501008', name: 'Taysan', cityCode: '050501', provinceCode: '0505', regionCode: '05' },
  { code: '050501009', name: 'Uson', cityCode: '050501', provinceCode: '0505', regionCode: '05' },

  // ═══════════════════════════════════════════════════════════════
  // Region VI — Iloilo City, Iloilo
  // ═══════════════════════════════════════════════════════════════
  { code: '063701001', name: 'Barangay 1', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701002', name: 'Barangay 2', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701003', name: 'Barangay 3', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701004', name: 'Arevalo', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701005', name: 'City Proper', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701006', name: 'Jaro', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701007', name: 'Lapuz', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701008', name: 'Mandurriao', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701009', name: 'Molo', cityCode: '063701', provinceCode: '0637', regionCode: '06' },
  { code: '063701010', name: 'Villa Arevalo', cityCode: '063701', provinceCode: '0637', regionCode: '06' },

  // ═══════════════════════════════════════════════════════════════
  // Region VI — Bacolod City, Negros Occidental
  // ═══════════════════════════════════════════════════════════════
  { code: '064501001', name: 'Alijis', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501002', name: 'Barangay 1', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501003', name: 'Barangay 2', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501004', name: 'Barangay 3', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501005', name: 'Bata', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501006', name: 'Handumanan', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501007', name: 'Mandalagan', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501008', name: 'Tangub', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501009', name: 'Talisay', cityCode: '064501', provinceCode: '0645', regionCode: '06' },
  { code: '064501010', name: 'Vista Alegre', cityCode: '064501', provinceCode: '0645', regionCode: '06' },

  // ═══════════════════════════════════════════════════════════════
  // Region VII — Cebu City, Cebu
  // ═══════════════════════════════════════════════════════════════
  { code: '072201001', name: 'Bacayan', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201002', name: 'Basak San Nicolas', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201003', name: 'Capitol Site', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201004', name: 'Guadalupe', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201005', name: 'Labangon', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201006', name: 'Lahug', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201007', name: 'Mabolo', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201008', name: 'Nasipit', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201009', name: 'Pardo', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201010', name: 'Sambag I', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201011', name: 'Sambag II', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201012', name: 'San Nicolas', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201013', name: 'Talamban', cityCode: '072201', provinceCode: '0722', regionCode: '07' },
  { code: '072201014', name: 'Tisa', cityCode: '072201', provinceCode: '0722', regionCode: '07' },

  // ═══════════════════════════════════════════════════════════════
  // Region VII — Lapu-Lapu City, Cebu
  // ═══════════════════════════════════════════════════════════════
  { code: '072202001', name: 'Agus', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202002', name: 'Basak', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202003', name: 'Canjulao', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202004', name: 'Cordova', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202005', name: 'Dapdap', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202006', name: 'Ibo', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202007', name: 'Maribago', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202008', name: 'Marigondon', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202009', name: 'Pajo', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202010', name: 'Pusok', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202011', name: 'Talima', cityCode: '072202', provinceCode: '0722', regionCode: '07' },
  { code: '072202012', name: 'Tungasan', cityCode: '072202', provinceCode: '0722', regionCode: '07' },

  // ═══════════════════════════════════════════════════════════════
  // Region VII — Mandaue City, Cebu
  // ═══════════════════════════════════════════════════════════════
  { code: '072203001', name: 'Alang-alang', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203002', name: 'Bakilid', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203003', name: 'Banilad', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203004', name: 'Canduman', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203005', name: 'Casili', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203006', name: 'Centro', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203007', name: 'Guizo', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203008', name: 'Labogon', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203009', name: 'Looc', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203010', name: 'Pakna-an', cityCode: '072203', provinceCode: '0722', regionCode: '07' },
  { code: '072203011', name: 'Tipolo', cityCode: '072203', provinceCode: '0722', regionCode: '07' },

  // ═══════════════════════════════════════════════════════════════
  // Region VII — Dumaguete City, Negros Oriental
  // ═══════════════════════════════════════════════════════════════
  { code: '074601001', name: 'Bantayan', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601002', name: 'Banilad', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601003', name: 'Calindagan', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601004', name: 'Cantil', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601005', name: 'Cadawinonan', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601006', name: 'Daro', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601007', name: 'Looc', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601008', name: 'Poblacion', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601009', name: 'Piapi', cityCode: '074601', provinceCode: '0746', regionCode: '07' },
  { code: '074601010', name: 'Talay', cityCode: '074601', provinceCode: '0746', regionCode: '07' },

  // ═══════════════════════════════════════════════════════════════
  // Region VIII — Tacloban City, Leyte
  // ═══════════════════════════════════════════════════════════════
  { code: '083701001', name: 'Barangay 1', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701002', name: 'Barangay 2', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701003', name: 'Barangay 3', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701004', name: 'Barangay 4', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701005', name: 'Barangay 5', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701006', name: 'Barangay 6', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701007', name: 'Barangay 7', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701008', name: 'Barangay 8', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701009', name: 'Barangay 9', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701010', name: 'San Jose', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701011', name: 'Magsaysay', cityCode: '083701', provinceCode: '0837', regionCode: '08' },
  { code: '083701012', name: 'Sagkahan', cityCode: '083701', provinceCode: '0837', regionCode: '08' },

  // ═══════════════════════════════════════════════════════════════
  // Region IX — Zamboanga City
  // ═══════════════════════════════════════════════════════════════
  { code: '097901001', name: 'Arena Blanco', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901002', name: 'Boalan', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901003', name: 'Calarian', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901004', name: 'Calarayan', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901005', name: 'Guiwan', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901006', name: 'La Paz', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901007', name: 'Lunzuran', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901008', name: 'Santa Maria', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901009', name: 'Tetuan', cityCode: '097901', provinceCode: null, regionCode: '09' },
  { code: '097901010', name: 'Tumaga', cityCode: '097901', provinceCode: null, regionCode: '09' },

  // ═══════════════════════════════════════════════════════════════
  // Region X — Cagayan de Oro City, Misamis Oriental
  // ═══════════════════════════════════════════════════════════════
  { code: '104301001', name: 'Agusan', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301002', name: 'Bulua', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301003', name: 'Carmen', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301004', name: 'Cugman', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301005', name: 'F.S. Catanico', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301006', name: 'Gusa', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301007', name: 'Kauswagan', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301008', name: 'Lapasan', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301009', name: 'Lumbia', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301010', name: 'Macasandig', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301011', name: 'Nazareth', cityCode: '104301', provinceCode: '1043', regionCode: '10' },
  { code: '104301012', name: 'Puntod', cityCode: '104301', provinceCode: '1043', regionCode: '10' },

  // ═══════════════════════════════════════════════════════════════
  // Region XI — Davao City
  // ═══════════════════════════════════════════════════════════════
  { code: '112401001', name: 'Agdao', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401002', name: 'Bago Aplaya', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401003', name: 'Bago Gallera', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401004', name: 'Buhangin', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401005', name: 'Bunawan', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401006', name: 'Calinan', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401007', name: 'Catalunan Grande', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401008', name: 'Catalunan Pequeño', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401009', name: 'Cabantian', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401010', name: 'Hizon', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401011', name: 'Lanang', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401012', name: 'Matina', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401013', name: 'Mintal', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401014', name: 'Poblacion', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401015', name: 'Talomo', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401016', name: 'Toril', cityCode: '112401', provinceCode: null, regionCode: '11' },
  { code: '112401017', name: 'Tugbok', cityCode: '112401', provinceCode: null, regionCode: '11' },

  // ═══════════════════════════════════════════════════════════════
  // Region XI — Tagum City, Davao del Norte
  // ═══════════════════════════════════════════════════════════════
  { code: '112401001', name: 'Agusan Pequeño', cityCode: '112401', provinceCode: '1124', regionCode: '11' },
  { code: '112401002', name: 'Bincungan', cityCode: '112401', provinceCode: '1124', regionCode: '11' },
  { code: '112401003', name: 'Busaon', cityCode: '112401', provinceCode: '1124', regionCode: '11' },
  { code: '112401004', name: 'Caraig', cityCode: '112401', provinceCode: '1124', regionCode: '11' },
  { code: '112401005', name: 'Mankilam', cityCode: '112401', provinceCode: '1124', regionCode: '11' },
  { code: '112401006', name: 'Magdum', cityCode: '112401', provinceCode: '1124', regionCode: '11' },
  { code: '112401007', name: 'San Miguel', cityCode: '112401', provinceCode: '1124', regionCode: '11' },
  { code: '112401008', name: 'Visayan Village', cityCode: '112401', provinceCode: '1124', regionCode: '11' },

  // ═══════════════════════════════════════════════════════════════
  // Region XII — Koronadal City, South Cotabato
  // ═══════════════════════════════════════════════════════════════
  { code: '126301001', name: 'Barangay 1', cityCode: '126301', provinceCode: '1263', regionCode: '12' },
  { code: '126301002', name: 'Barangay 2', cityCode: '126301', provinceCode: '1263', regionCode: '12' },
  { code: '126301003', name: 'Barangay 3', cityCode: '126301', provinceCode: '1263', regionCode: '12' },
  { code: '126301004', name: 'Avanceña', cityCode: '126301', provinceCode: '1263', regionCode: '12' },
  { code: '126301005', name: 'Concepcion', cityCode: '126301', provinceCode: '1263', regionCode: '12' },
  { code: '126301006', name: 'Mabini', cityCode: '126301', provinceCode: '1263', regionCode: '12' },
  { code: '126301007', name: 'San Isidro', cityCode: '126301', provinceCode: '1263', regionCode: '12' },

  // ═══════════════════════════════════════════════════════════════
  // Region XIII — Butuan City, Agusan del Norte
  // ═══════════════════════════════════════════════════════════════
  { code: '130101001', name: 'Agusan Pequeño', cityCode: '130101', provinceCode: '1301', regionCode: '13' },
  { code: '130101002', name: 'Bancasi', cityCode: '130101', provinceCode: '1301', regionCode: '13' },
  { code: '130101003', name: 'Butuan proper', cityCode: '130101', provinceCode: '1301', regionCode: '13' },
  { code: '130101004', name: 'Baha', cityCode: '130101', provinceCode: '1301', regionCode: '13' },
  { code: '130101005', name: 'Dagohoy', cityCode: '130101', provinceCode: '1301', regionCode: '13' },
  { code: '130101006', name: 'Libertad', cityCode: '130101', provinceCode: '1301', regionCode: '13' },
  { code: '130101007', name: 'San Ignacio', cityCode: '130101', provinceCode: '1301', regionCode: '13' },
  { code: '130101008', name: 'Taligaman', cityCode: '130101', provinceCode: '1301', regionCode: '13' },

  // ═══════════════════════════════════════════════════════════════
  // Region XIII — Surigao City, Surigao del Norte
  // ═══════════════════════════════════════════════════════════════
  { code: '138101001', name: 'Alang-alang', cityCode: '138101', provinceCode: '1381', regionCode: '13' },
  { code: '138101002', name: 'Ampayon', cityCode: '138101', provinceCode: '1381', regionCode: '13' },
  { code: '138101003', name: 'Cagniag', cityCode: '138101', provinceCode: '1381', regionCode: '13' },
  { code: '138101004', name: 'Capalayan', cityCode: '138101', provinceCode: '1381', regionCode: '13' },
  { code: '138101005', name: 'Cabarasan', cityCode: '138101', provinceCode: '1381', regionCode: '13' },
  { code: '138101006', name: 'Canlanipa', cityCode: '138101', provinceCode: '1381', regionCode: '13' },
  { code: '138101007', name: 'Luna', cityCode: '138101', provinceCode: '1381', regionCode: '13' },
  { code: '138101008', name: 'Washington', cityCode: '138101', provinceCode: '1381', regionCode: '13' },

  // ═══════════════════════════════════════════════════════════════
  // BARMM — Marawi City, Lanao del Sur
  // ═══════════════════════════════════════════════════════════════
  { code: '153601001', name: 'Angoyao', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },
  { code: '153601002', name: 'Bangon', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },
  { code: '153601003', name: 'Boganga', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },
  { code: '153601004', name: 'Datu Naga', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },
  { code: '153601005', name: 'East Badak', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },
  { code: '153601006', name: 'Marawi Proper', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },
  { code: '153601007', name: 'Poblacion', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },
  { code: '153601008', name: 'Sabonan', cityCode: '153601', provinceCode: '1536', regionCode: 'BARMM' },

  // ═══════════════════════════════════════════════════════════════
  // CAR — Baguio City, Benguet
  // ═══════════════════════════════════════════════════════════════
  { code: '141101001', name: 'Asin Road', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101002', name: 'Ambuklao', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101003', name: 'Atok Trail', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101004', name: 'Bagong Lipunan', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101005', name: 'Camp 7', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101006', name: 'Camp 8', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101007', name: 'Dagsian', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101008', name: 'Greenwater Village', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101009', name: 'Gibraltar', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101010', name: 'Guisad Central', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101011', name: 'Happy Hallow', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101012', name: 'Irisan', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101013', name: 'Kias', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101014', name: 'Keny Hill', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101015', name: 'La Trinidad', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101016', name: 'Lualhati', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101017', name: 'Magsaysay', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101018', name: 'San Rafael Village', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101019', name: 'Scout Barrio', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
  { code: '141101020', name: 'T. Alonzo', cityCode: '141101', provinceCode: '1411', regionCode: 'CAR' },
];
