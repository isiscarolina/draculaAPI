let apiBase = 'https://api.github.com/'
let user = prompt('insira usuario  GitHub')
let endpoint = `users/${user}/repos`

let requestUrl = apiBase + endpoint



function mostrarRepos(repos) {
    let container = document.querySelector('#repositorios')
    
    for ( let repo of repos ) {  //  -----   html
        let card = document.createElement('a')
        card.textContent = repo.name        
        card.href = repo.link
        card.target = 'blank'
        card.rel = 'noopener'
        card.classList.add('card')
        container.appendChild(card)
    }
    
}

fetch(requestUrl)
.then(response => {
    if (response.ok) {
        return response.json()
    }
})
.then(data => {
    let repos = []
    data.forEach(repo => {
        repos.push({
            name: repo.name,
            link: repo.html_url
        })
    })
    mostrarRepos(repos)
})



// function confirmarNombre(nome) {
//     if (nome.split(' ').length > 1) {
//         return true
//     }
//     return false
// }

// function formulario() {
//     let nome = document.querySelector('#nome').value
//     let submitButton = document.querySelector('button[type=submit]')
//     if (confirmarNombre(nome)) {
//         submitButton.disabled = false
//     } else {
//         submitButton.disabled = true
//     }
// }

// document.querySelector('#nome').addEventListener('change', formulario)


