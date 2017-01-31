var exec = cordova.require("cordova/exec");

/**
 * Constructor.
 *
 * @returns {Pm80Scanner}
 */
function Pm80Scanner() {
}

/**
 * Read code from scanner.
 *
 * @param {Function} successCallback
 * @param {Function} errorCallback
 * @param config
 */
Pm80Scanner.prototype.scan = function (successCallback, errorCallback, config) {
      var actionCode = (successCallback == null && errorCallback == null) ? "scan2" : "scan";
      exec(successCallback, errorCallback, 'PM80Scanner', actionCode, config);
};

/**
 * Cancel.
 */
Pm80Scanner.prototype.cancel = function () {
      exec(null, null, 'PM80Scanner', 'cancel', null);
};

/**
 * Beep.
 */
Pm80Scanner.prototype.beep = function (mode) {
      exec(null, null, 'PM80Scanner', 'beep', [mode ? 1 : 0]);
};

/**
 * Register Callback.
 */
Pm80Scanner.prototype.set = function (successCallback, errorCallback) {
      exec(successCallback, errorCallback, 'PM80Scanner', 'set', null);
};


var pm80Scanner = new Pm80Scanner();
module.exports = pm80Scanner;
