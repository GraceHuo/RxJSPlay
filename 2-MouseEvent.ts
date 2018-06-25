import {Observable, Observer} from "rxjs";

let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
    .map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    })
    .filter(value => value.x < 500)
    .delay(300);


function onNext(value) {
    circle.style.left = value.x+"px";
    circle.style.top = value.y+"px";

    console.log(value.y);
    console.log(circle.style.top);
}

source.subscribe(
    onNext,
    error => console.log(`error: ${error}`),
    () => console.log('complete')
);