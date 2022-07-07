'use strict';
import express from 'express';
import measurementsRoute from './routes/measurementsRoute';

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/measurements', measurementsRoute);

app.listen(port, () => console.log(`Server listening port ${port}`));
