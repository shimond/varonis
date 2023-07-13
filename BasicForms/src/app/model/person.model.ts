export interface Person {
    firstName: string;
    lastName: string;
    age: number;
    isAdmin: boolean;
    start: Date;
    end: Date;
    hobbies?: string[];
    addresses: Address[];
}


export interface Address {
    country?: string;
    city?: string;
    street?: string;
}
