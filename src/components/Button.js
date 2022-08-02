

/*
Ainda falta colocar um parâmetro para cor e um para os tamanhos dos botões
*/
function Button({onButtonClick, label, color}) {
    // #07B6D4
    const buttonClass = `my-4 rounded border border-black 
                        w-40 h-16 text-center ${color}`

    const clickedButton = (event) => {
        onButtonClick();
    }

    return (
        <div className="flex flex-row justify-center">
            <button className={buttonClass} onClick={clickedButton}>{label}</button>
        </div>
    )
}

export default Button
