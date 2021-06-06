const router = require('express').Router();

const apiRoutes = require('./routes/api.js');
const homeRoutes = require('./routes/view.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

module.exports = {
    Workout: require('./workout')
  };