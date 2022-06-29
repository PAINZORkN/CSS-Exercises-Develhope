import { useGithubUser } from "./UseGithubUser"

export function GithubUser({ username }) {

    const { loading, error, data } = useGithubUser(username)

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1>{data.name}</h1>}
        </div>
    )
}
