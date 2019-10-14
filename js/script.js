window.onload = function() {


    // Hide playing pieses for class=pieces1 and class=pieces2
    function hidePlayingPieces() {
        document.querySelectorAll('.pieces1').forEach(function(el) {
            el.style.display = 'none';
        });

        document.querySelectorAll('.pieces2').forEach(function(el) {
            el.style.display = 'none';
        });

        const hidePlayAgainButton = document.querySelector('#playAgain');
        hidePlayAgainButton.style.display = 'none';

    }
    hidePlayingPieces();

    // Add an event listener for when
    // Player One enters name and then
    // Player One hits submit
    // When player submits name, the name appears inplace of "Player One"
    document.querySelector("#submit1").addEventListener("click", function(e) {
        e.preventDefault();
        const changeName = document.getElementById('nameP1').value;
        document.getElementById("playOne").innerHTML = changeName;
        hideFormForPlayerOne();
    });
    // class formPlayerOne dissapear
    function hideFormForPlayerOne() {
        const formPlayerOne = document.querySelector('.formPlayerOne');
        formPlayerOne.style.display = 'none';
        displayPlayingPiecesOne();
    };
    //Display playing pieces for player one
    function displayPlayingPiecesOne() {
        document.querySelectorAll('.pieces1').forEach(function(el) {
            el.style.display = 'grid';
        });

    }


    // Player Two enters name
    // Player Two hits submit
    // When player submits name, the name appears inplace of "Player Two"
    document.querySelector("#submit2").addEventListener("click", function(e) {
        e.preventDefault();
        const changeName = document.getElementById('nameP2').value;
        document.getElementById("playTwo").innerHTML = changeName;
        hideFormForPlayerTwo();
    });
    // class formPlayerTwo dissapear
    function hideFormForPlayerTwo() {
        const formPlayerTwo = document.querySelector('.formPlayerTwo');
        formPlayerTwo.style.display = 'none';
        displayPlayingPiecesTwo();
    };
    //Display playing pieces for player two
    function displayPlayingPiecesTwo() {
        document.querySelectorAll('.pieces2').forEach(function(el) {
            el.style.display = 'grid';
        });
        displayPlayAgainButton();
    }

    function displayPlayAgainButton() {
        const hidePlayAgainButton = document.querySelector('#playAgain');
        hidePlayAgainButton.style.display = 'inline';
    }
    //--------------MAKING BOXES DRAGGABLE-----------------
    //https://css-tricks.com/creating-a-parking-game-with-the-html-drag-and-drop-api/
    let dragged; // Keeps track of what's being dragged - we'll use this later! 

    // Adding event listeners
    const gamePieces = document.querySelectorAll('.pieces');
    gamePieces.addEventListener('dragstart', onDragStart);
    gamePieces.addEventListener('dragend', onDragEnd);


    function onDragStart(event) {
        let target = event.target;
        if (target && target.nodeName === 'IMG') { // If target is an image
            dragged = target;
            event.dataTransfer.setData('text', target.id);
            event.dataTransfer.dropEffect = 'move';
            // Make it half transparent when it's being dragged
            event.target.style.opacity = .3;
        }
    }

    function onDragEnd(event) {
        if (event.target && event.target.nodeName === 'IMG') {
            // Reset the transparency
            event.target.style.opacity = ''; // Reset opacity when dragging ends 
            dragged = null;
        }
    }

    //when dropping boxes in another container

    const dropZone = document.querySelector('.gameBoard');
    dropZone.addEventListener('drop', onDrop);
    dropZone.addEventListener('dragenter', onDragEnter);
    dropZone.addEventListener('dragleave', onDragLeave);
    dropZone.addEventListener('dragover', onDragOver);


    function onDragOver(event) {
        // Prevent default to allow drop
        event.preventDefault();
    }

    function onDragLeave(event) {
        event.target.style.background = '';
    }

    function onDragEnter(event) {
        const target = event.target;
        if (target) {
            event.preventDefault();
            // Set the dropEffect to move
            event.dataTransfer.dropEffect = 'move'
            target.style.background = '#1abc9c';
        }
    }

    function onDrop(event) {
        const target = event.target;
        if (target) {
            target.style.backgroundColor = '';
            event.preventDefault();
            // Get the id of the target and add the moved element to the target's DOM
            dragged.parentNode.removeChild(dragged);
            dragged.style.opacity = '';
            target.appendChild(dragged);
        }
    }
    // If both players have hit the submit button
    // Both P1 and P2’s playing pieces appear 
    // Change the class from none to display

    // A message appears on each side of the  screen to click and drag piece to board

    // When the P1 clicks and drags the piece to the board, the message disappears

    // When the P2 clicks and drags the piece to the board, the message disappears

    // As P1 is choosing a piece, use a hoover effect to make the square light up
    // When P1 releases the click, the play is entered and it is P2’s turn.

    // As P1 is choosing a piece, use a hover effect to make the square light up
    // When P2 releases the click, the play is entered and it is P1’s turn.

    // When it is P1’s turn, Their side of the board lights up.
    // P2’s side of the board gets darker

    // When it is P2’s turn, Their side of the board lights up.
    // P1’s side of the board gets darker

    // If a player tries to play out of turn, their playing piece will return to it’s original spot 
    // An alert will appear that they can’t play out of turn.

    // When someone wins, the three boxes change color and a large message of “Player ___ Wins!” Pops up.
    // If it is a draw, a picture of a cat pops up
    // There is a play again button that resets the player peaces, but not the names of the players.

    // The solution:
    // Add an event listener to the boxes that runs a solution function when the mouse is released
    // In the function, run a switch statement that  checks to see if the boxes match
    // If they match, it is a win
    // A message pops up that player___ won!

    // If they don’t match
    // Continue the game

};