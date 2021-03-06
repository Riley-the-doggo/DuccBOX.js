/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import 'https://unpkg.com/three@0.131.3/build/three.js'
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e(require("three"), require("three.texttexture")))
    : "function" == typeof define && define.amd
    ? define(["three", "three.texttexture"], e)
    : (((t = t || self).THREE = t.THREE || {}),
      (t.THREE.TextSprite = e(t.THREE, t.THREE.TextTexture)));
})(this, function (t, e) {
  "use strict";
  e = e && e.hasOwnProperty("default") ? e.default : e;
  var i = new t.Vector3(),
    r = new t.Vector3(),
    a = new t.Vector3();
  return (function (o) {
    function n(i) {
      void 0 === i && (i = {});
      var r = i.material;
      void 0 === r && (r = {});
      var a = i.maxFontSize;
      void 0 === a && (a = 1 / 0);
      var n = i.minFontSize;
      void 0 === n && (n = 0);
      var p = i.redrawInterval;
      void 0 === p && (p = 1);
      var s = i.textSize;
      void 0 === s && (s = 1);
      var h = i.texture;
      void 0 === h && (h = {}),
        o.call(
          this,
          new t.SpriteMaterial(Object.assign({}, r, { map: new e(h) }))
        ),
        (this.lastRedraw = 0),
        (this.maxFontSize = a),
        (this.minFontSize = n),
        (this.redrawInterval = p),
        (this.textSize = s);
    }
    o && (n.__proto__ = o),
      (n.prototype = Object.create(o && o.prototype)),
      (n.prototype.constructor = n);
    var p = { isTextSprite: { configurable: !0 } };
    return (
      (p.isTextSprite.get = function () {
        return !0;
      }),
      (n.prototype.onBeforeRender = function (t, e, i) {
        this.redraw(t, i);
      }),
      (n.prototype.updateScale = function () {
        this.scale
          .set(
            this.material.map.image.width / this.material.map.image.height,
            1,
            1
          )
          .multiplyScalar(this.textSize * this.material.map.height);
      }),
      (n.prototype.updateMatrix = function () {
        for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
        return this.updateScale(), o.prototype.updateMatrix.apply(this, t);
      }),
      (n.prototype.redraw = function (t, e) {
        var i = this;
        this.lastRedraw + this.redrawInterval < Date.now() &&
          (this.redrawInterval
            ? setTimeout(function () {
                i.redrawNow(t, e);
              }, 1)
            : this.redrawNow(t, e));
      }),
      (n.prototype.redrawNow = function (e, o) {
        this.updateScale(),
          (this.material.map.fontSize = t.Math.clamp(
            t.Math.ceilPowerOfTwo(
              (function (e, o, n) {
                if (
                  o.domElement.width &&
                  o.domElement.height &&
                  e.material.map.height
                ) {
                  e.getWorldPosition(r), n.getWorldPosition(i);
                  var p = r.distanceTo(i),
                    s = 2 * Math.tan(t.Math.degToRad(n.fov) / 2) * p;
                  if (s) {
                    e.getWorldScale(a);
                    var h = (a.y * o.domElement.height) / s;
                    if (h) return Math.round(h / e.material.map.height);
                  }
                }
                return 0;
              })(this, e, o)
            ),
            this.minFontSize,
            this.maxFontSize
          )),
          (this.lastRedraw = Date.now());
      }),
      (n.prototype.dispose = function () {
        this.material.map.dispose(), this.material.dispose();
      }),
      Object.defineProperties(n.prototype, p),
      n
    );
  })(t.Sprite);
});
