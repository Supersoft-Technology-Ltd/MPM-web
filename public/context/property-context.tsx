import React, {
  ReactNode,
  useState,
  useContext,
  createContext,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Property,
  Tenancy,
  TenancyInfo,
  oneTenancyDetails,
} from "@/redux/reducers/properties/interface";
import { UnitData } from "@/redux/reducers/unit/interface";

type propertytype = {
  property: Property;
  setProperty: Dispatch<SetStateAction<Property>>;
  oneUnit: UnitData;
  setOneUnit: Dispatch<SetStateAction<UnitData>>;
  oneTenancy: oneTenancyDetails;
  setOneTenancy: Dispatch<SetStateAction<oneTenancyDetails>>;
};
const initialPropertyState: Property = {
  id: "",
  propertyName: "",
  propertyLocation: "",
  propertyState: "",
  userId: "",
  occupationalStatus: "",
  propertyManagerId: "",
  created_at: "",
  managed: true || false,
  amanagedProperty: true || false,
};
const initialUnitState: UnitData = {
  id: "",
  occupyingStatus: false,
  otherCharges: null || 0,
  unitAgreementCharge: null || 0,
  unitCommissionCharge: null || 0,
  unitLegalFee: null || 0,
  unitName: "",
  unitRent: 0,
  unitServiceCharge: 0,
  unitOtherCharges: 0,
  unitType: {
    category: "",
    description: "",
    id: 1,
  },
};
const initialTenancyState: oneTenancyDetails = {
  landlordName: "",
  nextRentAmount: 0,
  tenancyLocation: "",
  nextRentDate: "",
  tenancyDuration: 0,
};
const PropertyContext = createContext<propertytype>({
  property: initialPropertyState,
  setProperty: () => null,
  oneUnit: initialUnitState,
  setOneUnit: () => null,
  oneTenancy: initialTenancyState,
  setOneTenancy: () => null,
});

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [property, setProperty] = useState<Property>(initialPropertyState);
  const [oneUnit, setOneUnit] = useState<UnitData>(initialUnitState);
  const [oneTenancy, setOneTenancy] =
    useState<oneTenancyDetails>(initialTenancyState);
  const value = useMemo(
    () => ({
      property,
      setProperty,
      oneUnit,
      setOneUnit,
      oneTenancy,
      setOneTenancy,
    }),
    [property, setProperty, oneUnit, setOneUnit, oneTenancy, setOneTenancy]
  );

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => useContext(PropertyContext);
