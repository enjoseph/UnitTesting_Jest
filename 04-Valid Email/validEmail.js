const validMail = (email) => {
  if (typeof email !== "string") {
    throw new Error("Function works only for strings!");
  }

  if (
    email.includes("@") &&
    (email.endsWith(".com") || email.endsWith(".az") || email.endsWith(".ru"))
  ) {
    return email;
  } else {
    throw new Error("Invalid email structure !");
  }

  console.log(email);
};

module.exports = { validMail };
