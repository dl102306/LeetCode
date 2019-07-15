function chooseBestSum(t, k, ls) {
  // your code
  if (ls.length<k || ls.length == 0){
      return null;
  }

  var getFlagArrs = function(m, n, ls) {
      if(!n || n < 1) {
          return null;
      }

      var flagArr = [],
          isEnd = false,
          i, j, leftCnt,
          nMax = 0,
          nValue = 0;

      for (i = 0; i < m; i++) {
          flagArr[i] = i < n ? 1 : 0;
          i < n ? nValue = nValue + ls[i]: nValue = nValue;
      }

      if (nValue > nMax && nValue <= t){
          nMax = nValue;
      }
      if (ls.length === n){
          return nMax;
      }

      while (!isEnd) {
          leftCnt = 0;
          for (i = 0; i < m - 1; i++) {
              if (flagArr[i] == 1 && flagArr[i+1] == 0) {
                  nValue = 0;
                  for(j = 0; j < i; j++) {
                      flagArr[j] = j < leftCnt ? 1 : 0;
                      flagArr[j] == 1? nValue = nValue + ls[j]: nValue = nValue;
                  }
                  flagArr[i] = 0;
                  flagArr[i+1] = 1;
                  nValue = nValue + ls[i+1];
                  for (j= i+2; j<m; j++){
                      flagArr[j] == 1? nValue = nValue + ls[j]: nValue = nValue;
                  }
                  if (nValue > nMax && nValue <= t){
                          nMax = nValue;
                      }

                  if(flagArr.slice(-n).join("").indexOf('0') == -1) {
                      isEnd = true;
                  }
                  break;
              }
              flagArr[i] == 1 && leftCnt++;
          }
      }
      if (nMax == 0) {nMax = null;}
      return nMax;
  };

  return getFlagArrs(ls.length, k, ls);
}