// when we had not  promises function then how was the work async function 
// How did async functions work when we didn't have Promise functions?

// without promises
function loadScript(src, callback){
  const script= document.createElement('script')
  script.src=src;
  script.onload=()=>callback(null,script);
  script.onerror=(err)=>callback(err);

  document.head.appendChild(script);
}

loadScript('load.js', (err, script)=>{
    if(err){
        console.log(err)
    }else{
        console.log("script loaded")
    }
})



// proisification -------- jo kisi bhi callback function ko promise me convert kr de promisification hota hao


