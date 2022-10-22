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
const woodInvitory = document.querySelector('.wood-invitory');
const leavesInvitory = document.querySelector('.leaves-invitory');
const rockInvitory = document.querySelector('.rock-invitory');
const grassInvitory = document.querySelector('.grass-invitory');
const soilInvitory = document.querySelector('.soil-invitory');
const reset = document.querySelector('.reset');
const startBtn = document.querySelector('.btn-container');
const landingPage = document.querySelector('.landing-page');
const gridComputedStyle = window.getComputedStyle(container);
// get number of grid rows
const gridRowCount = gridComputedStyle.getPropertyValue("grid-template-rows").split(" ").length;
// get number of grid columns
const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
container.style.display='none';
game.style.display='none';
let inventory ={
   rowTemp: gridRowCount,
   colTemp: gridColumnCount,
   currentTool:'',
   currentMaterial:'',
   wood: 'wood',
   rock: 'rock',
   soil: 'soil',
   cloud: 'cloud', 
   grass:'grass',
   leaves:'leaves',
   woodCount: 0,
   rockCount: 0,
   soilCount: 0,
   grassCount: 0,
   leavesCount: 0,
   materials: [woodInvitory,leavesInvitory,rockInvitory,grassInvitory,soilInvitory,axe,pickaxe,shovel],
   materialsPara: [woodPar,leavesPar,rockPar,grassPar,soilPar]
}
intializeGame()
fillCells()
function intializeGame(){
   for(let i = 0;i< inventory.rowTemp;i++){
      for(let k = 0;k< inventory.colTemp;k++){
         let div = document.createElement('div');
         div.setAttribute('id',`cell${i}-${k}`);
         div.setAttribute('class','');
         container.appendChild(div);
      }
   } 
}
function fillCells(){
   for(let k = 0;k< container.children.length;k++){
      let [i,j] = container.children[k].getAttribute('id').slice(4).split('-');
      fillRock(i,j,k);
      fillGrass(i,j,k);
      fillwood(i,j,k);
      fillLeaves(i,j,k);
      
   } 
}


function fillRock(i,j,k){
   if(i<=Math.floor(gridRowCount*0.75)&&i>Math.floor(gridRowCount*0.4)&&j>=Math.floor(gridColumnCount*0.45)&&j<Math.floor(gridColumnCount*0.6)&&i!=9){
      container.children[k].classList.add(inventory.rock);
   }
   if(i==7&&j<4){
      container.children[k].classList.add(inventory.rock);
   }
   if(i==6&&j<3){
      container.children[k].classList.add(inventory.rock);
   }
   if(i==5&&j<2){
      container.children[k].classList.add(inventory.rock);
   }
   if(i==4&&j<1){
      container.children[k].classList.add(inventory.rock);
   }
}
function fillLeaves(i,j,k){
   if( i>Math.floor(gridRowCount*0.1)+1&&i<Math.floor(gridRowCount*0.4)&& j>Math.floor(gridColumnCount*0.6)&&j<Math.floor(gridColumnCount*0.9)){
      container.children[k].classList.add(inventory.leaves);
      
   }
   if(i==2&&j>14&&j<18){
      container.children[k].classList.add(inventory.leaves);
   }
   if(i==1&&j==16){
      container.children[k].classList.add(inventory.leaves);
   }
}
function fillwood(i,j,k){
   if(i<=Math.floor(gridRowCount*0.75)-1&&i>=Math.floor(gridRowCount*0.4)&&j>=Math.floor(gridColumnCount*0.75)&&j<Math.floor(gridColumnCount*0.75)+1){
      container.children[k].classList.add(inventory.wood);
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
reset.addEventListener('click',resetGame)
startBtn.addEventListener('click',startGame)
woodInvitory.addEventListener('click',()=>{
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentMaterial = inventory.wood;
   woodInvitory.style.borderColor = 'crimson'
   resetcurrentTool()
})

leavesInvitory.addEventListener('click',()=>{
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentMaterial = inventory.leaves;
   leavesInvitory.style.borderColor = 'crimson'
   resetcurrentTool()
})

rockInvitory.addEventListener('click',()=>{
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentMaterial = inventory.rock;
   rockInvitory.style.borderColor = 'crimson'
   resetcurrentTool()
})

grassInvitory.addEventListener('click',()=>{
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentMaterial = inventory.grass;
   grassInvitory.style.borderColor = 'crimson'
   resetcurrentTool()
})

soilInvitory.addEventListener('click',()=>{
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentMaterial = inventory.soil;
   resetcurrentTool()
   soilInvitory.style.borderColor = 'crimson'
})
function startGame(){
   landingPage.style.display='none';
   container.style.display='';
   game.style.display='';
}
function resetGame(){
   container.innerHTML = '';
   intializeGame();
   fillCells();
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.materialsPara.forEach(element=>{
      element.textContent='X 0'
   });
   resetcurrentTool();
   inventory.woodCount= 0;
   inventory.rockCount= 0;
   inventory.soilCount= 0;
   inventory.grassCount= 0;
   inventory.leavesCount= 0;
   inventory.currentMaterial= '';
}

function resetcurrentTool(){
   inventory.currentTool = ''
}
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
   if(inventory.currentTool==''&&inventory.currentMaterial.length>0&&event.target.className!=='Minecraft-container'){
      putInMatireal(event)
   }
}

function putInMatireal(element){
   if(inventory.currentMaterial==inventory.wood&&inventory.woodCount>0&&!element.target.getAttribute('class').includes(inventory.wood)){
      element.target.classList.add('wood')
      inventory.woodCount--;
      woodPar.textContent=`X ${inventory.woodCount}`
   }
   else if(inventory.currentMaterial==inventory.leaves&&inventory.leavesCount>0&&!element.target.getAttribute('class').includes(inventory.leaves)){
      element.target.classList.add(inventory.leaves)
      inventory.leavesCount--;
      leavesPar.textContent=`X ${inventory.leavesCount}`
   }
   else if(inventory.currentMaterial==inventory.rock&&inventory.rockCount>0&&!element.target.getAttribute('class').includes(inventory.leaves)){
      element.target.classList.add(inventory.rock)
      inventory.rockCount--;
      rockPar.textContent=`X ${inventory.rockCount}`
   }
   else if(inventory.currentMaterial==inventory.grass&&inventory.grassCount>0&&!element.target.getAttribute('class').includes(inventory.grass)){
      element.target.classList.add(inventory.grass)
      inventory.grassCount--;
      grassPar.textContent=`X ${inventory.grassCount}`
   }
   else if(inventory.currentMaterial==inventory.soil&&inventory.soilCount>0&&!element.target.getAttribute('class').includes(inventory.soil)){
      element.target.classList.add(inventory.soil)
      inventory.soilCount--;
      soilPar.textContent=`X ${inventory.soilCount}`
   }
}

function shovelPickUp(element){
   if(element.target.getAttribute('class').includes(inventory.grass)){
      inventory.grassCount++;
      grassPar.textContent=`X ${inventory.grassCount}`
      element.target.classList.remove(inventory.grass)
   }
   else if(element.target.getAttribute('class').includes(inventory.soil)){
      inventory.soilCount++;
      soilPar.textContent=`X ${inventory.soilCount}`
      element.target.classList.remove(inventory.soil)
   }
}
function pickaxePickUp(element){
   if(element.target.getAttribute('class').includes(inventory.rock)){
      inventory.rockCount++;
      rockPar.textContent=`X ${inventory.rockCount}`
      element.target.classList.remove(inventory.rock)
   }
}
function axePickUp(element){
   if(element.target.getAttribute('class').includes(inventory.wood)){
      inventory.woodCount++;
      woodPar.textContent=`X ${inventory.woodCount}`
      element.target.classList.remove(inventory.wood)
   }
   else if(element.target.getAttribute('class').includes(inventory.leaves)){
      inventory.leavesCount++;
      leavesPar.textContent=`X ${inventory.leavesCount}`
      element.target.classList.remove(inventory.leaves)
   }
}

function clickedShovelFunc(){
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentTool='shovel';
   shovel.style.borderColor = 'crimson'
}
function clickedPickaxeFunc(){
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentTool='pickaxe';
   pickaxe.style.borderColor = 'crimson'
}
function clickedAxeFunc(){
   inventory.materials.forEach(element=>{
      element.style.borderColor='#ccc'
   });
   inventory.currentTool='axe';
   axe.style.borderColor = 'crimson'
}