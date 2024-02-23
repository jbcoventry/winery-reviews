export type Review = {
  rating: 1 | 2 | 3 | 4 | 5;
  timestamp: number;
};

type OpeningHours = {
  days: string;
  hours: string;
};
type Winery = {
  id: number;
  title: string;
  street: string;
  city: string;
  postalCode: string;
  website: string;
  phone: string;
  openingHours: OpeningHours[];
  lastUpdated: string;
  reviews: Review[];
};

export type wineriesAPIResponse = Winery[] | undefined;
