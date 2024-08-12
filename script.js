console.log("Script running...")
// Task 1: Intro section
// Select the location button
let loc = document.querySelector("#location")
console.log(loc)

// Select the empty p tag under the button
let p = document.querySelector("#locationText")
console.log(p)

// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
  loc.addEventListener("click", function(event){	
  p.textContent = "1300 Boynton Ave (moving soon!)"
})


// Task 2: Our Values section
// Select the h3 with S under "Our Values" 
let h3 = document.querySelector("#score1")
console.log(h3)

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"
  h3.addEventListener("click", function(event){	
  h3.textContent = "Self-Awareness"
})


// Select the h3 with C under "Our Values"
// Make sure to add an id/class as needed in the HTML to do this
let score = document.querySelector("#score2")
console.log(score)

// Add an event listener on the h3 such that when it is clicked, the text changes to "Consistency"
score.addEventListener("click", function(event){	
  score.textContent = "Consistency"
})



// Task 3: Uniform section
// Select the joggers image
let joggers = document.querySelector("#joggers");
console.log(joggers);

// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp
 joggers.addEventListener("mouseover", function (event){	
  joggers.src = "joggers-back.webp";

});


// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp
   joggers.addEventListener("mouseout", function(event){	
    joggers.src = "joggers-front.webp";
});


// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (ownership, resilience, excellent)

let own = document.querySelector("#score3")
console.log(own)


own.addEventListener("click", function(event){	
  own.textContent = "Ownership"
})

let res = document.querySelector("#score4")
console.log(res)


res.addEventListener("click", function(event){	
  res.textContent = "Resilience"
})

let exc = document.querySelector("#score5")
console.log(exc)


exc.addEventListener("click", function(event){	
  exc.textContent = "Excellent"
})
// Set up the DOM manipulation flow for the sweater (sweater-back.webp with mouse on, and sweater-front.webp with mouse off)

let sweater = document.querySelector("#sweater");
console.log(sweater);

 sweater.addEventListener("mouseover", function (event){	
    sweater.src = "sweater-back.webp";

});



   sweater.addEventListener("mouseout", function(event){	
    sweater.src = "sweater-front.webp";
});

