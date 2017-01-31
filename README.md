# cordova-plugin-pm80-scanner
Cordova Beam Scanner for Point Mobile PM80

# Install

```javascript

cordova plugin add cordova-plugin-pm80-scanner

```

# Usages

### 1. Scan

```javascript
cordova.plugins.pm80scanner.scan(successCallback, errorCallback);
// then the scanner is ready to read codes.

var successCallback = function(result) {
  console.log(result);
}

var errorCallback = function(error) {
  console.log(error);
}

```

### 2. Cancel

```javascript
cordova.plugins.pm80scanner.cancel();
// then the scanner is off and error callback will be fired with error message of "USER_CANCEL".

```

### 3. Beep

```javascript
cordova.plugins.pm80scanner.beep(mode);
// to control beep when the scanner reads the codes. mode : true or false

```

### 4. Set

```javascript
cordova.plugins.pm80scanner.set(successCallback, errorCallback);
// Setting callback functions to read code with side buttons.

```

# License

MIT
