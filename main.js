// game important variable
const graphs = document.querySelectorAll('.graph');
let turn = 'X';
let statusBar = document.getElementById('status-bar');
statusBar.innerText = `turn for ${turn}`;

// function to change turn
const changeTurn = ()=> turn === 'X'? turn = '0': turn = 'X';
const channgePlayerTurn = ()=>{
    const playerOne = document.getElementById('one');
    const playerTwo = document.getElementById('two');
    if(turn === '0'){
        playerOne.classList.add("active-player");
        playerTwo.classList.remove("active-player");
    }else{
        playerTwo.classList.add("active-player");
        playerOne.classList.remove("active-player");
    }
}
channgePlayerTurn();

// all boxes EventListener
graphs.forEach(graph =>{
    graph.addEventListener('click', ()=>{
        statusBar.innerText = `turn for ${turn}`;
        if(graph.innerText === ''){
            changeTurn();
            channgePlayerTurn();
            graph.innerText = turn;
        }
        checkWin();
    })
});

// function to check win
function checkWin(){
    const graphs = document.querySelectorAll('.graph');
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(win =>{
        if((graphs[win[0]].innerText === graphs[win[1]].innerText) && (graphs[win[2]].innerText === graphs[win[1]].innerText) && graphs[win[0]].innerText !== ''){
            statusBar.innerText = `${graphs[win[0]].innerText} won`;
        }
    })
}

// reset game function
const reset = ()=>{
    graphs.forEach(graph =>{
        graph.innerText = '';
        statusBar.innerText = `turn for ${turn}`;
    });
}