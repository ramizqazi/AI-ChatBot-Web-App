export function generateRandomId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed
  return `${timestamp}_${randomNum}`;
}

// Function to get the browser name
export function getBrowserName() {
  const userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.includes("Chrome")) {
    browserName = "Google Chrome";
  } else if (userAgent.includes("Firefox")) {
    browserName = "Mozilla Firefox";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    browserName = "Apple Safari";
  } else if (userAgent.includes("Edge")) {
    browserName = "Microsoft Edge";
  } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
    browserName = "Internet Explorer";
  } else {
    browserName = "Unknown Browser";
  }

  return browserName;
}

// Function to get the mobile platform name (Android/iOS)
export function getMobilePlatform() {
  const userAgent = navigator.userAgent;

  if (/Android/i.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return "iOS";
  } else {
    return "Not a mobile device";
  }
}