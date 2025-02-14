import dayjs from "./dayjs.min.js";

const now = dayjs();
const today = dayjs().startOf("day");
const yesterday = dayjs().subtract(1, "day");
const tomorrow = dayjs().add(1, "day");
const lastWeek = dayjs().subtract(1, "week");

console.log(today.format("YYYY-MM-DD"));
console.log(yesterday.format("YYYY-MM-DD"));
console.log(tomorrow.format("YYYY-MM-DD"));
console.log(lastWeek.format("YYYY-MM-DD"));