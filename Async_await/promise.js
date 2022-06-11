
//     ***Promise(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void): Promise<any>***


// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.
function placeOrder(drink){
    return new Promise(function(resolve , reject){
          if(drink == 'coffee'){
              resolve(' Order Placed');
          }
          else {
              reject('Sorry,We do not offer this drink'); 
          }
    })
}


function processOrder(order){
    return new Promise(function(resolve){
        console.log('Order is being Processed');
        resolve(`Coffee served for ${order}`);
    })
}
///////////Promise/////////////////////


// placeOrder('coffee').then(function(orderFromCostomer){
//     console.log("Request recived");
//     console.log(orderFromCostomer);
//     let orderIsProcessed = processOrder(orderFromCostomer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err);
// })


///////////Async - Await ////////////////////////////

async function serverOrder(){
    try{
        const orderRecived = await placeOrder('coffee');
    console.log(orderRecived);
    const processedOrder = await processOrder(orderRecived);
    console.log(processedOrder);
    }
    catch (error){
        console.log(error);
    }
    
}


serverOrder();

