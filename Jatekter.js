import Elem from "./Elem.js";


export default class Jatekter {

  #lista =["O","","","","","","","","","X"]

  constructor(szuloElem) {

    this.szuloElem = szuloElem; // szuloElem: htmlDom elem
    this.megjelenit()
    this.esemenyKezelo()
  }

  // megjelenit(): void
  megjelenit() {
    // Szülő elem megjelenítése
    for (let index = 0; index < this.#lista.length; index++) {
      new Elem (this.#lista[index],index,this.szuloElem)
      
    }
    
  }
  esemenyKezelo(){
    window.addEventListener("kivalszt",(event)=>{
      let index =event.detail
      this.#lista.#lista[index]="*"
      this.szuloElem.innerHTML= ""
      this.megjelenit()
    })
  }


}
