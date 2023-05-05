import { pokeTypes } from "types/type"

const api = 'https://pokeapi.co/api/v2'

const unifyDamage = (currentObj: any = { ...pokeTypes }, arr: any[]) => {
  const dmgObj = arr.reduce((acc, item: { obj: any, mult: number }) => {
    const newObj = acc;

    item.obj.forEach((k: any) => {
      newObj[k.name] = (newObj?.[k?.name] ? newObj[k.name] : 1) * item.mult
    })

    return newObj
  }, currentObj)

  return dmgObj
}

export const getPokemonById = async (id: string) => {
  const formattedId = parseInt(id.replace(/[^\d]/g, ""), 10);
  let poke: any = {}

  await fetch(`${api}/pokemon-form/${formattedId}`)
    .then(resp => {
      return resp.json()
    })
    .then(async resp => {
      poke = resp

      await poke?.types?.forEach((type: any) => {
        fetch(type.type.url)
          .then(resp => {
            return resp.json()
          })
          .then(async resp => {
            const { damage_relations } = resp

            poke = {
              ...poke,
              typesData: {
                ...poke.typesData,
                from: unifyDamage(poke?.typesData?.from, [
                  { obj: damage_relations.double_damage_from, mult: 2} ,
                  { obj: damage_relations.half_damage_from, mult: 0.5} ,
                  { obj: damage_relations.no_damage_from, mult: 0} ,
                ]),
                // to: unifyDamage([
                //   calculateDamage(damage_relations.double_damage_to, 2, poke?.typesData?.to),
                //   calculateDamage(damage_relations.half_damage_to, 0.5, poke?.typesData?.to),
                //   calculateDamage(damage_relations.no_damage_to, 0, poke?.typesData?.to),
                // ]),
              }
            }
          })
      })

      const evolution = await getPokemonEvolution(poke.name)

      poke = {
        ...poke,
        evolution
      }
    })

    return poke
}

export const getPokemonEvolution = async (name: string) => {
  let evolutions: ({ name?: string, id?: string })[] = []

  await fetch(`${api}/pokemon-species/${name}`)
    .then(resp => {
      return resp.json()
    })
    .then(async resp => {
      await fetch(`${resp.evolution_chain.url}`)
      .then(resp => {
        return resp.json()
      })
      .then(resp => {
        const { chain } = resp || {}

        if (chain.species?.name) {
          evolutions.push({
            name: chain.species.name,
            id: String(chain.species.url.split('pokemon-species/')[1].replace(/[^\d]/g, "")).padStart(3, '0')
          })
        }

        if (chain.evolves_to?.[0]?.species?.name){
          evolutions.push({
            name: chain.evolves_to[0].species.name,
            id: String(chain.evolves_to[0].species.url.split('pokemon-species/')[1].replace(/[^\d]/g, "")).padStart(3, '0')
          })
        }
        
        if (chain.evolves_to?.[0]?.evolves_to?.[0]?.species?.name){
          evolutions.push({
            name: chain.evolves_to[0].evolves_to[0].species.name,
            id: String(chain.evolves_to[0].evolves_to[0].species.url.split('pokemon-species/')[1].replace(/[^\d]/g, "")).padStart(3, '0')
          })
        }
      })
    })

  return evolutions
}