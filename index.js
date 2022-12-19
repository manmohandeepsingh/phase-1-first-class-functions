function receivesAFunction(spy) {
spy();
}

function spy() {

}

function returnsANamedFunction() {
    return function namedFunction(){

    }
}

function returnsAnAnonymousFunction() {
    return function () {

    }
}