const mainMenu = new Menu(getMainMenuDeclaration)

const gameManager = new GameManager([
    getLevel1Declaration,
    getLevel2Declaration,
    getLevel3Declaration,
    getLevel4Declaration,
    getLevel5Declaration,
])

// TEMP
mainMenu.hide(true)
gameManager.startGame()

gameManager.skipTo(4)
gameManager.musicManager.muted = true
// TEMP


document.addEventListener("keydown", e=>{
    const key = e.key?.toLowerCase(), ctrlKey =  e.ctrlKey||e.metaKey
    if (["-","+","="].includes(key) && ctrlKey) e.preventDefault() // PREVENT ZOOM
})
document.addEventListener("mousewheel", e=>(e.ctrlKey||e.metaKey)&&e.preventDefault(), {passive: false}) // PREVENT ZOOM


