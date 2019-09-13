function parse(str){
  var i,
      j,
      nIndex =0,
      nLength = str.length,
      aInitArr = [],
      oInitObj = {},
      handleCase,
      handleArr,
      handleObject,
      test;
  console.log(str);

  handleCase = function(s, bValue){
    var aArr = [],
        result = [];
    console.log(s);
    switch (s){
      case "true": return true;
      case "false": return false;
      case "null": return null;
    }
    //handle string
    if ((s[0] === s[s.length-1]) && (s[0] === "'" || s[0] === '"')){
      return s.slice(1, s.length-1);
    }

    //handle int
    if (!isNaN(s)){
      return Number(s);
    }

    //handle arr
    if ((s[0] === "[" || s[1] === "[")&& s[s.length-1] === "]"){
      if (s[1] === "["){
        s = s.slice(2, s.length-1);
      }else{
        s = s.slice(1, s.length-1);
      }


      if (s === "") { return [];}
      //aArr = s.split(",");

      var nIndex = 0;
      var nPIndex = 0;
      //var bFlag = false;
      while (nIndex < s.length){
        if (s[nIndex] === ","){
          s1 = s.slice(0, nIndex);
          s2 = s.slice(nIndex);
          if ((s1.lastIndexOf("[") === -1 || s2.indexOf("]") === -1 || (s1.lastIndexOf("]") > s1.lastIndexOf("[")) || (s2.indexOf("[") > s2.indexOf("]")))
              && (s1.lastIndexOf("{") === -1 || s2.indexOf("}") === -1 || (s1.lastIndexOf("}") > s1.lastIndexOf("{")) || (s2.indexOf("{") > s2.indexOf("}")))){
                aArr.push(s.slice(nPIndex, nIndex));
                nPIndex = nIndex+1;
                //bFlag = true;
          }
        }
        nIndex++;
      }

      //if (bFlag){
        aArr.push(s.slice(nPIndex));
      //}

      aArr.forEach(function(item){
        result.push(test(item));
      });

      return result;
    }

    return s;
  };

  test = function(s, object){
    var nIndex,nPIndex,
        arr = [], s1, s2, bFlag = true, oR;
    //case object
    if (s[0] === "{"){
      //split
      s = s.slice(1, s.length -1);
      if (s === ""){
        return {};
      }

      //{a:[1,2]}  find "," where not in {}/[]
      nIndex = 0;
      nPIndex = 0;
      while (nIndex < s.length){
        if (s[nIndex] === ","){
          s1 = s.slice(0, nIndex);
          s2 = s.slice(nIndex-1);
          if ((s1.lastIndexOf("[") === -1 || s2.indexOf("]") === -1 || (s1.lastIndexOf("]") > s1.lastIndexOf("[")) || (s2.indexOf("[") > s2.indexOf("]")))
              && (s1.lastIndexOf("{") === -1 || s2.indexOf("}") === -1 || (s1.lastIndexOf("}") > s1.lastIndexOf("{")) || (s2.indexOf("{") > s2.indexOf("}")))){
                arr.push(s.slice(nPIndex, nIndex-1));
                nPIndex = nIndex;
                //bFlag = true;
          }
        }
        nIndex++;
      }

      //if (bFlag){
        arr.push(s.slice(nPIndex));
      //}

      //arr = s.split(",");

      arr.forEach(function(item){
        //var sArr = item.split(":");
        var nIndex = item.indexOf(":");
        //var a = sArr[0];
        var a = item.slice(1, nIndex - 1);
        object[a] = {};
        object[a] =  test(item.slice(nIndex + 1), object[a]);
        //object[a] = oR;


      });
    }else{
      object = handleCase(s, true);
    }

    return object;

  };

  if (str[0] === "{"){
    return test(str, {});
  } else{
    return handleCase(str);
  }
}