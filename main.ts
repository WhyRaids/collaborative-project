let spaceship: Sprite = null
function useSpaceship () {
    spaceship = sprites.create(img`
        . . . . f f f f f f f f f . . . . 
        . . . f a a a a a a a a a f . . . 
        . . f a a a a a a a a a a a f . . 
        . f f a a a a a a a a a a a f f . 
        f 8 8 f a a a a a a a a a f 8 8 f 
        f 8 8 8 f a a a a a a a f 8 8 8 f 
        f 8 8 8 8 f f f f f f f 8 8 8 8 f 
        f 8 8 8 8 8 8 8 2 8 8 8 8 8 8 8 f 
        f 8 8 8 8 8 8 b c b 8 8 8 8 8 8 f 
        f 8 8 8 8 8 b b c b b 8 8 8 8 8 f 
        f 8 8 8 8 8 b c c c b 8 8 8 8 8 f 
        f 8 8 8 8 8 b b c b b 8 8 8 8 8 f 
        f 8 8 8 8 8 8 b b b 8 8 8 8 8 8 f 
        . f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
        . . f 8 8 8 8 8 8 8 8 8 8 8 f . . 
        . . . f 8 8 8 8 8 8 8 8 8 f . . . 
        . . . . f f f f f f f f f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(spaceship)
}
