fetch("partidos.json")
  .then((res) => res.json())
  .then((data) => {
      let principal = document.getElementById('main')
    data.forEach((item) => {
      let elemento = document.createElement("div");
      elemento.classList = "container-fecha";
      const day = Object.keys(item)[0];
      const matches = item[day];
      const date = item.date;
      elemento.innerHTML = `<h3>${date}</h3>`;

      matches.forEach((match) => {
        const { teamA, teamB, time, viewer } = match;
        let newElemento = document.createElement("div");
        newElemento.classList = "container-match";
        newElemento.innerHTML = `<table class="match">
        <tr>
            <td class="team">${teamA}</td>
            <td class="score"></td>
            <td class="score"></td>
            <td class="team">${teamB}</td>
        </tr>
        </table>
        <p>${time} hs</p>
        <p>veedor: ${viewer}</p>`;
        elemento.append(newElemento)
      });
      principal.append(elemento)
      
    });
  });
