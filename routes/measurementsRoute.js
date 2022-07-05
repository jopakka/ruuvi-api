import express from 'express';
import {getAllMeasurements} from '../controllers/measurementsController';

const router = express.Router();

router.route('/').get(getAllMeasurements);

export default router;
