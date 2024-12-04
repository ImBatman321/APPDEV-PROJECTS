import { Link } from "react-router-dom"
const games = [
    {id: 1, name: 'Teamfight Tactics', description: 'Best Auto Chess Game!'},
    {id: 2, name: 'Valorant', description: 'Most Popular FPS Game in the World!'},
    {id: 3, name: '2XKO', description: 'No.1 Tag Team Fighting Game!'},
    {id: 4, name: 'League of Legends', description: 'No.1 MOBA Game!'}
]
export default function Games() {
    return(
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        <Link to = {`/games/${game.id}`} state = {{game}}> <strong>{game.name}</strong> </Link>
                        - {game.description} 
                    </li>
                ))}   
            </ul>
        </>
    )
}