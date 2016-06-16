ngScroll
============

AngularJS `ng-scroll` directive

Adds ng-scroll directive to bind on mouse wheel events

### Usage:


```
    <div class="scrollable-box ..." ng-scroll="calledOnMouseWhell()">
        ...
    </div>
```

### Updates:

- renamed to ngScroll
- removed $apply on every 'scroll' event, that was friggin slow
