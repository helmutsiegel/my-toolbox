echo "# Helmut Tool-Box aliases BEGIN" >> ~/.bashrc

echo "alias pull='git pull'"  >> ~/.bashrc
echo "alias push='git push'"  >> ~/.bashrc
echo "alias pullstash='git stash && git pull && git stash apply --index'"  >> ~/.bashrc
echo "alias codebashrc='code ~/.bashrc'"  >> ~/.bashrc
echo "alias loadbashrc='source ~/.bashrc'"  >> ~/.bashrc
echo "alias status='git status'"  >> ~/.bashrc
echo "alias commit='git commit -am'"  >> ~/.bashrc

echo "# Helmut Tool-Box aliases END" >> ~/.bashrc
