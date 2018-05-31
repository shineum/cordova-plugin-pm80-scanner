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
// then callbacks will be set and scanner will be ready.

var successCallback = function(result, metadata) {
  // metadata.type
  console.log(result, metadata);  
}

var errorCallback = function(error) {
  console.log(error);
}
```


```javascript
cordova.plugins.pm80scanner.scan();
// if you already set callbacks, calling scan() without parameters will work also.

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

### 4. Set Callbacks

```javascript
cordova.plugins.pm80scanner.set(successCallback, errorCallback);
// Setting callback functions to read code with side buttons.

```

### 5. Set Trigger Mode

```javascript
cordova.plugins.pm80scanner.setTriggerMode(mode);
// Set scanner trigger mode.

// Available modes are:
// cordova.plugins.pm80scanner.TRIGGER_MODE.ONESHOT
// cordova.plugins.pm80scanner.TRIGGER_MODE.AUTO
// cordova.plugins.pm80scanner.TRIGGER_MODE.CONTINUOUS

```

# history

### 0.0.8
- Callback returns barcode types as metadata

### 0.0.6
- Typo correction on description

### 0.0.5
- Support to change scanner trigger mode


# License

MIT
