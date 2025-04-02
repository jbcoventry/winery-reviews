export type Review = {
  rating: 1 | 2 | 3 | 4 | 5;
  timestamp: number;
};

export type ReviewDetail = {
  rating: 1 | 2 | 3 | 4 | 5;
  timestamp: number;
  responseFromOwnerText: string | null;
  text: string | null;
};

export type WineryInList = {
  id: string;
  title: string;
  reviews: Review[];
};
export type WineryDetail = {
  id: string;
  title: string;
  street: string;
  city: string;
  postalCode: string;
  website: string;
  phone: string;
  placeId: string;
  openingHours:
    | [
        { day: "Monday"; hours: string },
        { day: "Tuesday"; hours: string },
        { day: "Wednesday"; hours: string },
        { day: "Thursday"; hours: string },
        { day: "Friday"; hours: string },
        { day: "Saturday"; hours: string },
        { day: "Sunday"; hours: string },
      ]
    | []
    | null;
  location: { lat: number; lng: number } | null;
  lastUpdated: string;
  reviews: ReviewDetail[];
};

export type ComparisonTableRow = {
  id: string;
  title: string;
  averageRating: number;
  NumberOfReviews: number;
};

export type queryLastUpdatedType = {
  data: string;
  isLoading: boolean;
  isSuccess: boolean;
};
