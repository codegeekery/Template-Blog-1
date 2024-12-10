// utils/dateUtils.js

export const dateUtils = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(date)) / 1000);
  
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInSeconds / 3600);
    const diffInDays = Math.floor(diffInSeconds / 86400);
    const diffInMonths = Math.floor(diffInDays / 30); // Aproximación
    const diffInYears = Math.floor(diffInDays / 365); // Aproximación
  
    if (diffInYears > 0) {
      return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    }
    if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    }
    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
    if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }
    if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
    return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
  };
  