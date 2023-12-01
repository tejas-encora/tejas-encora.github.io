import{j as e}from"./jsx-runtime-ffb262ed.js";import{M as i,P as s,C as a}from"./index-4aaac43b.js";import{D as c}from"./datatable.stories-fd6771e2.js";import{u as o}from"./index-a1cf9e47.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-b673ebae.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-c879cb99.js";import"./index-d37d4223.js";import"./index-b67253cd.js";import"./index-356e4a49.js";import"./vue.esm-bundler-091b3824.js";import"./IOTextField-d8ec63ae.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VDataTable-c03d8838.js";import"./index-8a999a19.js";function t(n){const r=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",h2:"h2"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(r.h1,{id:"data-table",children:"Data Table"}),`
`,e.jsx(r.p,{children:"The IODataTable* components are used for displaying tabular data. Features include sorting, searching, pagination, grouping, and row selection."}),`
`,e.jsx(r.p,{children:"The search field works correctly in the app. Currently WIP for Storybook."}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"To use"}),":"]}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"npm install vite-plugins-vuetify"})}),`
`,e.jsx(r.p,{children:"In your 'vite.config.ts' file, add the following:"}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"import vuetify from 'vite-plugin-vuetify'"})}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"plugins: [     vue(),     vuetify(),   ],   "})}),`
`,e.jsxs(r.p,{children:[`In your 'main.js' add the following:
`,e.jsx(r.code,{children:" import 'vuetify/styles' import { createVuetify } from 'vuetify' import * as components from 'vuetify/components' import * as directives from 'vuetify/directives' import { aliases, fa } from 'vuetify/iconsets/fa'"})]}),`
`,e.jsxs(r.p,{children:[`The theme property is currently being worked on. This is a sample for now.
`,e.jsx(r.code,{children:"const vuetify = createVuetify({     components,     directives,     icons: {         defaultSet: 'fa',         aliases,         sets: {             fa         },     },     theme: {         defaultTheme: 'myCustomTheme',         themes: {             myCustomTheme: {                 dark: false,                 colors: {                     background: '#FFFFFF',                     surface: '#FFFFFF',                     primary: '#6200EE',                     'primary-darken-1': '#3700B3',                     secondary: '#03DAC6',                     'secondary-darken-1': '#018786',                     error: '#B00020',                     info: '#2196F3',                     success: '#4CAF50',                     warning: '#FB8C00'                 }             }         }     } })"})]}),`
`,e.jsx(r.p,{children:e.jsx(r.code,{children:"createApp(App).use(vuetify).mount('#app')"})}),`
`,e.jsx(s,{}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{})]})}function D(n={}){const{wrapper:r}=Object.assign({},o(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(t,n)})):t(n)}export{D as default};
//# sourceMappingURL=Data Table-601ecb9c.js.map
