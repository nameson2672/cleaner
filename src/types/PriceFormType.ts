export interface PriceFormType {
    noOfBedrooms: number;
    noOfBathrooms: string;
    noOfHalfBathrooms: string;
    area: string;
    firstName: string;
    lastName: string;
    email: string; phone: string;
    address: string;
    city: string;
    postalCode: string;
    dateTimeToArrive: Date | null,
    note: string,
    corePackage:string,
    garbageInfo: string,
    suit: string,
    selectedPackage: { name: string, price: number }[];
}

