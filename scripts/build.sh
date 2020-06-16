#/bin/bash

BASE_PATH=`cd $(dirname $0);pwd -P`
BASE_PATH=`cd $(dirname $BASE_PATH);pwd -P`

cd $BASE_PATH

npm run build:lp

rm -rf dist

mkdir dist

cp packages/scroll-affix/dist/scroll-affix.js dist/scroll-affix.js
cp packages/v-scroll-affix/dist/v-scroll-affix.js dist/v-scroll-affix.js

echo "--- build 完毕 >_<#@! ---"
