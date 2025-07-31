const app = require('./app');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/ecommerce')
  .then(() => console.log('DB connected!'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
