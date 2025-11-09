import express from 'express';
import { Server } from 'socket.io';
import { socketCtrl } from './controllers/socket.controller.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import userRouter from './routes/user.routes.js';
import documentRouter from './routes/document.routes.js';
import dbConnect from './utils/dbConnect.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/documents', documentRouter);

// Catch-all handler: serve index.html for all non-API routes
app.use((req, res, next) => {
  // If it's an API route that wasn't handled, return 404
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ message: 'API endpoint not found' });
  }
  // For all other routes, serve the React app
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

const server = app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on http://localhost:${PORT}`);
});

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  },
});

socketCtrl(io);
