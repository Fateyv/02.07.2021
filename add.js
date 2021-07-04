class Hamburger { 
    constructor(size) {
        this.price = size.price;
        this.callories = size.callories;
    }
    static SIZE_SMALL = { price: 50, callories: 20 }
    static SIZE_MEDIUM = { price: 75, callories: 30 }
    static SIZE_LARGE = { price: 100, callories: 40 }

    static TOPPING_CHEESE = { price: 10, callories: 20 }
    static TOPPING_SALAD = { price: 20, callories: 5 }
    static TOPPING_POTATO = { price: 15, callories: 10 }
    static TOPPING_SPICE = { price: 15, callories: 0 }
    static TOPPING_MAYO = { price: 20, callories: 5 }

    getPrice() {
        return this.price;
    }

    getCallories() {
        return this.callories;
    }

    addTopping(topping) {
        this.price += topping.price;
        this.callories += topping.callories;
    }
}

// маленький (50 тугриков, 20 калорий)
// средний (75 тугриковб 30 каллорий)
// большой (100 тугриков, 40 калорий)
// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(`Price with sauce:` + hamburger.getPrice());
console.log(`Callories with sauce:`  + hamburger.getCallories());