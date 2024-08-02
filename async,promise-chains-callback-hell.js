// synchronous code
// one by one code run in sequence wait for the previous one 
console.log("one");
console.log("two");
console.log("three");

// asynchronous code
function one() {
    console.log("delayed one");
}
setTimeout(one, 5000 );//1000ms = 1s
console.log("one");
console.log("two");
console.log("three");

//callback hell
function sum(a,b) {
    console.log(a+b);
    
}

function sub(a,b) {
    console.log(a-b);
    
}
function calculator(a,b,sumcallback , subcallback) {
    sumcallback(a,b);
    subcallback(a,b);
}
 calculator(2,3,sum , sub);

calculator (2,3, function(a,b) {
    console.log(a+b);
}, (a,b) =>{
    console.log(a-b);
});

//call back hell 
function getData(dataId)
{
    setTimeout(() => {
    console.log("fetching data from server" , dataId);
    },5000);
}
function getDetails(dataId , callback)
{
    setTimeout(() => {
    console.log("fetching details from server" , dataId);
    if(callback)
    {
        callback();

    }
    },5000);
}

getDetails(1 , ()=>{let l= getDetails(2); console.log("callback" ,l ); },
()=>{getDetails(3);  },
()=>{getDetails(4); 
    
 });
console.log("on");

//promises

let promiseee = new Promise((resolve , reject) => 
    {
    console.log(" i am a promise");
     //resolve(123);
     reject("error");}
);



function getDataa(dataId)
{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("fetching data 1" , dataId);
            resolve("Success : ", dataId);
           // reject("error");
        },5000);
    });
}

function getDataaa(dataId)
{
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("fetching data from server" , dataId);
            // resolve(dataId);
           reject("error");
        },5000);
    });
}


const getPromise = () => {
    return new Promise((resolve , reject) => {
        
            console.log("hello i am a promise");
           // resolve("data");

            reject("error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("data is fuullfilled",res);
}).catch((err) => {    
    console.log("error is rejected" ,err);
});



//promise Chain
function asyncFunction() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log(" async function some data 1 ");
            resolve("successed");
        },5000);
    });
}
function asyncFunction2() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log(" async function some data 2 ");
            resolve("successed");
        },5000);
    });
}

console.log("fetching data 1");
let p11 = asyncFunction();
p11.then((res) => {
    console.log("data is fullfilled" , res);


    // promise ke andr aik or promise 
console.log("fetching data 2");
let p2 = asyncFunction2();
p2.then((res) => {
    console.log("data is fullfilled" , res);
}).catch((err) => {
    console.log("error is rejected" , err);
});

    
}).catch((err) => {
    console.log("error is rejected" , err);
});


console.log("fetching data 2");
let p2 = asyncFunction2();
p2.then((res) => {
    console.log("data is fullfilled" , res);
}).catch((err) => {
    console.log("error is rejected" , err);
});


//let try promise  chain with get data function 
let promisee = getDataa(1);
promisee.then((res) => {
    console.log("data is fullfilled" , res);
    getDataa(2).then((res)=>{console.log("data is fullfilled" , res);
    getDataa(3).then((res)=>{console.log("data is fullfilled" , res);
    getDataa(4).then((res)=>{console.log("data is fullfilled" , res);}).catch((err) => {console.log("error is rejected" , err);});
    }).catch((err) => {console.log("error is rejected" , err);});  
     }  ).catch( (err) => {
        console.log("error is rejected" , err);} );
}).catch((err) => {
    console.log("error is rejected" , err);
});


//but a one more way to better than above which is call a pure promise chain 
let p1 = getDataa(1);
p1.then((res) => {console.log("data is fullfilled" , res);
    //second promise call 
     return getDataa(2);}
    ).catch((err) => {console.log("error is rejected" , err);})
    // jab inner wala return ae ga tu niche then paer jae ga 
    .then((res) => {console.log("data is fullfilled" , res);
    //second promise call 
     return getDataa(3);}
    );





// asunc  -  await functionality
// this is async function 
function api(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("resolved data from api");
        },5000);
    });
}

async function fetchData() {
    console.log("fetching data from server");
    let data = await api(); // age nahi jae ga ye jab tuk ye resolve na ho jae 
    console.log("data is fetched" , data);
    console.log("fetching data from server 2");
    let data2 = await api();// is ki bari tabhi ae gi jab uper await wala ho jae ga 
    console.log("data is fetched" , data2);
    console.log("fetching data from server 3");
    let data3 = await api();// same as above 
    console.log("data is fetched" , data3);
}

// ateempt a async with the getdata Function 
// best way to get a data from server one after the other 
async function fetchDataa() 
    {
        let a = await getDataa(1);
        await getDataa(2);
        await getDataa(3);
        await getDataa(4);
    }

    // masla agya hain ke await ko aik function ke andr rakh kr cahalama parta hai or phir call bhi krna patara hai 
    // is bachne ke liye advanced js provide a IIF Strategy 
   // convert the above async function into IIF
   (async function () 
   {
       let a = await getDataa(1);
       await getDataa(2);
       await getDataa(3);
       await getDataa(4);
   }

   )();
   
   // iife async arrow function
   (
    async ()=>
    {
        await getDataa(1);
        await getDataa(2);
        await getDataa(3);
        await getDataa(4);
    }
   )();