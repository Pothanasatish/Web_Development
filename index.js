var data=[
    {
        name:"John",
        gender:"Male",
        image:"john.png"

    },
    {
        name:"Jane",
        gender:"female",
        image:"jane.png"

    }

];

var index=0;
function toggle(){
    if(index==0){
        index=1;

    }
    else{
        index=0;
    }
    document.getElementById("name").innerText=data[index].name;
    document.getElementById("gender").innerText=data[index].gender;
    document.getElementById("image").src=data[index].image;

}