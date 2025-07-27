export interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  status: string;
}

const locations: Location[] = [
  { id: '1', name: 'Alice', latitude: 37.7749, longitude: -122.4194, status: 'Online' },
  { id: '2', name: 'Bob', latitude: 51.5074, longitude: -0.1278, status: 'Offline' },
];

export default locations;