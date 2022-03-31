#! /bin/sh

npm run build

cd ./dist
git init
git remote add origin2 'git@github.com:limuen/limuen.github.io/tailwindcss.git'
git remote set-url origin2 'git@github.com:limuen/limuen.github.io/tailwindcss.git'
git add ./
git commit -m "$(date):commit"
git push -f origin2 master
cd ../
