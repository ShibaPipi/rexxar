/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/chunk/" + ({"index":"index","vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole":"vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole","home":"home","login":"login","notFound":"notFound","notice":"notice","permission":"permission","post":"post","role":"role","rolePermission":"rolePermission","topic":"topic","unauthorized":"unauthorized","user":"user","userRole":"userRole"}[chunkId]||chunkId) + ".js?v=" + {"index":"5f6b93ec6949e5ff2abe","vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole":"f672f5face6b08103519","home":"bf8877360fb77055b2bb","login":"5d7bec973bf4b5e0c888","notFound":"9264c353fe01d653a1a6","notice":"5ca7b82515ad8f1a2ee1","permission":"c5bb676f8d995d0ffc11","post":"845476ed6fc477d6f41a","role":"5b87e17e55e2566aec74","rolePermission":"c028fd51e799023adbaf","topic":"17c0583ec7642a965443","unauthorized":"722156ce15d482a4e77e","user":"08ae2e404d2010f7d4e2","userRole":"0710c1976a5c966783d3"}[chunkId] + ""
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App'
});

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/less/dist/less.js":
/*!****************************************!*\
  !*** ./node_modules/less/dist/less.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Less - Leaner CSS v3.11.3
 * http://lesscss.org
 * 
 * Copyright (c) 2009-2020, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache-2.0 License.
 *
 * @license Apache-2.0
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  // Export a new default each time
  var defaultOptions = (function () { return ({
      /* Inline Javascript - @plugin still allowed */
      javascriptEnabled: false,
      /* Outputs a makefile import dependency list to stdout. */
      depends: false,
      /* (DEPRECATED) Compress using less built-in compression.
    * This does an okay job but does not utilise all the tricks of
    * dedicated css compression. */
      compress: false,
      /* Runs the less parser and just reports errors without any output. */
      lint: false,
      /* Sets available include paths.
    * If the file in an @import rule does not exist at that exact location,
    * less will look for it at the location(s) passed to this option.
    * You might use this for instance to specify a path to a library which
    * you want to be referenced simply and relatively in the less files. */
      paths: [],
      /* color output in the terminal */
      color: true,
      /* The strictImports controls whether the compiler will allow an @import inside of either
    * @media blocks or (a later addition) other selector blocks.
    * See: https://github.com/less/less.js/issues/656 */
      strictImports: false,
      /* Allow Imports from Insecure HTTPS Hosts */
      insecure: false,
      /* Allows you to add a path to every generated import and url in your css.
    * This does not affect less import statements that are processed, just ones
    * that are left in the output css. */
      rootpath: '',
      /* By default URLs are kept as-is, so if you import a file in a sub-directory
    * that references an image, exactly the same URL will be output in the css.
    * This option allows you to re-write URL's in imported files so that the
    * URL is always relative to the base imported file */
      rewriteUrls: false,
      /* How to process math
    *   0 always           - eagerly try to solve all operations
    *   1 parens-division  - require parens for division "/"
    *   2 parens | strict  - require parens for all operations
    *   3 strict-legacy    - legacy strict behavior (super-strict)
    */
      math: 0,
      /* Without this option, less attempts to guess at the output unit when it does maths. */
      strictUnits: false,
      /* Effectively the declaration is put at the top of your base Less file,
    * meaning it can be used but it also can be overridden if this variable
    * is defined in the file. */
      globalVars: null,
      /* As opposed to the global variable option, this puts the declaration at the
    * end of your base file, meaning it will override anything defined in your Less file. */
      modifyVars: null,
      /* This option allows you to specify a argument to go on to every URL.  */
      urlArgs: ''
  }); });

  function extractId(href) {
      return href.replace(/^[a-z-]+:\/+?[^\/]+/, '') // Remove protocol & domain
          .replace(/[\?\&]livereload=\w+/, '') // Remove LiveReload cachebuster
          .replace(/^\//, '') // Remove root /
          .replace(/\.[a-zA-Z]+$/, '') // Remove simple extension
          .replace(/[^\.\w-]+/g, '-') // Replace illegal characters
          .replace(/\./g, ':'); // Replace dots with colons(for valid id)
  }
  function addDataAttr(options, tag) {
      for (var opt in tag.dataset) {
          if (tag.dataset.hasOwnProperty(opt)) {
              if (opt === 'env' || opt === 'dumpLineNumbers' || opt === 'rootpath' || opt === 'errorReporting') {
                  options[opt] = tag.dataset[opt];
              }
              else {
                  try {
                      options[opt] = JSON.parse(tag.dataset[opt]);
                  }
                  catch (_) { }
              }
          }
      }
  }

  var browser = {
      createCSS: function (document, styles, sheet) {
          // Strip the query-string
          var href = sheet.href || '';
          // If there is no title set, use the filename, minus the extension
          var id = "less:" + (sheet.title || extractId(href));
          // If this has already been inserted into the DOM, we may need to replace it
          var oldStyleNode = document.getElementById(id);
          var keepOldStyleNode = false;
          // Create a new stylesheet node for insertion or (if necessary) replacement
          var styleNode = document.createElement('style');
          styleNode.setAttribute('type', 'text/css');
          if (sheet.media) {
              styleNode.setAttribute('media', sheet.media);
          }
          styleNode.id = id;
          if (!styleNode.styleSheet) {
              styleNode.appendChild(document.createTextNode(styles));
              // If new contents match contents of oldStyleNode, don't replace oldStyleNode
              keepOldStyleNode = (oldStyleNode !== null && oldStyleNode.childNodes.length > 0 && styleNode.childNodes.length > 0 &&
                  oldStyleNode.firstChild.nodeValue === styleNode.firstChild.nodeValue);
          }
          var head = document.getElementsByTagName('head')[0];
          // If there is no oldStyleNode, just append; otherwise, only append if we need
          // to replace oldStyleNode with an updated stylesheet
          if (oldStyleNode === null || keepOldStyleNode === false) {
              var nextEl = sheet && sheet.nextSibling || null;
              if (nextEl) {
                  nextEl.parentNode.insertBefore(styleNode, nextEl);
              }
              else {
                  head.appendChild(styleNode);
              }
          }
          if (oldStyleNode && keepOldStyleNode === false) {
              oldStyleNode.parentNode.removeChild(oldStyleNode);
          }
          // For IE.
          // This needs to happen *after* the style element is added to the DOM, otherwise IE 7 and 8 may crash.
          // See http://social.msdn.microsoft.com/Forums/en-US/7e081b65-878a-4c22-8e68-c10d39c2ed32/internet-explorer-crashes-appending-style-element-to-head
          if (styleNode.styleSheet) {
              try {
                  styleNode.styleSheet.cssText = styles;
              }
              catch (e) {
                  throw new Error('Couldn\'t reassign styleSheet.cssText.');
              }
          }
      },
      currentScript: function (window) {
          var document = window.document;
          return document.currentScript || (function () {
              var scripts = document.getElementsByTagName('script');
              return scripts[scripts.length - 1];
          })();
      }
  };

  var addDefaultOptions = (function (window, options) {
      // use options from the current script tag data attribues
      addDataAttr(options, browser.currentScript(window));
      if (options.isFileProtocol === undefined) {
          options.isFileProtocol = /^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(window.location.protocol);
      }
      // Load styles asynchronously (default: false)
      //
      // This is set to `false` by default, so that the body
      // doesn't start loading before the stylesheets are parsed.
      // Setting this to `true` can result in flickering.
      //
      options.async = options.async || false;
      options.fileAsync = options.fileAsync || false;
      // Interval between watch polls
      options.poll = options.poll || (options.isFileProtocol ? 1000 : 1500);
      options.env = options.env || (window.location.hostname == '127.0.0.1' ||
          window.location.hostname == '0.0.0.0' ||
          window.location.hostname == 'localhost' ||
          (window.location.port &&
              window.location.port.length > 0) ||
          options.isFileProtocol ? 'development'
          : 'production');
      var dumpLineNumbers = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(window.location.hash);
      if (dumpLineNumbers) {
          options.dumpLineNumbers = dumpLineNumbers[1];
      }
      if (options.useFileCache === undefined) {
          options.useFileCache = true;
      }
      if (options.onReady === undefined) {
          options.onReady = true;
      }
      if (options.relativeUrls) {
          options.rewriteUrls = 'all';
      }
  });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  var colors = {
      'aliceblue': '#f0f8ff',
      'antiquewhite': '#faebd7',
      'aqua': '#00ffff',
      'aquamarine': '#7fffd4',
      'azure': '#f0ffff',
      'beige': '#f5f5dc',
      'bisque': '#ffe4c4',
      'black': '#000000',
      'blanchedalmond': '#ffebcd',
      'blue': '#0000ff',
      'blueviolet': '#8a2be2',
      'brown': '#a52a2a',
      'burlywood': '#deb887',
      'cadetblue': '#5f9ea0',
      'chartreuse': '#7fff00',
      'chocolate': '#d2691e',
      'coral': '#ff7f50',
      'cornflowerblue': '#6495ed',
      'cornsilk': '#fff8dc',
      'crimson': '#dc143c',
      'cyan': '#00ffff',
      'darkblue': '#00008b',
      'darkcyan': '#008b8b',
      'darkgoldenrod': '#b8860b',
      'darkgray': '#a9a9a9',
      'darkgrey': '#a9a9a9',
      'darkgreen': '#006400',
      'darkkhaki': '#bdb76b',
      'darkmagenta': '#8b008b',
      'darkolivegreen': '#556b2f',
      'darkorange': '#ff8c00',
      'darkorchid': '#9932cc',
      'darkred': '#8b0000',
      'darksalmon': '#e9967a',
      'darkseagreen': '#8fbc8f',
      'darkslateblue': '#483d8b',
      'darkslategray': '#2f4f4f',
      'darkslategrey': '#2f4f4f',
      'darkturquoise': '#00ced1',
      'darkviolet': '#9400d3',
      'deeppink': '#ff1493',
      'deepskyblue': '#00bfff',
      'dimgray': '#696969',
      'dimgrey': '#696969',
      'dodgerblue': '#1e90ff',
      'firebrick': '#b22222',
      'floralwhite': '#fffaf0',
      'forestgreen': '#228b22',
      'fuchsia': '#ff00ff',
      'gainsboro': '#dcdcdc',
      'ghostwhite': '#f8f8ff',
      'gold': '#ffd700',
      'goldenrod': '#daa520',
      'gray': '#808080',
      'grey': '#808080',
      'green': '#008000',
      'greenyellow': '#adff2f',
      'honeydew': '#f0fff0',
      'hotpink': '#ff69b4',
      'indianred': '#cd5c5c',
      'indigo': '#4b0082',
      'ivory': '#fffff0',
      'khaki': '#f0e68c',
      'lavender': '#e6e6fa',
      'lavenderblush': '#fff0f5',
      'lawngreen': '#7cfc00',
      'lemonchiffon': '#fffacd',
      'lightblue': '#add8e6',
      'lightcoral': '#f08080',
      'lightcyan': '#e0ffff',
      'lightgoldenrodyellow': '#fafad2',
      'lightgray': '#d3d3d3',
      'lightgrey': '#d3d3d3',
      'lightgreen': '#90ee90',
      'lightpink': '#ffb6c1',
      'lightsalmon': '#ffa07a',
      'lightseagreen': '#20b2aa',
      'lightskyblue': '#87cefa',
      'lightslategray': '#778899',
      'lightslategrey': '#778899',
      'lightsteelblue': '#b0c4de',
      'lightyellow': '#ffffe0',
      'lime': '#00ff00',
      'limegreen': '#32cd32',
      'linen': '#faf0e6',
      'magenta': '#ff00ff',
      'maroon': '#800000',
      'mediumaquamarine': '#66cdaa',
      'mediumblue': '#0000cd',
      'mediumorchid': '#ba55d3',
      'mediumpurple': '#9370d8',
      'mediumseagreen': '#3cb371',
      'mediumslateblue': '#7b68ee',
      'mediumspringgreen': '#00fa9a',
      'mediumturquoise': '#48d1cc',
      'mediumvioletred': '#c71585',
      'midnightblue': '#191970',
      'mintcream': '#f5fffa',
      'mistyrose': '#ffe4e1',
      'moccasin': '#ffe4b5',
      'navajowhite': '#ffdead',
      'navy': '#000080',
      'oldlace': '#fdf5e6',
      'olive': '#808000',
      'olivedrab': '#6b8e23',
      'orange': '#ffa500',
      'orangered': '#ff4500',
      'orchid': '#da70d6',
      'palegoldenrod': '#eee8aa',
      'palegreen': '#98fb98',
      'paleturquoise': '#afeeee',
      'palevioletred': '#d87093',
      'papayawhip': '#ffefd5',
      'peachpuff': '#ffdab9',
      'peru': '#cd853f',
      'pink': '#ffc0cb',
      'plum': '#dda0dd',
      'powderblue': '#b0e0e6',
      'purple': '#800080',
      'rebeccapurple': '#663399',
      'red': '#ff0000',
      'rosybrown': '#bc8f8f',
      'royalblue': '#4169e1',
      'saddlebrown': '#8b4513',
      'salmon': '#fa8072',
      'sandybrown': '#f4a460',
      'seagreen': '#2e8b57',
      'seashell': '#fff5ee',
      'sienna': '#a0522d',
      'silver': '#c0c0c0',
      'skyblue': '#87ceeb',
      'slateblue': '#6a5acd',
      'slategray': '#708090',
      'slategrey': '#708090',
      'snow': '#fffafa',
      'springgreen': '#00ff7f',
      'steelblue': '#4682b4',
      'tan': '#d2b48c',
      'teal': '#008080',
      'thistle': '#d8bfd8',
      'tomato': '#ff6347',
      'turquoise': '#40e0d0',
      'violet': '#ee82ee',
      'wheat': '#f5deb3',
      'white': '#ffffff',
      'whitesmoke': '#f5f5f5',
      'yellow': '#ffff00',
      'yellowgreen': '#9acd32'
  };

  var unitConversions = {
      length: {
          'm': 1,
          'cm': 0.01,
          'mm': 0.001,
          'in': 0.0254,
          'px': 0.0254 / 96,
          'pt': 0.0254 / 72,
          'pc': 0.0254 / 72 * 12
      },
      duration: {
          's': 1,
          'ms': 0.001
      },
      angle: {
          'rad': 1 / (2 * Math.PI),
          'deg': 1 / 360,
          'grad': 1 / 400,
          'turn': 1
      }
  };

  var data = { colors: colors, unitConversions: unitConversions };

  var Node = /** @class */ (function () {
      function Node() {
          this.parent = null;
          this.visibilityBlocks = undefined;
          this.nodeVisible = undefined;
          this.rootNode = null;
          this.parsed = null;
          var self = this;
          Object.defineProperty(this, 'currentFileInfo', {
              get: function () { return self.fileInfo(); }
          });
          Object.defineProperty(this, 'index', {
              get: function () { return self.getIndex(); }
          });
      }
      Node.prototype.setParent = function (nodes, parent) {
          function set(node) {
              if (node && node instanceof Node) {
                  node.parent = parent;
              }
          }
          if (Array.isArray(nodes)) {
              nodes.forEach(set);
          }
          else {
              set(nodes);
          }
      };
      Node.prototype.getIndex = function () {
          return this._index || (this.parent && this.parent.getIndex()) || 0;
      };
      Node.prototype.fileInfo = function () {
          return this._fileInfo || (this.parent && this.parent.fileInfo()) || {};
      };
      Node.prototype.isRulesetLike = function () {
          return false;
      };
      Node.prototype.toCSS = function (context) {
          var strs = [];
          this.genCSS(context, {
              add: function (chunk, fileInfo, index) {
                  strs.push(chunk);
              },
              isEmpty: function () {
                  return strs.length === 0;
              }
          });
          return strs.join('');
      };
      Node.prototype.genCSS = function (context, output) {
          output.add(this.value);
      };
      Node.prototype.accept = function (visitor) {
          this.value = visitor.visit(this.value);
      };
      Node.prototype.eval = function () { return this; };
      Node.prototype._operate = function (context, op, a, b) {
          switch (op) {
              case '+': return a + b;
              case '-': return a - b;
              case '*': return a * b;
              case '/': return a / b;
          }
      };
      Node.prototype.fround = function (context, value) {
          var precision = context && context.numPrecision;
          // add "epsilon" to ensure numbers like 1.000000005 (represented as 1.000000004999...) are properly rounded:
          return (precision) ? Number((value + 2e-16).toFixed(precision)) : value;
      };
      // Returns true if this node represents root of ast imported by reference
      Node.prototype.blocksVisibility = function () {
          if (this.visibilityBlocks == null) {
              this.visibilityBlocks = 0;
          }
          return this.visibilityBlocks !== 0;
      };
      Node.prototype.addVisibilityBlock = function () {
          if (this.visibilityBlocks == null) {
              this.visibilityBlocks = 0;
          }
          this.visibilityBlocks = this.visibilityBlocks + 1;
      };
      Node.prototype.removeVisibilityBlock = function () {
          if (this.visibilityBlocks == null) {
              this.visibilityBlocks = 0;
          }
          this.visibilityBlocks = this.visibilityBlocks - 1;
      };
      // Turns on node visibility - if called node will be shown in output regardless
      // of whether it comes from import by reference or not
      Node.prototype.ensureVisibility = function () {
          this.nodeVisible = true;
      };
      // Turns off node visibility - if called node will NOT be shown in output regardless
      // of whether it comes from import by reference or not
      Node.prototype.ensureInvisibility = function () {
          this.nodeVisible = false;
      };
      // return values:
      // false - the node must not be visible
      // true - the node must be visible
      // undefined or null - the node has the same visibility as its parent
      Node.prototype.isVisible = function () {
          return this.nodeVisible;
      };
      Node.prototype.visibilityInfo = function () {
          return {
              visibilityBlocks: this.visibilityBlocks,
              nodeVisible: this.nodeVisible
          };
      };
      Node.prototype.copyVisibilityInfo = function (info) {
          if (!info) {
              return;
          }
          this.visibilityBlocks = info.visibilityBlocks;
          this.nodeVisible = info.nodeVisible;
      };
      return Node;
  }());
  Node.compare = function (a, b) {
      /* returns:
       -1: a < b
       0: a = b
       1: a > b
       and *any* other value for a != b (e.g. undefined, NaN, -2 etc.) */
      if ((a.compare) &&
          // for "symmetric results" force toCSS-based comparison
          // of Quoted or Anonymous if either value is one of those
          !(b.type === 'Quoted' || b.type === 'Anonymous')) {
          return a.compare(b);
      }
      else if (b.compare) {
          return -b.compare(a);
      }
      else if (a.type !== b.type) {
          return undefined;
      }
      a = a.value;
      b = b.value;
      if (!Array.isArray(a)) {
          return a === b ? 0 : undefined;
      }
      if (a.length !== b.length) {
          return undefined;
      }
      for (var i_1 = 0; i_1 < a.length; i_1++) {
          if (Node.compare(a[i_1], b[i_1]) !== 0) {
              return undefined;
          }
      }
      return 0;
  };
  Node.numericCompare = function (a, b) { return a < b ? -1
      : a === b ? 0
          : a > b ? 1 : undefined; };

  //
  // RGB Colors - #ff0014, #eee
  //
  var Color = /** @class */ (function (_super) {
      __extends(Color, _super);
      function Color(rgb, a, originalForm) {
          var _this = _super.call(this) || this;
          var self = _this;
          //
          // The end goal here, is to parse the arguments
          // into an integer triplet, such as `128, 255, 0`
          //
          // This facilitates operations and conversions.
          //
          if (Array.isArray(rgb)) {
              _this.rgb = rgb;
          }
          else if (rgb.length >= 6) {
              _this.rgb = [];
              rgb.match(/.{2}/g).map(function (c, i) {
                  if (i < 3) {
                      self.rgb.push(parseInt(c, 16));
                  }
                  else {
                      self.alpha = (parseInt(c, 16)) / 255;
                  }
              });
          }
          else {
              _this.rgb = [];
              rgb.split('').map(function (c, i) {
                  if (i < 3) {
                      self.rgb.push(parseInt(c + c, 16));
                  }
                  else {
                      self.alpha = (parseInt(c + c, 16)) / 255;
                  }
              });
          }
          _this.alpha = _this.alpha || (typeof a === 'number' ? a : 1);
          if (typeof originalForm !== 'undefined') {
              _this.value = originalForm;
          }
          return _this;
      }
      Color.prototype.luma = function () {
          var r = this.rgb[0] / 255;
          var g = this.rgb[1] / 255;
          var b = this.rgb[2] / 255;
          r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
          g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
          b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);
          return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      Color.prototype.genCSS = function (context, output) {
          output.add(this.toCSS(context));
      };
      Color.prototype.toCSS = function (context, doNotCompress) {
          var compress = context && context.compress && !doNotCompress;
          var color;
          var alpha;
          var colorFunction;
          var args = [];
          // `value` is set if this color was originally
          // converted from a named color string so we need
          // to respect this and try to output named color too.
          alpha = this.fround(context, this.alpha);
          if (this.value) {
              if (this.value.indexOf('rgb') === 0) {
                  if (alpha < 1) {
                      colorFunction = 'rgba';
                  }
              }
              else if (this.value.indexOf('hsl') === 0) {
                  if (alpha < 1) {
                      colorFunction = 'hsla';
                  }
                  else {
                      colorFunction = 'hsl';
                  }
              }
              else {
                  return this.value;
              }
          }
          else {
              if (alpha < 1) {
                  colorFunction = 'rgba';
              }
          }
          switch (colorFunction) {
              case 'rgba':
                  args = this.rgb.map(function (c) { return clamp(Math.round(c), 255); }).concat(clamp(alpha, 1));
                  break;
              case 'hsla':
                  args.push(clamp(alpha, 1));
              case 'hsl':
                  color = this.toHSL();
                  args = [
                      this.fround(context, color.h),
                      this.fround(context, color.s * 100) + "%",
                      this.fround(context, color.l * 100) + "%"
                  ].concat(args);
          }
          if (colorFunction) {
              // Values are capped between `0` and `255`, rounded and zero-padded.
              return colorFunction + "(" + args.join("," + (compress ? '' : ' ')) + ")";
          }
          color = this.toRGB();
          if (compress) {
              var splitcolor = color.split('');
              // Convert color to short format
              if (splitcolor[1] === splitcolor[2] && splitcolor[3] === splitcolor[4] && splitcolor[5] === splitcolor[6]) {
                  color = "#" + splitcolor[1] + splitcolor[3] + splitcolor[5];
              }
          }
          return color;
      };
      //
      // Operations have to be done per-channel, if not,
      // channels will spill onto each other. Once we have
      // our result, in the form of an integer triplet,
      // we create a new Color node to hold the result.
      //
      Color.prototype.operate = function (context, op, other) {
          var rgb = new Array(3);
          var alpha = this.alpha * (1 - other.alpha) + other.alpha;
          for (var c = 0; c < 3; c++) {
              rgb[c] = this._operate(context, op, this.rgb[c], other.rgb[c]);
          }
          return new Color(rgb, alpha);
      };
      Color.prototype.toRGB = function () {
          return toHex(this.rgb);
      };
      Color.prototype.toHSL = function () {
          var r = this.rgb[0] / 255;
          var g = this.rgb[1] / 255;
          var b = this.rgb[2] / 255;
          var a = this.alpha;
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var h;
          var s;
          var l = (max + min) / 2;
          var d = max - min;
          if (max === min) {
              h = s = 0;
          }
          else {
              s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
              switch (max) {
                  case r:
                      h = (g - b) / d + (g < b ? 6 : 0);
                      break;
                  case g:
                      h = (b - r) / d + 2;
                      break;
                  case b:
                      h = (r - g) / d + 4;
                      break;
              }
              h /= 6;
          }
          return { h: h * 360, s: s, l: l, a: a };
      };
      // Adapted from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
      Color.prototype.toHSV = function () {
          var r = this.rgb[0] / 255;
          var g = this.rgb[1] / 255;
          var b = this.rgb[2] / 255;
          var a = this.alpha;
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var h;
          var s;
          var v = max;
          var d = max - min;
          if (max === 0) {
              s = 0;
          }
          else {
              s = d / max;
          }
          if (max === min) {
              h = 0;
          }
          else {
              switch (max) {
                  case r:
                      h = (g - b) / d + (g < b ? 6 : 0);
                      break;
                  case g:
                      h = (b - r) / d + 2;
                      break;
                  case b:
                      h = (r - g) / d + 4;
                      break;
              }
              h /= 6;
          }
          return { h: h * 360, s: s, v: v, a: a };
      };
      Color.prototype.toARGB = function () {
          return toHex([this.alpha * 255].concat(this.rgb));
      };
      Color.prototype.compare = function (x) {
          return (x.rgb &&
              x.rgb[0] === this.rgb[0] &&
              x.rgb[1] === this.rgb[1] &&
              x.rgb[2] === this.rgb[2] &&
              x.alpha === this.alpha) ? 0 : undefined;
      };
      return Color;
  }(Node));
  Color.prototype.type = 'Color';
  function clamp(v, max) {
      return Math.min(Math.max(v, 0), max);
  }
  function toHex(v) {
      return "#" + v.map(function (c) {
          c = clamp(Math.round(c), 255);
          return (c < 16 ? '0' : '') + c.toString(16);
      }).join('');
  }
  Color.fromKeyword = function (keyword) {
      var c;
      var key = keyword.toLowerCase();
      if (colors.hasOwnProperty(key)) {
          c = new Color(colors[key].slice(1));
      }
      else if (key === 'transparent') {
          c = new Color([0, 0, 0], 0);
      }
      if (c) {
          c.value = keyword;
          return c;
      }
  };

  var Paren = /** @class */ (function (_super) {
      __extends(Paren, _super);
      function Paren(node) {
          var _this = _super.call(this) || this;
          _this.value = node;
          return _this;
      }
      Paren.prototype.genCSS = function (context, output) {
          output.add('(');
          this.value.genCSS(context, output);
          output.add(')');
      };
      Paren.prototype.eval = function (context) {
          return new Paren(this.value.eval(context));
      };
      return Paren;
  }(Node));
  Paren.prototype.type = 'Paren';

  var _noSpaceCombinators = {
      '': true,
      ' ': true,
      '|': true
  };
  var Combinator = /** @class */ (function (_super) {
      __extends(Combinator, _super);
      function Combinator(value) {
          var _this = _super.call(this) || this;
          if (value === ' ') {
              _this.value = ' ';
              _this.emptyOrWhitespace = true;
          }
          else {
              _this.value = value ? value.trim() : '';
              _this.emptyOrWhitespace = _this.value === '';
          }
          return _this;
      }
      Combinator.prototype.genCSS = function (context, output) {
          var spaceOrEmpty = (context.compress || _noSpaceCombinators[this.value]) ? '' : ' ';
          output.add(spaceOrEmpty + this.value + spaceOrEmpty);
      };
      return Combinator;
  }(Node));
  Combinator.prototype.type = 'Combinator';

  var Element = /** @class */ (function (_super) {
      __extends(Element, _super);
      function Element(combinator, value, isVariable, index, currentFileInfo, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this.combinator = combinator instanceof Combinator ?
              combinator : new Combinator(combinator);
          if (typeof value === 'string') {
              _this.value = value.trim();
          }
          else if (value) {
              _this.value = value;
          }
          else {
              _this.value = '';
          }
          _this.isVariable = isVariable;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.copyVisibilityInfo(visibilityInfo);
          _this.setParent(_this.combinator, _this);
          return _this;
      }
      Element.prototype.accept = function (visitor) {
          var value = this.value;
          this.combinator = visitor.visit(this.combinator);
          if (typeof value === 'object') {
              this.value = visitor.visit(value);
          }
      };
      Element.prototype.eval = function (context) {
          return new Element(this.combinator, this.value.eval ? this.value.eval(context) : this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo());
      };
      Element.prototype.clone = function () {
          return new Element(this.combinator, this.value, this.isVariable, this.getIndex(), this.fileInfo(), this.visibilityInfo());
      };
      Element.prototype.genCSS = function (context, output) {
          output.add(this.toCSS(context), this.fileInfo(), this.getIndex());
      };
      Element.prototype.toCSS = function (context) {
          if (context === void 0) { context = {}; }
          var value = this.value;
          var firstSelector = context.firstSelector;
          if (value instanceof Paren) {
              // selector in parens should not be affected by outer selector
              // flags (breaks only interpolated selectors - see #1973)
              context.firstSelector = true;
          }
          value = value.toCSS ? value.toCSS(context) : value;
          context.firstSelector = firstSelector;
          if (value === '' && this.combinator.value.charAt(0) === '&') {
              return '';
          }
          else {
              return this.combinator.toCSS(context) + value;
          }
      };
      return Element;
  }(Node));
  Element.prototype.type = 'Element';

  var Math$1 = {
      ALWAYS: 0,
      PARENS_DIVISION: 1,
      PARENS: 2,
      STRICT_LEGACY: 3
  };
  var RewriteUrls = {
      OFF: 0,
      LOCAL: 1,
      ALL: 2
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var clone_1 = createCommonjsModule(function (module) {
      var clone = (function () {
          function _instanceof(obj, type) {
              return type != null && obj instanceof type;
          }
          var nativeMap;
          try {
              nativeMap = Map;
          }
          catch (_) {
              // maybe a reference error because no `Map`. Give it a dummy value that no
              // value will ever be an instanceof.
              nativeMap = function () { };
          }
          var nativeSet;
          try {
              nativeSet = Set;
          }
          catch (_) {
              nativeSet = function () { };
          }
          var nativePromise;
          try {
              nativePromise = Promise;
          }
          catch (_) {
              nativePromise = function () { };
          }
          /**
           * Clones (copies) an Object using deep copying.
           *
           * This function supports circular references by default, but if you are certain
           * there are no circular references in your object, you can save some CPU time
           * by calling clone(obj, false).
           *
           * Caution: if `circular` is false and `parent` contains circular references,
           * your program may enter an infinite loop and crash.
           *
           * @param `parent` - the object to be cloned
           * @param `circular` - set to true if the object to be cloned may contain
           *    circular references. (optional - true by default)
           * @param `depth` - set to a number if the object is only to be cloned to
           *    a particular depth. (optional - defaults to Infinity)
           * @param `prototype` - sets the prototype to be used when cloning an object.
           *    (optional - defaults to parent prototype).
           * @param `includeNonEnumerable` - set to true if the non-enumerable properties
           *    should be cloned as well. Non-enumerable properties on the prototype
           *    chain will be ignored. (optional - false by default)
          */
          function clone(parent, circular, depth, prototype, includeNonEnumerable) {
              if (typeof circular === 'object') {
                  depth = circular.depth;
                  prototype = circular.prototype;
                  includeNonEnumerable = circular.includeNonEnumerable;
                  circular = circular.circular;
              }
              // maintain two arrays for circular references, where corresponding parents
              // and children have the same index
              var allParents = [];
              var allChildren = [];
              var useBuffer = typeof Buffer != 'undefined';
              if (typeof circular == 'undefined')
                  circular = true;
              if (typeof depth == 'undefined')
                  depth = Infinity;
              // recurse this function so we don't reset allParents and allChildren
              function _clone(parent, depth) {
                  // cloning null always returns null
                  if (parent === null)
                      return null;
                  if (depth === 0)
                      return parent;
                  var child;
                  var proto;
                  if (typeof parent != 'object') {
                      return parent;
                  }
                  if (_instanceof(parent, nativeMap)) {
                      child = new nativeMap();
                  }
                  else if (_instanceof(parent, nativeSet)) {
                      child = new nativeSet();
                  }
                  else if (_instanceof(parent, nativePromise)) {
                      child = new nativePromise(function (resolve, reject) {
                          parent.then(function (value) {
                              resolve(_clone(value, depth - 1));
                          }, function (err) {
                              reject(_clone(err, depth - 1));
                          });
                      });
                  }
                  else if (clone.__isArray(parent)) {
                      child = [];
                  }
                  else if (clone.__isRegExp(parent)) {
                      child = new RegExp(parent.source, __getRegExpFlags(parent));
                      if (parent.lastIndex)
                          child.lastIndex = parent.lastIndex;
                  }
                  else if (clone.__isDate(parent)) {
                      child = new Date(parent.getTime());
                  }
                  else if (useBuffer && Buffer.isBuffer(parent)) {
                      if (Buffer.allocUnsafe) {
                          // Node.js >= 4.5.0
                          child = Buffer.allocUnsafe(parent.length);
                      }
                      else {
                          // Older Node.js versions
                          child = new Buffer(parent.length);
                      }
                      parent.copy(child);
                      return child;
                  }
                  else if (_instanceof(parent, Error)) {
                      child = Object.create(parent);
                  }
                  else {
                      if (typeof prototype == 'undefined') {
                          proto = Object.getPrototypeOf(parent);
                          child = Object.create(proto);
                      }
                      else {
                          child = Object.create(prototype);
                          proto = prototype;
                      }
                  }
                  if (circular) {
                      var index = allParents.indexOf(parent);
                      if (index != -1) {
                          return allChildren[index];
                      }
                      allParents.push(parent);
                      allChildren.push(child);
                  }
                  if (_instanceof(parent, nativeMap)) {
                      parent.forEach(function (value, key) {
                          var keyChild = _clone(key, depth - 1);
                          var valueChild = _clone(value, depth - 1);
                          child.set(keyChild, valueChild);
                      });
                  }
                  if (_instanceof(parent, nativeSet)) {
                      parent.forEach(function (value) {
                          var entryChild = _clone(value, depth - 1);
                          child.add(entryChild);
                      });
                  }
                  for (var i in parent) {
                      var attrs;
                      if (proto) {
                          attrs = Object.getOwnPropertyDescriptor(proto, i);
                      }
                      if (attrs && attrs.set == null) {
                          continue;
                      }
                      child[i] = _clone(parent[i], depth - 1);
                  }
                  if (Object.getOwnPropertySymbols) {
                      var symbols = Object.getOwnPropertySymbols(parent);
                      for (var i = 0; i < symbols.length; i++) {
                          // Don't need to worry about cloning a symbol because it is a primitive,
                          // like a number or string.
                          var symbol = symbols[i];
                          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
                          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
                              continue;
                          }
                          child[symbol] = _clone(parent[symbol], depth - 1);
                          if (!descriptor.enumerable) {
                              Object.defineProperty(child, symbol, {
                                  enumerable: false
                              });
                          }
                      }
                  }
                  if (includeNonEnumerable) {
                      var allPropertyNames = Object.getOwnPropertyNames(parent);
                      for (var i = 0; i < allPropertyNames.length; i++) {
                          var propertyName = allPropertyNames[i];
                          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
                          if (descriptor && descriptor.enumerable) {
                              continue;
                          }
                          child[propertyName] = _clone(parent[propertyName], depth - 1);
                          Object.defineProperty(child, propertyName, {
                              enumerable: false
                          });
                      }
                  }
                  return child;
              }
              return _clone(parent, depth);
          }
          /**
           * Simple flat clone using prototype, accepts only objects, usefull for property
           * override on FLAT configuration object (no nested props).
           *
           * USE WITH CAUTION! This may not behave as you wish if you do not know how this
           * works.
           */
          clone.clonePrototype = function clonePrototype(parent) {
              if (parent === null)
                  return null;
              var c = function () { };
              c.prototype = parent;
              return new c();
          };
          // private utility functions
          function __objToStr(o) {
              return Object.prototype.toString.call(o);
          }
          clone.__objToStr = __objToStr;
          function __isDate(o) {
              return typeof o === 'object' && __objToStr(o) === '[object Date]';
          }
          clone.__isDate = __isDate;
          function __isArray(o) {
              return typeof o === 'object' && __objToStr(o) === '[object Array]';
          }
          clone.__isArray = __isArray;
          function __isRegExp(o) {
              return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
          }
          clone.__isRegExp = __isRegExp;
          function __getRegExpFlags(re) {
              var flags = '';
              if (re.global)
                  flags += 'g';
              if (re.ignoreCase)
                  flags += 'i';
              if (re.multiline)
                  flags += 'm';
              return flags;
          }
          clone.__getRegExpFlags = __getRegExpFlags;
          return clone;
      })();
      if ( module.exports) {
          module.exports = clone;
      }
  });

  /* jshint proto: true */
  function getLocation(index, inputStream) {
      var n = index + 1;
      var line = null;
      var column = -1;
      while (--n >= 0 && inputStream.charAt(n) !== '\n') {
          column++;
      }
      if (typeof index === 'number') {
          line = (inputStream.slice(0, index).match(/\n/g) || '').length;
      }
      return {
          line: line,
          column: column
      };
  }
  function copyArray(arr) {
      var i;
      var length = arr.length;
      var copy = new Array(length);
      for (i = 0; i < length; i++) {
          copy[i] = arr[i];
      }
      return copy;
  }
  function clone(obj) {
      var cloned = {};
      for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
              cloned[prop] = obj[prop];
          }
      }
      return cloned;
  }
  function defaults(obj1, obj2) {
      var newObj = obj2 || {};
      if (!obj2._defaults) {
          newObj = {};
          var defaults_1 = clone_1(obj1);
          newObj._defaults = defaults_1;
          var cloned = obj2 ? clone_1(obj2) : {};
          Object.assign(newObj, defaults_1, cloned);
      }
      return newObj;
  }
  function copyOptions(obj1, obj2) {
      if (obj2 && obj2._defaults) {
          return obj2;
      }
      var opts = defaults(obj1, obj2);
      if (opts.strictMath) {
          opts.math = Math$1.STRICT_LEGACY;
      }
      // Back compat with changed relativeUrls option
      if (opts.relativeUrls) {
          opts.rewriteUrls = RewriteUrls.ALL;
      }
      if (typeof opts.math === 'string') {
          switch (opts.math.toLowerCase()) {
              case 'always':
                  opts.math = Math$1.ALWAYS;
                  break;
              case 'parens-division':
                  opts.math = Math$1.PARENS_DIVISION;
                  break;
              case 'strict':
              case 'parens':
                  opts.math = Math$1.PARENS;
                  break;
              case 'strict-legacy':
                  opts.math = Math$1.STRICT_LEGACY;
          }
      }
      if (typeof opts.rewriteUrls === 'string') {
          switch (opts.rewriteUrls.toLowerCase()) {
              case 'off':
                  opts.rewriteUrls = RewriteUrls.OFF;
                  break;
              case 'local':
                  opts.rewriteUrls = RewriteUrls.LOCAL;
                  break;
              case 'all':
                  opts.rewriteUrls = RewriteUrls.ALL;
                  break;
          }
      }
      return opts;
  }
  function merge(obj1, obj2) {
      for (var prop in obj2) {
          if (obj2.hasOwnProperty(prop)) {
              obj1[prop] = obj2[prop];
          }
      }
      return obj1;
  }
  function flattenArray(arr, result) {
      if (result === void 0) { result = []; }
      for (var i_1 = 0, length_1 = arr.length; i_1 < length_1; i_1++) {
          var value = arr[i_1];
          if (Array.isArray(value)) {
              flattenArray(value, result);
          }
          else {
              if (value !== undefined) {
                  result.push(value);
              }
          }
      }
      return result;
  }

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getLocation: getLocation,
    copyArray: copyArray,
    clone: clone,
    defaults: defaults,
    copyOptions: copyOptions,
    merge: merge,
    flattenArray: flattenArray
  });

  var anonymousFunc = /(<anonymous>|Function):(\d+):(\d+)/;
  /**
   * This is a centralized class of any error that could be thrown internally (mostly by the parser).
   * Besides standard .message it keeps some additional data like a path to the file where the error
   * occurred along with line and column numbers.
   *
   * @class
   * @extends Error
   * @type {module.LessError}
   *
   * @prop {string} type
   * @prop {string} filename
   * @prop {number} index
   * @prop {number} line
   * @prop {number} column
   * @prop {number} callLine
   * @prop {number} callExtract
   * @prop {string[]} extract
   *
   * @param {Object} e              - An error object to wrap around or just a descriptive object
   * @param {Object} fileContentMap - An object with file contents in 'contents' property (like importManager) @todo - move to fileManager?
   * @param {string} [currentFilename]
   */
  var LessError = function LessError(e, fileContentMap, currentFilename) {
      Error.call(this);
      var filename = e.filename || currentFilename;
      this.message = e.message;
      this.stack = e.stack;
      if (fileContentMap && filename) {
          var input = fileContentMap.contents[filename];
          var loc = getLocation(e.index, input);
          var line = loc.line;
          var col = loc.column;
          var callLine = e.call && getLocation(e.call, input).line;
          var lines = input ? input.split('\n') : '';
          this.type = e.type || 'Syntax';
          this.filename = filename;
          this.index = e.index;
          this.line = typeof line === 'number' ? line + 1 : null;
          this.column = col;
          if (!this.line && this.stack) {
              var found = this.stack.match(anonymousFunc);
              /**
               * We have to figure out how this environment stringifies anonymous functions
               * so we can correctly map plugin errors.
               *
               * Note, in Node 8, the output of anonymous funcs varied based on parameters
               * being present or not, so we inject dummy params.
               */
              var func = new Function('a', 'throw new Error()');
              var lineAdjust = 0;
              try {
                  func();
              }
              catch (e) {
                  var match = e.stack.match(anonymousFunc);
                  var line_1 = parseInt(match[2]);
                  lineAdjust = 1 - line_1;
              }
              if (found) {
                  if (found[2]) {
                      this.line = parseInt(found[2]) + lineAdjust;
                  }
                  if (found[3]) {
                      this.column = parseInt(found[3]);
                  }
              }
          }
          this.callLine = callLine + 1;
          this.callExtract = lines[callLine];
          this.extract = [
              lines[this.line - 2],
              lines[this.line - 1],
              lines[this.line]
          ];
      }
  };
  if (typeof Object.create === 'undefined') {
      var F = function () { };
      F.prototype = Error.prototype;
      LessError.prototype = new F();
  }
  else {
      LessError.prototype = Object.create(Error.prototype);
  }
  LessError.prototype.constructor = LessError;
  /**
   * An overridden version of the default Object.prototype.toString
   * which uses additional information to create a helpful message.
   *
   * @param {Object} options
   * @returns {string}
   */
  LessError.prototype.toString = function (options) {
      if (options === void 0) { options = {}; }
      var message = '';
      var extract = this.extract || [];
      var error = [];
      var stylize = function (str) { return str; };
      if (options.stylize) {
          var type = typeof options.stylize;
          if (type !== 'function') {
              throw Error("options.stylize should be a function, got a " + type + "!");
          }
          stylize = options.stylize;
      }
      if (this.line !== null) {
          if (typeof extract[0] === 'string') {
              error.push(stylize(this.line - 1 + " " + extract[0], 'grey'));
          }
          if (typeof extract[1] === 'string') {
              var errorTxt = this.line + " ";
              if (extract[1]) {
                  errorTxt += extract[1].slice(0, this.column) +
                      stylize(stylize(stylize(extract[1].substr(this.column, 1), 'bold') +
                          extract[1].slice(this.column + 1), 'red'), 'inverse');
              }
              error.push(errorTxt);
          }
          if (typeof extract[2] === 'string') {
              error.push(stylize(this.line + 1 + " " + extract[2], 'grey'));
          }
          error = error.join('\n') + stylize('', 'reset') + "\n";
      }
      message += stylize(this.type + "Error: " + this.message, 'red');
      if (this.filename) {
          message += stylize(' in ', 'red') + this.filename;
      }
      if (this.line) {
          message += stylize(" on line " + this.line + ", column " + (this.column + 1) + ":", 'grey');
      }
      message += "\n" + error;
      if (this.callLine) {
          message += stylize('from ', 'red') + (this.filename || '') + "/n";
          message += stylize(this.callLine, 'grey') + " " + this.callExtract + "/n";
      }
      return message;
  };

  var Selector = /** @class */ (function (_super) {
      __extends(Selector, _super);
      function Selector(elements, extendList, condition, index, currentFileInfo, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this.extendList = extendList;
          _this.condition = condition;
          _this.evaldCondition = !condition;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.elements = _this.getElements(elements);
          _this.mixinElements_ = undefined;
          _this.copyVisibilityInfo(visibilityInfo);
          _this.setParent(_this.elements, _this);
          return _this;
      }
      Selector.prototype.accept = function (visitor) {
          if (this.elements) {
              this.elements = visitor.visitArray(this.elements);
          }
          if (this.extendList) {
              this.extendList = visitor.visitArray(this.extendList);
          }
          if (this.condition) {
              this.condition = visitor.visit(this.condition);
          }
      };
      Selector.prototype.createDerived = function (elements, extendList, evaldCondition) {
          elements = this.getElements(elements);
          var newSelector = new Selector(elements, extendList || this.extendList, null, this.getIndex(), this.fileInfo(), this.visibilityInfo());
          newSelector.evaldCondition = (evaldCondition != null) ? evaldCondition : this.evaldCondition;
          newSelector.mediaEmpty = this.mediaEmpty;
          return newSelector;
      };
      Selector.prototype.getElements = function (els) {
          if (!els) {
              return [new Element('', '&', false, this._index, this._fileInfo)];
          }
          if (typeof els === 'string') {
              this.parse.parseNode(els, ['selector'], this._index, this._fileInfo, function (err, result) {
                  if (err) {
                      throw new LessError({
                          index: err.index,
                          message: err.message
                      }, this.parse.imports, this._fileInfo.filename);
                  }
                  els = result[0].elements;
              });
          }
          return els;
      };
      Selector.prototype.createEmptySelectors = function () {
          var el = new Element('', '&', false, this._index, this._fileInfo);
          var sels = [new Selector([el], null, null, this._index, this._fileInfo)];
          sels[0].mediaEmpty = true;
          return sels;
      };
      Selector.prototype.match = function (other) {
          var elements = this.elements;
          var len = elements.length;
          var olen;
          var i;
          other = other.mixinElements();
          olen = other.length;
          if (olen === 0 || len < olen) {
              return 0;
          }
          else {
              for (i = 0; i < olen; i++) {
                  if (elements[i].value !== other[i]) {
                      return 0;
                  }
              }
          }
          return olen; // return number of matched elements
      };
      Selector.prototype.mixinElements = function () {
          if (this.mixinElements_) {
              return this.mixinElements_;
          }
          var elements = this.elements.map(function (v) { return v.combinator.value + (v.value.value || v.value); }).join('').match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);
          if (elements) {
              if (elements[0] === '&') {
                  elements.shift();
              }
          }
          else {
              elements = [];
          }
          return (this.mixinElements_ = elements);
      };
      Selector.prototype.isJustParentSelector = function () {
          return !this.mediaEmpty &&
              this.elements.length === 1 &&
              this.elements[0].value === '&' &&
              (this.elements[0].combinator.value === ' ' || this.elements[0].combinator.value === '');
      };
      Selector.prototype.eval = function (context) {
          var evaldCondition = this.condition && this.condition.eval(context);
          var elements = this.elements;
          var extendList = this.extendList;
          elements = elements && elements.map(function (e) { return e.eval(context); });
          extendList = extendList && extendList.map(function (extend) { return extend.eval(context); });
          return this.createDerived(elements, extendList, evaldCondition);
      };
      Selector.prototype.genCSS = function (context, output) {
          var i;
          var element;
          if ((!context || !context.firstSelector) && this.elements[0].combinator.value === '') {
              output.add(' ', this.fileInfo(), this.getIndex());
          }
          for (i = 0; i < this.elements.length; i++) {
              element = this.elements[i];
              element.genCSS(context, output);
          }
      };
      Selector.prototype.getIsOutput = function () {
          return this.evaldCondition;
      };
      return Selector;
  }(Node));
  Selector.prototype.type = 'Selector';

  var Value = /** @class */ (function (_super) {
      __extends(Value, _super);
      function Value(value) {
          var _this = _super.call(this) || this;
          if (!value) {
              throw new Error('Value requires an array argument');
          }
          if (!Array.isArray(value)) {
              _this.value = [value];
          }
          else {
              _this.value = value;
          }
          return _this;
      }
      Value.prototype.accept = function (visitor) {
          if (this.value) {
              this.value = visitor.visitArray(this.value);
          }
      };
      Value.prototype.eval = function (context) {
          if (this.value.length === 1) {
              return this.value[0].eval(context);
          }
          else {
              return new Value(this.value.map(function (v) { return v.eval(context); }));
          }
      };
      Value.prototype.genCSS = function (context, output) {
          var i;
          for (i = 0; i < this.value.length; i++) {
              this.value[i].genCSS(context, output);
              if (i + 1 < this.value.length) {
                  output.add((context && context.compress) ? ',' : ', ');
              }
          }
      };
      return Value;
  }(Node));
  Value.prototype.type = 'Value';

  var Keyword = /** @class */ (function (_super) {
      __extends(Keyword, _super);
      function Keyword(value) {
          var _this = _super.call(this) || this;
          _this.value = value;
          return _this;
      }
      Keyword.prototype.genCSS = function (context, output) {
          if (this.value === '%') {
              throw { type: 'Syntax', message: 'Invalid % without number' };
          }
          output.add(this.value);
      };
      return Keyword;
  }(Node));
  Keyword.prototype.type = 'Keyword';
  Keyword.True = new Keyword('true');
  Keyword.False = new Keyword('false');

  var Anonymous = /** @class */ (function (_super) {
      __extends(Anonymous, _super);
      function Anonymous(value, index, currentFileInfo, mapLines, rulesetLike, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this.value = value;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.mapLines = mapLines;
          _this.rulesetLike = (typeof rulesetLike === 'undefined') ? false : rulesetLike;
          _this.allowRoot = true;
          _this.copyVisibilityInfo(visibilityInfo);
          return _this;
      }
      Anonymous.prototype.eval = function () {
          return new Anonymous(this.value, this._index, this._fileInfo, this.mapLines, this.rulesetLike, this.visibilityInfo());
      };
      Anonymous.prototype.compare = function (other) {
          return other.toCSS && this.toCSS() === other.toCSS() ? 0 : undefined;
      };
      Anonymous.prototype.isRulesetLike = function () {
          return this.rulesetLike;
      };
      Anonymous.prototype.genCSS = function (context, output) {
          this.nodeVisible = Boolean(this.value);
          if (this.nodeVisible) {
              output.add(this.value, this._fileInfo, this._index, this.mapLines);
          }
      };
      return Anonymous;
  }(Node));
  Anonymous.prototype.type = 'Anonymous';

  var MATH = Math$1;
  var Declaration = /** @class */ (function (_super) {
      __extends(Declaration, _super);
      function Declaration(name, value, important, merge, index, currentFileInfo, inline, variable) {
          var _this = _super.call(this) || this;
          _this.name = name;
          _this.value = (value instanceof Node) ? value : new Value([value ? new Anonymous(value) : null]);
          _this.important = important ? " " + important.trim() : '';
          _this.merge = merge;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.inline = inline || false;
          _this.variable = (variable !== undefined) ? variable
              : (name.charAt && (name.charAt(0) === '@'));
          _this.allowRoot = true;
          _this.setParent(_this.value, _this);
          return _this;
      }
      Declaration.prototype.genCSS = function (context, output) {
          output.add(this.name + (context.compress ? ':' : ': '), this.fileInfo(), this.getIndex());
          try {
              this.value.genCSS(context, output);
          }
          catch (e) {
              e.index = this._index;
              e.filename = this._fileInfo.filename;
              throw e;
          }
          output.add(this.important + ((this.inline || (context.lastRule && context.compress)) ? '' : ';'), this._fileInfo, this._index);
      };
      Declaration.prototype.eval = function (context) {
          var mathBypass = false;
          var prevMath;
          var name = this.name;
          var evaldValue;
          var variable = this.variable;
          if (typeof name !== 'string') {
              // expand 'primitive' name directly to get
              // things faster (~10% for benchmark.less):
              name = (name.length === 1) && (name[0] instanceof Keyword) ?
                  name[0].value : evalName(context, name);
              variable = false; // never treat expanded interpolation as new variable name
          }
          // @todo remove when parens-division is default
          if (name === 'font' && context.math === MATH.ALWAYS) {
              mathBypass = true;
              prevMath = context.math;
              context.math = MATH.PARENS_DIVISION;
          }
          try {
              context.importantScope.push({});
              evaldValue = this.value.eval(context);
              if (!this.variable && evaldValue.type === 'DetachedRuleset') {
                  throw { message: 'Rulesets cannot be evaluated on a property.',
                      index: this.getIndex(), filename: this.fileInfo().filename };
              }
              var important = this.important;
              var importantResult = context.importantScope.pop();
              if (!important && importantResult.important) {
                  important = importantResult.important;
              }
              return new Declaration(name, evaldValue, important, this.merge, this.getIndex(), this.fileInfo(), this.inline, variable);
          }
          catch (e) {
              if (typeof e.index !== 'number') {
                  e.index = this.getIndex();
                  e.filename = this.fileInfo().filename;
              }
              throw e;
          }
          finally {
              if (mathBypass) {
                  context.math = prevMath;
              }
          }
      };
      Declaration.prototype.makeImportant = function () {
          return new Declaration(this.name, this.value, '!important', this.merge, this.getIndex(), this.fileInfo(), this.inline);
      };
      return Declaration;
  }(Node));
  function evalName(context, name) {
      var value = '';
      var i;
      var n = name.length;
      var output = { add: function (s) { value += s; } };
      for (i = 0; i < n; i++) {
          name[i].eval(context).genCSS(context, output);
      }
      return value;
  }
  Declaration.prototype.type = 'Declaration';

  var debugInfo = function (context, ctx, lineSeparator) {
      var result = '';
      if (context.dumpLineNumbers && !context.compress) {
          switch (context.dumpLineNumbers) {
              case 'comments':
                  result = debugInfo.asComment(ctx);
                  break;
              case 'mediaquery':
                  result = debugInfo.asMediaQuery(ctx);
                  break;
              case 'all':
                  result = debugInfo.asComment(ctx) + (lineSeparator || '') + debugInfo.asMediaQuery(ctx);
                  break;
          }
      }
      return result;
  };
  debugInfo.asComment = function (ctx) { return ctx.debugInfo ? "/* line " + ctx.debugInfo.lineNumber + ", " + ctx.debugInfo.fileName + " */\n" : ''; };
  debugInfo.asMediaQuery = function (ctx) {
      if (!ctx.debugInfo) {
          return '';
      }
      var filenameWithProtocol = ctx.debugInfo.fileName;
      if (!/^[a-z]+:\/\//i.test(filenameWithProtocol)) {
          filenameWithProtocol = "file://" + filenameWithProtocol;
      }
      return "@media -sass-debug-info{filename{font-family:" + filenameWithProtocol.replace(/([.:\/\\])/g, function (a) {
          if (a == '\\') {
              a = '\/';
          }
          return "\\" + a;
      }) + "}line{font-family:\\00003" + ctx.debugInfo.lineNumber + "}}\n";
  };

  var Comment = /** @class */ (function (_super) {
      __extends(Comment, _super);
      function Comment(value, isLineComment, index, currentFileInfo) {
          var _this = _super.call(this) || this;
          _this.value = value;
          _this.isLineComment = isLineComment;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.allowRoot = true;
          return _this;
      }
      Comment.prototype.genCSS = function (context, output) {
          if (this.debugInfo) {
              output.add(debugInfo(context, this), this.fileInfo(), this.getIndex());
          }
          output.add(this.value);
      };
      Comment.prototype.isSilent = function (context) {
          var isCompressed = context.compress && this.value[2] !== '!';
          return this.isLineComment || isCompressed;
      };
      return Comment;
  }(Node));
  Comment.prototype.type = 'Comment';

  var contexts = {};
  var copyFromOriginal = function copyFromOriginal(original, destination, propertiesToCopy) {
      if (!original) {
          return;
      }
      for (var i_1 = 0; i_1 < propertiesToCopy.length; i_1++) {
          if (original.hasOwnProperty(propertiesToCopy[i_1])) {
              destination[propertiesToCopy[i_1]] = original[propertiesToCopy[i_1]];
          }
      }
  };
  /*
   parse is used whilst parsing
   */
  var parseCopyProperties = [
      // options
      'paths',
      'rewriteUrls',
      'rootpath',
      'strictImports',
      'insecure',
      'dumpLineNumbers',
      'compress',
      'syncImport',
      'chunkInput',
      'mime',
      'useFileCache',
      // context
      'processImports',
      // Used by the import manager to stop multiple import visitors being created.
      'pluginManager' // Used as the plugin manager for the session
  ];
  contexts.Parse = function (options) {
      copyFromOriginal(options, this, parseCopyProperties);
      if (typeof this.paths === 'string') {
          this.paths = [this.paths];
      }
  };
  var evalCopyProperties = [
      'paths',
      'compress',
      'math',
      'strictUnits',
      'sourceMap',
      'importMultiple',
      'urlArgs',
      'javascriptEnabled',
      'pluginManager',
      'importantScope',
      'rewriteUrls' // option - whether to adjust URL's to be relative
  ];
  function isPathRelative(path) {
      return !/^(?:[a-z-]+:|\/|#)/i.test(path);
  }
  function isPathLocalRelative(path) {
      return path.charAt(0) === '.';
  }
  contexts.Eval = /** @class */ (function () {
      function Eval(options, frames) {
          copyFromOriginal(options, this, evalCopyProperties);
          if (typeof this.paths === 'string') {
              this.paths = [this.paths];
          }
          this.frames = frames || [];
          this.importantScope = this.importantScope || [];
          this.inCalc = false;
          this.mathOn = true;
      }
      Eval.prototype.enterCalc = function () {
          if (!this.calcStack) {
              this.calcStack = [];
          }
          this.calcStack.push(true);
          this.inCalc = true;
      };
      Eval.prototype.exitCalc = function () {
          this.calcStack.pop();
          if (!this.calcStack.length) {
              this.inCalc = false;
          }
      };
      Eval.prototype.inParenthesis = function () {
          if (!this.parensStack) {
              this.parensStack = [];
          }
          this.parensStack.push(true);
      };
      Eval.prototype.outOfParenthesis = function () {
          this.parensStack.pop();
      };
      Eval.prototype.isMathOn = function (op) {
          if (!this.mathOn) {
              return false;
          }
          if (op === '/' && this.math !== Math$1.ALWAYS && (!this.parensStack || !this.parensStack.length)) {
              return false;
          }
          if (this.math > Math$1.PARENS_DIVISION) {
              return this.parensStack && this.parensStack.length;
          }
          return true;
      };
      Eval.prototype.pathRequiresRewrite = function (path) {
          var isRelative = this.rewriteUrls === RewriteUrls.LOCAL ? isPathLocalRelative : isPathRelative;
          return isRelative(path);
      };
      Eval.prototype.rewritePath = function (path, rootpath) {
          var newPath;
          rootpath = rootpath || '';
          newPath = this.normalizePath(rootpath + path);
          // If a path was explicit relative and the rootpath was not an absolute path
          // we must ensure that the new path is also explicit relative.
          if (isPathLocalRelative(path) &&
              isPathRelative(rootpath) &&
              isPathLocalRelative(newPath) === false) {
              newPath = "./" + newPath;
          }
          return newPath;
      };
      Eval.prototype.normalizePath = function (path) {
          var segments = path.split('/').reverse();
          var segment;
          path = [];
          while (segments.length !== 0) {
              segment = segments.pop();
              switch (segment) {
                  case '.':
                      break;
                  case '..':
                      if ((path.length === 0) || (path[path.length - 1] === '..')) {
                          path.push(segment);
                      }
                      else {
                          path.pop();
                      }
                      break;
                  default:
                      path.push(segment);
                      break;
              }
          }
          return path.join('/');
      };
      return Eval;
  }());

  function makeRegistry(base) {
      return {
          _data: {},
          add: function (name, func) {
              // precautionary case conversion, as later querying of
              // the registry by function-caller uses lower case as well.
              name = name.toLowerCase();
              if (this._data.hasOwnProperty(name)) ;
              this._data[name] = func;
          },
          addMultiple: function (functions) {
              var _this = this;
              Object.keys(functions).forEach(function (name) {
                  _this.add(name, functions[name]);
              });
          },
          get: function (name) {
              return this._data[name] || (base && base.get(name));
          },
          getLocalFunctions: function () {
              return this._data;
          },
          inherit: function () {
              return makeRegistry(this);
          },
          create: function (base) {
              return makeRegistry(base);
          }
      };
  }
  var functionRegistry = makeRegistry(null);

  var defaultFunc = {
      eval: function () {
          var v = this.value_;
          var e = this.error_;
          if (e) {
              throw e;
          }
          if (v != null) {
              return v ? Keyword.True : Keyword.False;
          }
      },
      value: function (v) {
          this.value_ = v;
      },
      error: function (e) {
          this.error_ = e;
      },
      reset: function () {
          this.value_ = this.error_ = null;
      }
  };

  var Ruleset = /** @class */ (function (_super) {
      __extends(Ruleset, _super);
      function Ruleset(selectors, rules, strictImports, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this.selectors = selectors;
          _this.rules = rules;
          _this._lookups = {};
          _this._variables = null;
          _this._properties = null;
          _this.strictImports = strictImports;
          _this.copyVisibilityInfo(visibilityInfo);
          _this.allowRoot = true;
          _this.setParent(_this.selectors, _this);
          _this.setParent(_this.rules, _this);
          return _this;
      }
      Ruleset.prototype.isRulesetLike = function () {
          return true;
      };
      Ruleset.prototype.accept = function (visitor) {
          if (this.paths) {
              this.paths = visitor.visitArray(this.paths, true);
          }
          else if (this.selectors) {
              this.selectors = visitor.visitArray(this.selectors);
          }
          if (this.rules && this.rules.length) {
              this.rules = visitor.visitArray(this.rules);
          }
      };
      Ruleset.prototype.eval = function (context) {
          var selectors;
          var selCnt;
          var selector;
          var i;
          var hasVariable;
          var hasOnePassingSelector = false;
          if (this.selectors && (selCnt = this.selectors.length)) {
              selectors = new Array(selCnt);
              defaultFunc.error({
                  type: 'Syntax',
                  message: 'it is currently only allowed in parametric mixin guards,'
              });
              for (i = 0; i < selCnt; i++) {
                  selector = this.selectors[i].eval(context);
                  for (var j = 0; j < selector.elements.length; j++) {
                      if (selector.elements[j].isVariable) {
                          hasVariable = true;
                          break;
                      }
                  }
                  selectors[i] = selector;
                  if (selector.evaldCondition) {
                      hasOnePassingSelector = true;
                  }
              }
              if (hasVariable) {
                  var toParseSelectors = new Array(selCnt);
                  for (i = 0; i < selCnt; i++) {
                      selector = selectors[i];
                      toParseSelectors[i] = selector.toCSS(context);
                  }
                  this.parse.parseNode(toParseSelectors.join(','), ["selectors"], selectors[0].getIndex(), selectors[0].fileInfo(), function (err, result) {
                      if (result) {
                          selectors = flattenArray(result);
                      }
                  });
              }
              defaultFunc.reset();
          }
          else {
              hasOnePassingSelector = true;
          }
          var rules = this.rules ? copyArray(this.rules) : null;
          var ruleset = new Ruleset(selectors, rules, this.strictImports, this.visibilityInfo());
          var rule;
          var subRule;
          ruleset.originalRuleset = this;
          ruleset.root = this.root;
          ruleset.firstRoot = this.firstRoot;
          ruleset.allowImports = this.allowImports;
          if (this.debugInfo) {
              ruleset.debugInfo = this.debugInfo;
          }
          if (!hasOnePassingSelector) {
              rules.length = 0;
          }
          // inherit a function registry from the frames stack when possible;
          // otherwise from the global registry
          ruleset.functionRegistry = (function (frames) {
              var i = 0;
              var n = frames.length;
              var found;
              for (; i !== n; ++i) {
                  found = frames[i].functionRegistry;
                  if (found) {
                      return found;
                  }
              }
              return functionRegistry;
          })(context.frames).inherit();
          // push the current ruleset to the frames stack
          var ctxFrames = context.frames;
          ctxFrames.unshift(ruleset);
          // currrent selectors
          var ctxSelectors = context.selectors;
          if (!ctxSelectors) {
              context.selectors = ctxSelectors = [];
          }
          ctxSelectors.unshift(this.selectors);
          // Evaluate imports
          if (ruleset.root || ruleset.allowImports || !ruleset.strictImports) {
              ruleset.evalImports(context);
          }
          // Store the frames around mixin definitions,
          // so they can be evaluated like closures when the time comes.
          var rsRules = ruleset.rules;
          for (i = 0; (rule = rsRules[i]); i++) {
              if (rule.evalFirst) {
                  rsRules[i] = rule.eval(context);
              }
          }
          var mediaBlockCount = (context.mediaBlocks && context.mediaBlocks.length) || 0;
          // Evaluate mixin calls.
          for (i = 0; (rule = rsRules[i]); i++) {
              if (rule.type === 'MixinCall') {
                  /* jshint loopfunc:true */
                  rules = rule.eval(context).filter(function (r) {
                      if ((r instanceof Declaration) && r.variable) {
                          // do not pollute the scope if the variable is
                          // already there. consider returning false here
                          // but we need a way to "return" variable from mixins
                          return !(ruleset.variable(r.name));
                      }
                      return true;
                  });
                  rsRules.splice.apply(rsRules, [i, 1].concat(rules));
                  i += rules.length - 1;
                  ruleset.resetCache();
              }
              else if (rule.type === 'VariableCall') {
                  /* jshint loopfunc:true */
                  rules = rule.eval(context).rules.filter(function (r) {
                      if ((r instanceof Declaration) && r.variable) {
                          // do not pollute the scope at all
                          return false;
                      }
                      return true;
                  });
                  rsRules.splice.apply(rsRules, [i, 1].concat(rules));
                  i += rules.length - 1;
                  ruleset.resetCache();
              }
          }
          // Evaluate everything else
          for (i = 0; (rule = rsRules[i]); i++) {
              if (!rule.evalFirst) {
                  rsRules[i] = rule = rule.eval ? rule.eval(context) : rule;
              }
          }
          // Evaluate everything else
          for (i = 0; (rule = rsRules[i]); i++) {
              // for rulesets, check if it is a css guard and can be removed
              if (rule instanceof Ruleset && rule.selectors && rule.selectors.length === 1) {
                  // check if it can be folded in (e.g. & where)
                  if (rule.selectors[0] && rule.selectors[0].isJustParentSelector()) {
                      rsRules.splice(i--, 1);
                      for (var j = 0; (subRule = rule.rules[j]); j++) {
                          if (subRule instanceof Node) {
                              subRule.copyVisibilityInfo(rule.visibilityInfo());
                              if (!(subRule instanceof Declaration) || !subRule.variable) {
                                  rsRules.splice(++i, 0, subRule);
                              }
                          }
                      }
                  }
              }
          }
          // Pop the stack
          ctxFrames.shift();
          ctxSelectors.shift();
          if (context.mediaBlocks) {
              for (i = mediaBlockCount; i < context.mediaBlocks.length; i++) {
                  context.mediaBlocks[i].bubbleSelectors(selectors);
              }
          }
          return ruleset;
      };
      Ruleset.prototype.evalImports = function (context) {
          var rules = this.rules;
          var i;
          var importRules;
          if (!rules) {
              return;
          }
          for (i = 0; i < rules.length; i++) {
              if (rules[i].type === 'Import') {
                  importRules = rules[i].eval(context);
                  if (importRules && (importRules.length || importRules.length === 0)) {
                      rules.splice.apply(rules, [i, 1].concat(importRules));
                      i += importRules.length - 1;
                  }
                  else {
                      rules.splice(i, 1, importRules);
                  }
                  this.resetCache();
              }
          }
      };
      Ruleset.prototype.makeImportant = function () {
          var result = new Ruleset(this.selectors, this.rules.map(function (r) {
              if (r.makeImportant) {
                  return r.makeImportant();
              }
              else {
                  return r;
              }
          }), this.strictImports, this.visibilityInfo());
          return result;
      };
      Ruleset.prototype.matchArgs = function (args) {
          return !args || args.length === 0;
      };
      // lets you call a css selector with a guard
      Ruleset.prototype.matchCondition = function (args, context) {
          var lastSelector = this.selectors[this.selectors.length - 1];
          if (!lastSelector.evaldCondition) {
              return false;
          }
          if (lastSelector.condition &&
              !lastSelector.condition.eval(new contexts.Eval(context, context.frames))) {
              return false;
          }
          return true;
      };
      Ruleset.prototype.resetCache = function () {
          this._rulesets = null;
          this._variables = null;
          this._properties = null;
          this._lookups = {};
      };
      Ruleset.prototype.variables = function () {
          if (!this._variables) {
              this._variables = !this.rules ? {} : this.rules.reduce(function (hash, r) {
                  if (r instanceof Declaration && r.variable === true) {
                      hash[r.name] = r;
                  }
                  // when evaluating variables in an import statement, imports have not been eval'd
                  // so we need to go inside import statements.
                  // guard against root being a string (in the case of inlined less)
                  if (r.type === 'Import' && r.root && r.root.variables) {
                      var vars = r.root.variables();
                      for (var name_1 in vars) {
                          if (vars.hasOwnProperty(name_1)) {
                              hash[name_1] = r.root.variable(name_1);
                          }
                      }
                  }
                  return hash;
              }, {});
          }
          return this._variables;
      };
      Ruleset.prototype.properties = function () {
          if (!this._properties) {
              this._properties = !this.rules ? {} : this.rules.reduce(function (hash, r) {
                  if (r instanceof Declaration && r.variable !== true) {
                      var name_2 = (r.name.length === 1) && (r.name[0] instanceof Keyword) ?
                          r.name[0].value : r.name;
                      // Properties don't overwrite as they can merge
                      if (!hash["$" + name_2]) {
                          hash["$" + name_2] = [r];
                      }
                      else {
                          hash["$" + name_2].push(r);
                      }
                  }
                  return hash;
              }, {});
          }
          return this._properties;
      };
      Ruleset.prototype.variable = function (name) {
          var decl = this.variables()[name];
          if (decl) {
              return this.parseValue(decl);
          }
      };
      Ruleset.prototype.property = function (name) {
          var decl = this.properties()[name];
          if (decl) {
              return this.parseValue(decl);
          }
      };
      Ruleset.prototype.lastDeclaration = function () {
          for (var i_1 = this.rules.length; i_1 > 0; i_1--) {
              var decl = this.rules[i_1 - 1];
              if (decl instanceof Declaration) {
                  return this.parseValue(decl);
              }
          }
      };
      Ruleset.prototype.parseValue = function (toParse) {
          var self = this;
          function transformDeclaration(decl) {
              if (decl.value instanceof Anonymous && !decl.parsed) {
                  if (typeof decl.value.value === 'string') {
                      this.parse.parseNode(decl.value.value, ['value', 'important'], decl.value.getIndex(), decl.fileInfo(), function (err, result) {
                          if (err) {
                              decl.parsed = true;
                          }
                          if (result) {
                              decl.value = result[0];
                              decl.important = result[1] || '';
                              decl.parsed = true;
                          }
                      });
                  }
                  else {
                      decl.parsed = true;
                  }
                  return decl;
              }
              else {
                  return decl;
              }
          }
          if (!Array.isArray(toParse)) {
              return transformDeclaration.call(self, toParse);
          }
          else {
              var nodes_1 = [];
              toParse.forEach(function (n) {
                  nodes_1.push(transformDeclaration.call(self, n));
              });
              return nodes_1;
          }
      };
      Ruleset.prototype.rulesets = function () {
          if (!this.rules) {
              return [];
          }
          var filtRules = [];
          var rules = this.rules;
          var i;
          var rule;
          for (i = 0; (rule = rules[i]); i++) {
              if (rule.isRuleset) {
                  filtRules.push(rule);
              }
          }
          return filtRules;
      };
      Ruleset.prototype.prependRule = function (rule) {
          var rules = this.rules;
          if (rules) {
              rules.unshift(rule);
          }
          else {
              this.rules = [rule];
          }
          this.setParent(rule, this);
      };
      Ruleset.prototype.find = function (selector, self, filter) {
          if (self === void 0) { self = this; }
          var rules = [];
          var match;
          var foundMixins;
          var key = selector.toCSS();
          if (key in this._lookups) {
              return this._lookups[key];
          }
          this.rulesets().forEach(function (rule) {
              if (rule !== self) {
                  for (var j = 0; j < rule.selectors.length; j++) {
                      match = selector.match(rule.selectors[j]);
                      if (match) {
                          if (selector.elements.length > match) {
                              if (!filter || filter(rule)) {
                                  foundMixins = rule.find(new Selector(selector.elements.slice(match)), self, filter);
                                  for (var i_2 = 0; i_2 < foundMixins.length; ++i_2) {
                                      foundMixins[i_2].path.push(rule);
                                  }
                                  Array.prototype.push.apply(rules, foundMixins);
                              }
                          }
                          else {
                              rules.push({ rule: rule, path: [] });
                          }
                          break;
                      }
                  }
              }
          });
          this._lookups[key] = rules;
          return rules;
      };
      Ruleset.prototype.genCSS = function (context, output) {
          var i;
          var j;
          var charsetRuleNodes = [];
          var ruleNodes = [];
          var // Line number debugging
          debugInfo$1;
          var rule;
          var path;
          context.tabLevel = (context.tabLevel || 0);
          if (!this.root) {
              context.tabLevel++;
          }
          var tabRuleStr = context.compress ? '' : Array(context.tabLevel + 1).join('  ');
          var tabSetStr = context.compress ? '' : Array(context.tabLevel).join('  ');
          var sep;
          var charsetNodeIndex = 0;
          var importNodeIndex = 0;
          for (i = 0; (rule = this.rules[i]); i++) {
              if (rule instanceof Comment) {
                  if (importNodeIndex === i) {
                      importNodeIndex++;
                  }
                  ruleNodes.push(rule);
              }
              else if (rule.isCharset && rule.isCharset()) {
                  ruleNodes.splice(charsetNodeIndex, 0, rule);
                  charsetNodeIndex++;
                  importNodeIndex++;
              }
              else if (rule.type === 'Import') {
                  ruleNodes.splice(importNodeIndex, 0, rule);
                  importNodeIndex++;
              }
              else {
                  ruleNodes.push(rule);
              }
          }
          ruleNodes = charsetRuleNodes.concat(ruleNodes);
          // If this is the root node, we don't render
          // a selector, or {}.
          if (!this.root) {
              debugInfo$1 = debugInfo(context, this, tabSetStr);
              if (debugInfo$1) {
                  output.add(debugInfo$1);
                  output.add(tabSetStr);
              }
              var paths = this.paths;
              var pathCnt = paths.length;
              var pathSubCnt = void 0;
              sep = context.compress ? ',' : (",\n" + tabSetStr);
              for (i = 0; i < pathCnt; i++) {
                  path = paths[i];
                  if (!(pathSubCnt = path.length)) {
                      continue;
                  }
                  if (i > 0) {
                      output.add(sep);
                  }
                  context.firstSelector = true;
                  path[0].genCSS(context, output);
                  context.firstSelector = false;
                  for (j = 1; j < pathSubCnt; j++) {
                      path[j].genCSS(context, output);
                  }
              }
              output.add((context.compress ? '{' : ' {\n') + tabRuleStr);
          }
          // Compile rules and rulesets
          for (i = 0; (rule = ruleNodes[i]); i++) {
              if (i + 1 === ruleNodes.length) {
                  context.lastRule = true;
              }
              var currentLastRule = context.lastRule;
              if (rule.isRulesetLike(rule)) {
                  context.lastRule = false;
              }
              if (rule.genCSS) {
                  rule.genCSS(context, output);
              }
              else if (rule.value) {
                  output.add(rule.value.toString());
              }
              context.lastRule = currentLastRule;
              if (!context.lastRule && rule.isVisible()) {
                  output.add(context.compress ? '' : ("\n" + tabRuleStr));
              }
              else {
                  context.lastRule = false;
              }
          }
          if (!this.root) {
              output.add((context.compress ? '}' : "\n" + tabSetStr + "}"));
              context.tabLevel--;
          }
          if (!output.isEmpty() && !context.compress && this.firstRoot) {
              output.add('\n');
          }
      };
      Ruleset.prototype.joinSelectors = function (paths, context, selectors) {
          for (var s = 0; s < selectors.length; s++) {
              this.joinSelector(paths, context, selectors[s]);
          }
      };
      Ruleset.prototype.joinSelector = function (paths, context, selector) {
          function createParenthesis(elementsToPak, originalElement) {
              var replacementParen;
              var j;
              if (elementsToPak.length === 0) {
                  replacementParen = new Paren(elementsToPak[0]);
              }
              else {
                  var insideParent = new Array(elementsToPak.length);
                  for (j = 0; j < elementsToPak.length; j++) {
                      insideParent[j] = new Element(null, elementsToPak[j], originalElement.isVariable, originalElement._index, originalElement._fileInfo);
                  }
                  replacementParen = new Paren(new Selector(insideParent));
              }
              return replacementParen;
          }
          function createSelector(containedElement, originalElement) {
              var element;
              var selector;
              element = new Element(null, containedElement, originalElement.isVariable, originalElement._index, originalElement._fileInfo);
              selector = new Selector([element]);
              return selector;
          }
          // joins selector path from `beginningPath` with selector path in `addPath`
          // `replacedElement` contains element that is being replaced by `addPath`
          // returns concatenated path
          function addReplacementIntoPath(beginningPath, addPath, replacedElement, originalSelector) {
              var newSelectorPath;
              var lastSelector;
              var newJoinedSelector;
              // our new selector path
              newSelectorPath = [];
              // construct the joined selector - if & is the first thing this will be empty,
              // if not newJoinedSelector will be the last set of elements in the selector
              if (beginningPath.length > 0) {
                  newSelectorPath = copyArray(beginningPath);
                  lastSelector = newSelectorPath.pop();
                  newJoinedSelector = originalSelector.createDerived(copyArray(lastSelector.elements));
              }
              else {
                  newJoinedSelector = originalSelector.createDerived([]);
              }
              if (addPath.length > 0) {
                  // /deep/ is a CSS4 selector - (removed, so should deprecate)
                  // that is valid without anything in front of it
                  // so if the & does not have a combinator that is "" or " " then
                  // and there is a combinator on the parent, then grab that.
                  // this also allows + a { & .b { .a & { ... though not sure why you would want to do that
                  var combinator = replacedElement.combinator;
                  var parentEl = addPath[0].elements[0];
                  if (combinator.emptyOrWhitespace && !parentEl.combinator.emptyOrWhitespace) {
                      combinator = parentEl.combinator;
                  }
                  // join the elements so far with the first part of the parent
                  newJoinedSelector.elements.push(new Element(combinator, parentEl.value, replacedElement.isVariable, replacedElement._index, replacedElement._fileInfo));
                  newJoinedSelector.elements = newJoinedSelector.elements.concat(addPath[0].elements.slice(1));
              }
              // now add the joined selector - but only if it is not empty
              if (newJoinedSelector.elements.length !== 0) {
                  newSelectorPath.push(newJoinedSelector);
              }
              // put together the parent selectors after the join (e.g. the rest of the parent)
              if (addPath.length > 1) {
                  var restOfPath = addPath.slice(1);
                  restOfPath = restOfPath.map(function (selector) { return selector.createDerived(selector.elements, []); });
                  newSelectorPath = newSelectorPath.concat(restOfPath);
              }
              return newSelectorPath;
          }
          // joins selector path from `beginningPath` with every selector path in `addPaths` array
          // `replacedElement` contains element that is being replaced by `addPath`
          // returns array with all concatenated paths
          function addAllReplacementsIntoPath(beginningPath, addPaths, replacedElement, originalSelector, result) {
              var j;
              for (j = 0; j < beginningPath.length; j++) {
                  var newSelectorPath = addReplacementIntoPath(beginningPath[j], addPaths, replacedElement, originalSelector);
                  result.push(newSelectorPath);
              }
              return result;
          }
          function mergeElementsOnToSelectors(elements, selectors) {
              var i;
              var sel;
              if (elements.length === 0) {
                  return;
              }
              if (selectors.length === 0) {
                  selectors.push([new Selector(elements)]);
                  return;
              }
              for (i = 0; (sel = selectors[i]); i++) {
                  // if the previous thing in sel is a parent this needs to join on to it
                  if (sel.length > 0) {
                      sel[sel.length - 1] = sel[sel.length - 1].createDerived(sel[sel.length - 1].elements.concat(elements));
                  }
                  else {
                      sel.push(new Selector(elements));
                  }
              }
          }
          // replace all parent selectors inside `inSelector` by content of `context` array
          // resulting selectors are returned inside `paths` array
          // returns true if `inSelector` contained at least one parent selector
          function replaceParentSelector(paths, context, inSelector) {
              // The paths are [[Selector]]
              // The first list is a list of comma separated selectors
              // The inner list is a list of inheritance separated selectors
              // e.g.
              // .a, .b {
              //   .c {
              //   }
              // }
              // == [[.a] [.c]] [[.b] [.c]]
              //
              var i;
              var j;
              var k;
              var currentElements;
              var newSelectors;
              var selectorsMultiplied;
              var sel;
              var el;
              var hadParentSelector = false;
              var length;
              var lastSelector;
              function findNestedSelector(element) {
                  var maybeSelector;
                  if (!(element.value instanceof Paren)) {
                      return null;
                  }
                  maybeSelector = element.value.value;
                  if (!(maybeSelector instanceof Selector)) {
                      return null;
                  }
                  return maybeSelector;
              }
              // the elements from the current selector so far
              currentElements = [];
              // the current list of new selectors to add to the path.
              // We will build it up. We initiate it with one empty selector as we "multiply" the new selectors
              // by the parents
              newSelectors = [
                  []
              ];
              for (i = 0; (el = inSelector.elements[i]); i++) {
                  // non parent reference elements just get added
                  if (el.value !== '&') {
                      var nestedSelector = findNestedSelector(el);
                      if (nestedSelector != null) {
                          // merge the current list of non parent selector elements
                          // on to the current list of selectors to add
                          mergeElementsOnToSelectors(currentElements, newSelectors);
                          var nestedPaths = [];
                          var replaced = void 0;
                          var replacedNewSelectors = [];
                          replaced = replaceParentSelector(nestedPaths, context, nestedSelector);
                          hadParentSelector = hadParentSelector || replaced;
                          // the nestedPaths array should have only one member - replaceParentSelector does not multiply selectors
                          for (k = 0; k < nestedPaths.length; k++) {
                              var replacementSelector = createSelector(createParenthesis(nestedPaths[k], el), el);
                              addAllReplacementsIntoPath(newSelectors, [replacementSelector], el, inSelector, replacedNewSelectors);
                          }
                          newSelectors = replacedNewSelectors;
                          currentElements = [];
                      }
                      else {
                          currentElements.push(el);
                      }
                  }
                  else {
                      hadParentSelector = true;
                      // the new list of selectors to add
                      selectorsMultiplied = [];
                      // merge the current list of non parent selector elements
                      // on to the current list of selectors to add
                      mergeElementsOnToSelectors(currentElements, newSelectors);
                      // loop through our current selectors
                      for (j = 0; j < newSelectors.length; j++) {
                          sel = newSelectors[j];
                          // if we don't have any parent paths, the & might be in a mixin so that it can be used
                          // whether there are parents or not
                          if (context.length === 0) {
                              // the combinator used on el should now be applied to the next element instead so that
                              // it is not lost
                              if (sel.length > 0) {
                                  sel[0].elements.push(new Element(el.combinator, '', el.isVariable, el._index, el._fileInfo));
                              }
                              selectorsMultiplied.push(sel);
                          }
                          else {
                              // and the parent selectors
                              for (k = 0; k < context.length; k++) {
                                  // We need to put the current selectors
                                  // then join the last selector's elements on to the parents selectors
                                  var newSelectorPath = addReplacementIntoPath(sel, context[k], el, inSelector);
                                  // add that to our new set of selectors
                                  selectorsMultiplied.push(newSelectorPath);
                              }
                          }
                      }
                      // our new selectors has been multiplied, so reset the state
                      newSelectors = selectorsMultiplied;
                      currentElements = [];
                  }
              }
              // if we have any elements left over (e.g. .a& .b == .b)
              // add them on to all the current selectors
              mergeElementsOnToSelectors(currentElements, newSelectors);
              for (i = 0; i < newSelectors.length; i++) {
                  length = newSelectors[i].length;
                  if (length > 0) {
                      paths.push(newSelectors[i]);
                      lastSelector = newSelectors[i][length - 1];
                      newSelectors[i][length - 1] = lastSelector.createDerived(lastSelector.elements, inSelector.extendList);
                  }
              }
              return hadParentSelector;
          }
          function deriveSelector(visibilityInfo, deriveFrom) {
              var newSelector = deriveFrom.createDerived(deriveFrom.elements, deriveFrom.extendList, deriveFrom.evaldCondition);
              newSelector.copyVisibilityInfo(visibilityInfo);
              return newSelector;
          }
          // joinSelector code follows
          var i;
          var newPaths;
          var hadParentSelector;
          newPaths = [];
          hadParentSelector = replaceParentSelector(newPaths, context, selector);
          if (!hadParentSelector) {
              if (context.length > 0) {
                  newPaths = [];
                  for (i = 0; i < context.length; i++) {
                      var concatenated = context[i].map(deriveSelector.bind(this, selector.visibilityInfo()));
                      concatenated.push(selector);
                      newPaths.push(concatenated);
                  }
              }
              else {
                  newPaths = [[selector]];
              }
          }
          for (i = 0; i < newPaths.length; i++) {
              paths.push(newPaths[i]);
          }
      };
      return Ruleset;
  }(Node));
  Ruleset.prototype.type = 'Ruleset';
  Ruleset.prototype.isRuleset = true;

  var AtRule = /** @class */ (function (_super) {
      __extends(AtRule, _super);
      function AtRule(name, value, rules, index, currentFileInfo, debugInfo, isRooted, visibilityInfo) {
          var _this = _super.call(this) || this;
          var i;
          _this.name = name;
          _this.value = (value instanceof Node) ? value : (value ? new Anonymous(value) : value);
          if (rules) {
              if (Array.isArray(rules)) {
                  _this.rules = rules;
              }
              else {
                  _this.rules = [rules];
                  _this.rules[0].selectors = (new Selector([], null, null, index, currentFileInfo)).createEmptySelectors();
              }
              for (i = 0; i < _this.rules.length; i++) {
                  _this.rules[i].allowImports = true;
              }
              _this.setParent(_this.rules, _this);
          }
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.debugInfo = debugInfo;
          _this.isRooted = isRooted || false;
          _this.copyVisibilityInfo(visibilityInfo);
          _this.allowRoot = true;
          return _this;
      }
      AtRule.prototype.accept = function (visitor) {
          var value = this.value;
          var rules = this.rules;
          if (rules) {
              this.rules = visitor.visitArray(rules);
          }
          if (value) {
              this.value = visitor.visit(value);
          }
      };
      AtRule.prototype.isRulesetLike = function () {
          return this.rules || !this.isCharset();
      };
      AtRule.prototype.isCharset = function () {
          return '@charset' === this.name;
      };
      AtRule.prototype.genCSS = function (context, output) {
          var value = this.value;
          var rules = this.rules;
          output.add(this.name, this.fileInfo(), this.getIndex());
          if (value) {
              output.add(' ');
              value.genCSS(context, output);
          }
          if (rules) {
              this.outputRuleset(context, output, rules);
          }
          else {
              output.add(';');
          }
      };
      AtRule.prototype.eval = function (context) {
          var mediaPathBackup;
          var mediaBlocksBackup;
          var value = this.value;
          var rules = this.rules;
          // media stored inside other atrule should not bubble over it
          // backpup media bubbling information
          mediaPathBackup = context.mediaPath;
          mediaBlocksBackup = context.mediaBlocks;
          // deleted media bubbling information
          context.mediaPath = [];
          context.mediaBlocks = [];
          if (value) {
              value = value.eval(context);
          }
          if (rules) {
              // assuming that there is only one rule at this point - that is how parser constructs the rule
              rules = [rules[0].eval(context)];
              rules[0].root = true;
          }
          // restore media bubbling information
          context.mediaPath = mediaPathBackup;
          context.mediaBlocks = mediaBlocksBackup;
          return new AtRule(this.name, value, rules, this.getIndex(), this.fileInfo(), this.debugInfo, this.isRooted, this.visibilityInfo());
      };
      AtRule.prototype.variable = function (name) {
          if (this.rules) {
              // assuming that there is only one rule at this point - that is how parser constructs the rule
              return Ruleset.prototype.variable.call(this.rules[0], name);
          }
      };
      AtRule.prototype.find = function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          if (this.rules) {
              // assuming that there is only one rule at this point - that is how parser constructs the rule
              return Ruleset.prototype.find.apply(this.rules[0], args);
          }
      };
      AtRule.prototype.rulesets = function () {
          if (this.rules) {
              // assuming that there is only one rule at this point - that is how parser constructs the rule
              return Ruleset.prototype.rulesets.apply(this.rules[0]);
          }
      };
      AtRule.prototype.outputRuleset = function (context, output, rules) {
          var ruleCnt = rules.length;
          var i;
          context.tabLevel = (context.tabLevel | 0) + 1;
          // Compressed
          if (context.compress) {
              output.add('{');
              for (i = 0; i < ruleCnt; i++) {
                  rules[i].genCSS(context, output);
              }
              output.add('}');
              context.tabLevel--;
              return;
          }
          // Non-compressed
          var tabSetStr = "\n" + Array(context.tabLevel).join('  ');
          var tabRuleStr = tabSetStr + "  ";
          if (!ruleCnt) {
              output.add(" {" + tabSetStr + "}");
          }
          else {
              output.add(" {" + tabRuleStr);
              rules[0].genCSS(context, output);
              for (i = 1; i < ruleCnt; i++) {
                  output.add(tabRuleStr);
                  rules[i].genCSS(context, output);
              }
              output.add(tabSetStr + "}");
          }
          context.tabLevel--;
      };
      return AtRule;
  }(Node));
  AtRule.prototype.type = 'AtRule';

  var DetachedRuleset = /** @class */ (function (_super) {
      __extends(DetachedRuleset, _super);
      function DetachedRuleset(ruleset, frames) {
          var _this = _super.call(this) || this;
          _this.ruleset = ruleset;
          _this.frames = frames;
          _this.setParent(_this.ruleset, _this);
          return _this;
      }
      DetachedRuleset.prototype.accept = function (visitor) {
          this.ruleset = visitor.visit(this.ruleset);
      };
      DetachedRuleset.prototype.eval = function (context) {
          var frames = this.frames || copyArray(context.frames);
          return new DetachedRuleset(this.ruleset, frames);
      };
      DetachedRuleset.prototype.callEval = function (context) {
          return this.ruleset.eval(this.frames ? new contexts.Eval(context, this.frames.concat(context.frames)) : context);
      };
      return DetachedRuleset;
  }(Node));
  DetachedRuleset.prototype.type = 'DetachedRuleset';
  DetachedRuleset.prototype.evalFirst = true;

  var Unit = /** @class */ (function (_super) {
      __extends(Unit, _super);
      function Unit(numerator, denominator, backupUnit) {
          var _this = _super.call(this) || this;
          _this.numerator = numerator ? copyArray(numerator).sort() : [];
          _this.denominator = denominator ? copyArray(denominator).sort() : [];
          if (backupUnit) {
              _this.backupUnit = backupUnit;
          }
          else if (numerator && numerator.length) {
              _this.backupUnit = numerator[0];
          }
          return _this;
      }
      Unit.prototype.clone = function () {
          return new Unit(copyArray(this.numerator), copyArray(this.denominator), this.backupUnit);
      };
      Unit.prototype.genCSS = function (context, output) {
          // Dimension checks the unit is singular and throws an error if in strict math mode.
          var strictUnits = context && context.strictUnits;
          if (this.numerator.length === 1) {
              output.add(this.numerator[0]); // the ideal situation
          }
          else if (!strictUnits && this.backupUnit) {
              output.add(this.backupUnit);
          }
          else if (!strictUnits && this.denominator.length) {
              output.add(this.denominator[0]);
          }
      };
      Unit.prototype.toString = function () {
          var i;
          var returnStr = this.numerator.join('*');
          for (i = 0; i < this.denominator.length; i++) {
              returnStr += "/" + this.denominator[i];
          }
          return returnStr;
      };
      Unit.prototype.compare = function (other) {
          return this.is(other.toString()) ? 0 : undefined;
      };
      Unit.prototype.is = function (unitString) {
          return this.toString().toUpperCase() === unitString.toUpperCase();
      };
      Unit.prototype.isLength = function () {
          return RegExp('^(px|em|ex|ch|rem|in|cm|mm|pc|pt|ex|vw|vh|vmin|vmax)$', 'gi').test(this.toCSS());
      };
      Unit.prototype.isEmpty = function () {
          return this.numerator.length === 0 && this.denominator.length === 0;
      };
      Unit.prototype.isSingular = function () {
          return this.numerator.length <= 1 && this.denominator.length === 0;
      };
      Unit.prototype.map = function (callback) {
          var i;
          for (i = 0; i < this.numerator.length; i++) {
              this.numerator[i] = callback(this.numerator[i], false);
          }
          for (i = 0; i < this.denominator.length; i++) {
              this.denominator[i] = callback(this.denominator[i], true);
          }
      };
      Unit.prototype.usedUnits = function () {
          var group;
          var result = {};
          var mapUnit;
          var groupName;
          mapUnit = function (atomicUnit) {
              /* jshint loopfunc:true */
              if (group.hasOwnProperty(atomicUnit) && !result[groupName]) {
                  result[groupName] = atomicUnit;
              }
              return atomicUnit;
          };
          for (groupName in unitConversions) {
              if (unitConversions.hasOwnProperty(groupName)) {
                  group = unitConversions[groupName];
                  this.map(mapUnit);
              }
          }
          return result;
      };
      Unit.prototype.cancel = function () {
          var counter = {};
          var atomicUnit;
          var i;
          for (i = 0; i < this.numerator.length; i++) {
              atomicUnit = this.numerator[i];
              counter[atomicUnit] = (counter[atomicUnit] || 0) + 1;
          }
          for (i = 0; i < this.denominator.length; i++) {
              atomicUnit = this.denominator[i];
              counter[atomicUnit] = (counter[atomicUnit] || 0) - 1;
          }
          this.numerator = [];
          this.denominator = [];
          for (atomicUnit in counter) {
              if (counter.hasOwnProperty(atomicUnit)) {
                  var count = counter[atomicUnit];
                  if (count > 0) {
                      for (i = 0; i < count; i++) {
                          this.numerator.push(atomicUnit);
                      }
                  }
                  else if (count < 0) {
                      for (i = 0; i < -count; i++) {
                          this.denominator.push(atomicUnit);
                      }
                  }
              }
          }
          this.numerator.sort();
          this.denominator.sort();
      };
      return Unit;
  }(Node));
  Unit.prototype.type = 'Unit';

  //
  // A number with a unit
  //
  var Dimension = /** @class */ (function (_super) {
      __extends(Dimension, _super);
      function Dimension(value, unit) {
          var _this = _super.call(this) || this;
          _this.value = parseFloat(value);
          if (isNaN(_this.value)) {
              throw new Error('Dimension is not a number.');
          }
          _this.unit = (unit && unit instanceof Unit) ? unit :
              new Unit(unit ? [unit] : undefined);
          _this.setParent(_this.unit, _this);
          return _this;
      }
      Dimension.prototype.accept = function (visitor) {
          this.unit = visitor.visit(this.unit);
      };
      Dimension.prototype.eval = function (context) {
          return this;
      };
      Dimension.prototype.toColor = function () {
          return new Color([this.value, this.value, this.value]);
      };
      Dimension.prototype.genCSS = function (context, output) {
          if ((context && context.strictUnits) && !this.unit.isSingular()) {
              throw new Error("Multiple units in dimension. Correct the units or use the unit function. Bad unit: " + this.unit.toString());
          }
          var value = this.fround(context, this.value);
          var strValue = String(value);
          if (value !== 0 && value < 0.000001 && value > -0.000001) {
              // would be output 1e-6 etc.
              strValue = value.toFixed(20).replace(/0+$/, '');
          }
          if (context && context.compress) {
              // Zero values doesn't need a unit
              if (value === 0 && this.unit.isLength()) {
                  output.add(strValue);
                  return;
              }
              // Float values doesn't need a leading zero
              if (value > 0 && value < 1) {
                  strValue = (strValue).substr(1);
              }
          }
          output.add(strValue);
          this.unit.genCSS(context, output);
      };
      // In an operation between two Dimensions,
      // we default to the first Dimension's unit,
      // so `1px + 2` will yield `3px`.
      Dimension.prototype.operate = function (context, op, other) {
          /* jshint noempty:false */
          var value = this._operate(context, op, this.value, other.value);
          var unit = this.unit.clone();
          if (op === '+' || op === '-') {
              if (unit.numerator.length === 0 && unit.denominator.length === 0) {
                  unit = other.unit.clone();
                  if (this.unit.backupUnit) {
                      unit.backupUnit = this.unit.backupUnit;
                  }
              }
              else if (other.unit.numerator.length === 0 && unit.denominator.length === 0) ;
              else {
                  other = other.convertTo(this.unit.usedUnits());
                  if (context.strictUnits && other.unit.toString() !== unit.toString()) {
                      throw new Error("Incompatible units. Change the units or use the unit function. " +
                          ("Bad units: '" + unit.toString() + "' and '" + other.unit.toString() + "'."));
                  }
                  value = this._operate(context, op, this.value, other.value);
              }
          }
          else if (op === '*') {
              unit.numerator = unit.numerator.concat(other.unit.numerator).sort();
              unit.denominator = unit.denominator.concat(other.unit.denominator).sort();
              unit.cancel();
          }
          else if (op === '/') {
              unit.numerator = unit.numerator.concat(other.unit.denominator).sort();
              unit.denominator = unit.denominator.concat(other.unit.numerator).sort();
              unit.cancel();
          }
          return new Dimension(value, unit);
      };
      Dimension.prototype.compare = function (other) {
          var a;
          var b;
          if (!(other instanceof Dimension)) {
              return undefined;
          }
          if (this.unit.isEmpty() || other.unit.isEmpty()) {
              a = this;
              b = other;
          }
          else {
              a = this.unify();
              b = other.unify();
              if (a.unit.compare(b.unit) !== 0) {
                  return undefined;
              }
          }
          return Node.numericCompare(a.value, b.value);
      };
      Dimension.prototype.unify = function () {
          return this.convertTo({ length: 'px', duration: 's', angle: 'rad' });
      };
      Dimension.prototype.convertTo = function (conversions) {
          var value = this.value;
          var unit = this.unit.clone();
          var i;
          var groupName;
          var group;
          var targetUnit;
          var derivedConversions = {};
          var applyUnit;
          if (typeof conversions === 'string') {
              for (i in unitConversions) {
                  if (unitConversions[i].hasOwnProperty(conversions)) {
                      derivedConversions = {};
                      derivedConversions[i] = conversions;
                  }
              }
              conversions = derivedConversions;
          }
          applyUnit = function (atomicUnit, denominator) {
              /* jshint loopfunc:true */
              if (group.hasOwnProperty(atomicUnit)) {
                  if (denominator) {
                      value = value / (group[atomicUnit] / group[targetUnit]);
                  }
                  else {
                      value = value * (group[atomicUnit] / group[targetUnit]);
                  }
                  return targetUnit;
              }
              return atomicUnit;
          };
          for (groupName in conversions) {
              if (conversions.hasOwnProperty(groupName)) {
                  targetUnit = conversions[groupName];
                  group = unitConversions[groupName];
                  unit.map(applyUnit);
              }
          }
          unit.cancel();
          return new Dimension(value, unit);
      };
      return Dimension;
  }(Node));
  Dimension.prototype.type = 'Dimension';

  var MATH$1 = Math$1;
  var Operation = /** @class */ (function (_super) {
      __extends(Operation, _super);
      function Operation(op, operands, isSpaced) {
          var _this = _super.call(this) || this;
          _this.op = op.trim();
          _this.operands = operands;
          _this.isSpaced = isSpaced;
          return _this;
      }
      Operation.prototype.accept = function (visitor) {
          this.operands = visitor.visitArray(this.operands);
      };
      Operation.prototype.eval = function (context) {
          var a = this.operands[0].eval(context);
          var b = this.operands[1].eval(context);
          var op;
          if (context.isMathOn(this.op)) {
              op = this.op === './' ? '/' : this.op;
              if (a instanceof Dimension && b instanceof Color) {
                  a = a.toColor();
              }
              if (b instanceof Dimension && a instanceof Color) {
                  b = b.toColor();
              }
              if (!a.operate) {
                  if (a instanceof Operation && a.op === '/' && context.math === MATH$1.PARENS_DIVISION) {
                      return new Operation(this.op, [a, b], this.isSpaced);
                  }
                  throw { type: 'Operation',
                      message: 'Operation on an invalid type' };
              }
              return a.operate(context, op, b);
          }
          else {
              return new Operation(this.op, [a, b], this.isSpaced);
          }
      };
      Operation.prototype.genCSS = function (context, output) {
          this.operands[0].genCSS(context, output);
          if (this.isSpaced) {
              output.add(' ');
          }
          output.add(this.op);
          if (this.isSpaced) {
              output.add(' ');
          }
          this.operands[1].genCSS(context, output);
      };
      return Operation;
  }(Node));
  Operation.prototype.type = 'Operation';

  var MATH$2 = Math$1;
  var Expression = /** @class */ (function (_super) {
      __extends(Expression, _super);
      function Expression(value, noSpacing) {
          var _this = _super.call(this) || this;
          _this.value = value;
          _this.noSpacing = noSpacing;
          if (!value) {
              throw new Error('Expression requires an array parameter');
          }
          return _this;
      }
      Expression.prototype.accept = function (visitor) {
          this.value = visitor.visitArray(this.value);
      };
      Expression.prototype.eval = function (context) {
          var returnValue;
          var mathOn = context.isMathOn();
          var inParenthesis = this.parens &&
              (context.math !== MATH$2.STRICT_LEGACY || !this.parensInOp);
          var doubleParen = false;
          if (inParenthesis) {
              context.inParenthesis();
          }
          if (this.value.length > 1) {
              returnValue = new Expression(this.value.map(function (e) {
                  if (!e.eval) {
                      return e;
                  }
                  return e.eval(context);
              }), this.noSpacing);
          }
          else if (this.value.length === 1) {
              if (this.value[0].parens && !this.value[0].parensInOp && !context.inCalc) {
                  doubleParen = true;
              }
              returnValue = this.value[0].eval(context);
          }
          else {
              returnValue = this;
          }
          if (inParenthesis) {
              context.outOfParenthesis();
          }
          if (this.parens && this.parensInOp && !mathOn && !doubleParen
              && (!(returnValue instanceof Dimension))) {
              returnValue = new Paren(returnValue);
          }
          return returnValue;
      };
      Expression.prototype.genCSS = function (context, output) {
          for (var i_1 = 0; i_1 < this.value.length; i_1++) {
              this.value[i_1].genCSS(context, output);
              if (!this.noSpacing && i_1 + 1 < this.value.length) {
                  output.add(' ');
              }
          }
      };
      Expression.prototype.throwAwayComments = function () {
          this.value = this.value.filter(function (v) { return !(v instanceof Comment); });
      };
      return Expression;
  }(Node));
  Expression.prototype.type = 'Expression';

  var functionCaller = /** @class */ (function () {
      function functionCaller(name, context, index, currentFileInfo) {
          this.name = name.toLowerCase();
          this.index = index;
          this.context = context;
          this.currentFileInfo = currentFileInfo;
          this.func = context.frames[0].functionRegistry.get(this.name);
      }
      functionCaller.prototype.isValid = function () {
          return Boolean(this.func);
      };
      functionCaller.prototype.call = function (args) {
          // This code is terrible and should be replaced as per this issue...
          // https://github.com/less/less.js/issues/2477
          if (Array.isArray(args)) {
              args = args.filter(function (item) {
                  if (item.type === 'Comment') {
                      return false;
                  }
                  return true;
              })
                  .map(function (item) {
                  if (item.type === 'Expression') {
                      var subNodes = item.value.filter(function (item) {
                          if (item.type === 'Comment') {
                              return false;
                          }
                          return true;
                      });
                      if (subNodes.length === 1) {
                          return subNodes[0];
                      }
                      else {
                          return new Expression(subNodes);
                      }
                  }
                  return item;
              });
          }
          return this.func.apply(this, args);
      };
      return functionCaller;
  }());

  //
  // A function call node.
  //
  var Call = /** @class */ (function (_super) {
      __extends(Call, _super);
      function Call(name, args, index, currentFileInfo) {
          var _this = _super.call(this) || this;
          _this.name = name;
          _this.args = args;
          _this.calc = name === 'calc';
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          return _this;
      }
      Call.prototype.accept = function (visitor) {
          if (this.args) {
              this.args = visitor.visitArray(this.args);
          }
      };
      //
      // When evaluating a function call,
      // we either find the function in the functionRegistry,
      // in which case we call it, passing the  evaluated arguments,
      // if this returns null or we cannot find the function, we
      // simply print it out as it appeared originally [2].
      //
      // The reason why we evaluate the arguments, is in the case where
      // we try to pass a variable to a function, like: `saturate(@color)`.
      // The function should receive the value, not the variable.
      //
      Call.prototype.eval = function (context) {
          /**
           * Turn off math for calc(), and switch back on for evaluating nested functions
           */
          var currentMathContext = context.mathOn;
          context.mathOn = !this.calc;
          if (this.calc || context.inCalc) {
              context.enterCalc();
          }
          var args = this.args.map(function (a) { return a.eval(context); });
          if (this.calc || context.inCalc) {
              context.exitCalc();
          }
          context.mathOn = currentMathContext;
          var result;
          var funcCaller = new functionCaller(this.name, context, this.getIndex(), this.fileInfo());
          if (funcCaller.isValid()) {
              try {
                  result = funcCaller.call(args);
              }
              catch (e) {
                  throw {
                      type: e.type || 'Runtime',
                      message: "error evaluating function `" + this.name + "`" + (e.message ? ": " + e.message : ''),
                      index: this.getIndex(),
                      filename: this.fileInfo().filename,
                      line: e.lineNumber,
                      column: e.columnNumber
                  };
              }
              if (result !== null && result !== undefined) {
                  // Results that that are not nodes are cast as Anonymous nodes
                  // Falsy values or booleans are returned as empty nodes
                  if (!(result instanceof Node)) {
                      if (!result || result === true) {
                          result = new Anonymous(null);
                      }
                      else {
                          result = new Anonymous(result.toString());
                      }
                  }
                  result._index = this._index;
                  result._fileInfo = this._fileInfo;
                  return result;
              }
          }
          return new Call(this.name, args, this.getIndex(), this.fileInfo());
      };
      Call.prototype.genCSS = function (context, output) {
          output.add(this.name + "(", this.fileInfo(), this.getIndex());
          for (var i_1 = 0; i_1 < this.args.length; i_1++) {
              this.args[i_1].genCSS(context, output);
              if (i_1 + 1 < this.args.length) {
                  output.add(', ');
              }
          }
          output.add(')');
      };
      return Call;
  }(Node));
  Call.prototype.type = 'Call';

  var Variable = /** @class */ (function (_super) {
      __extends(Variable, _super);
      function Variable(name, index, currentFileInfo) {
          var _this = _super.call(this) || this;
          _this.name = name;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          return _this;
      }
      Variable.prototype.eval = function (context) {
          var variable;
          var name = this.name;
          if (name.indexOf('@@') === 0) {
              name = "@" + new Variable(name.slice(1), this.getIndex(), this.fileInfo()).eval(context).value;
          }
          if (this.evaluating) {
              throw { type: 'Name',
                  message: "Recursive variable definition for " + name,
                  filename: this.fileInfo().filename,
                  index: this.getIndex() };
          }
          this.evaluating = true;
          variable = this.find(context.frames, function (frame) {
              var v = frame.variable(name);
              if (v) {
                  if (v.important) {
                      var importantScope = context.importantScope[context.importantScope.length - 1];
                      importantScope.important = v.important;
                  }
                  // If in calc, wrap vars in a function call to cascade evaluate args first
                  if (context.inCalc) {
                      return (new Call('_SELF', [v.value])).eval(context);
                  }
                  else {
                      return v.value.eval(context);
                  }
              }
          });
          if (variable) {
              this.evaluating = false;
              return variable;
          }
          else {
              throw { type: 'Name',
                  message: "variable " + name + " is undefined",
                  filename: this.fileInfo().filename,
                  index: this.getIndex() };
          }
      };
      Variable.prototype.find = function (obj, fun) {
          for (var i_1 = 0, r = void 0; i_1 < obj.length; i_1++) {
              r = fun.call(obj, obj[i_1]);
              if (r) {
                  return r;
              }
          }
          return null;
      };
      return Variable;
  }(Node));
  Variable.prototype.type = 'Variable';

  var Property = /** @class */ (function (_super) {
      __extends(Property, _super);
      function Property(name, index, currentFileInfo) {
          var _this = _super.call(this) || this;
          _this.name = name;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          return _this;
      }
      Property.prototype.eval = function (context) {
          var property;
          var name = this.name;
          // TODO: shorten this reference
          var mergeRules = context.pluginManager.less.visitors.ToCSSVisitor.prototype._mergeRules;
          if (this.evaluating) {
              throw { type: 'Name',
                  message: "Recursive property reference for " + name,
                  filename: this.fileInfo().filename,
                  index: this.getIndex() };
          }
          this.evaluating = true;
          property = this.find(context.frames, function (frame) {
              var v;
              var vArr = frame.property(name);
              if (vArr) {
                  for (var i_1 = 0; i_1 < vArr.length; i_1++) {
                      v = vArr[i_1];
                      vArr[i_1] = new Declaration(v.name, v.value, v.important, v.merge, v.index, v.currentFileInfo, v.inline, v.variable);
                  }
                  mergeRules(vArr);
                  v = vArr[vArr.length - 1];
                  if (v.important) {
                      var importantScope = context.importantScope[context.importantScope.length - 1];
                      importantScope.important = v.important;
                  }
                  v = v.value.eval(context);
                  return v;
              }
          });
          if (property) {
              this.evaluating = false;
              return property;
          }
          else {
              throw { type: 'Name',
                  message: "Property '" + name + "' is undefined",
                  filename: this.currentFileInfo.filename,
                  index: this.index };
          }
      };
      Property.prototype.find = function (obj, fun) {
          for (var i_2 = 0, r = void 0; i_2 < obj.length; i_2++) {
              r = fun.call(obj, obj[i_2]);
              if (r) {
                  return r;
              }
          }
          return null;
      };
      return Property;
  }(Node));
  Property.prototype.type = 'Property';

  var Attribute = /** @class */ (function (_super) {
      __extends(Attribute, _super);
      function Attribute(key, op, value) {
          var _this = _super.call(this) || this;
          _this.key = key;
          _this.op = op;
          _this.value = value;
          return _this;
      }
      Attribute.prototype.eval = function (context) {
          return new Attribute(this.key.eval ? this.key.eval(context) : this.key, this.op, (this.value && this.value.eval) ? this.value.eval(context) : this.value);
      };
      Attribute.prototype.genCSS = function (context, output) {
          output.add(this.toCSS(context));
      };
      Attribute.prototype.toCSS = function (context) {
          var value = this.key.toCSS ? this.key.toCSS(context) : this.key;
          if (this.op) {
              value += this.op;
              value += (this.value.toCSS ? this.value.toCSS(context) : this.value);
          }
          return "[" + value + "]";
      };
      return Attribute;
  }(Node));
  Attribute.prototype.type = 'Attribute';

  var Quoted = /** @class */ (function (_super) {
      __extends(Quoted, _super);
      function Quoted(str, content, escaped, index, currentFileInfo) {
          var _this = _super.call(this) || this;
          _this.escaped = (escaped == null) ? true : escaped;
          _this.value = content || '';
          _this.quote = str.charAt(0);
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.variableRegex = /@\{([\w-]+)\}/g;
          _this.propRegex = /\$\{([\w-]+)\}/g;
          _this.allowRoot = escaped;
          return _this;
      }
      Quoted.prototype.genCSS = function (context, output) {
          if (!this.escaped) {
              output.add(this.quote, this.fileInfo(), this.getIndex());
          }
          output.add(this.value);
          if (!this.escaped) {
              output.add(this.quote);
          }
      };
      Quoted.prototype.containsVariables = function () {
          return this.value.match(this.variableRegex);
      };
      Quoted.prototype.eval = function (context) {
          var that = this;
          var value = this.value;
          var variableReplacement = function (_, name) {
              var v = new Variable("@" + name, that.getIndex(), that.fileInfo()).eval(context, true);
              return (v instanceof Quoted) ? v.value : v.toCSS();
          };
          var propertyReplacement = function (_, name) {
              var v = new Property("$" + name, that.getIndex(), that.fileInfo()).eval(context, true);
              return (v instanceof Quoted) ? v.value : v.toCSS();
          };
          function iterativeReplace(value, regexp, replacementFnc) {
              var evaluatedValue = value;
              do {
                  value = evaluatedValue.toString();
                  evaluatedValue = value.replace(regexp, replacementFnc);
              } while (value !== evaluatedValue);
              return evaluatedValue;
          }
          value = iterativeReplace(value, this.variableRegex, variableReplacement);
          value = iterativeReplace(value, this.propRegex, propertyReplacement);
          return new Quoted(this.quote + value + this.quote, value, this.escaped, this.getIndex(), this.fileInfo());
      };
      Quoted.prototype.compare = function (other) {
          // when comparing quoted strings allow the quote to differ
          if (other.type === 'Quoted' && !this.escaped && !other.escaped) {
              return Node.numericCompare(this.value, other.value);
          }
          else {
              return other.toCSS && this.toCSS() === other.toCSS() ? 0 : undefined;
          }
      };
      return Quoted;
  }(Node));
  Quoted.prototype.type = 'Quoted';

  var URL = /** @class */ (function (_super) {
      __extends(URL, _super);
      function URL(val, index, currentFileInfo, isEvald) {
          var _this = _super.call(this) || this;
          _this.value = val;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.isEvald = isEvald;
          return _this;
      }
      URL.prototype.accept = function (visitor) {
          this.value = visitor.visit(this.value);
      };
      URL.prototype.genCSS = function (context, output) {
          output.add('url(');
          this.value.genCSS(context, output);
          output.add(')');
      };
      URL.prototype.eval = function (context) {
          var val = this.value.eval(context);
          var rootpath;
          if (!this.isEvald) {
              // Add the rootpath if the URL requires a rewrite
              rootpath = this.fileInfo() && this.fileInfo().rootpath;
              if (typeof rootpath === 'string' &&
                  typeof val.value === 'string' &&
                  context.pathRequiresRewrite(val.value)) {
                  if (!val.quote) {
                      rootpath = escapePath(rootpath);
                  }
                  val.value = context.rewritePath(val.value, rootpath);
              }
              else {
                  val.value = context.normalizePath(val.value);
              }
              // Add url args if enabled
              if (context.urlArgs) {
                  if (!val.value.match(/^\s*data:/)) {
                      var delimiter = val.value.indexOf('?') === -1 ? '?' : '&';
                      var urlArgs = delimiter + context.urlArgs;
                      if (val.value.indexOf('#') !== -1) {
                          val.value = val.value.replace('#', urlArgs + "#");
                      }
                      else {
                          val.value += urlArgs;
                      }
                  }
              }
          }
          return new URL(val, this.getIndex(), this.fileInfo(), true);
      };
      return URL;
  }(Node));
  URL.prototype.type = 'Url';
  function escapePath(path) {
      return path.replace(/[\(\)'"\s]/g, function (match) { return "\\" + match; });
  }

  var Media = /** @class */ (function (_super) {
      __extends(Media, _super);
      function Media(value, features, index, currentFileInfo, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          var selectors = (new Selector([], null, null, _this._index, _this._fileInfo)).createEmptySelectors();
          _this.features = new Value(features);
          _this.rules = [new Ruleset(selectors, value)];
          _this.rules[0].allowImports = true;
          _this.copyVisibilityInfo(visibilityInfo);
          _this.allowRoot = true;
          _this.setParent(selectors, _this);
          _this.setParent(_this.features, _this);
          _this.setParent(_this.rules, _this);
          return _this;
      }
      Media.prototype.isRulesetLike = function () {
          return true;
      };
      Media.prototype.accept = function (visitor) {
          if (this.features) {
              this.features = visitor.visit(this.features);
          }
          if (this.rules) {
              this.rules = visitor.visitArray(this.rules);
          }
      };
      Media.prototype.genCSS = function (context, output) {
          output.add('@media ', this._fileInfo, this._index);
          this.features.genCSS(context, output);
          this.outputRuleset(context, output, this.rules);
      };
      Media.prototype.eval = function (context) {
          if (!context.mediaBlocks) {
              context.mediaBlocks = [];
              context.mediaPath = [];
          }
          var media = new Media(null, [], this._index, this._fileInfo, this.visibilityInfo());
          if (this.debugInfo) {
              this.rules[0].debugInfo = this.debugInfo;
              media.debugInfo = this.debugInfo;
          }
          media.features = this.features.eval(context);
          context.mediaPath.push(media);
          context.mediaBlocks.push(media);
          this.rules[0].functionRegistry = context.frames[0].functionRegistry.inherit();
          context.frames.unshift(this.rules[0]);
          media.rules = [this.rules[0].eval(context)];
          context.frames.shift();
          context.mediaPath.pop();
          return context.mediaPath.length === 0 ? media.evalTop(context) :
              media.evalNested(context);
      };
      Media.prototype.evalTop = function (context) {
          var result = this;
          // Render all dependent Media blocks.
          if (context.mediaBlocks.length > 1) {
              var selectors = (new Selector([], null, null, this.getIndex(), this.fileInfo())).createEmptySelectors();
              result = new Ruleset(selectors, context.mediaBlocks);
              result.multiMedia = true;
              result.copyVisibilityInfo(this.visibilityInfo());
              this.setParent(result, this);
          }
          delete context.mediaBlocks;
          delete context.mediaPath;
          return result;
      };
      Media.prototype.evalNested = function (context) {
          var i;
          var value;
          var path = context.mediaPath.concat([this]);
          // Extract the media-query conditions separated with `,` (OR).
          for (i = 0; i < path.length; i++) {
              value = path[i].features instanceof Value ?
                  path[i].features.value : path[i].features;
              path[i] = Array.isArray(value) ? value : [value];
          }
          // Trace all permutations to generate the resulting media-query.
          //
          // (a, b and c) with nested (d, e) ->
          //    a and d
          //    a and e
          //    b and c and d
          //    b and c and e
          this.features = new Value(this.permute(path).map(function (path) {
              path = path.map(function (fragment) { return fragment.toCSS ? fragment : new Anonymous(fragment); });
              for (i = path.length - 1; i > 0; i--) {
                  path.splice(i, 0, new Anonymous('and'));
              }
              return new Expression(path);
          }));
          this.setParent(this.features, this);
          // Fake a tree-node that doesn't output anything.
          return new Ruleset([], []);
      };
      Media.prototype.permute = function (arr) {
          if (arr.length === 0) {
              return [];
          }
          else if (arr.length === 1) {
              return arr[0];
          }
          else {
              var result = [];
              var rest = this.permute(arr.slice(1));
              for (var i_1 = 0; i_1 < rest.length; i_1++) {
                  for (var j = 0; j < arr[0].length; j++) {
                      result.push([arr[0][j]].concat(rest[i_1]));
                  }
              }
              return result;
          }
      };
      Media.prototype.bubbleSelectors = function (selectors) {
          if (!selectors) {
              return;
          }
          this.rules = [new Ruleset(copyArray(selectors), [this.rules[0]])];
          this.setParent(this.rules, this);
      };
      return Media;
  }(AtRule));
  Media.prototype.type = 'Media';

  //
  // CSS @import node
  //
  // The general strategy here is that we don't want to wait
  // for the parsing to be completed, before we start importing
  // the file. That's because in the context of a browser,
  // most of the time will be spent waiting for the server to respond.
  //
  // On creation, we push the import path to our import queue, though
  // `import,push`, we also pass it a callback, which it'll call once
  // the file has been fetched, and parsed.
  //
  var Import = /** @class */ (function (_super) {
      __extends(Import, _super);
      function Import(path, features, options, index, currentFileInfo, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this.options = options;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.path = path;
          _this.features = features;
          _this.allowRoot = true;
          if (_this.options.less !== undefined || _this.options.inline) {
              _this.css = !_this.options.less || _this.options.inline;
          }
          else {
              var pathValue = _this.getPath();
              if (pathValue && /[#\.\&\?]css([\?;].*)?$/.test(pathValue)) {
                  _this.css = true;
              }
          }
          _this.copyVisibilityInfo(visibilityInfo);
          _this.setParent(_this.features, _this);
          _this.setParent(_this.path, _this);
          return _this;
      }
      Import.prototype.accept = function (visitor) {
          if (this.features) {
              this.features = visitor.visit(this.features);
          }
          this.path = visitor.visit(this.path);
          if (!this.options.isPlugin && !this.options.inline && this.root) {
              this.root = visitor.visit(this.root);
          }
      };
      Import.prototype.genCSS = function (context, output) {
          if (this.css && this.path._fileInfo.reference === undefined) {
              output.add('@import ', this._fileInfo, this._index);
              this.path.genCSS(context, output);
              if (this.features) {
                  output.add(' ');
                  this.features.genCSS(context, output);
              }
              output.add(';');
          }
      };
      Import.prototype.getPath = function () {
          return (this.path instanceof URL) ?
              this.path.value.value : this.path.value;
      };
      Import.prototype.isVariableImport = function () {
          var path = this.path;
          if (path instanceof URL) {
              path = path.value;
          }
          if (path instanceof Quoted) {
              return path.containsVariables();
          }
          return true;
      };
      Import.prototype.evalForImport = function (context) {
          var path = this.path;
          if (path instanceof URL) {
              path = path.value;
          }
          return new Import(path.eval(context), this.features, this.options, this._index, this._fileInfo, this.visibilityInfo());
      };
      Import.prototype.evalPath = function (context) {
          var path = this.path.eval(context);
          var fileInfo = this._fileInfo;
          if (!(path instanceof URL)) {
              // Add the rootpath if the URL requires a rewrite
              var pathValue = path.value;
              if (fileInfo &&
                  pathValue &&
                  context.pathRequiresRewrite(pathValue)) {
                  path.value = context.rewritePath(pathValue, fileInfo.rootpath);
              }
              else {
                  path.value = context.normalizePath(path.value);
              }
          }
          return path;
      };
      Import.prototype.eval = function (context) {
          var result = this.doEval(context);
          if (this.options.reference || this.blocksVisibility()) {
              if (result.length || result.length === 0) {
                  result.forEach(function (node) {
                      node.addVisibilityBlock();
                  });
              }
              else {
                  result.addVisibilityBlock();
              }
          }
          return result;
      };
      Import.prototype.doEval = function (context) {
          var ruleset;
          var registry;
          var features = this.features && this.features.eval(context);
          if (this.options.isPlugin) {
              if (this.root && this.root.eval) {
                  try {
                      this.root.eval(context);
                  }
                  catch (e) {
                      e.message = 'Plugin error during evaluation';
                      throw new LessError(e, this.root.imports, this.root.filename);
                  }
              }
              registry = context.frames[0] && context.frames[0].functionRegistry;
              if (registry && this.root && this.root.functions) {
                  registry.addMultiple(this.root.functions);
              }
              return [];
          }
          if (this.skip) {
              if (typeof this.skip === 'function') {
                  this.skip = this.skip();
              }
              if (this.skip) {
                  return [];
              }
          }
          if (this.options.inline) {
              var contents = new Anonymous(this.root, 0, {
                  filename: this.importedFilename,
                  reference: this.path._fileInfo && this.path._fileInfo.reference
              }, true, true);
              return this.features ? new Media([contents], this.features.value) : [contents];
          }
          else if (this.css) {
              var newImport = new Import(this.evalPath(context), features, this.options, this._index);
              if (!newImport.css && this.error) {
                  throw this.error;
              }
              return newImport;
          }
          else {
              ruleset = new Ruleset(null, copyArray(this.root.rules));
              ruleset.evalImports(context);
              return this.features ? new Media(ruleset.rules, this.features.value) : ruleset.rules;
          }
      };
      return Import;
  }(Node));
  Import.prototype.type = 'Import';

  var JsEvalNode = /** @class */ (function (_super) {
      __extends(JsEvalNode, _super);
      function JsEvalNode() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      JsEvalNode.prototype.evaluateJavaScript = function (expression, context) {
          var result;
          var that = this;
          var evalContext = {};
          if (!context.javascriptEnabled) {
              throw { message: 'Inline JavaScript is not enabled. Is it set in your options?',
                  filename: this.fileInfo().filename,
                  index: this.getIndex() };
          }
          expression = expression.replace(/@\{([\w-]+)\}/g, function (_, name) { return that.jsify(new Variable("@" + name, that.getIndex(), that.fileInfo()).eval(context)); });
          try {
              expression = new Function("return (" + expression + ")");
          }
          catch (e) {
              throw { message: "JavaScript evaluation error: " + e.message + " from `" + expression + "`",
                  filename: this.fileInfo().filename,
                  index: this.getIndex() };
          }
          var variables = context.frames[0].variables();
          for (var k in variables) {
              if (variables.hasOwnProperty(k)) {
                  /* jshint loopfunc:true */
                  evalContext[k.slice(1)] = {
                      value: variables[k].value,
                      toJS: function () {
                          return this.value.eval(context).toCSS();
                      }
                  };
              }
          }
          try {
              result = expression.call(evalContext);
          }
          catch (e) {
              throw { message: "JavaScript evaluation error: '" + e.name + ": " + e.message.replace(/["]/g, '\'') + "'",
                  filename: this.fileInfo().filename,
                  index: this.getIndex() };
          }
          return result;
      };
      JsEvalNode.prototype.jsify = function (obj) {
          if (Array.isArray(obj.value) && (obj.value.length > 1)) {
              return "[" + obj.value.map(function (v) { return v.toCSS(); }).join(', ') + "]";
          }
          else {
              return obj.toCSS();
          }
      };
      return JsEvalNode;
  }(Node));

  var JavaScript = /** @class */ (function (_super) {
      __extends(JavaScript, _super);
      function JavaScript(string, escaped, index, currentFileInfo) {
          var _this = _super.call(this) || this;
          _this.escaped = escaped;
          _this.expression = string;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          return _this;
      }
      JavaScript.prototype.eval = function (context) {
          var result = this.evaluateJavaScript(this.expression, context);
          var type = typeof result;
          if (type === 'number' && !isNaN(result)) {
              return new Dimension(result);
          }
          else if (type === 'string') {
              return new Quoted("\"" + result + "\"", result, this.escaped, this._index);
          }
          else if (Array.isArray(result)) {
              return new Anonymous(result.join(', '));
          }
          else {
              return new Anonymous(result);
          }
      };
      return JavaScript;
  }(JsEvalNode));
  JavaScript.prototype.type = 'JavaScript';

  var Assignment = /** @class */ (function (_super) {
      __extends(Assignment, _super);
      function Assignment(key, val) {
          var _this = _super.call(this) || this;
          _this.key = key;
          _this.value = val;
          return _this;
      }
      Assignment.prototype.accept = function (visitor) {
          this.value = visitor.visit(this.value);
      };
      Assignment.prototype.eval = function (context) {
          if (this.value.eval) {
              return new Assignment(this.key, this.value.eval(context));
          }
          return this;
      };
      Assignment.prototype.genCSS = function (context, output) {
          output.add(this.key + "=");
          if (this.value.genCSS) {
              this.value.genCSS(context, output);
          }
          else {
              output.add(this.value);
          }
      };
      return Assignment;
  }(Node));
  Assignment.prototype.type = 'Assignment';

  var Condition = /** @class */ (function (_super) {
      __extends(Condition, _super);
      function Condition(op, l, r, i, negate) {
          var _this = _super.call(this) || this;
          _this.op = op.trim();
          _this.lvalue = l;
          _this.rvalue = r;
          _this._index = i;
          _this.negate = negate;
          return _this;
      }
      Condition.prototype.accept = function (visitor) {
          this.lvalue = visitor.visit(this.lvalue);
          this.rvalue = visitor.visit(this.rvalue);
      };
      Condition.prototype.eval = function (context) {
          var result = (function (op, a, b) {
              switch (op) {
                  case 'and': return a && b;
                  case 'or': return a || b;
                  default:
                      switch (Node.compare(a, b)) {
                          case -1:
                              return op === '<' || op === '=<' || op === '<=';
                          case 0:
                              return op === '=' || op === '>=' || op === '=<' || op === '<=';
                          case 1:
                              return op === '>' || op === '>=';
                          default:
                              return false;
                      }
              }
          })(this.op, this.lvalue.eval(context), this.rvalue.eval(context));
          return this.negate ? !result : result;
      };
      return Condition;
  }(Node));
  Condition.prototype.type = 'Condition';

  var UnicodeDescriptor = /** @class */ (function (_super) {
      __extends(UnicodeDescriptor, _super);
      function UnicodeDescriptor(value) {
          var _this = _super.call(this) || this;
          _this.value = value;
          return _this;
      }
      return UnicodeDescriptor;
  }(Node));
  UnicodeDescriptor.prototype.type = 'UnicodeDescriptor';

  var Negative = /** @class */ (function (_super) {
      __extends(Negative, _super);
      function Negative(node) {
          var _this = _super.call(this) || this;
          _this.value = node;
          return _this;
      }
      Negative.prototype.genCSS = function (context, output) {
          output.add('-');
          this.value.genCSS(context, output);
      };
      Negative.prototype.eval = function (context) {
          if (context.isMathOn()) {
              return (new Operation('*', [new Dimension(-1), this.value])).eval(context);
          }
          return new Negative(this.value.eval(context));
      };
      return Negative;
  }(Node));
  Negative.prototype.type = 'Negative';

  var Extend = /** @class */ (function (_super) {
      __extends(Extend, _super);
      function Extend(selector, option, index, currentFileInfo, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this.selector = selector;
          _this.option = option;
          _this.object_id = Extend.next_id++;
          _this.parent_ids = [_this.object_id];
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.copyVisibilityInfo(visibilityInfo);
          _this.allowRoot = true;
          switch (option) {
              case 'all':
                  _this.allowBefore = true;
                  _this.allowAfter = true;
                  break;
              default:
                  _this.allowBefore = false;
                  _this.allowAfter = false;
                  break;
          }
          _this.setParent(_this.selector, _this);
          return _this;
      }
      Extend.prototype.accept = function (visitor) {
          this.selector = visitor.visit(this.selector);
      };
      Extend.prototype.eval = function (context) {
          return new Extend(this.selector.eval(context), this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo());
      };
      Extend.prototype.clone = function (context) {
          return new Extend(this.selector, this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo());
      };
      // it concatenates (joins) all selectors in selector array
      Extend.prototype.findSelfSelectors = function (selectors) {
          var selfElements = [];
          var i;
          var selectorElements;
          for (i = 0; i < selectors.length; i++) {
              selectorElements = selectors[i].elements;
              // duplicate the logic in genCSS function inside the selector node.
              // future TODO - move both logics into the selector joiner visitor
              if (i > 0 && selectorElements.length && selectorElements[0].combinator.value === '') {
                  selectorElements[0].combinator.value = ' ';
              }
              selfElements = selfElements.concat(selectors[i].elements);
          }
          this.selfSelectors = [new Selector(selfElements)];
          this.selfSelectors[0].copyVisibilityInfo(this.visibilityInfo());
      };
      return Extend;
  }(Node));
  Extend.next_id = 0;
  Extend.prototype.type = 'Extend';

  var VariableCall = /** @class */ (function (_super) {
      __extends(VariableCall, _super);
      function VariableCall(variable, index, currentFileInfo) {
          var _this = _super.call(this) || this;
          _this.variable = variable;
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.allowRoot = true;
          return _this;
      }
      VariableCall.prototype.eval = function (context) {
          var rules;
          var detachedRuleset = new Variable(this.variable, this.getIndex(), this.fileInfo()).eval(context);
          var error = new LessError({ message: "Could not evaluate variable call " + this.variable });
          if (!detachedRuleset.ruleset) {
              if (detachedRuleset.rules) {
                  rules = detachedRuleset;
              }
              else if (Array.isArray(detachedRuleset)) {
                  rules = new Ruleset('', detachedRuleset);
              }
              else if (Array.isArray(detachedRuleset.value)) {
                  rules = new Ruleset('', detachedRuleset.value);
              }
              else {
                  throw error;
              }
              detachedRuleset = new DetachedRuleset(rules);
          }
          if (detachedRuleset.ruleset) {
              return detachedRuleset.callEval(context);
          }
          throw error;
      };
      return VariableCall;
  }(Node));
  VariableCall.prototype.type = 'VariableCall';

  var NamespaceValue = /** @class */ (function (_super) {
      __extends(NamespaceValue, _super);
      function NamespaceValue(ruleCall, lookups, index, fileInfo) {
          var _this = _super.call(this) || this;
          _this.value = ruleCall;
          _this.lookups = lookups;
          _this._index = index;
          _this._fileInfo = fileInfo;
          return _this;
      }
      NamespaceValue.prototype.eval = function (context) {
          var i;
          var name;
          var rules = this.value.eval(context);
          for (i = 0; i < this.lookups.length; i++) {
              name = this.lookups[i];
              /**
               * Eval'd DRs return rulesets.
               * Eval'd mixins return rules, so let's make a ruleset if we need it.
               * We need to do this because of late parsing of values
               */
              if (Array.isArray(rules)) {
                  rules = new Ruleset([new Selector()], rules);
              }
              if (name === '') {
                  rules = rules.lastDeclaration();
              }
              else if (name.charAt(0) === '@') {
                  if (name.charAt(1) === '@') {
                      name = "@" + new Variable(name.substr(1)).eval(context).value;
                  }
                  if (rules.variables) {
                      rules = rules.variable(name);
                  }
                  if (!rules) {
                      throw { type: 'Name',
                          message: "variable " + name + " not found",
                          filename: this.fileInfo().filename,
                          index: this.getIndex() };
                  }
              }
              else {
                  if (name.substring(0, 2) === '$@') {
                      name = "$" + new Variable(name.substr(1)).eval(context).value;
                  }
                  else {
                      name = name.charAt(0) === '$' ? name : "$" + name;
                  }
                  if (rules.properties) {
                      rules = rules.property(name);
                  }
                  if (!rules) {
                      throw { type: 'Name',
                          message: "property \"" + name.substr(1) + "\" not found",
                          filename: this.fileInfo().filename,
                          index: this.getIndex() };
                  }
                  // Properties are an array of values, since a ruleset can have multiple props.
                  // We pick the last one (the "cascaded" value)
                  rules = rules[rules.length - 1];
              }
              if (rules.value) {
                  rules = rules.eval(context).value;
              }
              if (rules.ruleset) {
                  rules = rules.ruleset.eval(context);
              }
          }
          return rules;
      };
      return NamespaceValue;
  }(Node));
  NamespaceValue.prototype.type = 'NamespaceValue';

  var Definition = /** @class */ (function (_super) {
      __extends(Definition, _super);
      function Definition(name, params, rules, condition, variadic, frames, visibilityInfo) {
          var _this = _super.call(this) || this;
          _this.name = name || 'anonymous mixin';
          _this.selectors = [new Selector([new Element(null, name, false, _this._index, _this._fileInfo)])];
          _this.params = params;
          _this.condition = condition;
          _this.variadic = variadic;
          _this.arity = params.length;
          _this.rules = rules;
          _this._lookups = {};
          var optionalParameters = [];
          _this.required = params.reduce(function (count, p) {
              if (!p.name || (p.name && !p.value)) {
                  return count + 1;
              }
              else {
                  optionalParameters.push(p.name);
                  return count;
              }
          }, 0);
          _this.optionalParameters = optionalParameters;
          _this.frames = frames;
          _this.copyVisibilityInfo(visibilityInfo);
          _this.allowRoot = true;
          return _this;
      }
      Definition.prototype.accept = function (visitor) {
          if (this.params && this.params.length) {
              this.params = visitor.visitArray(this.params);
          }
          this.rules = visitor.visitArray(this.rules);
          if (this.condition) {
              this.condition = visitor.visit(this.condition);
          }
      };
      Definition.prototype.evalParams = function (context, mixinEnv, args, evaldArguments) {
          /* jshint boss:true */
          var frame = new Ruleset(null, null);
          var varargs;
          var arg;
          var params = copyArray(this.params);
          var i;
          var j;
          var val;
          var name;
          var isNamedFound;
          var argIndex;
          var argsLength = 0;
          if (mixinEnv.frames && mixinEnv.frames[0] && mixinEnv.frames[0].functionRegistry) {
              frame.functionRegistry = mixinEnv.frames[0].functionRegistry.inherit();
          }
          mixinEnv = new contexts.Eval(mixinEnv, [frame].concat(mixinEnv.frames));
          if (args) {
              args = copyArray(args);
              argsLength = args.length;
              for (i = 0; i < argsLength; i++) {
                  arg = args[i];
                  if (name = (arg && arg.name)) {
                      isNamedFound = false;
                      for (j = 0; j < params.length; j++) {
                          if (!evaldArguments[j] && name === params[j].name) {
                              evaldArguments[j] = arg.value.eval(context);
                              frame.prependRule(new Declaration(name, arg.value.eval(context)));
                              isNamedFound = true;
                              break;
                          }
                      }
                      if (isNamedFound) {
                          args.splice(i, 1);
                          i--;
                          continue;
                      }
                      else {
                          throw { type: 'Runtime', message: "Named argument for " + this.name + " " + args[i].name + " not found" };
                      }
                  }
              }
          }
          argIndex = 0;
          for (i = 0; i < params.length; i++) {
              if (evaldArguments[i]) {
                  continue;
              }
              arg = args && args[argIndex];
              if (name = params[i].name) {
                  if (params[i].variadic) {
                      varargs = [];
                      for (j = argIndex; j < argsLength; j++) {
                          varargs.push(args[j].value.eval(context));
                      }
                      frame.prependRule(new Declaration(name, new Expression(varargs).eval(context)));
                  }
                  else {
                      val = arg && arg.value;
                      if (val) {
                          // This was a mixin call, pass in a detached ruleset of it's eval'd rules
                          if (Array.isArray(val)) {
                              val = new DetachedRuleset(new Ruleset('', val));
                          }
                          else {
                              val = val.eval(context);
                          }
                      }
                      else if (params[i].value) {
                          val = params[i].value.eval(mixinEnv);
                          frame.resetCache();
                      }
                      else {
                          throw { type: 'Runtime', message: "wrong number of arguments for " + this.name + " (" + argsLength + " for " + this.arity + ")" };
                      }
                      frame.prependRule(new Declaration(name, val));
                      evaldArguments[i] = val;
                  }
              }
              if (params[i].variadic && args) {
                  for (j = argIndex; j < argsLength; j++) {
                      evaldArguments[j] = args[j].value.eval(context);
                  }
              }
              argIndex++;
          }
          return frame;
      };
      Definition.prototype.makeImportant = function () {
          var rules = !this.rules ? this.rules : this.rules.map(function (r) {
              if (r.makeImportant) {
                  return r.makeImportant(true);
              }
              else {
                  return r;
              }
          });
          var result = new Definition(this.name, this.params, rules, this.condition, this.variadic, this.frames);
          return result;
      };
      Definition.prototype.eval = function (context) {
          return new Definition(this.name, this.params, this.rules, this.condition, this.variadic, this.frames || copyArray(context.frames));
      };
      Definition.prototype.evalCall = function (context, args, important) {
          var _arguments = [];
          var mixinFrames = this.frames ? this.frames.concat(context.frames) : context.frames;
          var frame = this.evalParams(context, new contexts.Eval(context, mixinFrames), args, _arguments);
          var rules;
          var ruleset;
          frame.prependRule(new Declaration('@arguments', new Expression(_arguments).eval(context)));
          rules = copyArray(this.rules);
          ruleset = new Ruleset(null, rules);
          ruleset.originalRuleset = this;
          ruleset = ruleset.eval(new contexts.Eval(context, [this, frame].concat(mixinFrames)));
          if (important) {
              ruleset = ruleset.makeImportant();
          }
          return ruleset;
      };
      Definition.prototype.matchCondition = function (args, context) {
          if (this.condition && !this.condition.eval(new contexts.Eval(context, [this.evalParams(context, /* the parameter variables */ new contexts.Eval(context, this.frames ? this.frames.concat(context.frames) : context.frames), args, [])]
              .concat(this.frames || []) // the parent namespace/mixin frames
              .concat(context.frames)))) { // the current environment frames
              return false;
          }
          return true;
      };
      Definition.prototype.matchArgs = function (args, context) {
          var allArgsCnt = (args && args.length) || 0;
          var len;
          var optionalParameters = this.optionalParameters;
          var requiredArgsCnt = !args ? 0 : args.reduce(function (count, p) {
              if (optionalParameters.indexOf(p.name) < 0) {
                  return count + 1;
              }
              else {
                  return count;
              }
          }, 0);
          if (!this.variadic) {
              if (requiredArgsCnt < this.required) {
                  return false;
              }
              if (allArgsCnt > this.params.length) {
                  return false;
              }
          }
          else {
              if (requiredArgsCnt < (this.required - 1)) {
                  return false;
              }
          }
          // check patterns
          len = Math.min(requiredArgsCnt, this.arity);
          for (var i_1 = 0; i_1 < len; i_1++) {
              if (!this.params[i_1].name && !this.params[i_1].variadic) {
                  if (args[i_1].value.eval(context).toCSS() != this.params[i_1].value.eval(context).toCSS()) {
                      return false;
                  }
              }
          }
          return true;
      };
      return Definition;
  }(Ruleset));
  Definition.prototype.type = 'MixinDefinition';
  Definition.prototype.evalFirst = true;

  var MixinCall = /** @class */ (function (_super) {
      __extends(MixinCall, _super);
      function MixinCall(elements, args, index, currentFileInfo, important) {
          var _this = _super.call(this) || this;
          _this.selector = new Selector(elements);
          _this.arguments = args || [];
          _this._index = index;
          _this._fileInfo = currentFileInfo;
          _this.important = important;
          _this.allowRoot = true;
          _this.setParent(_this.selector, _this);
          return _this;
      }
      MixinCall.prototype.accept = function (visitor) {
          if (this.selector) {
              this.selector = visitor.visit(this.selector);
          }
          if (this.arguments.length) {
              this.arguments = visitor.visitArray(this.arguments);
          }
      };
      MixinCall.prototype.eval = function (context) {
          var mixins;
          var mixin;
          var mixinPath;
          var args = [];
          var arg;
          var argValue;
          var rules = [];
          var match = false;
          var i;
          var m;
          var f;
          var isRecursive;
          var isOneFound;
          var candidates = [];
          var candidate;
          var conditionResult = [];
          var defaultResult;
          var defFalseEitherCase = -1;
          var defNone = 0;
          var defTrue = 1;
          var defFalse = 2;
          var count;
          var originalRuleset;
          var noArgumentsFilter;
          this.selector = this.selector.eval(context);
          function calcDefGroup(mixin, mixinPath) {
              var f;
              var p;
              var namespace;
              for (f = 0; f < 2; f++) {
                  conditionResult[f] = true;
                  defaultFunc.value(f);
                  for (p = 0; p < mixinPath.length && conditionResult[f]; p++) {
                      namespace = mixinPath[p];
                      if (namespace.matchCondition) {
                          conditionResult[f] = conditionResult[f] && namespace.matchCondition(null, context);
                      }
                  }
                  if (mixin.matchCondition) {
                      conditionResult[f] = conditionResult[f] && mixin.matchCondition(args, context);
                  }
              }
              if (conditionResult[0] || conditionResult[1]) {
                  if (conditionResult[0] != conditionResult[1]) {
                      return conditionResult[1] ?
                          defTrue : defFalse;
                  }
                  return defNone;
              }
              return defFalseEitherCase;
          }
          for (i = 0; i < this.arguments.length; i++) {
              arg = this.arguments[i];
              argValue = arg.value.eval(context);
              if (arg.expand && Array.isArray(argValue.value)) {
                  argValue = argValue.value;
                  for (m = 0; m < argValue.length; m++) {
                      args.push({ value: argValue[m] });
                  }
              }
              else {
                  args.push({ name: arg.name, value: argValue });
              }
          }
          noArgumentsFilter = function (rule) { return rule.matchArgs(null, context); };
          for (i = 0; i < context.frames.length; i++) {
              if ((mixins = context.frames[i].find(this.selector, null, noArgumentsFilter)).length > 0) {
                  isOneFound = true;
                  // To make `default()` function independent of definition order we have two "subpasses" here.
                  // At first we evaluate each guard *twice* (with `default() == true` and `default() == false`),
                  // and build candidate list with corresponding flags. Then, when we know all possible matches,
                  // we make a final decision.
                  for (m = 0; m < mixins.length; m++) {
                      mixin = mixins[m].rule;
                      mixinPath = mixins[m].path;
                      isRecursive = false;
                      for (f = 0; f < context.frames.length; f++) {
                          if ((!(mixin instanceof Definition)) && mixin === (context.frames[f].originalRuleset || context.frames[f])) {
                              isRecursive = true;
                              break;
                          }
                      }
                      if (isRecursive) {
                          continue;
                      }
                      if (mixin.matchArgs(args, context)) {
                          candidate = { mixin: mixin, group: calcDefGroup(mixin, mixinPath) };
                          if (candidate.group !== defFalseEitherCase) {
                              candidates.push(candidate);
                          }
                          match = true;
                      }
                  }
                  defaultFunc.reset();
                  count = [0, 0, 0];
                  for (m = 0; m < candidates.length; m++) {
                      count[candidates[m].group]++;
                  }
                  if (count[defNone] > 0) {
                      defaultResult = defFalse;
                  }
                  else {
                      defaultResult = defTrue;
                      if ((count[defTrue] + count[defFalse]) > 1) {
                          throw { type: 'Runtime',
                              message: "Ambiguous use of `default()` found when matching for `" + this.format(args) + "`",
                              index: this.getIndex(), filename: this.fileInfo().filename };
                      }
                  }
                  for (m = 0; m < candidates.length; m++) {
                      candidate = candidates[m].group;
                      if ((candidate === defNone) || (candidate === defaultResult)) {
                          try {
                              mixin = candidates[m].mixin;
                              if (!(mixin instanceof Definition)) {
                                  originalRuleset = mixin.originalRuleset || mixin;
                                  mixin = new Definition('', [], mixin.rules, null, false, null, originalRuleset.visibilityInfo());
                                  mixin.originalRuleset = originalRuleset;
                              }
                              var newRules = mixin.evalCall(context, args, this.important).rules;
                              this._setVisibilityToReplacement(newRules);
                              Array.prototype.push.apply(rules, newRules);
                          }
                          catch (e) {
                              throw { message: e.message, index: this.getIndex(), filename: this.fileInfo().filename, stack: e.stack };
                          }
                      }
                  }
                  if (match) {
                      return rules;
                  }
              }
          }
          if (isOneFound) {
              throw { type: 'Runtime',
                  message: "No matching definition was found for `" + this.format(args) + "`",
                  index: this.getIndex(), filename: this.fileInfo().filename };
          }
          else {
              throw { type: 'Name',
                  message: this.selector.toCSS().trim() + " is undefined",
                  index: this.getIndex(), filename: this.fileInfo().filename };
          }
      };
      MixinCall.prototype._setVisibilityToReplacement = function (replacement) {
          var i;
          var rule;
          if (this.blocksVisibility()) {
              for (i = 0; i < replacement.length; i++) {
                  rule = replacement[i];
                  rule.addVisibilityBlock();
              }
          }
      };
      MixinCall.prototype.format = function (args) {
          return this.selector.toCSS().trim() + "(" + (args ? args.map(function (a) {
              var argValue = '';
              if (a.name) {
                  argValue += a.name + ":";
              }
              if (a.value.toCSS) {
                  argValue += a.value.toCSS();
              }
              else {
                  argValue += '???';
              }
              return argValue;
          }).join(', ') : '') + ")";
      };
      return MixinCall;
  }(Node));
  MixinCall.prototype.type = 'MixinCall';

  var tree = {
      Node: Node, Color: Color, AtRule: AtRule, DetachedRuleset: DetachedRuleset, Operation: Operation,
      Dimension: Dimension, Unit: Unit, Keyword: Keyword, Variable: Variable, Property: Property,
      Ruleset: Ruleset, Element: Element, Attribute: Attribute, Combinator: Combinator, Selector: Selector,
      Quoted: Quoted, Expression: Expression, Declaration: Declaration, Call: Call, URL: URL, Import: Import,
      Comment: Comment, Anonymous: Anonymous, Value: Value, JavaScript: JavaScript, Assignment: Assignment,
      Condition: Condition, Paren: Paren, Media: Media, UnicodeDescriptor: UnicodeDescriptor, Negative: Negative,
      Extend: Extend, VariableCall: VariableCall, NamespaceValue: NamespaceValue,
      mixin: {
          Call: MixinCall,
          Definition: Definition
      }
  };

  var logger = {
      error: function (msg) {
          this._fireEvent('error', msg);
      },
      warn: function (msg) {
          this._fireEvent('warn', msg);
      },
      info: function (msg) {
          this._fireEvent('info', msg);
      },
      debug: function (msg) {
          this._fireEvent('debug', msg);
      },
      addListener: function (listener) {
          this._listeners.push(listener);
      },
      removeListener: function (listener) {
          for (var i_1 = 0; i_1 < this._listeners.length; i_1++) {
              if (this._listeners[i_1] === listener) {
                  this._listeners.splice(i_1, 1);
                  return;
              }
          }
      },
      _fireEvent: function (type, msg) {
          for (var i_2 = 0; i_2 < this._listeners.length; i_2++) {
              var logFunction = this._listeners[i_2][type];
              if (logFunction) {
                  logFunction(msg);
              }
          }
      },
      _listeners: []
  };

  /**
   * @todo Document why this abstraction exists, and the relationship between
   *       environment, file managers, and plugin manager
   */
  var environment = /** @class */ (function () {
      function environment(externalEnvironment, fileManagers) {
          this.fileManagers = fileManagers || [];
          externalEnvironment = externalEnvironment || {};
          var optionalFunctions = ['encodeBase64', 'mimeLookup', 'charsetLookup', 'getSourceMapGenerator'];
          var requiredFunctions = [];
          var functions = requiredFunctions.concat(optionalFunctions);
          for (var i_1 = 0; i_1 < functions.length; i_1++) {
              var propName = functions[i_1];
              var environmentFunc = externalEnvironment[propName];
              if (environmentFunc) {
                  this[propName] = environmentFunc.bind(externalEnvironment);
              }
              else if (i_1 < requiredFunctions.length) {
                  this.warn("missing required function in environment - " + propName);
              }
          }
      }
      environment.prototype.getFileManager = function (filename, currentDirectory, options, environment, isSync) {
          if (!filename) {
              logger.warn('getFileManager called with no filename.. Please report this issue. continuing.');
          }
          if (currentDirectory == null) {
              logger.warn('getFileManager called with null directory.. Please report this issue. continuing.');
          }
          var fileManagers = this.fileManagers;
          if (options.pluginManager) {
              fileManagers = [].concat(fileManagers).concat(options.pluginManager.getFileManagers());
          }
          for (var i_2 = fileManagers.length - 1; i_2 >= 0; i_2--) {
              var fileManager = fileManagers[i_2];
              if (fileManager[isSync ? 'supportsSync' : 'supports'](filename, currentDirectory, options, environment)) {
                  return fileManager;
              }
          }
          return null;
      };
      environment.prototype.addFileManager = function (fileManager) {
          this.fileManagers.push(fileManager);
      };
      environment.prototype.clearFileManagers = function () {
          this.fileManagers = [];
      };
      return environment;
  }());

  var AbstractFileManager = /** @class */ (function () {
      function AbstractFileManager() {
      }
      AbstractFileManager.prototype.getPath = function (filename) {
          var j = filename.lastIndexOf('?');
          if (j > 0) {
              filename = filename.slice(0, j);
          }
          j = filename.lastIndexOf('/');
          if (j < 0) {
              j = filename.lastIndexOf('\\');
          }
          if (j < 0) {
              return '';
          }
          return filename.slice(0, j + 1);
      };
      AbstractFileManager.prototype.tryAppendExtension = function (path, ext) {
          return /(\.[a-z]*$)|([\?;].*)$/.test(path) ? path : path + ext;
      };
      AbstractFileManager.prototype.tryAppendLessExtension = function (path) {
          return this.tryAppendExtension(path, '.less');
      };
      AbstractFileManager.prototype.supportsSync = function () { return false; };
      AbstractFileManager.prototype.alwaysMakePathsAbsolute = function () { return false; };
      AbstractFileManager.prototype.isPathAbsolute = function (filename) {
          return (/^(?:[a-z-]+:|\/|\\|#)/i).test(filename);
      };
      // TODO: pull out / replace?
      AbstractFileManager.prototype.join = function (basePath, laterPath) {
          if (!basePath) {
              return laterPath;
          }
          return basePath + laterPath;
      };
      AbstractFileManager.prototype.pathDiff = function (url, baseUrl) {
          // diff between two paths to create a relative path
          var urlParts = this.extractUrlParts(url);
          var baseUrlParts = this.extractUrlParts(baseUrl);
          var i;
          var max;
          var urlDirectories;
          var baseUrlDirectories;
          var diff = '';
          if (urlParts.hostPart !== baseUrlParts.hostPart) {
              return '';
          }
          max = Math.max(baseUrlParts.directories.length, urlParts.directories.length);
          for (i = 0; i < max; i++) {
              if (baseUrlParts.directories[i] !== urlParts.directories[i]) {
                  break;
              }
          }
          baseUrlDirectories = baseUrlParts.directories.slice(i);
          urlDirectories = urlParts.directories.slice(i);
          for (i = 0; i < baseUrlDirectories.length - 1; i++) {
              diff += '../';
          }
          for (i = 0; i < urlDirectories.length - 1; i++) {
              diff += urlDirectories[i] + "/";
          }
          return diff;
      };
      // helper function, not part of API
      AbstractFileManager.prototype.extractUrlParts = function (url, baseUrl) {
          // urlParts[1] = protocol://hostname/ OR /
          // urlParts[2] = / if path relative to host base
          // urlParts[3] = directories
          // urlParts[4] = filename
          // urlParts[5] = parameters
          var urlPartsRegex = /^((?:[a-z-]+:)?\/{2}(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i;
          var urlParts = url.match(urlPartsRegex);
          var returner = {};
          var rawDirectories = [];
          var directories = [];
          var i;
          var baseUrlParts;
          if (!urlParts) {
              throw new Error("Could not parse sheet href - '" + url + "'");
          }
          // Stylesheets in IE don't always return the full path
          if (baseUrl && (!urlParts[1] || urlParts[2])) {
              baseUrlParts = baseUrl.match(urlPartsRegex);
              if (!baseUrlParts) {
                  throw new Error("Could not parse page url - '" + baseUrl + "'");
              }
              urlParts[1] = urlParts[1] || baseUrlParts[1] || '';
              if (!urlParts[2]) {
                  urlParts[3] = baseUrlParts[3] + urlParts[3];
              }
          }
          if (urlParts[3]) {
              rawDirectories = urlParts[3].replace(/\\/g, '/').split('/');
              // collapse '..' and skip '.'
              for (i = 0; i < rawDirectories.length; i++) {
                  if (rawDirectories[i] === '..') {
                      directories.pop();
                  }
                  else if (rawDirectories[i] !== '.') {
                      directories.push(rawDirectories[i]);
                  }
              }
          }
          returner.hostPart = urlParts[1];
          returner.directories = directories;
          returner.rawPath = (urlParts[1] || '') + rawDirectories.join('/');
          returner.path = (urlParts[1] || '') + directories.join('/');
          returner.filename = urlParts[4];
          returner.fileUrl = returner.path + (urlParts[4] || '');
          returner.url = returner.fileUrl + (urlParts[5] || '');
          return returner;
      };
      return AbstractFileManager;
  }());

  var AbstractPluginLoader = /** @class */ (function () {
      function AbstractPluginLoader() {
          // Implemented by Node.js plugin loader
          this.require = function () { return null; };
      }
      AbstractPluginLoader.prototype.evalPlugin = function (contents, context, imports, pluginOptions, fileInfo) {
          var loader;
          var registry;
          var pluginObj;
          var localModule;
          var pluginManager;
          var filename;
          var result;
          pluginManager = context.pluginManager;
          if (fileInfo) {
              if (typeof fileInfo === 'string') {
                  filename = fileInfo;
              }
              else {
                  filename = fileInfo.filename;
              }
          }
          var shortname = (new this.less.FileManager()).extractUrlParts(filename).filename;
          if (filename) {
              pluginObj = pluginManager.get(filename);
              if (pluginObj) {
                  result = this.trySetOptions(pluginObj, filename, shortname, pluginOptions);
                  if (result) {
                      return result;
                  }
                  try {
                      if (pluginObj.use) {
                          pluginObj.use.call(this.context, pluginObj);
                      }
                  }
                  catch (e) {
                      e.message = e.message || 'Error during @plugin call';
                      return new LessError(e, imports, filename);
                  }
                  return pluginObj;
              }
          }
          localModule = {
              exports: {},
              pluginManager: pluginManager,
              fileInfo: fileInfo
          };
          registry = functionRegistry.create();
          var registerPlugin = function (obj) {
              pluginObj = obj;
          };
          try {
              loader = new Function('module', 'require', 'registerPlugin', 'functions', 'tree', 'less', 'fileInfo', contents);
              loader(localModule, this.require(filename), registerPlugin, registry, this.less.tree, this.less, fileInfo);
          }
          catch (e) {
              return new LessError(e, imports, filename);
          }
          if (!pluginObj) {
              pluginObj = localModule.exports;
          }
          pluginObj = this.validatePlugin(pluginObj, filename, shortname);
          if (pluginObj instanceof LessError) {
              return pluginObj;
          }
          if (pluginObj) {
              pluginObj.imports = imports;
              pluginObj.filename = filename;
              // For < 3.x (or unspecified minVersion) - setOptions() before install()
              if (!pluginObj.minVersion || this.compareVersion('3.0.0', pluginObj.minVersion) < 0) {
                  result = this.trySetOptions(pluginObj, filename, shortname, pluginOptions);
                  if (result) {
                      return result;
                  }
              }
              // Run on first load
              pluginManager.addPlugin(pluginObj, fileInfo.filename, registry);
              pluginObj.functions = registry.getLocalFunctions();
              // Need to call setOptions again because the pluginObj might have functions
              result = this.trySetOptions(pluginObj, filename, shortname, pluginOptions);
              if (result) {
                  return result;
              }
              // Run every @plugin call
              try {
                  if (pluginObj.use) {
                      pluginObj.use.call(this.context, pluginObj);
                  }
              }
              catch (e) {
                  e.message = e.message || 'Error during @plugin call';
                  return new LessError(e, imports, filename);
              }
          }
          else {
              return new LessError({ message: 'Not a valid plugin' }, imports, filename);
          }
          return pluginObj;
      };
      AbstractPluginLoader.prototype.trySetOptions = function (plugin, filename, name, options) {
          if (options && !plugin.setOptions) {
              return new LessError({
                  message: "Options have been provided but the plugin " + name + " does not support any options."
              });
          }
          try {
              plugin.setOptions && plugin.setOptions(options);
          }
          catch (e) {
              return new LessError(e);
          }
      };
      AbstractPluginLoader.prototype.validatePlugin = function (plugin, filename, name) {
          if (plugin) {
              // support plugins being a function
              // so that the plugin can be more usable programmatically
              if (typeof plugin === 'function') {
                  plugin = new plugin();
              }
              if (plugin.minVersion) {
                  if (this.compareVersion(plugin.minVersion, this.less.version) < 0) {
                      return new LessError({
                          message: "Plugin " + name + " requires version " + this.versionToString(plugin.minVersion)
                      });
                  }
              }
              return plugin;
          }
          return null;
      };
      AbstractPluginLoader.prototype.compareVersion = function (aVersion, bVersion) {
          if (typeof aVersion === 'string') {
              aVersion = aVersion.match(/^(\d+)\.?(\d+)?\.?(\d+)?/);
              aVersion.shift();
          }
          for (var i_1 = 0; i_1 < aVersion.length; i_1++) {
              if (aVersion[i_1] !== bVersion[i_1]) {
                  return parseInt(aVersion[i_1]) > parseInt(bVersion[i_1]) ? -1 : 1;
              }
          }
          return 0;
      };
      AbstractPluginLoader.prototype.versionToString = function (version) {
          var versionString = '';
          for (var i_2 = 0; i_2 < version.length; i_2++) {
              versionString += (versionString ? '.' : '') + version[i_2];
          }
          return versionString;
      };
      AbstractPluginLoader.prototype.printUsage = function (plugins) {
          for (var i_3 = 0; i_3 < plugins.length; i_3++) {
              var plugin = plugins[i_3];
              if (plugin.printUsage) {
                  plugin.printUsage();
              }
          }
      };
      return AbstractPluginLoader;
  }());

  var _visitArgs = { visitDeeper: true };
  var _hasIndexed = false;
  function _noop(node) {
      return node;
  }
  function indexNodeTypes(parent, ticker) {
      // add .typeIndex to tree node types for lookup table
      var key;
      var child;
      for (key in parent) {
          /* eslint guard-for-in: 0 */
          child = parent[key];
          switch (typeof child) {
              case 'function':
                  // ignore bound functions directly on tree which do not have a prototype
                  // or aren't nodes
                  if (child.prototype && child.prototype.type) {
                      child.prototype.typeIndex = ticker++;
                  }
                  break;
              case 'object':
                  ticker = indexNodeTypes(child, ticker);
                  break;
          }
      }
      return ticker;
  }
  var Visitor = /** @class */ (function () {
      function Visitor(implementation) {
          this._implementation = implementation;
          this._visitInCache = {};
          this._visitOutCache = {};
          if (!_hasIndexed) {
              indexNodeTypes(tree, 1);
              _hasIndexed = true;
          }
      }
      Visitor.prototype.visit = function (node) {
          if (!node) {
              return node;
          }
          var nodeTypeIndex = node.typeIndex;
          if (!nodeTypeIndex) {
              // MixinCall args aren't a node type?
              if (node.value && node.value.typeIndex) {
                  this.visit(node.value);
              }
              return node;
          }
          var impl = this._implementation;
          var func = this._visitInCache[nodeTypeIndex];
          var funcOut = this._visitOutCache[nodeTypeIndex];
          var visitArgs = _visitArgs;
          var fnName;
          visitArgs.visitDeeper = true;
          if (!func) {
              fnName = "visit" + node.type;
              func = impl[fnName] || _noop;
              funcOut = impl[fnName + "Out"] || _noop;
              this._visitInCache[nodeTypeIndex] = func;
              this._visitOutCache[nodeTypeIndex] = funcOut;
          }
          if (func !== _noop) {
              var newNode = func.call(impl, node, visitArgs);
              if (node && impl.isReplacing) {
                  node = newNode;
              }
          }
          if (visitArgs.visitDeeper && node) {
              if (node.length) {
                  for (var i = 0, cnt = node.length; i < cnt; i++) {
                      if (node[i].accept) {
                          node[i].accept(this);
                      }
                  }
              }
              else if (node.accept) {
                  node.accept(this);
              }
          }
          if (funcOut != _noop) {
              funcOut.call(impl, node);
          }
          return node;
      };
      Visitor.prototype.visitArray = function (nodes, nonReplacing) {
          if (!nodes) {
              return nodes;
          }
          var cnt = nodes.length;
          var i;
          // Non-replacing
          if (nonReplacing || !this._implementation.isReplacing) {
              for (i = 0; i < cnt; i++) {
                  this.visit(nodes[i]);
              }
              return nodes;
          }
          // Replacing
          var out = [];
          for (i = 0; i < cnt; i++) {
              var evald = this.visit(nodes[i]);
              if (evald === undefined) {
                  continue;
              }
              if (!evald.splice) {
                  out.push(evald);
              }
              else if (evald.length) {
                  this.flatten(evald, out);
              }
          }
          return out;
      };
      Visitor.prototype.flatten = function (arr, out) {
          if (!out) {
              out = [];
          }
          var cnt;
          var i;
          var item;
          var nestedCnt;
          var j;
          var nestedItem;
          for (i = 0, cnt = arr.length; i < cnt; i++) {
              item = arr[i];
              if (item === undefined) {
                  continue;
              }
              if (!item.splice) {
                  out.push(item);
                  continue;
              }
              for (j = 0, nestedCnt = item.length; j < nestedCnt; j++) {
                  nestedItem = item[j];
                  if (nestedItem === undefined) {
                      continue;
                  }
                  if (!nestedItem.splice) {
                      out.push(nestedItem);
                  }
                  else if (nestedItem.length) {
                      this.flatten(nestedItem, out);
                  }
              }
          }
          return out;
      };
      return Visitor;
  }());

  var ImportSequencer = /** @class */ (function () {
      function ImportSequencer(onSequencerEmpty) {
          this.imports = [];
          this.variableImports = [];
          this._onSequencerEmpty = onSequencerEmpty;
          this._currentDepth = 0;
      }
      ImportSequencer.prototype.addImport = function (callback) {
          var importSequencer = this;
          var importItem = {
              callback: callback,
              args: null,
              isReady: false
          };
          this.imports.push(importItem);
          return function () {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  args[_i] = arguments[_i];
              }
              importItem.args = Array.prototype.slice.call(args, 0);
              importItem.isReady = true;
              importSequencer.tryRun();
          };
      };
      ImportSequencer.prototype.addVariableImport = function (callback) {
          this.variableImports.push(callback);
      };
      ImportSequencer.prototype.tryRun = function () {
          this._currentDepth++;
          try {
              while (true) {
                  while (this.imports.length > 0) {
                      var importItem = this.imports[0];
                      if (!importItem.isReady) {
                          return;
                      }
                      this.imports = this.imports.slice(1);
                      importItem.callback.apply(null, importItem.args);
                  }
                  if (this.variableImports.length === 0) {
                      break;
                  }
                  var variableImport = this.variableImports[0];
                  this.variableImports = this.variableImports.slice(1);
                  variableImport();
              }
          }
          finally {
              this._currentDepth--;
          }
          if (this._currentDepth === 0 && this._onSequencerEmpty) {
              this._onSequencerEmpty();
          }
      };
      return ImportSequencer;
  }());

  var ImportVisitor = function (importer, finish) {
      this._visitor = new Visitor(this);
      this._importer = importer;
      this._finish = finish;
      this.context = new contexts.Eval();
      this.importCount = 0;
      this.onceFileDetectionMap = {};
      this.recursionDetector = {};
      this._sequencer = new ImportSequencer(this._onSequencerEmpty.bind(this));
  };
  ImportVisitor.prototype = {
      isReplacing: false,
      run: function (root) {
          try {
              // process the contents
              this._visitor.visit(root);
          }
          catch (e) {
              this.error = e;
          }
          this.isFinished = true;
          this._sequencer.tryRun();
      },
      _onSequencerEmpty: function () {
          if (!this.isFinished) {
              return;
          }
          this._finish(this.error);
      },
      visitImport: function (importNode, visitArgs) {
          var inlineCSS = importNode.options.inline;
          if (!importNode.css || inlineCSS) {
              var context = new contexts.Eval(this.context, copyArray(this.context.frames));
              var importParent = context.frames[0];
              this.importCount++;
              if (importNode.isVariableImport()) {
                  this._sequencer.addVariableImport(this.processImportNode.bind(this, importNode, context, importParent));
              }
              else {
                  this.processImportNode(importNode, context, importParent);
              }
          }
          visitArgs.visitDeeper = false;
      },
      processImportNode: function (importNode, context, importParent) {
          var evaldImportNode;
          var inlineCSS = importNode.options.inline;
          try {
              evaldImportNode = importNode.evalForImport(context);
          }
          catch (e) {
              if (!e.filename) {
                  e.index = importNode.getIndex();
                  e.filename = importNode.fileInfo().filename;
              }
              // attempt to eval properly and treat as css
              importNode.css = true;
              // if that fails, this error will be thrown
              importNode.error = e;
          }
          if (evaldImportNode && (!evaldImportNode.css || inlineCSS)) {
              if (evaldImportNode.options.multiple) {
                  context.importMultiple = true;
              }
              // try appending if we haven't determined if it is css or not
              var tryAppendLessExtension = evaldImportNode.css === undefined;
              for (var i_1 = 0; i_1 < importParent.rules.length; i_1++) {
                  if (importParent.rules[i_1] === importNode) {
                      importParent.rules[i_1] = evaldImportNode;
                      break;
                  }
              }
              var onImported = this.onImported.bind(this, evaldImportNode, context);
              var sequencedOnImported = this._sequencer.addImport(onImported);
              this._importer.push(evaldImportNode.getPath(), tryAppendLessExtension, evaldImportNode.fileInfo(), evaldImportNode.options, sequencedOnImported);
          }
          else {
              this.importCount--;
              if (this.isFinished) {
                  this._sequencer.tryRun();
              }
          }
      },
      onImported: function (importNode, context, e, root, importedAtRoot, fullPath) {
          if (e) {
              if (!e.filename) {
                  e.index = importNode.getIndex();
                  e.filename = importNode.fileInfo().filename;
              }
              this.error = e;
          }
          var importVisitor = this;
          var inlineCSS = importNode.options.inline;
          var isPlugin = importNode.options.isPlugin;
          var isOptional = importNode.options.optional;
          var duplicateImport = importedAtRoot || fullPath in importVisitor.recursionDetector;
          if (!context.importMultiple) {
              if (duplicateImport) {
                  importNode.skip = true;
              }
              else {
                  importNode.skip = function () {
                      if (fullPath in importVisitor.onceFileDetectionMap) {
                          return true;
                      }
                      importVisitor.onceFileDetectionMap[fullPath] = true;
                      return false;
                  };
              }
          }
          if (!fullPath && isOptional) {
              importNode.skip = true;
          }
          if (root) {
              importNode.root = root;
              importNode.importedFilename = fullPath;
              if (!inlineCSS && !isPlugin && (context.importMultiple || !duplicateImport)) {
                  importVisitor.recursionDetector[fullPath] = true;
                  var oldContext = this.context;
                  this.context = context;
                  try {
                      this._visitor.visit(root);
                  }
                  catch (e) {
                      this.error = e;
                  }
                  this.context = oldContext;
              }
          }
          importVisitor.importCount--;
          if (importVisitor.isFinished) {
              importVisitor._sequencer.tryRun();
          }
      },
      visitDeclaration: function (declNode, visitArgs) {
          if (declNode.value.type === 'DetachedRuleset') {
              this.context.frames.unshift(declNode);
          }
          else {
              visitArgs.visitDeeper = false;
          }
      },
      visitDeclarationOut: function (declNode) {
          if (declNode.value.type === 'DetachedRuleset') {
              this.context.frames.shift();
          }
      },
      visitAtRule: function (atRuleNode, visitArgs) {
          this.context.frames.unshift(atRuleNode);
      },
      visitAtRuleOut: function (atRuleNode) {
          this.context.frames.shift();
      },
      visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
          this.context.frames.unshift(mixinDefinitionNode);
      },
      visitMixinDefinitionOut: function (mixinDefinitionNode) {
          this.context.frames.shift();
      },
      visitRuleset: function (rulesetNode, visitArgs) {
          this.context.frames.unshift(rulesetNode);
      },
      visitRulesetOut: function (rulesetNode) {
          this.context.frames.shift();
      },
      visitMedia: function (mediaNode, visitArgs) {
          this.context.frames.unshift(mediaNode.rules[0]);
      },
      visitMediaOut: function (mediaNode) {
          this.context.frames.shift();
      }
  };

  var SetTreeVisibilityVisitor = /** @class */ (function () {
      function SetTreeVisibilityVisitor(visible) {
          this.visible = visible;
      }
      SetTreeVisibilityVisitor.prototype.run = function (root) {
          this.visit(root);
      };
      SetTreeVisibilityVisitor.prototype.visitArray = function (nodes) {
          if (!nodes) {
              return nodes;
          }
          var cnt = nodes.length;
          var i;
          for (i = 0; i < cnt; i++) {
              this.visit(nodes[i]);
          }
          return nodes;
      };
      SetTreeVisibilityVisitor.prototype.visit = function (node) {
          if (!node) {
              return node;
          }
          if (node.constructor === Array) {
              return this.visitArray(node);
          }
          if (!node.blocksVisibility || node.blocksVisibility()) {
              return node;
          }
          if (this.visible) {
              node.ensureVisibility();
          }
          else {
              node.ensureInvisibility();
          }
          node.accept(this);
          return node;
      };
      return SetTreeVisibilityVisitor;
  }());

  /* jshint loopfunc:true */
  var ExtendFinderVisitor = /** @class */ (function () {
      function ExtendFinderVisitor() {
          this._visitor = new Visitor(this);
          this.contexts = [];
          this.allExtendsStack = [[]];
      }
      ExtendFinderVisitor.prototype.run = function (root) {
          root = this._visitor.visit(root);
          root.allExtends = this.allExtendsStack[0];
          return root;
      };
      ExtendFinderVisitor.prototype.visitDeclaration = function (declNode, visitArgs) {
          visitArgs.visitDeeper = false;
      };
      ExtendFinderVisitor.prototype.visitMixinDefinition = function (mixinDefinitionNode, visitArgs) {
          visitArgs.visitDeeper = false;
      };
      ExtendFinderVisitor.prototype.visitRuleset = function (rulesetNode, visitArgs) {
          if (rulesetNode.root) {
              return;
          }
          var i;
          var j;
          var extend;
          var allSelectorsExtendList = [];
          var extendList;
          // get &:extend(.a); rules which apply to all selectors in this ruleset
          var rules = rulesetNode.rules;
          var ruleCnt = rules ? rules.length : 0;
          for (i = 0; i < ruleCnt; i++) {
              if (rulesetNode.rules[i] instanceof tree.Extend) {
                  allSelectorsExtendList.push(rules[i]);
                  rulesetNode.extendOnEveryPath = true;
              }
          }
          // now find every selector and apply the extends that apply to all extends
          // and the ones which apply to an individual extend
          var paths = rulesetNode.paths;
          for (i = 0; i < paths.length; i++) {
              var selectorPath = paths[i];
              var selector = selectorPath[selectorPath.length - 1];
              var selExtendList = selector.extendList;
              extendList = selExtendList ? copyArray(selExtendList).concat(allSelectorsExtendList)
                  : allSelectorsExtendList;
              if (extendList) {
                  extendList = extendList.map(function (allSelectorsExtend) { return allSelectorsExtend.clone(); });
              }
              for (j = 0; j < extendList.length; j++) {
                  this.foundExtends = true;
                  extend = extendList[j];
                  extend.findSelfSelectors(selectorPath);
                  extend.ruleset = rulesetNode;
                  if (j === 0) {
                      extend.firstExtendOnThisSelectorPath = true;
                  }
                  this.allExtendsStack[this.allExtendsStack.length - 1].push(extend);
              }
          }
          this.contexts.push(rulesetNode.selectors);
      };
      ExtendFinderVisitor.prototype.visitRulesetOut = function (rulesetNode) {
          if (!rulesetNode.root) {
              this.contexts.length = this.contexts.length - 1;
          }
      };
      ExtendFinderVisitor.prototype.visitMedia = function (mediaNode, visitArgs) {
          mediaNode.allExtends = [];
          this.allExtendsStack.push(mediaNode.allExtends);
      };
      ExtendFinderVisitor.prototype.visitMediaOut = function (mediaNode) {
          this.allExtendsStack.length = this.allExtendsStack.length - 1;
      };
      ExtendFinderVisitor.prototype.visitAtRule = function (atRuleNode, visitArgs) {
          atRuleNode.allExtends = [];
          this.allExtendsStack.push(atRuleNode.allExtends);
      };
      ExtendFinderVisitor.prototype.visitAtRuleOut = function (atRuleNode) {
          this.allExtendsStack.length = this.allExtendsStack.length - 1;
      };
      return ExtendFinderVisitor;
  }());
  var ProcessExtendsVisitor = /** @class */ (function () {
      function ProcessExtendsVisitor() {
          this._visitor = new Visitor(this);
      }
      ProcessExtendsVisitor.prototype.run = function (root) {
          var extendFinder = new ExtendFinderVisitor();
          this.extendIndices = {};
          extendFinder.run(root);
          if (!extendFinder.foundExtends) {
              return root;
          }
          root.allExtends = root.allExtends.concat(this.doExtendChaining(root.allExtends, root.allExtends));
          this.allExtendsStack = [root.allExtends];
          var newRoot = this._visitor.visit(root);
          this.checkExtendsForNonMatched(root.allExtends);
          return newRoot;
      };
      ProcessExtendsVisitor.prototype.checkExtendsForNonMatched = function (extendList) {
          var indices = this.extendIndices;
          extendList.filter(function (extend) { return !extend.hasFoundMatches && extend.parent_ids.length == 1; }).forEach(function (extend) {
              var selector = '_unknown_';
              try {
                  selector = extend.selector.toCSS({});
              }
              catch (_) { }
              if (!indices[extend.index + " " + selector]) {
                  indices[extend.index + " " + selector] = true;
                  logger.warn("extend '" + selector + "' has no matches");
              }
          });
      };
      ProcessExtendsVisitor.prototype.doExtendChaining = function (extendsList, extendsListTarget, iterationCount) {
          //
          // chaining is different from normal extension.. if we extend an extend then we are not just copying, altering
          // and pasting the selector we would do normally, but we are also adding an extend with the same target selector
          // this means this new extend can then go and alter other extends
          //
          // this method deals with all the chaining work - without it, extend is flat and doesn't work on other extend selectors
          // this is also the most expensive.. and a match on one selector can cause an extension of a selector we had already
          // processed if we look at each selector at a time, as is done in visitRuleset
          var extendIndex;
          var targetExtendIndex;
          var matches;
          var extendsToAdd = [];
          var newSelector;
          var extendVisitor = this;
          var selectorPath;
          var extend;
          var targetExtend;
          var newExtend;
          iterationCount = iterationCount || 0;
          // loop through comparing every extend with every target extend.
          // a target extend is the one on the ruleset we are looking at copy/edit/pasting in place
          // e.g.  .a:extend(.b) {}  and .b:extend(.c) {} then the first extend extends the second one
          // and the second is the target.
          // the separation into two lists allows us to process a subset of chains with a bigger set, as is the
          // case when processing media queries
          for (extendIndex = 0; extendIndex < extendsList.length; extendIndex++) {
              for (targetExtendIndex = 0; targetExtendIndex < extendsListTarget.length; targetExtendIndex++) {
                  extend = extendsList[extendIndex];
                  targetExtend = extendsListTarget[targetExtendIndex];
                  // look for circular references
                  if (extend.parent_ids.indexOf(targetExtend.object_id) >= 0) {
                      continue;
                  }
                  // find a match in the target extends self selector (the bit before :extend)
                  selectorPath = [targetExtend.selfSelectors[0]];
                  matches = extendVisitor.findMatch(extend, selectorPath);
                  if (matches.length) {
                      extend.hasFoundMatches = true;
                      // we found a match, so for each self selector..
                      extend.selfSelectors.forEach(function (selfSelector) {
                          var info = targetExtend.visibilityInfo();
                          // process the extend as usual
                          newSelector = extendVisitor.extendSelector(matches, selectorPath, selfSelector, extend.isVisible());
                          // but now we create a new extend from it
                          newExtend = new (tree.Extend)(targetExtend.selector, targetExtend.option, 0, targetExtend.fileInfo(), info);
                          newExtend.selfSelectors = newSelector;
                          // add the extend onto the list of extends for that selector
                          newSelector[newSelector.length - 1].extendList = [newExtend];
                          // record that we need to add it.
                          extendsToAdd.push(newExtend);
                          newExtend.ruleset = targetExtend.ruleset;
                          // remember its parents for circular references
                          newExtend.parent_ids = newExtend.parent_ids.concat(targetExtend.parent_ids, extend.parent_ids);
                          // only process the selector once.. if we have :extend(.a,.b) then multiple
                          // extends will look at the same selector path, so when extending
                          // we know that any others will be duplicates in terms of what is added to the css
                          if (targetExtend.firstExtendOnThisSelectorPath) {
                              newExtend.firstExtendOnThisSelectorPath = true;
                              targetExtend.ruleset.paths.push(newSelector);
                          }
                      });
                  }
              }
          }
          if (extendsToAdd.length) {
              // try to detect circular references to stop a stack overflow.
              // may no longer be needed.
              this.extendChainCount++;
              if (iterationCount > 100) {
                  var selectorOne = '{unable to calculate}';
                  var selectorTwo = '{unable to calculate}';
                  try {
                      selectorOne = extendsToAdd[0].selfSelectors[0].toCSS();
                      selectorTwo = extendsToAdd[0].selector.toCSS();
                  }
                  catch (e) { }
                  throw { message: "extend circular reference detected. One of the circular extends is currently:" + selectorOne + ":extend(" + selectorTwo + ")" };
              }
              // now process the new extends on the existing rules so that we can handle a extending b extending c extending
              // d extending e...
              return extendsToAdd.concat(extendVisitor.doExtendChaining(extendsToAdd, extendsListTarget, iterationCount + 1));
          }
          else {
              return extendsToAdd;
          }
      };
      ProcessExtendsVisitor.prototype.visitDeclaration = function (ruleNode, visitArgs) {
          visitArgs.visitDeeper = false;
      };
      ProcessExtendsVisitor.prototype.visitMixinDefinition = function (mixinDefinitionNode, visitArgs) {
          visitArgs.visitDeeper = false;
      };
      ProcessExtendsVisitor.prototype.visitSelector = function (selectorNode, visitArgs) {
          visitArgs.visitDeeper = false;
      };
      ProcessExtendsVisitor.prototype.visitRuleset = function (rulesetNode, visitArgs) {
          if (rulesetNode.root) {
              return;
          }
          var matches;
          var pathIndex;
          var extendIndex;
          var allExtends = this.allExtendsStack[this.allExtendsStack.length - 1];
          var selectorsToAdd = [];
          var extendVisitor = this;
          var selectorPath;
          // look at each selector path in the ruleset, find any extend matches and then copy, find and replace
          for (extendIndex = 0; extendIndex < allExtends.length; extendIndex++) {
              for (pathIndex = 0; pathIndex < rulesetNode.paths.length; pathIndex++) {
                  selectorPath = rulesetNode.paths[pathIndex];
                  // extending extends happens initially, before the main pass
                  if (rulesetNode.extendOnEveryPath) {
                      continue;
                  }
                  var extendList = selectorPath[selectorPath.length - 1].extendList;
                  if (extendList && extendList.length) {
                      continue;
                  }
                  matches = this.findMatch(allExtends[extendIndex], selectorPath);
                  if (matches.length) {
                      allExtends[extendIndex].hasFoundMatches = true;
                      allExtends[extendIndex].selfSelectors.forEach(function (selfSelector) {
                          var extendedSelectors;
                          extendedSelectors = extendVisitor.extendSelector(matches, selectorPath, selfSelector, allExtends[extendIndex].isVisible());
                          selectorsToAdd.push(extendedSelectors);
                      });
                  }
              }
          }
          rulesetNode.paths = rulesetNode.paths.concat(selectorsToAdd);
      };
      ProcessExtendsVisitor.prototype.findMatch = function (extend, haystackSelectorPath) {
          //
          // look through the haystack selector path to try and find the needle - extend.selector
          // returns an array of selector matches that can then be replaced
          //
          var haystackSelectorIndex;
          var hackstackSelector;
          var hackstackElementIndex;
          var haystackElement;
          var targetCombinator;
          var i;
          var extendVisitor = this;
          var needleElements = extend.selector.elements;
          var potentialMatches = [];
          var potentialMatch;
          var matches = [];
          // loop through the haystack elements
          for (haystackSelectorIndex = 0; haystackSelectorIndex < haystackSelectorPath.length; haystackSelectorIndex++) {
              hackstackSelector = haystackSelectorPath[haystackSelectorIndex];
              for (hackstackElementIndex = 0; hackstackElementIndex < hackstackSelector.elements.length; hackstackElementIndex++) {
                  haystackElement = hackstackSelector.elements[hackstackElementIndex];
                  // if we allow elements before our match we can add a potential match every time. otherwise only at the first element.
                  if (extend.allowBefore || (haystackSelectorIndex === 0 && hackstackElementIndex === 0)) {
                      potentialMatches.push({ pathIndex: haystackSelectorIndex, index: hackstackElementIndex, matched: 0,
                          initialCombinator: haystackElement.combinator });
                  }
                  for (i = 0; i < potentialMatches.length; i++) {
                      potentialMatch = potentialMatches[i];
                      // selectors add " " onto the first element. When we use & it joins the selectors together, but if we don't
                      // then each selector in haystackSelectorPath has a space before it added in the toCSS phase. so we need to
                      // work out what the resulting combinator will be
                      targetCombinator = haystackElement.combinator.value;
                      if (targetCombinator === '' && hackstackElementIndex === 0) {
                          targetCombinator = ' ';
                      }
                      // if we don't match, null our match to indicate failure
                      if (!extendVisitor.isElementValuesEqual(needleElements[potentialMatch.matched].value, haystackElement.value) ||
                          (potentialMatch.matched > 0 && needleElements[potentialMatch.matched].combinator.value !== targetCombinator)) {
                          potentialMatch = null;
                      }
                      else {
                          potentialMatch.matched++;
                      }
                      // if we are still valid and have finished, test whether we have elements after and whether these are allowed
                      if (potentialMatch) {
                          potentialMatch.finished = potentialMatch.matched === needleElements.length;
                          if (potentialMatch.finished &&
                              (!extend.allowAfter &&
                                  (hackstackElementIndex + 1 < hackstackSelector.elements.length || haystackSelectorIndex + 1 < haystackSelectorPath.length))) {
                              potentialMatch = null;
                          }
                      }
                      // if null we remove, if not, we are still valid, so either push as a valid match or continue
                      if (potentialMatch) {
                          if (potentialMatch.finished) {
                              potentialMatch.length = needleElements.length;
                              potentialMatch.endPathIndex = haystackSelectorIndex;
                              potentialMatch.endPathElementIndex = hackstackElementIndex + 1; // index after end of match
                              potentialMatches.length = 0; // we don't allow matches to overlap, so start matching again
                              matches.push(potentialMatch);
                          }
                      }
                      else {
                          potentialMatches.splice(i, 1);
                          i--;
                      }
                  }
              }
          }
          return matches;
      };
      ProcessExtendsVisitor.prototype.isElementValuesEqual = function (elementValue1, elementValue2) {
          if (typeof elementValue1 === 'string' || typeof elementValue2 === 'string') {
              return elementValue1 === elementValue2;
          }
          if (elementValue1 instanceof tree.Attribute) {
              if (elementValue1.op !== elementValue2.op || elementValue1.key !== elementValue2.key) {
                  return false;
              }
              if (!elementValue1.value || !elementValue2.value) {
                  if (elementValue1.value || elementValue2.value) {
                      return false;
                  }
                  return true;
              }
              elementValue1 = elementValue1.value.value || elementValue1.value;
              elementValue2 = elementValue2.value.value || elementValue2.value;
              return elementValue1 === elementValue2;
          }
          elementValue1 = elementValue1.value;
          elementValue2 = elementValue2.value;
          if (elementValue1 instanceof tree.Selector) {
              if (!(elementValue2 instanceof tree.Selector) || elementValue1.elements.length !== elementValue2.elements.length) {
                  return false;
              }
              for (var i_1 = 0; i_1 < elementValue1.elements.length; i_1++) {
                  if (elementValue1.elements[i_1].combinator.value !== elementValue2.elements[i_1].combinator.value) {
                      if (i_1 !== 0 || (elementValue1.elements[i_1].combinator.value || ' ') !== (elementValue2.elements[i_1].combinator.value || ' ')) {
                          return false;
                      }
                  }
                  if (!this.isElementValuesEqual(elementValue1.elements[i_1].value, elementValue2.elements[i_1].value)) {
                      return false;
                  }
              }
              return true;
          }
          return false;
      };
      ProcessExtendsVisitor.prototype.extendSelector = function (matches, selectorPath, replacementSelector, isVisible) {
          // for a set of matches, replace each match with the replacement selector
          var currentSelectorPathIndex = 0;
          var currentSelectorPathElementIndex = 0;
          var path = [];
          var matchIndex;
          var selector;
          var firstElement;
          var match;
          var newElements;
          for (matchIndex = 0; matchIndex < matches.length; matchIndex++) {
              match = matches[matchIndex];
              selector = selectorPath[match.pathIndex];
              firstElement = new tree.Element(match.initialCombinator, replacementSelector.elements[0].value, replacementSelector.elements[0].isVariable, replacementSelector.elements[0].getIndex(), replacementSelector.elements[0].fileInfo());
              if (match.pathIndex > currentSelectorPathIndex && currentSelectorPathElementIndex > 0) {
                  path[path.length - 1].elements = path[path.length - 1]
                      .elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
                  currentSelectorPathElementIndex = 0;
                  currentSelectorPathIndex++;
              }
              newElements = selector.elements
                  .slice(currentSelectorPathElementIndex, match.index)
                  .concat([firstElement])
                  .concat(replacementSelector.elements.slice(1));
              if (currentSelectorPathIndex === match.pathIndex && matchIndex > 0) {
                  path[path.length - 1].elements =
                      path[path.length - 1].elements.concat(newElements);
              }
              else {
                  path = path.concat(selectorPath.slice(currentSelectorPathIndex, match.pathIndex));
                  path.push(new tree.Selector(newElements));
              }
              currentSelectorPathIndex = match.endPathIndex;
              currentSelectorPathElementIndex = match.endPathElementIndex;
              if (currentSelectorPathElementIndex >= selectorPath[currentSelectorPathIndex].elements.length) {
                  currentSelectorPathElementIndex = 0;
                  currentSelectorPathIndex++;
              }
          }
          if (currentSelectorPathIndex < selectorPath.length && currentSelectorPathElementIndex > 0) {
              path[path.length - 1].elements = path[path.length - 1]
                  .elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
              currentSelectorPathIndex++;
          }
          path = path.concat(selectorPath.slice(currentSelectorPathIndex, selectorPath.length));
          path = path.map(function (currentValue) {
              // we can re-use elements here, because the visibility property matters only for selectors
              var derived = currentValue.createDerived(currentValue.elements);
              if (isVisible) {
                  derived.ensureVisibility();
              }
              else {
                  derived.ensureInvisibility();
              }
              return derived;
          });
          return path;
      };
      ProcessExtendsVisitor.prototype.visitMedia = function (mediaNode, visitArgs) {
          var newAllExtends = mediaNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
          newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, mediaNode.allExtends));
          this.allExtendsStack.push(newAllExtends);
      };
      ProcessExtendsVisitor.prototype.visitMediaOut = function (mediaNode) {
          var lastIndex = this.allExtendsStack.length - 1;
          this.allExtendsStack.length = lastIndex;
      };
      ProcessExtendsVisitor.prototype.visitAtRule = function (atRuleNode, visitArgs) {
          var newAllExtends = atRuleNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
          newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, atRuleNode.allExtends));
          this.allExtendsStack.push(newAllExtends);
      };
      ProcessExtendsVisitor.prototype.visitAtRuleOut = function (atRuleNode) {
          var lastIndex = this.allExtendsStack.length - 1;
          this.allExtendsStack.length = lastIndex;
      };
      return ProcessExtendsVisitor;
  }());

  var JoinSelectorVisitor = /** @class */ (function () {
      function JoinSelectorVisitor() {
          this.contexts = [[]];
          this._visitor = new Visitor(this);
      }
      JoinSelectorVisitor.prototype.run = function (root) {
          return this._visitor.visit(root);
      };
      JoinSelectorVisitor.prototype.visitDeclaration = function (declNode, visitArgs) {
          visitArgs.visitDeeper = false;
      };
      JoinSelectorVisitor.prototype.visitMixinDefinition = function (mixinDefinitionNode, visitArgs) {
          visitArgs.visitDeeper = false;
      };
      JoinSelectorVisitor.prototype.visitRuleset = function (rulesetNode, visitArgs) {
          var context = this.contexts[this.contexts.length - 1];
          var paths = [];
          var selectors;
          this.contexts.push(paths);
          if (!rulesetNode.root) {
              selectors = rulesetNode.selectors;
              if (selectors) {
                  selectors = selectors.filter(function (selector) { return selector.getIsOutput(); });
                  rulesetNode.selectors = selectors.length ? selectors : (selectors = null);
                  if (selectors) {
                      rulesetNode.joinSelectors(paths, context, selectors);
                  }
              }
              if (!selectors) {
                  rulesetNode.rules = null;
              }
              rulesetNode.paths = paths;
          }
      };
      JoinSelectorVisitor.prototype.visitRulesetOut = function (rulesetNode) {
          this.contexts.length = this.contexts.length - 1;
      };
      JoinSelectorVisitor.prototype.visitMedia = function (mediaNode, visitArgs) {
          var context = this.contexts[this.contexts.length - 1];
          mediaNode.rules[0].root = (context.length === 0 || context[0].multiMedia);
      };
      JoinSelectorVisitor.prototype.visitAtRule = function (atRuleNode, visitArgs) {
          var context = this.contexts[this.contexts.length - 1];
          if (atRuleNode.rules && atRuleNode.rules.length) {
              atRuleNode.rules[0].root = (atRuleNode.isRooted || context.length === 0 || null);
          }
      };
      return JoinSelectorVisitor;
  }());

  var CSSVisitorUtils = /** @class */ (function () {
      function CSSVisitorUtils(context) {
          this._visitor = new Visitor(this);
          this._context = context;
      }
      CSSVisitorUtils.prototype.containsSilentNonBlockedChild = function (bodyRules) {
          var rule;
          if (!bodyRules) {
              return false;
          }
          for (var r = 0; r < bodyRules.length; r++) {
              rule = bodyRules[r];
              if (rule.isSilent && rule.isSilent(this._context) && !rule.blocksVisibility()) {
                  // the atrule contains something that was referenced (likely by extend)
                  // therefore it needs to be shown in output too
                  return true;
              }
          }
          return false;
      };
      CSSVisitorUtils.prototype.keepOnlyVisibleChilds = function (owner) {
          if (owner && owner.rules) {
              owner.rules = owner.rules.filter(function (thing) { return thing.isVisible(); });
          }
      };
      CSSVisitorUtils.prototype.isEmpty = function (owner) {
          return (owner && owner.rules)
              ? (owner.rules.length === 0) : true;
      };
      CSSVisitorUtils.prototype.hasVisibleSelector = function (rulesetNode) {
          return (rulesetNode && rulesetNode.paths)
              ? (rulesetNode.paths.length > 0) : false;
      };
      CSSVisitorUtils.prototype.resolveVisibility = function (node, originalRules) {
          if (!node.blocksVisibility()) {
              if (this.isEmpty(node) && !this.containsSilentNonBlockedChild(originalRules)) {
                  return;
              }
              return node;
          }
          var compiledRulesBody = node.rules[0];
          this.keepOnlyVisibleChilds(compiledRulesBody);
          if (this.isEmpty(compiledRulesBody)) {
              return;
          }
          node.ensureVisibility();
          node.removeVisibilityBlock();
          return node;
      };
      CSSVisitorUtils.prototype.isVisibleRuleset = function (rulesetNode) {
          if (rulesetNode.firstRoot) {
              return true;
          }
          if (this.isEmpty(rulesetNode)) {
              return false;
          }
          if (!rulesetNode.root && !this.hasVisibleSelector(rulesetNode)) {
              return false;
          }
          return true;
      };
      return CSSVisitorUtils;
  }());
  var ToCSSVisitor = function (context) {
      this._visitor = new Visitor(this);
      this._context = context;
      this.utils = new CSSVisitorUtils(context);
  };
  ToCSSVisitor.prototype = {
      isReplacing: true,
      run: function (root) {
          return this._visitor.visit(root);
      },
      visitDeclaration: function (declNode, visitArgs) {
          if (declNode.blocksVisibility() || declNode.variable) {
              return;
          }
          return declNode;
      },
      visitMixinDefinition: function (mixinNode, visitArgs) {
          // mixin definitions do not get eval'd - this means they keep state
          // so we have to clear that state here so it isn't used if toCSS is called twice
          mixinNode.frames = [];
      },
      visitExtend: function (extendNode, visitArgs) {
      },
      visitComment: function (commentNode, visitArgs) {
          if (commentNode.blocksVisibility() || commentNode.isSilent(this._context)) {
              return;
          }
          return commentNode;
      },
      visitMedia: function (mediaNode, visitArgs) {
          var originalRules = mediaNode.rules[0].rules;
          mediaNode.accept(this._visitor);
          visitArgs.visitDeeper = false;
          return this.utils.resolveVisibility(mediaNode, originalRules);
      },
      visitImport: function (importNode, visitArgs) {
          if (importNode.blocksVisibility()) {
              return;
          }
          return importNode;
      },
      visitAtRule: function (atRuleNode, visitArgs) {
          if (atRuleNode.rules && atRuleNode.rules.length) {
              return this.visitAtRuleWithBody(atRuleNode, visitArgs);
          }
          else {
              return this.visitAtRuleWithoutBody(atRuleNode, visitArgs);
          }
      },
      visitAnonymous: function (anonymousNode, visitArgs) {
          if (!anonymousNode.blocksVisibility()) {
              anonymousNode.accept(this._visitor);
              return anonymousNode;
          }
      },
      visitAtRuleWithBody: function (atRuleNode, visitArgs) {
          // if there is only one nested ruleset and that one has no path, then it is
          // just fake ruleset
          function hasFakeRuleset(atRuleNode) {
              var bodyRules = atRuleNode.rules;
              return bodyRules.length === 1 && (!bodyRules[0].paths || bodyRules[0].paths.length === 0);
          }
          function getBodyRules(atRuleNode) {
              var nodeRules = atRuleNode.rules;
              if (hasFakeRuleset(atRuleNode)) {
                  return nodeRules[0].rules;
              }
              return nodeRules;
          }
          // it is still true that it is only one ruleset in array
          // this is last such moment
          // process childs
          var originalRules = getBodyRules(atRuleNode);
          atRuleNode.accept(this._visitor);
          visitArgs.visitDeeper = false;
          if (!this.utils.isEmpty(atRuleNode)) {
              this._mergeRules(atRuleNode.rules[0].rules);
          }
          return this.utils.resolveVisibility(atRuleNode, originalRules);
      },
      visitAtRuleWithoutBody: function (atRuleNode, visitArgs) {
          if (atRuleNode.blocksVisibility()) {
              return;
          }
          if (atRuleNode.name === '@charset') {
              // Only output the debug info together with subsequent @charset definitions
              // a comment (or @media statement) before the actual @charset atrule would
              // be considered illegal css as it has to be on the first line
              if (this.charset) {
                  if (atRuleNode.debugInfo) {
                      var comment = new tree.Comment("/* " + atRuleNode.toCSS(this._context).replace(/\n/g, '') + " */\n");
                      comment.debugInfo = atRuleNode.debugInfo;
                      return this._visitor.visit(comment);
                  }
                  return;
              }
              this.charset = true;
          }
          return atRuleNode;
      },
      checkValidNodes: function (rules, isRoot) {
          if (!rules) {
              return;
          }
          for (var i_1 = 0; i_1 < rules.length; i_1++) {
              var ruleNode = rules[i_1];
              if (isRoot && ruleNode instanceof tree.Declaration && !ruleNode.variable) {
                  throw { message: 'Properties must be inside selector blocks. They cannot be in the root',
                      index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename };
              }
              if (ruleNode instanceof tree.Call) {
                  throw { message: "Function '" + ruleNode.name + "' is undefined",
                      index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename };
              }
              if (ruleNode.type && !ruleNode.allowRoot) {
                  throw { message: ruleNode.type + " node returned by a function is not valid here",
                      index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename };
              }
          }
      },
      visitRuleset: function (rulesetNode, visitArgs) {
          // at this point rulesets are nested into each other
          var rule;
          var rulesets = [];
          this.checkValidNodes(rulesetNode.rules, rulesetNode.firstRoot);
          if (!rulesetNode.root) {
              // remove invisible paths
              this._compileRulesetPaths(rulesetNode);
              // remove rulesets from this ruleset body and compile them separately
              var nodeRules = rulesetNode.rules;
              var nodeRuleCnt = nodeRules ? nodeRules.length : 0;
              for (var i_2 = 0; i_2 < nodeRuleCnt;) {
                  rule = nodeRules[i_2];
                  if (rule && rule.rules) {
                      // visit because we are moving them out from being a child
                      rulesets.push(this._visitor.visit(rule));
                      nodeRules.splice(i_2, 1);
                      nodeRuleCnt--;
                      continue;
                  }
                  i_2++;
              }
              // accept the visitor to remove rules and refactor itself
              // then we can decide nogw whether we want it or not
              // compile body
              if (nodeRuleCnt > 0) {
                  rulesetNode.accept(this._visitor);
              }
              else {
                  rulesetNode.rules = null;
              }
              visitArgs.visitDeeper = false;
          }
          else { // if (! rulesetNode.root) {
              rulesetNode.accept(this._visitor);
              visitArgs.visitDeeper = false;
          }
          if (rulesetNode.rules) {
              this._mergeRules(rulesetNode.rules);
              this._removeDuplicateRules(rulesetNode.rules);
          }
          // now decide whether we keep the ruleset
          if (this.utils.isVisibleRuleset(rulesetNode)) {
              rulesetNode.ensureVisibility();
              rulesets.splice(0, 0, rulesetNode);
          }
          if (rulesets.length === 1) {
              return rulesets[0];
          }
          return rulesets;
      },
      _compileRulesetPaths: function (rulesetNode) {
          if (rulesetNode.paths) {
              rulesetNode.paths = rulesetNode.paths
                  .filter(function (p) {
                  var i;
                  if (p[0].elements[0].combinator.value === ' ') {
                      p[0].elements[0].combinator = new (tree.Combinator)('');
                  }
                  for (i = 0; i < p.length; i++) {
                      if (p[i].isVisible() && p[i].getIsOutput()) {
                          return true;
                      }
                  }
                  return false;
              });
          }
      },
      _removeDuplicateRules: function (rules) {
          if (!rules) {
              return;
          }
          // remove duplicates
          var ruleCache = {};
          var ruleList;
          var rule;
          var i;
          for (i = rules.length - 1; i >= 0; i--) {
              rule = rules[i];
              if (rule instanceof tree.Declaration) {
                  if (!ruleCache[rule.name]) {
                      ruleCache[rule.name] = rule;
                  }
                  else {
                      ruleList = ruleCache[rule.name];
                      if (ruleList instanceof tree.Declaration) {
                          ruleList = ruleCache[rule.name] = [ruleCache[rule.name].toCSS(this._context)];
                      }
                      var ruleCSS = rule.toCSS(this._context);
                      if (ruleList.indexOf(ruleCSS) !== -1) {
                          rules.splice(i, 1);
                      }
                      else {
                          ruleList.push(ruleCSS);
                      }
                  }
              }
          }
      },
      _mergeRules: function (rules) {
          if (!rules) {
              return;
          }
          var groups = {};
          var groupsArr = [];
          for (var i_3 = 0; i_3 < rules.length; i_3++) {
              var rule = rules[i_3];
              if (rule.merge) {
                  var key = rule.name;
                  groups[key] ? rules.splice(i_3--, 1) :
                      groupsArr.push(groups[key] = []);
                  groups[key].push(rule);
              }
          }
          groupsArr.forEach(function (group) {
              if (group.length > 0) {
                  var result_1 = group[0];
                  var space_1 = [];
                  var comma_1 = [new tree.Expression(space_1)];
                  group.forEach(function (rule) {
                      if ((rule.merge === '+') && (space_1.length > 0)) {
                          comma_1.push(new tree.Expression(space_1 = []));
                      }
                      space_1.push(rule.value);
                      result_1.important = result_1.important || rule.important;
                  });
                  result_1.value = new tree.Value(comma_1);
              }
          });
      }
  };

  var visitors = {
      Visitor: Visitor,
      ImportVisitor: ImportVisitor,
      MarkVisibleSelectorsVisitor: SetTreeVisibilityVisitor,
      ExtendVisitor: ProcessExtendsVisitor,
      JoinSelectorVisitor: JoinSelectorVisitor,
      ToCSSVisitor: ToCSSVisitor
  };

  // Split the input into chunks.
  var chunker = (function (input, fail) {
      var len = input.length;
      var level = 0;
      var parenLevel = 0;
      var lastOpening;
      var lastOpeningParen;
      var lastMultiComment;
      var lastMultiCommentEndBrace;
      var chunks = [];
      var emitFrom = 0;
      var chunkerCurrentIndex;
      var currentChunkStartIndex;
      var cc;
      var cc2;
      var matched;
      function emitChunk(force) {
          var len = chunkerCurrentIndex - emitFrom;
          if (((len < 512) && !force) || !len) {
              return;
          }
          chunks.push(input.slice(emitFrom, chunkerCurrentIndex + 1));
          emitFrom = chunkerCurrentIndex + 1;
      }
      for (chunkerCurrentIndex = 0; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
          cc = input.charCodeAt(chunkerCurrentIndex);
          if (((cc >= 97) && (cc <= 122)) || (cc < 34)) {
              // a-z or whitespace
              continue;
          }
          switch (cc) {
              case 40: // (
                  parenLevel++;
                  lastOpeningParen = chunkerCurrentIndex;
                  continue;
              case 41: // )
                  if (--parenLevel < 0) {
                      return fail('missing opening `(`', chunkerCurrentIndex);
                  }
                  continue;
              case 59: // ;
                  if (!parenLevel) {
                      emitChunk();
                  }
                  continue;
              case 123: // {
                  level++;
                  lastOpening = chunkerCurrentIndex;
                  continue;
              case 125: // }
                  if (--level < 0) {
                      return fail('missing opening `{`', chunkerCurrentIndex);
                  }
                  if (!level && !parenLevel) {
                      emitChunk();
                  }
                  continue;
              case 92: // \
                  if (chunkerCurrentIndex < len - 1) {
                      chunkerCurrentIndex++;
                      continue;
                  }
                  return fail('unescaped `\\`', chunkerCurrentIndex);
              case 34:
              case 39:
              case 96: // ", ' and `
                  matched = 0;
                  currentChunkStartIndex = chunkerCurrentIndex;
                  for (chunkerCurrentIndex = chunkerCurrentIndex + 1; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
                      cc2 = input.charCodeAt(chunkerCurrentIndex);
                      if (cc2 > 96) {
                          continue;
                      }
                      if (cc2 == cc) {
                          matched = 1;
                          break;
                      }
                      if (cc2 == 92) { // \
                          if (chunkerCurrentIndex == len - 1) {
                              return fail('unescaped `\\`', chunkerCurrentIndex);
                          }
                          chunkerCurrentIndex++;
                      }
                  }
                  if (matched) {
                      continue;
                  }
                  return fail("unmatched `" + String.fromCharCode(cc) + "`", currentChunkStartIndex);
              case 47: // /, check for comment
                  if (parenLevel || (chunkerCurrentIndex == len - 1)) {
                      continue;
                  }
                  cc2 = input.charCodeAt(chunkerCurrentIndex + 1);
                  if (cc2 == 47) {
                      // //, find lnfeed
                      for (chunkerCurrentIndex = chunkerCurrentIndex + 2; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
                          cc2 = input.charCodeAt(chunkerCurrentIndex);
                          if ((cc2 <= 13) && ((cc2 == 10) || (cc2 == 13))) {
                              break;
                          }
                      }
                  }
                  else if (cc2 == 42) {
                      // /*, find */
                      lastMultiComment = currentChunkStartIndex = chunkerCurrentIndex;
                      for (chunkerCurrentIndex = chunkerCurrentIndex + 2; chunkerCurrentIndex < len - 1; chunkerCurrentIndex++) {
                          cc2 = input.charCodeAt(chunkerCurrentIndex);
                          if (cc2 == 125) {
                              lastMultiCommentEndBrace = chunkerCurrentIndex;
                          }
                          if (cc2 != 42) {
                              continue;
                          }
                          if (input.charCodeAt(chunkerCurrentIndex + 1) == 47) {
                              break;
                          }
                      }
                      if (chunkerCurrentIndex == len - 1) {
                          return fail('missing closing `*/`', currentChunkStartIndex);
                      }
                      chunkerCurrentIndex++;
                  }
                  continue;
              case 42: // *, check for unmatched */
                  if ((chunkerCurrentIndex < len - 1) && (input.charCodeAt(chunkerCurrentIndex + 1) == 47)) {
                      return fail('unmatched `/*`', chunkerCurrentIndex);
                  }
                  continue;
          }
      }
      if (level !== 0) {
          if ((lastMultiComment > lastOpening) && (lastMultiCommentEndBrace > lastMultiComment)) {
              return fail('missing closing `}` or `*/`', lastOpening);
          }
          else {
              return fail('missing closing `}`', lastOpening);
          }
      }
      else if (parenLevel !== 0) {
          return fail('missing closing `)`', lastOpeningParen);
      }
      emitChunk(true);
      return chunks;
  });

  var getParserInput = (function () {
      var // Less input string
      input;
      var // current chunk
      j;
      var // holds state for backtracking
      saveStack = [];
      var // furthest index the parser has gone to
      furthest;
      var // if this is furthest we got to, this is the probably cause
      furthestPossibleErrorMessage;
      var // chunkified input
      chunks;
      var // current chunk
      current;
      var // index of current chunk, in `input`
      currentPos;
      var parserInput = {};
      var CHARCODE_SPACE = 32;
      var CHARCODE_TAB = 9;
      var CHARCODE_LF = 10;
      var CHARCODE_CR = 13;
      var CHARCODE_PLUS = 43;
      var CHARCODE_COMMA = 44;
      var CHARCODE_FORWARD_SLASH = 47;
      var CHARCODE_9 = 57;
      function skipWhitespace(length) {
          var oldi = parserInput.i;
          var oldj = j;
          var curr = parserInput.i - currentPos;
          var endIndex = parserInput.i + current.length - curr;
          var mem = (parserInput.i += length);
          var inp = input;
          var c;
          var nextChar;
          var comment;
          for (; parserInput.i < endIndex; parserInput.i++) {
              c = inp.charCodeAt(parserInput.i);
              if (parserInput.autoCommentAbsorb && c === CHARCODE_FORWARD_SLASH) {
                  nextChar = inp.charAt(parserInput.i + 1);
                  if (nextChar === '/') {
                      comment = { index: parserInput.i, isLineComment: true };
                      var nextNewLine = inp.indexOf('\n', parserInput.i + 2);
                      if (nextNewLine < 0) {
                          nextNewLine = endIndex;
                      }
                      parserInput.i = nextNewLine;
                      comment.text = inp.substr(comment.index, parserInput.i - comment.index);
                      parserInput.commentStore.push(comment);
                      continue;
                  }
                  else if (nextChar === '*') {
                      var nextStarSlash = inp.indexOf('*/', parserInput.i + 2);
                      if (nextStarSlash >= 0) {
                          comment = {
                              index: parserInput.i,
                              text: inp.substr(parserInput.i, nextStarSlash + 2 - parserInput.i),
                              isLineComment: false
                          };
                          parserInput.i += comment.text.length - 1;
                          parserInput.commentStore.push(comment);
                          continue;
                      }
                  }
                  break;
              }
              if ((c !== CHARCODE_SPACE) && (c !== CHARCODE_LF) && (c !== CHARCODE_TAB) && (c !== CHARCODE_CR)) {
                  break;
              }
          }
          current = current.slice(length + parserInput.i - mem + curr);
          currentPos = parserInput.i;
          if (!current.length) {
              if (j < chunks.length - 1) {
                  current = chunks[++j];
                  skipWhitespace(0); // skip space at the beginning of a chunk
                  return true; // things changed
              }
              parserInput.finished = true;
          }
          return oldi !== parserInput.i || oldj !== j;
      }
      parserInput.save = function () {
          currentPos = parserInput.i;
          saveStack.push({ current: current, i: parserInput.i, j: j });
      };
      parserInput.restore = function (possibleErrorMessage) {
          if (parserInput.i > furthest || (parserInput.i === furthest && possibleErrorMessage && !furthestPossibleErrorMessage)) {
              furthest = parserInput.i;
              furthestPossibleErrorMessage = possibleErrorMessage;
          }
          var state = saveStack.pop();
          current = state.current;
          currentPos = parserInput.i = state.i;
          j = state.j;
      };
      parserInput.forget = function () {
          saveStack.pop();
      };
      parserInput.isWhitespace = function (offset) {
          var pos = parserInput.i + (offset || 0);
          var code = input.charCodeAt(pos);
          return (code === CHARCODE_SPACE || code === CHARCODE_CR || code === CHARCODE_TAB || code === CHARCODE_LF);
      };
      // Specialization of $(tok)
      parserInput.$re = function (tok) {
          if (parserInput.i > currentPos) {
              current = current.slice(parserInput.i - currentPos);
              currentPos = parserInput.i;
          }
          var m = tok.exec(current);
          if (!m) {
              return null;
          }
          skipWhitespace(m[0].length);
          if (typeof m === 'string') {
              return m;
          }
          return m.length === 1 ? m[0] : m;
      };
      parserInput.$char = function (tok) {
          if (input.charAt(parserInput.i) !== tok) {
              return null;
          }
          skipWhitespace(1);
          return tok;
      };
      parserInput.$str = function (tok) {
          var tokLength = tok.length;
          // https://jsperf.com/string-startswith/21
          for (var i_1 = 0; i_1 < tokLength; i_1++) {
              if (input.charAt(parserInput.i + i_1) !== tok.charAt(i_1)) {
                  return null;
              }
          }
          skipWhitespace(tokLength);
          return tok;
      };
      parserInput.$quoted = function (loc) {
          var pos = loc || parserInput.i;
          var startChar = input.charAt(pos);
          if (startChar !== '\'' && startChar !== '"') {
              return;
          }
          var length = input.length;
          var currentPosition = pos;
          for (var i_2 = 1; i_2 + currentPosition < length; i_2++) {
              var nextChar = input.charAt(i_2 + currentPosition);
              switch (nextChar) {
                  case '\\':
                      i_2++;
                      continue;
                  case '\r':
                  case '\n':
                      break;
                  case startChar:
                      var str = input.substr(currentPosition, i_2 + 1);
                      if (!loc && loc !== 0) {
                          skipWhitespace(i_2 + 1);
                          return str;
                      }
                      return [startChar, str];
              }
          }
          return null;
      };
      /**
       * Permissive parsing. Ignores everything except matching {} [] () and quotes
       * until matching token (outside of blocks)
       */
      parserInput.$parseUntil = function (tok) {
          var quote = '';
          var returnVal = null;
          var inComment = false;
          var blockDepth = 0;
          var blockStack = [];
          var parseGroups = [];
          var length = input.length;
          var startPos = parserInput.i;
          var lastPos = parserInput.i;
          var i = parserInput.i;
          var loop = true;
          var testChar;
          if (typeof tok === 'string') {
              testChar = function (char) { return char === tok; };
          }
          else {
              testChar = function (char) { return tok.test(char); };
          }
          do {
              var nextChar = input.charAt(i);
              if (blockDepth === 0 && testChar(nextChar)) {
                  returnVal = input.substr(lastPos, i - lastPos);
                  if (returnVal) {
                      parseGroups.push(returnVal);
                  }
                  else {
                      parseGroups.push(' ');
                  }
                  returnVal = parseGroups;
                  skipWhitespace(i - startPos);
                  loop = false;
              }
              else {
                  if (inComment) {
                      if (nextChar === '*' &&
                          input.charAt(i + 1) === '/') {
                          i++;
                          blockDepth--;
                          inComment = false;
                      }
                      i++;
                      continue;
                  }
                  switch (nextChar) {
                      case '\\':
                          i++;
                          nextChar = input.charAt(i);
                          parseGroups.push(input.substr(lastPos, i - lastPos + 1));
                          lastPos = i + 1;
                          break;
                      case '/':
                          if (input.charAt(i + 1) === '*') {
                              i++;
                              inComment = true;
                              blockDepth++;
                          }
                          break;
                      case '\'':
                      case '"':
                          quote = parserInput.$quoted(i);
                          if (quote) {
                              parseGroups.push(input.substr(lastPos, i - lastPos), quote);
                              i += quote[1].length - 1;
                              lastPos = i + 1;
                          }
                          else {
                              skipWhitespace(i - startPos);
                              returnVal = nextChar;
                              loop = false;
                          }
                          break;
                      case '{':
                          blockStack.push('}');
                          blockDepth++;
                          break;
                      case '(':
                          blockStack.push(')');
                          blockDepth++;
                          break;
                      case '[':
                          blockStack.push(']');
                          blockDepth++;
                          break;
                      case '}':
                      case ')':
                      case ']':
                          var expected = blockStack.pop();
                          if (nextChar === expected) {
                              blockDepth--;
                          }
                          else {
                              // move the parser to the error and return expected
                              skipWhitespace(i - startPos);
                              returnVal = expected;
                              loop = false;
                          }
                  }
                  i++;
                  if (i > length) {
                      loop = false;
                  }
              }
          } while (loop);
          return returnVal ? returnVal : null;
      };
      parserInput.autoCommentAbsorb = true;
      parserInput.commentStore = [];
      parserInput.finished = false;
      // Same as $(), but don't change the state of the parser,
      // just return the match.
      parserInput.peek = function (tok) {
          if (typeof tok === 'string') {
              // https://jsperf.com/string-startswith/21
              for (var i_3 = 0; i_3 < tok.length; i_3++) {
                  if (input.charAt(parserInput.i + i_3) !== tok.charAt(i_3)) {
                      return false;
                  }
              }
              return true;
          }
          else {
              return tok.test(current);
          }
      };
      // Specialization of peek()
      // TODO remove or change some currentChar calls to peekChar
      parserInput.peekChar = function (tok) { return input.charAt(parserInput.i) === tok; };
      parserInput.currentChar = function () { return input.charAt(parserInput.i); };
      parserInput.prevChar = function () { return input.charAt(parserInput.i - 1); };
      parserInput.getInput = function () { return input; };
      parserInput.peekNotNumeric = function () {
          var c = input.charCodeAt(parserInput.i);
          // Is the first char of the dimension 0-9, '.', '+' or '-'
          return (c > CHARCODE_9 || c < CHARCODE_PLUS) || c === CHARCODE_FORWARD_SLASH || c === CHARCODE_COMMA;
      };
      parserInput.start = function (str, chunkInput, failFunction) {
          input = str;
          parserInput.i = j = currentPos = furthest = 0;
          // chunking apparently makes things quicker (but my tests indicate
          // it might actually make things slower in node at least)
          // and it is a non-perfect parse - it can't recognise
          // unquoted urls, meaning it can't distinguish comments
          // meaning comments with quotes or {}() in them get 'counted'
          // and then lead to parse errors.
          // In addition if the chunking chunks in the wrong place we might
          // not be able to parse a parser statement in one go
          // this is officially deprecated but can be switched on via an option
          // in the case it causes too much performance issues.
          if (chunkInput) {
              chunks = chunker(str, failFunction);
          }
          else {
              chunks = [str];
          }
          current = chunks[0];
          skipWhitespace(0);
      };
      parserInput.end = function () {
          var message;
          var isFinished = parserInput.i >= input.length;
          if (parserInput.i < furthest) {
              message = furthestPossibleErrorMessage;
              parserInput.i = furthest;
          }
          return {
              isFinished: isFinished,
              furthest: parserInput.i,
              furthestPossibleErrorMessage: message,
              furthestReachedEnd: parserInput.i >= input.length - 1,
              furthestChar: input[parserInput.i]
          };
      };
      return parserInput;
  });

  //
  // less.js - parser
  //
  //    A relatively straight-forward predictive parser.
  //    There is no tokenization/lexing stage, the input is parsed
  //    in one sweep.
  //
  //    To make the parser fast enough to run in the browser, several
  //    optimization had to be made:
  //
  //    - Matching and slicing on a huge input is often cause of slowdowns.
  //      The solution is to chunkify the input into smaller strings.
  //      The chunks are stored in the `chunks` var,
  //      `j` holds the current chunk index, and `currentPos` holds
  //      the index of the current chunk in relation to `input`.
  //      This gives us an almost 4x speed-up.
  //
  //    - In many cases, we don't need to match individual tokens;
  //      for example, if a value doesn't hold any variables, operations
  //      or dynamic references, the parser can effectively 'skip' it,
  //      treating it as a literal.
  //      An example would be '1px solid #000' - which evaluates to itself,
  //      we don't need to know what the individual components are.
  //      The drawback, of course is that you don't get the benefits of
  //      syntax-checking on the CSS. This gives us a 50% speed-up in the parser,
  //      and a smaller speed-up in the code-gen.
  //
  //
  //    Token matching is done with the `$` function, which either takes
  //    a terminal string or regexp, or a non-terminal function to call.
  //    It also takes care of moving all the indices forwards.
  //
  var Parser = function Parser(context, imports, fileInfo) {
      var parsers;
      var parserInput = getParserInput();
      function error(msg, type) {
          throw new LessError({
              index: parserInput.i,
              filename: fileInfo.filename,
              type: type || 'Syntax',
              message: msg
          }, imports);
      }
      function expect(arg, msg) {
          // some older browsers return typeof 'function' for RegExp
          var result = (arg instanceof Function) ? arg.call(parsers) : parserInput.$re(arg);
          if (result) {
              return result;
          }
          error(msg || (typeof arg === 'string'
              ? "expected '" + arg + "' got '" + parserInput.currentChar() + "'"
              : 'unexpected token'));
      }
      // Specialization of expect()
      function expectChar(arg, msg) {
          if (parserInput.$char(arg)) {
              return arg;
          }
          error(msg || "expected '" + arg + "' got '" + parserInput.currentChar() + "'");
      }
      function getDebugInfo(index) {
          var filename = fileInfo.filename;
          return {
              lineNumber: getLocation(index, parserInput.getInput()).line + 1,
              fileName: filename
          };
      }
      /**
       *  Used after initial parsing to create nodes on the fly
       *
       *  @param {String} str          - string to parse
       *  @param {Array}  parseList    - array of parsers to run input through e.g. ["value", "important"]
       *  @param {Number} currentIndex - start number to begin indexing
       *  @param {Object} fileInfo     - fileInfo to attach to created nodes
       */
      function parseNode(str, parseList, currentIndex, fileInfo, callback) {
          var result;
          var returnNodes = [];
          var parser = parserInput;
          try {
              parser.start(str, false, function fail(msg, index) {
                  callback({
                      message: msg,
                      index: index + currentIndex
                  });
              });
              for (var x = 0, p = void 0, i_1; (p = parseList[x]); x++) {
                  i_1 = parser.i;
                  result = parsers[p]();
                  if (result) {
                      try {
                          result._index = i_1 + currentIndex;
                          result._fileInfo = fileInfo;
                      }
                      catch (e) { }
                      returnNodes.push(result);
                  }
                  else {
                      returnNodes.push(null);
                  }
              }
              var endInfo = parser.end();
              if (endInfo.isFinished) {
                  callback(null, returnNodes);
              }
              else {
                  callback(true, null);
              }
          }
          catch (e) {
              throw new LessError({
                  index: e.index + currentIndex,
                  message: e.message
              }, imports, fileInfo.filename);
          }
      }
      //
      // The Parser
      //
      return {
          parserInput: parserInput,
          imports: imports,
          fileInfo: fileInfo,
          parseNode: parseNode,
          //
          // Parse an input string into an abstract syntax tree,
          // @param str A string containing 'less' markup
          // @param callback call `callback` when done.
          // @param [additionalData] An optional map which can contains vars - a map (key, value) of variables to apply
          //
          parse: function (str, callback, additionalData) {
              var root;
              var error = null;
              var globalVars;
              var modifyVars;
              var ignored;
              var preText = '';
              globalVars = (additionalData && additionalData.globalVars) ? Parser.serializeVars(additionalData.globalVars) + "\n" : '';
              modifyVars = (additionalData && additionalData.modifyVars) ? "\n" + Parser.serializeVars(additionalData.modifyVars) : '';
              if (context.pluginManager) {
                  var preProcessors = context.pluginManager.getPreProcessors();
                  for (var i_2 = 0; i_2 < preProcessors.length; i_2++) {
                      str = preProcessors[i_2].process(str, { context: context, imports: imports, fileInfo: fileInfo });
                  }
              }
              if (globalVars || (additionalData && additionalData.banner)) {
                  preText = ((additionalData && additionalData.banner) ? additionalData.banner : '') + globalVars;
                  ignored = imports.contentsIgnoredChars;
                  ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0;
                  ignored[fileInfo.filename] += preText.length;
              }
              str = str.replace(/\r\n?/g, '\n');
              // Remove potential UTF Byte Order Mark
              str = preText + str.replace(/^\uFEFF/, '') + modifyVars;
              imports.contents[fileInfo.filename] = str;
              // Start with the primary rule.
              // The whole syntax tree is held under a Ruleset node,
              // with the `root` property set to true, so no `{}` are
              // output. The callback is called when the input is parsed.
              try {
                  parserInput.start(str, context.chunkInput, function fail(msg, index) {
                      throw new LessError({
                          index: index,
                          type: 'Parse',
                          message: msg,
                          filename: fileInfo.filename
                      }, imports);
                  });
                  tree.Node.prototype.parse = this;
                  root = new tree.Ruleset(null, this.parsers.primary());
                  tree.Node.prototype.rootNode = root;
                  root.root = true;
                  root.firstRoot = true;
                  root.functionRegistry = functionRegistry.inherit();
              }
              catch (e) {
                  return callback(new LessError(e, imports, fileInfo.filename));
              }
              // If `i` is smaller than the `input.length - 1`,
              // it means the parser wasn't able to parse the whole
              // string, so we've got a parsing error.
              //
              // We try to extract a \n delimited string,
              // showing the line where the parse error occurred.
              // We split it up into two parts (the part which parsed,
              // and the part which didn't), so we can color them differently.
              var endInfo = parserInput.end();
              if (!endInfo.isFinished) {
                  var message = endInfo.furthestPossibleErrorMessage;
                  if (!message) {
                      message = 'Unrecognised input';
                      if (endInfo.furthestChar === '}') {
                          message += '. Possibly missing opening \'{\'';
                      }
                      else if (endInfo.furthestChar === ')') {
                          message += '. Possibly missing opening \'(\'';
                      }
                      else if (endInfo.furthestReachedEnd) {
                          message += '. Possibly missing something';
                      }
                  }
                  error = new LessError({
                      type: 'Parse',
                      message: message,
                      index: endInfo.furthest,
                      filename: fileInfo.filename
                  }, imports);
              }
              var finish = function (e) {
                  e = error || e || imports.error;
                  if (e) {
                      if (!(e instanceof LessError)) {
                          e = new LessError(e, imports, fileInfo.filename);
                      }
                      return callback(e);
                  }
                  else {
                      return callback(null, root);
                  }
              };
              if (context.processImports !== false) {
                  new visitors.ImportVisitor(imports, finish)
                      .run(root);
              }
              else {
                  return finish();
              }
          },
          //
          // Here in, the parsing rules/functions
          //
          // The basic structure of the syntax tree generated is as follows:
          //
          //   Ruleset ->  Declaration -> Value -> Expression -> Entity
          //
          // Here's some Less code:
          //
          //    .class {
          //      color: #fff;
          //      border: 1px solid #000;
          //      width: @w + 4px;
          //      > .child {...}
          //    }
          //
          // And here's what the parse tree might look like:
          //
          //     Ruleset (Selector '.class', [
          //         Declaration ("color",  Value ([Expression [Color #fff]]))
          //         Declaration ("border", Value ([Expression [Dimension 1px][Keyword "solid"][Color #000]]))
          //         Declaration ("width",  Value ([Expression [Operation " + " [Variable "@w"][Dimension 4px]]]))
          //         Ruleset (Selector [Element '>', '.child'], [...])
          //     ])
          //
          //  In general, most rules will try to parse a token with the `$re()` function, and if the return
          //  value is truly, will return a new node, of the relevant type. Sometimes, we need to check
          //  first, before parsing, that's when we use `peek()`.
          //
          parsers: parsers = {
              //
              // The `primary` rule is the *entry* and *exit* point of the parser.
              // The rules here can appear at any level of the parse tree.
              //
              // The recursive nature of the grammar is an interplay between the `block`
              // rule, which represents `{ ... }`, the `ruleset` rule, and this `primary` rule,
              // as represented by this simplified grammar:
              //
              //     primary  →  (ruleset | declaration)+
              //     ruleset  →  selector+ block
              //     block    →  '{' primary '}'
              //
              // Only at one point is the primary rule not called from the
              // block rule: at the root level.
              //
              primary: function () {
                  var mixin = this.mixin;
                  var root = [];
                  var node;
                  while (true) {
                      while (true) {
                          node = this.comment();
                          if (!node) {
                              break;
                          }
                          root.push(node);
                      }
                      // always process comments before deciding if finished
                      if (parserInput.finished) {
                          break;
                      }
                      if (parserInput.peek('}')) {
                          break;
                      }
                      node = this.extendRule();
                      if (node) {
                          root = root.concat(node);
                          continue;
                      }
                      node = mixin.definition() || this.declaration() || mixin.call(false, false) ||
                          this.ruleset() || this.variableCall() || this.entities.call() || this.atrule();
                      if (node) {
                          root.push(node);
                      }
                      else {
                          var foundSemiColon = false;
                          while (parserInput.$char(';')) {
                              foundSemiColon = true;
                          }
                          if (!foundSemiColon) {
                              break;
                          }
                      }
                  }
                  return root;
              },
              // comments are collected by the main parsing mechanism and then assigned to nodes
              // where the current structure allows it
              comment: function () {
                  if (parserInput.commentStore.length) {
                      var comment = parserInput.commentStore.shift();
                      return new (tree.Comment)(comment.text, comment.isLineComment, comment.index, fileInfo);
                  }
              },
              //
              // Entities are tokens which can be found inside an Expression
              //
              entities: {
                  mixinLookup: function () {
                      return parsers.mixin.call(true, true);
                  },
                  //
                  // A string, which supports escaping " and '
                  //
                  //     "milky way" 'he\'s the one!'
                  //
                  quoted: function (forceEscaped) {
                      var str;
                      var index = parserInput.i;
                      var isEscaped = false;
                      parserInput.save();
                      if (parserInput.$char('~')) {
                          isEscaped = true;
                      }
                      else if (forceEscaped) {
                          parserInput.restore();
                          return;
                      }
                      str = parserInput.$quoted();
                      if (!str) {
                          parserInput.restore();
                          return;
                      }
                      parserInput.forget();
                      return new (tree.Quoted)(str.charAt(0), str.substr(1, str.length - 2), isEscaped, index, fileInfo);
                  },
                  //
                  // A catch-all word, such as:
                  //
                  //     black border-collapse
                  //
                  keyword: function () {
                      var k = parserInput.$char('%') || parserInput.$re(/^\[?(?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+\]?/);
                      if (k) {
                          return tree.Color.fromKeyword(k) || new (tree.Keyword)(k);
                      }
                  },
                  //
                  // A function call
                  //
                  //     rgb(255, 0, 255)
                  //
                  // The arguments are parsed with the `entities.arguments` parser.
                  //
                  call: function () {
                      var name;
                      var args;
                      var func;
                      var index = parserInput.i;
                      // http://jsperf.com/case-insensitive-regex-vs-strtolower-then-regex/18
                      if (parserInput.peek(/^url\(/i)) {
                          return;
                      }
                      parserInput.save();
                      name = parserInput.$re(/^([\w-]+|%|progid:[\w\.]+)\(/);
                      if (!name) {
                          parserInput.forget();
                          return;
                      }
                      name = name[1];
                      func = this.customFuncCall(name);
                      if (func) {
                          args = func.parse();
                          if (args && func.stop) {
                              parserInput.forget();
                              return args;
                          }
                      }
                      args = this.arguments(args);
                      if (!parserInput.$char(')')) {
                          parserInput.restore('Could not parse call arguments or missing \')\'');
                          return;
                      }
                      parserInput.forget();
                      return new (tree.Call)(name, args, index, fileInfo);
                  },
                  //
                  // Parsing rules for functions with non-standard args, e.g.:
                  //
                  //     boolean(not(2 > 1))
                  //
                  //     This is a quick prototype, to be modified/improved when
                  //     more custom-parsed funcs come (e.g. `selector(...)`)
                  //
                  customFuncCall: function (name) {
                      /* Ideally the table is to be moved out of here for faster perf.,
                         but it's quite tricky since it relies on all these `parsers`
                         and `expect` available only here */
                      return {
                          alpha: f(parsers.ieAlpha, true),
                          boolean: f(condition),
                          'if': f(condition)
                      }[name.toLowerCase()];
                      function f(parse, stop) {
                          return {
                              parse: parse,
                              stop: stop // when true - stop after parse() and return its result, 
                              // otherwise continue for plain args
                          };
                      }
                      function condition() {
                          return [expect(parsers.condition, 'expected condition')];
                      }
                  },
                  arguments: function (prevArgs) {
                      var argsComma = prevArgs || [];
                      var argsSemiColon = [];
                      var isSemiColonSeparated;
                      var value;
                      parserInput.save();
                      while (true) {
                          if (prevArgs) {
                              prevArgs = false;
                          }
                          else {
                              value = parsers.detachedRuleset() || this.assignment() || parsers.expression();
                              if (!value) {
                                  break;
                              }
                              if (value.value && value.value.length == 1) {
                                  value = value.value[0];
                              }
                              argsComma.push(value);
                          }
                          if (parserInput.$char(',')) {
                              continue;
                          }
                          if (parserInput.$char(';') || isSemiColonSeparated) {
                              isSemiColonSeparated = true;
                              value = (argsComma.length < 1) ? argsComma[0]
                                  : new tree.Value(argsComma);
                              argsSemiColon.push(value);
                              argsComma = [];
                          }
                      }
                      parserInput.forget();
                      return isSemiColonSeparated ? argsSemiColon : argsComma;
                  },
                  literal: function () {
                      return this.dimension() ||
                          this.color() ||
                          this.quoted() ||
                          this.unicodeDescriptor();
                  },
                  // Assignments are argument entities for calls.
                  // They are present in ie filter properties as shown below.
                  //
                  //     filter: progid:DXImageTransform.Microsoft.Alpha( *opacity=50* )
                  //
                  assignment: function () {
                      var key;
                      var value;
                      parserInput.save();
                      key = parserInput.$re(/^\w+(?=\s?=)/i);
                      if (!key) {
                          parserInput.restore();
                          return;
                      }
                      if (!parserInput.$char('=')) {
                          parserInput.restore();
                          return;
                      }
                      value = parsers.entity();
                      if (value) {
                          parserInput.forget();
                          return new (tree.Assignment)(key, value);
                      }
                      else {
                          parserInput.restore();
                      }
                  },
                  //
                  // Parse url() tokens
                  //
                  // We use a specific rule for urls, because they don't really behave like
                  // standard function calls. The difference is that the argument doesn't have
                  // to be enclosed within a string, so it can't be parsed as an Expression.
                  //
                  url: function () {
                      var value;
                      var index = parserInput.i;
                      parserInput.autoCommentAbsorb = false;
                      if (!parserInput.$str('url(')) {
                          parserInput.autoCommentAbsorb = true;
                          return;
                      }
                      value = this.quoted() || this.variable() || this.property() ||
                          parserInput.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || '';
                      parserInput.autoCommentAbsorb = true;
                      expectChar(')');
                      return new (tree.URL)((value.value != null ||
                          value instanceof tree.Variable ||
                          value instanceof tree.Property) ?
                          value : new (tree.Anonymous)(value, index), index, fileInfo);
                  },
                  //
                  // A Variable entity, such as `@fink`, in
                  //
                  //     width: @fink + 2px
                  //
                  // We use a different parser for variable definitions,
                  // see `parsers.variable`.
                  //
                  variable: function () {
                      var ch;
                      var name;
                      var index = parserInput.i;
                      parserInput.save();
                      if (parserInput.currentChar() === '@' && (name = parserInput.$re(/^@@?[\w-]+/))) {
                          ch = parserInput.currentChar();
                          if (ch === '(' || ch === '[' && !parserInput.prevChar().match(/^\s/)) {
                              // this may be a VariableCall lookup
                              var result = parsers.variableCall(name);
                              if (result) {
                                  parserInput.forget();
                                  return result;
                              }
                          }
                          parserInput.forget();
                          return new (tree.Variable)(name, index, fileInfo);
                      }
                      parserInput.restore();
                  },
                  // A variable entity using the protective {} e.g. @{var}
                  variableCurly: function () {
                      var curly;
                      var index = parserInput.i;
                      if (parserInput.currentChar() === '@' && (curly = parserInput.$re(/^@\{([\w-]+)\}/))) {
                          return new (tree.Variable)("@" + curly[1], index, fileInfo);
                      }
                  },
                  //
                  // A Property accessor, such as `$color`, in
                  //
                  //     background-color: $color
                  //
                  property: function () {
                      var name;
                      var index = parserInput.i;
                      if (parserInput.currentChar() === '$' && (name = parserInput.$re(/^\$[\w-]+/))) {
                          return new (tree.Property)(name, index, fileInfo);
                      }
                  },
                  // A property entity useing the protective {} e.g. ${prop}
                  propertyCurly: function () {
                      var curly;
                      var index = parserInput.i;
                      if (parserInput.currentChar() === '$' && (curly = parserInput.$re(/^\$\{([\w-]+)\}/))) {
                          return new (tree.Property)("$" + curly[1], index, fileInfo);
                      }
                  },
                  //
                  // A Hexadecimal color
                  //
                  //     #4F3C2F
                  //
                  // `rgb` and `hsl` colors are parsed through the `entities.call` parser.
                  //
                  color: function () {
                      var rgb;
                      parserInput.save();
                      if (parserInput.currentChar() === '#' && (rgb = parserInput.$re(/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})([\w.#\[])?/))) {
                          if (!rgb[2]) {
                              parserInput.forget();
                              return new (tree.Color)(rgb[1], undefined, rgb[0]);
                          }
                      }
                      parserInput.restore();
                  },
                  colorKeyword: function () {
                      parserInput.save();
                      var autoCommentAbsorb = parserInput.autoCommentAbsorb;
                      parserInput.autoCommentAbsorb = false;
                      var k = parserInput.$re(/^[_A-Za-z-][_A-Za-z0-9-]+/);
                      parserInput.autoCommentAbsorb = autoCommentAbsorb;
                      if (!k) {
                          parserInput.forget();
                          return;
                      }
                      parserInput.restore();
                      var color = tree.Color.fromKeyword(k);
                      if (color) {
                          parserInput.$str(k);
                          return color;
                      }
                  },
                  //
                  // A Dimension, that is, a number and a unit
                  //
                  //     0.5em 95%
                  //
                  dimension: function () {
                      if (parserInput.peekNotNumeric()) {
                          return;
                      }
                      var value = parserInput.$re(/^([+-]?\d*\.?\d+)(%|[a-z_]+)?/i);
                      if (value) {
                          return new (tree.Dimension)(value[1], value[2]);
                      }
                  },
                  //
                  // A unicode descriptor, as is used in unicode-range
                  //
                  // U+0??  or U+00A1-00A9
                  //
                  unicodeDescriptor: function () {
                      var ud;
                      ud = parserInput.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/);
                      if (ud) {
                          return new (tree.UnicodeDescriptor)(ud[0]);
                      }
                  },
                  //
                  // JavaScript code to be evaluated
                  //
                  //     `window.location.href`
                  //
                  javascript: function () {
                      var js;
                      var index = parserInput.i;
                      parserInput.save();
                      var escape = parserInput.$char('~');
                      var jsQuote = parserInput.$char('`');
                      if (!jsQuote) {
                          parserInput.restore();
                          return;
                      }
                      js = parserInput.$re(/^[^`]*`/);
                      if (js) {
                          parserInput.forget();
                          return new (tree.JavaScript)(js.substr(0, js.length - 1), Boolean(escape), index, fileInfo);
                      }
                      parserInput.restore('invalid javascript definition');
                  }
              },
              //
              // The variable part of a variable definition. Used in the `rule` parser
              //
              //     @fink:
              //
              variable: function () {
                  var name;
                  if (parserInput.currentChar() === '@' && (name = parserInput.$re(/^(@[\w-]+)\s*:/))) {
                      return name[1];
                  }
              },
              //
              // Call a variable value to retrieve a detached ruleset
              // or a value from a detached ruleset's rules.
              //
              //     @fink();
              //     @fink;
              //     color: @fink[@color];
              //
              variableCall: function (parsedName) {
                  var lookups;
                  var i = parserInput.i;
                  var inValue = !!parsedName;
                  var name = parsedName;
                  parserInput.save();
                  if (name || (parserInput.currentChar() === '@'
                      && (name = parserInput.$re(/^(@[\w-]+)(\(\s*\))?/)))) {
                      lookups = this.mixin.ruleLookups();
                      if (!lookups && ((inValue && parserInput.$str('()') !== '()') || (name[2] !== '()'))) {
                          parserInput.restore('Missing \'[...]\' lookup in variable call');
                          return;
                      }
                      if (!inValue) {
                          name = name[1];
                      }
                      var call = new tree.VariableCall(name, i, fileInfo);
                      if (!inValue && parsers.end()) {
                          parserInput.forget();
                          return call;
                      }
                      else {
                          parserInput.forget();
                          return new tree.NamespaceValue(call, lookups, i, fileInfo);
                      }
                  }
                  parserInput.restore();
              },
              //
              // extend syntax - used to extend selectors
              //
              extend: function (isRule) {
                  var elements;
                  var e;
                  var index = parserInput.i;
                  var option;
                  var extendList;
                  var extend;
                  if (!parserInput.$str(isRule ? '&:extend(' : ':extend(')) {
                      return;
                  }
                  do {
                      option = null;
                      elements = null;
                      while (!(option = parserInput.$re(/^(all)(?=\s*(\)|,))/))) {
                          e = this.element();
                          if (!e) {
                              break;
                          }
                          if (elements) {
                              elements.push(e);
                          }
                          else {
                              elements = [e];
                          }
                      }
                      option = option && option[1];
                      if (!elements) {
                          error('Missing target selector for :extend().');
                      }
                      extend = new (tree.Extend)(new (tree.Selector)(elements), option, index, fileInfo);
                      if (extendList) {
                          extendList.push(extend);
                      }
                      else {
                          extendList = [extend];
                      }
                  } while (parserInput.$char(','));
                  expect(/^\)/);
                  if (isRule) {
                      expect(/^;/);
                  }
                  return extendList;
              },
              //
              // extendRule - used in a rule to extend all the parent selectors
              //
              extendRule: function () {
                  return this.extend(true);
              },
              //
              // Mixins
              //
              mixin: {
                  //
                  // A Mixin call, with an optional argument list
                  //
                  //     #mixins > .square(#fff);
                  //     #mixins.square(#fff);
                  //     .rounded(4px, black);
                  //     .button;
                  //
                  // We can lookup / return a value using the lookup syntax:
                  //
                  //     color: #mixin.square(#fff)[@color];
                  //
                  // The `while` loop is there because mixins can be
                  // namespaced, but we only support the child and descendant
                  // selector for now.
                  //
                  call: function (inValue, getLookup) {
                      var s = parserInput.currentChar();
                      var important = false;
                      var lookups;
                      var index = parserInput.i;
                      var elements;
                      var args;
                      var hasParens;
                      if (s !== '.' && s !== '#') {
                          return;
                      }
                      parserInput.save(); // stop us absorbing part of an invalid selector
                      elements = this.elements();
                      if (elements) {
                          if (parserInput.$char('(')) {
                              args = this.args(true).args;
                              expectChar(')');
                              hasParens = true;
                          }
                          if (getLookup !== false) {
                              lookups = this.ruleLookups();
                          }
                          if (getLookup === true && !lookups) {
                              parserInput.restore();
                              return;
                          }
                          if (inValue && !lookups && !hasParens) {
                              // This isn't a valid in-value mixin call
                              parserInput.restore();
                              return;
                          }
                          if (!inValue && parsers.important()) {
                              important = true;
                          }
                          if (inValue || parsers.end()) {
                              parserInput.forget();
                              var mixin = new (tree.mixin.Call)(elements, args, index, fileInfo, !lookups && important);
                              if (lookups) {
                                  return new tree.NamespaceValue(mixin, lookups);
                              }
                              else {
                                  return mixin;
                              }
                          }
                      }
                      parserInput.restore();
                  },
                  /**
                   * Matching elements for mixins
                   * (Start with . or # and can have > )
                   */
                  elements: function () {
                      var elements;
                      var e;
                      var c;
                      var elem;
                      var elemIndex;
                      var re = /^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/;
                      while (true) {
                          elemIndex = parserInput.i;
                          e = parserInput.$re(re);
                          if (!e) {
                              break;
                          }
                          elem = new (tree.Element)(c, e, false, elemIndex, fileInfo);
                          if (elements) {
                              elements.push(elem);
                          }
                          else {
                              elements = [elem];
                          }
                          c = parserInput.$char('>');
                      }
                      return elements;
                  },
                  args: function (isCall) {
                      var entities = parsers.entities;
                      var returner = { args: null, variadic: false };
                      var expressions = [];
                      var argsSemiColon = [];
                      var argsComma = [];
                      var isSemiColonSeparated;
                      var expressionContainsNamed;
                      var name;
                      var nameLoop;
                      var value;
                      var arg;
                      var expand;
                      var hasSep = true;
                      parserInput.save();
                      while (true) {
                          if (isCall) {
                              arg = parsers.detachedRuleset() || parsers.expression();
                          }
                          else {
                              parserInput.commentStore.length = 0;
                              if (parserInput.$str('...')) {
                                  returner.variadic = true;
                                  if (parserInput.$char(';') && !isSemiColonSeparated) {
                                      isSemiColonSeparated = true;
                                  }
                                  (isSemiColonSeparated ? argsSemiColon : argsComma)
                                      .push({ variadic: true });
                                  break;
                              }
                              arg = entities.variable() || entities.property() || entities.literal() || entities.keyword() || this.call(true);
                          }
                          if (!arg || !hasSep) {
                              break;
                          }
                          nameLoop = null;
                          if (arg.throwAwayComments) {
                              arg.throwAwayComments();
                          }
                          value = arg;
                          var val = null;
                          if (isCall) {
                              // Variable
                              if (arg.value && arg.value.length == 1) {
                                  val = arg.value[0];
                              }
                          }
                          else {
                              val = arg;
                          }
                          if (val && (val instanceof tree.Variable || val instanceof tree.Property)) {
                              if (parserInput.$char(':')) {
                                  if (expressions.length > 0) {
                                      if (isSemiColonSeparated) {
                                          error('Cannot mix ; and , as delimiter types');
                                      }
                                      expressionContainsNamed = true;
                                  }
                                  value = parsers.detachedRuleset() || parsers.expression();
                                  if (!value) {
                                      if (isCall) {
                                          error('could not understand value for named argument');
                                      }
                                      else {
                                          parserInput.restore();
                                          returner.args = [];
                                          return returner;
                                      }
                                  }
                                  nameLoop = (name = val.name);
                              }
                              else if (parserInput.$str('...')) {
                                  if (!isCall) {
                                      returner.variadic = true;
                                      if (parserInput.$char(';') && !isSemiColonSeparated) {
                                          isSemiColonSeparated = true;
                                      }
                                      (isSemiColonSeparated ? argsSemiColon : argsComma)
                                          .push({ name: arg.name, variadic: true });
                                      break;
                                  }
                                  else {
                                      expand = true;
                                  }
                              }
                              else if (!isCall) {
                                  name = nameLoop = val.name;
                                  value = null;
                              }
                          }
                          if (value) {
                              expressions.push(value);
                          }
                          argsComma.push({ name: nameLoop, value: value, expand: expand });
                          if (parserInput.$char(',')) {
                              hasSep = true;
                              continue;
                          }
                          hasSep = parserInput.$char(';') === ';';
                          if (hasSep || isSemiColonSeparated) {
                              if (expressionContainsNamed) {
                                  error('Cannot mix ; and , as delimiter types');
                              }
                              isSemiColonSeparated = true;
                              if (expressions.length > 1) {
                                  value = new (tree.Value)(expressions);
                              }
                              argsSemiColon.push({ name: name, value: value, expand: expand });
                              name = null;
                              expressions = [];
                              expressionContainsNamed = false;
                          }
                      }
                      parserInput.forget();
                      returner.args = isSemiColonSeparated ? argsSemiColon : argsComma;
                      return returner;
                  },
                  //
                  // A Mixin definition, with a list of parameters
                  //
                  //     .rounded (@radius: 2px, @color) {
                  //        ...
                  //     }
                  //
                  // Until we have a finer grained state-machine, we have to
                  // do a look-ahead, to make sure we don't have a mixin call.
                  // See the `rule` function for more information.
                  //
                  // We start by matching `.rounded (`, and then proceed on to
                  // the argument list, which has optional default values.
                  // We store the parameters in `params`, with a `value` key,
                  // if there is a value, such as in the case of `@radius`.
                  //
                  // Once we've got our params list, and a closing `)`, we parse
                  // the `{...}` block.
                  //
                  definition: function () {
                      var name;
                      var params = [];
                      var match;
                      var ruleset;
                      var cond;
                      var variadic = false;
                      if ((parserInput.currentChar() !== '.' && parserInput.currentChar() !== '#') ||
                          parserInput.peek(/^[^{]*\}/)) {
                          return;
                      }
                      parserInput.save();
                      match = parserInput.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/);
                      if (match) {
                          name = match[1];
                          var argInfo = this.args(false);
                          params = argInfo.args;
                          variadic = argInfo.variadic;
                          // .mixincall("@{a}");
                          // looks a bit like a mixin definition..
                          // also
                          // .mixincall(@a: {rule: set;});
                          // so we have to be nice and restore
                          if (!parserInput.$char(')')) {
                              parserInput.restore('Missing closing \')\'');
                              return;
                          }
                          parserInput.commentStore.length = 0;
                          if (parserInput.$str('when')) { // Guard
                              cond = expect(parsers.conditions, 'expected condition');
                          }
                          ruleset = parsers.block();
                          if (ruleset) {
                              parserInput.forget();
                              return new (tree.mixin.Definition)(name, params, ruleset, cond, variadic);
                          }
                          else {
                              parserInput.restore();
                          }
                      }
                      else {
                          parserInput.restore();
                      }
                  },
                  ruleLookups: function () {
                      var rule;
                      var lookups = [];
                      if (parserInput.currentChar() !== '[') {
                          return;
                      }
                      while (true) {
                          parserInput.save();
                          rule = this.lookupValue();
                          if (!rule && rule !== '') {
                              parserInput.restore();
                              break;
                          }
                          lookups.push(rule);
                          parserInput.forget();
                      }
                      if (lookups.length > 0) {
                          return lookups;
                      }
                  },
                  lookupValue: function () {
                      parserInput.save();
                      if (!parserInput.$char('[')) {
                          parserInput.restore();
                          return;
                      }
                      var name = parserInput.$re(/^(?:[@$]{0,2})[_a-zA-Z0-9-]*/);
                      if (!parserInput.$char(']')) {
                          parserInput.restore();
                          return;
                      }
                      if (name || name === '') {
                          parserInput.forget();
                          return name;
                      }
                      parserInput.restore();
                  }
              },
              //
              // Entities are the smallest recognized token,
              // and can be found inside a rule's value.
              //
              entity: function () {
                  var entities = this.entities;
                  return this.comment() || entities.literal() || entities.variable() || entities.url() ||
                      entities.property() || entities.call() || entities.keyword() || this.mixin.call(true) ||
                      entities.javascript();
              },
              //
              // A Declaration terminator. Note that we use `peek()` to check for '}',
              // because the `block` rule will be expecting it, but we still need to make sure
              // it's there, if ';' was omitted.
              //
              end: function () {
                  return parserInput.$char(';') || parserInput.peek('}');
              },
              //
              // IE's alpha function
              //
              //     alpha(opacity=88)
              //
              ieAlpha: function () {
                  var value;
                  // http://jsperf.com/case-insensitive-regex-vs-strtolower-then-regex/18
                  if (!parserInput.$re(/^opacity=/i)) {
                      return;
                  }
                  value = parserInput.$re(/^\d+/);
                  if (!value) {
                      value = expect(parsers.entities.variable, 'Could not parse alpha');
                      value = "@{" + value.name.slice(1) + "}";
                  }
                  expectChar(')');
                  return new tree.Quoted('', "alpha(opacity=" + value + ")");
              },
              //
              // A Selector Element
              //
              //     div
              //     + h1
              //     #socks
              //     input[type="text"]
              //
              // Elements are the building blocks for Selectors,
              // they are made out of a `Combinator` (see combinator rule),
              // and an element name, such as a tag a class, or `*`.
              //
              element: function () {
                  var e;
                  var c;
                  var v;
                  var index = parserInput.i;
                  c = this.combinator();
                  e = parserInput.$re(/^(?:\d+\.\d+|\d+)%/) ||
                      parserInput.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) ||
                      parserInput.$char('*') || parserInput.$char('&') || this.attribute() ||
                      parserInput.$re(/^\([^&()@]+\)/) || parserInput.$re(/^[\.#:](?=@)/) ||
                      this.entities.variableCurly();
                  if (!e) {
                      parserInput.save();
                      if (parserInput.$char('(')) {
                          if ((v = this.selector(false)) && parserInput.$char(')')) {
                              e = new (tree.Paren)(v);
                              parserInput.forget();
                          }
                          else {
                              parserInput.restore('Missing closing \')\'');
                          }
                      }
                      else {
                          parserInput.forget();
                      }
                  }
                  if (e) {
                      return new (tree.Element)(c, e, e instanceof tree.Variable, index, fileInfo);
                  }
              },
              //
              // Combinators combine elements together, in a Selector.
              //
              // Because our parser isn't white-space sensitive, special care
              // has to be taken, when parsing the descendant combinator, ` `,
              // as it's an empty space. We have to check the previous character
              // in the input, to see if it's a ` ` character. More info on how
              // we deal with this in *combinator.js*.
              //
              combinator: function () {
                  var c = parserInput.currentChar();
                  if (c === '/') {
                      parserInput.save();
                      var slashedCombinator = parserInput.$re(/^\/[a-z]+\//i);
                      if (slashedCombinator) {
                          parserInput.forget();
                          return new (tree.Combinator)(slashedCombinator);
                      }
                      parserInput.restore();
                  }
                  if (c === '>' || c === '+' || c === '~' || c === '|' || c === '^') {
                      parserInput.i++;
                      if (c === '^' && parserInput.currentChar() === '^') {
                          c = '^^';
                          parserInput.i++;
                      }
                      while (parserInput.isWhitespace()) {
                          parserInput.i++;
                      }
                      return new (tree.Combinator)(c);
                  }
                  else if (parserInput.isWhitespace(-1)) {
                      return new (tree.Combinator)(' ');
                  }
                  else {
                      return new (tree.Combinator)(null);
                  }
              },
              //
              // A CSS Selector
              // with less extensions e.g. the ability to extend and guard
              //
              //     .class > div + h1
              //     li a:hover
              //
              // Selectors are made out of one or more Elements, see above.
              //
              selector: function (isLess) {
                  var index = parserInput.i;
                  var elements;
                  var extendList;
                  var c;
                  var e;
                  var allExtends;
                  var when;
                  var condition;
                  isLess = isLess !== false;
                  while ((isLess && (extendList = this.extend())) || (isLess && (when = parserInput.$str('when'))) || (e = this.element())) {
                      if (when) {
                          condition = expect(this.conditions, 'expected condition');
                      }
                      else if (condition) {
                          error('CSS guard can only be used at the end of selector');
                      }
                      else if (extendList) {
                          if (allExtends) {
                              allExtends = allExtends.concat(extendList);
                          }
                          else {
                              allExtends = extendList;
                          }
                      }
                      else {
                          if (allExtends) {
                              error('Extend can only be used at the end of selector');
                          }
                          c = parserInput.currentChar();
                          if (elements) {
                              elements.push(e);
                          }
                          else {
                              elements = [e];
                          }
                          e = null;
                      }
                      if (c === '{' || c === '}' || c === ';' || c === ',' || c === ')') {
                          break;
                      }
                  }
                  if (elements) {
                      return new (tree.Selector)(elements, allExtends, condition, index, fileInfo);
                  }
                  if (allExtends) {
                      error('Extend must be used to extend a selector, it cannot be used on its own');
                  }
              },
              selectors: function () {
                  var s;
                  var selectors;
                  while (true) {
                      s = this.selector();
                      if (!s) {
                          break;
                      }
                      if (selectors) {
                          selectors.push(s);
                      }
                      else {
                          selectors = [s];
                      }
                      parserInput.commentStore.length = 0;
                      if (s.condition && selectors.length > 1) {
                          error("Guards are only currently allowed on a single selector.");
                      }
                      if (!parserInput.$char(',')) {
                          break;
                      }
                      if (s.condition) {
                          error("Guards are only currently allowed on a single selector.");
                      }
                      parserInput.commentStore.length = 0;
                  }
                  return selectors;
              },
              attribute: function () {
                  if (!parserInput.$char('[')) {
                      return;
                  }
                  var entities = this.entities;
                  var key;
                  var val;
                  var op;
                  if (!(key = entities.variableCurly())) {
                      key = expect(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/);
                  }
                  op = parserInput.$re(/^[|~*$^]?=/);
                  if (op) {
                      val = entities.quoted() || parserInput.$re(/^[0-9]+%/) || parserInput.$re(/^[\w-]+/) || entities.variableCurly();
                  }
                  expectChar(']');
                  return new (tree.Attribute)(key, op, val);
              },
              //
              // The `block` rule is used by `ruleset` and `mixin.definition`.
              // It's a wrapper around the `primary` rule, with added `{}`.
              //
              block: function () {
                  var content;
                  if (parserInput.$char('{') && (content = this.primary()) && parserInput.$char('}')) {
                      return content;
                  }
              },
              blockRuleset: function () {
                  var block = this.block();
                  if (block) {
                      block = new tree.Ruleset(null, block);
                  }
                  return block;
              },
              detachedRuleset: function () {
                  var argInfo;
                  var params;
                  var variadic;
                  parserInput.save();
                  if (parserInput.$re(/^[.#]\(/)) {
                      /**
                       * DR args currently only implemented for each() function, and not
                       * yet settable as `@dr: #(@arg) {}`
                       * This should be done when DRs are merged with mixins.
                       * See: https://github.com/less/less-meta/issues/16
                       */
                      argInfo = this.mixin.args(false);
                      params = argInfo.args;
                      variadic = argInfo.variadic;
                      if (!parserInput.$char(')')) {
                          parserInput.restore();
                          return;
                      }
                  }
                  var blockRuleset = this.blockRuleset();
                  if (blockRuleset) {
                      parserInput.forget();
                      if (params) {
                          return new tree.mixin.Definition(null, params, blockRuleset, null, variadic);
                      }
                      return new tree.DetachedRuleset(blockRuleset);
                  }
                  parserInput.restore();
              },
              //
              // div, .class, body > p {...}
              //
              ruleset: function () {
                  var selectors;
                  var rules;
                  var debugInfo;
                  parserInput.save();
                  if (context.dumpLineNumbers) {
                      debugInfo = getDebugInfo(parserInput.i);
                  }
                  selectors = this.selectors();
                  if (selectors && (rules = this.block())) {
                      parserInput.forget();
                      var ruleset = new (tree.Ruleset)(selectors, rules, context.strictImports);
                      if (context.dumpLineNumbers) {
                          ruleset.debugInfo = debugInfo;
                      }
                      return ruleset;
                  }
                  else {
                      parserInput.restore();
                  }
              },
              declaration: function () {
                  var name;
                  var value;
                  var index = parserInput.i;
                  var hasDR;
                  var c = parserInput.currentChar();
                  var important;
                  var merge;
                  var isVariable;
                  if (c === '.' || c === '#' || c === '&' || c === ':') {
                      return;
                  }
                  parserInput.save();
                  name = this.variable() || this.ruleProperty();
                  if (name) {
                      isVariable = typeof name === 'string';
                      if (isVariable) {
                          value = this.detachedRuleset();
                          if (value) {
                              hasDR = true;
                          }
                      }
                      parserInput.commentStore.length = 0;
                      if (!value) {
                          // a name returned by this.ruleProperty() is always an array of the form:
                          // [string-1, ..., string-n, ""] or [string-1, ..., string-n, "+"]
                          // where each item is a tree.Keyword or tree.Variable
                          merge = !isVariable && name.length > 1 && name.pop().value;
                          // Custom property values get permissive parsing
                          if (name[0].value && name[0].value.slice(0, 2) === '--') {
                              value = this.permissiveValue();
                          }
                          // Try to store values as anonymous
                          // If we need the value later we'll re-parse it in ruleset.parseValue
                          else {
                              value = this.anonymousValue();
                          }
                          if (value) {
                              parserInput.forget();
                              // anonymous values absorb the end ';' which is required for them to work
                              return new (tree.Declaration)(name, value, false, merge, index, fileInfo);
                          }
                          if (!value) {
                              value = this.value();
                          }
                          if (value) {
                              important = this.important();
                          }
                          else if (isVariable) {
                              // As a last resort, try permissiveValue
                              value = this.permissiveValue();
                          }
                      }
                      if (value && (this.end() || hasDR)) {
                          parserInput.forget();
                          return new (tree.Declaration)(name, value, important, merge, index, fileInfo);
                      }
                      else {
                          parserInput.restore();
                      }
                  }
                  else {
                      parserInput.restore();
                  }
              },
              anonymousValue: function () {
                  var index = parserInput.i;
                  var match = parserInput.$re(/^([^.#@\$+\/'"*`(;{}-]*);/);
                  if (match) {
                      return new (tree.Anonymous)(match[1], index);
                  }
              },
              /**
               * Used for custom properties, at-rules, and variables (as fallback)
               * Parses almost anything inside of {} [] () "" blocks
               * until it reaches outer-most tokens.
               *
               * First, it will try to parse comments and entities to reach
               * the end. This is mostly like the Expression parser except no
               * math is allowed.
               */
              permissiveValue: function (untilTokens) {
                  var i;
                  var e;
                  var done;
                  var value;
                  var tok = untilTokens || ';';
                  var index = parserInput.i;
                  var result = [];
                  function testCurrentChar() {
                      var char = parserInput.currentChar();
                      if (typeof tok === 'string') {
                          return char === tok;
                      }
                      else {
                          return tok.test(char);
                      }
                  }
                  if (testCurrentChar()) {
                      return;
                  }
                  value = [];
                  do {
                      e = this.comment();
                      if (e) {
                          value.push(e);
                          continue;
                      }
                      e = this.entity();
                      if (e) {
                          value.push(e);
                      }
                  } while (e);
                  done = testCurrentChar();
                  if (value.length > 0) {
                      value = new (tree.Expression)(value);
                      if (done) {
                          return value;
                      }
                      else {
                          result.push(value);
                      }
                      // Preserve space before $parseUntil as it will not
                      if (parserInput.prevChar() === ' ') {
                          result.push(new tree.Anonymous(' ', index));
                      }
                  }
                  parserInput.save();
                  value = parserInput.$parseUntil(tok);
                  if (value) {
                      if (typeof value === 'string') {
                          error("Expected '" + value + "'", 'Parse');
                      }
                      if (value.length === 1 && value[0] === ' ') {
                          parserInput.forget();
                          return new tree.Anonymous('', index);
                      }
                      var item = void 0;
                      for (i = 0; i < value.length; i++) {
                          item = value[i];
                          if (Array.isArray(item)) {
                              // Treat actual quotes as normal quoted values
                              result.push(new tree.Quoted(item[0], item[1], true, index, fileInfo));
                          }
                          else {
                              if (i === value.length - 1) {
                                  item = item.trim();
                              }
                              // Treat like quoted values, but replace vars like unquoted expressions
                              var quote = new tree.Quoted('\'', item, true, index, fileInfo);
                              quote.variableRegex = /@([\w-]+)/g;
                              quote.propRegex = /\$([\w-]+)/g;
                              result.push(quote);
                          }
                      }
                      parserInput.forget();
                      return new tree.Expression(result, true);
                  }
                  parserInput.restore();
              },
              //
              // An @import atrule
              //
              //     @import "lib";
              //
              // Depending on our environment, importing is done differently:
              // In the browser, it's an XHR request, in Node, it would be a
              // file-system operation. The function used for importing is
              // stored in `import`, which we pass to the Import constructor.
              //
              'import': function () {
                  var path;
                  var features;
                  var index = parserInput.i;
                  var dir = parserInput.$re(/^@import?\s+/);
                  if (dir) {
                      var options_1 = (dir ? this.importOptions() : null) || {};
                      if ((path = this.entities.quoted() || this.entities.url())) {
                          features = this.mediaFeatures();
                          if (!parserInput.$char(';')) {
                              parserInput.i = index;
                              error('missing semi-colon or unrecognised media features on import');
                          }
                          features = features && new (tree.Value)(features);
                          return new (tree.Import)(path, features, options_1, index, fileInfo);
                      }
                      else {
                          parserInput.i = index;
                          error('malformed import statement');
                      }
                  }
              },
              importOptions: function () {
                  var o;
                  var options = {};
                  var optionName;
                  var value;
                  // list of options, surrounded by parens
                  if (!parserInput.$char('(')) {
                      return null;
                  }
                  do {
                      o = this.importOption();
                      if (o) {
                          optionName = o;
                          value = true;
                          switch (optionName) {
                              case 'css':
                                  optionName = 'less';
                                  value = false;
                                  break;
                              case 'once':
                                  optionName = 'multiple';
                                  value = false;
                                  break;
                          }
                          options[optionName] = value;
                          if (!parserInput.$char(',')) {
                              break;
                          }
                      }
                  } while (o);
                  expectChar(')');
                  return options;
              },
              importOption: function () {
                  var opt = parserInput.$re(/^(less|css|multiple|once|inline|reference|optional)/);
                  if (opt) {
                      return opt[1];
                  }
              },
              mediaFeature: function () {
                  var entities = this.entities;
                  var nodes = [];
                  var e;
                  var p;
                  parserInput.save();
                  do {
                      e = entities.keyword() || entities.variable() || entities.mixinLookup();
                      if (e) {
                          nodes.push(e);
                      }
                      else if (parserInput.$char('(')) {
                          p = this.property();
                          e = this.value();
                          if (parserInput.$char(')')) {
                              if (p && e) {
                                  nodes.push(new (tree.Paren)(new (tree.Declaration)(p, e, null, null, parserInput.i, fileInfo, true)));
                              }
                              else if (e) {
                                  nodes.push(new (tree.Paren)(e));
                              }
                              else {
                                  error('badly formed media feature definition');
                              }
                          }
                          else {
                              error('Missing closing \')\'', 'Parse');
                          }
                      }
                  } while (e);
                  parserInput.forget();
                  if (nodes.length > 0) {
                      return new (tree.Expression)(nodes);
                  }
              },
              mediaFeatures: function () {
                  var entities = this.entities;
                  var features = [];
                  var e;
                  do {
                      e = this.mediaFeature();
                      if (e) {
                          features.push(e);
                          if (!parserInput.$char(',')) {
                              break;
                          }
                      }
                      else {
                          e = entities.variable() || entities.mixinLookup();
                          if (e) {
                              features.push(e);
                              if (!parserInput.$char(',')) {
                                  break;
                              }
                          }
                      }
                  } while (e);
                  return features.length > 0 ? features : null;
              },
              media: function () {
                  var features;
                  var rules;
                  var media;
                  var debugInfo;
                  var index = parserInput.i;
                  if (context.dumpLineNumbers) {
                      debugInfo = getDebugInfo(index);
                  }
                  parserInput.save();
                  if (parserInput.$str('@media')) {
                      features = this.mediaFeatures();
                      rules = this.block();
                      if (!rules) {
                          error('media definitions require block statements after any features');
                      }
                      parserInput.forget();
                      media = new (tree.Media)(rules, features, index, fileInfo);
                      if (context.dumpLineNumbers) {
                          media.debugInfo = debugInfo;
                      }
                      return media;
                  }
                  parserInput.restore();
              },
              //
              // A @plugin directive, used to import plugins dynamically.
              //
              //     @plugin (args) "lib";
              //
              plugin: function () {
                  var path;
                  var args;
                  var options;
                  var index = parserInput.i;
                  var dir = parserInput.$re(/^@plugin?\s+/);
                  if (dir) {
                      args = this.pluginArgs();
                      if (args) {
                          options = {
                              pluginArgs: args,
                              isPlugin: true
                          };
                      }
                      else {
                          options = { isPlugin: true };
                      }
                      if ((path = this.entities.quoted() || this.entities.url())) {
                          if (!parserInput.$char(';')) {
                              parserInput.i = index;
                              error('missing semi-colon on @plugin');
                          }
                          return new (tree.Import)(path, null, options, index, fileInfo);
                      }
                      else {
                          parserInput.i = index;
                          error('malformed @plugin statement');
                      }
                  }
              },
              pluginArgs: function () {
                  // list of options, surrounded by parens
                  parserInput.save();
                  if (!parserInput.$char('(')) {
                      parserInput.restore();
                      return null;
                  }
                  var args = parserInput.$re(/^\s*([^\);]+)\)\s*/);
                  if (args[1]) {
                      parserInput.forget();
                      return args[1].trim();
                  }
                  else {
                      parserInput.restore();
                      return null;
                  }
              },
              //
              // A CSS AtRule
              //
              //     @charset "utf-8";
              //
              atrule: function () {
                  var index = parserInput.i;
                  var name;
                  var value;
                  var rules;
                  var nonVendorSpecificName;
                  var hasIdentifier;
                  var hasExpression;
                  var hasUnknown;
                  var hasBlock = true;
                  var isRooted = true;
                  if (parserInput.currentChar() !== '@') {
                      return;
                  }
                  value = this['import']() || this.plugin() || this.media();
                  if (value) {
                      return value;
                  }
                  parserInput.save();
                  name = parserInput.$re(/^@[a-z-]+/);
                  if (!name) {
                      return;
                  }
                  nonVendorSpecificName = name;
                  if (name.charAt(1) == '-' && name.indexOf('-', 2) > 0) {
                      nonVendorSpecificName = "@" + name.slice(name.indexOf('-', 2) + 1);
                  }
                  switch (nonVendorSpecificName) {
                      case '@charset':
                          hasIdentifier = true;
                          hasBlock = false;
                          break;
                      case '@namespace':
                          hasExpression = true;
                          hasBlock = false;
                          break;
                      case '@keyframes':
                      case '@counter-style':
                          hasIdentifier = true;
                          break;
                      case '@document':
                      case '@supports':
                          hasUnknown = true;
                          isRooted = false;
                          break;
                      default:
                          hasUnknown = true;
                          break;
                  }
                  parserInput.commentStore.length = 0;
                  if (hasIdentifier) {
                      value = this.entity();
                      if (!value) {
                          error("expected " + name + " identifier");
                      }
                  }
                  else if (hasExpression) {
                      value = this.expression();
                      if (!value) {
                          error("expected " + name + " expression");
                      }
                  }
                  else if (hasUnknown) {
                      value = this.permissiveValue(/^[{;]/);
                      hasBlock = (parserInput.currentChar() === '{');
                      if (!value) {
                          if (!hasBlock && parserInput.currentChar() !== ';') {
                              error(name + " rule is missing block or ending semi-colon");
                          }
                      }
                      else if (!value.value) {
                          value = null;
                      }
                  }
                  if (hasBlock) {
                      rules = this.blockRuleset();
                  }
                  if (rules || (!hasBlock && value && parserInput.$char(';'))) {
                      parserInput.forget();
                      return new (tree.AtRule)(name, value, rules, index, fileInfo, context.dumpLineNumbers ? getDebugInfo(index) : null, isRooted);
                  }
                  parserInput.restore('at-rule options not recognised');
              },
              //
              // A Value is a comma-delimited list of Expressions
              //
              //     font-family: Baskerville, Georgia, serif;
              //
              // In a Rule, a Value represents everything after the `:`,
              // and before the `;`.
              //
              value: function () {
                  var e;
                  var expressions = [];
                  var index = parserInput.i;
                  do {
                      e = this.expression();
                      if (e) {
                          expressions.push(e);
                          if (!parserInput.$char(',')) {
                              break;
                          }
                      }
                  } while (e);
                  if (expressions.length > 0) {
                      return new (tree.Value)(expressions, index);
                  }
              },
              important: function () {
                  if (parserInput.currentChar() === '!') {
                      return parserInput.$re(/^! *important/);
                  }
              },
              sub: function () {
                  var a;
                  var e;
                  parserInput.save();
                  if (parserInput.$char('(')) {
                      a = this.addition();
                      if (a && parserInput.$char(')')) {
                          parserInput.forget();
                          e = new (tree.Expression)([a]);
                          e.parens = true;
                          return e;
                      }
                      parserInput.restore('Expected \')\'');
                      return;
                  }
                  parserInput.restore();
              },
              multiplication: function () {
                  var m;
                  var a;
                  var op;
                  var operation;
                  var isSpaced;
                  m = this.operand();
                  if (m) {
                      isSpaced = parserInput.isWhitespace(-1);
                      while (true) {
                          if (parserInput.peek(/^\/[*\/]/)) {
                              break;
                          }
                          parserInput.save();
                          op = parserInput.$char('/') || parserInput.$char('*') || parserInput.$str('./');
                          if (!op) {
                              parserInput.forget();
                              break;
                          }
                          a = this.operand();
                          if (!a) {
                              parserInput.restore();
                              break;
                          }
                          parserInput.forget();
                          m.parensInOp = true;
                          a.parensInOp = true;
                          operation = new (tree.Operation)(op, [operation || m, a], isSpaced);
                          isSpaced = parserInput.isWhitespace(-1);
                      }
                      return operation || m;
                  }
              },
              addition: function () {
                  var m;
                  var a;
                  var op;
                  var operation;
                  var isSpaced;
                  m = this.multiplication();
                  if (m) {
                      isSpaced = parserInput.isWhitespace(-1);
                      while (true) {
                          op = parserInput.$re(/^[-+]\s+/) || (!isSpaced && (parserInput.$char('+') || parserInput.$char('-')));
                          if (!op) {
                              break;
                          }
                          a = this.multiplication();
                          if (!a) {
                              break;
                          }
                          m.parensInOp = true;
                          a.parensInOp = true;
                          operation = new (tree.Operation)(op, [operation || m, a], isSpaced);
                          isSpaced = parserInput.isWhitespace(-1);
                      }
                      return operation || m;
                  }
              },
              conditions: function () {
                  var a;
                  var b;
                  var index = parserInput.i;
                  var condition;
                  a = this.condition(true);
                  if (a) {
                      while (true) {
                          if (!parserInput.peek(/^,\s*(not\s*)?\(/) || !parserInput.$char(',')) {
                              break;
                          }
                          b = this.condition(true);
                          if (!b) {
                              break;
                          }
                          condition = new (tree.Condition)('or', condition || a, b, index);
                      }
                      return condition || a;
                  }
              },
              condition: function (needsParens) {
                  var result;
                  var logical;
                  var next;
                  function or() {
                      return parserInput.$str('or');
                  }
                  result = this.conditionAnd(needsParens);
                  if (!result) {
                      return;
                  }
                  logical = or();
                  if (logical) {
                      next = this.condition(needsParens);
                      if (next) {
                          result = new (tree.Condition)(logical, result, next);
                      }
                      else {
                          return;
                      }
                  }
                  return result;
              },
              conditionAnd: function (needsParens) {
                  var result;
                  var logical;
                  var next;
                  var self = this;
                  function insideCondition() {
                      var cond = self.negatedCondition(needsParens) || self.parenthesisCondition(needsParens);
                      if (!cond && !needsParens) {
                          return self.atomicCondition(needsParens);
                      }
                      return cond;
                  }
                  function and() {
                      return parserInput.$str('and');
                  }
                  result = insideCondition();
                  if (!result) {
                      return;
                  }
                  logical = and();
                  if (logical) {
                      next = this.conditionAnd(needsParens);
                      if (next) {
                          result = new (tree.Condition)(logical, result, next);
                      }
                      else {
                          return;
                      }
                  }
                  return result;
              },
              negatedCondition: function (needsParens) {
                  if (parserInput.$str('not')) {
                      var result = this.parenthesisCondition(needsParens);
                      if (result) {
                          result.negate = !result.negate;
                      }
                      return result;
                  }
              },
              parenthesisCondition: function (needsParens) {
                  function tryConditionFollowedByParenthesis(me) {
                      var body;
                      parserInput.save();
                      body = me.condition(needsParens);
                      if (!body) {
                          parserInput.restore();
                          return;
                      }
                      if (!parserInput.$char(')')) {
                          parserInput.restore();
                          return;
                      }
                      parserInput.forget();
                      return body;
                  }
                  var body;
                  parserInput.save();
                  if (!parserInput.$str('(')) {
                      parserInput.restore();
                      return;
                  }
                  body = tryConditionFollowedByParenthesis(this);
                  if (body) {
                      parserInput.forget();
                      return body;
                  }
                  body = this.atomicCondition(needsParens);
                  if (!body) {
                      parserInput.restore();
                      return;
                  }
                  if (!parserInput.$char(')')) {
                      parserInput.restore("expected ')' got '" + parserInput.currentChar() + "'");
                      return;
                  }
                  parserInput.forget();
                  return body;
              },
              atomicCondition: function (needsParens) {
                  var entities = this.entities;
                  var index = parserInput.i;
                  var a;
                  var b;
                  var c;
                  var op;
                  function cond() {
                      return this.addition() || entities.keyword() || entities.quoted() || entities.mixinLookup();
                  }
                  cond = cond.bind(this);
                  a = cond();
                  if (a) {
                      if (parserInput.$char('>')) {
                          if (parserInput.$char('=')) {
                              op = '>=';
                          }
                          else {
                              op = '>';
                          }
                      }
                      else if (parserInput.$char('<')) {
                          if (parserInput.$char('=')) {
                              op = '<=';
                          }
                          else {
                              op = '<';
                          }
                      }
                      else if (parserInput.$char('=')) {
                          if (parserInput.$char('>')) {
                              op = '=>';
                          }
                          else if (parserInput.$char('<')) {
                              op = '=<';
                          }
                          else {
                              op = '=';
                          }
                      }
                      if (op) {
                          b = cond();
                          if (b) {
                              c = new (tree.Condition)(op, a, b, index, false);
                          }
                          else {
                              error('expected expression');
                          }
                      }
                      else {
                          c = new (tree.Condition)('=', a, new (tree.Keyword)('true'), index, false);
                      }
                      return c;
                  }
              },
              //
              // An operand is anything that can be part of an operation,
              // such as a Color, or a Variable
              //
              operand: function () {
                  var entities = this.entities;
                  var negate;
                  if (parserInput.peek(/^-[@\$\(]/)) {
                      negate = parserInput.$char('-');
                  }
                  var o = this.sub() || entities.dimension() ||
                      entities.color() || entities.variable() ||
                      entities.property() || entities.call() ||
                      entities.quoted(true) || entities.colorKeyword() ||
                      entities.mixinLookup();
                  if (negate) {
                      o.parensInOp = true;
                      o = new (tree.Negative)(o);
                  }
                  return o;
              },
              //
              // Expressions either represent mathematical operations,
              // or white-space delimited Entities.
              //
              //     1px solid black
              //     @var * 2
              //
              expression: function () {
                  var entities = [];
                  var e;
                  var delim;
                  var index = parserInput.i;
                  do {
                      e = this.comment();
                      if (e) {
                          entities.push(e);
                          continue;
                      }
                      e = this.addition() || this.entity();
                      if (e instanceof tree.Comment) {
                          e = null;
                      }
                      if (e) {
                          entities.push(e);
                          // operations do not allow keyword "/" dimension (e.g. small/20px) so we support that here
                          if (!parserInput.peek(/^\/[\/*]/)) {
                              delim = parserInput.$char('/');
                              if (delim) {
                                  entities.push(new (tree.Anonymous)(delim, index));
                              }
                          }
                      }
                  } while (e);
                  if (entities.length > 0) {
                      return new (tree.Expression)(entities);
                  }
              },
              property: function () {
                  var name = parserInput.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);
                  if (name) {
                      return name[1];
                  }
              },
              ruleProperty: function () {
                  var name = [];
                  var index = [];
                  var s;
                  var k;
                  parserInput.save();
                  var simpleProperty = parserInput.$re(/^([_a-zA-Z0-9-]+)\s*:/);
                  if (simpleProperty) {
                      name = [new (tree.Keyword)(simpleProperty[1])];
                      parserInput.forget();
                      return name;
                  }
                  function match(re) {
                      var i = parserInput.i;
                      var chunk = parserInput.$re(re);
                      if (chunk) {
                          index.push(i);
                          return name.push(chunk[1]);
                      }
                  }
                  match(/^(\*?)/);
                  while (true) {
                      if (!match(/^((?:[\w-]+)|(?:[@\$]\{[\w-]+\}))/)) {
                          break;
                      }
                  }
                  if ((name.length > 1) && match(/^((?:\+_|\+)?)\s*:/)) {
                      parserInput.forget();
                      // at last, we have the complete match now. move forward,
                      // convert name particles to tree objects and return:
                      if (name[0] === '') {
                          name.shift();
                          index.shift();
                      }
                      for (k = 0; k < name.length; k++) {
                          s = name[k];
                          name[k] = (s.charAt(0) !== '@' && s.charAt(0) !== '$') ?
                              new (tree.Keyword)(s) :
                              (s.charAt(0) === '@' ?
                                  new (tree.Variable)("@" + s.slice(2, -1), index[k], fileInfo) :
                                  new (tree.Property)("$" + s.slice(2, -1), index[k], fileInfo));
                      }
                      return name;
                  }
                  parserInput.restore();
              }
          }
      };
  };
  Parser.serializeVars = function (vars) {
      var s = '';
      for (var name_1 in vars) {
          if (Object.hasOwnProperty.call(vars, name_1)) {
              var value = vars[name_1];
              s += ((name_1[0] === '@') ? '' : '@') + name_1 + ": " + value + ((String(value).slice(-1) === ';') ? '' : ';');
          }
      }
      return s;
  };

  function boolean(condition) {
      return condition ? Keyword.True : Keyword.False;
  }
  function If(condition, trueValue, falseValue) {
      return condition ? trueValue
          : (falseValue || new Anonymous);
  }
  var boolean$1 = { boolean: boolean, 'if': If };

  var colorFunctions;
  function clamp$1(val) {
      return Math.min(1, Math.max(0, val));
  }
  function hsla(origColor, hsl) {
      var color = colorFunctions.hsla(hsl.h, hsl.s, hsl.l, hsl.a);
      if (color) {
          if (origColor.value &&
              /^(rgb|hsl)/.test(origColor.value)) {
              color.value = origColor.value;
          }
          else {
              color.value = 'rgb';
          }
          return color;
      }
  }
  function toHSL(color) {
      if (color.toHSL) {
          return color.toHSL();
      }
      else {
          throw new Error('Argument cannot be evaluated to a color');
      }
  }
  function toHSV(color) {
      if (color.toHSV) {
          return color.toHSV();
      }
      else {
          throw new Error('Argument cannot be evaluated to a color');
      }
  }
  function number(n) {
      if (n instanceof Dimension) {
          return parseFloat(n.unit.is('%') ? n.value / 100 : n.value);
      }
      else if (typeof n === 'number') {
          return n;
      }
      else {
          throw {
              type: 'Argument',
              message: 'color functions take numbers as parameters'
          };
      }
  }
  function scaled(n, size) {
      if (n instanceof Dimension && n.unit.is('%')) {
          return parseFloat(n.value * size / 100);
      }
      else {
          return number(n);
      }
  }
  colorFunctions = {
      rgb: function (r, g, b) {
          var color = colorFunctions.rgba(r, g, b, 1.0);
          if (color) {
              color.value = 'rgb';
              return color;
          }
      },
      rgba: function (r, g, b, a) {
          try {
              if (r instanceof Color) {
                  if (g) {
                      a = number(g);
                  }
                  else {
                      a = r.alpha;
                  }
                  return new Color(r.rgb, a, 'rgba');
              }
              var rgb = [r, g, b].map(function (c) { return scaled(c, 255); });
              a = number(a);
              return new Color(rgb, a, 'rgba');
          }
          catch (e) { }
      },
      hsl: function (h, s, l) {
          var color = colorFunctions.hsla(h, s, l, 1.0);
          if (color) {
              color.value = 'hsl';
              return color;
          }
      },
      hsla: function (h, s, l, a) {
          try {
              if (h instanceof Color) {
                  if (s) {
                      a = number(s);
                  }
                  else {
                      a = h.alpha;
                  }
                  return new Color(h.rgb, a, 'hsla');
              }
              var m1_1;
              var m2_1;
              function hue(h) {
                  h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
                  if (h * 6 < 1) {
                      return m1_1 + (m2_1 - m1_1) * h * 6;
                  }
                  else if (h * 2 < 1) {
                      return m2_1;
                  }
                  else if (h * 3 < 2) {
                      return m1_1 + (m2_1 - m1_1) * (2 / 3 - h) * 6;
                  }
                  else {
                      return m1_1;
                  }
              }
              h = (number(h) % 360) / 360;
              s = clamp$1(number(s));
              l = clamp$1(number(l));
              a = clamp$1(number(a));
              m2_1 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
              m1_1 = l * 2 - m2_1;
              var rgb = [
                  hue(h + 1 / 3) * 255,
                  hue(h) * 255,
                  hue(h - 1 / 3) * 255
              ];
              a = number(a);
              return new Color(rgb, a, 'hsla');
          }
          catch (e) { }
      },
      hsv: function (h, s, v) {
          return colorFunctions.hsva(h, s, v, 1.0);
      },
      hsva: function (h, s, v, a) {
          h = ((number(h) % 360) / 360) * 360;
          s = number(s);
          v = number(v);
          a = number(a);
          var i;
          var f;
          i = Math.floor((h / 60) % 6);
          f = (h / 60) - i;
          var vs = [v,
              v * (1 - s),
              v * (1 - f * s),
              v * (1 - (1 - f) * s)];
          var perm = [[0, 3, 1],
              [2, 0, 1],
              [1, 0, 3],
              [1, 2, 0],
              [3, 1, 0],
              [0, 1, 2]];
          return colorFunctions.rgba(vs[perm[i][0]] * 255, vs[perm[i][1]] * 255, vs[perm[i][2]] * 255, a);
      },
      hue: function (color) {
          return new Dimension(toHSL(color).h);
      },
      saturation: function (color) {
          return new Dimension(toHSL(color).s * 100, '%');
      },
      lightness: function (color) {
          return new Dimension(toHSL(color).l * 100, '%');
      },
      hsvhue: function (color) {
          return new Dimension(toHSV(color).h);
      },
      hsvsaturation: function (color) {
          return new Dimension(toHSV(color).s * 100, '%');
      },
      hsvvalue: function (color) {
          return new Dimension(toHSV(color).v * 100, '%');
      },
      red: function (color) {
          return new Dimension(color.rgb[0]);
      },
      green: function (color) {
          return new Dimension(color.rgb[1]);
      },
      blue: function (color) {
          return new Dimension(color.rgb[2]);
      },
      alpha: function (color) {
          return new Dimension(toHSL(color).a);
      },
      luma: function (color) {
          return new Dimension(color.luma() * color.alpha * 100, '%');
      },
      luminance: function (color) {
          var luminance = (0.2126 * color.rgb[0] / 255) +
              (0.7152 * color.rgb[1] / 255) +
              (0.0722 * color.rgb[2] / 255);
          return new Dimension(luminance * color.alpha * 100, '%');
      },
      saturate: function (color, amount, method) {
          // filter: saturate(3.2);
          // should be kept as is, so check for color
          if (!color.rgb) {
              return null;
          }
          var hsl = toHSL(color);
          if (typeof method !== 'undefined' && method.value === 'relative') {
              hsl.s += hsl.s * amount.value / 100;
          }
          else {
              hsl.s += amount.value / 100;
          }
          hsl.s = clamp$1(hsl.s);
          return hsla(color, hsl);
      },
      desaturate: function (color, amount, method) {
          var hsl = toHSL(color);
          if (typeof method !== 'undefined' && method.value === 'relative') {
              hsl.s -= hsl.s * amount.value / 100;
          }
          else {
              hsl.s -= amount.value / 100;
          }
          hsl.s = clamp$1(hsl.s);
          return hsla(color, hsl);
      },
      lighten: function (color, amount, method) {
          var hsl = toHSL(color);
          if (typeof method !== 'undefined' && method.value === 'relative') {
              hsl.l += hsl.l * amount.value / 100;
          }
          else {
              hsl.l += amount.value / 100;
          }
          hsl.l = clamp$1(hsl.l);
          return hsla(color, hsl);
      },
      darken: function (color, amount, method) {
          var hsl = toHSL(color);
          if (typeof method !== 'undefined' && method.value === 'relative') {
              hsl.l -= hsl.l * amount.value / 100;
          }
          else {
              hsl.l -= amount.value / 100;
          }
          hsl.l = clamp$1(hsl.l);
          return hsla(color, hsl);
      },
      fadein: function (color, amount, method) {
          var hsl = toHSL(color);
          if (typeof method !== 'undefined' && method.value === 'relative') {
              hsl.a += hsl.a * amount.value / 100;
          }
          else {
              hsl.a += amount.value / 100;
          }
          hsl.a = clamp$1(hsl.a);
          return hsla(color, hsl);
      },
      fadeout: function (color, amount, method) {
          var hsl = toHSL(color);
          if (typeof method !== 'undefined' && method.value === 'relative') {
              hsl.a -= hsl.a * amount.value / 100;
          }
          else {
              hsl.a -= amount.value / 100;
          }
          hsl.a = clamp$1(hsl.a);
          return hsla(color, hsl);
      },
      fade: function (color, amount) {
          var hsl = toHSL(color);
          hsl.a = amount.value / 100;
          hsl.a = clamp$1(hsl.a);
          return hsla(color, hsl);
      },
      spin: function (color, amount) {
          var hsl = toHSL(color);
          var hue = (hsl.h + amount.value) % 360;
          hsl.h = hue < 0 ? 360 + hue : hue;
          return hsla(color, hsl);
      },
      //
      // Copyright (c) 2006-2009 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
      // http://sass-lang.com
      //
      mix: function (color1, color2, weight) {
          if (!weight) {
              weight = new Dimension(50);
          }
          var p = weight.value / 100.0;
          var w = p * 2 - 1;
          var a = toHSL(color1).a - toHSL(color2).a;
          var w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
          var w2 = 1 - w1;
          var rgb = [color1.rgb[0] * w1 + color2.rgb[0] * w2,
              color1.rgb[1] * w1 + color2.rgb[1] * w2,
              color1.rgb[2] * w1 + color2.rgb[2] * w2];
          var alpha = color1.alpha * p + color2.alpha * (1 - p);
          return new Color(rgb, alpha);
      },
      greyscale: function (color) {
          return colorFunctions.desaturate(color, new Dimension(100));
      },
      contrast: function (color, dark, light, threshold) {
          // filter: contrast(3.2);
          // should be kept as is, so check for color
          if (!color.rgb) {
              return null;
          }
          if (typeof light === 'undefined') {
              light = colorFunctions.rgba(255, 255, 255, 1.0);
          }
          if (typeof dark === 'undefined') {
              dark = colorFunctions.rgba(0, 0, 0, 1.0);
          }
          // Figure out which is actually light and dark:
          if (dark.luma() > light.luma()) {
              var t = light;
              light = dark;
              dark = t;
          }
          if (typeof threshold === 'undefined') {
              threshold = 0.43;
          }
          else {
              threshold = number(threshold);
          }
          if (color.luma() < threshold) {
              return light;
          }
          else {
              return dark;
          }
      },
      // Changes made in 2.7.0 - Reverted in 3.0.0
      // contrast: function (color, color1, color2, threshold) {
      //     // Return which of `color1` and `color2` has the greatest contrast with `color`
      //     // according to the standard WCAG contrast ratio calculation.
      //     // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
      //     // The threshold param is no longer used, in line with SASS.
      //     // filter: contrast(3.2);
      //     // should be kept as is, so check for color
      //     if (!color.rgb) {
      //         return null;
      //     }
      //     if (typeof color1 === 'undefined') {
      //         color1 = colorFunctions.rgba(0, 0, 0, 1.0);
      //     }
      //     if (typeof color2 === 'undefined') {
      //         color2 = colorFunctions.rgba(255, 255, 255, 1.0);
      //     }
      //     var contrast1, contrast2;
      //     var luma = color.luma();
      //     var luma1 = color1.luma();
      //     var luma2 = color2.luma();
      //     // Calculate contrast ratios for each color
      //     if (luma > luma1) {
      //         contrast1 = (luma + 0.05) / (luma1 + 0.05);
      //     } else {
      //         contrast1 = (luma1 + 0.05) / (luma + 0.05);
      //     }
      //     if (luma > luma2) {
      //         contrast2 = (luma + 0.05) / (luma2 + 0.05);
      //     } else {
      //         contrast2 = (luma2 + 0.05) / (luma + 0.05);
      //     }
      //     if (contrast1 > contrast2) {
      //         return color1;
      //     } else {
      //         return color2;
      //     }
      // },
      argb: function (color) {
          return new Anonymous(color.toARGB());
      },
      color: function (c) {
          if ((c instanceof Quoted) &&
              (/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})$/i.test(c.value))) {
              var val = c.value.slice(1);
              return new Color(val, undefined, "#" + val);
          }
          if ((c instanceof Color) || (c = Color.fromKeyword(c.value))) {
              c.value = undefined;
              return c;
          }
          throw {
              type: 'Argument',
              message: 'argument must be a color keyword or 3|4|6|8 digit hex e.g. #FFF'
          };
      },
      tint: function (color, amount) {
          return colorFunctions.mix(colorFunctions.rgb(255, 255, 255), color, amount);
      },
      shade: function (color, amount) {
          return colorFunctions.mix(colorFunctions.rgb(0, 0, 0), color, amount);
      }
  };
  var color = colorFunctions;

  // Color Blending
  // ref: http://www.w3.org/TR/compositing-1
  function colorBlend(mode, color1, color2) {
      var ab = color1.alpha; // result
      var // backdrop
      cb;
      var as = color2.alpha;
      var // source
      cs;
      var ar;
      var cr;
      var r = [];
      ar = as + ab * (1 - as);
      for (var i_1 = 0; i_1 < 3; i_1++) {
          cb = color1.rgb[i_1] / 255;
          cs = color2.rgb[i_1] / 255;
          cr = mode(cb, cs);
          if (ar) {
              cr = (as * cs + ab * (cb -
                  as * (cb + cs - cr))) / ar;
          }
          r[i_1] = cr * 255;
      }
      return new Color(r, ar);
  }
  var colorBlendModeFunctions = {
      multiply: function (cb, cs) {
          return cb * cs;
      },
      screen: function (cb, cs) {
          return cb + cs - cb * cs;
      },
      overlay: function (cb, cs) {
          cb *= 2;
          return (cb <= 1) ?
              colorBlendModeFunctions.multiply(cb, cs) :
              colorBlendModeFunctions.screen(cb - 1, cs);
      },
      softlight: function (cb, cs) {
          var d = 1;
          var e = cb;
          if (cs > 0.5) {
              e = 1;
              d = (cb > 0.25) ? Math.sqrt(cb)
                  : ((16 * cb - 12) * cb + 4) * cb;
          }
          return cb - (1 - 2 * cs) * e * (d - cb);
      },
      hardlight: function (cb, cs) {
          return colorBlendModeFunctions.overlay(cs, cb);
      },
      difference: function (cb, cs) {
          return Math.abs(cb - cs);
      },
      exclusion: function (cb, cs) {
          return cb + cs - 2 * cb * cs;
      },
      // non-w3c functions:
      average: function (cb, cs) {
          return (cb + cs) / 2;
      },
      negation: function (cb, cs) {
          return 1 - Math.abs(cb + cs - 1);
      }
  };
  for (var f in colorBlendModeFunctions) {
      if (colorBlendModeFunctions.hasOwnProperty(f)) {
          colorBlend[f] = colorBlend.bind(null, colorBlendModeFunctions[f]);
      }
  }

  var dataUri = (function (environment) {
      var fallback = function (functionThis, node) { return new URL(node, functionThis.index, functionThis.currentFileInfo).eval(functionThis.context); };
      return { 'data-uri': function (mimetypeNode, filePathNode) {
              if (!filePathNode) {
                  filePathNode = mimetypeNode;
                  mimetypeNode = null;
              }
              var mimetype = mimetypeNode && mimetypeNode.value;
              var filePath = filePathNode.value;
              var currentFileInfo = this.currentFileInfo;
              var currentDirectory = currentFileInfo.rewriteUrls ?
                  currentFileInfo.currentDirectory : currentFileInfo.entryPath;
              var fragmentStart = filePath.indexOf('#');
              var fragment = '';
              if (fragmentStart !== -1) {
                  fragment = filePath.slice(fragmentStart);
                  filePath = filePath.slice(0, fragmentStart);
              }
              var context = clone(this.context);
              context.rawBuffer = true;
              var fileManager = environment.getFileManager(filePath, currentDirectory, context, environment, true);
              if (!fileManager) {
                  return fallback(this, filePathNode);
              }
              var useBase64 = false;
              // detect the mimetype if not given
              if (!mimetypeNode) {
                  mimetype = environment.mimeLookup(filePath);
                  if (mimetype === 'image/svg+xml') {
                      useBase64 = false;
                  }
                  else {
                      // use base 64 unless it's an ASCII or UTF-8 format
                      var charset = environment.charsetLookup(mimetype);
                      useBase64 = ['US-ASCII', 'UTF-8'].indexOf(charset) < 0;
                  }
                  if (useBase64) {
                      mimetype += ';base64';
                  }
              }
              else {
                  useBase64 = /;base64$/.test(mimetype);
              }
              var fileSync = fileManager.loadFileSync(filePath, currentDirectory, context, environment);
              if (!fileSync.contents) {
                  logger.warn("Skipped data-uri embedding of " + filePath + " because file not found");
                  return fallback(this, filePathNode || mimetypeNode);
              }
              var buf = fileSync.contents;
              if (useBase64 && !environment.encodeBase64) {
                  return fallback(this, filePathNode);
              }
              buf = useBase64 ? environment.encodeBase64(buf) : encodeURIComponent(buf);
              var uri = "data:" + mimetype + "," + buf + fragment;
              return new URL(new Quoted("\"" + uri + "\"", uri, false, this.index, this.currentFileInfo), this.index, this.currentFileInfo);
          } };
  });

  var getItemsFromNode = function (node) {
      // handle non-array values as an array of length 1
      // return 'undefined' if index is invalid
      var items = Array.isArray(node.value) ?
          node.value : Array(node);
      return items;
  };
  var list = {
      _SELF: function (n) {
          return n;
      },
      extract: function (values, index) {
          // (1-based index)
          index = index.value - 1;
          return getItemsFromNode(values)[index];
      },
      length: function (values) {
          return new Dimension(getItemsFromNode(values).length);
      },
      /**
       * Creates a Less list of incremental values.
       * Modeled after Lodash's range function, also exists natively in PHP
       *
       * @param {Dimension} [start=1]
       * @param {Dimension} end  - e.g. 10 or 10px - unit is added to output
       * @param {Dimension} [step=1]
       */
      range: function (start, end, step) {
          var from;
          var to;
          var stepValue = 1;
          var list = [];
          if (end) {
              to = end;
              from = start.value;
              if (step) {
                  stepValue = step.value;
              }
          }
          else {
              from = 1;
              to = start;
          }
          for (var i_1 = from; i_1 <= to.value; i_1 += stepValue) {
              list.push(new Dimension(i_1, to.unit));
          }
          return new Expression(list);
      },
      each: function (list, rs) {
          var rules = [];
          var newRules;
          var iterator;
          if (list.value && !(list instanceof Quoted)) {
              if (Array.isArray(list.value)) {
                  iterator = list.value;
              }
              else {
                  iterator = [list.value];
              }
          }
          else if (list.ruleset) {
              iterator = list.ruleset.rules;
          }
          else if (list.rules) {
              iterator = list.rules;
          }
          else if (Array.isArray(list)) {
              iterator = list;
          }
          else {
              iterator = [list];
          }
          var valueName = '@value';
          var keyName = '@key';
          var indexName = '@index';
          if (rs.params) {
              valueName = rs.params[0] && rs.params[0].name;
              keyName = rs.params[1] && rs.params[1].name;
              indexName = rs.params[2] && rs.params[2].name;
              rs = rs.rules;
          }
          else {
              rs = rs.ruleset;
          }
          for (var i_2 = 0; i_2 < iterator.length; i_2++) {
              var key = void 0;
              var value = void 0;
              var item = iterator[i_2];
              if (item instanceof Declaration) {
                  key = typeof item.name === 'string' ? item.name : item.name[0].value;
                  value = item.value;
              }
              else {
                  key = new Dimension(i_2 + 1);
                  value = item;
              }
              if (item instanceof Comment) {
                  continue;
              }
              newRules = rs.rules.slice(0);
              if (valueName) {
                  newRules.push(new Declaration(valueName, value, false, false, this.index, this.currentFileInfo));
              }
              if (indexName) {
                  newRules.push(new Declaration(indexName, new Dimension(i_2 + 1), false, false, this.index, this.currentFileInfo));
              }
              if (keyName) {
                  newRules.push(new Declaration(keyName, key, false, false, this.index, this.currentFileInfo));
              }
              rules.push(new Ruleset([new (Selector)([new Element("", '&')])], newRules, rs.strictImports, rs.visibilityInfo()));
          }
          return new Ruleset([new (Selector)([new Element("", '&')])], rules, rs.strictImports, rs.visibilityInfo()).eval(this.context);
      }
  };

  var MathHelper = function (fn, unit, n) {
      if (!(n instanceof Dimension)) {
          throw { type: 'Argument', message: 'argument must be a number' };
      }
      if (unit == null) {
          unit = n.unit;
      }
      else {
          n = n.unify();
      }
      return new Dimension(fn(parseFloat(n.value)), unit);
  };

  var mathFunctions = {
      // name,  unit
      ceil: null,
      floor: null,
      sqrt: null,
      abs: null,
      tan: '',
      sin: '',
      cos: '',
      atan: 'rad',
      asin: 'rad',
      acos: 'rad'
  };
  for (var f$1 in mathFunctions) {
      if (mathFunctions.hasOwnProperty(f$1)) {
          mathFunctions[f$1] = MathHelper.bind(null, Math[f$1], mathFunctions[f$1]);
      }
  }
  mathFunctions.round = function (n, f) {
      var fraction = typeof f === 'undefined' ? 0 : f.value;
      return MathHelper(function (num) { return num.toFixed(fraction); }, null, n);
  };

  var minMax = function (isMin, args) {
      args = Array.prototype.slice.call(args);
      switch (args.length) {
          case 0: throw { type: 'Argument', message: 'one or more arguments required' };
      }
      var i; // key is the unit.toString() for unified Dimension values,
      var j;
      var current;
      var currentUnified;
      var referenceUnified;
      var unit;
      var unitStatic;
      var unitClone;
      var // elems only contains original argument values.
      order = [];
      var values = {};
      // value is the index into the order array.
      for (i = 0; i < args.length; i++) {
          current = args[i];
          if (!(current instanceof Dimension)) {
              if (Array.isArray(args[i].value)) {
                  Array.prototype.push.apply(args, Array.prototype.slice.call(args[i].value));
              }
              continue;
          }
          currentUnified = current.unit.toString() === '' && unitClone !== undefined ? new Dimension(current.value, unitClone).unify() : current.unify();
          unit = currentUnified.unit.toString() === '' && unitStatic !== undefined ? unitStatic : currentUnified.unit.toString();
          unitStatic = unit !== '' && unitStatic === undefined || unit !== '' && order[0].unify().unit.toString() === '' ? unit : unitStatic;
          unitClone = unit !== '' && unitClone === undefined ? current.unit.toString() : unitClone;
          j = values[''] !== undefined && unit !== '' && unit === unitStatic ? values[''] : values[unit];
          if (j === undefined) {
              if (unitStatic !== undefined && unit !== unitStatic) {
                  throw { type: 'Argument', message: 'incompatible types' };
              }
              values[unit] = order.length;
              order.push(current);
              continue;
          }
          referenceUnified = order[j].unit.toString() === '' && unitClone !== undefined ? new Dimension(order[j].value, unitClone).unify() : order[j].unify();
          if (isMin && currentUnified.value < referenceUnified.value ||
              !isMin && currentUnified.value > referenceUnified.value) {
              order[j] = current;
          }
      }
      if (order.length == 1) {
          return order[0];
      }
      args = order.map(function (a) { return a.toCSS(this.context); }).join(this.context.compress ? ',' : ', ');
      return new Anonymous((isMin ? 'min' : 'max') + "(" + args + ")");
  };
  var number$1 = {
      min: function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          return minMax(true, args);
      },
      max: function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          return minMax(false, args);
      },
      convert: function (val, unit) {
          return val.convertTo(unit.value);
      },
      pi: function () {
          return new Dimension(Math.PI);
      },
      mod: function (a, b) {
          return new Dimension(a.value % b.value, a.unit);
      },
      pow: function (x, y) {
          if (typeof x === 'number' && typeof y === 'number') {
              x = new Dimension(x);
              y = new Dimension(y);
          }
          else if (!(x instanceof Dimension) || !(y instanceof Dimension)) {
              throw { type: 'Argument', message: 'arguments must be numbers' };
          }
          return new Dimension(Math.pow(x.value, y.value), x.unit);
      },
      percentage: function (n) {
          var result = MathHelper(function (num) { return num * 100; }, '%', n);
          return result;
      }
  };

  var string = {
      e: function (str) {
          return new Quoted('"', str instanceof JavaScript ? str.evaluated : str.value, true);
      },
      escape: function (str) {
          return new Anonymous(encodeURI(str.value).replace(/=/g, '%3D').replace(/:/g, '%3A').replace(/#/g, '%23').replace(/;/g, '%3B')
              .replace(/\(/g, '%28').replace(/\)/g, '%29'));
      },
      replace: function (string, pattern, replacement, flags) {
          var result = string.value;
          replacement = (replacement.type === 'Quoted') ?
              replacement.value : replacement.toCSS();
          result = result.replace(new RegExp(pattern.value, flags ? flags.value : ''), replacement);
          return new Quoted(string.quote || '', result, string.escaped);
      },
      '%': function (string /* arg, arg, ... */) {
          var args = Array.prototype.slice.call(arguments, 1);
          var result = string.value;
          var _loop_1 = function (i_1) {
              /* jshint loopfunc:true */
              result = result.replace(/%[sda]/i, function (token) {
                  var value = ((args[i_1].type === 'Quoted') &&
                      token.match(/s/i)) ? args[i_1].value : args[i_1].toCSS();
                  return token.match(/[A-Z]$/) ? encodeURIComponent(value) : value;
              });
          };
          for (var i_1 = 0; i_1 < args.length; i_1++) {
              _loop_1(i_1);
          }
          result = result.replace(/%%/g, '%');
          return new Quoted(string.quote || '', result, string.escaped);
      }
  };

  var svg = (function (environment) {
      return { 'svg-gradient': function (direction) {
              var stops;
              var gradientDirectionSvg;
              var gradientType = 'linear';
              var rectangleDimension = 'x="0" y="0" width="1" height="1"';
              var renderEnv = { compress: false };
              var returner;
              var directionValue = direction.toCSS(renderEnv);
              var i;
              var color;
              var position;
              var positionValue;
              var alpha;
              function throwArgumentDescriptor() {
                  throw { type: 'Argument',
                      message: 'svg-gradient expects direction, start_color [start_position], [color position,]...,' +
                          ' end_color [end_position] or direction, color list' };
              }
              if (arguments.length == 2) {
                  if (arguments[1].value.length < 2) {
                      throwArgumentDescriptor();
                  }
                  stops = arguments[1].value;
              }
              else if (arguments.length < 3) {
                  throwArgumentDescriptor();
              }
              else {
                  stops = Array.prototype.slice.call(arguments, 1);
              }
              switch (directionValue) {
                  case 'to bottom':
                      gradientDirectionSvg = 'x1="0%" y1="0%" x2="0%" y2="100%"';
                      break;
                  case 'to right':
                      gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="0%"';
                      break;
                  case 'to bottom right':
                      gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="100%"';
                      break;
                  case 'to top right':
                      gradientDirectionSvg = 'x1="0%" y1="100%" x2="100%" y2="0%"';
                      break;
                  case 'ellipse':
                  case 'ellipse at center':
                      gradientType = 'radial';
                      gradientDirectionSvg = 'cx="50%" cy="50%" r="75%"';
                      rectangleDimension = 'x="-50" y="-50" width="101" height="101"';
                      break;
                  default:
                      throw { type: 'Argument', message: 'svg-gradient direction must be \'to bottom\', \'to right\',' +
                              ' \'to bottom right\', \'to top right\' or \'ellipse at center\'' };
              }
              returner = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1 1\"><" + gradientType + "Gradient id=\"g\" " + gradientDirectionSvg + ">";
              for (i = 0; i < stops.length; i += 1) {
                  if (stops[i] instanceof Expression) {
                      color = stops[i].value[0];
                      position = stops[i].value[1];
                  }
                  else {
                      color = stops[i];
                      position = undefined;
                  }
                  if (!(color instanceof Color) || (!((i === 0 || i + 1 === stops.length) && position === undefined) && !(position instanceof Dimension))) {
                      throwArgumentDescriptor();
                  }
                  positionValue = position ? position.toCSS(renderEnv) : i === 0 ? '0%' : '100%';
                  alpha = color.alpha;
                  returner += "<stop offset=\"" + positionValue + "\" stop-color=\"" + color.toRGB() + "\"" + (alpha < 1 ? " stop-opacity=\"" + alpha + "\"" : '') + "/>";
              }
              returner += "</" + gradientType + "Gradient><rect " + rectangleDimension + " fill=\"url(#g)\" /></svg>";
              returner = encodeURIComponent(returner);
              returner = "data:image/svg+xml," + returner;
              return new URL(new Quoted("'" + returner + "'", returner, false, this.index, this.currentFileInfo), this.index, this.currentFileInfo);
          } };
  });

  var isa = function (n, Type) { return (n instanceof Type) ? Keyword.True : Keyword.False; };
  var isunit = function (n, unit) {
      if (unit === undefined) {
          throw { type: 'Argument', message: 'missing the required second argument to isunit.' };
      }
      unit = typeof unit.value === 'string' ? unit.value : unit;
      if (typeof unit !== 'string') {
          throw { type: 'Argument', message: 'Second argument to isunit should be a unit or a string.' };
      }
      return (n instanceof Dimension) && n.unit.is(unit) ? Keyword.True : Keyword.False;
  };
  var types = {
      isruleset: function (n) {
          return isa(n, DetachedRuleset);
      },
      iscolor: function (n) {
          return isa(n, Color);
      },
      isnumber: function (n) {
          return isa(n, Dimension);
      },
      isstring: function (n) {
          return isa(n, Quoted);
      },
      iskeyword: function (n) {
          return isa(n, Keyword);
      },
      isurl: function (n) {
          return isa(n, URL);
      },
      ispixel: function (n) {
          return isunit(n, 'px');
      },
      ispercentage: function (n) {
          return isunit(n, '%');
      },
      isem: function (n) {
          return isunit(n, 'em');
      },
      isunit: isunit,
      unit: function (val, unit) {
          if (!(val instanceof Dimension)) {
              throw { type: 'Argument',
                  message: "the first argument to unit must be a number" + (val instanceof Operation ? '. Have you forgotten parenthesis?' : '') };
          }
          if (unit) {
              if (unit instanceof Keyword) {
                  unit = unit.value;
              }
              else {
                  unit = unit.toCSS();
              }
          }
          else {
              unit = '';
          }
          return new Dimension(val.value, unit);
      },
      'get-unit': function (n) {
          return new Anonymous(n.unit);
      }
  };

  var Functions = (function (environment) {
      var functions = { functionRegistry: functionRegistry, functionCaller: functionCaller };
      // register functions
      functionRegistry.addMultiple(boolean$1);
      functionRegistry.add('default', defaultFunc.eval.bind(defaultFunc));
      functionRegistry.addMultiple(color);
      functionRegistry.addMultiple(colorBlend);
      functionRegistry.addMultiple(dataUri(environment));
      functionRegistry.addMultiple(list);
      functionRegistry.addMultiple(mathFunctions);
      functionRegistry.addMultiple(number$1);
      functionRegistry.addMultiple(string);
      functionRegistry.addMultiple(svg());
      functionRegistry.addMultiple(types);
      return functions;
  });

  var sourceMapOutput = (function (environment) {
      var SourceMapOutput = /** @class */ (function () {
          function SourceMapOutput(options) {
              this._css = [];
              this._rootNode = options.rootNode;
              this._contentsMap = options.contentsMap;
              this._contentsIgnoredCharsMap = options.contentsIgnoredCharsMap;
              if (options.sourceMapFilename) {
                  this._sourceMapFilename = options.sourceMapFilename.replace(/\\/g, '/');
              }
              this._outputFilename = options.outputFilename;
              this.sourceMapURL = options.sourceMapURL;
              if (options.sourceMapBasepath) {
                  this._sourceMapBasepath = options.sourceMapBasepath.replace(/\\/g, '/');
              }
              if (options.sourceMapRootpath) {
                  this._sourceMapRootpath = options.sourceMapRootpath.replace(/\\/g, '/');
                  if (this._sourceMapRootpath.charAt(this._sourceMapRootpath.length - 1) !== '/') {
                      this._sourceMapRootpath += '/';
                  }
              }
              else {
                  this._sourceMapRootpath = '';
              }
              this._outputSourceFiles = options.outputSourceFiles;
              this._sourceMapGeneratorConstructor = environment.getSourceMapGenerator();
              this._lineNumber = 0;
              this._column = 0;
          }
          SourceMapOutput.prototype.removeBasepath = function (path) {
              if (this._sourceMapBasepath && path.indexOf(this._sourceMapBasepath) === 0) {
                  path = path.substring(this._sourceMapBasepath.length);
                  if (path.charAt(0) === '\\' || path.charAt(0) === '/') {
                      path = path.substring(1);
                  }
              }
              return path;
          };
          SourceMapOutput.prototype.normalizeFilename = function (filename) {
              filename = filename.replace(/\\/g, '/');
              filename = this.removeBasepath(filename);
              return (this._sourceMapRootpath || '') + filename;
          };
          SourceMapOutput.prototype.add = function (chunk, fileInfo, index, mapLines) {
              // ignore adding empty strings
              if (!chunk) {
                  return;
              }
              var lines;
              var sourceLines;
              var columns;
              var sourceColumns;
              var i;
              if (fileInfo && fileInfo.filename) {
                  var inputSource = this._contentsMap[fileInfo.filename];
                  // remove vars/banner added to the top of the file
                  if (this._contentsIgnoredCharsMap[fileInfo.filename]) {
                      // adjust the index
                      index -= this._contentsIgnoredCharsMap[fileInfo.filename];
                      if (index < 0) {
                          index = 0;
                      }
                      // adjust the source
                      inputSource = inputSource.slice(this._contentsIgnoredCharsMap[fileInfo.filename]);
                  }
                  // ignore empty content
                  if (inputSource === undefined) {
                      return;
                  }
                  inputSource = inputSource.substring(0, index);
                  sourceLines = inputSource.split('\n');
                  sourceColumns = sourceLines[sourceLines.length - 1];
              }
              lines = chunk.split('\n');
              columns = lines[lines.length - 1];
              if (fileInfo && fileInfo.filename) {
                  if (!mapLines) {
                      this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + 1, column: this._column },
                          original: { line: sourceLines.length, column: sourceColumns.length },
                          source: this.normalizeFilename(fileInfo.filename) });
                  }
                  else {
                      for (i = 0; i < lines.length; i++) {
                          this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + i + 1, column: i === 0 ? this._column : 0 },
                              original: { line: sourceLines.length + i, column: i === 0 ? sourceColumns.length : 0 },
                              source: this.normalizeFilename(fileInfo.filename) });
                      }
                  }
              }
              if (lines.length === 1) {
                  this._column += columns.length;
              }
              else {
                  this._lineNumber += lines.length - 1;
                  this._column = columns.length;
              }
              this._css.push(chunk);
          };
          SourceMapOutput.prototype.isEmpty = function () {
              return this._css.length === 0;
          };
          SourceMapOutput.prototype.toCSS = function (context) {
              this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({ file: this._outputFilename, sourceRoot: null });
              if (this._outputSourceFiles) {
                  for (var filename in this._contentsMap) {
                      if (this._contentsMap.hasOwnProperty(filename)) {
                          var source = this._contentsMap[filename];
                          if (this._contentsIgnoredCharsMap[filename]) {
                              source = source.slice(this._contentsIgnoredCharsMap[filename]);
                          }
                          this._sourceMapGenerator.setSourceContent(this.normalizeFilename(filename), source);
                      }
                  }
              }
              this._rootNode.genCSS(context, this);
              if (this._css.length > 0) {
                  var sourceMapURL = void 0;
                  var sourceMapContent = JSON.stringify(this._sourceMapGenerator.toJSON());
                  if (this.sourceMapURL) {
                      sourceMapURL = this.sourceMapURL;
                  }
                  else if (this._sourceMapFilename) {
                      sourceMapURL = this._sourceMapFilename;
                  }
                  this.sourceMapURL = sourceMapURL;
                  this.sourceMap = sourceMapContent;
              }
              return this._css.join('');
          };
          return SourceMapOutput;
      }());
      return SourceMapOutput;
  });

  var sourceMapBuilder = (function (SourceMapOutput, environment) {
      var SourceMapBuilder = /** @class */ (function () {
          function SourceMapBuilder(options) {
              this.options = options;
          }
          SourceMapBuilder.prototype.toCSS = function (rootNode, options, imports) {
              var sourceMapOutput = new SourceMapOutput({
                  contentsIgnoredCharsMap: imports.contentsIgnoredChars,
                  rootNode: rootNode,
                  contentsMap: imports.contents,
                  sourceMapFilename: this.options.sourceMapFilename,
                  sourceMapURL: this.options.sourceMapURL,
                  outputFilename: this.options.sourceMapOutputFilename,
                  sourceMapBasepath: this.options.sourceMapBasepath,
                  sourceMapRootpath: this.options.sourceMapRootpath,
                  outputSourceFiles: this.options.outputSourceFiles,
                  sourceMapGenerator: this.options.sourceMapGenerator,
                  sourceMapFileInline: this.options.sourceMapFileInline
              });
              var css = sourceMapOutput.toCSS(options);
              this.sourceMap = sourceMapOutput.sourceMap;
              this.sourceMapURL = sourceMapOutput.sourceMapURL;
              if (this.options.sourceMapInputFilename) {
                  this.sourceMapInputFilename = sourceMapOutput.normalizeFilename(this.options.sourceMapInputFilename);
              }
              if (this.options.sourceMapBasepath !== undefined && this.sourceMapURL !== undefined) {
                  this.sourceMapURL = sourceMapOutput.removeBasepath(this.sourceMapURL);
              }
              return css + this.getCSSAppendage();
          };
          SourceMapBuilder.prototype.getCSSAppendage = function () {
              var sourceMapURL = this.sourceMapURL;
              if (this.options.sourceMapFileInline) {
                  if (this.sourceMap === undefined) {
                      return '';
                  }
                  sourceMapURL = "data:application/json;base64," + environment.encodeBase64(this.sourceMap);
              }
              if (sourceMapURL) {
                  return "/*# sourceMappingURL=" + sourceMapURL + " */";
              }
              return '';
          };
          SourceMapBuilder.prototype.getExternalSourceMap = function () {
              return this.sourceMap;
          };
          SourceMapBuilder.prototype.setExternalSourceMap = function (sourceMap) {
              this.sourceMap = sourceMap;
          };
          SourceMapBuilder.prototype.isInline = function () {
              return this.options.sourceMapFileInline;
          };
          SourceMapBuilder.prototype.getSourceMapURL = function () {
              return this.sourceMapURL;
          };
          SourceMapBuilder.prototype.getOutputFilename = function () {
              return this.options.sourceMapOutputFilename;
          };
          SourceMapBuilder.prototype.getInputFilename = function () {
              return this.sourceMapInputFilename;
          };
          return SourceMapBuilder;
      }());
      return SourceMapBuilder;
  });

  var transformTree = (function (root, options) {
      if (options === void 0) { options = {}; }
      var evaldRoot;
      var variables = options.variables;
      var evalEnv = new contexts.Eval(options);
      //
      // Allows setting variables with a hash, so:
      //
      //   `{ color: new tree.Color('#f01') }` will become:
      //
      //   new tree.Declaration('@color',
      //     new tree.Value([
      //       new tree.Expression([
      //         new tree.Color('#f01')
      //       ])
      //     ])
      //   )
      //
      if (typeof variables === 'object' && !Array.isArray(variables)) {
          variables = Object.keys(variables).map(function (k) {
              var value = variables[k];
              if (!(value instanceof tree.Value)) {
                  if (!(value instanceof tree.Expression)) {
                      value = new tree.Expression([value]);
                  }
                  value = new tree.Value([value]);
              }
              return new tree.Declaration("@" + k, value, false, null, 0);
          });
          evalEnv.frames = [new tree.Ruleset(null, variables)];
      }
      var visitors$1 = [
          new visitors.JoinSelectorVisitor(),
          new visitors.MarkVisibleSelectorsVisitor(true),
          new visitors.ExtendVisitor(),
          new visitors.ToCSSVisitor({ compress: Boolean(options.compress) })
      ];
      var preEvalVisitors = [];
      var v;
      var visitorIterator;
      /**
       * first() / get() allows visitors to be added while visiting
       *
       * @todo Add scoping for visitors just like functions for @plugin; right now they're global
       */
      if (options.pluginManager) {
          visitorIterator = options.pluginManager.visitor();
          for (var i = 0; i < 2; i++) {
              visitorIterator.first();
              while ((v = visitorIterator.get())) {
                  if (v.isPreEvalVisitor) {
                      if (i === 0 || preEvalVisitors.indexOf(v) === -1) {
                          preEvalVisitors.push(v);
                          v.run(root);
                      }
                  }
                  else {
                      if (i === 0 || visitors$1.indexOf(v) === -1) {
                          if (v.isPreVisitor) {
                              visitors$1.unshift(v);
                          }
                          else {
                              visitors$1.push(v);
                          }
                      }
                  }
              }
          }
      }
      evaldRoot = root.eval(evalEnv);
      for (var i = 0; i < visitors$1.length; i++) {
          visitors$1[i].run(evaldRoot);
      }
      // Run any remaining visitors added after eval pass
      if (options.pluginManager) {
          visitorIterator.first();
          while ((v = visitorIterator.get())) {
              if (visitors$1.indexOf(v) === -1 && preEvalVisitors.indexOf(v) === -1) {
                  v.run(evaldRoot);
              }
          }
      }
      return evaldRoot;
  });

  var parseTree = (function (SourceMapBuilder) {
      var ParseTree = /** @class */ (function () {
          function ParseTree(root, imports) {
              this.root = root;
              this.imports = imports;
          }
          ParseTree.prototype.toCSS = function (options) {
              var evaldRoot;
              var result = {};
              var sourceMapBuilder;
              try {
                  evaldRoot = transformTree(this.root, options);
              }
              catch (e) {
                  throw new LessError(e, this.imports);
              }
              try {
                  var compress = Boolean(options.compress);
                  if (compress) {
                      logger.warn('The compress option has been deprecated. ' +
                          'We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css.');
                  }
                  var toCSSOptions = {
                      compress: compress,
                      dumpLineNumbers: options.dumpLineNumbers,
                      strictUnits: Boolean(options.strictUnits),
                      numPrecision: 8
                  };
                  if (options.sourceMap) {
                      sourceMapBuilder = new SourceMapBuilder(options.sourceMap);
                      result.css = sourceMapBuilder.toCSS(evaldRoot, toCSSOptions, this.imports);
                  }
                  else {
                      result.css = evaldRoot.toCSS(toCSSOptions);
                  }
              }
              catch (e) {
                  throw new LessError(e, this.imports);
              }
              if (options.pluginManager) {
                  var postProcessors = options.pluginManager.getPostProcessors();
                  for (var i_1 = 0; i_1 < postProcessors.length; i_1++) {
                      result.css = postProcessors[i_1].process(result.css, { sourceMap: sourceMapBuilder, options: options, imports: this.imports });
                  }
              }
              if (options.sourceMap) {
                  result.map = sourceMapBuilder.getExternalSourceMap();
              }
              var rootFilename = this.imports.rootFilename;
              result.imports = this.imports.files.filter(function (file) { return file !== rootFilename; });
              return result;
          };
          return ParseTree;
      }());
      return ParseTree;
  });

  var importManager = (function (environment) {
      // FileInfo = {
      //  'rewriteUrls' - option - whether to adjust URL's to be relative
      //  'filename' - full resolved filename of current file
      //  'rootpath' - path to append to normal URLs for this node
      //  'currentDirectory' - path to the current file, absolute
      //  'rootFilename' - filename of the base file
      //  'entryPath' - absolute path to the entry file
      //  'reference' - whether the file should not be output and only output parts that are referenced
      var ImportManager = /** @class */ (function () {
          function ImportManager(less, context, rootFileInfo) {
              this.less = less;
              this.rootFilename = rootFileInfo.filename;
              this.paths = context.paths || []; // Search paths, when importing
              this.contents = {}; // map - filename to contents of all the files
              this.contentsIgnoredChars = {}; // map - filename to lines at the beginning of each file to ignore
              this.mime = context.mime;
              this.error = null;
              this.context = context;
              // Deprecated? Unused outside of here, could be useful.
              this.queue = []; // Files which haven't been imported yet
              this.files = []; // List of files imported
          }
          /**
           * Add an import to be imported
           * @param path - the raw path
           * @param tryAppendExtension - whether to try appending a file extension (.less or .js if the path has no extension)
           * @param currentFileInfo - the current file info (used for instance to work out relative paths)
           * @param importOptions - import options
           * @param callback - callback for when it is imported
           */
          ImportManager.prototype.push = function (path, tryAppendExtension, currentFileInfo, importOptions, callback) {
              var importManager = this;
              var pluginLoader = this.context.pluginManager.Loader;
              this.queue.push(path);
              var fileParsedFunc = function (e, root, fullPath) {
                  importManager.queue.splice(importManager.queue.indexOf(path), 1); // Remove the path from the queue
                  var importedEqualsRoot = fullPath === importManager.rootFilename;
                  if (importOptions.optional && e) {
                      callback(null, { rules: [] }, false, null);
                      logger.info("The file " + fullPath + " was skipped because it was not found and the import was marked optional.");
                  }
                  else {
                      var files = importManager.files;
                      if (files.indexOf(fullPath) === -1) {
                          files.push(fullPath);
                      }
                      if (e && !importManager.error) {
                          importManager.error = e;
                      }
                      callback(e, root, importedEqualsRoot, fullPath);
                  }
              };
              var newFileInfo = {
                  rewriteUrls: this.context.rewriteUrls,
                  entryPath: currentFileInfo.entryPath,
                  rootpath: currentFileInfo.rootpath,
                  rootFilename: currentFileInfo.rootFilename
              };
              var fileManager = environment.getFileManager(path, currentFileInfo.currentDirectory, this.context, environment);
              if (!fileManager) {
                  fileParsedFunc({ message: "Could not find a file-manager for " + path });
                  return;
              }
              var loadFileCallback = function (loadedFile) {
                  var plugin;
                  var resolvedFilename = loadedFile.filename;
                  var contents = loadedFile.contents.replace(/^\uFEFF/, '');
                  // Pass on an updated rootpath if path of imported file is relative and file
                  // is in a (sub|sup) directory
                  //
                  // Examples:
                  // - If path of imported file is 'module/nav/nav.less' and rootpath is 'less/',
                  //   then rootpath should become 'less/module/nav/'
                  // - If path of imported file is '../mixins.less' and rootpath is 'less/',
                  //   then rootpath should become 'less/../'
                  newFileInfo.currentDirectory = fileManager.getPath(resolvedFilename);
                  if (newFileInfo.rewriteUrls) {
                      newFileInfo.rootpath = fileManager.join((importManager.context.rootpath || ''), fileManager.pathDiff(newFileInfo.currentDirectory, newFileInfo.entryPath));
                      if (!fileManager.isPathAbsolute(newFileInfo.rootpath) && fileManager.alwaysMakePathsAbsolute()) {
                          newFileInfo.rootpath = fileManager.join(newFileInfo.entryPath, newFileInfo.rootpath);
                      }
                  }
                  newFileInfo.filename = resolvedFilename;
                  var newEnv = new contexts.Parse(importManager.context);
                  newEnv.processImports = false;
                  importManager.contents[resolvedFilename] = contents;
                  if (currentFileInfo.reference || importOptions.reference) {
                      newFileInfo.reference = true;
                  }
                  if (importOptions.isPlugin) {
                      plugin = pluginLoader.evalPlugin(contents, newEnv, importManager, importOptions.pluginArgs, newFileInfo);
                      if (plugin instanceof LessError) {
                          fileParsedFunc(plugin, null, resolvedFilename);
                      }
                      else {
                          fileParsedFunc(null, plugin, resolvedFilename);
                      }
                  }
                  else if (importOptions.inline) {
                      fileParsedFunc(null, contents, resolvedFilename);
                  }
                  else {
                      new Parser(newEnv, importManager, newFileInfo).parse(contents, function (e, root) {
                          fileParsedFunc(e, root, resolvedFilename);
                      });
                  }
              };
              var promise;
              var context = clone(this.context);
              if (tryAppendExtension) {
                  context.ext = importOptions.isPlugin ? '.js' : '.less';
              }
              if (importOptions.isPlugin) {
                  context.mime = 'application/javascript';
                  promise = pluginLoader.loadPlugin(path, currentFileInfo.currentDirectory, context, environment, fileManager);
              }
              else {
                  promise = fileManager.loadFile(path, currentFileInfo.currentDirectory, context, environment, function (err, loadedFile) {
                      if (err) {
                          fileParsedFunc(err);
                      }
                      else {
                          loadFileCallback(loadedFile);
                      }
                  });
              }
              if (promise) {
                  promise.then(loadFileCallback, fileParsedFunc);
              }
          };
          return ImportManager;
      }());
      return ImportManager;
  });

  var Render = (function (environment, ParseTree, ImportManager) {
      var render = function (input, options, callback) {
          if (typeof options === 'function') {
              callback = options;
              options = copyOptions(this.options, {});
          }
          else {
              options = copyOptions(this.options, options || {});
          }
          if (!callback) {
              var self_1 = this;
              return new Promise(function (resolve, reject) {
                  render.call(self_1, input, options, function (err, output) {
                      if (err) {
                          reject(err);
                      }
                      else {
                          resolve(output);
                      }
                  });
              });
          }
          else {
              this.parse(input, options, function (err, root, imports, options) {
                  if (err) {
                      return callback(err);
                  }
                  var result;
                  try {
                      var parseTree = new ParseTree(root, imports);
                      result = parseTree.toCSS(options);
                  }
                  catch (err) {
                      return callback(err);
                  }
                  callback(null, result);
              });
          }
      };
      return render;
  });

  /**
   * Plugin Manager
   */
  var PluginManager = /** @class */ (function () {
      function PluginManager(less) {
          this.less = less;
          this.visitors = [];
          this.preProcessors = [];
          this.postProcessors = [];
          this.installedPlugins = [];
          this.fileManagers = [];
          this.iterator = -1;
          this.pluginCache = {};
          this.Loader = new less.PluginLoader(less);
      }
      /**
       * Adds all the plugins in the array
       * @param {Array} plugins
       */
      PluginManager.prototype.addPlugins = function (plugins) {
          if (plugins) {
              for (var i_1 = 0; i_1 < plugins.length; i_1++) {
                  this.addPlugin(plugins[i_1]);
              }
          }
      };
      /**
       *
       * @param plugin
       * @param {String} filename
       */
      PluginManager.prototype.addPlugin = function (plugin, filename, functionRegistry) {
          this.installedPlugins.push(plugin);
          if (filename) {
              this.pluginCache[filename] = plugin;
          }
          if (plugin.install) {
              plugin.install(this.less, this, functionRegistry || this.less.functions.functionRegistry);
          }
      };
      /**
       *
       * @param filename
       */
      PluginManager.prototype.get = function (filename) {
          return this.pluginCache[filename];
      };
      /**
       * Adds a visitor. The visitor object has options on itself to determine
       * when it should run.
       * @param visitor
       */
      PluginManager.prototype.addVisitor = function (visitor) {
          this.visitors.push(visitor);
      };
      /**
       * Adds a pre processor object
       * @param {object} preProcessor
       * @param {number} priority - guidelines 1 = before import, 1000 = import, 2000 = after import
       */
      PluginManager.prototype.addPreProcessor = function (preProcessor, priority) {
          var indexToInsertAt;
          for (indexToInsertAt = 0; indexToInsertAt < this.preProcessors.length; indexToInsertAt++) {
              if (this.preProcessors[indexToInsertAt].priority >= priority) {
                  break;
              }
          }
          this.preProcessors.splice(indexToInsertAt, 0, { preProcessor: preProcessor, priority: priority });
      };
      /**
       * Adds a post processor object
       * @param {object} postProcessor
       * @param {number} priority - guidelines 1 = before compression, 1000 = compression, 2000 = after compression
       */
      PluginManager.prototype.addPostProcessor = function (postProcessor, priority) {
          var indexToInsertAt;
          for (indexToInsertAt = 0; indexToInsertAt < this.postProcessors.length; indexToInsertAt++) {
              if (this.postProcessors[indexToInsertAt].priority >= priority) {
                  break;
              }
          }
          this.postProcessors.splice(indexToInsertAt, 0, { postProcessor: postProcessor, priority: priority });
      };
      /**
       *
       * @param manager
       */
      PluginManager.prototype.addFileManager = function (manager) {
          this.fileManagers.push(manager);
      };
      /**
       *
       * @returns {Array}
       * @private
       */
      PluginManager.prototype.getPreProcessors = function () {
          var preProcessors = [];
          for (var i_2 = 0; i_2 < this.preProcessors.length; i_2++) {
              preProcessors.push(this.preProcessors[i_2].preProcessor);
          }
          return preProcessors;
      };
      /**
       *
       * @returns {Array}
       * @private
       */
      PluginManager.prototype.getPostProcessors = function () {
          var postProcessors = [];
          for (var i_3 = 0; i_3 < this.postProcessors.length; i_3++) {
              postProcessors.push(this.postProcessors[i_3].postProcessor);
          }
          return postProcessors;
      };
      /**
       *
       * @returns {Array}
       * @private
       */
      PluginManager.prototype.getVisitors = function () {
          return this.visitors;
      };
      PluginManager.prototype.visitor = function () {
          var self = this;
          return {
              first: function () {
                  self.iterator = -1;
                  return self.visitors[self.iterator];
              },
              get: function () {
                  self.iterator += 1;
                  return self.visitors[self.iterator];
              }
          };
      };
      /**
       *
       * @returns {Array}
       * @private
       */
      PluginManager.prototype.getFileManagers = function () {
          return this.fileManagers;
      };
      return PluginManager;
  }());
  var pm;
  function PluginManagerFactory(less, newFactory) {
      if (newFactory || !pm) {
          pm = new PluginManager(less);
      }
      return pm;
  }

  var Parse = (function (environment, ParseTree, ImportManager) {
      var parse = function (input, options, callback) {
          if (typeof options === 'function') {
              callback = options;
              options = copyOptions(this.options, {});
          }
          else {
              options = copyOptions(this.options, options || {});
          }
          if (!callback) {
              var self_1 = this;
              return new Promise(function (resolve, reject) {
                  parse.call(self_1, input, options, function (err, output) {
                      if (err) {
                          reject(err);
                      }
                      else {
                          resolve(output);
                      }
                  });
              });
          }
          else {
              var context_1;
              var rootFileInfo = void 0;
              var pluginManager_1 = new PluginManagerFactory(this, !options.reUsePluginManager);
              options.pluginManager = pluginManager_1;
              context_1 = new contexts.Parse(options);
              if (options.rootFileInfo) {
                  rootFileInfo = options.rootFileInfo;
              }
              else {
                  var filename = options.filename || 'input';
                  var entryPath = filename.replace(/[^\/\\]*$/, '');
                  rootFileInfo = {
                      filename: filename,
                      rewriteUrls: context_1.rewriteUrls,
                      rootpath: context_1.rootpath || '',
                      currentDirectory: entryPath,
                      entryPath: entryPath,
                      rootFilename: filename
                  };
                  // add in a missing trailing slash
                  if (rootFileInfo.rootpath && rootFileInfo.rootpath.slice(-1) !== '/') {
                      rootFileInfo.rootpath += '/';
                  }
              }
              var imports_1 = new ImportManager(this, context_1, rootFileInfo);
              this.importManager = imports_1;
              // TODO: allow the plugins to be just a list of paths or names
              // Do an async plugin queue like lessc
              if (options.plugins) {
                  options.plugins.forEach(function (plugin) {
                      var evalResult;
                      var contents;
                      if (plugin.fileContent) {
                          contents = plugin.fileContent.replace(/^\uFEFF/, '');
                          evalResult = pluginManager_1.Loader.evalPlugin(contents, context_1, imports_1, plugin.options, plugin.filename);
                          if (evalResult instanceof LessError) {
                              return callback(evalResult);
                          }
                      }
                      else {
                          pluginManager_1.addPlugin(plugin);
                      }
                  });
              }
              new Parser(context_1, imports_1, rootFileInfo)
                  .parse(input, function (e, root) {
                  if (e) {
                      return callback(e);
                  }
                  callback(null, root, imports_1, options);
              }, options);
          }
      };
      return parse;
  });

  var lessRoot = (function (environment$1, fileManagers) {
      /**
       * @todo
       * This original code could be improved quite a bit.
       * Many classes / modules currently add side-effects / mutations to passed in objects,
       * which makes it hard to refactor and reason about.
       */
      environment$1 = new environment(environment$1, fileManagers);
      var SourceMapOutput = sourceMapOutput(environment$1);
      var SourceMapBuilder = sourceMapBuilder(SourceMapOutput, environment$1);
      var ParseTree = parseTree(SourceMapBuilder);
      var ImportManager = importManager(environment$1);
      var render = Render(environment$1, ParseTree);
      var parse = Parse(environment$1, ParseTree, ImportManager);
      var functions = Functions(environment$1);
      /**
       * @todo
       * This root properties / methods need to be organized.
       * It's not clear what should / must be public and why.
       */
      var initial = {
          version: [3, 11, 3],
          data: data,
          tree: tree,
          Environment: environment,
          AbstractFileManager: AbstractFileManager,
          AbstractPluginLoader: AbstractPluginLoader,
          environment: environment$1,
          visitors: visitors,
          Parser: Parser,
          functions: functions,
          contexts: contexts,
          SourceMapOutput: SourceMapOutput,
          SourceMapBuilder: SourceMapBuilder,
          ParseTree: ParseTree,
          ImportManager: ImportManager,
          render: render,
          parse: parse,
          LessError: LessError,
          transformTree: transformTree,
          utils: utils,
          PluginManager: PluginManagerFactory,
          logger: logger
      };
      // Create a public API
      var ctor = function (t) { return function () {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
          }
          return new (t.bind.apply(t, __spreadArrays([void 0], args)))();
      }; };
      var t;
      var api = Object.create(initial);
      for (var n in initial.tree) {
          /* eslint guard-for-in: 0 */
          t = initial.tree[n];
          if (typeof t === 'function') {
              api[n.toLowerCase()] = ctor(t);
          }
          else {
              api[n] = Object.create(null);
              for (var o in t) {
                  /* eslint guard-for-in: 0 */
                  api[n][o.toLowerCase()] = ctor(t[o]);
              }
          }
      }
      return api;
  });

  /* global window, XMLHttpRequest */
  var options;
  var logger$1;
  var fileCache = {};
  // TODOS - move log somewhere. pathDiff and doing something similar in node. use pathDiff in the other browser file for the initial load
  var FileManager = /** @class */ (function (_super) {
      __extends(FileManager, _super);
      function FileManager() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      FileManager.prototype.alwaysMakePathsAbsolute = function () {
          return true;
      };
      FileManager.prototype.join = function (basePath, laterPath) {
          if (!basePath) {
              return laterPath;
          }
          return this.extractUrlParts(laterPath, basePath).path;
      };
      FileManager.prototype.doXHR = function (url, type, callback, errback) {
          var xhr = new XMLHttpRequest();
          var async = options.isFileProtocol ? options.fileAsync : true;
          if (typeof xhr.overrideMimeType === 'function') {
              xhr.overrideMimeType('text/css');
          }
          logger$1.debug("XHR: Getting '" + url + "'");
          xhr.open('GET', url, async);
          xhr.setRequestHeader('Accept', type || 'text/x-less, text/css; q=0.9, */*; q=0.5');
          xhr.send(null);
          function handleResponse(xhr, callback, errback) {
              if (xhr.status >= 200 && xhr.status < 300) {
                  callback(xhr.responseText, xhr.getResponseHeader('Last-Modified'));
              }
              else if (typeof errback === 'function') {
                  errback(xhr.status, url);
              }
          }
          if (options.isFileProtocol && !options.fileAsync) {
              if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300)) {
                  callback(xhr.responseText);
              }
              else {
                  errback(xhr.status, url);
              }
          }
          else if (async) {
              xhr.onreadystatechange = function () {
                  if (xhr.readyState == 4) {
                      handleResponse(xhr, callback, errback);
                  }
              };
          }
          else {
              handleResponse(xhr, callback, errback);
          }
      };
      FileManager.prototype.supports = function () {
          return true;
      };
      FileManager.prototype.clearFileCache = function () {
          fileCache = {};
      };
      FileManager.prototype.loadFile = function (filename, currentDirectory, options, environment) {
          // TODO: Add prefix support like less-node?
          // What about multiple paths?
          if (currentDirectory && !this.isPathAbsolute(filename)) {
              filename = currentDirectory + filename;
          }
          filename = options.ext ? this.tryAppendExtension(filename, options.ext) : filename;
          options = options || {};
          // sheet may be set to the stylesheet for the initial load or a collection of properties including
          // some context variables for imports
          var hrefParts = this.extractUrlParts(filename, window.location.href);
          var href = hrefParts.url;
          var self = this;
          return new Promise(function (resolve, reject) {
              if (options.useFileCache && fileCache[href]) {
                  try {
                      var lessText_1 = fileCache[href];
                      return resolve({ contents: lessText_1, filename: href, webInfo: { lastModified: new Date() } });
                  }
                  catch (e) {
                      return reject({ filename: href, message: "Error loading file " + href + " error was " + e.message });
                  }
              }
              self.doXHR(href, options.mime, function doXHRCallback(data, lastModified) {
                  // per file cache
                  fileCache[href] = data;
                  // Use remote copy (re-parse)
                  resolve({ contents: data, filename: href, webInfo: { lastModified: lastModified } });
              }, function doXHRError(status, url) {
                  reject({ type: 'File', message: "'" + url + "' wasn't found (" + status + ")", href: href });
              });
          });
      };
      return FileManager;
  }(AbstractFileManager));
  var FM = (function (opts, log) {
      options = opts;
      logger$1 = log;
      return FileManager;
  });

  // TODO: Add tests for browser @plugin
  /**
   * Browser Plugin Loader
   */
  var PluginLoader = /** @class */ (function (_super) {
      __extends(PluginLoader, _super);
      function PluginLoader(less) {
          var _this = _super.call(this) || this;
          _this.less = less;
          return _this;
          // Should we shim this.require for browser? Probably not?
      }
      PluginLoader.prototype.loadPlugin = function (filename, basePath, context, environment, fileManager) {
          return new Promise(function (fulfill, reject) {
              fileManager.loadFile(filename, basePath, context, environment)
                  .then(fulfill).catch(reject);
          });
      };
      return PluginLoader;
  }(AbstractPluginLoader));

  var LogListener = (function (less, options) {
      var logLevel_debug = 4;
      var logLevel_info = 3;
      var logLevel_warn = 2;
      var logLevel_error = 1;
      // The amount of logging in the javascript console.
      // 3 - Debug, information and errors
      // 2 - Information and errors
      // 1 - Errors
      // 0 - None
      // Defaults to 2
      options.logLevel = typeof options.logLevel !== 'undefined' ? options.logLevel : (options.env === 'development' ? logLevel_info : logLevel_error);
      if (!options.loggers) {
          options.loggers = [{
                  debug: function (msg) {
                      if (options.logLevel >= logLevel_debug) {
                          console.log(msg);
                      }
                  },
                  info: function (msg) {
                      if (options.logLevel >= logLevel_info) {
                          console.log(msg);
                      }
                  },
                  warn: function (msg) {
                      if (options.logLevel >= logLevel_warn) {
                          console.warn(msg);
                      }
                  },
                  error: function (msg) {
                      if (options.logLevel >= logLevel_error) {
                          console.error(msg);
                      }
                  }
              }];
      }
      for (var i_1 = 0; i_1 < options.loggers.length; i_1++) {
          less.logger.addListener(options.loggers[i_1]);
      }
  });

  var ErrorReporting = (function (window, less, options) {
      function errorHTML(e, rootHref) {
          var id = "less-error-message:" + extractId(rootHref || '');
          var template = '<li><label>{line}</label><pre class="{class}">{content}</pre></li>';
          var elem = window.document.createElement('div');
          var timer;
          var content;
          var errors = [];
          var filename = e.filename || rootHref;
          var filenameNoPath = filename.match(/([^\/]+(\?.*)?)$/)[1];
          elem.id = id;
          elem.className = 'less-error-message';
          content = "<h3>" + (e.type || 'Syntax') + "Error: " + (e.message || 'There is an error in your .less file') +
              ("</h3><p>in <a href=\"" + filename + "\">" + filenameNoPath + "</a> ");
          var errorline = function (e, i, classname) {
              if (e.extract[i] !== undefined) {
                  errors.push(template.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (i - 1))
                      .replace(/\{class\}/, classname)
                      .replace(/\{content\}/, e.extract[i]));
              }
          };
          if (e.line) {
              errorline(e, 0, '');
              errorline(e, 1, 'line');
              errorline(e, 2, '');
              content += "on line " + e.line + ", column " + (e.column + 1) + ":</p><ul>" + errors.join('') + "</ul>";
          }
          if (e.stack && (e.extract || options.logLevel >= 4)) {
              content += "<br/>Stack Trace</br />" + e.stack.split('\n').slice(1).join('<br/>');
          }
          elem.innerHTML = content;
          // CSS for error messages
          browser.createCSS(window.document, [
              '.less-error-message ul, .less-error-message li {',
              'list-style-type: none;',
              'margin-right: 15px;',
              'padding: 4px 0;',
              'margin: 0;',
              '}',
              '.less-error-message label {',
              'font-size: 12px;',
              'margin-right: 15px;',
              'padding: 4px 0;',
              'color: #cc7777;',
              '}',
              '.less-error-message pre {',
              'color: #dd6666;',
              'padding: 4px 0;',
              'margin: 0;',
              'display: inline-block;',
              '}',
              '.less-error-message pre.line {',
              'color: #ff0000;',
              '}',
              '.less-error-message h3 {',
              'font-size: 20px;',
              'font-weight: bold;',
              'padding: 15px 0 5px 0;',
              'margin: 0;',
              '}',
              '.less-error-message a {',
              'color: #10a',
              '}',
              '.less-error-message .error {',
              'color: red;',
              'font-weight: bold;',
              'padding-bottom: 2px;',
              'border-bottom: 1px dashed red;',
              '}'
          ].join('\n'), { title: 'error-message' });
          elem.style.cssText = [
              'font-family: Arial, sans-serif',
              'border: 1px solid #e00',
              'background-color: #eee',
              'border-radius: 5px',
              '-webkit-border-radius: 5px',
              '-moz-border-radius: 5px',
              'color: #e00',
              'padding: 15px',
              'margin-bottom: 15px'
          ].join(';');
          if (options.env === 'development') {
              timer = setInterval(function () {
                  var document = window.document;
                  var body = document.body;
                  if (body) {
                      if (document.getElementById(id)) {
                          body.replaceChild(elem, document.getElementById(id));
                      }
                      else {
                          body.insertBefore(elem, body.firstChild);
                      }
                      clearInterval(timer);
                  }
              }, 10);
          }
      }
      function removeErrorHTML(path) {
          var node = window.document.getElementById("less-error-message:" + extractId(path));
          if (node) {
              node.parentNode.removeChild(node);
          }
      }
      function removeError(path) {
          if (!options.errorReporting || options.errorReporting === 'html') {
              removeErrorHTML(path);
          }
          else if (options.errorReporting === 'console') ;
          else if (typeof options.errorReporting === 'function') {
              options.errorReporting('remove', path);
          }
      }
      function errorConsole(e, rootHref) {
          var template = '{line} {content}';
          var filename = e.filename || rootHref;
          var errors = [];
          var content = (e.type || 'Syntax') + "Error: " + (e.message || 'There is an error in your .less file') + " in " + filename;
          var errorline = function (e, i, classname) {
              if (e.extract[i] !== undefined) {
                  errors.push(template.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (i - 1))
                      .replace(/\{class\}/, classname)
                      .replace(/\{content\}/, e.extract[i]));
              }
          };
          if (e.line) {
              errorline(e, 0, '');
              errorline(e, 1, 'line');
              errorline(e, 2, '');
              content += " on line " + e.line + ", column " + (e.column + 1) + ":\n" + errors.join('\n');
          }
          if (e.stack && (e.extract || options.logLevel >= 4)) {
              content += "\nStack Trace\n" + e.stack;
          }
          less.logger.error(content);
      }
      function error(e, rootHref) {
          if (!options.errorReporting || options.errorReporting === 'html') {
              errorHTML(e, rootHref);
          }
          else if (options.errorReporting === 'console') {
              errorConsole(e, rootHref);
          }
          else if (typeof options.errorReporting === 'function') {
              options.errorReporting('add', e, rootHref);
          }
      }
      return {
          add: error,
          remove: removeError
      };
  });

  // Cache system is a bit outdated and could do with work
  var Cache = (function (window, options, logger) {
      var cache = null;
      if (options.env !== 'development') {
          try {
              cache = (typeof window.localStorage === 'undefined') ? null : window.localStorage;
          }
          catch (_) { }
      }
      return {
          setCSS: function (path, lastModified, modifyVars, styles) {
              if (cache) {
                  logger.info("saving " + path + " to cache.");
                  try {
                      cache.setItem(path, styles);
                      cache.setItem(path + ":timestamp", lastModified);
                      if (modifyVars) {
                          cache.setItem(path + ":vars", JSON.stringify(modifyVars));
                      }
                  }
                  catch (e) {
                      // TODO - could do with adding more robust error handling
                      logger.error("failed to save \"" + path + "\" to local storage for caching.");
                  }
              }
          },
          getCSS: function (path, webInfo, modifyVars) {
              var css = cache && cache.getItem(path);
              var timestamp = cache && cache.getItem(path + ":timestamp");
              var vars = cache && cache.getItem(path + ":vars");
              modifyVars = modifyVars || {};
              vars = vars || "{}"; // if not set, treat as the JSON representation of an empty object
              if (timestamp && webInfo.lastModified &&
                  (new Date(webInfo.lastModified).valueOf() ===
                      new Date(timestamp).valueOf()) &&
                  JSON.stringify(modifyVars) === vars) {
                  // Use local copy
                  return css;
              }
          }
      };
  });

  var ImageSize = (function () {
      function imageSize() {
          throw {
              type: 'Runtime',
              message: 'Image size functions are not supported in browser version of less'
          };
      }
      var imageFunctions = {
          'image-size': function (filePathNode) {
              imageSize();
              return -1;
          },
          'image-width': function (filePathNode) {
              imageSize();
              return -1;
          },
          'image-height': function (filePathNode) {
              imageSize();
              return -1;
          }
      };
      functionRegistry.addMultiple(imageFunctions);
  });

  //
  var root = (function (window, options) {
      var document = window.document;
      var less = lessRoot();
      less.options = options;
      var environment = less.environment;
      var FileManager = FM(options, less.logger);
      var fileManager = new FileManager();
      environment.addFileManager(fileManager);
      less.FileManager = FileManager;
      less.PluginLoader = PluginLoader;
      LogListener(less, options);
      var errors = ErrorReporting(window, less, options);
      var cache = less.cache = options.cache || Cache(window, options, less.logger);
      ImageSize(less.environment);
      // Setup user functions - Deprecate?
      if (options.functions) {
          less.functions.functionRegistry.addMultiple(options.functions);
      }
      var typePattern = /^text\/(x-)?less$/;
      function clone(obj) {
          var cloned = {};
          for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                  cloned[prop] = obj[prop];
              }
          }
          return cloned;
      }
      // only really needed for phantom
      function bind(func, thisArg) {
          var curryArgs = Array.prototype.slice.call(arguments, 2);
          return function () {
              var args = curryArgs.concat(Array.prototype.slice.call(arguments, 0));
              return func.apply(thisArg, args);
          };
      }
      function loadStyles(modifyVars) {
          var styles = document.getElementsByTagName('style');
          var style;
          for (var i_1 = 0; i_1 < styles.length; i_1++) {
              style = styles[i_1];
              if (style.type.match(typePattern)) {
                  var instanceOptions = clone(options);
                  instanceOptions.modifyVars = modifyVars;
                  var lessText_1 = style.innerHTML || '';
                  instanceOptions.filename = document.location.href.replace(/#.*$/, '');
                  /* jshint loopfunc:true */
                  // use closure to store current style
                  less.render(lessText_1, instanceOptions, bind(function (style, e, result) {
                      if (e) {
                          errors.add(e, 'inline');
                      }
                      else {
                          style.type = 'text/css';
                          if (style.styleSheet) {
                              style.styleSheet.cssText = result.css;
                          }
                          else {
                              style.innerHTML = result.css;
                          }
                      }
                  }, null, style));
              }
          }
      }
      function loadStyleSheet(sheet, callback, reload, remaining, modifyVars) {
          var instanceOptions = clone(options);
          addDataAttr(instanceOptions, sheet);
          instanceOptions.mime = sheet.type;
          if (modifyVars) {
              instanceOptions.modifyVars = modifyVars;
          }
          function loadInitialFileCallback(loadedFile) {
              var data = loadedFile.contents;
              var path = loadedFile.filename;
              var webInfo = loadedFile.webInfo;
              var newFileInfo = {
                  currentDirectory: fileManager.getPath(path),
                  filename: path,
                  rootFilename: path,
                  rewriteUrls: instanceOptions.rewriteUrls
              };
              newFileInfo.entryPath = newFileInfo.currentDirectory;
              newFileInfo.rootpath = instanceOptions.rootpath || newFileInfo.currentDirectory;
              if (webInfo) {
                  webInfo.remaining = remaining;
                  var css = cache.getCSS(path, webInfo, instanceOptions.modifyVars);
                  if (!reload && css) {
                      webInfo.local = true;
                      callback(null, css, data, sheet, webInfo, path);
                      return;
                  }
              }
              // TODO add tests around how this behaves when reloading
              errors.remove(path);
              instanceOptions.rootFileInfo = newFileInfo;
              less.render(data, instanceOptions, function (e, result) {
                  if (e) {
                      e.href = path;
                      callback(e);
                  }
                  else {
                      cache.setCSS(sheet.href, webInfo.lastModified, instanceOptions.modifyVars, result.css);
                      callback(null, result.css, data, sheet, webInfo, path);
                  }
              });
          }
          fileManager.loadFile(sheet.href, null, instanceOptions, environment)
              .then(function (loadedFile) {
              loadInitialFileCallback(loadedFile);
          }).catch(function (err) {
              console.log(err);
              callback(err);
          });
      }
      function loadStyleSheets(callback, reload, modifyVars) {
          for (var i_2 = 0; i_2 < less.sheets.length; i_2++) {
              loadStyleSheet(less.sheets[i_2], callback, reload, less.sheets.length - (i_2 + 1), modifyVars);
          }
      }
      function initRunningMode() {
          if (less.env === 'development') {
              less.watchTimer = setInterval(function () {
                  if (less.watchMode) {
                      fileManager.clearFileCache();
                      loadStyleSheets(function (e, css, _, sheet, webInfo) {
                          if (e) {
                              errors.add(e, e.href || sheet.href);
                          }
                          else if (css) {
                              browser.createCSS(window.document, css, sheet);
                          }
                      });
                  }
              }, options.poll);
          }
      }
      //
      // Watch mode
      //
      less.watch = function () {
          if (!less.watchMode) {
              less.env = 'development';
              initRunningMode();
          }
          this.watchMode = true;
          return true;
      };
      less.unwatch = function () { clearInterval(less.watchTimer); this.watchMode = false; return false; };
      //
      // Synchronously get all <link> tags with the 'rel' attribute set to
      // "stylesheet/less".
      //
      less.registerStylesheetsImmediately = function () {
          var links = document.getElementsByTagName('link');
          less.sheets = [];
          for (var i_3 = 0; i_3 < links.length; i_3++) {
              if (links[i_3].rel === 'stylesheet/less' || (links[i_3].rel.match(/stylesheet/) &&
                  (links[i_3].type.match(typePattern)))) {
                  less.sheets.push(links[i_3]);
              }
          }
      };
      //
      // Asynchronously get all <link> tags with the 'rel' attribute set to
      // "stylesheet/less", returning a Promise.
      //
      less.registerStylesheets = function () { return new Promise(function (resolve, reject) {
          less.registerStylesheetsImmediately();
          resolve();
      }); };
      //
      // With this function, it's possible to alter variables and re-render
      // CSS without reloading less-files
      //
      less.modifyVars = function (record) { return less.refresh(true, record, false); };
      less.refresh = function (reload, modifyVars, clearFileCache) {
          if ((reload || clearFileCache) && clearFileCache !== false) {
              fileManager.clearFileCache();
          }
          return new Promise(function (resolve, reject) {
              var startTime;
              var endTime;
              var totalMilliseconds;
              var remainingSheets;
              startTime = endTime = new Date();
              // Set counter for remaining unprocessed sheets
              remainingSheets = less.sheets.length;
              if (remainingSheets === 0) {
                  endTime = new Date();
                  totalMilliseconds = endTime - startTime;
                  less.logger.info('Less has finished and no sheets were loaded.');
                  resolve({
                      startTime: startTime,
                      endTime: endTime,
                      totalMilliseconds: totalMilliseconds,
                      sheets: less.sheets.length
                  });
              }
              else {
                  // Relies on less.sheets array, callback seems to be guaranteed to be called for every element of the array
                  loadStyleSheets(function (e, css, _, sheet, webInfo) {
                      if (e) {
                          errors.add(e, e.href || sheet.href);
                          reject(e);
                          return;
                      }
                      if (webInfo.local) {
                          less.logger.info("Loading " + sheet.href + " from cache.");
                      }
                      else {
                          less.logger.info("Rendered " + sheet.href + " successfully.");
                      }
                      browser.createCSS(window.document, css, sheet);
                      less.logger.info("CSS for " + sheet.href + " generated in " + (new Date() - endTime) + "ms");
                      // Count completed sheet
                      remainingSheets--;
                      // Check if the last remaining sheet was processed and then call the promise
                      if (remainingSheets === 0) {
                          totalMilliseconds = new Date() - startTime;
                          less.logger.info("Less has finished. CSS generated in " + totalMilliseconds + "ms");
                          resolve({
                              startTime: startTime,
                              endTime: endTime,
                              totalMilliseconds: totalMilliseconds,
                              sheets: less.sheets.length
                          });
                      }
                      endTime = new Date();
                  }, reload, modifyVars);
              }
              loadStyles(modifyVars);
          });
      };
      less.refreshStyles = loadStyles;
      return less;
  });

  /**
   * Kicks off less and compiles any stylesheets
   * used in the browser distributed version of less
   * to kick-start less using the browser api
   */
  var options$1 = defaultOptions();
  if (window.less) {
      for (var key in window.less) {
          if (window.less.hasOwnProperty(key)) {
              options$1[key] = window.less[key];
          }
      }
  }
  addDefaultOptions(window, options$1);
  options$1.plugins = options$1.plugins || [];
  if (window.LESS_PLUGINS) {
      options$1.plugins = options$1.plugins.concat(window.LESS_PLUGINS);
  }
  var less = root(window, options$1);
  window.less = less;
  var css;
  var head;
  var style;
  // Always restore page visibility
  function resolveOrReject(data) {
      if (data.filename) {
          console.warn(data);
      }
      if (!options$1.async) {
          head.removeChild(style);
      }
  }
  if (options$1.onReady) {
      if (/!watch/.test(window.location.hash)) {
          less.watch();
      }
      // Simulate synchronous stylesheet loading by hiding page rendering
      if (!options$1.async) {
          css = 'body { display: none !important }';
          head = document.head || document.getElementsByTagName('head')[0];
          style = document.createElement('style');
          style.type = 'text/css';
          if (style.styleSheet) {
              style.styleSheet.cssText = css;
          }
          else {
              style.appendChild(document.createTextNode(css));
          }
          head.appendChild(style);
      }
      less.registerStylesheetsImmediately();
      less.pageLoadFinished = less.refresh(less.env === 'development').then(resolveOrReject, resolveOrReject);
  }

  return less;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/particles.js/particles.js":
/*!************************************************!*\
  !*** ./node_modules/particles.js/particles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue-particles',
  props: {
    color: {
      type: String,
      default: '#dedede'
    },
    particleOpacity: {
      type: Number,
      default: 0.7
    },
    particlesNumber: {
      type: Number,
      default: 80
    },
    shapeType: {
      type: String,
      default: 'circle'
    },
    particleSize: {
      type: Number,
      default: 4
    },
    linesColor: {
      type: String,
      default: '#dedede'
    },
    linesWidth: {
      type: Number,
      default: 1
    },
    lineLinked: {
      type: Boolean,
      default: true
    },
    lineOpacity: {
      type: Number,
      default: 0.4
    },
    linesDistance: {
      type: Number,
      default: 150
    },
    moveSpeed: {
      type: Number,
      default: 3
    },
    hoverEffect: {
      type: Boolean,
      default: true
    },
    hoverMode: {
      type: String,
      default: 'grab'
    },
    clickEffect: {
      type: Boolean,
      default: true
    },
    clickMode: {
      type: String,
      default: 'push'
    }
  },
  mounted () {
    // import particle.js only on client-side
    __webpack_require__(/*! particles.js */ "./node_modules/particles.js/particles.js")
    this.$nextTick(() => {
      this.initParticleJS(
        this.color,
        this.particleOpacity,
        this.particlesNumber,
        this.shapeType,
        this.particleSize,
        this.linesColor,
        this.linesWidth,
        this.lineLinked,
        this.lineOpacity,
        this.linesDistance,
        this.moveSpeed,
        this.hoverEffect,
        this.hoverMode,
        this.clickEffect,
        this.clickMode
      )
    })
  },
  methods: {
    initParticleJS (
      color,
      particleOpacity,
      particlesNumber,
      shapeType,
      particleSize,
      linesColor,
      linesWidth,
      lineLinked,
      lineOpacity,
      linesDistance,
      moveSpeed,
      hoverEffect,
      hoverMode,
      clickEffect,
      clickMode
    ) {
      particlesJS('particles-js', {
        "particles": {
          "number": {
            "value": particlesNumber,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": color
          },
          "shape": {
            // circle, edge, triangle, polygon, star, image
            "type": shapeType,
            "stroke": {
              "width": 0,
              "color": "#192231"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": particleOpacity,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": particleSize,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": lineLinked,
            "distance": linesDistance,
            "color": linesColor,
            "opacity": lineOpacity,
            "width": linesWidth
          },
          "move": {
            "enable": true,
            "speed": moveSpeed,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": hoverEffect,
              "mode": hoverMode
            },
            "onclick": {
              "enable": clickEffect,
              "mode": clickMode
            },
            "onresize": {

              "enable": true,
              "density_auto": true,
              "density_area": 400

            }
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      });
    }

  }
});
/* eslint-disable */


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=template&id=beb6e31c&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=template&id=beb6e31c& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    attrs: {
      id: "particles-js",
      color: _vm.color,
      particleOpacity: _vm.particleOpacity,
      linesColor: _vm.linesColor,
      particlesNumber: _vm.particlesNumber,
      shapeType: _vm.shapeType,
      particleSize: _vm.particleSize,
      linesWidth: _vm.linesWidth,
      lineLinked: _vm.lineLinked,
      lineOpacity: _vm.lineOpacity,
      linesDistance: _vm.linesDistance,
      moveSpeed: _vm.moveSpeed,
      hoverEffect: _vm.hoverEffect,
      hoverMode: _vm.hoverMode,
      clickEffect: _vm.clickEffect,
      clickMode: _vm.clickMode
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("router-view")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-particles/src/vue-particles/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-particles/src/vue-particles/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_particles_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-particles.vue */ "./node_modules/vue-particles/src/vue-particles/vue-particles.vue");
/* eslint-disable */


const VueParticles = {

    install (Vue, options) {
        Vue.component('vue-particles', _vue_particles_vue__WEBPACK_IMPORTED_MODULE_0__["default"])
    }

}

/* harmony default export */ __webpack_exports__["default"] = (VueParticles);
/* eslint-disable */


/***/ }),

/***/ "./node_modules/vue-particles/src/vue-particles/vue-particles.vue":
/*!************************************************************************!*\
  !*** ./node_modules/vue-particles/src/vue-particles/vue-particles.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_particles_vue_vue_type_template_id_beb6e31c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-particles.vue?vue&type=template&id=beb6e31c& */ "./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=template&id=beb6e31c&");
/* harmony import */ var _vue_particles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-particles.vue?vue&type=script&lang=js& */ "./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_particles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_particles_vue_vue_type_template_id_beb6e31c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_particles_vue_vue_type_template_id_beb6e31c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-particles/src/vue-particles/vue-particles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_vue_particles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./vue-particles.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_vue_particles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=template&id=beb6e31c&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=template&id=beb6e31c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_particles_vue_vue_type_template_id_beb6e31c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./vue-particles.vue?vue&type=template&id=beb6e31c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-particles/src/vue-particles/vue-particles.vue?vue&type=template&id=beb6e31c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_particles_vue_vue_type_template_id_beb6e31c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_particles_vue_vue_type_template_id_beb6e31c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/App.vue":
/*!******************************!*\
  !*** ./resources/js/App.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f348271a&scoped=true& */ "./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f348271a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./resources/js/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&":
/*!*************************************************************************!*\
  !*** ./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f348271a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App.vue?vue&type=template&id=f348271a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f348271a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! less */ "./node_modules/less/dist/less.js");
/* harmony import */ var less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_particles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-particles */ "./node_modules/vue-particles/src/vue-particles/index.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue */ "./resources/js/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./resources/js/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ "./resources/js/store/index.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-ui */ "element-ui");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import {
//   Col,
//   Row,
//   Container,
//   Header,
//   Footer,
//   Main,
//   Aside,
//   Menu,
//   Submenu,
//   MenuItem,
//   Dropdown,
//   DropdownMenu,
//   DropdownItem,
//   Card,
//   Form,
//   FormItem,
//   Dialog,
//   Input,
//   Table,
//   TableColumn,
//   Checkbox,
//   CheckboxGroup,
//   Button,
//   Select
// } from 'element-ui'

 // import 'element-ui/lib/theme-chalk/index.css'






Vue.use(element_ui__WEBPACK_IMPORTED_MODULE_5___default.a); // Vue.use(Col);
// Vue.use(Row);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Footer);
// Vue.use(Main);
// Vue.use(Aside);
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(Dropdown);
// Vue.use(DropdownMenu);
// Vue.use(DropdownItem);
// Vue.use(Card);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Dialog);
// Vue.use(Input);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Checkbox);
// Vue.use(CheckboxGroup);
// Vue.use(Button);
// Vue.use(Select);

Vue.use(less__WEBPACK_IMPORTED_MODULE_0___default.a);
Vue.use(vue_particles__WEBPACK_IMPORTED_MODULE_1__["default"]);
/**
 * 不显示生产模式的消息
 * 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
 * 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
 * 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。
 */

Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: '#root',
  router: _router__WEBPACK_IMPORTED_MODULE_3__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_4__["default"],
  components: {
    App: _App_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  template: '<App />'
});

/***/ }),

/***/ "./resources/js/config/env.js":
/*!************************************!*\
  !*** ./resources/js/config/env.js ***!
  \************************************/
/*! exports provided: BASE_URL_PREFIX, ROUTER_MODE, IMG_BASE_URL_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL_PREFIX", function() { return BASE_URL_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_MODE", function() { return ROUTER_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_BASE_URL_PREFIX", function() { return IMG_BASE_URL_PREFIX; });
/**
 * 配置编译环境和线上环境之间的切换
 *
 * BASE_URL_PREFIX: api 地址前缀
 * ROUTER_MODE: 路由模式
 * IMG_BASE_URL_PREFIX: 图片所在域名地址
 *
 */
var BASE_URL_PREFIX = '/api/v2/admin/';
var ROUTER_MODE = 'hash';
var IMG_BASE_URL_PREFIX = '';


/***/ }),

/***/ "./resources/js/router/index.js":
/*!**************************************!*\
  !*** ./resources/js/router/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "vue-router");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_0__);
// import Vue from 'vue'
 // 路由懒加载

var login = function login(r) {
  return Promise.all(/*! require.ensure | login */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("login")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Login/Login */ "./resources/js/pages/Login/Login.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var home = function home(r) {
  return Promise.all(/*! require.ensure | home */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("home")]).then((function () {
    return r(__webpack_require__(/*! ../components/Home/Home */ "./resources/js/components/Home/Home.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var index = function index(r) {
  return __webpack_require__.e(/*! require.ensure | index */ "index").then((function () {
    return r(__webpack_require__(/*! ../pages/Index/Index */ "./resources/js/pages/Index/Index.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var user = function user(r) {
  return Promise.all(/*! require.ensure | user */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("user")]).then((function () {
    return r(__webpack_require__(/*! ../pages/User/User */ "./resources/js/pages/User/User.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var userRole = function userRole(r) {
  return Promise.all(/*! require.ensure | userRole */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("userRole")]).then((function () {
    return r(__webpack_require__(/*! ../pages/User/UserRole */ "./resources/js/pages/User/UserRole.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var role = function role(r) {
  return Promise.all(/*! require.ensure | role */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("role")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Role/Role */ "./resources/js/pages/Role/Role.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var rolePermission = function rolePermission(r) {
  return Promise.all(/*! require.ensure | rolePermission */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("rolePermission")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Role/RolePermission */ "./resources/js/pages/Role/RolePermission.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var permission = function permission(r) {
  return Promise.all(/*! require.ensure | permission */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("permission")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Permission/Permission */ "./resources/js/pages/Permission/Permission.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var post = function post(r) {
  return Promise.all(/*! require.ensure | post */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("post")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Post/Post */ "./resources/js/pages/Post/Post.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var topic = function topic(r) {
  return Promise.all(/*! require.ensure | topic */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("topic")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Topic/Topic */ "./resources/js/pages/Topic/Topic.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var notice = function notice(r) {
  return Promise.all(/*! require.ensure | notice */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("notice")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Notice/Notice */ "./resources/js/pages/Notice/Notice.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var unauthorized = function unauthorized(r) {
  return Promise.all(/*! require.ensure | unauthorized */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("unauthorized")]).then((function () {
    return r(__webpack_require__(/*! ../pages/Unauthorized/Unauthorized */ "./resources/js/pages/Unauthorized/Unauthorized.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var notFound = function notFound(r) {
  return Promise.all(/*! require.ensure | notFound */[__webpack_require__.e("vendors~home~login~notFound~notice~permission~post~role~rolePermission~topic~unauthorized~user~userRole"), __webpack_require__.e("notFound")]).then((function () {
    return r(__webpack_require__(/*! ../pages/NotFound/NotFound */ "./resources/js/pages/NotFound/NotFound.vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}; // 解决两次访问相同路由地址报错


var originalPush = vue_router__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.push;

vue_router__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
}; // Vue.use(Router);


/* harmony default export */ __webpack_exports__["default"] = (new vue_router__WEBPACK_IMPORTED_MODULE_0___default.a({
  routes: [{
    path: '/login',
    name: 'login',
    component: login
  }, {
    path: '/',
    component: home,
    children: [{
      path: '',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: index
    }, {
      path: '/users',
      name: 'users',
      component: user
    }, {
      path: '/users/:id/roles',
      name: 'users.roles',
      component: userRole
    }, {
      path: '/roles',
      name: 'roles',
      component: role
    }, {
      path: '/roles/:id/permissions',
      name: 'roles.permissions',
      component: rolePermission
    }, {
      path: '/permissions',
      name: 'permissions',
      component: permission
    }, {
      path: '/posts',
      name: 'posts',
      component: post
    }, {
      path: '/topics',
      name: 'topics',
      component: topic
    }, {
      path: '/notices',
      name: 'notices',
      component: notice
    }, {
      path: '/403',
      name: 'unauthorized',
      component: unauthorized
    }]
  }, {
    path: '*',
    component: notFound
  }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
}));

/***/ }),

/***/ "./resources/js/service/getData.js":
/*!*****************************************!*\
  !*** ./resources/js/service/getData.js ***!
  \*****************************************/
/*! exports provided: login, logout, getSideBarList, getAdminInfo, getAdminUsers, storeAdminUser, getAdminUserRoles, storeAdminUserRoles, getAdminRoles, storeAdminRole, getAdminRolePermissions, storeAdminRolePermissions, getAdminPermissions, storeAdminPermission, getPosts, togglePostStatus, getNotices, storeNotice, getTopics, storeTopic, deleteTopic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSideBarList", function() { return getSideBarList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminInfo", function() { return getAdminInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUsers", function() { return getAdminUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAdminUser", function() { return storeAdminUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUserRoles", function() { return getAdminUserRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAdminUserRoles", function() { return storeAdminUserRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminRoles", function() { return getAdminRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAdminRole", function() { return storeAdminRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminRolePermissions", function() { return getAdminRolePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAdminRolePermissions", function() { return storeAdminRolePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminPermissions", function() { return getAdminPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAdminPermission", function() { return storeAdminPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "togglePostStatus", function() { return togglePostStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNotices", function() { return getNotices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNotice", function() { return storeNotice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopics", function() { return getTopics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopic", function() { return storeTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTopic", function() { return deleteTopic; });
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/fetch */ "./resources/js/utils/fetch.js");

var login = function login(_ref) {
  var name = _ref.name,
      password = _ref.password;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('login', 'POST', {
    name: name,
    password: password
  });
};
var logout = function logout() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('logout');
};
var getSideBarList = function getSideBarList() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_users/permissions');
};
var getAdminInfo = function getAdminInfo() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_users/info');
};
var getAdminUsers = function getAdminUsers() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_users');
};
var storeAdminUser = function storeAdminUser(_ref2) {
  var name = _ref2.name,
      password = _ref2.password;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_users', 'POST', {
    name: name,
    password: password
  });
};
var getAdminUserRoles = function getAdminUserRoles(id) {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_users/' + id + '/admin_roles');
};
var storeAdminUserRoles = function storeAdminUserRoles(id, _ref3) {
  var adminUserRoleList = _ref3.adminUserRoleList;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_users/' + id + '/admin_roles', 'POST', {
    adminUserRoleList: adminUserRoleList
  });
};
var getAdminRoles = function getAdminRoles() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_roles');
};
var storeAdminRole = function storeAdminRole(_ref4) {
  var name = _ref4.name,
      description = _ref4.description;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_roles', 'POST', {
    name: name,
    description: description
  });
};
var getAdminRolePermissions = function getAdminRolePermissions(id) {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_roles/' + id + '/admin_permissions');
};
var storeAdminRolePermissions = function storeAdminRolePermissions(id, _ref5) {
  var adminRolePermissionList = _ref5.adminRolePermissionList;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_roles/' + id + '/admin_permissions', 'POST', {
    adminRolePermissionList: adminRolePermissionList
  });
};
var getAdminPermissions = function getAdminPermissions() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_permissions');
};
var storeAdminPermission = function storeAdminPermission(_ref6) {
  var name = _ref6.name,
      description = _ref6.description;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('admin_permissions', 'POST', {
    name: name,
    description: description
  });
};
var getPosts = function getPosts() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('posts');
};
var togglePostStatus = function togglePostStatus(id, status) {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('posts/' + id, 'PUT', {
    status: status
  });
};
var getNotices = function getNotices() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('notices');
};
var storeNotice = function storeNotice(_ref7) {
  var title = _ref7.title,
      content = _ref7.content;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('notices', 'POST', {
    title: title,
    content: content
  });
};
var getTopics = function getTopics() {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('topics');
};
var storeTopic = function storeTopic(_ref8) {
  var name = _ref8.name;
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('topics', 'POST', {
    name: name
  });
};
var deleteTopic = function deleteTopic(id) {
  return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])('topics/' + id, 'DELETE');
};

/***/ }),

/***/ "./resources/js/store/actions.js":
/*!***************************************!*\
  !*** ./resources/js/store/actions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/getData */ "./resources/js/service/getData.js");
/* harmony import */ var _mutation_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutation-types */ "./resources/js/store/mutation-types.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  GET_ADMIN_INFO: function GET_ADMIN_INFO(_ref) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var commit;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              _context.t0 = commit;
              _context.t1 = _mutation_types__WEBPACK_IMPORTED_MODULE_2__["SET_ADMIN_INFO"];
              _context.next = 5;
              return Object(_service_getData__WEBPACK_IMPORTED_MODULE_1__["getAdminInfo"])();

            case 5:
              _context.t2 = _context.sent;
              (0, _context.t0)(_context.t1, _context.t2);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/store/getters.js":
/*!***************************************!*\
  !*** ./resources/js/store/getters.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./resources/js/store/index.js":
/*!*************************************!*\
  !*** ./resources/js/store/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./resources/js/store/state.js");
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters */ "./resources/js/store/getters.js");
/* harmony import */ var _getters__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_getters__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./resources/js/store/actions.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mutations */ "./resources/js/store/mutations.js");
/* harmony import */ var _modules_userRole__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/userRole */ "./resources/js/store/modules/userRole.js");
/* harmony import */ var _modules_rolePermission__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/rolePermission */ "./resources/js/store/modules/rolePermission.js");
// import Vue from 'vue'






 // Vue.use(Vuex);

/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_0___default.a.Store({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  getters: _getters__WEBPACK_IMPORTED_MODULE_2___default.a,
  mutations: _mutations__WEBPACK_IMPORTED_MODULE_4__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__["default"],
  modules: {
    userRole: _modules_userRole__WEBPACK_IMPORTED_MODULE_5__["default"],
    rolePermission: _modules_rolePermission__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
}));

/***/ }),

/***/ "./resources/js/store/modules/rolePermission.js":
/*!******************************************************!*\
  !*** ./resources/js/store/modules/rolePermission.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = function state() {
  return {
    lastId: ''
  };
};

var SET_LAST_ID = 'SET_LAST_ID';

var mutations = _defineProperty({}, SET_LAST_ID, function (state, id) {
  state.lastId = id;
});

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  mutations: mutations
});

/***/ }),

/***/ "./resources/js/store/modules/userRole.js":
/*!************************************************!*\
  !*** ./resources/js/store/modules/userRole.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var state = function state() {
  return {
    lastId: ''
  };
};

var SET_LAST_ID = 'SET_LAST_ID';

var mutations = _defineProperty({}, SET_LAST_ID, function (state, id) {
  state.lastId = id;
});

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  mutations: mutations
});

/***/ }),

/***/ "./resources/js/store/mutation-types.js":
/*!**********************************************!*\
  !*** ./resources/js/store/mutation-types.js ***!
  \**********************************************/
/*! exports provided: RECORD_ADMIN, LOGOUT, SET_ADMIN_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECORD_ADMIN", function() { return RECORD_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ADMIN_INFO", function() { return SET_ADMIN_INFO; });
var RECORD_ADMIN = 'RECORD_ADMIN';
var LOGOUT = 'LOGOUT';
var SET_ADMIN_INFO = 'SET_ADMIN_INFO';

/***/ }),

/***/ "./resources/js/store/mutations.js":
/*!*****************************************!*\
  !*** ./resources/js/store/mutations.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mutation_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mutation-types */ "./resources/js/store/mutation-types.js");
/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/localStorage */ "./resources/js/utils/localStorage.js");
var _RECORD_ADMIN$LOGOUT$;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (_RECORD_ADMIN$LOGOUT$ = {}, _defineProperty(_RECORD_ADMIN$LOGOUT$, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["RECORD_ADMIN"], function (state, token) {
  state.isLoggedIn = true;
  Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__["setStore"])('token', token);
  Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__["setStore"])('isLoggedIn', true);
}), _defineProperty(_RECORD_ADMIN$LOGOUT$, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"], function (state) {
  state.isLoggedIn = false;
  Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__["removeStore"])('token');
  Object(_utils_localStorage__WEBPACK_IMPORTED_MODULE_1__["removeStore"])('isLoggedIn');
}), _defineProperty(_RECORD_ADMIN$LOGOUT$, _mutation_types__WEBPACK_IMPORTED_MODULE_0__["SET_ADMIN_INFO"], function (state, adminInfo) {
  state.adminInfo = adminInfo;
}), _RECORD_ADMIN$LOGOUT$);

/***/ }),

/***/ "./resources/js/store/state.js":
/*!*************************************!*\
  !*** ./resources/js/store/state.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var defaultIsLoggedIn = '';
var defaultName = '';

try {
  localStorage.isLoggedIn && (defaultIsLoggedIn = localStorage.isLoggedIn);
  localStorage.name && (defaultName = localStorage.name);
} catch (e) {}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: defaultName,
  // 管理员信息
  adminInfo: null,
  // 是否登录
  isLoggedIn: defaultIsLoggedIn
});

/***/ }),

/***/ "./resources/js/utils/fetch.js":
/*!*************************************!*\
  !*** ./resources/js/utils/fetch.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/env */ "./resources/js/config/env.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./resources/js/utils/localStorage.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./resources/js/store/index.js");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-ui */ "element-ui");
/* harmony import */ var element_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(element_ui__WEBPACK_IMPORTED_MODULE_5__);


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url,
      type,
      data,
      method,
      dataStr,
      requestConfig,
      loading,
      response,
      jsonRes,
      code,
      status,
      _data,
      token,
      _args = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
          type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'GET';
          data = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          method = _args.length > 3 && _args[3] !== undefined ? _args[3] : 'fetch';
          type = type.toUpperCase();
          url = _config_env__WEBPACK_IMPORTED_MODULE_1__["BASE_URL_PREFIX"] + url;

          if ('GET' === type) {
            dataStr = '';
            Object.keys(data).forEach(function (key) {
              dataStr += key + '=' + data[key] + '&';
            });

            if (dataStr !== '') {
              url += '?' + dataStr.substr(0, dataStr.lastIndexOf('&'));
            }
          }

          if (!(window.fetch && 'fetch' === method)) {
            _context.next = 43;
            break;
          }

          requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization': Object(_localStorage__WEBPACK_IMPORTED_MODULE_2__["getStore"])('token')
            },
            mode: 'cors'
          };

          if ('POST' === type || 'PUT' === type) {
            Object.defineProperty(requestConfig, 'body', {
              value: JSON.stringify(data)
            });
          }

          _context.prev = 10;
          loading = element_ui__WEBPACK_IMPORTED_MODULE_5__["Loading"].service({
            fullscreen: true
          });
          _context.next = 14;
          return fetch(url, requestConfig);

        case 14:
          response = _context.sent;
          _context.next = 17;
          return response.json();

        case 17:
          jsonRes = _context.sent;
          loading.close();
          code = jsonRes.code, status = jsonRes.status, _data = jsonRes.data;
          token = response.headers.get('Authorization');

          if (null !== token) {
            _store__WEBPACK_IMPORTED_MODULE_4__["default"].commit('RECORD_ADMIN', token);
          }

          if (!('success' === status)) {
            _context.next = 26;
            break;
          }

          return _context.abrupt("return", _data);

        case 26:
          _context.t0 = code;
          _context.next = _context.t0 === 400 ? 29 : _context.t0 === 403 ? 31 : _context.t0 === 422 ? 33 : 36;
          break;

        case 29:
          element_ui__WEBPACK_IMPORTED_MODULE_5__["Message"].error({
            message: jsonRes.message
          });
          return _context.abrupt("break", 37);

        case 31:
          _router__WEBPACK_IMPORTED_MODULE_3__["default"].push({
            name: 'unauthorized'
          });
          return _context.abrupt("break", 37);

        case 33:
          _store__WEBPACK_IMPORTED_MODULE_4__["default"].commit('LOGOUT');
          _router__WEBPACK_IMPORTED_MODULE_3__["default"].push({
            name: 'login'
          });
          return _context.abrupt("break", 37);

        case 36:
          return _context.abrupt("break", 37);

        case 37:
          _context.next = 41;
          break;

        case 39:
          _context.prev = 39;
          _context.t1 = _context["catch"](10);

        case 41:
          _context.next = 44;
          break;

        case 43:
          return _context.abrupt("return", new Promise(function (resolve, reject) {
            var requestObj = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
            var sendData = '';

            if ('POST' === type) {
              sendData = JSON.stringify(data);
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            requestObj.send(sendData);

            requestObj.onreadystatechange = function () {
              if (4 === requestObj.readyState) {
                if (200 === requestObj.status) {
                  var obj = requestObj.response;

                  if (_typeof(obj) !== 'object') {
                    obj = JSON.parse(obj);
                  }

                  resolve(obj);
                } else {
                  reject(requestObj);
                }
              }
            };
          }));

        case 44:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[10, 39]]);
})));

/***/ }),

/***/ "./resources/js/utils/localStorage.js":
/*!********************************************!*\
  !*** ./resources/js/utils/localStorage.js ***!
  \********************************************/
/*! exports provided: setStore, getStore, removeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStore", function() { return setStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStore", function() { return removeStore; });
/**
 * 存储 localStorage
 */
var setStore = function setStore(name, content) {
  if (!name) {
    return;
  }

  'string' !== typeof content && (content = JSON.stringify(content));
  window.localStorage.setItem(name, content);
};
/**
 * 获取 localStorage
 */

var getStore = function getStore(name) {
  if (!name) {
    return;
  }

  return window.localStorage.getItem(name);
};
/**
 * 删除 localStorage
 */

var removeStore = function removeStore(name) {
  if (!name) {
    return;
  }

  window.localStorage.removeItem(name);
};

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\lskj03\code\rexxar\resources\js\app.js */"./resources/js/app.js");


/***/ }),

/***/ "element-ui":
/*!**************************!*\
  !*** external "ELEMENT" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ELEMENT;

/***/ }),

/***/ "vue-router":
/*!****************************!*\
  !*** external "VueRouter" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "Vuex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ })

/******/ });