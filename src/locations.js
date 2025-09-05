import locations from "./locations.json"

function createLocationCard(location) {
    const locationCard = document.createElement("div");
    locationCard.classList.add("location-card");

    const street = document.createElement("div");
    street.classList.add("location-street");
    street.textContent = location.street;
    locationCard.append(street);

    const city = document.createElement("div");
    city.classList.add("location-city");
    city.textContent = location.city;
    locationCard.append(city);

    const phone = document.createElement("div");
    phone.classList.add("location-phone");
    phone.textContent = "Telefon: " + location.phone;
    locationCard.append(phone);

    return locationCard;
}

function createLocationCards() {
    const locationCards = document.createElement("div");
    locationCards.id = "location-cards"
    
    locations.locations.forEach( (location) => locationCards.appendChild(createLocationCard(location)));

    return locationCards;
}

export default createLocationCards;