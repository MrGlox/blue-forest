import moment from "moment";

export default class Clock {
  constructor(element = ".clock") {
    this.$clock = document.querySelector(element);
  }

  init() {
    this.$clock.innerHTML = moment().format("h:mm:ss a");
    new Date();

    this.interval = () => {
      this.$clock.innerHTML = moment().format("h:mm:ss a");
      setTimeout(this.interval, 1000);
    };

    setTimeout(this.interval, 1000);
  }
}
