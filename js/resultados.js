fetch("resultados.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
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
        "Pablo & Los Sextos": "./img/sextos.webp",
        "Rejunte FC": "./img/rejunte.webp",
        "Los PapiFootball": "./img/papifootball.webp",
        "Los Suplentes": "./img/suplentes.webp",
        "Whiscola F.C.C.": "./img/whiscola.webp",
        "All Inclusive F.C.": "./img/inclusive.webp",
        "Farola FC": "./img/farola.webp",
        "La Scaloneta": "./img/scaloneta.webp",
        "Sala Azul Remix": "./img/azul.webp",
      };

      matches.forEach((match) => {
        const { teamA, teamB, scoreA, scoreB } = match;
        let newElemento = document.createElement("div");
        newElemento.classList = "resultados-container-match";
        let imgA = imagenes[`${teamA}`];
        let imgB = imagenes[`${teamB}`];
        newElemento.innerHTML = `<table class="match-resultado">
        <tr class="tr-resultados">
            <td class="team"><img class="camiseta partido" src=${imgA} alt="camiseta">${teamA}</td>
            <td class="score">${scoreA}</td>
            <td class="score">${scoreB}</td>
            <td class="team">${teamB}<img class="camiseta partido" src=${imgB} alt="camiseta"></td>
        </tr>
        </table>`;
        elemento.append(newElemento);
      });
      principal.append(elemento);
    });
  });
