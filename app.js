const express = require('express') 
require('dotenv').config() 
const app = express();  
const dbConnect = require('./config/database'); 
const cors = require('cors')
const PORT = process.env.PORT || 4000
const userRoutes = require('./routes/userRoutes')
const activityRoutes = require('./routes/activityRoute')
const bookingRoutes = require('./routes/bookingRoutes')
 

 
dbConnect(); 

app.use(cors())
app.use(express.json());  
 
app.use('/api/v1',userRoutes);
app.use('/api/v1',activityRoutes)
app.use('/api/v1', bookingRoutes)

app.get('/', (req, res) => {
  res.send('API is running...');
});
 

app.listen(PORT , ()=>{
    console.log(`Server is runnig on Port no.${PORT}`);
})

