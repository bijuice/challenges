//www.hackerrank.com/challenges/dynamic-array/problem

https: function dynamicArray(n, queries) {
  let arr = [];
  let lastAnswer = 0;
  let answers = [];

  //create n sub arrays
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }

  
  //iterate over each query array
  //initially used forEach loop but it's not as performant
  for (let i = 0; i < queries.length; i++) {
    
    //detect type of query
    if (queries[i][0] === 1) {
      let x = queries[i][1];
      let y = queries[i][2];

      let idx = (x ^ lastAnswer) % n;

      arr[idx].push(y);
    } else {
      let x = queries[i][1];
      let y = queries[i][2];

      let idx = (x ^ lastAnswer) % n;
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }
  return answers;
}
