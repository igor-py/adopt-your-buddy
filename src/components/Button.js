

function Button({onButtonClick}) {
    // #07B6D4
    const buttonClass = `my-4 rounded border border-black 
                        w-40 h-16 text-center bg-[#07B6D4]`

    const clickedButton = (event) => {
        onButtonClick();
    }

    return (
        <div className="flex flex-row justify-center">
            <button className={buttonClass} onClick={clickedButton}>Cadastrar Novo Pet</button>
        </div>
    )
}

export default Button
