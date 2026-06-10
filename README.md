# Introduction

You can edit any page with a simple text editor. When you commit the changes to the repository, the web page will be updated automatically.

It has been developed using html5, css, javascript, bootstrap, php and jquery

## Local development

This is a static website, so it can be tested locally without a build step.

### Using Python

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/
http://localhost:8000/en/
```

### Using Docker Compose

```bash
docker compose up
```

Open:

```text
http://localhost:8080/
http://localhost:8080/en/
```

Stop the server with `Ctrl + C`.

Spanish is served from `/` and English from `/en/`.

Note: extensionless URLs like `/spanish` depend on the Apache `.htaccess` configuration used in production.

## .htaccess file

File is used in order to allow that html files can be used as links without extensions, for example: [https://davidrojo.eu/spanish](https://davidrojo.eu/spanish)

## Customization

This webpage is a customization of the html template available in [david-rojo/personal-webpage-template](https://github.com/david-rojo/personal-webpage-template)

## Author

[David Rojo (@david-rojo)](https://github.com/david-rojo)
