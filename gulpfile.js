const gulp = require("gulp"),
    colors = require("colors"),
    pump = require("pump"),
    path = require("path"),
    sass = require("gulp-sass"),
    autoprefixer = require("autoprefixer"),
    postcss = require("gulp-postcss");
cwd = process.cwd();

var config = {
    target: "prod",
    fontsDir: "./src/assets/fonts",
    fontsDistDir: "./dist/fonts",
    imgDir: "./src/assets/img",
    imgDistDir: "./dist/img",
    sassDir: "./src/assets/sass",
    cssDistDir: "./dist/css",
};

gulp.task(
    "sass:compile",
    gulp.series((cb) => {
        logVerbose("sass:compile", `Compiling sass files`);
        logVerbose("sass:compile", `searching for sass files at: ${path.resolve(cwd, config.sassDir, "*.scss")}`);
        logVerbose("sass:compile", `Searching for sass files at: ${path.resolve(cwd, config.sassDir, "**/*.scss")}`);
        logVerbose("sass:compile", `Compressing CSS: ${!config.target == "development" ? "false" : "true"}`);
        var sources = [path.resolve(cwd, config.sassDir, "*.scss"), path.resolve(cwd, config.sassDir, "**/*.scss")];
        var tasks = [
            gulp.src(sources),
            sass({
                compress: true,
                outputStyle: "compressed",
            }),
            postcss([
                autoprefixer({
                    overrideBrowserslist: ["last 4 versions"],
                }),
            ]),
            gulp.dest(path.resolve(cwd, config.cssDistDir)),
        ];

        logVerbose("sass:compile", `Sass files will be written to ${path.resolve(cwd, config.cssDistDir)}`);
        pump(tasks, (err) => {
            if (err) {
                logError("sass:compile", `an error has occured while compiling sass files ${err.message}`);
                cb(err);
                return;
            }
            logVerbose("sass:compile", `finished compiling sass files successfully.`);
            cb();
        });
    })
);

gulp.task(
    "fonts:copy",
    gulp.series((cb) => {
        var sources = [path.resolve(cwd, config.fontsDir, "*.*")];
        var tasks = [gulp.src(sources), gulp.dest(path.resolve(cwd, config.fontsDistDir))];
        pump(tasks, (err) => {
            if (err) {
                logError("fonts:copy", `an error has occured while compiling sass files ${err.message}`);
                cb(err);
                return;
            }
            logVerbose("fonts:copy", `finished compiling sass files successfully.`);
            cb();
        });
    })
);

gulp.task(
    "imgs:copy",
    gulp.series((cb) => {
        var sources = [path.resolve(cwd, config.imgDir, "*.png")];
        var tasks = [gulp.src(sources), gulp.dest(path.resolve(cwd, config.imgDistDir))];
        pump(tasks, (err) => {
            if (err) {
                logError("imgs:copy", `an error has occured while compiling sass files ${err.message}`);
                cb(err);
                return;
            }
            logVerbose("imgs:copy", `finished compiling sass files successfully.`);
            cb();
        });
    })
);

gulp.task("assets:copy", gulp.series("fonts:copy", "imgs:copy"));




// Log Utils
function logVerbose(operation, msg) {
    if (config.isVerbose) {
        console.log(`${colors.magenta(new Date().toISOString())} - ${colors.cyan(operation)} - ${colors.green(msg)}`);
    }
}

function logError(operation, msg) {
    console.log(`${colors.red(new Date().toISOString())} - ${colors.red(operation)} - ${colors.red(msg)}`);
}
