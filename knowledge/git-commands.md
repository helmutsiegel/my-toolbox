# Git

## Git commands

### Stash your changes, pull, then apply
1. `git stash`
2. `git pull`
3. `git stash apply --index`

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
