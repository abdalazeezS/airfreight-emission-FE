interface ITrip {
  id: number,
  origin: string,
  destination: string,
  airline: string,
  startDate: string,
  endDate: string,
}

interface ISearchCriteria {
  origin: string;
  destination: string;
  airline: string;
  startDate: string;
  endDate: string;
}

export type { ITrip, ISearchCriteria }