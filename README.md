# cordova-plugin-pm80-scanner
Cordova Beam Scanner for Point Mobile PM80

# Install

```javascript

cordova plugin add cordova-plugin-pm80-scanner

```

# Usages

### 1.Scan

```javascript
cordova.plugins.pm80scanner.scan(successCallback, errorCallback);
// then the device is ready to scan until the code is read or user cancel.

var successCallback = function(result) {
  console.log(result);
}

var errorCallback = function(error) {
  console.log(error);
}

```

### 2.Cancel

```javascript
cordova.plugins.pm80scanner.cancel();
// then scanner is off and error callback will be fired with error message of "USER_CANCEL".

```

# License

MIT
