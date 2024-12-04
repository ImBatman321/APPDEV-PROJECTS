import { useLocation } from "react-router-dom"

export default function Game() {
    const location = useLocation()
    const game = location.state.game;
    return(
        <>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
        </>
    )
}