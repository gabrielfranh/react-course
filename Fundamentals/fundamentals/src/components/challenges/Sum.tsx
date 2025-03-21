const Sum = () => {
    const first = 1
    const second = 2

    const Somar = (first: number, second: number) => {
        console.log(first+second)
    }

    return (
        <div>
            <p>O primeiro número é: {first}</p>
            <p>O segundo número é: {second}</p>
            <button onClick={() => Somar(first, second)}>Clique para somar!</button>
        </div>
    )
}

export default Sum;