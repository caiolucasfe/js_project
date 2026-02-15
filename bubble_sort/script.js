let arr = window.document.getElementsByClassName("arr");

let i;
let j;

for(i = 0; i < arr.length; i++){

    arr[i].innerText = Math.floor(Math.random() * 100);

}



for(i = 0; i < arr.length; i++){

    for (j = 0; j < arr.length - 1; j++){

        if(Number(arr[j].innerText) > Number(arr[j + 1].innerText)){
            [arr[j].innerText, arr[j + 1].innerText] = [arr[j + 1].innerText, [arr[j].innerText]];
        }

    }

}
