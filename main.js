import { Airport } from "./repositorys/airportEntity.js";
import { RegularPassenger, Student } from "./repositorys/passengerEntity.js";


function app() {
    const airport = new Airport()
    const studentPassenger = new Student("Elimelech Ehrlich", 2000, "Kodkod")
    const regularPassenger1 = new RegularPassenger("Avi Israeli", 2000, "office", true)
    studentPassenger.buyTicket(airport, airport.flights[0], true)
    regularPassenger1.buyTicket(airport, airport.flights[1], false)
    console.log(studentPassenger)
    console.log(regularPassenger1);
    console.log(airport);
    airport.flights.forEach(flight => {
        console.log(flight);
        flight.ticketsList.forEach(ticket => {
        console.log(ticket);
        })
});
    
    
}

app()