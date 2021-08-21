// const solveButt = document.querySelector('#solve');
const form = document.querySelector('form');
// const inputDistance = document.querySelector('#input-distance');
// const inputTime = document.querySelector('#input-time');
// const inputVelocity = document.querySelector('#input-velocity');
// const inputs = [inputDistance, inputTime, inputVelocity]

// solveButt.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e)
//     for (let input of inputs) {
//         console.log(input)
//     }
// })

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = {};
    const solution = {};
    for (let i = 0; i < 3; i++) {
        if (e.target[i].value) {
            inputs[e.target[i].id] = e.target[i].value;    
        }
    }
    if (keys(inputs).length === 2) {
        solution = solve(inputs);
    }
    else {
        alert ('you must enter exactly two of the three fields to solve for the other');
    }
})

function solve (inputs) {
    if ("distance" in keys(inputs) && "time" in keys(inputs)) {
        return {"velocity": solveVelocity(inputs.distance, inputs.time)}
    }
}

function solveVelocity(distance, time) {
    // distance/timeInHours = returnValue/1
    let timeInHours = 0;
    const placeholders = ['hours', 'minutes', 'seconds'];
    let x = 0;
    let placeholder = placeholders[x];
    for (let i=0; i<time.length; i++) {
        if (time[i] == ":") {
            x ++;
            placeholder = placeholders[x];
        } else if (placeholder = "hours") {
            console.log('aaaa, fuck');
        } else {
            console.log("live to fight another day");
        }
    }    
}