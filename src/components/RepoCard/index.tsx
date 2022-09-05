import { Component } from 'solid-js'

import { Repository } from '@/@types'
import { setSavedRepos } from '@/pages/SavedRepos/SavedRepos'

interface RepoCardProps {
  repo: Repository
}

const saveRepo = (repo: Repository) => {
  setSavedRepos((prev) => [repo, ...prev])
}

const RepoCard: Component<RepoCardProps> = (props) => {
  return (
    <div class="card">
      <div class="card-header">&#11088; stars: {props.repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={props.repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>{props.repo?.owner?.login}/</strong>
          {props.repo.name}
        </a>
        <p class="card-text">{props.repo.description}</p>
        <button class="btn btn-success" onClick={() => saveRepo(props.repo)}>
          Save
        </button>
      </div>
    </div>
  )
}

export default RepoCard
