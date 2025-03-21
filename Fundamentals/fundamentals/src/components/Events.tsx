const Events = () => {

    const handleMyEvent = () => {
        console.log("Clicou!")
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Outro click!")}>Clique aqui também!</button>
            </div>
        </div>
    )
}

export default Events;