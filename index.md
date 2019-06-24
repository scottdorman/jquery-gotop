### Usage
1. Download the minified version of the plugin and include it after jQuery. 
1. Add the following script code
```
<script>
   $(function () {
      $('#goTop').goTop();
   });
</script>
```

### Options

Name | Description | Type | Default
-----| ------------| -----| -------
appear | | Integer | 200
scrolltime | | Integer | 800
src | | String | glyphicon glyphicon-chevron-up
width | | Integer | 45
place | The location where the arrow will be shown. Valid values are "bottom-right", "bottom-left", "top-right", "top-left" | String | "bottom-right"
fadein | | Integer | 500
fadeout | | Integer | 500
opacity | | Decimal | 0.5
marginX | | Integer | 2
marginY| | Integer | 2
