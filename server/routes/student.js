const router = require('express').Router();
let student = require('../models/studentmodel');
const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken');
const confiq = require('../config/config');
SECRET = 'mysecretkey'


//GET ALL DATA OF STUDENTS
router.route('/').get((req, res) => {
  student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});


//INSERTING STUDENT 
router.route('/add').post((req, res) => {
  var newemail = req.body.email
  student.findOne({ email: newemail }, function (err, user) {
    if (user) {
      return res.status(204).json({ auth: false, message: "email exits" })
    }
    else {
      var firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const idnum = req.body.idnum;
      const email = req.body.email;
      var pass = req.body.pass;
      const conpass = req.body.conpass;
      const phone = req.body.phone;
      const dept = req.body.dept;
      var abc = ''
      
      //bcrypt hashing password with salt value
      let hashedPassword;
      let salt = bcryptjs.genSaltSync(10);
      hashedPassword = bcryptjs.hashSync(pass, salt);
       const newstudent = new student({
        firstname,
        lastname,
        idnum,
        email,
        pass: hashedPassword,
        conpass: hashedPassword,
        phone,
        dept
      });

      newstudent.save()
        .then(() => {
          res.json(newstudent._id)
        })
        .catch(err => res.status(400).json('Error: ' + err));
    }
  })
})


//GET PARTICULAR STUDENT WITH ID
router.route('/:id').get((req, res) => {
  student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});


//DELETE PARTICULAR USER
router.route('/:id').delete((req, res) => {
  student.findByIdAndDelete(req.params.id)
    .then(() => res.json('student deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//UPDATE STUDENT DATA
router.route('/update/:id').post((req, res) => {
  student.findById(req.params.id)
    .then(student => {
      student.firstname = req.body.firstname;
      student.lastname = req.body.lastname;
      student.email = req.body.email;
      student.idnum = req.body.idnum;
      student.phone = req.body.phone;
     
      student.dept = req.body.dept;

      student.save()
        .then(() => res.json('student updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


//SEARCH BY DEPARTMENT 
router.route('/search/:dept').post((req, res) => {
  const dept1 = req.body.dept;
  student.find({ "dept": dept1 }, function (err, result) {
    if (err) return err;
    if (result) {
      res.json(result);
    }
    else {
      res.send(JSON.stringify({ error: 'Error' }))
    }
  })
})


// API for login student getting values from user email and password
router.route('/login').post((req, res) => {
  student.findOne({ 'email': req.body.email }, function (err, user) {
    if (err) return err;
    if (!user) return res.json({ isAuth: false, message: ' Auth failed ,email not found' })
    console.log("useeer " + user)

    //COMPARING PASSWORD WITH HELP OF USERS COMPAREPASSWORD METHOD RETURNING ISMATCH VALUE TRUE OR FALSE
    user.comparepassword(req.body.password, (err, isMatch) => {
      if (err) return err
      if (!isMatch) return res.json(
        { isAuth: false, message: "password doesn't match" }
      );
      else {

       //GENERATING TOKEN FOR LOGGED USER  EXPIRING IN 24 HOUR 
       var expiresIn=24
        var token = jwt.sign({user:user._id.toHexString()}, SECRET,{expiresIn:'24h'});
        user.token = token;
        user.save(function (err, user) {
          if (err) return cb(err);
        })
        console.log(isMatch)
        res.send(JSON.stringify({ is: isMatch, user: user }))
        return
      }
    })
  }

  )
 
})

// router.route('/api/logout').get(auth,function(req,res){
//   req.user.deleteToken(req.token,(err,user)=>{
//       if(err) return res.status(400).send(err);
//       res.sendStatus(200);
//   });
// }); 


module.exports = router;