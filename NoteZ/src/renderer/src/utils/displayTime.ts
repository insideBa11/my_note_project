import dayjs from "dayjs";

export function displayTime(timestamp: number): string {
	const d = dayjs(timestamp);
	const today = dayjs();

	if(d.isSame(today,'day')){
		return `today ${d.format('HH:mm')}`
	}else{
		return d.format('YYYY/MM/DD')
	}
}