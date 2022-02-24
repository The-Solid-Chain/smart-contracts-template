# Smart Contracts Repo

# Install nvm

- Download and install `nvm`

```
$ curl -sL https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh -o install_nvm.sh
$ chmod +x install_nvm.sh
$ ./install_nvm.sh
```

- Restart terminal or source the new config with

```
$ source ~/.bash_profile
```

- Check that the `nvm` command is installed with

```
$ command -v nvm
nvm
```

If it does not return nvm, the command was not installed properly

Reference: https://heynode.com/tutorial/install-nodejs-locally-nvm/

# Install node

- Install the LTS (Long Term Support) version of node

```
$ nvm install --lts
```

- Verify that it worked

```
$ node --version
v16.14.0
$ which node
/home/user/.nvm/versions/node/v16.14.0/bin/node
```

Reference: https://heynode.com/tutorial/install-nodejs-locally-nvm/

# Install yarn

- Enable `corepack` from Node package

```
$ corepack enable
```

- Check the installation

```
$ yarn --version
3.2.0
```

Reference: https://yarnpkg.com/getting-started/install

# Create a Yarn zero-install

- Zero-installs allow for repositories to contain all files needed to start development without having to install anything. Create a `yarn` zero-install with:

```
$ yarn init -2
```

It will create several files and a _package.json_ with the project config

Reference: https://yarnpkg.com/getting-started/install

# Install yarn interactive-tools

- These plugin adds some high-level commands to manage the project using graphical terminal interfaces

```
$ yarn plugin import interactive-tools
```

Reference: https://yarnpkg.com/features/plugins
