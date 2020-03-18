var bs = require("browser-sync").create();
var uglifycss = require('uglifycss');
var fs = require('fs');

bs.init({
    files: ".",
    server: ".",
    watch: true
});

bs.watch("styles.css").on("change", function (file) {
    if (file == 'styles.css') {
        var minified = uglifycss.processFiles([ file ]);
        fs.writeFile("styles.min.css", minified, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
});

bs.reload("*.html");
