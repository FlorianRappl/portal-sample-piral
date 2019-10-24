#!/bin/bash

declare -a pilets=("calculator" "twitter" "weather")

trap "trap - SIGTERM && kill -- -$$" SIGINT SIGTERM EXIT

cd portal
npm start &
pid=&&
cd ..

for pilet in "${pilets[@]}";
do
    echo ${pilet}
    cd pilets/${pilet}
    ./node_modules/.bin/pilet publish --fresh --url http://localhost:9000/api/v1/pilet --api-key 123456abcdef
    cd ../..
done

wait $pid
