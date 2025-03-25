
function showTime(){
  let today = new Date();
  console.log(today.toLocaleTimeString());
}
showTime();
const timeout = setTimeout(()=>{
  showTime();
}, 2000); // 2초 후 실행

let count = 0;
const interval = setInterval(()=>{

  showTime();

  console.log('Interval %d', count++);
  
  if(count==2){
    clearInterval(interval);
  }
}, 1000);

console.log('End');