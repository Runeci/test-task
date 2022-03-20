export interface Transaction {
    _id: string,
    amount: string,
    type: string,
    name: Name,
    company: string,
    email: string,
    phone: string,
    address: string,
}

type Name = {
    first: string,
    last: string,
};

export interface TransactionView {
    type: string;
    count: number;
}
