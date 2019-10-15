window.onload = function() {

    let turn = 1;


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
        const changeName1 = document.getElementById('nameP2').value;
        document.getElementById("playTwo").innerHTML = changeName1;
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

    //Add event listener to the play again button and clear the board

    document.querySelector('#playAgain').addEventListener("click", function() {
        location.reload();
    });
    //--------------MAKING BOXES DRAGGABLE-----------------
    //https://css-tricks.com/creating-a-parking-game-with-the-html-drag-and-drop-api/
    let dragged; // Keeps track of what's being dragged - we'll use this later! 

    // Adding event listeners
    const gamePieces = document.querySelector('.pieces1');
    gamePieces.addEventListener('dragstart', onDragStart);
    gamePieces.addEventListener('dragend', onDragEnd);


    const gamePieces2 = document.querySelector('.pieces2');
    gamePieces2.addEventListener('dragstart', onDragStart);
    gamePieces2.addEventListener('dragend', onDragEnd);


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
    //Add event listeners for dragging and dropping

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
            console.log(dragged);
            //assign the value of the dragged item.
            const piece = dragged.getAttribute('class');
            console.log("piece = ", piece);
            const div = dragged.closest("div");
            console.log("div =", div);
            const boxid = div.getAttribute('id');
            console.log("id = ", boxid);
            //Run the checkAnswer() function.
            checkAnswer();
        }
    }
    //-------------checking the answer and assigning variables to the x's and o's---------

    function checkAnswer() {
        //Set the imgBoxes to null
        let imgBox1 = null;
        let imgBox2 = null;
        let imgBox3 = null;
        let imgBox4 = null;
        let imgBox5 = null;
        let imgBox6 = null;
        let imgBox7 = null;
        let imgBox8 = null;
        let imgBox9 = null;
        // Assign the value of the boxes to the id element
        let box1 = document.getElementById('box1');
        let box2 = document.getElementById('box2');
        let box3 = document.getElementById('box3');
        let box4 = document.getElementById('box4');
        let box5 = document.getElementById('box5');
        let box6 = document.getElementById('box6');
        let box7 = document.getElementById('box7');
        let box8 = document.getElementById('box8');
        let box9 = document.getElementById('box9');
        //Check to see if there is a child element in the box. If ther is, assign the imgBox to the child eleent
        //Give it an x or an 0
        if (box1 && box1.firstElementChild) {
            imgBox1 = box1.firstElementChild.getAttribute('class');
            console.log("imgBox1", imgBox1);

        }
        if (box2 && box2.firstElementChild) {
            imgBox2 = box2.firstElementChild.getAttribute('class');
            console.log("imgBox2", imgBox2);
        }
        if (box3 && box3.firstElementChild) {
            imgBox3 = box3.firstElementChild.getAttribute('class');
            console.log("imgBox3", imgBox3);
        }
        if (box4 && box4.firstElementChild) {
            imgBox4 = box4.firstElementChild.getAttribute('class');
            console.log("imgBox4", imgBox4);
        }
        if (box5 && box5.firstElementChild) {
            imgBox5 = box5.firstElementChild.getAttribute('class');
            console.log("imgBox5", imgBox5);
        }
        if (box6 && box6.firstElementChild) {
            imgBox6 = box6.firstElementChild.getAttribute('class');
            console.log("imgBox6", imgBox6);
        }
        if (box7 && box7.firstElementChild) {
            imgBox7 = box7.firstElementChild.getAttribute('class');
            console.log("imgBox7", imgBox7);
        }
        if (box8 && box8.firstElementChild) {
            imgBox8 = box8.firstElementChild.getAttribute('class');
            console.log("imgBox8", imgBox8);
        }
        if (box9 && box9.firstElementChild) {
            imgBox9 = box9.firstElementChild.getAttribute('class');
            console.log("imgBox9", imgBox9);
        }
        //With all variables assigned, compare if any match up for x
        if (((imgBox1 && imgBox1 === "x") && (imgBox2 && imgBox2 === "x") && (imgBox3 && imgBox3 === "x")) ||
            ((imgBox4 && imgBox4 === "x") && (imgBox5 && imgBox5 === "x") && (imgBox6 && imgBox6 === "x")) ||
            ((imgBox7 && imgBox7 === "x") && (imgBox8 && imgBox8 === "x") && (imgBox9 && imgBox9 === "x")) ||
            ((imgBox1 && imgBox1 === "x") && (imgBox4 && imgBox4 === "x") && (imgBox7 && imgBox7 === "x")) ||
            ((imgBox2 && imgBox2 === "x") && (imgBox5 && imgBox5 === "x") && (imgBox8 && imgBox8 === "x")) ||
            ((imgBox3 && imgBox3 === "x") && (imgBox6 && imgBox6 === "x") && (imgBox9 && imgBox9 === "x")) ||
            ((imgBox1 && imgBox1 === "x") && (imgBox5 && imgBox5 === "x") && (imgBox9 && imgBox9 === "x")) ||
            ((imgBox3 && imgBox3 === "x") && (imgBox5 && imgBox5 === "x") && (imgBox7 && imgBox7 === "x"))) {

            //display winner div for x
            var winner = document.querySelector(".winner");
            winner.style.display = "block";
            const changeName = document.getElementById('nameP1').value;
            document.querySelector(".text").innerHTML = `${changeName} WINS!!!`;

        }
        // if all the variables match up for o
        if (((imgBox1 && imgBox1 === "o") && (imgBox2 && imgBox2 === "o") && (imgBox3 && imgBox3 === "o")) ||
            ((imgBox4 && imgBox4 === "o") && (imgBox5 && imgBox5 === "o") && (imgBox6 && imgBox6 === "o")) ||
            ((imgBox7 && imgBox7 === "o") && (imgBox8 && imgBox8 === "o") && (imgBox9 && imgBox9 === "o")) ||
            ((imgBox1 && imgBox1 === "o") && (imgBox4 && imgBox4 === "o") && (imgBox7 && imgBox7 === "o")) ||
            ((imgBox2 && imgBox2 === "o") && (imgBox5 && imgBox5 === "o") && (imgBox8 && imgBox8 === "o")) ||
            ((imgBox3 && imgBox3 === "o") && (imgBox6 && imgBox6 === "o") && (imgBox9 && imgBox9 === "o")) ||
            ((imgBox1 && imgBox1 === "o") && (imgBox5 && imgBox5 === "o") && (imgBox9 && imgBox9 === "o")) ||
            ((imgBox3 && imgBox3 === "o") && (imgBox5 && imgBox5 === "o") && (imgBox7 && imgBox7 === "o"))) {

            //display winner div for o
            var winner = document.querySelector(".winner");
            winner.style.display = "block";
            const changeName = document.getElementById('nameP2').value;
            document.querySelector(".text").innerHTML = `${changeName} WINS!!!`;

        }
        //  if statement for "0" CAT GAME!
        if (turn === 9) {
            //Display winner div with tie text
            var winner = document.querySelector(".winner");
            winner.style.display = "block";
            document.querySelector(".text").innerHTML = "TIE GAME!! NO ONE WINS!";
        }

        turn++;

    };
}