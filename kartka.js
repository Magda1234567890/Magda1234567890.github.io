import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

//

loadSprite("kartka","tlo.png")
loadSprite("sanie","sanie.png")

loadSound("muzyka","1.mp3")

const sanie = add([spirte("sanie"), pos(300,180)
area(),
body()])



add([
    sprite("kartka"),
    pos(0,0)
])


const sanie = add([
    sprite("sanie"),
    pos(450,200)
])

onUpdate(()=>{
    sanie.pos.x=sanie.pos.x-1
    sanie.pos.y=sanie.pos.y-1
})