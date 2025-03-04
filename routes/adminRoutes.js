const AdminRouter = require("express").Router()
const encoder = require("../middleware/bodyParser")
const { isLogin, isSuperAdmin } = require("../middleware/authentication")


const { testimonialsUploader, servicesUploader, programsUploader, eventsUploader, blogsUploader, teamsUploader } = require("../middleware/fileUpload")


const { home } = require("../controllers/admin/adminController")
const { hometestimonial,
    createTestimonial,
    storeTestimonial,
    editTestimonial,
    updateTestimonial,
    deleteTestimonial }
    = require("../controllers/admin/testimonialController")

const { homeService,
    createService,
    storeService,
    editService,
    updateService,
    deleteService,
    showService }
    = require("../controllers/admin/serviceController")

const { homeProgram,
    createProgram,
    storeProgram,
    editProgram,
    updateProgram,
    deleteProgram,
    showProgram }
    = require("../controllers/admin/programController")

const { homeEvent,
    createEvent,
    storeEvent,
    editEvent,
    updateEvent,
    deleteEvent,
    showEvent }
    = require("../controllers/admin/EventController")

const { homeBlog,
    createBlog,
    storeBlog,
    editBlog,
    updateBlog,
    deleteBlog,
    showBlog }
    = require("../controllers/admin/blogController")

const { homeTeam,
    createTeam,
    storeTeam,
    editTeam,
    updateTeam,
    deleteTeam, }
    = require("../controllers/admin/teamController")

const { homeNewsletter,
    editNewsletter,
    deleteNewsletter, }
    = require("../controllers/admin/newsletterController")


const { homeContactUs,
    editContactUs,
    deleteContactUs,
    showContactUs }
    = require("../controllers/admin/contactusController")

const { homeUser,
    createUser,
    storeUser,
    editUser,
    updateUser,
    deleteUser,
    loginUser,
    loginUserStore,
    updateProfileStore,
    updateProfile,
    logout,
    forgetPassword1,
    forgetPassword1Store,
    forgetPassword2,
    forgetPassword2Store,
    forgetPassword3,
    forgetPassword3Store, }
    = require("../controllers/admin/userController")


AdminRouter.get("", isLogin, home)

AdminRouter.get("/testimonial", isLogin, hometestimonial)
AdminRouter.get("/testimonial/create", isLogin, createTestimonial)
AdminRouter.post("/testimonial/store", isLogin, testimonialsUploader.single("pic"), encoder, storeTestimonial)
AdminRouter.get("/testimonial/edit/:_id", isLogin, editTestimonial)
AdminRouter.post("/testimonial/update/:_id", isLogin, testimonialsUploader.single("pic"), encoder, updateTestimonial)
AdminRouter.get("/testimonial/delete/:_id", isSuperAdmin, deleteTestimonial)

AdminRouter.get("/service", isLogin, homeService)
AdminRouter.get("/service/create", isLogin, createService)
AdminRouter.post("/service/store", servicesUploader.single("cover"), encoder, storeService)
AdminRouter.get("/service/edit/:_id", isLogin, editService)
AdminRouter.post("/service/update/:_id", isLogin, servicesUploader.single("cover"), encoder, updateService)
AdminRouter.get("/service/delete/:_id", isSuperAdmin, deleteService)
AdminRouter.get("/service/show/:_id", isLogin, showService)


AdminRouter.get("/program", isLogin, homeProgram)
AdminRouter.get("/program/create", isLogin, createProgram)
AdminRouter.post("/program/store", isLogin, programsUploader.single("cover"), encoder, storeProgram)
AdminRouter.get("/program/edit/:_id", isLogin, editProgram)
AdminRouter.post("/program/update/:_id", isLogin, programsUploader.single("cover"), encoder, updateProgram)
AdminRouter.get("/program/delete/:_id", isSuperAdmin, deleteProgram)
AdminRouter.get("/program/show/:_id", isLogin, showProgram)

AdminRouter.get("/event", isLogin, homeEvent)
AdminRouter.get("/event/create", isLogin, createEvent)
AdminRouter.post("/event/store", isLogin, eventsUploader.single("cover"), encoder, storeEvent)
AdminRouter.get("/event/edit/:_id", isLogin, editEvent)
AdminRouter.post("/event/update/:_id", isLogin, eventsUploader.single("cover"), encoder, updateEvent)
AdminRouter.get("/event/delete/:_id", isSuperAdmin, deleteEvent)
AdminRouter.get("/event/show/:_id", isLogin, showEvent)

AdminRouter.get("/blog", isLogin, homeBlog)
AdminRouter.get("/blog/create", isLogin, createBlog)
AdminRouter.post("/blog/store", isLogin, blogsUploader.single("cover"), encoder, storeBlog)
AdminRouter.get("/blog/edit/:_id", isLogin, editBlog)
AdminRouter.post("/blog/update/:_id", isLogin, blogsUploader.single("cover"), encoder, updateBlog)
AdminRouter.get("/blog/delete/:_id", isSuperAdmin, deleteBlog)
AdminRouter.get("/blog/show/:_id", isLogin, showBlog)

AdminRouter.get("/team", isLogin, homeTeam)
AdminRouter.get("/team/create", isLogin, createTeam)
AdminRouter.post("/team/store", isLogin, teamsUploader.single("pic"), encoder, storeTeam)
AdminRouter.get("/team/edit/:_id", isLogin, editTeam)
AdminRouter.post("/team/update/:_id", isLogin, teamsUploader.single("pic"), encoder, updateTeam)
AdminRouter.get("/team/delete/:_id", isSuperAdmin, deleteTeam)

AdminRouter.get("/newsletter", isLogin, homeNewsletter)
AdminRouter.get("/newsletter/edit/:_id", isLogin, editNewsletter)
AdminRouter.get("/newsletter/delete/:_id", isSuperAdmin, deleteNewsletter)

AdminRouter.get("/contactus", isLogin, isLogin, homeContactUs)
AdminRouter.get("/contactus/edit/:_id", isLogin, editContactUs)
AdminRouter.get("/contactus/delete/:_id", isSuperAdmin, deleteContactUs)
AdminRouter.get("/contactus/show/:_id", isLogin, showContactUs)

AdminRouter.get("/user", isSuperAdmin, homeUser)
AdminRouter.get("/user/create", isSuperAdmin, createUser)
AdminRouter.post("/user/store", isSuperAdmin, encoder, storeUser)
AdminRouter.get("/user/edit/:_id", isSuperAdmin, editUser)
AdminRouter.post("/user/update/:_id", isSuperAdmin, encoder, updateUser)
AdminRouter.get("/user/delete/:_id", isSuperAdmin, deleteUser)
AdminRouter.get("/user/login", loginUser)
AdminRouter.post("/user/login", encoder, loginUserStore)
AdminRouter.get("/user/update-profile", updateProfile)
AdminRouter.post("/user/update-profile", encoder, updateProfileStore)
AdminRouter.get("/user/logout", logout)
AdminRouter.get("/user/forget-password-1", forgetPassword1),
    AdminRouter.post("/user/forget-password-1", encoder, forgetPassword1Store),
    AdminRouter.get("/user/forget-password-2", forgetPassword2),
    AdminRouter.post("/user/forget-password-2", encoder, forgetPassword2Store),
    AdminRouter.get("/user/forget-password-3", forgetPassword3),
    AdminRouter.post("/user/forget-password-3", encoder, forgetPassword3Store),



    module.exports = AdminRouter