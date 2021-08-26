const router = require('express').Router();
const dashboardRoutes = require('../dashboardRoutes');
const homneRoutes = require('../homeRoutes');
const api = require('../api');


router.use("/dashboard", dashboardRoutes);
router.use("/", homneRoutes);
router.use("/api", api);

module.exports = router;