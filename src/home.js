const days = [
    {weekday:"Mandag",open:10,close:19},
    {weekday:"Tirsdag",open:10,close:19},
    {weekday:"Onsdag",open:10,close:19},
    {weekday:"Torsdag",open:10,close:19},
    {weekday:"Fredag",open:10,close:19},
    {weekday:"Lørdag",open:10,close:19},
    {weekday:"Søndag",open:10,close:19}
];

function createHome() {
    const home = document.createElement("div");
    home.id = "home"

    const headlineOpenClose = document.createElement("h1")
    headlineOpenClose.textContent = "Åpeningstider"
    home.appendChild(headlineOpenClose)

    const paragraphOpenClose = document.createElement("p")       
    days.forEach( (day) => {
        const divDayHours = document.createElement("div");
        divDayHours.classList.add("day-hours");

        const divDay = document.createElement("div");
        divDay.classList.add("day");
        divDay.textContent = day.weekday;
        divDayHours.appendChild(divDay);

        const divHours = document.createElement("div");
        divHours.classList.add("hours");
        divHours.textContent = `${day.open}-${day.close}`;
        divDayHours.appendChild(divHours);

        paragraphOpenClose.appendChild(divDayHours);
    } );
    home.appendChild(paragraphOpenClose)

    return home;
}

export default createHome;
