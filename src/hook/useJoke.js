import { useEffect, useState } from 'react'
import { getJoke } from '../logic/getJoke'

export function useJoke (jokeType) {
  const [joke, setJoke] = useState()
  const [punchline, setPunchline] = useState()

  const newJoke = () => {
    getJoke(jokeType).then(data => {
      const [setup, punchline] = data
      setJoke(setup)
      setPunchline(punchline)
    })
  }

  useEffect(newJoke, [jokeType])

  return { joke, punchline, newJoke }
}
