# Git

## Git commands

### Stash your changes, pull, then apply
```shell
git stash
git pull
git stash apply --index
```

### Git Configs

- List configs
```shell
git config --list
```

- Set config
```shell
git config [config name] [value]
```

- Delete config
```shell
git config --unset [config name]
```

- Use rebase for diverging commit
```shell
git config pull.rebase true
```
