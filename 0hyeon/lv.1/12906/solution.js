function solution(arr){
    console.log(
        arr.filter((val,index) => val !== arr[index+1])
        //filter를 사용해서 
        //arr에서 element와 
        //그다음 elenmt가 
        //같지 않은 것들을 바로 배열로 반환해서 풀었다.
    )
    return arr.filter((val,index) => val !== arr[index+1])
}