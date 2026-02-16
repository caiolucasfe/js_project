function randomNumbers(){

    let arr = [];

    for(let i = 0; document.getElementById("box-" + i) != null; i++){

        arr.push(Math.floor(Math.random() * 100));

        document.getElementById("box-" + i).innerText = arr[i];

    }

    return arr;

}

function bubbleSort(arr){

    let steps = [];

    for(let i = 0; i < arr.length; i++){

        for (let j = 0; j < arr.length - 1 - i; j++){

            if(arr[j] > arr[j + 1]){

                steps.push({

                    type: "swap",
                    i: j,
                    j: j+1

                });

                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];

            }
            else{

                steps.push({

                    type: "compare",
                    i: j,
                    j: j+1,

                });

            }

        }

        steps.push({

            type: "complete",
            i: 0,
            j: arr.length -1 -i,

        });

    }

    return(steps);

}

let arr = randomNumbers();

function sleep(ms){

    return new Promise(resolve => setTimeout(resolve, ms));

}

let timer = document.getElementById("timer");
let time = 3;

let interval = setInterval(() => {

    timer.innerText = time;
    time--;

    if(time < 0){

        clearInterval(interval);

        timer.style.display = "none";

        let steps = bubbleSort(arr);

        async function animate(steps){

            for(let i = 0; i < steps.length; i++){

                let box1 = document.getElementById("box-" + steps[i].i);
                let box2 = document.getElementById("box-" + steps[i].j);

                if(steps[i].type === "compare"){

                    box1.classList.add("activeCompare");
                    box2.classList.add("activeCompare");

                    await sleep(1000);

                    box1.classList.remove("activeCompare");
                    box2.classList.remove("activeCompare");

                    await sleep(1000);

                }
                if(steps[i].type === "swap"){

                    box1.classList.add("activeSwap");
                    box2.classList.add("activeSwap");
                    await sleep(1000);

                    [[box1.innerText, box2.innerText] = [box2.innerText, box1.innerText]];
                    
                    box1.classList.remove("activeSwap");
                    box2.classList.remove("activeSwap");

                    await sleep(1000);

                }
                if(steps[i].type === "complete"){
                    box2.classList.add("activeComplete");
                }
            }

        }

        animate(steps);

    }

}, 1000);