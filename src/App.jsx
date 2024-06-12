import './App.css'
import { useState } from 'react'
import { useJoke } from './hook/useJoke.js'

export function App () {
  const [jokeType, setJokeType] = useState('general')
  const { joke, punchline, newJoke } = useJoke(jokeType)

  const handleClick = () => {
    newJoke()
  }

  const handleChange = (e) => {
    const newJokeType = e.target.value
    setJokeType(newJokeType)
  }

  return (
    <main className='container'>
      <header className='header-app'>
        <h1>Jokes App</h1>
        {
          joke &&
            <>
              <label className='label-joke-type' htmlFor='joke-type'>Joke Type</label>
              <select className='select-joke-type' name='joke-type' id='joke-type' onChange={handleChange}>
                <option value='general'>General</option>
                <option value='programming'>Programming</option>
                <option value='knock-knock'>Knock-Knock</option>
                <option value='dad'>Dad</option>
              </select>
            </>
        }
      </header>
      {
        joke &&
          <>
            <div className='container-joke'>
              <h1 className='text joke'>{joke}</h1>
              <h1 className='text punchline'>{punchline}</h1>
            </div>
            <div className='new-joke'>
              <button className='new-joke-button' onClick={handleClick}>New Joke</button>
            </div>
          </>
      }
    </main>
  )
}
