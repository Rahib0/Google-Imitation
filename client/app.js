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
        let footer = document.createElement('footer')
        let h4 = document.createElement('h4')
        let p = document.createElement('p')
        footer.className=`${i}`
        h4.className=`${i}`
        p.className=`${i}`
        footer.textContent =resultsList[i]['url']
        h4.textContent =resultsList[i]['title']
        p.textContent =resultsList[i]['body']
        document.body.append(footer) 
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


//     fetch(`http://localhost:3000/resultsList`)
//       .then(resp => resp.text())
//       .then(result => document.getElementById('results').textContent = result)
//       .then(document.querySelector('.homepage').style.display = 'none')
//       .then(document.body.style.display = 'block')
//       .then(    
//           for(let i =0; i<=resultsList.length -1; i++){
//         let footer = document.createElement('footer')
//         let h4 = document.createElement('h4')
//         let p = document.createElement('p')
//         footer.className=`${i}`
//         h4.className=`${i}`
//         p.className=`${i}`
//         footer.textContent =resultsList[i]['url']
//         h4.textContent =resultsList[i]['title']
//         p.textContent =resultsList[i]['body']


//         document.body.append(footer) 
//         document.body.append(h4) 
//         document.body.append(p))
// }

// function getResults(e) {
//     e.preventDefault()
//     document.querySelector('.homepage').style.display = 'none'
//     for(let i =0; i<=resultsList.length -1; i++){
//         let footer = document.createElement('footer')
//         let h4 = document.createElement('h4')
//         let p = document.createElement('p')
//         footer.className=`${i}`
//         h4.className=`${i}`
//         p.className=`${i}`
//         footer.textContent =resultsList[i]['url']
//         h4.textContent =resultsList[i]['title']
//         p.textContent =resultsList[i]['body']


//         document.body.append(footer) 
//         document.body.append(h4) 
//         document.body.append(p)
//     }
//     document.body.style.display = 'block'



