import useSWR from 'swr'

export function GithubUser() {

    const fetcher = (...args) => fetch(...args).then(response => response.json)

    const { data, error } = useSWR("https://api.github.com/users", fetcher)


    return (
        <div>
            {!data && !error && <h3>Loading...</h3>}
            {error && <h3>An error has occurred</h3>}

            {data && !error && <ul>
                {data.map(user => (
                    <li key={user.login}>{user.login}</li>
                ))}

            </ul>}
        </div>
    )
}


