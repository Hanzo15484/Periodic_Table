export type Element = {
  number: number;
  symbol: string;
  name: string;
  mass: string;
  group: number | null;
  period: number;
  block: string; // A,B,C,D,E,F
  category?: string;
  electronConfig?: string;
  valence?: string;
  yearDiscovered?: string;
  summary?: string;
}
