// Adding Click Event in "Add to List" button

function getAndupdate() 
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
    update();
}


function update ()
{
    if(localStorage.getItem('jsonitems')==null)
    {
        let arr=[];
        localStorage.setItem('jsonitems',JSON.stringify(arr));
    }
    
    else
    {
       let arrstring=localStorage.getItem('jsonitems');
       arr=JSON.parse(arrstring);
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
    <td> <button class="btn btn-primary btn-sm" onclick="remove(${index})">Delete</button> </td> 
    </tr>
    `  
    });
    // remove function is calling in above line
    
    tablebody.innerHTML=str;
}

let addbtn=document.getElementById('add');
addbtn.addEventListener('click',getAndupdate);
update();


// Activating delete button from "your items section"
function remove (index)
{
    // console.log("deleted list item:",index+1);

    let arrstring=localStorage.getItem('jsonitems');
    arr=JSON.parse(arrstring);
    // Deleting given index element from the array using splice()
    arr.splice(index,1);
    localStorage.setItem('jsonitems',JSON.stringify(arr));
    update();
}


// Added Delete Full list button
function deletefulllist() 
{
   let confirmationmsg= confirm("Are you sure you want to delete the full list?");
    if (confirmationmsg) 
    {
        let arrstring=localStorage.getItem('jsonitems');
        arr=JSON.parse(arrstring);
        arr.splice(0);
        localStorage.setItem('jsonitems',JSON.stringify(arr));
        update();
    }
    else 
    {
        alert("The list has not been deleted.");
    }
   
}