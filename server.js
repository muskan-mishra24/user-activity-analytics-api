require('dotenv').config(); 
const app = require('./src/app');


app.get('/', (req, res) => {
  res.send('User Activity Analytics API is running successfully!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
