function Hello() {
    var name;

    this.setName = function (thyName) {
        name = thyName;
    };

    this.sayHello = function () {
        console.log("hello," + name);
    }
}

function study() {
    var subject;
    this.setSubject = function (subjectVal) {
        subject = subjectVal;
    };

    this.learn = function () {
        console.log("learn " + subject);
    };
}

exports.Hello = Hello;

exports.Study = study;