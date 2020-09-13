const but1 = document.querySelectorAll('.but1')[0];
//console.log(but1);
const but2 = document.querySelectorAll('.but2')[0];
//console.log(but2);
const but3 = document.querySelectorAll('.but3')[0];
//console.log(but3);
let i = 0 ;
let count = document.querySelectorAll('.count')[0];
count.textContent = `${i}`;
//console.log(count);
but1.addEventListener('click' , () => {
    i--;
    console.log(i);
    count.textContent = `${i}`;
});
but2.addEventListener('click' , ()=> {
   // console.log('reset');
   i =0;
   count.textContent = `${i}`;
});
but3.addEventListener('click' , () => {
    i++;
    console.log(i);
    count.textContent = `${i}`;
});
