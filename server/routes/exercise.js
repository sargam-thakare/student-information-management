
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res) => {
Exercise.find()
.then(exercises => res.json(exercises))
.catch(err => res.status(400).json('Error: ' +err));
});
router.route('/add').post((req,res) => {
const Subject= req.body.Subject;
const Assignment_no = req.body.Assignment_no;
const Start_Date = req.body.Start_Date;
const Submission_Date= req.body.Submission_Date;
const newExercise = new Exercise({Subject, Assignment_no, Start_Date, Submission_Date});
newExercise.save()
.then(() => res.json('Exercise added!'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').get((req,res) => {
Exercise.findById(req.params.id)
.then(exercise => res.json(exercise))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/:id').delete((req,res) => {
Exercise.findByIdAndDelete(req.params.id)
.then(exercise => res.json('Exercise deleted'))
.catch(err => res.status(400).json('Error: '+err));
});
router.route('/update/:id').post((req,res) => {
Exercise.findById(req.params.id)
.then(exercise => {
exercise.Subject = req.body.Subject;
exercise.Assignment_no = req.body.Assignment_no;
exercise.Start_Date = req.body.Start_Date;
exercise.Submission_Date = req.body.Submission_Date;
exercise.save()
.then(() => res.json('Exercise updated !'))
.catch(err => res.status(400).json('Error: '+err));
})
.catch(err => res.status(400).json('Error: '+err));
});
module.exports = router;