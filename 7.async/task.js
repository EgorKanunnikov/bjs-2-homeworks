class AlarmClock {
   constructor(alarmCollection, timeId) {
      this.alarmCollection = [];
      this.timerId = null;
   }

   addClock(time, callback, id) {
      if (id === undefined) {
         throw new Error("error text");
      }
      else if (this.alarmCollection.find(item => item.id === id)) {
         console.error("Будильник с таким id уже существует");
         return;
      }
      else {
         this.alarmCollection.push({ id, time, callback });
      }
   }

   removeClock(id) {
      const deleteId = this.alarmCollection.filter((element) => element.id === id);
      if (deleteId) {
         this.alarmCollection.pop();
      }
      return
      this.alarmCollection.length != this.alarmCollection.length;
   }

   getCurrentFormattedTime() {
      let now = new Date();
      const hours = now.getHours() < 10 ? `0${now.getHours()}` : `${now.getHours()}`;
      const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : `${now.getMinutes()}`;
      let nowTime = `${hours}:${minutes}`;
      return nowTime;
   }

   start() {
      const checkClock = alarm => {
         if (this.alarmCollection.time === this.getCurrentFormattedTime()) {
            this.alarmCollection.callback();
         }
      }
      if (this.timerId === null) {
         this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000)
      }
   }

   stop() {
      if (this.timerId !== null) {
         clearInterval(this.timerId)
         this.timerId = null;
      }
   }

   printAlarms(element) {
      function printCall(element) {
         return "Будильник № " + `${element.id}:${element.time}`
      }
      this.alarmCollection.forEach(printCall);
   }

   clearAlarms() {
      clearInterval(this.timerId)
      this.stop();
      this.alarmCollection = [];
   }
}
