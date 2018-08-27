function formParent() {
    $( "#landingPage").remove();
    $("#rootDiv").append(` <div class="container" id = "rowDiv" ></div>`);
    $("#rowDiv").append(`<div id = "subdiv2" class=" subdiv2" ></div>`);
    $("#subdiv2").append(`<h1>Create Account</h1>`);
    $('#subdiv2').append(' <form name="myForm" id="formid"  novalidate></form>   ')
    
}
