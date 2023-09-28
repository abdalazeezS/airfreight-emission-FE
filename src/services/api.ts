const API = "http://localhost:3000/dev";

const fetchTrips = async () => {
  return fetch(`${API}/trips`)
    .then(res => res.json())
    .catch(err => console.log(err));
}

const fetchTripsWithQuery = (query: any) => {
  return fetch(`${API}/trips/?${query}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}
const fetchDestinations = async () => {
  return fetch(`${API}/destinations`)
    .then(res => res.json())
    .catch(err => console.log(err));
}

const fetchOrigins = async () => {
  return fetch(`${API}/origins`)
    .then(res => res.json())
    .catch(err => console.log(err));
}

const fetchAirlines = async () => {
  return fetch(`${API}/airlines`)
    .then(res => res.json())
    .catch(err => console.log(err));
}


export { fetchDestinations, fetchTrips, fetchOrigins, fetchAirlines, fetchTripsWithQuery }