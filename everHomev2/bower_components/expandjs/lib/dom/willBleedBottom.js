/*jslint browser: true, devel: true, node: true, ass: true, nomen: true, unparam: true, indent: 4 */

/**
 * @license
 * Copyright (c) 2015 The ExpandJS authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://expandjs.github.io/LICENSE.txt
 * The complete set of authors may be found at https://expandjs.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://expandjs.github.io/CONTRIBUTORS.txt
 */
(function () {
    "use strict";

    var assertArgument = require('../assert/assertArgument'),
        getHeight      = require('../dom/getHeight'),
        isObject       = require('../tester/isObject');

    /**
     * Checks if the element defined by the `boundings` and `margin`
     * bleeds out on the bottom side of the viewport.
     *
     * ```html
     *     <style>
     *         #target {
     *             width: 100vw;
     *         }
     *     </style>
     *     <div id="target"></div>
     *
     *     var elem    = XP.getElement('html'),
     *         bounds  = XP.getBoundings(elem),
     *         margins = XP.getMargin(elem);
     *
     *     XP.willBleedBottom(bounds, margins);
     *     // => false
     *
     *     <style>
     *         #target {
     *             width: 100vw;
     *             margin-top: 10vw;
     *         }
     *     </style>
     *     <div id="target"></div>
     *
     *     var elem    = XP.getElement('html'),
     *         bounds  = XP.getBoundings(elem),
     *         margins = XP.getMargin(elem);
     *
     *     XP.willBleedBottom(bounds, margins);
     *     // => true
     * ```
     *
     * @function willBleedBottom
     * @param {Object} boundings The bounding rect of the element
     * @param {Object} margin The margins rect of the element
     * @returns {boolean} Returns true if the element will bleed bottom, otherwise false
     */
    module.exports = function willBleedBottom(boundings, margin) {
        assertArgument(isObject(boundings), 1, 'Object');
        assertArgument(isObject(margin), 2, 'Object');
        return boundings.top + margin.top + boundings.height + margin.bottom > getHeight();
    };

}());