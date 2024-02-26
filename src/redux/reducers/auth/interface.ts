export interface CurrentSubscriptionMethodDetails {
    id: number;
    subscriptionMethodName: string;
    subscriptionPrice: number;
    lowerBound: number;
    upperBound: number;
    creationDate: string;
  }
  
 export interface UserData {
    token: string;
    type: string;
    id: string;
    aliasName: string | null;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    roles: string[];
    referralCode: string;
    bankAvailable: boolean;
    currentSubscriptionMethodDetails: CurrentSubscriptionMethodDetails;
    subscriptionDueDate: string;
    accessToken: string;
    tokenType: string;
    completed: boolean;
    verified: boolean;
  }
  