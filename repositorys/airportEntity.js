import { Flight } from "./flightEntity.js"

export class Airport {
    constructor() {
        this.flights = []
        this.crearte3Flight()
    }
    crearte3Flight() {
        const flight1 = new Flight("dubay1234", "wizeair", 123456, 100, 200, 500)
        const flight2 = new Flight("newyork234", "El-Al", 456789, 200, 800, 1450)
        const flight3 = new Flight("newyork456", "El-Al", 234567, 100, 1000, 2000)
        this.flights.push(flight1, flight2, flight3)
    }
}