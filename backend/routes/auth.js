
const express = require("express");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const User = require("../models/User");




const router = express.Router();

const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential is required.",
      });
    }

    // Verify the credential with Google.
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload || !payload.sub || !payload.email) {
      return res.status(401).json({
        message: "Invalid Google account information.",
      });
    }

    if (!payload.email_verified) {
      return res.status(401).json({
        message: "Please use a verified Google email.",
      });
    }

    // Find the user by Google's stable account ID.
    let user = await User.findOne({
      googleId: payload.sub,
    });

    // Create an account on the first successful sign-in.
    if (!user) {
      user = await User.create({
        googleId: payload.sub,
        name: payload.name || "ShareBox Member",
        email: payload.email,
        picture: payload.picture || "",
      });
    }

    // Create ShareBox's own session token.
    const sessionToken = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("sharebox_session", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });

    return res.status(200).json({
      message: "Authentication successful.",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture,
      },
    });
  } catch (error) {
    console.error("Google authentication failed:", error.message);

    return res.status(401).json({
      message: "Google authentication failed.",
    });
  }
});

module.exports = router;
