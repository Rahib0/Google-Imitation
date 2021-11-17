const form = document.querySelector('form')
let resultsList = [
    { url: "https://www.youtube.com/", title: "Youtube", body: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.", index: 0, rank: 0 },
    { url: "https://twitter.com", title: "Twitter", body: "like and subscribe.", index: 1, rank: 2 },
    { url: "https://en.wikipedia.org", title: "Wikipedia", body: "Let's get some learning going on", index: 3, rank: 2 }
]


form.addEventListener('submit', getResults)
document.querySelector('#lucky').addEventListener('click', getOneResult)

async function getResults(e) {
    e.preventDefault()
    let search = document.querySelector('#search-bar').value
    console.log(search)
    let res = await fetch(`http://localhost:3000/${search}`)
    let resultsList = await res.json()
    resultsList.sort(function(a, b) {
        return b.rank - a.rank;
    })
    console.log(resultsList)
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
