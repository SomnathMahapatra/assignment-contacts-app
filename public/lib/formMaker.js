function formMaker(controlJson, jsonsrc) {

    console.log(classType);
    controlJson.map((item, index) => {

        $('#formid').append(`<div id = "divElement${index}"></div>`);
        $(`#divElement${index}`).append(`<label>${item.labelName}</label>`);
        $(`#divElement${index}`).append(`<input id = "${item.inputID}" class = "genralinput form-control" type = "${item.inputType}" placeholder = "Enter ${item.labelName}" name = "${item.inputID}"></input>`);
    });
    $('#formid').append(`<button id = "buttonx" type = "submit" class = "btn btn-primary btn-md"  onclick= "submitHandler(event,${jsonsrc})">Submit</button>`);

    //construct table
    $("#rootDiv").append(` <div class = "container" id = "table" ></div>`);;

    $("#table").append(`<div id = "subdiv3" class=" subdiv2" ></div>`);
    $("#subdiv3").append(`<table class = "table table-striped"><thead class="thead-dark">
  <tr>
  <th>UID</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>E-mail</th>
  <th>Phone Nmber </th>
  <th>Company Name</th>
  <th>Company Email</th>
  <th>Account type</th>
  <th>OPS</th>
  </tr>
</thead>
<tbody id="myTable">
</tbody></table>`);

}

function submitHandler(e, jsonsrc) {
    console.log(jsonsrc.length, "######################")
    e.preventDefault();
    errorFlag = false;

    function errelement(id, i, errmsg) {
        revokeerr(id, i);
        $(`<p id = "para${id}${i}" class = "errorClass">${errmsg}</p>`).insertAfter(`#${id}`)
    }

    function revokeerr(id, i) {
        var child = document.getElementById("para" + id + i);
        if (child) {
            child.parentNode.removeChild(child);
        }
    }
    jsonsrc.map((item, index) => {
        var inputValue = $(`#${item.inputID}`).val()
        var validation = item.validation;
        validation.map((exp, i) => {
            var re = exp.regexp;
            re = new RegExp(re)
            if (re.test(String(inputValue).toLowerCase())) {
                //call  error element function composer
                console.log("regexp matched")
                errelement(item.inputID, i, exp.errorText);
                errorFlag = true;
            } else {
                revokeerr(item.inputID, i)
            }
            console.log("count regexp", i)
        })
    })
    console.log("*******Result***", errorFlag);
    if (errorFlag === false) {
        tableFeeder(jsonsrc);
    }
}
//Feeder
function tableFeeder(jsonsrc) {
    console.log("&*&*&*&*", jsonsrc)

    let inputValBuffer = []
    jsonsrc.map((item, index) => {
        inputValBuffer.push($(`#${item.inputID}`).val().toString());
    })


    // prototypal inheritance
    function personalClass(fname, lname, emailID, phone) {
        this.firstname = fname
        this.lastname = lname;
        this.emailid = emailID;
        this.Phone = phone;
    };

    function businessClass(fname, lname, emailID, phone, companyname, companyemail) {
        personalClass.call(this, fname, lname, emailID, phone);

        this.companyname = companyname;
        this.companyemail = companyemail;
    } // * * * * * * 
    console.log("Feeder executed")
    console.log(inputValBuffer.toString());
    if (classType == 'businessClass') {
        var classObject = new businessClass(...inputValBuffer);

        localStorage.setItem(`content${counter}`, JSON.stringify(classObject));
        counter++;
    } else {
        var classObject = new personalClass(...inputValBuffer);
    }

    console.log('5454554', classObject)
    let accounttype = classObject.constructor.name

    // $.post("http://localhost:3000/users/", {
    //     accounttype,
    //     ...classObject
    // }, (data, status) => {
    //     console.log(data, status)
    // })



    var table = document.getElementById("myTable");
    var buttonRed =
        '<button type="button" class="btn btn-xs btn-danger" onclick="deleteFunction(this)">Delete</button>';
    var row = table.insertRow(0);

    //api GET call
    $.getJSON("http://localhost:3000/users/", function (result) {

      let tempbuffer =   Object.keys(result).map(function (key) {
                    return [result[key]];
                 });
const singleUser = tempbuffer[0][0];
      
                 
     
        singleUser.map((item,index)=>{
            console.log(item);
            $('#myTable').append(`<tr id = "tr${index}"></tr>`);

            for (let t  in  item)
            {
                console.log("***",item[t])
                let sfc = item[t]
                console.log(index)
                $(`#tr${index}`).append(`<td>${sfc}</td>`);
               
            }
            $(`#tr${index}`).append(`<td>${buttonRed}</td>`);
           
                  })
     

    });

    //row.insertCell(jsonsrc.length).innerHTML = buttonRed;
}
// table deleter
function deleteFunction(x) {
    var i = x.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i - 1);
}