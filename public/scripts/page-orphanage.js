const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// get values from HTML
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


// create map (id + geolocalização + zoom no mapa)
const map = L.map('mapid', options).setView([lat, lng], 15)

// add map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})



// create and set popup marker
L.marker([lat, lng], { icon })
    .addTo(map)



// Image Gallery

function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    // selecionar a imagem clicada
    const image = button.children[0]
    const imgDestaque = document.querySelector('.orphanage-details > img')

    // atualizar a imagem de destaque
    imgDestaque.src = image.src

    // adicionar a classe active ao botão clicado
    button.classList.add('active')
}