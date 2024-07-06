const { src, dest, watch, parallel } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");

function styles() {
  return src("src/scss/**/*.scss")
    .pipe(map.init())
    .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
    .pipe(concat("style.min.css"))
    .pipe(map.write("src/sourcemaps/"))
    .pipe(dest("public/css"));
}

function watching() {
  watch(["src/scss/**/*.scss"], styles);
}

exports.styles = styles;
exports.watching = watching;
exports.default = parallel(styles, watching);
