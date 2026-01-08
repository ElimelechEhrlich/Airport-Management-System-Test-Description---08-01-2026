import { Ticket, VIPTicket } from "./ticketEntity.js"

export class Flight {
    constructor(flightName, airLine, flightNumber, maximumNumberOfPassengers, regularTicketPrice, VIPTicketPrice, ticketsList) {
        this.flightName = flightName,
        this.airLine = airLine,
        this.flightNumber = flightNumber,
        this.maximumNumberOfPassengers = maximumNumberOfPassengers,
        this.regularTicketPrice = regularTicketPrice,
        this.VIPTicketPrice = VIPTicketPrice,
        this.ticketsList = []
        this.addTicketsToList()
        this.addVIPTicketsToList()
    }
    addTicketsToList() {
        for (let i = 1; i <= (this.maximumNumberOfPassengers/100*90); i++) {
            const ticket = new Ticket(this.regularTicketPrice, null, i)
            this.ticketsList.push(ticket)
        }
    }
    addVIPTicketsToList() {
        for (let i = 1 + this.maximumNumberOfPassengers/100*90; i <= (this.maximumNumberOfPassengers); i++) {
            const vipTicket = new VIPTicket(this.VIPTicketPrice, null, i)
            this.ticketsList.push(vipTicket)
        }
    }
}


