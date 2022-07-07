import pool from '../database/database';
const promisePool = pool.promise();

export const getAllMeasurements = async () => {
  const [rows] = await promisePool.execute('SELECT * FROM measurements');
  return rows;
};

export const getMeasurementsBetween = async (start, end) => {
  const sql = `
  SELECT * 
  FROM measurements 
  WHERE timestamp
  BETWEEN ? AND ?
  `;

  const [rows] = await promisePool.execute(sql, [start, end]);
  return rows;
};
