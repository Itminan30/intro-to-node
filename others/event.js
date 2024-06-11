const EventEmitter = require("node:events");

class School extends EventEmitter {
    startSchool() {
        // School Start
        console.log("School Started");
        // First Period
        setTimeout(() => {
            this.emit("bellRing", {
                period: "First",
                text: "period Ended"
            });
            // Second Period
            setTimeout(() => {
                this.emit("bellRing", {
                    period: "Second",
                    text: "period Ended"
                });
                // Third Period
                setTimeout(() => {
                    this.emit("bellRing", {
                        period: "Third",
                        text: "period Ended"
                    });
                }, 3000);
            }, 3000);
        }, 3000);
    }
}


module.exports = {
    School
};