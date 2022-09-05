import { Component, For } from 'solid-js'

import { repos, setUsername, username } from '@/App'
import RepoCard from '@/components/RepoCard'

const Home: Component = () => {
  const handleSubmit = (event: Event) => {
    event.preventDefault()
    const usernameInput = document.querySelector('#usernameInput') as HTMLInputElement
    setUsername(usernameInput.value)
  }

  return (
    <div>
      <form class="mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          autocomplete="false"
          class="p-1 align-middle"
          id="usernameInput"
          required
        />
        <button class="btn btn-dark ms-3 w-auto" type="submit">
          Fetch
        </button>
      </form>
      <h3>Github repos for {username()}</h3>
      <For each={repos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  )
}

export default Home
