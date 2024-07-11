//test cases for our unit fun sum
const sum = require('./test/sum')
//jest test cases
test('fun should return 3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe() ->exactly equal
    //expect() -> to exectue our unit
})

//toBeEqual -> iterates through every value in array and checks if the value is equal or not
test('Object in a array',()=>{
    const data = {one:1}
    data['two']= 2;
    expect(data).toEqual({one:1,two:2});
})

//toBeNull()  -> if the recieved values os null or not
test('Value is Null',()=>{
    const n = null;
    expect(n).toBeNull();
})

//toBeDefined -> checks if the value is defined or not
test('Value is defined',()=>{
    const a = 1;
    expect(a).toBeDefined();
})

//toBeTruthy -> makes sure that recieved value should be true
test('Value is True',()=>{
    const bool= true
    expect(bool).toBeTruthy();
})

//toBeFalsy -> checks whether the value is false or not
test('Value is False',()=>{
    const bool= false
    expect(bool).toBeFalsy();
})