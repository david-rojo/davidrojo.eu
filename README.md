# Introduction

[![Deploy](https://github.com/david-rojo/davidrojo.eu/actions/workflows/deploy.yml/badge.svg)](https://github.com/david-rojo/davidrojo.eu/actions/workflows/deploy.yml)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fdavidrojo.eu&label=website)](https://davidrojo.eu/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-222?logo=githubpages&logoColor=white)](https://davidrojo.eu/)
[![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=222)](https://davidrojo.eu/)

You can edit any page with a simple text editor. When you push changes to `main`, the web page is published automatically through GitHub Actions.

It is a static website built with HTML, CSS, JavaScript and jQuery.

## Local development

This is a static website, so it can be tested locally without a build step.

### Using Python

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

### Using Docker Compose

```bash
docker compose up
```

Open:

```text
http://localhost:8080/
```

Stop the server with `Ctrl + C`.

The site is served from `/`. Spanish is the default language and English is selected client-side with the language switcher.

Note: GitHub Pages does not process `.htaccess`. The English content is served from the main page through client-side i18n.

## Deployment

The site is published with GitHub Pages using GitHub Actions.

Workflow:

```text
.github/workflows/deploy.yml
```

The workflow runs on pushes to `main` and can also be triggered manually from GitHub Actions.

GitHub Pages must be configured to use GitHub Actions as the source.

The static site is currently uploaded from the repository root.

## Lighthouse

Pull requests run an informational Lighthouse CI workflow for `/`.

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
