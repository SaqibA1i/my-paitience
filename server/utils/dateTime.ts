
export default class {
    static formatTime(time: string) {
        // console.log(time);
        // console.log(typeof time);
        if (time == "09:00:00") {
            return "9:00 AM";
        } else if (time == "10:00:00") {
            return "10:00 AM";
        } else if (time == "11:00:00") {
            return "11:00 AM";
        } else if (time == "12:00:00") {
            return "12:00 PM";
        } else if (time == "13:00:00") {
            return "1:00 PM";
        } else if (time == "14:00:00") {
            return "2:00 PM";
        } else if (time == "15:00:00") {
            return "3:00 PM";
        } else if (time == "16:00:00") {
            return "4:00 PM";
        } else if (time == "17:00:00") {
            return "5:00 PM";
        } else if (time == "18:00:00") {
            return "6:00 PM";
        } else if (time == "19:00:00") {
            return "7:00 PM";
        } else if (time == "20:00:00") {
            return "8:00 PM";
        } else if (time == "21:00:00") {
            return "9:00 PM";
        } else {
            return "9:00 PM";
        }
    }
}