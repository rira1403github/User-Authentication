import { Router } from "express";
const router = Router();
/**importing conytrollers */
import * as controllers from "../controllers/appControllers.js";
import { registerMail } from '../controllers/mailer.js';
import Auth,{localVariables} from '../middlewares/auth.js';


/** POST Methods */
router.route('/register').post(controllers.register); // register user
router.route('/registerMail').post(registerMail); // send the email
router.route('/authenticate').post(controllers.verifyUser, (req, res) => res.end()); // authenticate user
router.route('/login').post(controllers.verifyUser,controllers.login); // login in app

/** GET Methods */
router.route('/user/:username').get(controllers.getUser) // user with username
router.route('/generateOTP').get(controllers.verifyUser, localVariables, controllers.generateOTP)
router.route('/verifyOTP').get(controllers.verifyUser) // verify generated OTP
router.route('/createResetSession').get(controllers.createResetSession) // reset all the variables


/** PUT Methods */
router.route('/updateuser').put(Auth , controllers.updateUser); // is use to update the user profile
router.route('/resetPassword').put(controllers.verifyUser, controllers.resetPassword); // use to reset password

export default router;