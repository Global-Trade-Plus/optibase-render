var express = require("express");
var { hashPassword,sendPasswordOtp,sendRegOtp,userRegisteration, sendWelcomeEmail,resendWelcomeEmail,resetEmail, sendUserDetails, userRegisteration } = require("../../utils");
const UsersDatabase = require("../../models/User");
const speakeasy = require('speakeasy');

const secret = speakeasy.generateSecret({ length: 4 });

var router = express.Router();
const { v4: uuidv4 } = require("uuid");

// Function to generate a referral code
function generateReferralCode(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }

  return code;
}


router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, country, referralCode, mobile } = req.body;

    if (!firstName || !lastName || !email || !password || !country) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }

    // 🔹 Check if email already exists (with index hint for performance)
    const existingUser = await UsersDatabase.findOne({ email }).lean();
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "This email address is already registered.",
      });
    }

    // 🔹 Validate referral code (if provided)
    let referrer = null;
    if (referralCode) {
      referrer = await UsersDatabase.findOne({ referralCode });
      if (!referrer) {
        return res.status(400).json({
          success: false,
          message: "Invalid referral code.",
        });
      }
    }

    // 🔹 Generate OTP
    const otp = speakeasy.totp({
      secret: process.env.SECRET_KEY,
      encoding: "base32",
    });
    const otpExpiration = Date.now() + 5 * 60 * 1000; // 5 minutes

    // 🔹 Prepare user data
    const newUserData = {
      firstName,
      lastName,
      email: email.toLowerCase(),
      password: hashPassword(password),
      country,
      trader: "",
      mobile,
      amountDeposited: "You are not eligible to view livestream of ongoing trade. Kindly contact your trader or support.",
      profit: 0,
      balance: 0,
      copytrading: 0,
      plan: " ",
      kyc: "unverified",
      address: "",
      condition: " ",
      server: " ",
      referalBonus: 0,
      transactions: [],
      withdrawals: [],
      planHistory: [],
      state: "",
      city: "",
      zip: "",
      verified: false,
      isDisabled: false,
      referredUsers: [],
      trades: [],
      referralCode: generateReferralCode(6),
      referredBy: referrer ? referrer.firstName : null,
    };

    // 🔹 Create the user atomically
    const createdUser = await UsersDatabase.create(newUserData);

    // 🔹 Update referrer info safely (non-blocking)
    if (referrer) {
      referrer.referredUsers.push(createdUser.firstName);
      await referrer.save().catch(err => console.warn("Referrer save skipped:", err.message));
    }

    // 🔹 Send welcome + registration emails (async, non-blocking)
    sendWelcomeEmail({ to: email, otp }).catch(console.error);
    userRegisteration({ firstName, email }).catch(console.error);

    // 🔹 Response
    return res.status(201).json({
      success: true,
      message: "Account created successfully. Please verify with the OTP sent to your email.",
      data: {
        userId: createdUser._id,
        otp,
        otpExpiration,
      },
    });

  } catch (error) {
    console.error("❌ Registration error:", error);

    // Duplicate key error safety (MongoDB 11000)
    if (error.code === 11000 && error.keyValue?.email) {
      return res.status(409).json({
        success: false,
        message: "Email already registered. Please log in instead.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
});



// router.post("/register", async (req, res) => {
//   const { firstName, lastName, email, password, country, referralCode } = req.body;

//   try {
//     // Check if any user has that email
//     const user = await UsersDatabase.findOne({ email });

//     if (user) {
//       return res.status(400).json({
//         success: false,
//         message: "Email address is already taken",
//       });
//     }

//     // Find the referrer based on the provided referral code
//     let referrer = null;
//     if (referralCode) {
//       referrer = await UsersDatabase.findOne({ referralCode });
//       if (!referrer) {
//         return res.status(400).json({
//           success: false,
//           message: "Invalid referral code",
//         });
//       }
//     }

//     // Create a new user with referral information
//     const newUser = {
//       firstName,
//       lastName,
//       email,
//       password: hashPassword(password),
//       country,
//       amountDeposited: 0,
//       profit: 0,
//       balance: 0,
//       referalBonus: 0,
//       transactions: [],
//       withdrawals: [],
//       accounts: {
//         eth: {
//           address: "",
//         },
//         ltc: {
//           address: "",
//         },
//         btc: {
//           address: "",
//         },
//         usdt: {
//           address: "",
//         },
//       },
//       verified: false,
//       isDisabled: false,
//     };

//     // Generate a referral code for the new user only if referralCode is provided
//     if (referralCode) {
//       newUser.referralCode = generateReferralCode(6);
//     }

//     // If there's a referrer, update their referredUsers list
//     if (referrer) {
//       newUser.referredBy = referrer._id;
//       referrer.referredUsers.push(newUser._id);
//       await referrer.save();
//     }

//     // Create the new user in the database
//     const createdUser = await UsersDatabase.create(newUser);
//     const token = uuidv4();
//     sendWelcomeEmail({ to: email, token });

//     return res.status(200).json({ code: "Ok", data: createdUser });
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// });


// router.post("/register", async (req, res) => {
//   const { firstName, lastName, email, password, country } = req.body;

//   //   check if any user has that username
//   const user = await UsersDatabase.findOne({ email });

//   // if user exists
//   if (user) {
//     res.status(400).json({
//       success: false,
//       message: "email address is already taken",
//     });
//     return;
//   }

//   await UsersDatabase.create({
//     firstName,
//     lastName,
//     email,
//     password: hashPassword(password),
//     country,
//     amountDeposited: 0,
//     profit: 0,
//     balance: 0,
//     referalBonus: 0,
//     transactions: [],
//     withdrawals: [],
//     accounts: {
//       eth: {
//         address: "",
//       },
//       ltc: {
//         address: "",
//       },
//       btc: {
//         address: "",
//       },
//       usdt: {
//         address: "",
//       },
//     },
//     verified: false,
//     isDisabled: false,
//   })
//     .then((data) => {
//       return res.json({ code: "Ok", data: user });
//     })
//     .then(() => {
//       var token = uuidv4();
//       sendWelcomeEmail({ to: req.body.email, token });
//     })
//     .catch((error) => {
//       res.status(400).json({
//         success: false,
//         message: error.message,
//       });
//     });
// });



router.post("/register/resend", async (req, res) => {
  const { email } = req.body;
  const user = await UsersDatabase.findOne({ email });
  const otp = speakeasy.totp({
    secret: process.env.SECRET_KEY, // Secure OTP generation
    encoding: "base32",
  });

  if (!user) {
    res.status(404).json({
      success: false,
      status: 404,
      message: "User not found",
    });

    return;
  }

  const otpExpiration = Date.now() + (5 * 60 * 1000); // 5 minutes in milliseconds

  try {
    
    res.status(200).json({
      success: true,
      status: 200,
      message: "OTP resent successfully",
      otp:otp,
      otpExpiration: otpExpiration,
    });
    
 sendRegOtp({to:req.body.email,otp})
   
    // sendUserDetails({
    //   to:req.body.email
    //   });
      

  } catch (error) {
    console.log(error);
  }
});


router.post("/register/reset", async (req, res) => {
  const { email } = req.body;
  const user = await UsersDatabase.findOne({ email });

  if (!user) {
    res.status(404).json({
      success: false,
      status: 404,
      message: "User not found",
    });

    return;
  }

  try {
    
    res.status(200).json({
      success: true,
      status: 200,
      message: "OTP resent successfully",
    });

    resetEmail({
      to:req.body.email
    });


   

  } catch (error) {
    console.log(error);
  }
});

router.post("/register/otp", async (req, res) => {
  const { email } = req.body;
  const { password }=req.body;
  const {firstName }=req.body;
  const user = await UsersDatabase.findOne({ email });

  if (!user) {
    res.status(404).json({
      success: false,
      status: 404,
      message: "User not found",
    });

    return;
  }

  try {
    
    res.status(200).json({
      success: true,
      status: 200,
      message: "OTP correct ",
    });

    sendUserDetails({
      to:req.body.email,
      password:req.body.password,
      firstName:req.body.firstName
    });


   

  } catch (error) {
    console.log(error);
  }
});




// const express = require("express");
// const { hashPassword, sendWelcomeEmail, resendWelcomeEmail } = require("../../utils");
// const UsersDatabase = require("../../models/User");
// const router = express.Router();
// const { v4: uuidv4 } = require("uuid");

// // Function to generate a referral code
// function generateReferralCode(length) {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let code = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     code += characters.charAt(randomIndex);
//   }

//   return code;
// }



// // Your registration route

// // Your registration route
// router.post("/register", async (req, res) => {
//   const { firstName, lastName, email, password, country, referralCode } = req.body;

//   try {
//     // Check if any user has that email
//     const user = await UsersDatabase.findOne({ email });

//     if (user) {
//       return res.status(400).json({
//         success: false,
//         message: "Email address is already taken",
//       });
//     }

//     // Find the referrer based on the provided referral code
//     let referrer = null;
//     if (referralCode) {
//       referrer = await UsersDatabase.findOne({ referralCode });
//       // You can remove the code that checks for a valid referral code here

//       // Optionally, you can handle the case where the referral code is invalid
//       // by setting referrer to null and proceeding with registration
//     }

//     // Create a new user with referral information
//     const newUser = {
//       firstName,
//       lastName,
//       email,
//       password: hashPassword(password),
//       country,
//       amountDeposited: 0,
//       profit: 0,
//       balance: 0,
//       referalBonus: 0,
//       transactions: [],
//       withdrawals: [],
//       accounts: {
//         eth: {
//           address: "",
//         },
//         ltc: {
//           address: "",
//         },
//         btc: {
//           address: "",
//         },
//         usdt: {
//           address: "",
//         },
//       },
//       verified: false,
//       isDisabled: false,
//       referralCode: generateReferralCode(6), // Generate a referral code for the new user
//       referredBy: referrer ? referrer._id : null, // Store the ID of the referrer if applicable
//       referredUsers: [], // Initialize the referredUsers property as an empty array
//     };

//     // Create the new user in the database
//     const createdUser = await User.create(newUser);
//     const token = uuidv4();
//     sendWelcomeEmail({ to: email, token });

//     // If there's a referrer, update their referredUsers list
//     if (referrer) {
//       referrer.referredUsers.push(createdUser._id);
//       await referrer.save();
//     }

//     return res.status(200).json({ code: "Ok", data: createdUser });
//   } catch (error) {
//     console.error("Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//     });
//   }
// });
module.exports = router;
