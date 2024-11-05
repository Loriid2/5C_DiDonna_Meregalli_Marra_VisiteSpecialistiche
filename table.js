export const createTable = (parentElement) => {
  let data;

  return {
      build: (dataInput) => {
          const giorniSettimana = ["Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi"];
          const oreDesiderate = [8, 9, 10, 11, 12];

          const oreGiorni = Array.from({ length: 5 }, () => Array(5).fill(""));

          dataInput.forEach((a) => {
              const colonna = giorniSettimana.indexOf(a.giorno);
              const riga = oreDesiderate.indexOf(a.ora);
              if (colonna >= 0 && riga >= 0) {
                  oreGiorni[riga][colonna] = a.nome;
              }
          });

          data = oreGiorni;
      },
      render: () => {
          let htmlTable = `<table border="1"> 
              <tr>
                  <th>Ora</th>
                  <th>Lunedì</th> 
                  <th>Martedì</th> 
                  <th>Mercoledì</th> 
                  <th>Giovedì</th> 
                  <th>Venerdì</th>
              </tr>`;

          const oreDesiderate = [8, 9, 10, 11, 12];
          htmlTable += data.map((row, index) => 
              `<tr>
                  <td>${oreDesiderate[index]}:00</td>` + 
                  row.map((col) => `<td>${col || ""}</td>`).join("") +
              `</tr>`
          ).join("");

          htmlTable += "</table>";
          
          parentElement.innerHTML = htmlTable;
      }
  };
};
