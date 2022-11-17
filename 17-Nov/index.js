async function get(){
const res= await fetch("https://www.breakingbadapi.com/api/characters");
const data=await res.json();
console.log(data)
for (let i=0;i<data.length;i++){
    document.writeln("the name is "+data[i].name+"<br>");
    document.writeln('<img src="'+data[i].img+'" ;height="100px"; width="100px"> <br>');
}
}
get();