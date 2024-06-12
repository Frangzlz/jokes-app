export async function getJoke (jokeType) {
  const res = await fetch(`https://official-joke-api.appspot.com/jokes/${jokeType}/random`)
  const data = await res.json()
  const { setup, punchline } = data[0]
  return [setup, punchline]
}
