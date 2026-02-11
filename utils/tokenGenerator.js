const crypto = require("crypto");
const { getSecretFromDB } = require("./mockDb");

const generateToken = async (email) => {
  if (!email || typeof email !== "string") {
    throw new Error("A valid email is required to generate a token");
  }


  const secret = await getSecretFromDB();

  return crypto
    .createHmac("sha256", secret)
    .update(email)
    .digest("base64url"); // ✅ FIX 3: base64url is URL/header safe
};

module.exports = { generateToken };