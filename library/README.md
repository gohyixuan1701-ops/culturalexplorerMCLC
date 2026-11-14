# MCLC library website

This is the bilingual MCLC catalogue interface. Serve `dist/` with a static web server; for example, run `python -m http.server 8765 --directory dist` from this directory. No build or package installation is required.

The catalogue supports search, genre/collection/edition filters, sorting, pagination, grid/list views, author sources, book details, and a bookshelf stored in the visitor's browser. English and Chinese interface copy and the existing MCLC seal, initials, colors, and Cultural Explorer credit are retained.

## Visual system

`dist/styles.css` defines the paper, forest green, sage, and terracotta palette, an 8px spacing scale, consistent control shapes, and responsive layout rules. Body text and primary controls use 18px at the default browser font size; supporting text is at least 16px. Text uses relative units and remains zoomable. Book titles are shown in full, and author cards grow for bilingual content. Feature slides continue to use the existing maximum-height measurement across both languages.

The catalogue changes to two columns on smaller desktops and tablets, then one column at 600px and below. Filters collapse at 900px and below. Search, sorting, pagination, dialogs, and navigation wrap to accommodate narrow screens, with at least 44px targets for compact controls and 48px for primary controls. Keyboard focus and reduced-motion preferences are supported.

## Content and scope

The book data, author profiles, covers, and favicon were restored from the existing MCLC Site source at commit `dda10f1` (the library application JavaScript and original markup matched that source). These are existing catalogue assets, not newly authored content. Book covers remain the property of their rights holders.

The `dist/gallery/` files are unchanged. This branch's existing 3D dependencies are outside this website design change; retain the gallery's normal deployment assets when assembling a complete deployment.

## Verification

Run `node check.cjs` here to check catalogue logic and bilingual features. Syntax can be checked with `node --check dist/app.js` and `node --check dist/author-profiles.js`.
