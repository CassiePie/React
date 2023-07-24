import { useParams } from 'react-router-dom'

export default function UserDetails() {

    const { username } = useParams()

    return (
        <div>
            <h1>{ username }</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, aperiam!</p>
        </div>
    )
}