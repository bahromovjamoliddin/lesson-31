const task = 0
function onclick__text(){
   const inputText = document.querySelector('.frame__newInput').value;
if (!inputText.trim()) {
  alert("bosh saxifa")
    return;
}
    const div = document.createElement('div')
    div.classList.add('div__text')
    
    const newText = document.createElement('p')
    newText.innerText = inputText;
    
    const chek = document.createElement('input')
    chek.type = "checkbox";
    div.append(chek)
   
    div.append(newText);
    document.querySelector('.newInput').append(div)
  
   document.querySelector('.frame__newInput').value = "";


}
// onclick__text()