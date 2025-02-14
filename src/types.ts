export type Review = {
  rating: 1 | 2 | 3 | 4 | 5;
  timestamp: number;
};

export type OpeningHours = {
  day: string;
  hours: string;
};
export type Winery = {
  id: string;
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

export type ComparisonTableRow = {
  id: string;
  title: string;
  averageRating: number;
  NumberOfReviews: number;
};

export type wineriesAPIResponse = Winery[] | undefined;
export type wineriesDetailAPIResponse = Winery | undefined;

export type queryLastUpdatedType = {
  data: string;
  isLoading: boolean;
  isSuccess: boolean;
};
