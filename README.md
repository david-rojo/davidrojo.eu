# Introduction

You can edit any page with a simple text editor. When you push changes to `main`, the web page is published automatically through GitHub Actions.

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

Note: GitHub Pages does not process `.htaccess`, so production URLs should use real static paths such as `/` and `/en/`.

## Deployment

The site is published with GitHub Pages using GitHub Actions.

Workflow:

```text
.github/workflows/deploy.yml
```

The workflow runs on pushes to `main` and can also be triggered manually from GitHub Actions.

GitHub Pages must be configured with:

The static site is currently uploaded from the repository root.

## Lighthouse

Pull requests run an informational Lighthouse CI workflow for `/` and `/en/`.

Workflow:

```text
.github/workflows/lighthouse.yml
```

Configuration:

```text
.lighthouserc.json
```

Current assertions are warnings only, so Lighthouse reports do not block pull requests.

## Customization

This webpage is a customization of the html template available in [david-rojo/personal-webpage-template](https://github.com/david-rojo/personal-webpage-template)
