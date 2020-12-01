  let timer = 110;
  let output = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
  
  for(let spin in output){
      setTimeout(() => {
        process.stdout.write('\r' + output[spin]);
        if(spin == output.length -1){
            console.log();
        }
        
      }, timer);
      timer += 200;
  }


