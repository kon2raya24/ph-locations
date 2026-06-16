/**
 * Philippine Regions (17 as of 2024)
 *
 * Official PSGC codes per Philippine Statistics Authority (PSA).
 * Includes all 16 administrative regions plus BARMM (Bangsamoro).
 */

import { Region } from './types';

export const REGIONS: Region[] = [
  {
    code: 'NCR',
    name: 'National Capital Region',
    shortName: 'NCR',
    provinces: [
      'City of Manila',
      'City of Quezon',
      'City of Makati',
      'City of Pasig',
      'City of Taguig',
      'City of Parañaque',
      'City of Las Piñas',
      'City of Muntinlupa',
      'City of Caloocan',
      'City of Malabon',
      'City of Navotas',
      'City of Valenzuela',
      'City of Marikina',
      'City of Pasay',
      'City of San Juan',
      'City of Mandaluyong',
      'Pateros',
    ],
  },
  {
    code: '01',
    name: 'Region I (Ilocos Region)',
    shortName: 'Ilocos',
    provinces: ['Ilocos Norte', 'Ilocos Sur', 'La Union', 'Pangasinan'],
  },
  {
    code: '02',
    name: 'Region II (Cagayan Valley)',
    shortName: 'Cagayan Valley',
    provinces: ['Batanes', 'Cagayan', 'Isabela', 'Nueva Vizcaya', 'Quirino'],
  },
  {
    code: '03',
    name: 'Region III (Central Luzon)',
    shortName: 'Central Luzon',
    provinces: [
      'Aurora',
      'Bataan',
      'Bulacan',
      'Nueva Ecija',
      'Pampanga',
      'Tarlac',
      'Zambales',
    ],
  },
  {
    code: '04A',
    name: 'Region IV-A (CALABARZON)',
    shortName: 'CALABARZON',
    provinces: ['Batangas', 'Cavite', 'Laguna', 'Quezon', 'Rizal'],
  },
  {
    code: '04B',
    name: 'Region IV-B (MIMAROPA)',
    shortName: 'MIMAROPA',
    provinces: [
      'Marinduque',
      'Occidental Mindoro',
      'Oriental Mindoro',
      'Palawan',
      'Romblon',
    ],
  },
  {
    code: '05',
    name: 'Region V (Bicol Region)',
    shortName: 'Bicol',
    provinces: [
      'Albay',
      'Camarines Norte',
      'Camarines Sur',
      'Catanduanes',
      'Masbate',
      'Sorsogon',
    ],
  },
  {
    code: '06',
    name: 'Region VI (Western Visayas)',
    shortName: 'Western Visayas',
    provinces: [
      'Aklan',
      'Antique',
      'Capiz',
      'Guimaras',
      'Iloilo',
      'Negros Occidental',
    ],
  },
  {
    code: '07',
    name: 'Region VII (Central Visayas)',
    shortName: 'Central Visayas',
    provinces: ['Bohol', 'Cebu', 'Negros Oriental', 'Siquijor'],
  },
  {
    code: '08',
    name: 'Region VIII (Eastern Visayas)',
    shortName: 'Eastern Visayas',
    provinces: [
      'Biliran',
      'Eastern Samar',
      'Leyte',
      'Northern Samar',
      'Samar',
      'Southern Leyte',
    ],
  },
  {
    code: '09',
    name: 'Region IX (Zamboanga Peninsula)',
    shortName: 'Zamboanga Peninsula',
    provinces: [
      'Zamboanga del Norte',
      'Zamboanga del Sur',
      'Zamboanga Sibugay',
    ],
  },
  {
    code: '10',
    name: 'Region X (Northern Mindanao)',
    shortName: 'Northern Mindanao',
    provinces: [
      'Bukidnon',
      'Camiguin',
      'Lanao del Norte',
      'Misamis Occidental',
      'Misamis Oriental',
    ],
  },
  {
    code: '11',
    name: 'Region XI (Davao Region)',
    shortName: 'Davao Region',
    provinces: [
      'Davao de Oro',
      'Davao del Norte',
      'Davao del Sur',
      'Davao Occidental',
      'Davao Oriental',
    ],
  },
  {
    code: '12',
    name: 'Region XII (SOCCSKSARGEN)',
    shortName: 'SOCCSKSARGEN',
    provinces: ['Cotabato', 'Sarangani', 'South Cotabato', 'Sultan Kudarat'],
  },
  {
    code: '13',
    name: 'Region XIII (Caraga)',
    shortName: 'Caraga',
    provinces: [
      'Agusan del Norte',
      'Agusan del Sur',
      'Dinagat Islands',
      'Surigao del Norte',
      'Surigao del Sur',
    ],
  },
  {
    code: 'BARMM',
    name: 'Bangsamoro Autonomous Region in Muslim Mindanao',
    shortName: 'BARMM',
    provinces: [
      'Basilan',
      'Lanao del Sur',
      'Maguindanao',
      'Sulu',
      'Tawi-Tawi',
    ],
  },
  {
    code: 'CAR',
    name: 'Cordillera Administrative Region',
    shortName: 'CAR',
    provinces: [
      'Abra',
      'Apayao',
      'Benguet',
      'Ifugao',
      'Kalinga',
      'Mountain Province',
    ],
  },
];
