
let turnNumber=1
let board=3
let victoria=false
//Iniciar la pagina
window.onload = () => {
    console.log('loaded')
    showBoard(3)
}
//Pintar el tablero
function showBoard(size) {
grow.innerHTML='';
    for (let i =0; i < size; i++) {
        let row = document.createElement('div')
        row.className='row'
        for (let j = 0 ;j < size ;j++) {
            let cell= document.createElement('div')
            cell.className='cell'
            cell.id=[i] + '-' + [j]
            cell.datapoints='0'
            row.appendChild(cell)
        }
        grow.appendChild(row)
    }
    let cells = document.getElementsByClassName('cell')
    for(const cell of cells){
        cell.onclick=clickMe
    }
}
//Jugada
function clickMe(event) {
    if (!victoria) {
        if (event.target.className==='cell') {
            let turn = document.getElementById('turn')
            if (turn.className==='turn-cell-o') {
            event.target.className='cell-o'
            turn.className='turn-cell-x'
            } else {
                event.target.className='cell-x'
                turn.className='turn-cell-o'
            }
            printMovement(event)
        }
    }
}
//Checkear victoria X
function checkWinX() {
    let coincidencias=0
    //Check fila
    for (let i = 0; i < board; i++) {
        for (let j = 0; j < board; j++) {
            if (document.getElementById([i]+'-'+[j]).className === 'cell-x'){
                coincidencias++
            }
        }
        if (coincidencias==board) {
            console.log('Gana X')
            victoria=true
        }
        coincidencias=0
    }
    //Check columna
    for (let j = 0; j < board; j++) {
        for (let i = 0; i < board; i++) {
            if (document.getElementById([i]+'-'+[j]).className === 'cell-x'){
                coincidencias++
            }
        }
        if (coincidencias==board) {
            console.log('Gana X')
            victoria=true
        }
        coincidencias=0
    }
    //Check diagonal positiva
    let x=0
    let y=0
    for (let i = 0; i < board; i++) {
        if (document.getElementById([x]+'-'+[y]).className === 'cell-x'){
            coincidencias++
        }
        if (coincidencias==board) {
            console.log('Gana X')
            victoria=true
        }
        x++
        y++
    }
    coincidencias=0
    //Check diagonal negativa
    let xx=board-1
    let yy=0
    for (let i = 0; i < board; i++) {
        if (document.getElementById([xx]+'-'+[yy]).className === 'cell-x'){
            coincidencias++
        }
        if (coincidencias==board) {
            console.log('Gana X')
            victoria=true
        }
        xx--
        yy++
    }
    coincidencias=0
}
//Check victoria O
function checkWinO() {
    let coincidencias=0
    //Check fila
    for (let i = 0; i < board; i++) {
        for (let j = 0; j < board; j++) {
            if (document.getElementById([i]+'-'+[j]).className === 'cell-o'){
                coincidencias++
            }
        }
        if (coincidencias==board) {
            console.log('Gana O')
            victoria=true
        }
        coincidencias=0
    }
    //Check columna
    for (let j = 0; j < board; j++) {
        for (let i = 0; i < board; i++) {
            if (document.getElementById([i]+'-'+[j]).className === 'cell-o'){
                coincidencias++
            }
        }
        if (coincidencias==board) {
            console.log('Gana O')
            victoria=true
        }
        coincidencias=0
    }
    //Check diagonal positiva
    let x=0
    let y=0
    for (let i = 0; i < board; i++) {
        if (document.getElementById([x]+'-'+[y]).className === 'cell-o'){
            coincidencias++
        }
        if (coincidencias==board) {
            console.log('Gana O')
            victoria=true
        }
        x++
        y++
    }
    coincidencias=0
    //Check diagonal negativa
    let xx=board-1
    let yy=0
    for (let i = 0; i < board; i++) {
        if (document.getElementById([xx]+'-'+[yy]).className === 'cell-o'){
            coincidencias++
        }
        if (coincidencias==board) {
            console.log('Gana O')
            victoria=true
        }
        xx--
        yy++
    }
    coincidencias=0
}
//Mostrar movimiento
function printMovement(event) {
    let player = event.target.className==='cell-x' ? 'X':'O'
    let parent = document.querySelector('tbody')
    let tr = document.createElement('tr')
    let tdTurn = document.createElement('td')
    let tdMove = document.createElement('td')
    let tdPlayer = document.createElement('td')
    tdTurn.innerText=turnNumber
    tdMove.innerText=event.target.id
    tdMove.id='turn'+turnNumber
    tdPlayer.innerText=player
    tr.id=turnNumber
    tr.appendChild(tdTurn)
    tr.appendChild(tdMove)
    tr.appendChild(tdPlayer)
    parent.appendChild(tr)
    turnNumber++
    checkWinX()
    checkWinO()
}
//Deshacer movimiento
function undo() {
    let remove= turnNumber-1
    let deleteCell=document.getElementById('turn'+remove).innerText
    let cell=document.getElementById(deleteCell)
    cell.className='cell'
    let lastMove=document.getElementById(remove)
    let tbody=document.querySelector('tbody')
    tbody.removeChild(lastMove)
    let player= document.getElementById('turn')
    if (player.className==='turn-cell-o') {
        player.className='turn-cell-x'
        } else {
            player.className='turn-cell-o'
        }
    victoria=false
    turnNumber--;
}
//Resetear tablero
function reset(num) {
    let cellsx = document.getElementsByClassName('cell-x')
    let cellso = document.getElementsByClassName('cell-o')
    var arrx = Array.from(cellsx);
    var arro = Array.from(cellso);
    arrx.forEach(cellx => {
        cellx.className='cell'
    });
    arro.forEach(cello => {
        cello.className='cell'
    });
    turnNumber=1
    tbody=document.querySelector('tbody')
    tbody.innerHTML='';
    board=num
    victoria=false
    showBoard(num)
}