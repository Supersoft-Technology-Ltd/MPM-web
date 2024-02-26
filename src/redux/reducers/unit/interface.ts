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