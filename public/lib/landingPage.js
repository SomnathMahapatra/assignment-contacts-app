function DisplayPesonal(){
//remove the elements btw root div

  formParent();
    formMaker(elementCreds,'elementCreds','personal');
    
}


function DisplayBusiness(){
  classType = "businessClass"
  formParent();         
        formMaker(BusinessCreds,'BusinessCreds','business');
        
}


function  landingPage(){
    $("#rootDiv").append(` <div class = "container" id = "landingPage" ></div>`);
  ;
 
    $("#landingPage").append(`<div id = "subdiv2" class=" subdiv1" ></div>`);
    $("#subdiv2").append(`<h2 class = "jumbotron txtfmt">Welcome !!</h2><h5 class = "padder">Choose the type of account you want to create</h5>`);
    $("#subdiv2").append(`<div id = "rowdivsd2" class = "row"></div>`);

    $("#rowdivsd2").append(`<div align = "right" id="sd2sd1" class = "col-md-6"></div>`);
    $("#sd2sd1").append(`<button id="pButton" onclick="DisplayPesonal()" class = "btn btn-primary">Create Personal account</button>`);
    $("#rowdivsd2").append(`<div align = "left" id="sd2sd2" class = "col-md-6"></div>`);
    $("#sd2sd2").append(`<button id="bButton" onclick="DisplayBusiness()" class = "btn btn-primary">Create business account</button>`);
}