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
  message: Property[];
}

export interface PropertyMessage {
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

interface UnitType {
  id: number;
  description: string;
  category: string;
}

export interface Unit {
  id: string;
  unitType: UnitType;
  unitName: string;
  unitRent: number;
  unitServiceCharge: number;
  unitLegalFee: number;
  unitAgreementCharge: number;
  unitCommissionCharge: number;
  unitOtherCharges: number;
  propertyId: string;
  occupyingStatus: boolean;
}

interface Role {
  id: number;
  name: string;
}

export interface LandlordDetail {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  pushToken: string | null;
  roles: Role[];
  phoneNumber: string;
  nextSubscriptionDueDate: string;
  subscriptionName: string;
  subscriptionLowerBound: number;
  subscriptionUpperBound: number;
  subscribed: boolean;
  subscriptionExpired: boolean;
}

export interface Tenancy {
  id: string;
  tenantId: string;
  unitId: string;
  tenantDuration: string;
  lastPaymentDate: string;
  moveInDate: string;
  nextDueDate: string;
}

export interface TenancyInfo {
  hasError: boolean;
  errorType: string | null;
  message: {
    property_details: PropertyMessage;
    unit: Unit;
    landlord_detail: LandlordDetail;
    tenancy: Tenancy;
  }[];
}

export interface oneTenancyDetails {
  landlordName: string;
  nextRentAmount: number;
  tenancyLocation: string;
  nextRentDate: string;
  tenancyDuration: number;
}
