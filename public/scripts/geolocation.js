//window.onload = 
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        alert('Geolocation is not supported by this browser.')
    }
}
  

function showPosition(position) {
    var x = document.getElementById('city')
    var geoloc = `${position.coords.latitude},${position.coords.longitude}`
    alert(geoloc)
    console.log(geoloc)
    x.innerHTML = geoloc
    return geoloc
}

//var getLocation = {
    //    lat: -19.8298313,
    //    lng: -43.9486868
    //}

module.exports = getLocation