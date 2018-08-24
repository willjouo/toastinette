# Toastinette

The challenge was to create a notification library under 1 KB.

Therefore, Toastinette is an ultra-lightweight (minified CSS + JS <= 1 KB) notification library with no dependencies. It's ultra lightweight because it does *not* accept user input and there is no progress bar.

## Size

| File                  | Size (bytes) |
| --------------------- | ------------:|
| toastinette.min.js    |        696 B |
| toastinette.min.css   |        328 B |
| **Total**             |       1024 B |

## Installation

### Manual

In the ```<head>``` section:
```html
<link rel="stylesheet" type="text/css" href="dist/toastinette.min.css">
```
At the bottom of the ```<body>```:
```html
<script src="dist/toastinette.min.js"></script>
```

### npm

todo

## Usage

```js
Toastinette.show(type, duration, html);
```
Creates a new toast.
- ```type```: Either ```'success'```, ```'info'```, ```'warning'``` or ```'error'```
- ```duration```: Show duration in ms
- ```html```: HTML code of the toast

```js
Toastinette.setPosition(position, margin = 12);
```
Set the position of the toasts.
- ```position```: ```'tl'``` for top left, ```'tr'``` for top right, ```'br'``` for bottom right (default) or ```'bl'``` for bottom left
- ```margin```: Optional. The margin in px. Default is 12px.
