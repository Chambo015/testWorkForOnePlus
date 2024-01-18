import './style.css';

const tableBody = document.getElementById('table_body');
const button = document.getElementById('fetch_data')

const fetchData = async () => {
    const res = await fetch('https://chambo015.github.io/testWorkForOnePlus/data.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if(res.ok) {
        const data = await res.json();
        console.log('@data', data);
        mountTableData(data)
    }
}
fetchData()


const mountTableData = (data) => {
    data.forEach(function(rowData, idx) {
        const row = document.createElement('tr');
        const cellId = document.createElement('td');
        const cellSymbol= document.createElement('td');
        const cellName= document.createElement('td');
        console.log(rowData.id);
        cellId.innerHTML = rowData.id
        cellSymbol.innerHTML = rowData.symbol
        cellName.innerHTML = rowData.name

        if(idx < 5) {
            row.style.background = 'blue'
        }
        if (rowData.symbol === 'usdt') {
            row.style.background = 'green'
        }

        row.append(cellId, cellSymbol, cellName);

        tableBody.append(row);
      });
}