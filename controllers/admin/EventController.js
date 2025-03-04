const fs = require("fs")
const mailer = require("../../mailer/index")

const Event = require("../../models/Event")
const Newsletter = require("../../models/Newsletter")


async function homeEvent(req, res) {
    try {
        let data = await Event.find().sort({ _id: -1 })
        res.render("admin/event/index", {
            title: "Admin - Event",
            session: req.session,
            data: data,
        })
    } catch (error) {
        console.log(error)
        res.redirect("/admin/event")

    }
}

function createEvent(req, res) {
    res.render("admin/event/create", {
        title: "Admin - Create Event",
        errorMessage: {},
        session: req.session,
        data: { sortOrder: 10 },
    })
}

async function storeEvent(req, res) {
    try {
        var data = new Event(req.body)
        if (req.file) {
            data.cover = req.file.path
        } 
        const newsletter = await Newsletter.find()
        newsletter.forEach(x => {
            mailer.sendMail({
                from: process.env.MAIL_SENDER,
                to: x.email,
                subject: `Checkout Our New Event : Team ${process.env.SITE_NAME}`,
                text: `
                    Hello Guardians
                    Please Checkout Our Latest  Event
                    Click on the link Below
                    ${process.env.SERVER}/event/${data._id}
                `
            }, (error) => {
                if (error)
                    console.log(error)
            })

        })

        await data.save()
        res.redirect("/admin/event")
    } catch (error) {
        try {
            fs.unlinkSync(req.file.path)
        } catch (error) { }

        let errorMessage = {}
        error.errors?.name ? errorMessage.name = error.errors.name.message : null;
        error.errors?.shortDescription ? errorMessage.shortDescription = error.errors.shortDescription.message : null;
        error.errors?.longDescription ? errorMessage.longDescription = error.errors.longDescription.message : null;
        error.errors?.cover ? errorMessage.cover = error.errors.cover.message : null;
        error.errors?.date ? errorMessage.date = error.errors.date.message : null;
        error.errors?.time ? errorMessage.time = error.errors.date.message : null;
        error.errors?.location ? errorMessage.location = error.errors.date.message : null;
        res.render("admin/event/create", {
            title: "Admin - Create Event",
            errorMessage: errorMessage,
            session: req.session,
            data: data
        })
    }
}

async function editEvent(req, res) {
    try {
        let data = await Event.findOne({ _id: req.params._id })
        if (data) {
            res.render("admin/event/edit", {
                title: "Admin - Update Event",
                errorMessage: {},
                session: req.session,
                data: data
            })
        }
        else {
            res.redirect("/admin/event")
        }
    } catch (error) {
        console.log(error)
        res.redirect("/admin/event")

    }
}

async function updateEvent(req, res) {
    try {
        var data = await Event.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name
            data.time = req.body.time
            data.location = req.body.location
            data.date = req.body.date
            data.shortDescription = req.body.shortDescription
            data.longDescription = req.body.longDescription
            data.metaTitle = req.body.metaTitle
            data.metaDescription = req.body.metaDescription
            data.metaKeywords = req.body.metaKeywords
            data.active = req.body.active
            data.sortOrder = req.body.sortOrder
            if (await data.save() && req.file) {
                try {
                    fs.unlinkSync(data.cover)
                } catch (error) { }
                data.pic = req.file.path
            }

            const newsletter = await Newsletter.find()
            newsletter.forEach(x => {
                mailer.sendMail({
                    from: process.env.MAIL_SENDER,
                    to: x.email,
                    subject: `There is Some Update Regarding Our Event : Team ${process.env.SITE_NAME}`,
                    text: `
                        Hello Guardians
                        There is Some Update Regarding Our Event
                        please Click on the link Below to more details
                        ${process.env.SERVER}/event/${data._id}
                    `
                }, (error) => {
                    if (error)
                        console.log(error)
                })
    
            })

            await data.save()
        }
        res.redirect("/admin/event")

    } catch (error) {
        try {
            fs.unlinkSync(req.file.path)
        } catch (error) { }

        let errorMessage = {}
        error.errors?.name ? errorMessage.name = error.errors.name.message : null;
        error.errors?.shortDescription ? errorMessage.shortDescription = error.errors.shortDescription.message : null;
        error.errors?.longDescription ? errorMessage.longDescription = error.errors.longDescription.message : null;
        error.errors?.cover ? errorMessage.cover = error.errors.cover.message : null;
        error.errors?.date ? errorMessage.date = error.errors.date.message : null;
        error.errors?.time ? errorMessage.time = error.errors.time.message : null;
        error.errors?.location ? errorMessage.location = error.errors.time.message : null;
        res.render("admin/event/edit", {
            title: "Admin - Update Event",
            errorMessage: errorMessage,
            session: req.session,
            data: data
        })

    }
}

async function deleteEvent(req, res) {
    try {
        let data = await Event.findOne({ _id: req.params._id })
        if (data) {
            try {
                fs.unlinkSync(data.cover)
            } catch (error) { }
            await data.deleteOne()
        }
        res.redirect("/admin/event")
    } catch (error) {
        console.log(error)
        res.redirect("/admin/event")

    }
}
async function showEvent(req, res) {
    try {
        let data = await Event.findOne({ _id: req.params._id })
        if (data) {
            res.render("admin/event/show", {
                title: `Admin - Event "${data.name}"`,
                data: data,
                session: req.session
            })
        }
        else
            res.redirect("/admin/event")
    } catch (error) {
        console.log(error)
        res.redirect("/admin/event")

    }
}

module.exports = {
    homeEvent: homeEvent,
    createEvent: createEvent,
    storeEvent: storeEvent,
    editEvent: editEvent,
    updateEvent: updateEvent,
    deleteEvent: deleteEvent,
    showEvent: showEvent
}