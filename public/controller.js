const elementCreds = [{
        labelName: "First Name:",
        inputID: "firstname",
        inputType: "text",
        validation: [{
                regexp: /^$/,
                errorText: "This field cannot be left empty"
            },
            {
                regexp: /^\d+$/,
                errorText: "Should not be number"
            }
        ]

    },
    {
        labelName: "Last Name:",
        inputID: "lastname",
        inputType: "text",
        validation: [{
                regexp: /^$/,
                errorText: "This field cannot be left empty"
            },
            {
                regexp: /^\d+$/,
                errorText: "Should not be number"
            }
        ]
    },
    {
        labelName: "E-mail:",
        inputID: "emailid",
        inputType: "email",
        validation: [{
                regexp: /^$/,
                errorText: "This field cannot be left empty"
            },
            {
                regexp: /^\d+$/,
                errorText: "Should not be number"
            }
        ]

    },
    {
        labelName: "Phone number:",
        inputID: "Phone",
        inputType: "tel",
        validation: [{
                regexp: /^$/,
                errorText: "This field cannot be left empty"
            }
            
        ]
    }
];

const signupCreds = [{
    labelName: "First Name:",
    inputID: "firstname",
    inputType: "text",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        },
        {
            regexp: /^\d+$/,
            errorText: "Should not be number"
        }
    ]

},
{
    labelName: "Last Name:",
    inputID: "lastname",
    inputType: "text",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        },
        {
            regexp: /^\d+$/,
            errorText: "Should not be number"
        }
    ]
},
{
    labelName: "E-mail:",
    inputID: "emailid",
    inputType: "email",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        },
        {
            regexp: /^\d+$/,
            errorText: "Should not be number"
        }
    ]

},
{
    labelName: "Phone number:",
    inputID: "Phone",
    inputType: "tel",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        }
        
    ]
}
];


//JSONS***
const BusinessCreds = [{
    labelName: "First Name:",
    inputID: "firstname",
    inputType: "text",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        },
        {
            regexp: /^\d+$/,
            errorText: "Should not be number"
        }
    ]

},
{
    labelName: "Last Name:",
    inputID: "lastname",
    inputType: "text",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        },
        {
            regexp: /^\d+$/,
            errorText: "Should not be number"
        }
    ]
},
{
    labelName: "E-mail:",
    inputID: "emailid",
    inputType: "email",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        },
        {
            regexp: /^\d+$/,
            errorText: "Should not be number"
        }
    ]

},
{
    labelName: "Phone number:",
    inputID: "Phone",
    inputType: "tel",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        }
        
    ]
},
{
    labelName: "Company Name:",
    inputID: "companyname",
    inputType: "text",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        }
        
    ]
},
{
    labelName: "Company E-mail:",
    inputID: "companyemail",
    inputType: "email",
    validation: [{
            regexp: /^$/,
            errorText: "This field cannot be left empty"
        }
        
    ]
}


];

