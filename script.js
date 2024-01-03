//your JS code here. If required.
const sizeInfo=document.getElementById('sizeInfo');

window.addEventListener('resize',()=>{
	const h1=document.createElement('h1');
	h1.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
})



