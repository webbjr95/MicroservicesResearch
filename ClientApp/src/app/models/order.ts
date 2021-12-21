export class Order {
    constructor(id: string) {
        this.id = id
    }

    id: string
    countryCode: string = 'US'
    price: number = 4.72
    productCode: string = 'I-SRM'
    quantity: number = 5
    status: string = 'PENDING'
    totalCost: number = 23.60
}