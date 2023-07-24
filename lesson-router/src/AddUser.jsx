import { useNavigate } from 'react-router-dom'

export default function AddUser() {

const navigate = useNavigate()

    return (
        <div>
            <form>
                ...
                <button type='submit'>Submit</button>
                <button type='button' onClick={() => navigate(-1)}>Cancel</button>
            </form>
        </div>
    )
}