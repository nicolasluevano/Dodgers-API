document.querySelector('button').addEventListener('click', getPlayer)

async function getPlayer(){
    let playerName = document.querySelector('input').value.toLowerCase()
    try{
        const res = await fetch(`http://localhost:8000/api/dodgers/${playerName}`)
        const data = await res.json()
    
        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('.number').innerText = data.number
        document.querySelector('img').src = data.imageURL
        document.querySelector('file-img').src = data.image
        document.querySelector('.position').innerText = data.position
        document.querySelector('.song').innerText = data.song
    }catch(err){
        console.log(err)
    }
   
}