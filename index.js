// Adding Click Event in "Add to List" button

let addbtn=document.getElementById('add');

addbtn.addEventListener('click',()=>
{
let tit=document.getElementById('title').value;
let desc=document.getElementById('description').value;
    
if(localStorage.getItem('jsonitems')==null)
{
    let arr=[];
    arr.push(tit,desc);

    localStorage.setItem('jsonitems',JSON.stringify(arr));
}

else
{
   let arrstring=localStorage.getItem('jsonitems');
   let arr2=JSON.parse(arrstring);

    arr2.push(tit,desc);
    localStorage.setItem('jsonitems',JSON.stringify(arr2));
}

})