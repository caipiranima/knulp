const { button, div } = van.tags

let mapsCardEnabled = van.state(false)
let mapsCard = div({hidden: () => mapsCardEnabled.val }, 'Mapas')
van.add(document.getElementsByClassName('cards-container')[0], mapsCard)

let instantiateMenu = () => {

    const AddMenuButtons = () => {
        const mapEditorButton = button({ 
          class: () => `${mapsCardEnabled.val ? 'enabled' : 'disabled'}`, 
          onclick: () => {
            mapsCardEnabled.val = !mapsCardEnabled.val
          } 
        }, 'Mapas')
        return div(
          mapEditorButton,
        )
      }
      
      van.add(document.getElementsByClassName('menu-bar')[0], AddMenuButtons())
}

export default { instantiateMenu }