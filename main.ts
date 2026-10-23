let Cow = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f f f f f . . . 
    f f 1 1 1 f f 1 1 1 1 f f f . . 
    f 5 f f 1 1 f 1 f f 1 1 f f . . 
    f f f f 1 1 f 1 f f 1 f f f . . 
    . . f f f 1 1 1 f f f f 1 f . . 
    . . f f f 1 1 f 1 1 f 1 1 f . . 
    . . f f f 1 1 f 1 1 1 1 f f . . 
    . . f f f f f f f f 1 f f . . . 
    . . . f . . . . . . f f . . . . 
    . . . f . . . . . . f . . . . . 
    . . . f . . . . . . f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cow)
