interface ITrip {
  id: number,
  origin: string,
  destination: string,
  airline: string,
  date: string,
  emission_level: number;
  emission_level_category: string
}

interface ISearchCriteria {
  origin: string;
  destination: string;
  airline: string;
  startDate: string;
  endDate: string;
}

interface IGetTripsResponse {
  data: ITrip[];
  pageSize: number,
  totalRecords: number
}
export type { ITrip, ISearchCriteria, IGetTripsResponse }