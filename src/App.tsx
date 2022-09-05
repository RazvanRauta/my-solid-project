/* eslint-disable @typescript-eslint/no-floating-promises */
import { Route, Routes } from 'solid-app-router'
import { Component, createEffect, createSignal } from 'solid-js'

import Nav from '@/components/Nav'
import Home from '@/pages/Home/Home'
import SavedRepos from '@/pages/SavedRepos/SavedRepos'

import { Repository } from './@types'

const [username, setUsername] = createSignal('RazvanRauta')
const [repos, setRepos] = createSignal<Repository[]>([])

const fetchRepos = async () => {
  try {
    const data = (await fetch(
      `https://api.github.com/users/${username()}/repos?sort=created`
    ).then(async (res) => await res.json())) as Repository[]
    if (Boolean(data) && data.length > 0) {
      setRepos(data)
    }
  } catch (err) {
    console.error(err)
  }
}

createEffect(() => {
  fetchRepos()
})

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savedrepos" element={<SavedRepos />} />
      </Routes>
    </div>
  )
}

export { repos, setUsername, username }

export default App
