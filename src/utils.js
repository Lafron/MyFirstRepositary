export class HelpClass{
    addZero(time){
        if(time < 10){
            time = "0" + time;
        }
        return time;
    }

    dateString(date){    
        const monArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug',
            'Sep','Oct','Nov','Dec'];

        const mon = monArr[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        let hours = this.addZero(date.getHours());
        const minutes = this.addZero(date.getMinutes());
        const seconds = this.addZero(date.getSeconds());

        let am = "am";
    
        if(hours > 11){
            am = "pm";

            if(hours != 12){
                hours -= 12;
            }
        }
        return `${mon} ${day}th ${year}, ${hours}:${minutes}:${seconds} ${am}`;
    }

    setSum(donate, totalAmount) {
        let sum = parseInt(totalAmount.textContent);

        sum += parseInt(donate);

        totalAmount.textContent = sum +"$";
    }
}
