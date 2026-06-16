export interface Region {
  code: string;
  name: string;
  provinces: string[];
}

export const REGIONS: Region[] = [
  { code: "NCR", name: "National Capital Region", provinces: ["Metro Manila"] },
  { code: "CAR", name: "Cordillera Administrative Region", provinces: ["Abra","Benguet","Ifugao","Kalinga","Mountain Province"] },
  { code: "I", name: "Region I (Ilocos Region)", provinces: ["Ilocos Norte","Ilocos Sur","La Union","Pangasinan"] },
  { code: "II", name: "Region II (Cagayan Valley)", provinces: ["Batanes","Cagayan","Isabela","Nueva Vizcaya","Quirino"] },
  { code: "III", name: "Region III (Central Luzon)", provinces: ["Aurora","Bataan","Bulacan","Nueva Ecija","Pampanga","Tarlac","Zambales"] },
  { code: "IV-A", name: "Region IV-A (CALABARZON)", provinces: ["Batangas","Cavite","Laguna","Quezon","Rizal"] },
  { code: "IV-B", name: "Region IV-B (MIMAROPA)", provinces: ["Marinduque","Occidental Mindoro","Oriental Mindoro","Palawan","Romblon"] },
  { code: "V", name: "Region V (Bicol Region)", provinces: ["Albay","Camarines Norte","Camarines Sur","Catanduanes","Masbate","Sorsogon"] },
  { code: "VI", name: "Region VI (Western Visayas)", provinces: ["Aklan","Antique","Capiz","Guimaras","Iloilo","Negros Occidental"] },
  { code: "VII", name: "Region VII (Central Visayas)", provinces: ["Bohol","Cebu","Negros Oriental","Siquijor"] },
  { code: "VIII", name: "Region VIII (Eastern Visayas)", provinces: ["Biliran","Eastern Samar","Leyte","Northern Samar","Samar","Southern Leyte"] },
  { code: "IX", name: "Region IX (Zamboanga Peninsula)", provinces: ["Zamboanga del Norte","Zamboanga del Sur","Zamboanga Sibugay"] },
  { code: "X", name: "Region X (Northern Mindanao)", provinces: ["Bukidnon","Camiguin","Lanao del Norte","Misamis Occidental","Misamis Oriental"] },
  { code: "XI", name: "Region XI (Davao Region)", provinces: ["Davao de Oro","Davao del Norte","Davao del Sur","Davao Occidental","Davao Oriental"] },
  { code: "XII", name: "Region XII (SOCCSKSARGEN)", provinces: ["Cotabato","Sarangani","South Cotabato","Sultan Kudarat"] },
  { code: "XIII", name: "Region XIII (Caraga)", provinces: ["Agusan del Norte","Agusan del Sur","Dinagat Islands","Surigao del Norte","Surigao del Sur"] },
  { code: "BARMM", name: "Bangsamoro Autonomous Region in Muslim Mindanao", provinces: ["Basilan","Lanao del Sur","Maguindanao","Sulu","Tawi-Tawi"] },
];

export function getRegionByCode(code: string): Region | undefined {
  return REGIONS.find(r => r.code === code);
}

export function getRegionByName(name: string): Region | undefined {
  return REGIONS.find(r => r.name.toLowerCase().includes(name.toLowerCase()));
}
