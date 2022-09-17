// game important variable
const graphs = document.querySelectorAll('.graph');
let turn = 'x';
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal-box');
let statusBar = document.getElementById('status-bar');
statusBar.innerText = `turn for ${turn}`;

// function to change turn
const changeTurn = ()=> turn === 'x'? turn = 'o': turn = 'x';
const channgePlayerTurn = ()=>{
    const playerOne = document.getElementById('one');
    const playerTwo = document.getElementById('two');
    if(turn === 'o'){
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
            // change turn color
            if(graph.innerText === 'o'){
                graph.style.color = 'red';
            }else{
                graph.style.color = 'green';
            }
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
            modal.style.display = 'flex';
            setTimeout(function(){
                modalBox.style.transform = 'scale(1)';
           }, 200);
        }
    })
}

// reset game function
const reset = ()=>{
    graphs.forEach(graph =>{
        graph.innerText = '';
        statusBar.innerText = `turn for ${turn}`;
    });
    modalBox.style.transform = 'scale(0)';
    setTimeout(function(){
        modal.style.display = 'none';
   }, 200);
}