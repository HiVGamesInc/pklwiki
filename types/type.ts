export enum TypesEnum {
  BUG = 'bug',
  DARK = 'dark',
  DRAGON = 'dragon',
  ELECTRIC = 'electric',
  FAIRY = 'fairy',
  FIGHTING = 'fighting',
  FIRE = 'fire',
  FLYING = 'flying',
  GHOST = 'ghost',
  GRASS = 'grass',
  GROUND = 'ground',
  ICE = 'ice',
  NORMAL = 'normal',
  POISON = 'poison',
  PSYCHIC = 'psychic',
  ROCK = 'rock',
  STEEL = 'steel',
  WATER = 'water'
}

export const pokeTypes = {
  ...Object.values(TypesEnum).reduce((acc: any, v) => { 
    acc[v] = 1
    return acc
  }, {})
}

export const typeColors: any = {
  flying: {
    text: '#91e0ff',
    bg: '#0e4b78',
  },
  bug: {
    text: '#46a047',
    bg: '#e8e95f',
  },
  ice: {
    text: '#1aafe1',
    bg: '#c9eafa',
  },
  electric: {
    text: '#d87a00',
    bg: '#ffcb08',
  },
  fighting: {
    text: '#8f191b',
    bg: '#d85355'
  },
  dark: {
    text: '#f58c1f',
    bg: '#4c3943'
  },
  dragon: {
    text: '#2f2f2f',
    bg: '#f7694b'
  },
  fire: {
    text: '#8f191b',
    bg: '#ffa36a'
  },
  ground: {
    text: '#5b3513',
    bg: '#b56528'
  },
  grass: {
    text: '#e8e95f',
    bg: '#42710f'
  },
  normal: {
    text: '#914f22',
    bg: '#e3a475'
  },
  poison: {
    text: '#8f191b',
    bg: '#fb6568'
  },
  psychic: {
    text: '#b11f83',
    bg: '#fa71cf'
  },
  rock: {
    text: '#533e29',
    bg: '#ba9c80'
  },
  steel: {
    text: '#5b3513',
    bg: '#d5cec5'
  },
  water: {
    text: '#1487b4',
    bg: '#77ccf5'
  },
  ghost: {
    text: '#e5e8ea',
    bg: '#927798',
  },
  fairy: {
    text: '#1487b4',
    bg: '#fbefb7',
  },
}
