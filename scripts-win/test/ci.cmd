@ECHO OFF
./node_modules/.bin/jest --no-cache -u
git checkout exercises/**/*.tsx.snap