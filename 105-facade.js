// Facade design pattern

// Facade is a structural design pattern that provides a simplified interface to a library, or any other complex set of classes.

class VegRestaurant {
  getMenus() {
    return "Vegetarian Menu";
  }
}

class NonVegRestaurant {
  getMenus() {
    return "Non-Vegetarian Menu";
  }
}

class VegNonBothRestaurant {
  getMenus() {
    return "Vegetarian and Non-Vegetarian Menu";
  }
}

class HotelKeeper {
  getVegMenu() {
    let v = new VegRestaurant();
    let vegMenu = v.getMenus();
    return vegMenu;
  }

  getNonVegMenu() {
    let v = new NonVegRestaurant();
    let nonVegMenu = v.getMenus();
    return nonVegMenu;
  }

  getVegNonMenu() {
    let v = new VegNonBothRestaurant();
    let bothMenu = v.getMenus();
    return bothMenu;
  }
}

// Usage
let keeper = new HotelKeeper();

let v = keeper.getVegMenu();
console.log(v); // Vegetarian Menu

let nv = keeper.getNonVegMenu();
console.log(nv); // Non-Vegetarian Menu

let both = keeper.getVegNonMenu();
console.log(both); // Vegetarian and Non-Vegetarian Menu

// In this code, HotelKeeper is a facade that simplifies the interface to the VegRestaurant,
// NonVegRestaurant, and VegNonBothRestaurant classes. It provides methods to get the menus from
//  these restaurants, so the client code only needs to interact with the HotelKeeper,
//  not the restaurant classes.
