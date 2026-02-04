import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import taskRoutes from './src/routes/taskRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json()); // Body parser

// API Routes
app.use('/api/tasks', taskRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));