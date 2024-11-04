export const createTable = (parentElement) => {
    let data;
    return {
      build: (dataInput) => {
        data = dataInput;
      },
      render: () => {
        let htmlTable = `<table> <th>Lunedì</th> <th>Martedì</th> <th>Mercoledì</th> <th>Giovedì</th> <th>Venerdì</th>`; //``
        htmlTable += data.map((row) => 
          "<tr>" + row.map((col) => 
            "<td>" + col + "</td>"
          ).join("")
        ).join("") + "</tr>";
        htmlTable += "</table";
        parentElement.innerHTML = htmlTable;
      }
    }
  }
  