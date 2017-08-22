(function(){
  //Traveler Object
function Travelers(name, food, isHealthy){
  this.name = name;
  this.food = food;
  this.isHealthy = isHealthy;
  this.setFood = function(newFood){
  this.food = newFood;
  }
}


function makeTraveler(name){
  return new Travelers(name, parseInt(Math.random() * 100), true);
}



//Hunt Function
function hunt(traveler){
  let huntedFood = parseInt(Math.random() * 100);
  if (huntedFood > 50){
    traveler.newFood = traveler.food + 100;

    return console.log("Successful Hunt! "+traveler.name+ " has "+traveler.newFood+" food")
  } else {
    traveler.newFood = traveler.food;
    return console.log("Failed Hunt. "+traveler.name+ " has "+traveler.newFood+" food")
  }
}

//Eat Function
function eat(traveler){
  if (traveler.newFood <= 20){
    traveler.newFood = 0;
    traveler.isHealthy = false;
    return console.log(traveler.name+ " ran out of food and is no longer healthy")
  }
  if (traveler.newFood > 20){
    traveler.newFood = traveler.newFood - 20;
    return console.log(traveler.name+ " ate 20 food and now has "+traveler.newFood)
  }
}


//Wagon Object
function Wagon(passengerList, capacity){
  this.capacity = capacity;
  this.passengerList = passengerList;
}

function makeWagon(capacity){
  return new Wagon([], capacity);
}


//Join Wagon function
function join(wagon, traveler){
  if (wagon.capacity > wagon.passengerList.length){
    wagon.passengerList.push(traveler);
    let remainingCapacity = wagon.capacity - wagon.passengerList.length;
    return console.log(traveler.name+" has been added to wagon. There are "+remainingCapacity+" spots left on the wagon.")
  } else{
    console.log("Wagon is full! Traveler has not been added.")
  }

}

function quarantine(wagon){
  for (let i=0; i < wagon.passengerList.length; i++){
    if (wagon.passengerList[i].isHealthy === false){
      console.log("Someone is not healthy - quarantine the wagon!");
      return true;
    }
  }
  console.log("Everyone is healthy - don't quarantine the wagon!");
  return false;
}

function food(wagon){
  let wagonFood = 0;

  for (let i=0; i < wagon.passengerList.length; i++){
  wagonFood =  wagonFood + wagon.passengerList[i].newFood;
  }
  return wagonFood;
}


// Create a wagon called 'wagon'
let wagon = makeWagon(5);
// Create a traveler with the name 'Henrietta' called 'traveler'
let traveler = makeTraveler('Henrietta');
// Create a traveler with the name 'Juan' called 'traveler2'
let traveler2 = makeTraveler('Juan');

hunt(traveler); // maybe get more food
hunt(traveler2);
eat(traveler);
eat(traveler2); // juan is hungry
join(wagon, traveler);
join(wagon, traveler2);

console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
console.log(food(wagon)); // print juan's food + henrietta's food




})();
