import express from 'express';
import {
  getAllMeasurements,
  getMeasurementsBetween,
} from '../controllers/measurementsController';
import {body} from 'express-validator';

const router = express.Router();

router.route('/')
    .get(getAllMeasurements)
    .post(
        body('start').isISO8601().toDate(),
        body('end').isISO8601().toDate(),
        getMeasurementsBetween,
    );

export default router;
