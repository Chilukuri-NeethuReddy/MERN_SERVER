let dataSets=[];
//execute my env before all
beforeAll(()=>{
    dataSets=['Lu guang','Cheng'];
})
beforeEach(()=>{
    console.log('Before Each SetUp is called')
})
afterEach(()=>{
    console.log('After Each SetUp is called')
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case ',()=>{
    expect(dataSets.length).toBe(2);
})
test('Data Set contains',()=>{
    expect(dataSets).toContain('Cheng');
})
test('Data Set contains',()=>{
    expect(dataSets).toContain('Lu guang');
})