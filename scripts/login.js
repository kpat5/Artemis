const { Router } = require("express");
const res = require("express/lib/response");
const { LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");

const input_fields = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]+)(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{8,20}$/,
  telephone: /^(\+\d{1,3}[- ]?)?\d{10}$/,
};

const validate = (field, regex) => {
  regex.test(field.value)
    ? (field.className = "valid")
    : (field.className = "invalid");
};

let keys = document.querySelectorAll("input");
keys.forEach((item) =>
  item.addEventListener("keyup", (e) => {
    validate(e.target, input_fields[e.target.attributes.name.value]);
  })
);

router.post("/",function(req,res,next)){
  login1.exec(function(err,data)){
    if(err) throw err;
    res.render()
  }
}