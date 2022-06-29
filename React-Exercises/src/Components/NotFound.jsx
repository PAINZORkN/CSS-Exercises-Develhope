import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div>
            <h3>Error, not found</h3>
            <Link to="/">Home</Link>
        </div>
    )
}