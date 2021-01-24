function explain_callback(name, age, task){
    console.log('Hello', name );
    console.log('Age', age );
    task();
}
function washHand(){
    console.log('Plase wash Your Hand.');
}
function scrollFacebook(){
    console.log('Scrolling You FaceBook.');
}
function takeShower(){
    console.log('Please take a Shower.');
}
explain_callback('Rahim', 20, washHand);
explain_callback('Korim', 18, scrollFacebook);
explain_callback('Rubban', 24, takeShower);