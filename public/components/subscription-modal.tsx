import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Inter, Lora } from "../fonts";
import { formatCurrency } from "../hooks/formatNumber";
import { plans } from "./subscription-plans";
import { useAppThunkDispatch, useAppSelector } from "@/redux/store";
import {
  InitiateSubscriptionPayment,
  getPaymentMthods,
  getSubscriptionPlans,
} from "@/redux/reducers/transactions/thunk-action";
import { Button } from "./button";
import { StatusSelect } from "./select";
import { usePaystackPayment } from "react-paystack";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

type props = {
  setReceipt: Dispatch<SetStateAction<any>>;
  receipt: {
    name: string;
    amount: string;
    transactionID: string;
    referenceID: string;
    dates: string;
  };
  setOpenReceipt: Dispatch<SetStateAction<any>>;
};
export const Subscription = ({
  setOpenReceipt,
  setReceipt,
  receipt,
}: props) => {
  const [active, setActive] = useState(0);
  const user = useAppSelector(useSelectCurrentUser);

  const [selectedPayment, setSelectedPayment] = useState({
    paymentMethod: "",
    planId: "",
  });
  const [config, setConfig] = useState({
    reference: new Date().getTime().toString(),
    email: user?.email,
    amount: 0,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY ?? "",
  });
  const handleActive = (id: number, amount: number) => {
    setActive(id);
  };

  const dispatch = useAppThunkDispatch();
  const { allSubscriptionPlans, allPaymentOptions } = useAppSelector(
    ({ transactionReducer }) => transactionReducer
  );

  useEffect(() => {
    dispatch(getSubscriptionPlans());
    dispatch(getPaymentMthods());
  }, []);
  console.log(allSubscriptionPlans, "subs");

  const options = allPaymentOptions.map(
    (paymentOption: { paymentMethod: string; paymentType: string }) => ({
      label: paymentOption.paymentMethod,
      value: paymentOption.paymentMethod,
    })
  );
  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: string) => {
    console.log(reference);
    setOpenReceipt(true)
  };
  const onClose = () => {
    console.log("closed");
  };
  const subscriptionPayment = () => {
    dispatch(
      InitiateSubscriptionPayment({
        userId: user?.id as any,
        paymentMethod: selectedPayment.paymentMethod,
        subscriptionMethodId: selectedPayment.planId,
      })
    ).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        console.log(res.payload, "paul");

        initializePayment({
          onSuccess,
          onClose,
          config: {
            ...config,
            amount: res.payload.message.amountExpected * 100,
            reference: res.payload.message.referenceId,
          } as any,
        });

        setReceipt({
          name: res.payload.message?.landlordName,
          amount: res.payload.message?.amountExpected,
          transactionID: res.payload.message?.referenceId,
          referenceID: res.payload.message?.referenceId,
          dates: res.payload.message?.invoiceCreationDate,
        });
        setOpenReceipt(false);
      }
    });
  };
  return (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        {[...allSubscriptionPlans]
          ?.sort((a, b) => a.subscriptionPrice - b.subscriptionPrice)
          ?.map((elem, id) => (
            <div
              onClick={() => {
                handleActive(id, elem.subscriptionPrice);
                setSelectedPayment({
                  ...selectedPayment,
                  planId: elem.id,
                });
              }}
              key={id}
              className="border mt-4 border-address rounded-[5px] p-4 flex justify-between items-center"
              style={{
                backgroundColor: active === id ? "#89c4ff" : "transparent",
              }}
            >
              <div>
                <h4 className={`${Inter.className} text-darkText3 text-[16px]`}>
                  {elem.subscriptionMethodName}
                </h4>
                <p className={`${Lora.className} font-light text-[12px]`}>
                  Units
                </p>
                <ul className="list-disc pl-4">
                  <li className={`${Lora.className} font-light text-[14px]`}>
                    {elem.lowerBound} Minimum
                  </li>
                  <li className={`${Lora.className} font-light text-[14px]`}>
                    {elem.upperBound} Maximum
                  </li>
                </ul>
              </div>
              <div>
                <p>₦ {formatCurrency(elem.subscriptionPrice)}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-4">
        <StatusSelect
          placeholder="Select payment option"
          options={options}
          value={""}
          onChange={(e) =>
            setSelectedPayment({
              ...selectedPayment,
              paymentMethod: e,
            })
          }
          onBlur={() => null}
        />
      </div>
      <Button
        title="Continue to Purchase"
        variant="submit"
        onClick={() => subscriptionPayment()}
        disabled={
          !Boolean(selectedPayment.paymentMethod && selectedPayment.planId)
        }
      />
    </div>
   
  );
};
