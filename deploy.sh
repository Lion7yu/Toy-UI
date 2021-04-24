rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Lion7yu/Lion-UI.git &&
git push -f -u origin master &&
cd ..
echo https://lion7yu.github.io/Lion-UI/