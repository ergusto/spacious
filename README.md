# Spacious

> A set of functional CSS utilities for all your spacing needs. 

Padding, margin, width and max-width utilities formed on a ratio of your base font size. 

## Padding and Margin

Padding and margin classes follow a simple pattern:

> `{viewport}-{p or m}{spacing-direction}{spacing-amount}`

### Usage

For example:

```html
<p class='ml2 sm-ml3' />
```

Translates to `margin-left-2` and `small-margin-left-3`. 

## Widths and Max-Widths

Widths and max widths work in a similar fashion, although come in relative and percentage based units:

```html
<div class='w-2 w-40' />
```

Translates to `width-2` and `width-40` (40%).

## Explanation

Spacings start at a 1/4 of base font size (1 spacing amount) and go all the way up to 16 times base font size (7 spacing amount).

With a base font size of 16, this would give the above paragraph a margin left property value of 8px below the mobile small breakpoint, and a margin left property value of 16px above.
