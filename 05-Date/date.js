const calculateDateDifference = (startDate, endDate) => {
    if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
      throw new Error("Both arguments must be instances of Date!");
    }
  
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Milliseconds in a day
    const millisecondsDifference = endDate - startDate;
  
    if (!isFinite(millisecondsDifference)) {
      throw new Error('Invalid date values!');
    }
  
    const daysDifference = millisecondsDifference / millisecondsPerDay;
  
    if (daysDifference < 0) {
      throw new Error("End date cannot be earlier than start date!");
    }
  
    return daysDifference;
  };
  
  module.exports = { calculateDateDifference };
  
  
  
  
  
  