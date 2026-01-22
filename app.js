const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes')

const app = express();

const dbURI = 'mongodb+srv://iankala:gr60V50tFo42nEtX@node.cgcwh3k.mongodb.net/node-tuts?retryWrites=true&w=majority';


const PORT = process.env.PORT || 3000;

mongoose.connect(dbURI)
  .then(() => {
    console.log('connected to database', mongoose.connection.name);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));


app.set('view engine', 'ejs');



app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

// routes
app.get('/', (req, res)=>{
    res.redirect('/blogs')

})



app.get('/about', (req, res)=> {
    res.render('about', {title: 'about'});
})

app.use('/blogs', blogRoutes)


app.use((req, res)=> {
    res.render('404', {title: '404'})
});
