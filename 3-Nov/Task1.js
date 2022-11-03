var MARK=100;

if (MARK<0){
    document.write('negative value')
}
else if(MARK>=0 && MARK<50){
    document.write('FAIL')
}
else if(MARK>=50 && MARK<60){
    document.write('D')
}
else if(MARK>=60 && MARK<70){
    document.write('C')
}
else if(MARK>=70 && MARK<80){
    document.write('B')
}
else if(MARK>=80 && MARK<90){
    document.write('A')
}
else if(MARK>=90 && MARK<=100){
    document.write('A+')
}
else{
    document.write('more than 100')
}