(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{2553:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/revoke",function(){return i(3408)}])},1107:function(e,t,i){"use strict";i.d(t,{Z:function(){return l}});var s=i(5893),r=i(5675),c=i.n(r),n=i(710),a=i.n(n);let d={Back:{src:"/back_arrow.svg",reverse:!1},Next:{src:"/arrow_right.svg",reverse:!1},"Mint & Deploy":{src:"/arrow_right.svg",reverse:!1},Review:{src:"/arrow_right.svg",reverse:!1},Upgrade:{src:"/arrow_right.svg",reverse:!1},Confirm:{src:"/icon_check.svg",reverse:!1},"Revoke Selected NFT":{src:"/button_revoke_nft.svg",reverse:!0},"Cancel this File":{src:"/cancel_upload_button.svg",reverse:!0},Cancel:{src:"/cancel_upload_button.svg",reverse:!0}};function l(e){let{title:t,clickFunc:i}=e,r=d[t];return(0,s.jsxs)("button",{className:a().button_type+" "+(r.reverse?a().red:a().white),onClick:()=>{i()},children:[!r.reverse&&t,(0,s.jsx)(c(),{src:r.src,alt:r.src,width:24,height:24,priority:!0}),r.reverse&&t]})}},7839:function(e,t,i){"use strict";i.d(t,{p:function(){return n}});var s=i(5893),r=i(369),c=i.n(r);let n=e=>{let{index:t,title:i,description:r,step:n}=e,a=c().card_div;return n===t?a=c().card_div+" "+c().card_div_active:n>t&&(a=c().card_div+" "+c().card_div_active_done),(0,s.jsxs)("div",{className:a,children:[(0,s.jsxs)("div",{className:c().title,children:[(0,s.jsx)("div",{children:t}),i]}),(0,s.jsx)("div",{className:c().description,children:r})]})}},3408:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return h}});var s=i(5893),r=i(7294),c=i(5675),n=i.n(c),a=i(465),d=i.n(a),l=i(7839),_=i(3229),o=i(961),v=i(1107);let u=[{index:1,title:"Select",description:"Choose the NFT that you want to revoke."},{index:2,title:"Revoke",description:"Revoke your NFT."}];function h(){let[e,t]=(0,r.useState)(1),[i,c]=(0,r.useState)(""),[a,h]=(0,r.useState)(!1),[p,x]=(0,r.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"page_title_div",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(n(),{src:"/icon_mint.svg",alt:"icon_mint",width:36.7,height:36.7,priority:!0}),"Revoke NFT"]}),(0,s.jsxs)("div",{className:"div_button_wrapper",children:[e>1&&(0,s.jsx)(v.Z,{title:"Back",clickFunc:()=>t(e-1)}),1===e&&a&&(0,s.jsx)(v.Z,{title:"Next",clickFunc:()=>t(e+1)}),2===e&&(0,s.jsx)(v.Z,{title:"Reclaim Selected NFT",clickFunc:()=>{x(!0)}})]})]}),(0,s.jsxs)("div",{className:"layer1_div",children:[(0,s.jsx)("div",{className:"div_left",children:u.map(t=>(0,s.jsx)(l.p,{...t,step:e},t.index))}),(0,s.jsx)("div",{className:"div_right",children:(0,s.jsxs)("div",{className:d().div_step1,children:[1===e&&(0,s.jsxs)("div",{className:"div_search",children:[(0,s.jsx)(n(),{src:"/search_icon.svg",alt:"search_icon",width:24,height:24,priority:!0}),(0,s.jsx)("input",{style:{width:"100%"},type:"text",value:i,onChange:e=>c(e.target.value)})]}),(0,s.jsx)("div",{className:"div_result",children:(0,s.jsxs)("div",{className:"div_item "+(a?"checked":""),onClick:()=>{1===e&&h(!a)},children:[(0,s.jsx)(n(),{src:"/Niseko-trail-map.jpg",alt:"result_item",fill:!0,priority:!0,className:"img_item"}),(0,s.jsxs)("div",{className:"div_footer",children:[(0,s.jsx)("div",{className:"div_title",children:"Title.jpg"}),(0,s.jsx)(_.Z,{checked:a,onChange:e=>{},disabled:e>1})]})]})})]})})]})]}),(0,s.jsx)(o.Z,{title:"Successfully Revoke",footer:null,centered:!0,maskClosable:!1,className:"popup_modal popup_modal_success",open:p,onOk:()=>{x(!1)},onCancel:()=>{x(!1)},children:(0,s.jsx)("div",{className:"div_button_wrapper mt-24",children:(0,s.jsx)(v.Z,{title:"Confirm",clickFunc:()=>{x(!1)}})})})]})}},710:function(e){e.exports={button_type:"Button_button_type__ytaw2",white:"Button_white__KmZLB",red:"Button_red__snEEU"}},369:function(e){e.exports={card_div:"StepCard_card_div__V30kF",card_div_active:"StepCard_card_div_active__2LYZk",card_div_active_done:"StepCard_card_div_active_done__9a4sC",title:"StepCard_title__J3E2v",description:"StepCard_description__IVFIJ"}},465:function(){}},function(e){e.O(0,[93,774,888,179],function(){return e(e.s=2553)}),_N_E=e.O()}]);