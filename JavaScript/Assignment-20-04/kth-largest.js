const arr=[12,47,66,32]
const k=3

function kLargest(arr,k)
{
    arr.sort()
    console.log(arr[k-1])
}
kLargest(arr,k)