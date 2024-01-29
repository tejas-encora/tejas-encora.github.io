import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as i,P as s,C as a}from"./index-XaFhIdfz.js";import{D as l}from"./datatable.stories-qe5TRpj-.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-xL50e7FO.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-Uk8hDnuP.js";import"./index-ogXoivrg.js";import"./index-yyIE76pf.js";import"./index-PPLHz8o0.js";import"./vue.esm-bundler-GE7kM0dE.js";import"./index-oqI7dZ_Q.js";import"./VSelect-d8Vm8kOq.js";import"./VTextField-ooEAPd97.js";import"./resizeObserver-mKcWZh6q.js";function t(r){const n=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",pre:"pre",code:"code",h2:"h2"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"data-table",children:"Data Table"}),`
`,e.jsx(n.p,{children:"The IoDataTable* components are used for displaying tabular data. Features include sorting, searching, pagination, grouping, and row selection."}),`
`,e.jsxs(n.p,{children:["Reference: ",e.jsx(n.a,{href:"https://vuetifyjs.com/en/api/v-data-table/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://vuetifyjs.com/en/api/v-data-table/"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"To Use"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm install vite-plugins-vuetify
`})}),`
`,e.jsx(n.p,{children:"Make sure you have SASS installed"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm install -D sass
`})}),`
`,e.jsx(n.p,{children:"In your 'vite.config.ts | js' file, add the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import vuetify from 'vite-plugin-vuetify'
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`plugins: [
    vue(),
    vuetify(),
]
`})}),`
`,e.jsx(n.p,{children:"In your 'main.js' add the following:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'\`

The theme property is currently being worked on. This is a sample for now.
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
            fa
        },
    },
    theme: {
        defaultTheme: 'ioVuetifyTheme',
        themes: {
            ioVuetifyTheme: {
                dark: false,
                colors: {
                    primary: 'var(--md-ref-palette-primary40)',
                    secondary: 'var(--md-ref-palette-secondary50)',
                    error: 'var(--md-ref-palette-error50)',
                    warning: 'var(--md-ref-palette-warning60)',
                    success: 'var(--md-ref-palette-success50)',
                    info: 'var(--md-ref-palette-informational50)',
                    background: 'var(--md-ref-palette-neutral95)',
                    surface: 'var(--md-ref-palette-neutral98)',
                }
            }
        }
    }
})
createApp(App).use(vuetify).mount('#app')
`})}),`
`,e.jsx(n.p,{children:"You also need to add this to your vite.config.js. This is due to the Lato fonts not currently loading in dist. IN PROGRESS"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
`})}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{})]})}function S(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{S as default};
