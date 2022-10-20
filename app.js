
const container = document.querySelector('.container');

// document.createElement('div')




const q=container.appendChild(document.createElement('div'))
q.setAttribute('class','red')
container.appendChild(document.createElement('div'))
container.appendChild(document.createElement('div'))
container.appendChild(document.createElement('div'))
container.appendChild(document.createElement('div'))
container.appendChild(document.createElement('div'))
container.appendChild(document.createElement('div'))
container.appendChild(document.createElement('div'))
container.appendChild(document.createElement('div'))
let inventory ={
   current: '',
}
container.addEventListener('click',(event)=>{
   let clas = event.target;
   takesTheClass(clas)
})
function takesTheClass(element){
   console.log();
   inventory.current=element.getAttribute('class');
}