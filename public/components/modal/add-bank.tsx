import { useRouter } from "next/navigation";
import { Lora } from "../../fonts";
import { NigerisStates } from "../../hooks/nigeria-states";
import { Button } from "../button";
import { Inputs } from "../input";
import { StatusSelect } from "../select";
import { SuccessModal } from "./successmodal";
import { useAppSelector, useAppThunkDispatch } from "@/redux/store";
import { transactionReducer } from "@/redux/reducers/transactions";
import { useEffect, useState } from "react";
import {
  createBankDetails,
  getAccountName,
  getAllBanks,
  getUserBankDetails,
  updateBankDetails,
} from "@/redux/reducers/transactions/thunk-action";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useSelectCurrentUser } from "@/redux/reducers/auth";

export const AddBankDetails = () => {
  const dispatch = useAppThunkDispatch();
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [selectBank, setSelectBank] = useState("");
  const [modalTitle, setModalTitle] = useState("Enter Account Details");
  const [buttonTitle, setButtonTitle] = useState("Submit");

  const user = useAppSelector(useSelectCurrentUser);
  const router = useRouter();

  const { allBanks, data, allUserBankDetails } = useAppSelector(
    ({ transactionReducer }) => transactionReducer
  );

  useEffect(() => {
    dispatch(getAllBanks());
  }, []);

  const getUserAccountName = () => {
    try {
      const selectedBank = allBanks.find(
        (bank) => bank.bankCode === selectBank
      );
      if (accountNumber.length === 10 && selectedBank) {
        dispatch(
          getAccountName({
            accountNumber: accountNumber,
            bankCode: selectedBank.bankCode,
          })
        ).then((res) => {
          if (res.meta.requestStatus === "fulfilled") {
          } else {
            setAccountName("");
            toast.error(res.payload.response.data.message);
          }
        });
      }
    } catch (error: any) {}
  };

  useEffect(() => {
    setAccountName("");
    setAccountNumber("");
  }, []);

  useEffect(() => {
    if (accountNumber.length === 10 && selectBank) {
      getUserAccountName();
    }
  }, [accountNumber, selectBank]);

  useEffect(() => {
    if (data && data.account_name) {
      setAccountName(data.account_name);
    }
    return () => setAccountName("");
  }, [data]);

  const handleSubmit = async () => {
    try {
      const selectedBank = allBanks.find(
        (bank) => bank.bankCode === selectBank
      );

      if (buttonTitle === "Enter Account Details") {
        if (selectedBank) {
          const response = await dispatch(
            createBankDetails({
              accountNumber,
              accountName,
              financialInstitution: selectedBank.bankName,
              userId: user?.id,
            })
          );
          router.push("/dashboard");
        } else {
          console.log("Selected bank not found.");
        }
      } else {
        if (user?.bankAvailable) {
          if (selectedBank) {
            const response = await dispatch(
              updateBankDetails({
                accountNumber,
                accountName,
                financialInstitution: selectedBank.bankName,
                userId: user?.id,
              })

            );
            router.push("/dashboard");
            toast.success("Account details updated successfully")
          } else {
            console.log("Selected bank not found.");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user?.id) {
      dispatch(getUserBankDetails(user.id));
    }
  }, [user]);

  useEffect(() => {
    if (buttonTitle === 'Update') {
      setAccountName(allUserBankDetails.message?.accountName || "");
      setAccountNumber(allUserBankDetails.message?.accountNumber || "");
      setSelectBank(allUserBankDetails.message?.financialInstitution || "");

      if (user?.bankAvailable) {
        setModalTitle("Edit Bank Details");
        setButtonTitle("Update");
      } else {
        setModalTitle("Enter Account Details");
        setButtonTitle("Submit");
      }
    }
  }, [allUserBankDetails, user]);
  console.log(selectBank, "all");
  return (
    <SuccessModal>
      <h1
        className={`${Lora.className} text-[22px] text-textBlack2 font-normal `}
      >
        {modalTitle}
      </h1>
      <div className="mt-4 w-[90%] mx-auto pb-4">
        <StatusSelect
          placeholder="Select Bank"
          options={allBanks.map((bank) => ({
            label: bank.bankName,
            value: bank.bankCode,
          }))}
          value={allBanks.find((ele) => ele.bankName === selectBank)?.bankCode}
          onChange={(e) => setSelectBank(e)}
          onBlur={() => null}
        />

        <div className="mt-4 mb-4">
          <Inputs
            name="accountNumber"
            onChange={(e) => setAccountNumber(e.target.value)}
            onBlur={(e) => setAccountNumber(e.target.value)}
            value={accountNumber}
            placeholder="Account Number"
            type="text"
          />
        </div>
        <Inputs
          name="accountName"
          onChange={(e: any) => setAccountName(e.target.value)}
          onBlur={(e: any) => setAccountName(e.target.validationSchema)}
          value={accountName}
          placeholder="Account Name"
          type="text"
          disabled={true}
        />
        <div className="mt-6">
          <Button
            variant="submit"
            title={buttonTitle}
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </SuccessModal>
  );
};
