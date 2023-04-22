async function getAdvice(){
    try{
        const api = 'https://api.adviceslip.com/advice'
        const response = await fetch(api)
        const data = await response.json()
        // console.log(data.slip.advice)
        const h1 = document.getElementById("h1Content")
        h1.textContent = data.slip.advice

    }catch(err){
        console.log(`DEU ERRO ${err}`)
    }
}

