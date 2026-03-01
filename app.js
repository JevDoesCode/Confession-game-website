const contentContainer = document.querySelector(".contentContainer");
const script = document.querySelector(".script");
const cat = document.querySelector(".cat");

// sounds
const music = document.querySelector(".music");
const soundEffx = document.querySelector(".pop");
const flickEffx = document.querySelector(".flickEffx");
const sadEffx = document.querySelector(".sadEffx");
const yippeEffx = document.querySelector(".yippeEffx");


// BUTTONS
const nextBtn = document.querySelector(".next");
const opt1btn = document.querySelector(".opt1");
const opt2btn = document.querySelector(".opt2");
const opt11btn = document.querySelector("#opt1");
const opt22btn = document.querySelector("#opt2");

// containers
const flickerContainer = document.querySelector(".flicker");
const confession = document.querySelector(".confession");
const dialogueContainer = document.querySelector(".dialogueContainer");
const endContainer = document.querySelector(".endContainer");
const startContainer = document.querySelector(".startContainer");


let scriptLinesCounter = 0;

const scriptLines = ["I've been thinking about it lately...", "The way you act, ung humor mo", "I've grown fond of it...", "btw, Mahilig kaba sa pusa?", 
                    "Actually, I've been keeping a secret...", "HALA!", "Wait lang...", "...", "Pede poba manliligaw sayo?"];
const optionLines = ["Ay meaning ba, mahilig ka saakin? HAHA", "Ay.. Same!", "YAY!!!", "Ay Cge..."];

function scriptBtn(index) {
    soundEffx.play();
    soundEffx.volume = 0.3;

    startContainer.style.display = "none";
    music.play();
    
    if(scriptLinesCounter === 3) {
        cat.src = "gifs/curious.gif";

        opt1btn.style.display = "block";
        opt2btn.style.display = "block";

        nextBtn.style.display = "none";
    }

    if(index === 0) {
        cat.src = "gifs/happy.gif";

        opt1btn.style.display = "none";
        opt2btn.style.display = "none";

        nextBtn.style.display = "block";
        script.textContent = optionLines[index];
        
    } else if(index === 1) {
        cat.src = "gifs/ouch.gif";

        opt1btn.style.display = "none";
        opt2btn.style.display = "none";

        nextBtn.style.display = "block";
        script.textContent = optionLines[index];
    } else {
        script.textContent = scriptLines[scriptLinesCounter];
        cat.src = "gifs/shy.gif";
        cat.style.display = "block";
        
        if(scriptLinesCounter === 5) {
            cat.style.display = "none";
            flickerContainer.style.display = "block";
            dialogueContainer.style.backgroundImage = "none";

            flickEffx.play();

        } else if(scriptLinesCounter === 6) {
            cat.src = "gifs/surprise.gif";
            dialogueContainer.style.display = "block";
            flickerContainer.style.display = "none";
        } else if(scriptLinesCounter === 7) {
            cat.src = " ";
            flickerContainer.style.display = "block";
            flickEffx.play();

        } else if(scriptLinesCounter === 8) {

            setTimeout(() => {
                confession.style.display = "none";
                dialogueContainer.style.display = "block";

                opt11btn.style.display = "block";
                opt22btn.style.display = "block";
                nextBtn.style.display = "none";
            }, 8000);

            flickerContainer.style.display = "none";
            confession.style.display = "grid";
            dialogueContainer.style.display = "none";
        } else {
            confession.style.display = "none";
            dialogueContainer.style.display = "block";

            if(index === 2) {
                cat.src = "gifs/a.gif";
                script.textContent = optionLines[index];
                nextBtn.style.display = "block";
                yippeEffx.play();

            } else if(index === 3) {
                cat.src = "gifs/sad.gif";
                script.textContent = optionLines[index];
                nextBtn.style.display = "block";
                sadEffx.play();

            }

            
            opt11btn.style.display = "none";
            opt22btn.style.display = "none";
        }

        if(scriptLinesCounter > scriptLines.length) {
            endContainer.style.display = "block";
            dialogueContainer.style.display = "none";
            nextBtn.style.display = "none";
        }
        
        scriptLinesCounter++;
    }
}

function restartbtn() {
    scriptLinesCounter = 0;
    scriptBtn();

    startContainer.style.display = "block";
    nextBtn.style.display = "block";
    dialogueContainer.style.backgroundImage = `url("gifs/bg.gif")`;
    
    dialogueContainer.style.display = "none";
    endContainer.style.display = "none";
    confession.style.display = "none";
    
}

cat.addEventListener("click", () => {
    cat.src = "gifs/cute.gif";

    setTimeout(() => {
        cat.src = "gifs/shy.gif";
    }, 4000);
});