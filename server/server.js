import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Ошибка подключения к БД:', err.stack);
  }
  console.log('Успешное подключение к PostgreSQL');
  release();
});

app.get('/api/gyms', async (req, res) => {
  // console.log("Получен запрос на /api/gyms");

  try {
    const result = await pool.query(`
      SELECT 
        g.*,
        ARRAY_AGG(f.name) as features
      FROM gyms g
      LEFT JOIN gym_features gf ON g.id = gf.gym_id
      LEFT JOIN features f ON gf.feature_id = f.id
      GROUP BY g.id
      ORDER BY g.id
    `);
    
    const gyms = result.rows.map(gym => ({
      ...gym,
      features: gym.features.filter(f => f !== null)
    }));
    
    res.json(gyms);
  } catch (err) {
    console.error('Ошибка при получении клубов:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.get('/api/gyms/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`
      SELECT 
        g.*,
        ARRAY_AGG(f.name) as features
      FROM gyms g
      LEFT JOIN gym_features gf ON g.id = gf.gym_id
      LEFT JOIN features f ON gf.feature_id = f.id
      WHERE g.id = $1
      GROUP BY g.id
    `, [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Клуб не найден' });
    }
    
    const gym = {
      ...result.rows[0],
      features: result.rows[0].features.filter(f => f !== null)
    };
    
    res.json(gym);
  } catch (err) {
    console.error('Ошибка при получении клуба:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

app.get('/api/plans', async (req, res) => {
  try {
    // console.log('Получен запрос на /api/plans');
    
    const result = await pool.query(`
      SELECT * FROM membership_plans
      ORDER BY price
    `);
    
    res.json(result.rows);
    
  } catch (err) {
    console.error('Ошибка при получении тарифов:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});