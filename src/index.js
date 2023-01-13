let turnNumber=1
window.onload = () => {
    console.log('loaded')
    showBoard(3)
}
function showBoard(size) {
grow.innerHTML='';
    for (let i =0; i < size; i++) {
        let row = document.createElement('div')
        row.className='row'
        for (let j = 0 ;j < size ;j++) {
            let cell= document.createElement('div')
            cell.className='cell'
            cell.id=[i] + '-' + [j]
            row.appendChild(cell)
        }
        grow.appendChild(row)
    }
    let cells = document.getElementsByClassName('cell')
    for(const cell of cells){
        cell.onclick=clickMe
    }
}
function clickMe(event) {
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
        checkWin(event)
    }
}
function checkWin(event) {
    console.log(event.id.substring(0,2))
}

function printMovement(event) {
    let player = event.target.className==='cell-x' ? 'X':'O'
    let parent = document.querySelector('tbody')
    let tr = document.createElement('tr')
    let tdTurn = document.createElement('td')
    let tdMove = document.createElement('td')
    let tdPlayer = document.createElement('td')
    tdTurn.innerText=turnNumber
    tdMove.innerText=event.target.id
    tdPlayer.innerText=player
    tr.appendChild(tdTurn)
    tr.appendChild(tdMove)
    tr.appendChild(tdPlayer)
    parent.appendChild(tr)
    turnNumber++
}

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
    showBoard(num)
}