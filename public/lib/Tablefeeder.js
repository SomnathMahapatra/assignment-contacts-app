//Feeder
function tableFeeder(){
    var fname =$(`#firstname`).val();
    var lname =$(`#lastname`).val();
    var Email =$(`#emailid`).val();
    var Phone =$(`#Phone`).val();
    console.log("Feeder executed")  
    var table = document.getElementById("myTable");
    var buttonRed =
      '<button type="button" class="btn btn-xs btn-danger" onclick="deleteFunction(this)">Delete</button>';
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = fname;
    cell2.innerHTML = lname;
    cell3.innerHTML = Email;
    cell4.innerHTML = Phone;
    cell5.innerHTML = buttonRed;
}
// table deleter
function deleteFunction(x) {
    console.log(x);
    var i = x.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i - 1);
  }
