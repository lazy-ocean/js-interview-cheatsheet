# CSS

> CSS - Cascading Style Sheets

## Selectors priority

1. #id
2. .class
3. tag (p, article etc)

Otherwise by latest.

## `display` property

1. `inline`: displays as inline, height and width have no effect. aligned only horizontally, vertically is dependent on line-height. can have vertical margin and padding, though
2. `block`: blocks start on a new line and take the whole width
3. `contents`: parent element - container - disappears, children become the next level element in the DOM
4. `flex`: flexbox
5. `grid`: grid
6. `inline-block`: inline element but with height and width
7. `inline-flex`, `inline-grid`, `inline-table`: same here
8. `none`: element is removed and not even rendered by the DOM
9. `initial`: default value
10. `inherit`: inherits from parent element.

## Centering an element

1.

```
margin: 0 auto;
display: block;
width: n%;
```

2.

```
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
```

3.

```
display: grid;
place-content: center;
gap: 1ch; // for equal spacing if multiple elements
```

## Progressive enhancement and gracefull degradation

**Progressive enhancement** - start with the very basics (foundation) for every user-agent and slowly add enhancements for certain ones.
**Gracefull degradation** - do whatever you need and then adjust (degrade, simplify) it to the certain user-agents.
GD is the journey from complexity to simplicity, while PE is simplicity to complexity.

## `box-sizing: border-box`

By default, all elements has `box-sizing: content-box`: all sizes are based on content size.  
`border-box` takes padding and border into account, so height now is content height + vertical paddings + vertical borders width. Width is content width + horizontal paddings + horizontal borders width.

## `position`

- `static`: items displayed as usual, according to the parent properties or other elements around it.
- `fixed`: fixed to a certain point set c Does not get changed by scrolling
- `relative`: position relative to its original location. Rarely set with `right`, `left`, `top` and `bottom` properties but mostly used as an anchor for absolutely positioned elements.
- `absolute`: displayed relatively to parent relatively positioned element with set `right`, `left`, `top` and `bottom` properties. Is affected by the parent element position when its size or position is changed.
- `sticky` stays in place until other sticky element replaces it. Positioned relatively to the nearest parent block.

## CSS3, what's new

- media queries
- transitions, transformation
- flexbox
- pseudo elements
- opacity
- shadows, gradients
- advanced selectors
- filters
- types of colors (RGBA, HSL)
- animations (using `@keyframes`)
