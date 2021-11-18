const form = document.querySelector('form')



form.addEventListener('submit', getResults)
document.querySelector('#lucky').addEventListener('click', getOneResult)

async function getResults(e) {
    e.preventDefault()
    let search = document.querySelector('#search-bar').value
    let res = await fetch(`http://localhost:3000/${search}`)
    let resultsList = await res.json()
    console.log(resultsList)
    if( resultsList.error){
        document.body.style.display = 'block'
        document.querySelector('.homepage').style.display = 'none'
        let error = document.createElement('p')
        error.textContent = resultsList.error;
        document.body.append(error)
        return 
    }
    resultsList.sort(function(a, b) {
        return b.rank - a.rank;
    })
    for(let i =0; i<=resultsList.length -1; i++){
        let a = document.createElement('a')
        let h4 = document.createElement('h4')
        let p = document.createElement('p')
        a.className=`${i}`
        h4.className=`${i}`
        p.className=`${i}`
        a.textContent =resultsList[i]['url']
        a.setAttribute("href", `${resultsList[i]['url']}`)
        h4.textContent =resultsList[i]['title']
        p.textContent =resultsList[i]['body']
        document.body.append(a) 
        document.body.append(h4) 
        document.body.append(p)
        document.body.style.display = 'block'
        document.querySelector('.homepage').style.display = 'none'
}
}

async function getOneResult(e){
    e.preventDefault()
    let search = document.querySelector('#search-bar').value
    console.log(search)
    let res = await fetch(`http://localhost:3000/${search}`)
    let resultsList = await res.json()
    resultsList.sort(function(a, b) {
        return b.rank - a.rank;
    })
    console.log(resultsList)
    await window.location.replace(`${resultsList[0].url}`)
}
