// We are changing height and background color of the bars inorder to show visualization
// effects 

var speed = 1000 ; // Speed is initialized to thousand as a_speed has default value of 4

// delay_time should be inversely proportional to the speed because if we want the 
// algorithm to run fast then we should add a lower delay_time in between its steps 

var delay_time = 10000/(Math.floor(array_size/10)*speed) ; //Time gap between steps

var c_delay = 0 ; // Central delay to which delay_time is added after every step

inp_aspeed.addEventListener('input',speed_update) ;

// This function updates speed as soon as a new speed is input in the inp_aspeed slider

function speed_update()
{
    var array_speed = parseInt(inp_aspeed.value) ;

    if(array_speed === 1)
    {
        speed = 1 ;
    }
    else if(array_speed === 2)
    {
        speed = 10 ;
    }
    else if(array_speed === 3)
    {
        speed = 100 ;
    }
    else if(array_speed === 4)
    {
        speed = 1000 ;
    }
    else if(array_speed === 5)
    {
        speed = 10000 ;
    }
    
    delay_time = 10000/(Math.floor(array_size/10)*speed) ;
}

// This function adds all the visualization effects i.e. changes height and color of the bars 

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style = `margin : ${margin_size}% ; width : ${(100/array_size-(2*margin_size))}% ; height : ${height}% ; background-color : ${color} ;` ;
    }, c_delay += delay_time) ;;
}

// This function runs as soon as the sorting completes and enables all the disabled buttons

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[] ;
            butts_algos[i].classList.add("butt_unselected") ;

            butts_algos[i].disabled=false ;
            inp_as.disabled=false ;
            inp_gen.disabled=false ;
            inp_aspeed.disabled=false ;
        }
    },c_delay += delay_time);
}