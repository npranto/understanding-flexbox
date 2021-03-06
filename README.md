# understanding-flexbox
A guide to understanding flexbox in depth with practical examples

[Visual Guide](http://understanding-flexbox.surge.sh)

### Table of Contents
---
+ [Flexbox](https://github.com/npranto/understanding-flexbox#flexbox)
+ [Breaking Down Flexbox Model](https://github.com/npranto/understanding-flexbox#breaking-down-flexbox-model)
+ [Flex Container Properties](https://github.com/npranto/understanding-flexbox#flex-container-properties)
+ [Flex Item Properties](https://github.com/npranto/understanding-flexbox#flex-item-properties)
+ _Demos_
    + [navbar](https://github.com/npranto/understanding-flexbox/tree/master/demos/navbar)
    + [mobile-content-order](https://github.com/npranto/understanding-flexbox/tree/master/demos/mobile-content-reorder)

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

#### justify-content
+ a more enhanced version of text-align for all DOM elements to align elements in the main axis(horizontally)
+ `justify-content` property values:
    + [flex-start](http://understanding-flexbox.surge.sh/#justify-content-flex-start)
    + [flex-end](http://understanding-flexbox.surge.sh/#justify-content-flex-end)
    + [center](http://understanding-flexbox.surge.sh/#justify-content-center)
    + [space-between](http://understanding-flexbox.surge.sh/#justify-content-space-between)
    + [space-around](http://understanding-flexbox.surge.sh/#justify-content-space-around)

#### align-items
+ a more enhanced version of text-align for all DOM elements to align elements in the cross axis(vertically)
+ `align-items` property values:
    + [flex-start](http://understanding-flexbox.surge.sh/#align-items-flex-start)
    + [flex-end](http://understanding-flexbox.surge.sh/#align-items-flex-end)
    + [center](http://understanding-flexbox.surge.sh/#align-items-center)
    + [stretch](http://understanding-flexbox.surge.sh/#align-items-stretch)
    + [baseline](http://understanding-flexbox.surge.sh/#align-items-baseline)

#### align-content
+ controls how flex items are aligned in multi line flex containers
+ `align-content` property values:
    + [flex-start](http://understanding-flexbox.surge.sh/#align-content-flex-start)
    + [flex-end](http://understanding-flexbox.surge.sh/#align-content-flex-end)
    + [center](http://understanding-flexbox.surge.sh/#align-content-center)
    + [stretch](http://understanding-flexbox.surge.sh/#align-content-stretch)


### Flex Item Properties
#### order
+ controls the order of flex items to be displayed
+ default value is 0, but can take in both positive and negative integer values
+ works similar to z-index, order of content goes from lowest order integer to highest
+ `order` property values:    
    + [order: 0](http://understanding-flexbox.surge.sh/#order-0)    
    + [order: -1](http://understanding-flexbox.surge.sh/#order--1)
    + [order: 1](http://understanding-flexbox.surge.sh/#order-1)

#### flex-grow AND flex-shrink
+ controls the amount of space a flex item can take in, squeeze in based on available space
+ flex grow expands content to full extent of parent element horizontally
+ flex shrink shrinks content to its default size if there is available space or if there is no space, it shrinks content to fit within parent element
+ default value is 0, but it can also be any positive integer
+ `flex-grow` and `flex-shrink` property values:    
    + [flex-shrink: 0](http://understanding-flexbox.surge.sh/#flex-shrink-0)
    + [flex-shrink: 1](http://understanding-flexbox.surge.sh/#flex-shrink-1)
    + [flex-grow: 0](http://understanding-flexbox.surge.sh/#flex-grow-0)
    + [flex-grow: 1](http://understanding-flexbox.surge.sh/#flex-grow-1)

#### flex-basis
+ specifies an initial size of flex items, but it can altered with flex-grow and flex-shrink
+ default value is 'auto,' but it can also be any size attribute(px, em, % etc.)
+ `flex-basis` property values:    
    + [flex-basis: auto](http://understanding-flexbox.surge.sh/#flex-basis-auto)
    + [flex-basis: 50%](http://understanding-flexbox.surge.sh/#flex-basis-50-percentage)
    + [flex-basis: 100px](http://understanding-flexbox.surge.sh/#flex-basis-100-pixels)

#### flex
+ a shorthand for flex-shrink, flex-grow and flex-basis all together
+ an simple example could be `flex: 0 1 auto`, 0 is flex-grow, 1 is flex-shrink, and auto is flex-basis 
+ `flex`property values:
    + [flex: 0 1 150px](http://understanding-flexbox.surge.sh/#flex)

#### align-self
+ helps to align specific flex items to align differently compared to its siblings
+ `align-self` property values:
    + [flex-start](http://understanding-flexbox.surge.sh/#align-self-flex-start)
    + [flex-end](http://understanding-flexbox.surge.sh/#align-self-flex-end)
    + [center](http://understanding-flexbox.surge.sh/#align-self-center)
    + [baseline](http://understanding-flexbox.surge.sh/#align-self-baseline)    
    + [stretch](http://understanding-flexbox.surge.sh/#align-self-stretch)
    + [auto](http://understanding-flexbox.surge.sh/#align-self-auto)

#### auto-margin-alignment
+ helps with auto margin behavior for flex items
    + [default margin](http://understanding-flexbox.surge.sh/#auto-margin-alignment)
    + [margin-right: auto](http://understanding-flexbox.surge.sh/#auto-margin-alignment-margin-right-auto)
    + [margin-left: auto](http://understanding-flexbox.surge.sh/#auto-margin-alignment-margin-left-auto)
    + [margin-left: auto & margin-right: auto](http://understanding-flexbox.surge.sh/#auto-margin-alignment-margin-left-and-right-auto )
