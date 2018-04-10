const add = document.body.querySelectorAll("button")[0];
const submit = document.body.querySelectorAll("button")[1];
let inputTask = document.body.querySelectorAll("input")[0];
const begLi = "<li class='list-group-item'><i class='fa fa-trash'></i>";
const endLi = "</li>";

let ul = document.body.querySelector("ul");

let array = []

// Add item
$(add).on("click", function(){
  // Add to DOM
  array.push(inputTask.value)
  // Add to array
  if(inputTask.value){
    $("ul").append(begLi + " " + inputTask.value + endLi);
    console.log(inputTask.value)
    inputTask.value = "";
  };
});

// Remove item
$("ul").on("click", "i", function(){
// Remove from array
  let str = $(this).parent()[0].innerText.slice(1);
  for(i = 0; i < array.length; i++){
    if(array[i] == str){
      array.splice(i, 1);
      console.log(array)
    }
  };
// Remove from DOM
  $(this).parent().remove()
})

add.addEventListener("click", function(e){
  e.preventDefault()
})

// Submit form
// $("form").submit(function(e){
//   let inputEmail = document.body.querySelectorAll("input")[1]
//   let email = inputEmail.value;
//
// });
