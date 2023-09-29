interface ITrip {
  id: number,
  origin: string,
  destination: string,
  airline: string,
  startDate: string,
  endDate: string,
  [key: string]: string | number;
}

export type { ITrip }