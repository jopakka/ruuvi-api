import pool from '../database/database';

export const getAllMeasurements = async () => {
  const promisePool = pool.promise();
  const [rows] = await promisePool.execute('SELECT * FROM measurements');
  return rows;
};
