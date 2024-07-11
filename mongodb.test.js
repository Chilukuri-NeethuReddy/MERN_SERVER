const mongoose = require('mongoose')

describe('MongoDB connected',()=>{
    beforeAll(async ()=>{
        const url = 'mongodb+srv://chilukurineethureddy2004:QIdPrjSgSP9JjkUu@cluster0.hi0dqlx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(url);
    })
    test('MongoDB Connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })

})