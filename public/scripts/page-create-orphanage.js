//var getLocation = require('./geolocation')
//console.log(getLocation.lat + ',' + getLocation.lng)
// create map (id + geolocalização + zoom no mapa)
const map = L.map('mapid').setView([-19.8298313,-43.9486868], 15)


// add map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

// create and add marker

let marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    // select and add lat e lng to data form
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon (if there is)
    marker && map.removeLayer(marker)

    // add icon
    marker = L.marker([lat, lng], { icon })
              .addTo(map)
})


// Adicionar o campo  de fotos
function addPhotosField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')

    // Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    // Realizar a duplicação da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo (de inserir link de imagem) está vazio, se sim não adicionar novo campo
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return  alert('Gentileza inserir o link da foto')
    }

    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

// Deletar e limpar campos de fotos
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length < 2) {
    // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove()
}

// Selecionar o botão SIM ou NÃO
function toggleSelect(event) {

    // Seleconar e retirar a classe active de todos .button-select button
    const twoButtons = document.querySelectorAll('.button-select button')
    
    twoButtons.forEach((button) => button.classList.remove('active'))

    // Inserir a classe active no botão clicado
    const buttonActive = event.currentTarget
    buttonActive.classList.add('active')

    // Atualizar o input hidden com o valor selecionado
    const inputHidden = document.querySelector('[name="open_on_weekends"]')
    inputHidden.value = buttonActive.dataset.value   
}

// Validação do formulário
function validate(event) {

    // Validar se lat e lng estão preenchidos
    const needsLatAndLng = false
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
}