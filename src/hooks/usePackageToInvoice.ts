import { PerPackageInfo, type InvoicePropType } from "~/components/Invoice/Invoice";
import { type PriceFormType } from "~/types/PriceFormType";

export function usePackageToInvoice(packageSelected: PriceFormType): InvoicePropType {
    console.log(packageSelected)
    const invoiceData = { 
                            name: packageSelected.firstName + " " + packageSelected.lastName, 
                            email: packageSelected.email,
                            dateTimeToArrive : packageSelected.dateTimeToArrive,
                            address: packageSelected.suit + ", " + packageSelected.address +", "+ packageSelected.city,
                            packageData: []
                        } as InvoicePropType;
    if(packageSelected.corePackage){
        invoiceData.packageData.push(creatPackageInfo(packageSelected.corePackage, 50));
    }
    if(packageSelected.noOfBathrooms){
        invoiceData.packageData.push(creatPackageInfo("Bathrooms * " + packageSelected.noOfBathrooms, priceData.perBathrooms*Number(packageSelected.noOfBathrooms)))
    }
    if(packageSelected.noOfHalfBathrooms){
        invoiceData.packageData.push(creatPackageInfo("Half Bathrooms * " + packageSelected.noOfHalfBathrooms, priceData.perHalfBathrooms*Number(packageSelected.noOfHalfBathrooms)))
    }
    if(packageSelected.noOfBedrooms){
        let beadRoomPrice = priceData.firstBedRoom;
        if(Number(packageSelected.noOfBedrooms)>1){
            beadRoomPrice += priceData.addBeadRoom*Number(packageSelected.noOfBedrooms-1)
        }
        invoiceData.packageData.push(creatPackageInfo("Beadroom * " + packageSelected.noOfBedrooms, beadRoomPrice))
    }
    if(packageSelected.area){
        let maxArea = Number(packageSelected.area.split("-")[1]);
        maxArea = Math.ceil(maxArea/500)
        invoiceData.packageData.push(creatPackageInfo("For " + packageSelected.area + "SqFt" , priceData.per500Sqft*maxArea))
    }
    packageSelected.selectedPackage.forEach(element => {
        invoiceData.packageData.push(creatPackageInfo(element.name, element.price))
    });
    
    return invoiceData;
}

const priceData = {
    firstBedRoom:50,
    addBeadRoom :20,
    perBathrooms: 30,
    perHalfBathrooms: 15,
    per500Sqft: 20
}

function creatPackageInfo(title:string, amount:number) : PerPackageInfo{
    return { title, amount} as PerPackageInfo;
}