fetch('partidos.json')
.then((res)=>res.json())
.then((data)=> {

    let fechas = data.map(fecha => {
        for (let n = 1; n < 3; n++){
            fecha[4] === n
        }
    })
    
    console.log (fechas)
    
    data.forEach(partido => {
        let elemento = document.createElement('div')        
        elemento.classList = "container-fecha"
    });
})