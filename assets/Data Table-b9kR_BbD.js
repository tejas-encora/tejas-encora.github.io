import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{M as i,P as s,C as a}from"./index-TYW5pund.js";import{D as p}from"./datatable.stories-fJ_nj-bl.js";import{useMDXComponents as o}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-f65NHSZ4.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-Uk8hDnuP.js";import"./index-ogXoivrg.js";import"./index-yyIE76pf.js";import"./index-PPLHz8o0.js";import"./vue.esm-bundler-CdyOBFpo.js";import"./IOTextField-fo7zAxId.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./VDataTable-Kzopx_Ds.js";import"./index-3WNw8ckj.js";import"./VTextField-6TVst4H5.js";import"./index-gO8QM6H2.js";function t(r){const n=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",pre:"pre",code:"code",h2:"h2"},o(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:p}),`
`,e.jsx(n.h1,{id:"data-table",children:"Data Table"}),`
`,e.jsx(n.p,{children:"The IODataTable* components are used for displaying tabular data. Features include sorting, searching, pagination, grouping, and row selection."}),`
`,e.jsxs(n.p,{children:["Reference: ",e.jsx(n.a,{href:"https://vuetifyjs.com/en/api/v-data-table/",target:"_blank",rel:"nofollow noopener noreferrer",children:"https://vuetifyjs.com/en/api/v-data-table/"})]}),`
`,e.jsx(n.p,{children:"These tables are working correctly in the app. Currently WIP for Storybook."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"To use"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`npm install vite-plugins-vuetify
`})}),`
`,e.jsx(n.p,{children:"In your 'vite.config.ts|js' file, add the following:"}),`
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
        defaultTheme: 'myCustomTheme',
        themes: {
            myCustomTheme: {
                dark: false,
                colors: {
                    background: '#FFFFFF',
                    surface: '#FFFFFF',
                    primary: '#6200EE',
                    'primary-darken-1': '#3700B3',
                    secondary: '#03DAC6',
                    'secondary-darken-1': '#018786',
                    error: '#B00020',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FB8C00'
                }
            }
        }
    }
})
createApp(App).use(vuetify).mount('#app')
`})}),`
`,e.jsx(s,{}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(a,{})]})}function M(r={}){const{wrapper:n}=Object.assign({},o(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,r)})):t(r)}export{M as default};
