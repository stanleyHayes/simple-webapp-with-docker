import express from "express";


const app = express();

app.get('/', async (req, res) => {
    try {
        res.send('Hello there, How are you doing');
    } catch (error) {
        res.send('bye there');
    }
});

app.listen('5000',  () => {
    console.log(`Connected to server on port 5000`);
})