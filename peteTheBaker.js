function cakes(recipe, available) {
    let arr = Object.keys(recipe);
    let cakeArr = arr.map((key) => {
      if (available[key]){
        return Math.floor(available[key] / recipe[key]);
      }
      else {
          return 0;
      }
    });
    cakeArr.sort();
    return cakeArr[0];
  }