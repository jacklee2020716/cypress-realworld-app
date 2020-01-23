import { DefaultPrivacyLevel } from "./user";
export enum TransactionStatus {
  pending = "pending",
  incomplete = "incomplete",
  complete = "complete"
}

export enum RequestStatus {
  pending = "pending",
  accepted = "accepted",
  rejected = "rejected"
}

export interface Transaction {
  id: string;
  uuid: string;
  source: string;
  amount: string;
  description: string;
  privacyLevel: DefaultPrivacyLevel;
  receiverId: string;
  senderId: string;
  balanceAtCompletion?: string;
  status: TransactionStatus;
  requestStatus?: RequestStatus;
  requestResolvedAt?: Date;
  createdAt: Date;
  modifiedAt: Date;
}
