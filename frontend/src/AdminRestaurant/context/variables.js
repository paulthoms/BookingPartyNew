const fields = {
    OwnerRestaurant : [
        {
            id : "name",
            name : "User Name"
        },
        {
            id : "password",
            name : "Password"
        },
        {
            id : "comfirm_password",
            name : "Comfirm Password"
        }        
    ],
    Dish : [
        {
            id : "name",
            name : "Name"
        },
        {
            id : "image",
            name : "Image"
        },
        {
            id : "describe",
            name : "Describe"
        },
        {
            id : "cost",
            name : "Cost"
        }   
    ],
    UserProfile : [
        {
            id : "name",
            name : "User Name"
        },
        {
            id : "image",
            name : "Image"
        }
    ]
}

const type = {
    Dish : "edit",
    Booking : "comfirm"
}

module.exports = {
    fields,
    type
}

