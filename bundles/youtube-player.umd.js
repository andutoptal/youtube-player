(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/youtube-player', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.youtubePlayer = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, common, rxjs, operators) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DEFAULT_PLAYER_WIDTH = 640;
    var DEFAULT_PLAYER_HEIGHT = 390;
    /**
     * Angular component that renders a YouTube player via the YouTube player
     * iframe API.
     * @see https://developers.google.com/youtube/iframe_api_reference
     */
    var YouTubePlayer = /** @class */ (function () {
        function YouTubePlayer(_ngZone, platformId) {
            this._ngZone = _ngZone;
            this._youtubeContainer = new rxjs.Subject();
            this._destroyed = new rxjs.Subject();
            this._playerChanges = new rxjs.BehaviorSubject(undefined);
            this._videoId = new rxjs.BehaviorSubject(undefined);
            this._height = new rxjs.BehaviorSubject(DEFAULT_PLAYER_HEIGHT);
            this._width = new rxjs.BehaviorSubject(DEFAULT_PLAYER_WIDTH);
            this._startSeconds = new rxjs.BehaviorSubject(undefined);
            this._endSeconds = new rxjs.BehaviorSubject(undefined);
            this._suggestedQuality = new rxjs.BehaviorSubject(undefined);
            this._playerVars = new rxjs.BehaviorSubject(undefined);
            /** Outputs are direct proxies from the player itself. */
            this.ready = this._getLazyEmitter('onReady');
            this.stateChange = this._getLazyEmitter('onStateChange');
            this.error = this._getLazyEmitter('onError');
            this.apiChange = this._getLazyEmitter('onApiChange');
            this.playbackQualityChange = this._getLazyEmitter('onPlaybackQualityChange');
            this.playbackRateChange = this._getLazyEmitter('onPlaybackRateChange');
            this._isBrowser = common.isPlatformBrowser(platformId);
        }
        Object.defineProperty(YouTubePlayer.prototype, "videoId", {
            /** YouTube Video ID to view */
            get: function () { return this._videoId.value; },
            set: function (videoId) {
                this._videoId.next(videoId);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YouTubePlayer.prototype, "height", {
            /** Height of video player */
            get: function () { return this._height.value; },
            set: function (height) {
                this._height.next(height || DEFAULT_PLAYER_HEIGHT);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YouTubePlayer.prototype, "width", {
            /** Width of video player */
            get: function () { return this._width.value; },
            set: function (width) {
                this._width.next(width || DEFAULT_PLAYER_WIDTH);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YouTubePlayer.prototype, "startSeconds", {
            /** The moment when the player is supposed to start playing */
            set: function (startSeconds) {
                this._startSeconds.next(startSeconds);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YouTubePlayer.prototype, "endSeconds", {
            /** The moment when the player is supposed to stop playing */
            set: function (endSeconds) {
                this._endSeconds.next(endSeconds);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YouTubePlayer.prototype, "suggestedQuality", {
            /** The suggested quality of the player */
            set: function (suggestedQuality) {
                this._suggestedQuality.next(suggestedQuality);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(YouTubePlayer.prototype, "playerVars", {
            /**
             * Extra parameters used to configure the player. See:
             * https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5#Parameters
             */
            get: function () { return this._playerVars.value; },
            set: function (playerVars) {
                this._playerVars.next(playerVars);
            },
            enumerable: true,
            configurable: true
        });
        YouTubePlayer.prototype.ngOnInit = function () {
            var _this = this;
            // Don't do anything if we're not in a browser environment.
            if (!this._isBrowser) {
                return;
            }
            var iframeApiAvailableObs = rxjs.of(true);
            if (!window.YT) {
                if (this.showBeforeIframeApiLoads) {
                    throw new Error('Namespace YT not found, cannot construct embedded youtube player. ' +
                        'Please install the YouTube Player API Reference for iframe Embeds: ' +
                        'https://developers.google.com/youtube/iframe_api_reference');
                }
                var iframeApiAvailableSubject_1 = new rxjs.Subject();
                this._existingApiReadyCallback = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = function () {
                    if (_this._existingApiReadyCallback) {
                        _this._existingApiReadyCallback();
                    }
                    _this._ngZone.run(function () { return iframeApiAvailableSubject_1.next(true); });
                };
                iframeApiAvailableObs = iframeApiAvailableSubject_1.pipe(operators.take(1), operators.startWith(false));
            }
            // An observable of the currently loaded player.
            var playerObs = createPlayerObservable(this._youtubeContainer, this._videoId, iframeApiAvailableObs, this._width, this._height, this._playerVars, this._ngZone).pipe(operators.tap(function (player) {
                // Emit this before the `waitUntilReady` call so that we can bind to
                // events that happen as the player is being initialized (e.g. `onReady`).
                _this._playerChanges.next(player);
            }), waitUntilReady(function (player) {
                // Destroy the player if loading was aborted so that we don't end up leaking memory.
                if (!playerIsReady(player)) {
                    player.destroy();
                }
            }), operators.takeUntil(this._destroyed), operators.publish());
            // Set up side effects to bind inputs to the player.
            playerObs.subscribe(function (player) {
                _this._player = player;
                if (player && _this._pendingPlayerState) {
                    _this._initializePlayer(player, _this._pendingPlayerState);
                }
                _this._pendingPlayerState = undefined;
            });
            bindSizeToPlayer(playerObs, this._width, this._height);
            bindSuggestedQualityToPlayer(playerObs, this._suggestedQuality);
            bindCueVideoCall(playerObs, this._videoId, this._startSeconds, this._endSeconds, this._suggestedQuality, this._destroyed);
            // After all of the subscriptions are set up, connect the observable.
            playerObs.connect();
        };
        /**
         * @deprecated No longer being used. To be removed.
         * @breaking-change 11.0.0
         */
        YouTubePlayer.prototype.createEventsBoundInZone = function () {
            return {};
        };
        YouTubePlayer.prototype.ngAfterViewInit = function () {
            this._youtubeContainer.next(this.youtubeContainer.nativeElement);
        };
        YouTubePlayer.prototype.ngOnDestroy = function () {
            if (this._player) {
                this._player.destroy();
                window.onYouTubeIframeAPIReady = this._existingApiReadyCallback;
            }
            this._playerChanges.complete();
            this._videoId.complete();
            this._height.complete();
            this._width.complete();
            this._startSeconds.complete();
            this._endSeconds.complete();
            this._suggestedQuality.complete();
            this._youtubeContainer.complete();
            this._playerVars.complete();
            this._destroyed.next();
            this._destroyed.complete();
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#playVideo */
        YouTubePlayer.prototype.playVideo = function () {
            if (this._player) {
                this._player.playVideo();
            }
            else {
                this._getPendingState().playbackState = 1 /* PLAYING */;
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#pauseVideo */
        YouTubePlayer.prototype.pauseVideo = function () {
            if (this._player) {
                this._player.pauseVideo();
            }
            else {
                this._getPendingState().playbackState = 2 /* PAUSED */;
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#stopVideo */
        YouTubePlayer.prototype.stopVideo = function () {
            if (this._player) {
                this._player.stopVideo();
            }
            else {
                // It seems like YouTube sets the player to CUED when it's stopped.
                this._getPendingState().playbackState = 5 /* CUED */;
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#seekTo */
        YouTubePlayer.prototype.seekTo = function (seconds, allowSeekAhead) {
            if (this._player) {
                this._player.seekTo(seconds, allowSeekAhead);
            }
            else {
                this._getPendingState().seek = { seconds: seconds, allowSeekAhead: allowSeekAhead };
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#mute */
        YouTubePlayer.prototype.mute = function () {
            if (this._player) {
                this._player.mute();
            }
            else {
                this._getPendingState().muted = true;
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#unMute */
        YouTubePlayer.prototype.unMute = function () {
            if (this._player) {
                this._player.unMute();
            }
            else {
                this._getPendingState().muted = false;
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#isMuted */
        YouTubePlayer.prototype.isMuted = function () {
            if (this._player) {
                return this._player.isMuted();
            }
            if (this._pendingPlayerState) {
                return !!this._pendingPlayerState.muted;
            }
            return false;
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#setVolume */
        YouTubePlayer.prototype.setVolume = function (volume) {
            if (this._player) {
                this._player.setVolume(volume);
            }
            else {
                this._getPendingState().volume = volume;
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getVolume */
        YouTubePlayer.prototype.getVolume = function () {
            if (this._player) {
                return this._player.getVolume();
            }
            if (this._pendingPlayerState && this._pendingPlayerState.volume != null) {
                return this._pendingPlayerState.volume;
            }
            return 0;
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate */
        YouTubePlayer.prototype.setPlaybackRate = function (playbackRate) {
            if (this._player) {
                return this._player.setPlaybackRate(playbackRate);
            }
            else {
                this._getPendingState().playbackRate = playbackRate;
            }
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackRate */
        YouTubePlayer.prototype.getPlaybackRate = function () {
            if (this._player) {
                return this._player.getPlaybackRate();
            }
            if (this._pendingPlayerState && this._pendingPlayerState.playbackRate != null) {
                return this._pendingPlayerState.playbackRate;
            }
            return 0;
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getAvailablePlaybackRates */
        YouTubePlayer.prototype.getAvailablePlaybackRates = function () {
            return this._player ? this._player.getAvailablePlaybackRates() : [];
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getVideoLoadedFraction */
        YouTubePlayer.prototype.getVideoLoadedFraction = function () {
            return this._player ? this._player.getVideoLoadedFraction() : 0;
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getPlayerState */
        YouTubePlayer.prototype.getPlayerState = function () {
            if (!this._isBrowser || !window.YT) {
                return undefined;
            }
            if (this._player) {
                return this._player.getPlayerState();
            }
            if (this._pendingPlayerState && this._pendingPlayerState.playbackState != null) {
                return this._pendingPlayerState.playbackState;
            }
            return -1 /* UNSTARTED */;
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getCurrentTime */
        YouTubePlayer.prototype.getCurrentTime = function () {
            if (this._player) {
                return this._player.getCurrentTime();
            }
            if (this._pendingPlayerState && this._pendingPlayerState.seek) {
                return this._pendingPlayerState.seek.seconds;
            }
            return 0;
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackQuality */
        YouTubePlayer.prototype.getPlaybackQuality = function () {
            return this._player ? this._player.getPlaybackQuality() : 'default';
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getAvailableQualityLevels */
        YouTubePlayer.prototype.getAvailableQualityLevels = function () {
            return this._player ? this._player.getAvailableQualityLevels() : [];
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getDuration */
        YouTubePlayer.prototype.getDuration = function () {
            return this._player ? this._player.getDuration() : 0;
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getVideoUrl */
        YouTubePlayer.prototype.getVideoUrl = function () {
            return this._player ? this._player.getVideoUrl() : '';
        };
        /** See https://developers.google.com/youtube/iframe_api_reference#getVideoEmbedCode */
        YouTubePlayer.prototype.getVideoEmbedCode = function () {
            return this._player ? this._player.getVideoEmbedCode() : '';
        };
        /** Gets an object that should be used to store the temporary API state. */
        YouTubePlayer.prototype._getPendingState = function () {
            if (!this._pendingPlayerState) {
                this._pendingPlayerState = {};
            }
            return this._pendingPlayerState;
        };
        /** Initializes a player from a temporary state. */
        YouTubePlayer.prototype._initializePlayer = function (player, state) {
            var playbackState = state.playbackState, playbackRate = state.playbackRate, volume = state.volume, muted = state.muted, seek = state.seek;
            switch (playbackState) {
                case 1 /* PLAYING */:
                    player.playVideo();
                    break;
                case 2 /* PAUSED */:
                    player.pauseVideo();
                    break;
                case 5 /* CUED */:
                    player.stopVideo();
                    break;
            }
            if (playbackRate != null) {
                player.setPlaybackRate(playbackRate);
            }
            if (volume != null) {
                player.setVolume(volume);
            }
            if (muted != null) {
                muted ? player.mute() : player.unMute();
            }
            if (seek != null) {
                player.seekTo(seek.seconds, seek.allowSeekAhead);
            }
        };
        /** Gets an observable that adds an event listener to the player when a user subscribes to it. */
        YouTubePlayer.prototype._getLazyEmitter = function (name) {
            var _this = this;
            // Start with the stream of players. This way the events will be transferred
            // over to the new player if it gets swapped out under-the-hood.
            return this._playerChanges.pipe(
            // Switch to the bound event. `switchMap` ensures that the old event is removed when the
            // player is changed. If there's no player, return an observable that never emits.
            operators.switchMap(function (player) {
                return player ? rxjs.fromEventPattern(function (listener) {
                    player.addEventListener(name, listener);
                }, function (listener) {
                    // The API seems to throw when we try to unbind from a destroyed player and it doesn't
                    // expose whether the player has been destroyed so we have to wrap it in a try/catch to
                    // prevent the entire stream from erroring out.
                    try {
                        if (player.removeEventListener) {
                            player.removeEventListener(name, listener);
                        }
                    }
                    catch (_a) { }
                }) : rxjs.of();
            }), 
            // By default we run all the API interactions outside the zone
            // so we have to bring the events back in manually when they emit.
            function (source) { return new rxjs.Observable(function (observer) { return source.subscribe({
                next: function (value) { return _this._ngZone.run(function () { return observer.next(value); }); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            }); }); }, 
            // Ensures that everything is cleared out on destroy.
            operators.takeUntil(this._destroyed));
        };
        YouTubePlayer.decorators = [
            { type: core.Component, args: [{
                        selector: 'youtube-player',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        // This div is *replaced* by the YouTube player embed.
                        template: '<div #youtubeContainer></div>'
                    }] }
        ];
        /** @nocollapse */
        YouTubePlayer.ctorParameters = function () { return [
            { type: core.NgZone },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
        ]; };
        YouTubePlayer.propDecorators = {
            videoId: [{ type: core.Input }],
            height: [{ type: core.Input }],
            width: [{ type: core.Input }],
            startSeconds: [{ type: core.Input }],
            endSeconds: [{ type: core.Input }],
            suggestedQuality: [{ type: core.Input }],
            playerVars: [{ type: core.Input }],
            showBeforeIframeApiLoads: [{ type: core.Input }],
            ready: [{ type: core.Output }],
            stateChange: [{ type: core.Output }],
            error: [{ type: core.Output }],
            apiChange: [{ type: core.Output }],
            playbackQualityChange: [{ type: core.Output }],
            playbackRateChange: [{ type: core.Output }],
            youtubeContainer: [{ type: core.ViewChild, args: ['youtubeContainer',] }]
        };
        return YouTubePlayer;
    }());
    /** Listens to changes to the given width and height and sets it on the player. */
    function bindSizeToPlayer(playerObs, widthObs, heightObs) {
        return rxjs.combineLatest([playerObs, widthObs, heightObs])
            .subscribe(function (_a) {
            var _b = __read(_a, 3), player = _b[0], width = _b[1], height = _b[2];
            return player && player.setSize(width, height);
        });
    }
    /** Listens to changes from the suggested quality and sets it on the given player. */
    function bindSuggestedQualityToPlayer(playerObs, suggestedQualityObs) {
        return rxjs.combineLatest([
            playerObs,
            suggestedQualityObs
        ]).subscribe(function (_a) {
            var _b = __read(_a, 2), player = _b[0], suggestedQuality = _b[1];
            return player && suggestedQuality && player.setPlaybackQuality(suggestedQuality);
        });
    }
    /**
     * Returns an observable that emits the loaded player once it's ready. Certain properties/methods
     * won't be available until the iframe finishes loading.
     * @param onAbort Callback function that will be invoked if the player loading was aborted before
     * it was able to complete. Can be used to clean up any loose references.
     */
    function waitUntilReady(onAbort) {
        return operators.flatMap(function (player) {
            if (!player) {
                return rxjs.of(undefined);
            }
            if (playerIsReady(player)) {
                return rxjs.of(player);
            }
            // Since removeEventListener is not on Player when it's initialized, we can't use fromEvent.
            // The player is not initialized fully until the ready is called.
            return new rxjs.Observable(function (emitter) {
                var aborted = false;
                var resolved = false;
                var onReady = function (event) {
                    resolved = true;
                    if (!aborted) {
                        event.target.removeEventListener('onReady', onReady);
                        emitter.next(event.target);
                    }
                };
                player.addEventListener('onReady', onReady);
                return function () {
                    aborted = true;
                    if (!resolved) {
                        onAbort(player);
                    }
                };
            }).pipe(operators.take(1), operators.startWith(undefined));
        });
    }
    /** Create an observable for the player based on the given options. */
    function createPlayerObservable(youtubeContainer, videoIdObs, iframeApiAvailableObs, widthObs, heightObs, playerVarsObs, ngZone) {
        var playerOptions = rxjs.combineLatest([videoIdObs, playerVarsObs]).pipe(operators.withLatestFrom(rxjs.combineLatest([widthObs, heightObs])), operators.map(function (_a) {
            var _b = __read(_a, 2), constructorOptions = _b[0], sizeOptions = _b[1];
            var _c = __read(constructorOptions, 2), videoId = _c[0], playerVars = _c[1];
            var _d = __read(sizeOptions, 2), width = _d[0], height = _d[1];
            return videoId ? ({ videoId: videoId, playerVars: playerVars, width: width, height: height }) : undefined;
        }));
        return rxjs.combineLatest([youtubeContainer, playerOptions, rxjs.of(ngZone)])
            .pipe(skipUntilRememberLatest(iframeApiAvailableObs), operators.scan(syncPlayerState, undefined), operators.distinctUntilChanged());
    }
    /** Skips the given observable until the other observable emits true, then emit the latest. */
    function skipUntilRememberLatest(notifier) {
        return rxjs.pipe(operators.combineLatest(notifier), operators.skipWhile(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], doneSkipping = _b[1];
            return !doneSkipping;
        }), operators.map(function (_a) {
            var _b = __read(_a, 1), value = _b[0];
            return value;
        }));
    }
    /** Destroy the player if there are no options, or create the player if there are options. */
    function syncPlayerState(player, _a) {
        var _b = __read(_a, 3), container = _b[0], videoOptions = _b[1], ngZone = _b[2];
        if (player && videoOptions && player.playerVars !== videoOptions.playerVars) {
            // The player needs to be recreated if the playerVars are different.
            player.destroy();
        }
        else if (!videoOptions) {
            if (player) {
                // Destroy the player if the videoId was removed.
                player.destroy();
            }
            return;
        }
        else if (player) {
            return player;
        }
        // Important! We need to create the Player object outside of the `NgZone`, because it kicks
        // off a 250ms setInterval which will continually trigger change detection if we don't.
        var newPlayer = ngZone.runOutsideAngular(function () { return new YT.Player(container, videoOptions); });
        newPlayer.videoId = videoOptions.videoId;
        newPlayer.playerVars = videoOptions.playerVars;
        return newPlayer;
    }
    /**
     * Call cueVideoById if the videoId changes, or when start or end seconds change. cueVideoById will
     * change the loaded video id to the given videoId, and set the start and end times to the given
     * start/end seconds.
     */
    function bindCueVideoCall(playerObs, videoIdObs, startSecondsObs, endSecondsObs, suggestedQualityObs, destroyed) {
        var cueOptionsObs = rxjs.combineLatest([startSecondsObs, endSecondsObs])
            .pipe(operators.map(function (_a) {
            var _b = __read(_a, 2), startSeconds = _b[0], endSeconds = _b[1];
            return ({ startSeconds: startSeconds, endSeconds: endSeconds });
        }));
        // Only respond to changes in cue options if the player is not running.
        var filteredCueOptions = cueOptionsObs
            .pipe(filterOnOther(playerObs, function (player) { return !!player && !hasPlayerStarted(player); }));
        // If the video id changed, there's no reason to run 'cue' unless the player
        // was initialized with a different video id.
        var changedVideoId = videoIdObs
            .pipe(filterOnOther(playerObs, function (player, videoId) { return !!player && player.videoId !== videoId; }));
        // If the player changed, there's no reason to run 'cue' unless there are cue options.
        var changedPlayer = playerObs.pipe(filterOnOther(rxjs.combineLatest([videoIdObs, cueOptionsObs]), function (_a, player) {
            var _b = __read(_a, 2), videoId = _b[0], cueOptions = _b[1];
            return !!player &&
                (videoId != player.videoId || !!cueOptions.startSeconds || !!cueOptions.endSeconds);
        }));
        rxjs.merge(changedPlayer, changedVideoId, filteredCueOptions)
            .pipe(operators.withLatestFrom(rxjs.combineLatest([playerObs, videoIdObs, cueOptionsObs, suggestedQualityObs])), operators.map(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], values = _b[1];
            return values;
        }), operators.takeUntil(destroyed))
            .subscribe(function (_a) {
            var _b = __read(_a, 4), player = _b[0], videoId = _b[1], cueOptions = _b[2], suggestedQuality = _b[3];
            if (!videoId || !player) {
                return;
            }
            player.videoId = videoId;
            player.cueVideoById(__assign({ videoId: videoId,
                suggestedQuality: suggestedQuality }, cueOptions));
        });
    }
    function hasPlayerStarted(player) {
        var state = player.getPlayerState();
        return state !== -1 /* UNSTARTED */ && state !== 5 /* CUED */;
    }
    function playerIsReady(player) {
        return 'getPlayerStatus' in player;
    }
    /** Combines the two observables temporarily for the filter function. */
    function filterOnOther(otherObs, filterFn) {
        return rxjs.pipe(operators.withLatestFrom(otherObs), operators.filter(function (_a) {
            var _b = __read(_a, 2), value = _b[0], other = _b[1];
            return filterFn(other, value);
        }), operators.map(function (_a) {
            var _b = __read(_a, 1), value = _b[0];
            return value;
        }));
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var COMPONENTS = [YouTubePlayer];
    var YouTubePlayerModule = /** @class */ (function () {
        function YouTubePlayerModule() {
        }
        YouTubePlayerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    },] }
        ];
        return YouTubePlayerModule;
    }());

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.YouTubePlayer = YouTubePlayer;
    exports.YouTubePlayerModule = YouTubePlayerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=youtube-player.umd.js.map
