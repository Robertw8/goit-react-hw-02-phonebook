import{u as l,j as e,l as c,e as d,r as m}from"./index-0b790e27.js";import{S as u,a as r,b as p,c as g,d as h,F as x,e as j,u as y}from"./LoginForm.styled-d5a861ad.js";import{u as S,a as f}from"./Background-e0a2fa42.js";const F=()=>{const s=l(),{isLoading:a}=S(),t=async({email:n,password:o})=>{try{await s(c({email:n,password:o}))}catch(i){console.warn("Login failed: ",i.message)}};return e.jsxs(u,{name:"basic",onFinish:t,children:[e.jsx(r,{name:"email",rules:[{required:!0,message:"Please enter email!"}],children:e.jsx(p,{placeholder:"Enter email"})}),e.jsx(r,{name:"password",rules:[{required:!0,message:"Please enter password!"}],children:e.jsx(g,{placeholder:"Enter password"})}),e.jsx(h,{type:"primary",htmlType:"submit",loading:a,children:"Login"}),e.jsxs(x,{children:["Don't have an account yet? ",e.jsx(j,{to:"/register",children:"Sign up"})]})]})},b=()=>{const s=d(),a=y();return m.useEffect(()=>{a&&s("/")},[a,s]),e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(F,{})]})};export{b as default};
