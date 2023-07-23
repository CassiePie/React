import { useLoaderData } from'react-router-dom'

export async function loadStarWarsPeople() {
    let result = await fetch('https://swapi.dev/api/people')
    let people = await result.json()

    return people.results
}

export default function StarWars() {

    const people = useLoaderData()

    console.log(people)

    return (
        <div>
            <div>
                {people.map((person) => ( 
                    <li>{person.name}</li>
                ))}
            </div>
        </div>
    )
}