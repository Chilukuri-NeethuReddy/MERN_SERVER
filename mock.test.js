//mock getData and Process the Mocked Data
//mock module
//('module URL',arrow function)
jest.mock('./test/utils',()=>(
   {
    getData:jest.fn(),
    getRaw: jest.fn()
   }
));

const {getData,getRaw} = require('./test/utils');
const {processData,processRaw} = require('./test/processData');

//we can mock the return value of any function by using mockReturnValue
test('Mocked the Process data',()=>{
    //mock the return value of getData
    getData.mockReturnValue('Mocked data');
    expect(processData()).toBe('Processed:Mocked data');
    
});
test('Mocked Raw Data', ()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})