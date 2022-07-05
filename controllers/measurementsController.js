import {getAllMeasurements as getAll} from '../models/measurementsModel';

export const getAllMeasurements = async (req, res) => {
  try {
    const data = await getAll();
    return res.json(data);
  } catch (e) {
    return res.status(400).json([]);
  }
};
