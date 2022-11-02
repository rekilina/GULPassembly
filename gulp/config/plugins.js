import replace from "gulp-replace";
import plumber from "gulp-plumber"; // errors processing
import notify from "gulp-notify"; // errors alerts and messages

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
}