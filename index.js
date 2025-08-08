function saveName(){
    let name=document.getElementById(`nameInput`).value;
    localStorage.setItem(`Name`,name);
}
function getName(){
    const saveData=localStorage.getItem(`Name`)
    console.log(saveData)
    const output=document.getElementById("output");
    document.getElementById("output").innerHTML = "your data is "+ saveData;
}
function clearStorage(){
    localStorage.removeItem(`Name`);
}










