import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HomesController } from "./controllers/HomesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";
import { HomesView } from "./views/HomesView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <h1 class="p-3">Welcome to Gregslist!</h1>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarsView
    // view: null
  },
  {path: '#/homes',
  controller: HomesController,
  // view: null
  view: HomesView
}
  // TODO create a new route object for houses, start the view out as null

]