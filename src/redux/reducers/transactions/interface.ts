export interface MessageItem {
    id: string;
    userId: string;
    transactionId: string;
    transactionMonth: string;
    transactionDay: string;
    transactionYear: string;
    historyTitle: string;
    historyMessage: string;
    roleStatus: string;
    successful: boolean;
}

export interface ResponseData {
    hasError: boolean;
    errorType: string | null;
    message: MessageItem[];
}

export interface UserWallet {
    userId: string;
    walletBalance: number;
    totalInflow: number;
    totalOutflow: number;
    inflowHistory: number[];
    outflowHistory: number[];
}
export interface BankDetailsResponse {
    hasError: boolean;
    errorType: null | string;
    message: {
      id: number;
      userId: string;
      accountNumber: string;
      accountName: string;
      financialInstitution: string;
      paystackRecipientCode: string;
      paystackTransferId: string;
      createdAt: string;
    };
  }