export interface Property {
    id: string;
    propertyName: string;
    propertyLocation: string;
    propertyState: string;
    userId: string;
    occupationalStatus: string;
    propertyManagerId: string;
    created_at: string;
    managed: boolean;
    amanagedProperty: boolean;
  }
  
  interface ApiResponse {
    hasError: boolean;
    errorType: string | null;
    message: Property[] ;
  }
  
  interface PropertyMessage {
    id: string;
    propertyName: string;
    propertyLocation: string;
    propertyState: string;
    userId: string;
    occupationalStatus: string;
    propertyManagerId: string;
    created_at: string;
    managed: boolean;
    amanagedProperty: boolean;
}

interface AdditionalDetail {
    numberOfUnoccupiedUnits: number;
    unOccupiedRentChargeSum: number;
    numberOfOccupiedUnits: number;
    numberOfTenants: number;
    expectedRentChargeSum: number;
}

export interface propertyDetails {
    hasError: boolean;
    errorType: string | null;
    message: PropertyMessage;
    additionalDetail: AdditionalDetail;
}
