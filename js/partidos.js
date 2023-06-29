fetch("partidos.json")
  .then((res) => res.json())
  .then((data) => {
    let principal = document.getElementById("main");
    data.forEach((item) => {
      let elemento = document.createElement("div");
      elemento.classList = "container-fecha";
      const day = Object.keys(item)[0];
      const matches = item[day];
      const date = item.date;
      elemento.innerHTML = `
      <div class="center-date">
      <h3>${date}</h3>
      </div>`;
      const imagenes = {
        "La Naranja Geriatrica": "./img/LNG.webp",
        "Carlinga": "./img/carlinga.webp",
        "Pablo & Los Sextos": "./img/generica.webp",
        "Rejunte FC": "./img/generica.webp",
        "Los PapiFootball": "./img/generica.webp",
        "Los Suplentes": "./img/suplentes.webp",
        "Whiscola F.C.C.": "./img/whiscola.webp",
        "All Inclusive F.C.": "./img/inclusive.webp",
        "Farola FC": "./img/farola.webp",
        "La Scaloneta": "./img/scaloneta.webp",
        "Sala Azul Remix": "./img/generica.webp",
      };

      matches.forEach((match) => {
        const { teamA, teamB, time, viewer } = match;
        let newElemento = document.createElement("div");
        newElemento.classList = "container-match";
        let imgA = imagenes[`${teamA}`];
        let imgB = imagenes[`${teamB}`];
        newElemento.innerHTML = `<table class="match">
        <tr>
            <td class="team"><img class="camiseta partido" src=${imgA} alt="camiseta">${teamA}</td>
            <td class="score"></td>
            <td class="score"></td>
            <td class="team">${teamB}<img class="camiseta partido" src=${imgB} alt="camiseta"></td>
        </tr>
        </table>
        <p>${time} hs</p>
        <p class="viewer">veedor: ${viewer}</p>`;
        elemento.append(newElemento);
      });
      principal.append(elemento);
    });
  });
