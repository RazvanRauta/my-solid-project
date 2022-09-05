import { Component, createSignal, For } from 'solid-js'

import { Repository } from '@/@types'
import RepoCard from '@/components/RepoCard'

const [savedRepos, setSavedRepos] = createSignal<Repository[]>([])

const SavedRepos: Component = () => {
  return (
    <div>
      <h2>Your saved repos</h2>
      <For each={savedRepos()}>{(repo) => <RepoCard repo={repo} />}</For>
    </div>
  )
}

export { savedRepos, setSavedRepos }

export default SavedRepos
