const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid').setView([-15.7910668,-47.8948427], 13);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// create abd add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// add  photos link
function addPhotoField () {
    // get photo container id = #images
    const container = document.querySelector('#images')
    // duplicate photo container class = .new-upload
    const uploads = document.querySelectorAll('.new-upload')
    // clone last added image
    const newUpload = uploads[uploads.length - 1].cloneNode(true)

    // verify if field is empty
    const input = newUpload.children[0]

    if(input.value == ""){
        return
    }
    
    // clean field before adding to photo container
    input.value = ""

    // add clone to #images container
    container.appendChild(newUpload)
}

function deleteField(event) {
    const span = event.currentTarget

    const uploads = document.querySelectorAll('.new-upload')

    if(uploads.length < 2) {
        // clean field's value
        span.parentNode.children[0].value = ""

        return
    }

    // delete field
    span.parentNode.remove();

}

// select yes or no buttons
function toggleSelect(event){

    // remove the .active class from buttons
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // another possibility for writting the function: .forEach((button) => button.classList.remove('active'))
    // .forEach(function(button) => button.classList.remove('active'))

    // turn on .active class
    const button = event.currentTarget
    button.classList.add('active')
    
    // att input hidden with the selected value
    const input = document.querySelector('[name="open-on-weekends"]')
    
    input.value = button.dataset.value

}

function validate(event){

    //validar se lat e lng estão preenchidos
    /*const la = document.querySelector('[name="lat"]')
    const ln= document.querySelector('[name="lng"]')

    la && ln == '' ? event.preventDeult() : true*/

    event.preventDeult()
    alert('Preencha todos os campos')
}