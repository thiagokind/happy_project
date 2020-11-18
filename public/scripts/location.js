const http = require("https")


function geoloc(){

  var options = {
    "method": "GET",
    "hostname": "freegeoip.app",
    "port": null,
    "path": "/json/",
    "headers": {
      "accept": "application/json",
      "content-type": "application/json"
    }
  }
  
  var req = http.request(options, function (res) {
    var chunks = []
    
    res.on("data", function (chunk) {
      chunks.push(chunk)
    })
    
    res.on("end", function () {
      //var x = document.getElementById('city')
      var body = Buffer.concat(chunks)
      var obj = JSON.parse(body)
      //console.log(body.toString()) // Retorna todos dados buscados em JSON
      console.log(obj) // Retorna todos dados buscados em Objeto
      //console.log(`${obj.latitude},${obj.longitude}`)
      //console.log(obj.city)
      //console.log(obj.region_name)
      
      //x.innerHTML = obj.city
      
      //const cidade = document.getElementById("city");
      //const uf = document.getElementById('uf')
      //cidade.innerHTML = obj.city;
      //uf.innerHTML = obj.region_name
      
      //const geoloc = document.getElementById('city')
  })
})

req.end()

}

geoloc()
//
//module.exports = geoloc