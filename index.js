const manager = ViewManager();

const input = document.getElementById("file-input")
input.addEventListener("change",(e)=>{
    
console.log(e.target.files[0]);
let file = e.target.files[0]
var reader = new FileReader();
reader.readAsText(file, "UTF-8");
reader.onload = function (evt) {
    const button = document.getElementById("clear-button")
button.addEventListener('click', ()=>{
    manager.removeView(view);
})
 let cem = evt.currentTarget.result
    const view = manager.addView(cem, 1.0);
    document.body.appendChild(view)
    view.classList.add('Reto')
    
}

})



