

async function getName() {
    const res = await fetch("https://www.breakingbadapi.com/api/characters");
    const data = await res.json();
   
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        let x=new Option  (data[i].name,data[i].img);
        let y=document.querySelector("selectid");
        selectid.add(x);
    }
    

}
getName();
async function infoOfUser(){
    // document.getElementsByTagName("img")[0].src = data[0].img;
    let selected=document.querySelector("#selectid").value;
    document.getElementById("image").src=selected;
    
    


}
    

   
