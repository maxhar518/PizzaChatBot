let name,
  size,
  base,
  toppings = [],
  quantity;

window.addEventListener("load", function () {
  console.log("page loaded");
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    name = document.getElementById("name").value;
    size = document.querySelector('input[name="size"]:checked').value;
    toppingsItems = document.querySelectorAll('input[name="toppings"]');
    for (i = 0; i < toppingsItems.length; i++) {
      if (toppingsItems[i].checked) {
        toppings.push(toppingsItems[i].value);
      }
    }
    base = document.getElementById("base").value;
    quantity = document.getElementById("quantity").value;
    var myAssignment = Assignment.getInstance();
  });
});

class Assignment {
  constructor() {
    console.log("Singleton created");
    var controller = new Controller();
  }
  static getInstance() {
    // Is there and instance variable attached to the class?
    // If so! Don't Create. If NOT, then its ok to Create!
    if (!Assignment._instance) {
      Assignment._instance = new Assignment();
      return Assignment._instance;
    } else {
      throw "Sinful! Trying to create a second Singleton!";
    }
  }
}

class Controller {
  constructor() {
    console.log("Controller Created");
    this.model = new Model();
    this.view = new View();
    this.view.display(
      this.model.name,
      this.model.size,
      this.model.base,
      this.model.toppings,
      this.model.quantity
    );
  }
}

class Model {
  constructor() {
    console.log("Model Created");
    this.name = name;
    this.size = size;
    this.base = base;
    this.toppings = toppings;
    this.quantity = quantity;
  }
}

class View {
  constructor() {
    console.log("View Created");
  }
  display(_name, _size, _base, _toppings, _quantity) {
    let form = document.querySelector("form");
    let order = "<h2>Your Order</h2>";
    order +=
      '<p class="order-details"><span class="order-title">Name: </span>' +
      _name +
      "</p>";
    order +=
      '<p class="order-details"><span class="order-title">Size: </span>' +
      _size +
      "</p>";
    order +=
      '<p class="order-details"><span class="order-title">Base: </span>' +
      _base +
      "</p>";
    order +=
      '<p class="order-details"><span class="order-title">Toppings: </span>' +
      _toppings +
      "</p>";
    order +=
      '<p class="order-details"><span class="order-title">Quantity: </span>' +
      _quantity +
      "</p>";

    form.innerHTML = order;
  }
}

class Utils {
  constructor() {}
  static getTotal() {}
}
