const MainRouter = require("express").Router()
const encoder = require("../middleware/bodyParser")

const { home,
     about,
     service,
     showService,
     program,
     showProgram,
     blog,
     showBlog,
     team,
     showTeam,
     testimonial,
     showTestimonial,
     contactUs,
     contactUsStore,
     events,
     showEvent,
     newsletter,
     newsletterConfirmation,
} = require("../controllers/main/index")

MainRouter.get("", home)
MainRouter.get("/about", about)
MainRouter.get("/service", service)
MainRouter.get("/service/:_id", showService)
MainRouter.get("/program", program)
MainRouter.get("/program/:_id", showProgram)
MainRouter.get("/event", events)
MainRouter.get("/event/:_id", showEvent)
MainRouter.get("/blog", blog)
MainRouter.get("/blog/:_id", showBlog)
MainRouter.get("/team", team)
MainRouter.get("/team/:_id", showTeam)
MainRouter.get("/testimonial", testimonial)
MainRouter.get("/testimonial/:_id", showTestimonial)
MainRouter.get("/contactus", contactUs)
MainRouter.post("/contactus", encoder, contactUsStore)
MainRouter.post("/newsletter", encoder, newsletter)
MainRouter.get("/newsletter-confirmation", newsletterConfirmation)

module.exports = MainRouter