// основной модуль
import gulp from "gulp";
import {path} from "./gulp/config/path.js"

global.app = {
    path: path,
    gulp: gulp,
}

import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";

// all task after reset, which operate in parallel
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTask = gulp.parallel(copy, html);


// Сценарий выполнения задач
const dev = gulp.series(reset, mainTask, watcher);




gulp.task('default', dev);