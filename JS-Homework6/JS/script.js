//  Malce so pomos na cicko google ja napraviv, bitno ja razbrav.

function createTable()
{
    let num_rows = document.getElementById('rows').value;
    let num_cols = document.getElementById('cols').value;
    let theader = '<table border="1">\n';
    let tbody = '';

    for( let i = 0; i < num_rows; i++)
    {
        tbody += '<tr>';
        for( let y = 0; y < num_cols; y++)
        {
            tbody += '<td>';
            tbody += 'Cell ' + i + ',' + y;
            tbody += '</td>'
        }
        tbody += '</tr>\n';
    }
    let tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
}