import { useParams } from 'react-router-dom';
import { GithubUser } from './GithubUser';

export const ShowGitHubUser = () => {
    const { username } = useParams();

    return <GithubUser username={username} />;
};

