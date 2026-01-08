import { buyingTicket } from "../services/ticketsService.js";
import { VIPTicket } from "./ticketEntity.js";

export class Passenger {
    static count = 1;
    constructor(name, amountOfMoney) {
        this.name = name,
        this.idNumber = Passenger.count ++,
        this.amountOfMoney = amountOfMoney
    }
    buyTicket(airport, flightName, vip=false) {
        if (airport.flights[0]) {
            const flight = (airport.flights).find((flight) => flight.flightName === flightName)
            if (flight) {
                let ticket = ''
                if (vip) {
                    ticket = (flight.ticketsList).find((ticket) => ticket.ownerName === null && (ticket instanceof VIPTicket))
                    if (ticket) {
                        buyingTicket(this, ticket, ticket.price, true)
                    }
                } else {
                    ticket = (flight.ticketsList).find((ticket) => ticket.ownerName === null && (ticket instanceof VIPTicket))
                    if (ticket) {
                        buyingTicket(this, ticket, ticket.price, true)
                    }
                } if (!ticket) return "No tickets left."
            } else return "There are no flights with this name."
        } else return "The airport does not exist or does not contain flights."
    }
}

export class Student extends Passenger{
    constructor(name, amountOfMoney, SchoolOrUniversityName) {
        super(name, amountOfMoney),
        this.SchoolOrUniversityName = SchoolOrUniversityName
    }
}

export class RegularPassenger extends Passenger{
    constructor(Name, amountOfMoney, Workplace, knowsAnAirportEmployee=false) {
        super(Name, amountOfMoney),
        this.Workplace = Workplace,
        this.knowsAnAirportEmployee = knowsAnAirportEmployee
    }   
}


