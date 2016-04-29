#http://npm.taobao.org/
#npm install -g cnpm --registry=https://registry.npm.taobao.org

#install sass
sudo gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
sudo gem install sass
sass -v

#install compass
sudo gem install compass
compass -v
#compass create
#compass init
#compass clean
#compass compile
#compass watch
#compass stats
#compass validate


#gulp
npm install gulp --save-dev
ln -s node_modules/gulp/bin/gulp.js gulp

npm install gulp-ruby-sass
npm install gulp-autoprefixer
npm install gulp-clean-css
npm install gulp-sourcemaps
npm install gulp-uglify
npm install gulp-concat
npm install gulp-compass
