# Spacious

> A set of functional CSS utilities for all your spacing needs. 

Padding, margin, width and max-width utilities formed on a ratio of your base font size. 

## Padding and Margin

The default spacing scale for padding and margin is based on powers of two and starts at .25rem (1), ending at 16rem (7).

Classes follow a simple pattern:

> `{viewport}-{p or m}{spacing-direction}{spacing-amount}`

### Example 

```html
<p class='ml1 sm-ml3' />
```

Translates to `margin-left-1` (sets margin-left property to .25rem) and `small-margin-left-3` (sets margin-left property above the small breakpoint to 1rem). 

## Widths and Max-Widths

Widths and max widths work in a similar fashion, although come in both relative and percentage based units. 

These classes follow a simple pattern:

> `{viewport}-{w or mw}-{spacing-amount}` 

### Relative

The relative spacing scale for widths and max widths is also based on powers of two, but starts at 1rem (1) and ends at 64rem (8).

### Percentage

Percentage based widths include a scale from 0-100 in multiples of 10, as well as the additional useful widths of 25%, 33%, 66% and 75%. 

### Example 

```html
<div class='w-4 sm-mw-40 ' />
```

Translates to `width-4` (sets width to 8rem) and `small-max-width-40` (set width above the small breakpoint to 40%).
