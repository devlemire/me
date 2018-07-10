#!/bin/sh

forever stop me
forever start -l me.log -a --uid me $1/../index.js