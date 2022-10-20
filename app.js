const container = document.querySelector('.Minecraft-container');

const game = document.querySelector('.tools-container');

let inventory ={
   rowTemp: 16,
   colTemp: 16,
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
         // container.style.display='grid';
         // container.style.gridTemplate=`repeat(${inventory.rowTemp},1fr) / repeat(${inventory.colTemp},1fr)`
         let div = document.createElement('div');
         div.setAttribute('id',`cell${i}-${k}`)
         div.setAttribute('class','cell')
         // div.innerHTML = '';
         container.appendChild(div)
      }
   } 
}
function fillCells(){
   for(let k = 0;k< container.children.length;k++){
      let [i,j] = container.children[k].getAttribute('id').slice(4).split('-');
      
      
       fillGrass(i,j,k)
       filltree(i,j,k)
       fillLeaves(i,j,k)
   } 

}
function fillLeaves(i,j,k){
   if( i<8 && i>5 && j>7 && j<11 ){
      container.children[k].classList.add(inventory.leaves);
   }
}

function filltree(i,j,k){
   if((i==8||i==11||i==10||i==9)&&j==9){
      container.children[k].classList.add(inventory.tree);
   }
   
}

function fillGrass(i,j,k){
   if(i==12){
      container.children[k].classList.add(inventory.grass);
   }
   else if(i>=13){
      container.children[k].classList.add(inventory.soil);
   }
}




fillCells()


container.addEventListener('click',(event)=>{
   if(!event.target.getAttribute('class').includes('tree')){
      event.target.setAttribute('class',inventory.tree);
   }
})
