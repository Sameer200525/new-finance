const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/finance';

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Connected to MongoDB'))
  .catch(err=> console.error('MongoDB connection error:', err));

const incomeSchema = new mongoose.Schema({
  amount: Number,
  source: String,
  date: { type: Date, default: Date.now },
  notes: String
});
const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: { type: Date, default: Date.now },
  notes: String
});

const Income = mongoose.model('Income', incomeSchema);
const Expense = mongoose.model('Expense', expenseSchema);

// Routes
app.get('/', (req,res) => res.send({status:'ok'}));

// Income CRUD
app.get('/api/incomes', async (req,res)=> {
  const items = await Income.find().sort({date:-1});
  res.json(items);
});
app.post('/api/incomes', async (req,res)=> {
  const doc = new Income(req.body);
  await doc.save();
  res.json(doc);
});
app.delete('/api/incomes/:id', async (req,res)=>{
  await Income.findByIdAndDelete(req.params.id);
  res.json({deleted:true});
});

// Expense CRUD
app.get('/api/expenses', async (req,res)=> {
  const items = await Expense.find().sort({date:-1});
  res.json(items);
});
app.post('/api/expenses', async (req,res)=> {
  const doc = new Expense(req.body);
  await doc.save();
  res.json(doc);
});
app.delete('/api/expenses/:id', async (req,res)=>{
  await Expense.findByIdAndDelete(req.params.id);
  res.json({deleted:true});
});

app.listen(PORT, ()=> console.log('Server running on port', PORT));
