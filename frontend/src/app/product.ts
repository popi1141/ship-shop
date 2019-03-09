class Reading {
    constructor(
        readonly timestamp: Date,
        readonly lat: number,
        readonly long: number,
        readonly temp: number,
        readonly humidity: number,
        readonly co2: number
    ) {}
}

export class Product {
    readonly readings: Array<Reading>;
    constructor(
        readonly name: string,
        readonly origin: string,
        readonly weight: number,
        readonly shipDate: Date,
        readonly currentBid: number
    ) {}

    freshness() {
        return 0; // Placeholder
    }
}
