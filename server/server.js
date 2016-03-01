import config from './config';
import express from 'express';
import handlebars from 'express-handlebars'

const app = express();

app.engine('html', handlebars({ extname: 'html' }));

// Make the public folder available to all pages within the app
app.use(express.static(config.publicFolder));

// Set destination folder of app views
app.set('views', config.viewsFolder);

// Define view file type
app.set('view engine', 'html');

app.get('/', (req, res) => res.render("app"));

const port = process.env.PORT || 3000;
app.listen(port);

// Console output
console.log(`Node listening on port ${port}`);
console.log(`Serving views from ${config.viewsFolder}`);
console.log(`Serving resources from ${config.publicFolder}`);
