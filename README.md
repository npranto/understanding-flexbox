# understanding-flexbox
A guide to understanding flexbox in depth with practical examples

[Visual Guide](http://understanding-flexbox.surge.sh)

### Flexbox
+ a recently new CSS standard that simplifies adding desired layouts to page content
+ provides [an efficient way to layout, align, and distributed spacing among elements in the DOM](https://goo.gl/XiuagG)

### Breaking Down Flexbox Model
+ **_Flex Container:_** The parent container to which you set flexible display to.
+ **_Flex Item(s):_** The child elements that are residing inside the parent flexible container.

### Flex Container Properties
#### flex-direction
+ controls the direction of flex container items 
+ `flex-direction` property values:
    + [row](http://understanding-flexbox.surge.sh/#flex-direction-row)
    + [column](http://understanding-flexbox.surge.sh/#flex-direction-column)
    + [row-reverse](http://understanding-flexbox.surge.sh/#flex-direction-row-reverse)
    + [column-reverse](http://understanding-flexbox.surge.sh/#flex-direction-column-reverse)

#### flex-wrap
+ controls the flow of flex items and whether or not they should be forced into a single line or wrapped in multiple lines (despite the number of flex items)
+ `flex-wrap` property values:
    + [wrap](http://understanding-flexbox.surge.sh/#flex-wrap-wrap)
    + [no-wrap](http://understanding-flexbox.surge.sh/#flex-wrap-no-wrap)
    + [wrap-reverse](http://understanding-flexbox.surge.sh/#flex-wrap-wrap-reverse)

#### flex-flow
+ a shortcut to using both flex-direction and flex-wrap values together(i.e., `flex-flow: row wrap`)
+ `flex-flow` property values:
    + [row nowrap](http://understanding-flexbox.surge.sh/#flex-flow-row-nowrap)
    + [column wrap](http://understanding-flexbox.surge.sh/#flex-flow-column-wrap)
    + [column nowrap](http://understanding-flexbox.surge.sh/#flex-flow-column-nowrap)





