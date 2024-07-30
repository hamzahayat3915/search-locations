interface MapCenter {
  lat: number;
  lng: number;
}

  export type MeasurementPayloadType = {
    address: String
  };

  export type MeaurementTablePayloadType = {
      _id: string,
      mapCenter: MapCenter,
      placeId: string,
      address: string  
  }

  export interface MeaurementsTableProps {
    meaurements: MeaurementTablePayloadType[];
    totalPages: number;
  }