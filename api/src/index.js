const app = require('./app');
const PORT = process.env.PORT || 8082;


app.get('/', (request, response) => {
    response.send(`Working :)`)
})

app.listen(PORT, () => {
    console.log(`Capstone application listening on ${PORT}`);
})
