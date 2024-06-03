function insert_Row() {
    //Write your code here
	let table=document.querySelector('#sampleTable')
	  var newRow = table.insertRow(0);
    
    // Insert new cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    
    // Set the content for the new cells
    cell1.innerHTML = "New cell1";
    cell2.innerHTML = "New cell2";

  
}
