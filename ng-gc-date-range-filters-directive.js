/**
 * @license ng-gc-date-range-filters-directive v0.1.0
 * (c) 2013-2013 GoCardless, Ltd.
 * https://github.com/gocardless-ng/ng-gc-date-range-filters-directive.git
 * License: MIT
 */
(function(){
'use strict';

angular.module('ng-gc-date-range-filters-template.html', []).run(function($templateCache) {
  $templateCache.put('ng-gc-date-range-filters-template.html',
    '<div class="u-inline"><label class="label filter-bar__label u-margin-Hxxs" for="filter-after">Created between</label><pikaday id="filter-after" name="after" ng-class="\'input input--small filter-bar__pikaday\'" placeholder="Start date" aria-label="Created between: start date" allow-paste-date="true" date="filters.after" filter-data="{ after: (date | toDateTime) }"></pikaday><label class="label filter-bar__label u-margin-Hxxs" for="filter-before">&amp;</label><pikaday id="filter-before" name="before" ng-class="\'input input--small filter-bar__pikaday\'" placeholder="End date" aria-label="Created between: end date" date="filters.before" filter-data="{ before: (date | toDateTime:true) }"></pikaday></div>');
});

'use strict';

angular.module('gc.dateRangeFiltersDirective', [
  'gc.pikaday',
  'ngGcToDateTime',
  'gc.filterDataDirective',
  'ng-gc-date-range-filters-template.html'
]).directive('dateRangeFilters', function dateRangeFiltersDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'ng-gc-date-range-filters-template.html',
    scope: {
      filters: '='
    }
  };
});
})();