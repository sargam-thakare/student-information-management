const router = require('express').Router();
let faculty = require('../models/facultymodel');
const bcryptjs = require("bcryptjs");

router.route('/').get((req, res) => {
     faculty.find()
    .then(faculty => res.json(faculty))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
  var newemail = req.body.email
  faculty.findOne({ email: newemail }, function (err, user) {
    if (user) {
      return res.status(204).json({ auth: false, message: "email exits" })
    }
    else{
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const idnum = req.body.idnum;
      const email = req.body.email;
      const dept = req.body.dept;
      const year = req.body.year;
      const course = req.body.course;
      const pass = req.body.pass;
      const conpass = req.body.conpass;
      const phone = req.body.phone;

      let hashedPassword;
      let salt = bcryptjs.genSaltSync(10);
      hashedPassword = bcryptjs.hashSync(pass, salt);
      const newfaculty = new faculty({
        firstname,
        lastname,
        idnum,
        email,
        dept,
        year,
        course,
        pass: hashedPassword,
        conpass: hashedPassword,
        phone
      });

      newfaculty.save()
        .then(() => res.json('faculty added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  });
});

router.route('/:id').get((req, res) => {
     faculty.findById(req.params.id)
    .then(faculty => res.json(faculty))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  faculty.findByIdAndDelete(req.params.id)
    .then(() => res.json('faculty deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  console.log(" updating data  ")
  faculty.findById(req.params.id)
    .then(faculty => {
      faculty.firstname = req.body.firstname;
      faculty.lastname = req.body.lastname;
      faculty.email = req.body.email;
      faculty.dept = req.body.dept;
      faculty.year = req.body.year;
      faculty.idnum = req.body.idnum;
      faculty.phone = req.body.phone;
      faculty.course = req.body.course;
      faculty.pass = req.body.pass;
      faculty.conpass = req.body.conpass;

      faculty.save()
        .then(() => res.json('faculty updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/search/:dept').post((req, res) => {
   const dept1 = req.body.dept;

  faculty.find({ "dept": dept1 }, function (err, result) {
    if (err) throw err;
    if (result) {
      res.json(result);
    }
    else {
      res.send(JSON.stringify({ error: 'Error' }))
    }
  })
})

router.route('/login').post((req, res) => {
 
  faculty.findOne({ 'email': req.body.email }, function (err, user) {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, message: ' Auth failed ,email not found' })
    console.log("useeer " + user)
    user.comparepassword(req.body.password, (err, isMatch) => {

      if (err) throw err
 
      console.log("is match " + isMatch)
      if (!isMatch) return res.json(
        { isAuth: false, message: "password doesn't match" });
      else {
        console.log(isMatch)
        res.send(JSON.stringify({ is: isMatch, user: user }))
      }
    })
  })
 
})
module.exports = router;