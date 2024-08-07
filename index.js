let decBtn = document.querySelector('.minus');
let incBtn = document.querySelector('.plus');
let numberElement = document.querySelector('.number');
let currentNum = parseInt(numberElement.textContent);


decBtn.addEventListener('click',function()
{
    currentNum=currentNum-1;
    numberElement.textContent=currentNum;

})

incBtn.addEventListener('click',function()
{
    currentNum=currentNum+1;
    numberElement.textContent=currentNum;
})


