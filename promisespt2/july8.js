// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//      resolve("P1 done");
//    }, 3000);
// })

// const promise2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//      resolve("P2 done");
//    }, 4000);
// })

// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//      resolve("P3 done");
//    }, 2000);
// })

// promise1
// .then((res)=> console.log(res))
// .then(()=> setTimeout(()=> {
//     console.log("P2 ")
// },2000))
// .then(()=> setTimeout(()=> {
//     console.log("P3")
// },3000))
// .then(()=> setTimeout(()=> {
//     console.log("P4")
// },4000))
// .catch((err)=> console.log(err));

// promise1
// .then((res)=> console.log(res)).catch((err)=>console.log(err));

// promise2
// .then((res)=> console.log(res)).catch((err)=>console.log(err));


// promise3
// .then((res)=> console.log(res)).catch((err)=>console.log(err));

// function somethingSomething(messagework,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("PROMISE"+messagework);
//             console.log("Promise"+messagework);
//         },delay)
//     })
// }

// promise1.then(()=>{
//     return somethingSomething("Promise2",5000);
// })
// .then(()=>{
//     return somethingSomething("Promise3",3000);
// })
// .then(()=>{
//     return somethingSomething("Promise4",2000);
// })

