class Knulp {
    maps = []
    tiles = []
}

class Element {
    id
    name
}

class Map extends Element { 
    tiles = []
}

class Sprite extends Element {
    imageData
}

class Tile extends Sprite {

}