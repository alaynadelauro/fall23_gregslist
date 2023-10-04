import { generateId } from "../utils/GenerateId.js";

export class Home {
    constructor(data){
        this.id = generateId()
        this.name = data.name
        this.age = data.age
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.image = data.image
    }
get homeCard(){
    return `<div class="col-8 d-flex mt-4 bg-white">
    <img class="image-fluid car-img p-3" src="${this.image}" alt="${this.name}">
    <div class="p-3">
        <p class="fs-2">${this.name}</p>
        <p>This home is ${this.age} years old and ${this.sqft} square feet.</p>
        <p>It has ${this.bedrooms} bedrooms and ${this.bathrooms} Bathrooms.</p>
        <p>${this.description}</p>
        <p>Could be yours for $${this.price}</p>
    </div>
    <div class="d-flex align-items-end justify-content-end">
        <button class="btn btn-danger">Buy</btn>
    </div>
</div>`
}
}
// The buy button doesn't work yet, no function for it