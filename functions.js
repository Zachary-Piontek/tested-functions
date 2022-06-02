
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiply(x, y) {
    return x * y;
}

export function triangleArea(x, y, z) {
    return z * x * y;
}

export function greater100(x, y) {
    if (x + y < 100)
        return true;
    else
        return false;
}

//export function oddOrEven(x, y) {
  //  if (x % 2) {
   //     return 'even';
   // }
//else return 'odd';
//}    

export function formatName(first, last, middle) {
    let name = first;

    if (middle) {
        name += ' ' + middle;
    }

    name += ' ' + last;

    return name;
}
