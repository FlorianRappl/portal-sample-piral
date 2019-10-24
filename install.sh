#!/bin/bash

declare -a pilets=("calculator" "twitter" "weather")

echo "portal"
cd portal
rm -rf node_modules
rm -f package-lock.json
npm i
npm run build
npm pack
cd ..

for pilet in "${pilets[@]}";
do
    echo ${pilet}
    cd pilets/${pilet}
    rm -rf node_modules
    rm -f package-lock.json
    npm i
    cd ../..
done
