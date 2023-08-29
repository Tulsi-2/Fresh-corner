const contact =()=>{
    let name = document.getElementById("text").innerHTML;
    let phone = document.getElementById("phone").innerHTML;
    let email = document.getElementById("email").innerHTML;
    let msg = document.getElementById("textarea").innerHTML;
    // console.log(name,phone,email,msg )
    alert("Your msg has been sent")
}

var typed = new Typed(".auto-type",{
    strings : ["Fresh Fruits And Vegetables ........   For You!"],
    
    typespeed : 200,
    backspeed : 200,
    looped : true
})
