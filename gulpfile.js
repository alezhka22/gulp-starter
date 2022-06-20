//main module
import gulp from "gulp";
//paths import
import { path } from "./gulp/config/path.js";
//import common plugins
import { plugins } from "./gulp/config/plugins.js";

//pass value into global var
global.app = {
	path: path,
	gulp: gulp,
	plugins: plugins,
}

//import of tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

//watcher
function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.html, html);

}

const mainTasks = gulp.parallel(copy, html);

//ordering scenarios for running tasks
const dev = gulp.series(reset, mainTasks, watcher);


//default sceenario
gulp.task('default', dev);