import { Car } from "./models/Car.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"
import { Home } from "./models/Home.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])


  /** @type {Car[]} */
  cars = [
    new Car({
      year: 2004,
      make: 'Mazda',
      model: 'Miata',
      mileage: 60000,
      runs: false,
      imgUrl: 'https://images.unsplash.com/photo-1561043845-2f5e09749871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlhdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      isNew: false,
      price: 12000,
      color: '#080f14',
      description: 'This one is just for Jeremy, no one else contact me'
    }),
    new Car({
      year: 1998,
      make: 'Suzuki',
      model: 'Escudo',
      mileage: 80,
      runs: true,
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2021/06/Suzuki-Escudo-Pikes-Peak-Motor-1.jpg',
      isNew: true,
      price: 400000,
      color: '#940109',
      description: 'The fastest car in Gran Turismo 2 on Playstation'
    }),
  ]


    // NOTE Used to load initial data
  init() {
    this.cars = loadState('cars', [Car])
  }

  homes = [
    new Home({
      name: 'The Haunted Home',
      age: 100,
      bedrooms: 6,
      bathrooms: 3,
      sqft: 8000,
      price: 6000000,
      description: 'Though the previous owners died mysteriously, this is a lovely home! the price is, quite frankly, an absolute steal for such a high-quality luxury home',
      image: 'https://images.unsplash.com/photo-1621620844255-4b0d09b12c3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhdW50ZWQlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    }),
    new Home({
      name: 'Flowerfield Cottage',
      age: 10,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1500,
      price: 150000,
      description: 'A charming little family home perfect for small families. Lots of flowers, and the price is an absolute steal.',
      image: 'https://images.unsplash.com/photo-1603862026184-14a7f7b91026?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y290dGFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    })
  ]

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
