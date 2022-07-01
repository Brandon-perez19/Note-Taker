import express from 'express';
import apiRoutes from './routes/apiRoutes/index.js';
import htmlRoutes from './routes/htmlRoutes/index.js'
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server now running on port ${PORT}`);
})