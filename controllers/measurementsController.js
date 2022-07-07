import {
  getAllMeasurements as getAll,
  getMeasurementsBetween as getBetween,
} from '../models/measurementsModel';
import {validationResult} from 'express-validator';

export const getAllMeasurements = async (req, res) => {
  try {
    const data = await getAll();
    return res.json(data);
  } catch (e) {
    return res.status(400).json([]);
  }
};

export const getMeasurementsBetween = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const map = errors.mapped();
      const err = Object.entries(map)
          .reduce((prev, [key, value]) => {
            return {
              ...prev,
              [key]: value.msg,
            };
          }, {});
      return res.status(400).json(err);
    }
    const start = req.body.start;
    const end = req.body.end;

    const data = await getBetween(start, end);
    return res.json(data);
  } catch (e) {
    return res.status(400).json([]);
  }
};
