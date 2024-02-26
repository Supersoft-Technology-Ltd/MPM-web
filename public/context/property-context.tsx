import React, {
  ReactNode,
  useState,
  useContext,
  createContext,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import { Property } from "@/redux/reducers/properties/interface";
import { UnitData } from "@/redux/reducers/unit/interface";

type propertytype = {
  property: Property;
  setProperty: Dispatch<SetStateAction<Property>>;
  oneUnit: UnitData;
  setOneUnit: Dispatch<SetStateAction<UnitData>>;
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
const PropertyContext = createContext<propertytype>({
  property: initialPropertyState,
  setProperty: () => null,
  oneUnit: initialUnitState,
  setOneUnit: () => null,
});

export const PropertyProvider = ({ children }: { children: ReactNode }) => {
  const [property, setProperty,] = useState<Property>(initialPropertyState);
  const [  oneUnit, setOneUnit] = useState<UnitData>(initialUnitState)
  const value = useMemo(
    () => ({
      property,
      setProperty,
      oneUnit, setOneUnit
    }),
    [property, setProperty, oneUnit, setOneUnit]
  );

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => useContext(PropertyContext);
