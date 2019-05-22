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
      }

      const minIndexValue = array[minIndex];
      const absMinIndexValue = abs(minIndexValue);
      const absElement = abs(element);

      if (minIndex === -1 || absMinIndexValue > absElement) {
        minIndex = index;
      } else if (absMinIndexValue === absElement) {
        // give priorities to the positive value
        if (minIndexValue < 0 && element > 0) {
          minIndex = index;
        }
      }
    });

    return array[minIndex];
  }
}