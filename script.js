//your JS code here. If required.
const sizeInfo=document.getElementById('sizeInfo');

const h1=document.createElement('h1');
sizeInfo.appendChild(h1);
window.addEventListener('resize',()=>{
	h1.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
})



