
export class Ticket {
    constructor(price, ownerName, ticketNumber) {
        this.price = price,
        this.ownerName = ownerName,
        this.ticketNumber = ticketNumber
    }
}

export class VIPTicket extends Ticket{
    constructor(price, ownerName, ticketNumber) {
        super(price, ownerName, ticketNumber),
        this.benefitsList = ["Free alcohol", "Free food", "Hot towels"]
    }
}
