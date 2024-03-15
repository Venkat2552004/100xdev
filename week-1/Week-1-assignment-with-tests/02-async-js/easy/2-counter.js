var counter = 0;
function incCount(){
    counter++;
    console.log(counter);
}
while(true){
    setTimeout(incCount, 1000);
}
