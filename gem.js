
var rannumn= Math.floor(Math.random() * 20)
console.log(rannumn)
var gusnum = 0;
var i = 0;
var igr = true;



document.getElementById('buto').addEventListener('click', ()=>{
if( igr==true){
    gusnum = document.getElementById("gs").value;
    if( gusnum == rannumn){

        document.getElementById('op').innerHTML="You Win"
        console.log("you win")
        document.getElementById('ooo').innerHTML='guess:' + '<br> '+ i;
        i++
        igr= false; 

    }
    else if( gusnum< rannumn){

        document.getElementById('op').innerHTML="Too Low"

        document.getElementById('ooo').innerHTML='guess:' + '<br> '+ i;
        i++


    }
    else if(gusnum> rannumn){
        
        document.getElementById('op').innerHTML="Too High"

        document.getElementById('ooo').innerHTML='guess:' + '<br> '+ i;
        i++


    }
    else{

        document.getElementById('op').innnerHTML= "WhAt?"
    }


}})


document.getElementById('butto').addEventListener('click', ()=>{

    location.reload()
})