function scrollTo(dir) {
    const arr = getList();

    let node = null;
    switch (dir) {
      case "next": {
        if (indexRef.current < arr.length) {
          node = arr[++indexRef.current];
        }
        break;
      }
      case "prev": {
        if (indexRef.current >= 0) {
          node = arr[--indexRef.current];
        }
        break;
      }
      default:
        break;
    }