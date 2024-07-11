//how we can perform unit tests on async functions
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}

function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },1000);
}

module.exports = {fetchData,MyData};