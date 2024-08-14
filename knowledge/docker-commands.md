# Docker

## Docker commands

### create a local pg docker instance

```shell
docker volume create pg-data
```

```shell 
docker run -d --restart=always --name pg -e POSTGRES_USER=pg -e POSTGRES_PASSWORD=pg -v pg-data:/var/lib/postgresql/data -p 5432:5432 public.ecr.aws/docker/library/postgres:15.4-alpine
```
