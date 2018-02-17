# Spacious

> A set of functional CSS utilities for all your spacing needs. 

Padding and margin utilities formed on a ratio of your base font size. Classes follow a simple pattern:

> `{viewport}-{spacing-direction}{spacing-amount}`

## Usage

For example:

```html
<p class='ml2 sm-ml3' />
```

Translates to `margin-left-2` and `small-margin-left-3`. 

## Explanation

Spacings start at a 1/4 of base font size (1 spacing amount) and go all the way up to 16 times base font size (7 spacing amount).

With a base font size of 16, this would give the above paragraph a margin left property value of 8px below the mobile small breakpoint, and a margin left property value of 16px above.
