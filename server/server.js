const app = require('./src/app');

const PORT = process.env.PORT || 3520;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => {
        console.log('Server is closed');
    });
});