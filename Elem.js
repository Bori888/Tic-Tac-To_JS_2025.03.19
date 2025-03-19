// Elem osztály
export default class Elem {
  #adat
  #index
  constructor(adat, index, szuloElem) {
    this.adat = adat; // adat: string
    this.index = index; // index: int
    this.szuloElem = szuloElem; // szuloElem: htmlDom elem
    console.log(this.szuloElem);
    this.megjelenit()
    this.esemenyKezelo()
    
    
  }

  // megjelenit(): void
  megjelenit() {
    let html =`<div class ="elem">${this.#adat}</div>`
    this.szuloElem.inserAdjacentHTML("beforeend",html)

    
  }

  // esemeny(): CustomEvent
  esemenyKezelo() {
    this.elem = document.querySelector(".elem:last-child")
    this.elem.addEventListener("click",()=>{
      console.log(this.index);
      const e = new CustomEvent("kivalaszt",{detail:this.#index})
      window.dispatchEvent(e)
      
    })
    
  }
}

