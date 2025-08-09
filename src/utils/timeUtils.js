// utils/timeUtils.js

export function convertGMTToLocalTime(gmtTimeString) {
  // gmtTimeString should be in a format like "2025-08-06T12:00:00Z"
  const gmtDate = new Date(gmtTimeString);

  // Get the local time zone offset in +HHMM or -HHMM format
  const offsetMinutes = gmtDate.getTimezoneOffset(); // in minutes
  const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
  const offsetRemainingMinutes = Math.abs(offsetMinutes) % 60;
  const sign = offsetMinutes <= 0 ? "+" : "-";
  const formattedOffset = `${sign}${String(offsetHours).padStart(
    2,
    "0"
  )}${String(offsetRemainingMinutes).padStart(2, "0")}`;

  // Format local time
  const localTime = gmtDate.toLocaleString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  return {
    localTime,
    formattedOffset, // like "+0300" for Egypt
  };
}

export const convertUTCToLocalTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  let totalMinutes = hours * 60 + minutes;
  const timezoneOffset = -new Date().getTimezoneOffset(); // flip sign for addition
  totalMinutes = (totalMinutes + timezoneOffset + 1440) % 1440;
  const localHours = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
  const localMinutes = String(totalMinutes % 60).padStart(2, "0");
  return `${localHours}:${localMinutes}`;
};

export const getMinutesFromTime = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  return hours * 60 + minutes;
};
