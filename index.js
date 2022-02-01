function receivesAFunction (callback) {
    console.log(callback());
}
receivesAFunction(function() {return `You are 9 miles from your destination.`});
function returnsANamedFunction () {
    return function sleepy() {
        console.log("I am a bit sleepy.");
    }
}
function returnsAnAnonymousFunction () {
    return function () {
        console.log("lab done");
    }
}