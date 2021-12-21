export class Invoice {
    constructor(id: string) {
        this.id = id
    }
    // TODO.JW: Make sure we're using 6 length string ids (i.e. 000001)
    id: string
    countryCode: string = 'US'
    price: number = 5.12
    productCode: string = 'I-SRM'
    quantity: number = 5
    status: string = 'PENDING'
    totalCost: number = 25.60
}