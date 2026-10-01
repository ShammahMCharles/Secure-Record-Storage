const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+@.+\..+/, "Please provide a valid email address"],
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [7, "Password must be atleast 7 characters long"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
//Auth
//Hash UserPasword and store that
//.post if after .pre need for before
userSchema.pre("save", async function () {
  if (this.keyNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
});

//prefixing instance method
userSchema.method.isCorrectPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
