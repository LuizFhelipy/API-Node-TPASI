const app = require('./server')

app.listen(process.env.PORT || 8081, () => {
    console.log('Server started')
})