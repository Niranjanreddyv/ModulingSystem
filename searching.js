
// named export 
// 1 . we can add export to every function 
// 2 . at end export and { all names }

function linearSearch(arr, t){
    for(let i =0;i<arr.length -1;i++){
        if(arr[i] == t){
            return "Yes";
        }
    }
    return "No";
}

function binarySearch(arr, target){
    let l = 0, h = arr.size - 1;
    while(l<=h){
        let mid = l + (r - l)/2;
        if(arr[mid] == target){
            return "Yes";
        }else if(arr[mid] > target){
            h = mid - 1;
        }else{
            l = mid + 1;
        }
    }
    return "No";
}


export {linearSearch , binarySearch}