// основной модуль
import gulp from "gulp";
import {path} from "./gulp/config/path.js"
import {plugins} from "./gulp/config/plugins.js"

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import {copy} from "./gulp/tasks/copy.js";
import {reset} from "./gulp/tasks/reset.js";
import {html} from "./gulp/tasks/html.js";
import {server} from "./gulp/tasks/server.js";
import {scss} from "./gulp/tasks/scss.js"

// all task after reset, which operate in parallel
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
}

const mainTask = gulp.parallel(copy, html, scss);


// Сценарий выполнения задач
const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));




gulp.task('default', dev);