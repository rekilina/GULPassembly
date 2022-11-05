import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
    build: {
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`
    },
    src: {
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}