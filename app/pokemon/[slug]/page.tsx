'use client'

import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Icon from "components/Icon/Icon";
import TypeLabel from "components/TypeLabel/TypeLabel";
import { useThemeContext } from "context/theme";
import { bgContext, useBgContext } from "context/bgContext";
import Image from "next/image"
import Link from "next/link";
import { useContext, useEffect, useState } from "react"
import { getPokemonById } from "services/getPokemon"
import { typeColors } from "types/type";

export default function Pokemon({ params }: { params: { slug: string } }) {
  const { darkMode } = useThemeContext()
  const { bg, setBg } = useBgContext()

  const id = params.slug
  const isShiny = id.includes('_s')

  const [pokemon, setPokemon] = useState<any>({})

  const fetchPokemon = async () => {
    const poke = await getPokemonById(id)

    setPokemon(poke)
  }

  useEffect(() => {
    fetchPokemon()
  }, [])
  
  useEffect(() => {
    console.log(pokemon)
    if (pokemon?.types?.[0]?.type?.name) {
      const color = typeColors[pokemon.types[0].type.name]
      setBg(color.bg)
    }
  }, [pokemon])

  return (
    <main className="w-full p-16 bg-bgPrimary rounded-xl shadow-md text-dBlack">
      <div className="flex w-full gap-8">
        <Image src={`/pokemon/${id}.png`} alt={id} width={140} height={140} />
        <div>
          <h2 className="text-xl">#{id.replace(/[^\d]/g, "")}</h2>
          <h1 className="text-4xl capitalize">{`${(isShiny ? 'Shiny ' : '')}${pokemon.name}`}</h1>
          <div className="pt-8 flex gap-2">
            {pokemon?.types?.map((type: any) => {
              const typeName = type.type.name

              return <img src={`/types/${typeName}.png`} key={typeName} width={30} height={30} alt={typeName} title={typeName} />
            })}
          </div>
        </div>
      </div>
      <div className={`h-0.5 my-16 w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
      <section>
        <h2 className='text-2xl'>Evolutions:</h2>
        <div className='flex justify-around items-center gap-16 mt-16 relative text-6xl'>
          {pokemon?.evolution?.map((evol: any, i: number) => {
            const formattedId = evol.id + (isShiny ? '_s' : '');
            return (
              <>
                {i !== 0 && <Icon icon={ArrowLongRightIcon} />}
                <Link key={'evol-' + formattedId} className={`relative z-10 ${id === formattedId ? 'scale-125' : ''}`} href={`/pokemon/${formattedId}`}>
                  <img src={`/pokemon/${formattedId}.png`} key={evol.name} width={80} height={80} alt={evol.name} title={evol.name} />
                  <div className='text-lg pt-4 text-center capitalize'>{evol.name}</div>
                </Link>
              </>
            )
          })}
        </div>
      </section>
      <div className={`h-0.5 my-16 w-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}></div>
      <section>
        {/* <div>
          <h2 className='text-2xl'>Deals damage to:</h2>
          <div className='grid grid-cols-4 gap-4 pt-4'>
            {pokemon?.typesData?.to?.double ? Object.entries(pokemon.typesData.to.double).map((type: any) => <TypeLabel key={type[0]+type[1]} type={type[0]} multiplier={type[1]} />) : null}
            {pokemon?.typesData?.to?.half ? Object.entries(pokemon.typesData.to.half).map((type: any) => <TypeLabel key={type[0]+type[1]} type={type[0]} multiplier={type[1]} />) : null}
            {pokemon?.typesData?.to?.null ? Object.entries(pokemon.typesData.to.null).map((type: any) => <TypeLabel key={type[0]+type[1]} type={type[0]} multiplier={type[1]} />) : null}
          </div>
        </div> */}
        <div>
          <h2 className='text-2xl'>Damage it takes from:</h2>
          <div className='grid grid-cols-3 gap-4 mt-16'>
            {pokemon?.typesData?.from ? Object.entries(pokemon.typesData.from).sort((a: any, b: any) => b[1]-a[1]).map((type: any) => (
              <TypeLabel
                key={type[0]+type[1]}
                className={'text-gray-500'}
                // className={`bg-electric text-gray-500`}
                type={type[0]}
                multiplier={type[1]}
              />
            )) : null}
          </div>
        </div>
      </section>
    </main>
  )
}
