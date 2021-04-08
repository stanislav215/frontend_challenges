export const formConfig = [
    {
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Your Name",
            },
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    },
    {
        email: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Your email",
            },
            validation: {
                required: true
            },
            valid: false,
            touched: false

        }
    },
    {
        street: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Street",
            },
            validation: {
                required: true
            },
            valid: false,
            touched: false

        }
    },
    {
        zipCode: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "ZIP CODE",
            },
            validation: {
                required: true,
                maxLenght: 5
            },
            valid: false,
            touched: false

        }
    },
    {
        country: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Country",
            },
            validation: {
                required: true
            },
            valid: false,
            touched: false

        }
    },
    {
        deliveryMethond: {
            elementType: "select",
            elementConfig: {
                options: [
                    { value: "fastest", displayValue: "Fastest" },
                    { value: "cheapest", displayValue: "Cheapest" },
                ]
            },
            valid: true,
            validation: {
                required: true
            }
        }
    }

]