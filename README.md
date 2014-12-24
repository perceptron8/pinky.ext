pinky
=====

Chrome extension making [The Settlers Online](http://www.thesettlersonline.com/) collectibles easy to find!

## What does it do?

It replaces...

![](http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/41b8238caac031c265efe08544a21ac4be91f534.png)
![](http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/7dc1e1f289646ba15aeef107efe7026ebb58e8b1.png)
![](http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/8257a3e50f6ae19db4aeb2c978949b2d81021a61.png)
![](http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/bd76cd8196c23aaf73139bc263002cf759afc1ce.png)
![](http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/db5c26a467c4f5dee9804c7c88417103515c326a.png)
![](http://static.cdn.ubi.com/0018/live/GFX_HASHED/building_lib/f237f6c7e3b6c6aac01ae7f51cd917bdeb6ddec2.png)
...

... with

![](magenta.png)

## How it works?

It intercepts some of requests made by your browser (see: [#Permissions](#Permissions)).
Or, by flash plugin running within your browser, to be specific.
If request's url matches one of known collectibles urls, it is redirected to something more... visible.
Check [JavaScript APIs](https://developer.chrome.com/extensions/api_index) for details.

## Where can I get it?

// TODO

Happy collecting! ;-)

## Permissions

Pinky *is not* greedy. It only needs to read and modify data from [static.cdn.ubi.com](http://static.cdn.ubi.com) site. No more, no less.

## Tips

Only if you really like it...

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1">
</form>
