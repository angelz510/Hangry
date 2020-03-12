const restaurantsContainer = document.querySelector('#restaurants-container');

let mexicanJoints = []
let asianJoints = []
let burgerJoints = []
let pizzaJoints = []
let indianJoints =[]
// Food Option Logic
let mexican = document.getElementById("mexican")
mexican.addEventListener("click", mexicanMatch);


let indian = document.getElementById("indian");
indian.addEventListener("click", indianMatch)


let pizza = document.getElementById("pizza");
pizza.addEventListener("click", pizzaMatch)


let asian = document.getElementById("asian");
asian.addEventListener("click", asianMatch)


let burger = document.getElementById("burger");
burger.addEventListener("click", burgerMatch)
  

function mexicanMatch(){
  fetch('http://localhost:4000/api/v1/restaurants')
    .then (response => response.json())
    .then (res => checkMexicanMatch(res))
    .catch (err => console.log(err))

  const checkMexicanMatch = (res) => {
    for (let i=0; i <res.length; i++) {
      if (res[i].type === "mexican") {
        mexicanJoints.push(res[i])
      }
    }
  }
  render(mexicanJoints)
}

function indianMatch(){
  fetch('http://localhost:4000/api/v1/restaurants')
    .then (response => response.json())
    .then (res => checkIndianMatch(res))
    .catch (err => console.log(err))

  const checkIndianMatch = (res) => {
    for (let i=0; i <res.length; i++) {
      if (res[i].type === "indian") {
        indianJoints.push(res[i])
      }
    }
  }
  render(indianJoints)
}

function pizzaMatch(){
  fetch('http://localhost:4000/api/v1/restaurants')
    .then (response => response.json())
    .then (res => checkPizzaMatch(res))
    .catch (err => console.log(err))

  const checkPizzaMatch = (res) => {
    for (let i=0; i <res.length; i++) {
      if (res[i].type === "pizza") {
        pizzaJoints.push(res[i])
      }
    }
  }
  render(pizzaJoints)
}

function asianMatch(){
  fetch('http://localhost:4000/api/v1/restaurants')
    .then (response => response.json())
    .then (res => checkAsianMatch(res))
    .catch (err => console.log(err))

  const checkAsianMatch = (res) => {
    for (let i=0; i <res.length; i++) {
      if (res[i].type === "asian") {
        asianJoints.push(res[i])
      }
    }
  }
  render(asianJoints)
}

function burgerMatch(){
  fetch('http://localhost:4000/api/v1/restaurants')
    .then (response => response.json())
    .then (res => checkBurgerMatch(res))
    .catch (err => console.log(err))

  const checkBurgerMatch = (res) => {
    for (let i=0; i <res.length; i++) {
      if (res[i].type === "burger") {
        burgerJoints.push(res[i])
      }
    }
  }
  render(burgerJoints)
}


//for each rest return rest name, location, hours 

function render(restaurantsArr){
  const restaurantsTemplate = restaurantsArr.map((restaurants) => {
    return getRestaurantsTemplate(restaurants);
  })
  
  restaurantsContainer.insertAdjacentHTML('beforeend', restaurantsTemplate);
}

function getRestaurantsTemplate(restaurants){
  return `
  <div class="restaurants-list">
    <p> ${restaurants.name}</p>
    <p> ${restaurants.location}</p>
    <p> ${restaurants.hours}</p>

  </div>
  `
}



// Clearing the restaurant feed
clear = document.getElementsByClassName("food-btn");
clear.addEventListener("click", function(event) {
    clearSearch(event.target.getElementsByClassName);
})


// reset function
function clearSearch() {

}