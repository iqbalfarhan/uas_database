import express from 'express';
import database from '../config/database.js';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const [result, response] = await database.execute('SELECT * FROM user');
  res.json({ message: 'ini dari route user', users: result });
});

userRouter.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const [result, response] = await database.execute(
    'SELECT * FROM user WHERE id = ?',
    [userId],
  );
  res.json({
    userId: userId,
    user: result[0],
    message: 'id user yang ditangkap adalah' + userId,
  });
});

userRouter.post('/', async (req, res) => {
  const { nama, telepon } = req.body;
  const [result, response] = await database.execute(
    'INSERT INTO user (nama, telepon) VALUES (?,?)',
    [nama, telepon],
  );

  res.json({ message: 'user berhasil ditambahkan', result });
});

userRouter.delete('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const [result, response] = await database.execute(
    'DELETE FROM user WHERE id = ?',
    [userId],
  );

  res.json({ message: 'user berhasil dihapus', result });
});

export default userRouter;
