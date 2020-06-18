export interface Company {
  id: number;
  name: string;
  type: string;
  weekStats: {
    monday: number,
    tuesday: number,
    wednesday: number,
    thursday: number,
    friday: number,
    saturday: number,
    sunday: number
  };
  balance: number;
  monthBalance: number;
}
