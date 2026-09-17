const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const fs = require('fs');
const path = require('path');
const profilePath = path.join(__dirname, 'data', 'profile.json');
app.get('/api/profile', (req, res) => {
  const data = fs.readFileSync(profilePath, 'utf-8');
  const profile = JSON.parse(data);

  delete profile.password;

  res.json(profile);
});

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
})