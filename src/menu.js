import menuItems from "./menu.json"

function createMenuItem(dish) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const menuItemName = document.createElement("div");
    menuItemName.textContent = dish.name;
    menuItem.appendChild(menuItemName);
    
    const menuItemIngredieces = document.createElement("ul");
    dish.ingredients.forEach( (ing) => {
        const liIng = document.createElement("li");
        liIng.textContent = ing;        
        menuItemIngredieces.appendChild(liIng);
    });
    menuItem.appendChild(menuItemIngredieces);


    const menuItemPrice = document.createElement("div");
    menuItemPrice.textContent = dish.price;
    menuItem.appendChild(menuItemPrice);

    return menuItem;
}

function createMenu() {
    const menu = document.createElement("div");
    menu.id = "menu"

    menuItems.menu.forEach( (dish) => menu.appendChild(createMenuItem(dish)));

    return menu;
}

export default createMenu;