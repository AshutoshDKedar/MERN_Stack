const router = require('express').Router();
const exerciseController =  require('../controller/exercise.controller');

router.route('/').get(exerciseController.getExercises);

router.route('/add').post(exerciseController.createExercise);

router.route('/:id').get(exerciseController.getExercise);
  
router.route('/:id').delete(exerciseController.deleteExercise);
  
router.route('/:id').put(exerciseController.updateExercise);

module.exports = router;
