# isJqueryVersionBad

If the Shopify functionality requires Jquery, use this. 

```javascript
if (isJqueryVersionBad){
    loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function () {
        jQuery191 = jQuery.noConflict(true);
        console.log("Jquery is loaded");
    })
} else {
    console.log("Jquery is there already");
}
```
