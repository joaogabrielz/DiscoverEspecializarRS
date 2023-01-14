//syntax sugar for promises

const promessa = new Promise( (res, rej) => {
  return res('ok');
})

async function start() {
  try {
    const result = await promessa;
    console.log(result);
  } 
  catch (error) {
    console.log(error);
  }
  finally{
    console.log('roda sempre..')
  }
  
}
start();