const random = {
    // name: "John",
    // info() {
    //     console.log("Hi my name is " + this.name);
    // }

    name: "Tutorial",
    video: ["JavaScript", "this", "Keyword"],
    info() {
        this.video.forEach(function(tag) {
            console.log(this.name, tag)
        }, this)
    }
}
random.info();

