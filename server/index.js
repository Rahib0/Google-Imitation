const app = require('./app')

let PORT = 3000;
//Get the server running
app.listen(PORT, () => console.log(`Server now running on on port http://localhost:${PORT}`))