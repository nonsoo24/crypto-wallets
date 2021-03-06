import { CurrencyCode } from "./currency"

export type WalletResponse = {
    currency: string;
    name: string;
    type: string;
    imgURL: string;
}

export type AccountResponse = {
    id: string;
    currency: CurrencyCode;
    hold: string;
    pending_balance: string;
    balance: string;
    name: string;
    type: string;
    deposit: boolean;
    payout: boolean;
    imgURL: string;
}

export type AccountItems = {
    id: string;
    currencyCode: CurrencyCode;
    hold: string;
    pendingBalance: string;
    balance: string;
    name: string;
    type: string;
    deposit: boolean;
    payout: boolean;
    imgURL: string;
}