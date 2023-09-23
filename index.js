// Adding Click Event in "Add to List" button

let addbtn=document.getElementById('add');

addbtn.addEventListener('click',()=>
{
let tit=document.getElementById('title').value;
let desc=document.getElementById('description').value;
    
if(localStorage.getItem('jsonitems')==null)
{
    let arr=[];
    arr.push([tit,desc]);
    localStorage.setItem('jsonitems',JSON.stringify(arr));
}

else
{
   let arrstring=localStorage.getItem('jsonitems');
   arr=JSON.parse(arrstring);
   arr.push([tit,desc]);
   localStorage.setItem('jsonitems',JSON.stringify(arr));
}
// Adding Data from local Storage to Table(Populating the table)

let tablebody = document.getElementById("tablebody");
let str="";

arr.forEach((element,index) => {
str +=`
<tr>
<th scope="row">${index + 1}</th>
<td>${element[0]}</td>
<td>${element[1]}</td> 
<td> <button class="btn btn-primary btn-sm">Delete</button> </td> 
</tr>
`  
});

tablebody.innerHTML=str;
});