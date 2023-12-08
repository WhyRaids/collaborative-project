namespace SpriteKind {
    export const turret = SpriteKind.create()
}
function turretDirection () {
    if (controller.up.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.turret)
        turretUp = sprites.create(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . c c c . . . . . . . 
            . . . . . . . b b b . . . . . . . 
            . . . . . . . b b b . . . . . . . 
            . . . . . . . b b b . . . . . . . 
            . . . . . . c b b b c . . . . . . 
            . . . . . c c b f b c c . . . . . 
            . . . . . c c b 2 b c c . . . . . 
            . . . . . c c b b b c c . . . . . 
            . . . . . c c b b b c c . . . . . 
            . . . . . c c c b c c c . . . . . 
            . . . . . . c c c c c . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.turret)
        controller.moveSprite(turretUp)
        if (controller.A.isPressed()) {
            turretBulletUp = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, turretUp, 0, -50)
        }
    }
    if (controller.left.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.turret)
        turretLeft = sprites.create(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . c c c c c . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . c b b b b b b b b c c . . . . . 
            . c b b b b f 2 b b b c . . . . . 
            . c b b b b b b b b c c . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . c c c c c . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.turret)
        controller.moveSprite(turretLeft)
        if (controller.A.isPressed()) {
            turretBulletLeft = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, turretLeft, -50, 0)
        }
    }
    if (controller.right.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.turret)
        turretRight = sprites.create(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . c c c c c . . . . . . 
            . . . . . c c c c c c c . . . . . 
            . . . . . c c b b b b b b b b c . 
            . . . . . c b b b 2 f b b b b c . 
            . . . . . c c b b b b b b b b c . 
            . . . . . c c c c c c c . . . . . 
            . . . . . . c c c c c . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.turret)
        controller.moveSprite(turretRight)
        if (controller.A.isPressed()) {
            turretBulletRight = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, turretRight, 50, 0)
        }
    }
    if (controller.down.isPressed()) {
        sprites.destroyAllSpritesOfKind(SpriteKind.turret)
        turretDown = sprites.create(img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . c c c c c . . . . . . 
            . . . . . c c c b c c c . . . . . 
            . . . . . c c b b b c c . . . . . 
            . . . . . c c b b b c c . . . . . 
            . . . . . c c b 2 b c c . . . . . 
            . . . . . c c b f b c c . . . . . 
            . . . . . . c b b b c . . . . . . 
            . . . . . . . b b b . . . . . . . 
            . . . . . . . b b b . . . . . . . 
            . . . . . . . b b b . . . . . . . 
            . . . . . . . c c c . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            `, SpriteKind.turret)
        controller.moveSprite(turretDown)
        if (controller.A.isPressed()) {
            turretBulletDown = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, turretDown, 0, 50)
        }
    }
}
function setEnemies () {
    for (let index = 0; index < 4; index++) {
        Monster = sprites.createProjectileFromSide(img`
            . . . 7 7 7 7 7 . . . 
            . . . f f 7 f f . . . 
            . . . f f 7 f f . . . 
            . . . f f 7 f f . . . 
            . . . 7 7 7 7 7 . . . 
            . . . 7 7 7 7 7 . . . 
            . . . . . 7 . . . . . 
            . . . 7 8 8 8 7 . . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . . . . 8 . . . . . 
            . . . . . 8 . . . . . 
            . . . . . 6 . . . . . 
            . . . . 6 . 6 . . . . 
            . . . 6 . . . 6 . . . 
            . . 6 . . . . . 6 . . 
            . . 7 . . . . . 7 . . 
            7 7 7 . . . . . 7 7 7 
            `, 0, 20)
        Monster.setPosition(80, -10)
        Monster2 = sprites.createProjectileFromSide(img`
            . . . 7 7 7 7 7 . . . 
            . . . f f 7 f f . . . 
            . . . f f 7 f f . . . 
            . . . f f 7 f f . . . 
            . . . 7 7 7 7 7 . . . 
            . . . 7 7 7 7 7 . . . 
            . . . . . 7 . . . . . 
            . . . 7 8 8 8 7 . . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . . . . 8 . . . . . 
            . . . . . 8 . . . . . 
            . . . . . 6 . . . . . 
            . . . . 6 . 6 . . . . 
            . . . 6 . . . 6 . . . 
            . . 6 . . . . . 6 . . 
            . . 7 . . . . . 7 . . 
            7 7 7 . . . . . 7 7 7 
            `, -20, 0)
        Monster2.setPosition(160, 60)
        Monster3 = sprites.createProjectileFromSide(img`
            . . . 7 7 7 7 7 . . . 
            . . . f f 7 f f . . . 
            . . . f f 7 f f . . . 
            . . . f f 7 f f . . . 
            . . . 7 7 7 7 7 . . . 
            . . . 7 7 7 7 7 . . . 
            . . . . . 7 . . . . . 
            . . . 7 8 8 8 7 . . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . 7 . . 8 . . 7 . . 
            . . . . . 8 . . . . . 
            . . . . . 8 . . . . . 
            . . . . . 6 . . . . . 
            . . . . 6 . 6 . . . . 
            . . . 6 . . . 6 . . . 
            . . 6 . . . . . 6 . . 
            . . 7 . . . . . 7 . . 
            7 7 7 . . . . . 7 7 7 
            `, 0, -20)
        Monster3.setPosition(80, 130)
    }
}
let Monster3: Sprite = null
let Monster2: Sprite = null
let Monster: Sprite = null
let turretBulletDown: Sprite = null
let turretDown: Sprite = null
let turretBulletRight: Sprite = null
let turretRight: Sprite = null
let turretBulletLeft: Sprite = null
let turretLeft: Sprite = null
let turretBulletUp: Sprite = null
let turretUp: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . c c c c c . . . . . . 
    . . . . . c c c 2 c c c . . . . . 
    . . . . . c c b b b c c . . . . . 
    . . . . . c c b f b c c . . . . . 
    . . . . . c c b b b c c . . . . . 
    . . . . . c c c c c c c . . . . . 
    . . . . . . c c c c c . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . 
    `, SpriteKind.turret)
scene.setBackgroundImage(img`
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccccccccccccccbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccccccccccccccbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fbbbcccccccccccccccbbbf777777777777777777777777777777777777777777777777777777777777777777777
    `)
setEnemies()
game.onUpdate(function () {
    turretDirection()
})
