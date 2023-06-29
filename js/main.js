fetch('positions.json')
.then((res)=>res.json())
.then((data)=> {
    const posiciones = data.sort((equipoA, equipoB) =>
        equipoB.pts - equipoA.pts || equipoB.dg - equipoA.dg || equipoB.gf - equipoA.gf || equipoB.ge - equipoA.ge
    )
    
    let tabla = document.getElementById('posicionesID')
    let posicion = 1
    posiciones.forEach(equipo => {
        let elemento = document.createElement("tr")
        elemento.innerHTML = `
        <td class="centrado" scope="row">${posicion}</td>
                        <td><p><img class="camiseta" src=${equipo.img} alt="camiseta">${equipo.team}</p></td>
                        <td class="centrado"><strong>${equipo.pts}</strong></td>
                        <td class="centrado">${equipo.dg}</td>
                        <td class="centrado">${equipo.pj}</td>
                        <td class="centrado">${equipo.pg}</td>
                        <td class="centrado">${equipo.pe}</td>
                        <td class="centrado">${equipo.pp}</td>
                        <td class="centrado">${equipo.gf}</td>
                        <td class="centrado">${equipo.ge}</td>
        `
        posicion += 1
        tabla.append(elemento)
        
    });

})