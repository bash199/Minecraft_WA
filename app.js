const container = document.querySelector('.Minecraft-container');
const game = document.querySelector('.tools-container');
const axe = document.querySelector('.axe-tool');
const pickaxe =  document.querySelector('.pickaxe-tool');
const shovel = document.querySelector('.shovel-tool');
const woodPar = document.querySelector('.wood-count');
const leavesPar = document.querySelector('.leaves-count');
const rockPar = document.querySelector('.rock-count');
const grassPar = document.querySelector('.grass-count');
const soilPar = document.querySelector('.soil-count');
const gridComputedStyle = window.getComputedStyle(container);
// get number of grid rows
const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
// get number of grid columns
const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;

let inventory ={
   rowTemp: gridRowCount,
   colTemp: gridColumnCount,
   currentTool:'',
   tree: 'tree',
   rock: 'rock',
   soil: 'soil',
   sky: '',
   cloud: 'cloud', 
   grass:'grass',
   leaves:'leaves',
   treeCount: 0,
   rockCount: 0,
   soilCount: 0,
   grassCount: 0,
   leavesCount: 0,
}
intializeGame()
fillCells()
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
   if(i<=Math.floor(gridRowCount*0.75)&&i>Math.floor(gridRowCount*0.4)&&j>=Math.floor(gridColumnCount*0.45)&&j<Math.floor(gridColumnCount*0.6)){
      container.children[k].classList.add(inventory.rock);
   }
}
function fillLeaves(i,j,k){
   if( i>Math.floor(gridRowCount*0.1)&&i<Math.floor(gridRowCount*0.4)&& j>Math.floor(gridColumnCount*0.6)&&j<Math.floor(gridColumnCount*0.9)){
      container.children[k].classList.add(inventory.leaves);
   }
}
function filltree(i,j,k){
   if(i<=Math.floor(gridRowCount*0.75)-1&&i>=Math.floor(gridRowCount*0.4)&&j>=Math.floor(gridColumnCount*0.75)&&j<Math.floor(gridColumnCount*0.75)+1){
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

container.addEventListener('click',clickedDiv);
axe.addEventListener('click',clickedAxeFunc);
pickaxe.addEventListener('click',clickedPickaxeFunc);
shovel.addEventListener('click',clickedShovelFunc);

function clickedDiv(event){
   if(inventory.currentTool=='axe'){
      axePickUp(event)
   }
   else if(inventory.currentTool=='pickaxe'){
      pickaxePickUp(event)
   }
   else if(inventory.currentTool=='shovel'){
      shovelPickUp(event)
   }
}
function shovelPickUp(element){
   if(element.target.getAttribute('class').includes(inventory.grass)){
      inventory.grassCount++;
      grassPar.textContent=`X ${inventory.grassCount}`
      event.target.classList.remove(inventory.grass)
   }
   else if(element.target.getAttribute('class').includes(inventory.soil)){
      inventory.soilCount++;
      soilPar.textContent=`X ${inventory.soilCount}`
      event.target.classList.remove(inventory.soil)
   }
}
function pickaxePickUp(element){
   if(element.target.getAttribute('class').includes(inventory.rock)){
      inventory.rockCount++;
      rockPar.textContent=`X ${inventory.rockCount}`
      event.target.classList.remove(inventory.rock)
   }
}
function axePickUp(element){
   if(element.target.getAttribute('class').includes(inventory.tree)){
      inventory.treeCount++;
      woodPar.textContent=`X ${inventory.treeCount}`
      event.target.classList.remove(inventory.tree)
   }
   else if(element.target.getAttribute('class').includes(inventory.leaves)){
      inventory.leavesCount++;
      leavesPar.textContent=`X ${inventory.leavesCount}`
      event.target.classList.remove(inventory.leaves)
   }
}

function clickedShovelFunc(){
   inventory.currentTool='shovel';
   axe.style.border = '1px solid #ccc'
   pickaxe.style.border = '1px solid #ccc'
   shovel.style.border = '1px solid red'
}
function clickedPickaxeFunc(){
   inventory.currentTool='pickaxe';
   axe.style.border = '1px solid #ccc'
   pickaxe.style.border = '1px solid red'
   shovel.style.border = '1px solid #ccc'
}
function clickedAxeFunc(){
   inventory.currentTool='axe';
   axe.style.border = '1px solid red'
   pickaxe.style.border = '1px solid #ccc'
   shovel.style.border = '1px solid #ccc'
}