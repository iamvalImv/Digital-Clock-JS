class digitalClock{
    constructor(element){
        this.element = element;
    }

    start(){
        this.updateTime();

        setInterval(()=>{
        this.updateTime();
        }, 500);
    }

    updateTime() {
        const time = this.getTime();
        const minutesFormat = time.minute.toString().padStart(2, "0"); 
        const timeFormat = `${time.hour}:${minutesFormat}`;
        const amPm = time.isAm ? "AM" : "PM";

        this.element.querySelector(".digitalClock-time").textContent = timeFormat;
        this.element.querySelector(".digitalClock-ampm").textContent = amPm;

    }

    getTime(){
        const now = new Date();

        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".digitalClock");
const clockObject = new digitalClock(clockElement);

clockObject.start();