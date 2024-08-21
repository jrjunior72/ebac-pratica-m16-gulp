//gulp.js

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));//importa o pacote de compilação do sass
const sourcemaps = require('gulp-sourcemaps')//importa o pacote sourcemaps
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() { //comprime imagens
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() { //comprime arquivos javascript
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')//pegar os arquivos fonte
        .pipe(sourcemaps.init())//inicializa o pacote sourcemaps
        .pipe(sass({
            outputStyle: 'compressed'
        }))//executar a compilaão do sass
        .pipe(sourcemaps.write('./maps'))//cria o arquivo de mapeamento na pasta maps
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));//monitora em tempo real alterações no projeto
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJavaScript));//comprime arquivos javascript
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagens));//comprime imagens
}
