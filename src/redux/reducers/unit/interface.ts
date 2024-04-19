export type UnitData = {
    id: string;
    occupyingStatus: boolean;
    otherCharges: number;
    unitAgreementCharge: number;
    unitCommissionCharge:number;
    unitLegalFee: number;
    unitName: string;
    unitRent: number;
    unitServiceCharge: number;
    unitOtherCharges: number;
    unitType: {
      category?: string;
      description?: string;
      id: number | string;
    };
  };
  
  export type TenantDetails = {
    id: string;
    tenantId: string;
    unitId: string;
    tenantDuration: string;
    lastPaymentDate: string;
    moveInDate: string;
  }
  interface Unit {
    id: string;
    unitType: {
        id: number;
        description: string;
        category: string;
    };
    unitName: string;
    unitRent: number;
    unitServiceCharge: number;
    unitLegalFee: number;
    unitAgreementCharge: number;
    unitCommissionCharge: number;
    unitOtherCharges: number;
    propertyId: string;
    unitDeleted: boolean;
    occupyingStatus: boolean;
}

export interface Tenancy {
    id: string;
    tenantId: string;
    unitId: string;
    tenantDuration: string;
    lastPaymentDate: string;
    moveInDate: string;
    nextDueDate: string;
    tenancyDeleted: boolean;
}

export interface Tenant {
    userId: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    pushToken: string;
    roles: {
        id: number;
        name: string;
    }[];
    phoneNumber: string | null;
    nextSubscriptionDueDate: string;
    subscriptionName: string;
    subscriptionLowerBound: number;
    subscriptionUpperBound: number;
    propertyLowerBound: number;
    propertyUpperBound: number;
    subscribed: boolean;
    subscriptionExpired: boolean;
}

export interface Data {
    unit: Unit;
    tenancy: Tenancy;
    tenant: Tenant;
}

export interface ApiResponse {
    hasError: boolean;
    errorType: string | null;
    message: Data;
}
