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
