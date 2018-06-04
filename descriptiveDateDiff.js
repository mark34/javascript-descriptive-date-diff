/**
 * Author: Mark Birch (GUID Ltd)
 * Date : 2018-06-04
 * (C) 2018 Mark Birch - MIT license
 */


/**
 * Return a difference object. It's intended that you use all the attributes to describe the difference in time between the 2 dates;
 * years, months, weeks, days, hours, minutes, seconds
 * ie. weeks are only the leftovers from months, days are only the leftovers from weeks etc...
 * @return Object : { years, months, weeks, days, hours, minutes, seconds , toString() , toArray()}
 */
function makeDifferenceObject( date1, date2 ) {

    var ret = {};

    var diff = new Date( Math.abs( date1.getTime() - date2.getTime()) );

    ret.years = diff.getUTCFullYear() - 1970;
    ret.months = diff.getUTCMonth();
    ret.days = diff.getUTCDate() - 1; // Gives day count of difference
    ret.weeks = Math.floor( ret.days/7 );
    ret.days = ret.days - (7 * ret.weeks );
    ret.minutes = diff.getUTCMinutes();
    ret.seconds = diff.getUTCSeconds();

    /**
     * Get all the information to be shown to the user, as a string
     * @returns {string}
     */
    ret.toString = function(opts) {

        return this.toArray(opts).join(', ');
    }

    /**
     * get all the values to be shown to a user in an array
     * @parameter opts = { maxDetail : 3 } - set the Max amount of detail to show - eg. 3 might give: Years, months, weeks
     * @returns {Array}
     */
    ret.toArray = function( opts ) {

        var arrRet  = [];
        var detailLevel = 0;
        var maxDetail = 99;
        if( opts && (typeof opts === 'object') && opts.hasOwnProperty('maxDetail') ) {

            maxDetail = opts.maxDetail;
        }
        if( this.years > 0 ) {
            arrRet.push(  this.years + ' year' + (this.years > 1 ? 's' : '' ) );
            detailLevel++;
        }
        if( this.months > 0 && maxDetail > detailLevel ) {
            arrRet.push(  this.months + ' month' + (this.months > 1 ? 's' : '' ));
            detailLevel++;
        }
        if( this.weeks > 0 && maxDetail > detailLevel  ) {
            arrRet.push(  this.weeks + ' week' + (this.weeks > 1 ? 's' : '' ) );
            detailLevel++;
        }
        if( this.days > 0 && maxDetail > detailLevel  ) {
            arrRet.push(  this.days + ' day' + (this.days > 1 ? 's' : '' ) );
            detailLevel++;
        }
        if( this.minutes > 0 && maxDetail > detailLevel ) {
            arrRet.push(  this.minutes + ' minute' + (this.minutes > 1 ? 's' : '' ) );
            detailLevel++;
        }
        if( this.seconds > 0 && maxDetail > detailLevel  ) {
            arrRet.push(  this.seconds + ' second' + (this.seconds > 1 ? 's' : '' ) );
            detailLevel++;
        }
        return arrRet;
    }

    return ret;
}
