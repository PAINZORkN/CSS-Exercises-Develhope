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


/*
Extract the logic to fetch a Github user's data 
from the GithubUser component from useEffect 03 into 
a custom hook called useGithubUser.
*/