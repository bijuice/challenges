//link: https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {

    let sums = [] 
    
    //possibility of 16 different hour glasses in 6x6 array
    //only first 4 rows and columns can contain an hour glass
    
    //traverses rows
    for (let i = 0; i < 4; i++) {
        //traverses columns
        for (let j = 0; j < 4; j++) {
            //sums each hour glass and pushes to sums array
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            sums.push(sum)
        }
    } 

    return Math.max(...sums) //returns max value
}

