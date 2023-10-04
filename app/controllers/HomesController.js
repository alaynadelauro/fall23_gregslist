import { AppState } from "../AppState.js"
import { homesService } from "../services/HomesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"



function _drawHomes(){
    const homes = AppState.homes
    let content = ''
    homes.forEach(home => content += home.homeCard)
    console.log(homes)
    setHTML('homes', content)
}


export class HomesController{
    constructor(){
        // console.log('homes controller has loaded')
        _drawHomes()
        AppState.on('homes', _drawHomes)
    }
    sellYourHome(event){
        event.preventDefault()
        const form = event.target
        const homeData = getFormData(form)
        console.log('your home is on sale!', homeData)
        homesService.sellYourHome(homeData)
        
    }
}

