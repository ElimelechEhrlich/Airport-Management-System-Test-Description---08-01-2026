import { RegularPassenger, Student } from "../repositorys/passengerEntity.js"

export function buyingTicket(passenger, ticket, originalPrice, vip=false) {
    const discount = calcDiscount(passenger, vip, ticket)
    const price = originalPrice - discount
    if (passenger.amountOfMoney > price) {
        ticket.ownerName = passenger.name
        passenger.amountOfMoney -= price
        return "The ticket was purchased."
    }
    else return false
}


export function calcDiscount(passenger, vip, ticket) {
    let discount = 0
    if (passenger instanceof RegularPassenger) {
        if (knowsAnAirportEmployee) {
            if (vip) discount = ticket.price/100*15;
            else discount = ticket.price/100*20;
        }
    } else if (passenger instanceof Student) {
        if (!vip) discount = ticket.price/100*10;
    }
    return discount
}