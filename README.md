MooTools onHashChange Event
===========================

This is a simple script to add the onhashchange event to browsers that don't already support it.  This code comes entirely from here: https://mootools.lighthouseapp.com/projects/2706/tickets/778-add-hashchange-event#ticket-778-1.  I'm just packaging it up for distribution.

How to use
----------

Simply include the MooHashChange.js script and then you can set the event handler like this:

	window.addEvent('hashchange', function () { // do stuff });
