// Declaration of all the variables

var inp_as = document.querySelector('#a_size') ;
var inp_aspeed = document.querySelector('#a_speed') ;
var inp_gen = document.querySelector('#a_generate') ;
var butts_algos = document.querySelectorAll('.algos button') ;


var array_size = inp_as.value ;

var div_sizes = [] ;
var divs = [] ;
var margin_size ;
var cont = document.querySelector('#array_container') ;
cont.style = `flex-direction:row` ;

//Array Generation and Updation

inp_gen.addEventListener('click',generate_array) ;
inp_as.addEventListener('input',update_array_size) ;

// This function is used to create a new array 

function generate_array()
{
    cont.innerHTML = "" ;

    for(var i = 0 ; i < array_size ; i++)
    {
        div_sizes[i] = Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10 ;
        divs[i] = document.createElement('div') ;
        cont.appendChild(divs[i]) ;
        margin_size = 0.1 ;
        divs[i].style = `margin : ${margin_size}% ; background-color : blue ; height : ${div_sizes[i]}% ; width : ${(100/array_size)-2*margin_size}%` ;
    }
}

// This function is used to update the size of the array and as soon as the array size 
// is updated a new array of that size is also generated

function update_array_size()
{
    array_size = inp_as.value ;
    generate_array() ;
}

window.onload = update_array_size() ;

//Running appropriate sorting algorithm

for(var i = 0 ; i < butts_algos.length ; i++)
{
    butts_algos[i].addEventListener('click',runalgo) ;
}

// This function disables all the buttons while sorting is under process

function disable_buttons()
{
    for(var i = 0 ; i < butts_algos.length ; i++)
    {
        butts_algos[i].classList = [] ;
        butts_algos[i].classList.add('butt_locked') ;

        butts_algos[i].disabled = true ;
        inp_as.disabled = true ;
        inp_gen.disabled = true ;
        inp_aspeed.disabled = true ;
    }
}

// This function selects and runs the appropriate sorting algorithm

function runalgo()
{
    disable_buttons() ;

    this.classList.add('butt_selected') ;

    if(this.innerHTML === "Bubble")
    {
        Bubble() ;
    }
    else if(this.innerHTML === "Selection")
    {
        Selection_Sort() ;
    }
    else if(this.innerHTML === "Insertion")
    {
        Insertion() ;
    }
    else if(this.innerHTML === "Merge")
    {
        Merge() ;
    }
    else if(this.innerHTML === "Quick")
    {
        Quick() ;
    }
    else if(this.innerHTML === "Heap")
    {
        Heap() ;
    }
}