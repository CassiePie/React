import { Link, Outlet } from 'react-router-dom'

export default function Users() {
    return (
        <div>
                <p>
                    <li><Link to='add'>Add new user</Link></li>
                </p>
            <ul>
                <li><Link to='bert'>Bert</Link></li>
                <li><Link to='nico'>Nico</Link></li>
                <li><Link to='sandro'>Sandro</Link></li>
            </ul>

            <div>
                <Outlet />
            </div>
        </div>
    )
}