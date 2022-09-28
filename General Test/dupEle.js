//when passed two sorted arrays of integers
//returns an array of any numbers which appear in both. No value should appear in the returned
//array more than once.

function dupEle(arr1,arr2){
    const hashMap = new Map();
    for(let i=0; i < arr1.length; i++){
        hashMap.set(arr1[i], 'exists')
    }

    let duplicates = []
    for( let j= 0; j < arr2.length ; j++){
        if(hashMap.get(arr2[j]) === 'exists'){
            duplicates.push(arr2[j]);
            hashMap.set(arr2[j], "don't add duplicates to hash map");
        }
    }
    return duplicates;
}

m = [1, 2, 3, 5, 7];
n = [2, 4, 5, 6];

console.log(dupEle(m,n))