const router = require('express').Router();
// const { default: StudentAttendance } = require('../../student-information-system/src/component/StudentAttendance');
let studentattendance = require('../models/studentattendancemodel');

router.route('/').get((req, res) => {
  studentattendance.find()
    .then(studentattendance => {
      var stud=[];       
      studentattendance.map((sdd)=>{
            console.log("mappingcc")
        var attended=parseInt(sdd.attended, 10);
        var classes=parseInt(sdd.classes,10)       
        var per=((attended/classes)*100).toFixed(2);        
        var obj={
          'subject':sdd.subject,
          'classes':sdd.classes,
          'attended':sdd.attended,
          'percentage':per,
        }
        stud.push(obj)
        console.log(" my obj"+obj)      
      })
      console.log("helowowoowow")
      console.log("stud"+stud)
      // console.log(studentattendance)
      // console.log("\n\\n\n\n\n\n\n\n\n\n\n\n\n"+stud.subject+"\n\n\n\n\n\n")
      res.json(stud)
    }
    )
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
 
console.log("\n\n\n\n\helloww guysss\n\n\n\n\n\n\n")
  

  const subject= req.body.subject; 
  const classes=req.body.classes; 
  const attended=req.body.attended;   
   

  const studentatt = new studentattendance({
  subject,
  classes,
  attended
  });

  studentatt.save()
  .then(() => {
    
    res.json("  attendence addedd "+studentatt._id)   
  
  })
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log("\n\n\n\n\n\nbyeeee")
  studentattendance.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  studentattendance.findByIdAndDelete(req.params.id)
    .then(() => res.json('sattednace  deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  studentattendance.findById(req.params.id)
    .then(student => {
      student.firstname = req.body.firstname;
      student.lastname = req.body.lastname;
      student.email = req.body.email;
      student.idnum = req.body.idnum;
      student.phone = req.body.phone;
      student.pass = req.body.pass;
      student.conpass =  req.body.conpass;

      student.save()
        .then(() => res.json('student updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;