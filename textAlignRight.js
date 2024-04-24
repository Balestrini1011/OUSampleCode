function alignRight(text,width){
    const words = text.split(' ');
    let arr = [];
    let line = [];
    let count = 0;
    let str = '';
    words.forEach((ele) => {
    if(count + ele.length > width){
      count = 0;
      arr.push(line);
      line = [];
    }
      if (count + ele.length <= width){
        count = count + ele.length +1;
        line.push(ele);
      }
    })
    if(line.length != 0){
      arr.push(line);
    }
    let tempArr = arr.map((ele) => {
      str = ele.join(' ');
      return ' '.repeat(width - str.length) + str;
    })
    return tempArr.join('\n');
  }