const container = document.querySelector('.Minecraft-container');

const game = document.querySelector('.tools-container');

const gridComputedStyle = window.getComputedStyle(container);

// get number of grid rows
const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
// container.style.height=`${gridRowCount}vh`
// get number of grid columns
const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;

let inventory ={
   height: document.body.clientHeight,
   width: document.body.clientWidth,
   rowTemp: gridRowCount,
   colTemp: gridColumnCount,
   current: '',
   tree: 'tree',
   rock: 'rock',
   soil: 'soil',
   sky: '',
   cloud: 'cloud', 
   grass:'grass',
   leaves:'leaves'
}
intializeGame()
function intializeGame(){
   for(let i = 0;i< inventory.rowTemp;i++){
      for(let k = 0;k< inventory.colTemp;k++){
         let div = document.createElement('div');
         div.setAttribute('id',`cell${i}-${k}`)
         div.setAttribute('class','cell')
         container.appendChild(div)
      }
   } 
}
function fillCells(){
   for(let k = 0;k< container.children.length;k++){
      let [i,j] = container.children[k].getAttribute('id').slice(4).split('-');
      
      fillRock(i,j,k)
      fillGrass(i,j,k)
      filltree(i,j,k)
      fillLeaves(i,j,k)
   } 

}
function fillRock(i,j,k){

}

function fillLeaves(i,j,k){
   if( i>Math.floor(gridRowCount*0.1)&&i<Math.floor(gridRowCount*0.4)&& j>Math.floor(gridColumnCount*0.6)&&j<Math.floor(gridColumnCount*0.9)){
      container.children[k].classList.add(inventory.leaves);
   }
}

function filltree(i,j,k){
   if(i<=Math.floor(gridRowCount*0.75)&&i>=Math.floor(gridRowCount*0.4)&&j>=Math.floor(gridColumnCount*0.75)&&j<Math.floor(gridColumnCount*0.75)+1){
      container.children[k].classList.add(inventory.tree);
   }
   
}

function fillGrass(i,j,k){
   if(i==Math.floor(gridRowCount*0.75)){
      container.children[k].classList.add(inventory.grass);
   }
   else if(i> Math.floor(gridRowCount*0.75)){
      container.children[k].classList.add(inventory.soil);
   }
}




fillCells()


container.addEventListener('click',(event)=>{
   if(!event.target.getAttribute('class').includes('tree')){
      event.target.setAttribute('class',inventory.tree);
   }
})
