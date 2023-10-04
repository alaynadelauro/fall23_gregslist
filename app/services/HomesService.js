import { AppState } from "../AppState.js"
import { Home } from "../models/Home.js"




class HomesService {
    sellYourHome(homeData){
        const newHome = new Home(homeData)
        AppState.homes.push(newHome)
        AppState.emit('homes')
    }
}


export const homesService = new HomesService()