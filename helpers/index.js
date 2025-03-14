const hbs = require("hbs")

hbs.registerHelper("dropdownHelper", (selected, option) => {
    return selected === option ? "selected" : ""

})

hbs.registerHelper("activeHelper", (value) => {
    return value ? "Yes" : "No"
})

hbs.registerHelper("dateHelper", (value) => {
    return value.toDateString()
})
hbs.registerHelper("dateTimeHelper", (value) => {
    return value.toLocaleString()
})

hbs.registerHelper("showButtonHelper", (value1, value2) => {
    return value1 === value2 ? false : true
})

hbs.registerHelper("isSuperAdmin", (role) => {
    // console.log(role) 
    return role === "Super Admin" ? true : false
})