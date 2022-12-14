const mongoose = require("mongoose");
const  deepPopulate = require('mongoose-deep-populate')(mongoose);
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
const validator = require("validator");
const findVisible = require('./findVisible');
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username field is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email",
      isAsync: false,
    },
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
  },
  first_name: {
    type: String,
    required: [true, "First name field is required"],
  },
  last_name: {
    type: String,
    required: [true, "Last Name field is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone field is required"],
  },
  role: {
    type: String,
    enum: ["Admin", "Supervisor", "User"],
    default: "User",
  },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
  order: {
    type: mongoose.Types.ObjectId,
    ref: "Orders",
  },
  isVisible : {type: Boolean, default: true},
  verified: {
    type: Boolean,
    default: false,
  },
  verify_token: {
    type: String,
  },
  pass_reset_token: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  updated_at: {
    type: Date,
    default: Date.now(),
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});
const populate =[{
    path : 'address',
    match : {isVisible : true}
},
{
    path : 'order',
    match : {isVisible : true}
}
];
UserSchema.pre('find', findVisible(populate));
UserSchema.pre('findOne', findVisible(populate));
UserSchema.pre('findOneAndUpdate', findVisible());
UserSchema.pre('count', findVisible());
UserSchema.pre('countDocuments', findVisible());

UserSchema.plugin(deepPopulate,{})



UserSchema.pre("save", function (next) {
  var User = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(User.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        User.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model("Users", UserSchema);
