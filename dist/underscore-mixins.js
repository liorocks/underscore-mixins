/**
 * Collection of helpful mixins for underscore.js
 *
 * @versin 1.0.0
 * @author Lado Lomidze
 * @email lado.lomidze@gmail.com
 * @source https://github.com/Landish/underscore-mixins
 */
_.mixin({

    /**
     * Get window location hash.
     *
     * If no {hash} argument is passed, it will return the current hash.
     * Otherwise it will check if passed {hash} argument is equal to location hash
     * and return true or false, depending on it.
     *
     * @param hash
     * @return {string|boolean}
     */
    hash: function(hash) {
        return _.isUndefined(hash) ? window.location.hash : '#' + hash === window.location.hash;
    },

    /**
     * Get parameter value in url query string.
     *
     * @param name
     * @return {string|null}
     */
    param: function(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    },

    /**
     * Compile javascript templates into html string.
     *
     * @param template
     * @param data
     * @return {*}
     */
    render: function(template, data) {
        return _.template(template, data, { interpolate: /\{\{(.+?)\}\}/g, escape: /\{\{(.+?)\}\}/g, evaluate: /\{\{(.+?)\}\}/g });
    },

    /**
     * Convert javascript object into html attributes.
     *
     * @param obj
     * @returns {string}
     * @source https://gist.github.com/Landish/33a47e5c1a02d5ef2457
     */
    toAttrs: function(obj) {
        return _.map(obj,function(value, attr) {
            return attr + '="' + value + '"';
        }).join(' ');
    },
    /**
     * Format money helper.
     *
     * @param amount | amount
     * @param n | length of decimal
     * @param x | length of whole part
     * @param s | sections delimiter
     * @param c | decimal delimiter
     */
    formatMoney : function(amount, n, x, s, c) {
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
            num = amount.toFixed(Math.max(0, ~~n));
        return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ' '));
    },

    /**
     * Console log helper.
     *
     * @param message
     * @returns {*}
     */
    log: function(message) {
        return console.log(message);
    },

    /**
     * Console warn helper.
     *
     * @param message
     * @returns {*}
     */
    warn: function(message) {
        return console.warn(message);
    },

    /**
     * Console error helper.
     *
     * @param message
     * @returns {*}
     */
    error: function(message) {
        return console.error(message);
    },

    /**
     * Console info helper.
     *
     * @param message
     * @returns {*}
     */
    info: function(message) {
        return console.info(message);
    }

});