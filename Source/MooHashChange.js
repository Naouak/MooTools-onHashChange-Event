/*
---
description: Added the 'hashchange' event

license: MIT-style

authors:
- sdf1981cgn (https://mootools.lighthouseapp.com/users/71792)
- Greggory Hernandez

requires:
- core/1.2.4:Event

provides: []
*/
Element.Events.hashchange = {
    onAdd: function(){
        var hash = self.location.hash;

        var hashchange = function(){
            if (hash == self.location.hash) return;
            else hash = self.location.hash;

            var value = (hash.indexOf('#') == 0 ? hash.substr(1) : hash);
            window.fireEvent('hashchange', value);
            document.fireEvent('hashchange', value);
        };

        if ("onhashchange" in window){
            window.onhashchange = hashchange;
        } else {
            hashchange.periodical(50);
        }
    }
};
