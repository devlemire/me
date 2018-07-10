#!/bin/sh

SCRIPT_DIR="$(pwd)/$(dirname $0)"

git checkout master

git pull

cd $SCRIPT_DIR/../

yarn

cd $SCRIPT_DIR/../public

yarn

yarn build

$SCRIPT_DIR/start-server.sh $SCRIPT_DIR