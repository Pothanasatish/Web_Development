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

function randomUser(){
    fetch("https://randomuser.me/api")
        .then((res)=>{
           return res.json();
        })
        .then((data)=>{
            var user=data.results[0];
            var gender=user.gender;
            var fullName=user.name.title+" "+user.name.first+" "+user.name.last;
            var image=user.picture.large;
            document.getElementById("name").innerText=fullName;
            document.getElementById("gender").innerText=gender;
            document.getElementById("image").src=image;
        })
}