## Steps to reproduce

```
PS> npx create-next-app@latest
PS> npm install react@18.3.1
PS> npm install react-dom@18.3.1
PS> npm install @telus-uds/components-web @telus-uds/palette-allium @telus-uds/theme-allium
# Modify `layout.js` and `page.js` to use the code in this repo.
PS> npm run dev
# As we type "510" in the autocomplete text field, "Unexpected text node: . A text node cannot be a child of a <View>.". In our actual web app, the panel with the search results keeps disappearing making this component unusable.
```
