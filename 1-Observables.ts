import {Observable, Observer} from "rxjs";

let numbers = [1, 5, 10];

// from
// let source = Observable.from(numbers);

// create
let source = Observable.create(observer => {
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);
        if (index < numbers.length) {
            setTimeout(produceValue, 200);
        }
        else {
            observer.complete();
        }
    };
    produceValue();
})
    .map(n => n * 2)
    .filter(n => n > 4);

// formal way
// class MyObserver implements Observer<number> {
//     next(value) {
//         console.log(`value: ${value}`);
//     }
//
//     error(error) {
//         console.log(`error: ${error}`);
//     }
//
//     complete() {
//         console.log('complete');
//     }
// }
//
// source.subscribe(new MyObserver());

// easier way
source.subscribe(
    value => console.log(`value: ${value}`),
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);