# Node

## Node tools

### nvm - Node Version Manager

### Installation

1. Install nvm
```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
2. Load bashrc
```shell
source ~/.bashrc
```
3. Check available node version
```shell
nvm ls-remote
```
4. Install the latest version
```shell
nvm install --lts
```
Or a specific version
```shell
nvm install 20.6.0
```
### Install node with nvm

5. Set the new version as default.
```shell
nvm alias default <version>
```
Replace <version> with the version you installed.

6. Verify the new Node.js version
```shell
node --version
```