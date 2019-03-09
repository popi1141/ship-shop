class Reading {
}

export class Product {
    constructor(
        public name: string,
        public origin: string,
        public weight: number,
        public lat: number,
        public long: number,
        public shipDate: Date,
        public estArrivalDate: Date,
        public currentBid: number
    ) {}

    freshness() {
        return 0; // Placeholder
    }
}
