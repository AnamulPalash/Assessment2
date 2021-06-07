import data from './data.json';

export function retrieve(){ 
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
}