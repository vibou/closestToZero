const abs = Math.abs;

module.exports = {
  closestToZero(array) {
    if (array === undefined || array.length === 0) {
      return 0;
    }

    var minIndex = -1;
    array.some((element, index) => {
      if (element === 0) {
        minIndex = index;
        // early stopping
        return true;
      } else if (minIndex === -1) {
        minIndex = index;
        // continue
        return false;
      }

      const minIndexValue = array[minIndex];
      const absMinIndexValue = abs(minIndexValue);
      const absElement = abs(element);

      if (absMinIndexValue > absElement) {
        minIndex = index;
      } else if (absMinIndexValue === absElement) {
        // give priorities to the positive value
        if (minIndexValue < 0 && element > 0) {
          minIndex = index;
        }
      }
    });

    return array[minIndex];
  },

  closestToZeroSorted(array, isArraySorted = false) {
    if (array === undefined || array.length === 0) {
      return 0;
    }

    if (!isArraySorted) {
      array.sort((a, b) => a - b);
    }

    var minIndex = -1;

    console.log(array);

    array.some((element, index) => {
      if (element === 0) {
        minIndex = index;
        // early stopping
        return true;
      } else if (minIndex === -1) {
        minIndex = index;
        // continue
        return false;
      }

      const minIndexValue = array[minIndex];
      const absMinIndexValue = abs(minIndexValue);

      if (element > 0) {
        // as soon as a positive element comes 
        // early stop is possible since this element / or the previous one
        // is the closest value to 0

        if (element <= absMinIndexValue) {
          minIndex = index;
        }

        return true;
      }

      // dealing with negative value we always update the index with the
      // closest value to zero
      minIndex = index;
      return false;      
    });

    return array[minIndex];
  }
}