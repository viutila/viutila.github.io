(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{7537:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mint",function(){return t(9533)}])},1107:function(e,i,t){"use strict";t.d(i,{Z:function(){return d}});var s=t(5893),n=t(5675),r=t.n(n),l=t(710),c=t.n(l);let a={Back:{src:"/back_arrow.svg",reverse:!1},Next:{src:"/arrow_right.svg",reverse:!1},"Mint & Deploy":{src:"/arrow_right.svg",reverse:!1},Review:{src:"/arrow_right.svg",reverse:!1},Upgrade:{src:"/arrow_right.svg",reverse:!1},Confirm:{src:"/icon_check.svg",reverse:!1},"Revoke Selected NFT":{src:"/button_revoke_nft.svg",reverse:!0},"Cancel this File":{src:"/cancel_upload_button.svg",reverse:!0},Cancel:{src:"/cancel_upload_button.svg",reverse:!0}};function d(e){let{title:i,clickFunc:t}=e,n=a[i];return(0,s.jsxs)("button",{className:c().button_type+" "+(n.reverse?c().red:c().white),onClick:()=>{t()},children:[!n.reverse&&i,(0,s.jsx)(r(),{src:n.src,alt:n.src,width:24,height:24,priority:!0}),n.reverse&&i]})}},5926:function(e,i,t){"use strict";t.d(i,{Z:function(){return _}});var s=t(5893),n=t(7294),r=t(3613),l=t.n(r),c=t(3229),a=t(5675),d=t.n(a);function _(e){let{title:i,children:t,step:r}=e,[a,_]=(0,n.useState)(!1);return(0,s.jsxs)("div",{className:l().div_feature_card,children:[(0,s.jsxs)("div",{className:l().div_header,children:[(0,s.jsx)("div",{className:l().div_title,children:(0,s.jsx)(c.Z,{onChange:e=>{console.log("checked = ".concat(e.target.checked))},disabled:3===r,children:i})}),(0,s.jsx)(d(),{src:a?"/header_dash_icon.svg":"/header_arrow_down_icon.svg",alt:"control_icon",width:24,height:24,priority:!0,className:l().control_icon,onClick:()=>{_(!a)}})]}),a&&t]})}},4161:function(e,i,t){"use strict";t.d(i,{E:function(){return a}});var s=t(5893),n=t(5675),r=t.n(n),l=t(7636),c=t.n(l);let a=e=>{let{unitNum:i,value:t,setValue:n,maxValue:l,minValue:a,disabled:d}=e;return(0,s.jsxs)("div",{className:c().div_plus_minus,children:[!d&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:c().min,onClick:()=>n(a),children:"Min"}),(0,s.jsxs)("div",{className:c().minus_multi,onClick:()=>{~~t-i>=a&&n(~~t-i)},children:[(0,s.jsx)(r(),{src:"/icon_minus.svg",alt:"icon_minus",width:24,height:24,priority:!0,className:c().control_icon}),i]})]}),(0,s.jsxs)("div",{className:c().div_input,children:[!d&&(0,s.jsx)(r(),{src:"/icon_minus.svg",alt:"icon_minus",width:24,height:24,priority:!0,className:c().control_icon,onClick:()=>{~~t-1>=a&&n(~~t-1)}}),(0,s.jsx)("input",{type:"text",value:t,onChange:e=>{let i=e.target.value;console.log(i),!isNaN(~~i)&&~~i>=a&&~~i<=l&&n(~~i),""===i&&n(a)},disabled:d}),!d&&(0,s.jsx)(r(),{src:"/icon_plus.svg",alt:"icon_plus",width:24,height:24,priority:!0,className:c().control_icon,onClick:()=>{~~t<l&&n(~~t+1)}})]}),!d&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:c().plus_multi,onClick:()=>{~~t+i<=l&&n(~~t+i)},children:[(0,s.jsx)(r(),{src:"/icon_plus.svg",alt:"icon_plus",width:24,height:24,priority:!0,className:c().control_icon}),i]}),(0,s.jsx)("div",{className:c().max,onClick:()=>n(l),children:"Max"})]})]})}},290:function(e,i,t){"use strict";t.d(i,{Z:function(){return d}});var s=t(5893);t(7294);var n=t(5675),r=t.n(n),l=t(5883),c=t.n(l),a=t(2269);function d(e){let{checkValue:i,setCheck:t,children:n,title:l,icon:d,checkDisabled:_}=e;return(0,s.jsxs)("div",{className:c().div_setting_card,children:[(0,s.jsxs)("div",{className:c().div_header,children:[(0,s.jsxs)("div",{className:c().div_title,children:[(0,s.jsx)(r(),{src:d,alt:d,width:20,height:20,priority:!0}),l]}),t&&(0,s.jsx)(a.Z,{size:"small",defaultChecked:i,onChange:e=>{t(e)},disabled:_})]}),n]})}},7839:function(e,i,t){"use strict";t.d(i,{p:function(){return l}});var s=t(5893),n=t(369),r=t.n(n);let l=e=>{let{index:i,title:t,description:n,step:l}=e,c=r().card_div;return l===i?c=r().card_div+" "+r().card_div_active:l>i&&(c=r().card_div+" "+r().card_div_active_done),(0,s.jsxs)("div",{className:c,children:[(0,s.jsxs)("div",{className:r().title,children:[(0,s.jsx)("div",{children:i}),t]}),(0,s.jsx)("div",{className:r().description,children:n})]})}},9533:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return g}});var s=t(5893),n=t(7294),r=t(5675),l=t.n(r),c=t(5868),a=t.n(c),d=t(4161),_=t(7839),o=t(3359),u=t(57),v=t(961),h=t(1107),p=t(5926),x=t(290);let m=["JPG","PNG","SVG","GIF"],j=[{index:1,title:"Upload",description:"Upload your NFT picture. We support jpg, png, svg, gif."},{index:2,title:"Edit",description:"Edit your NFT features."},{index:3,title:"Deploy",description:"Edit your NFT features"}];function g(){let[e,i]=(0,n.useState)(1),[t,r]=(0,n.useState)(null),[c,g]=(0,n.useState)(""),[f,b]=(0,n.useState)(""),[w,y]=(0,n.useState)(!1),[C,k]=(0,n.useState)(!1),[M,F]=(0,n.useState)(""),[S,T]=(0,n.useState)("1"),[Z,V]=(0,n.useState)(1),[P,I]=(0,n.useState)(""),[E,D]=(0,n.useState)("1"),[B,O]=(0,n.useState)("1"),[R,L]=(0,n.useState)([{trait:"",value:""}]),[Y,A]=(0,n.useState)(!1),G=e=>{t||(r(e),console.log(e),g(e.name))},U=()=>{r(null)},q=(e,i)=>{let t=[...R];t[e]=i,L(t)},J=e=>{let i=[...R];i.splice(e,1),console.log(i,e),L(i)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"page_title_div",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(l(),{src:"/icon_mint.svg",alt:"icon_mint",width:36.7,height:36.7,priority:!0}),"Minting NFT"]}),t&&(0,s.jsxs)("div",{className:"div_button_wrapper",children:[1===e&&(0,s.jsx)(h.Z,{title:"Cancel this File",clickFunc:U}),e>1&&(0,s.jsx)(h.Z,{title:"Back",clickFunc:()=>i(e-1)}),e<3&&(0,s.jsx)(h.Z,{title:"Next",clickFunc:()=>i(e+1)}),3===e&&(0,s.jsx)(h.Z,{title:"Mint & Deploy",clickFunc:()=>A(!0)})]})]}),(0,s.jsxs)("div",{className:"layer1_div",children:[(0,s.jsx)("div",{className:"div_left",children:j.map(i=>(0,s.jsx)(_.p,{...i,step:e},i.index))}),(0,s.jsxs)("div",{className:"div_right",children:[(0,s.jsx)(o.b,{handleChange:G,name:"file",types:m,multiple:!1,disabled:t,hoverTitle:" ",children:(0,s.jsx)(N,{file:t,name:c,description:f,setName:g,setDescription:b,step:e})}),e>=2&&(0,s.jsxs)("div",{className:a().div_step2,children:[(0,s.jsxs)(x.Z,{title:"Soulbound",checkValue:w,setCheck:y,checkDisabled:3===e,icon:"/Soulbound.svg",children:[(0,s.jsxs)("div",{className:a().setting_card_description,children:["In TOP, the soulbound token can only be revoked by its original owner. For more information, please refer to the section on ",(0,s.jsx)("span",{children:"SBT in TOP"}),"."]}),w&&(0,s.jsxs)("div",{className:a().soulbound_receiver,children:["Receiver",(0,s.jsx)("input",{type:"text",placeholder:3===e?"":"Enter the address of the receiver",value:M,onChange:e=>F(e.target.value),disabled:3===e}),(0,s.jsx)("p",{children:"*The receiver will be granted to the wallet you used for minting."})]})]}),!w&&(0,s.jsx)(x.Z,{title:"Batch Mint",checkValue:C,setCheck:k,checkDisabled:3===e,icon:"/batch_mint.svg",children:C&&(0,s.jsxs)("div",{className:a().div_batch_mint,style:{marginTop:"15px"},children:[(0,s.jsx)(d.E,{unitNum:50,value:S,setValue:T,maxValue:1e3,minValue:1,disabled:3===e}),(0,s.jsx)("p",{style:{marginTop:"8px"},children:"*Mint limit: 10,000"}),(0,s.jsx)("p",{children:"*If you need to mint more than 10,000 NFTs, please contact our customer service."})]})}),(0,s.jsxs)(x.Z,{title:"NFT Contract Features",checkValue:!1,setCheck:null,checkDisabled:!1,icon:"/NftContractFeatures.svg",children:[(0,s.jsx)(p.Z,{title:"Voucher",step:e,children:(0,s.jsxs)("div",{className:a().div_voucher,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:a().div_title,children:"Voucher Icon"}),(0,s.jsxs)(u.ZP.Group,{onChange:e=>{console.log("radio checked",e.target.value),V(e.target.value)},value:Z,disabled:3===e,children:[(0,s.jsx)(u.ZP,{value:1,children:(0,s.jsx)(l(),{src:"/voucher/voucher_icon_1.svg",alt:"voucher_icon_1",width:24,height:24,priority:!0,className:a().svg001})}),(0,s.jsx)(u.ZP,{value:2,children:(0,s.jsx)(l(),{src:"/voucher/voucher_icon_2.svg",alt:"voucher_icon_2",width:24,height:24,priority:!0})}),(0,s.jsx)(u.ZP,{value:3,children:(0,s.jsx)(l(),{src:"/voucher/voucher_icon_3.svg",alt:"voucher_icon_3",width:24,height:24,priority:!0})}),(0,s.jsx)(u.ZP,{value:4,children:(0,s.jsx)(l(),{src:"/voucher/voucher_icon_4.svg",alt:"voucher_icon_4",width:24,height:24,priority:!0})})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:a().div_title,children:"Voucher Name"}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{style:{width:"100%"},type:"text",value:P,onChange:e=>I(e.target.value),placeholder:3===e?"":"Enter voucher name",disabled:3===e})}),(0,s.jsx)("div",{className:a().red_hint,children:"*Please name this voucher."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:a().div_title,children:"Redemption Limit"}),(0,s.jsx)(d.E,{unitNum:10,value:E,setValue:D,maxValue:100,minValue:1,disabled:3===e}),(0,s.jsx)("div",{className:a().red_hint,children:"*The max number is 100."})]})]})}),(0,s.jsx)(p.Z,{title:"Loyalty",step:e,children:(0,s.jsxs)("div",{style:{marginTop:"16px"},children:[(0,s.jsx)(d.E,{unitNum:5,value:B,setValue:O,maxValue:100,minValue:1,disabled:3===e}),(0,s.jsx)("div",{className:a().white_hint,children:"*Loyalty range: 0~100%"})]})}),(0,s.jsx)(p.Z,{title:"Attribute",step:e,children:(0,s.jsxs)("div",{className:a().div_attribute,children:[R.map((i,t)=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:a().div_title,children:[R.length>1&&3!==e&&(0,s.jsx)(l(),{src:"/icon_minus.svg",alt:"icon_minus",width:24,height:24,priority:!0,style:{cursor:"pointer"},onClick:()=>{J(t)}}),"Attribute ",t+1]}),(0,s.jsxs)("div",{className:a().div_input,children:[(0,s.jsx)("input",{style:{width:"100%"},type:"text",value:i.trait,onChange:e=>{let i={...R[t]};i.trait=e.target.value,q(t,i)},placeholder:3===e?"":"Trait",disabled:3===e}),(0,s.jsx)("input",{style:{width:"100px"},type:"text",value:i.value,onChange:e=>{let i={...R[t]};i.value=e.target.value,q(t,i)},placeholder:3===e?"":"Value",disabled:3===e})]})]},t)),(0,s.jsx)("div",{className:a().red_hint,children:"*The empty trait & value will be ignore when you mint the NFT."}),(0,s.jsx)("div",{className:a().button_add_attribute,onClick:()=>{if(3===e)return;let i=[...R];10!==i.length&&(i.push({trait:"",value:""}),L(i))},children:"Add Attribute"}),(0,s.jsx)("div",{className:a().white_hint,children:"*If you need to add more than 10 attributes, please contact our customer service."})]})}),(0,s.jsx)(p.Z,{title:"Upgradable",step:e,children:(0,s.jsxs)("div",{className:a().div_upgradable,children:[(0,s.jsx)("div",{className:a().div_nav,children:"Default"}),(0,s.jsx)("div",{className:a().div_content,children:"The editorship will be granted to the wallet you used for minting."})]})})]})]})]})]})]}),(0,s.jsxs)(v.Z,{title:"Please Connect",footer:null,centered:!0,maskClosable:!1,className:"popup_modal",open:!1,onOk:()=>{A(!1)},onCancel:()=>{A(!1)},children:[(0,s.jsx)("p",{children:"To continue, please connect your wallet."}),(0,s.jsxs)("p",{style:{marginTop:"20px",color:"#D49C50"},children:[(0,s.jsx)(l(),{src:"/connect_icon.svg",alt:"connect_icon",width:12,height:12,priority:!0,style:{marginRight:"6px"}}),"Connect Wallet"]})]}),(0,s.jsx)(v.Z,{title:"Review the Transaction on Your Wallet",footer:null,centered:!0,maskClosable:!1,className:"popup_modal",open:!1,onOk:()=>{A(!1)},onCancel:()=>{A(!1)},children:(0,s.jsxs)("div",{className:"div_button_wrapper mt-24",children:[(0,s.jsx)(h.Z,{title:"Back",clickFunc:()=>A(!1)}),(0,s.jsx)(h.Z,{title:"Review",clickFunc:()=>A(!1)})]})}),(0,s.jsx)(v.Z,{title:"Successfully Minted",footer:null,centered:!0,maskClosable:!1,className:"popup_modal popup_modal_success",open:Y,onOk:()=>{A(!1)},onCancel:()=>{A(!1)},children:(0,s.jsx)("div",{className:"div_button_wrapper mt-24",children:(0,s.jsx)(h.Z,{title:"Confirm",clickFunc:()=>A(!1)})})})]})}function N(e){let{file:i,name:t,description:n,setName:r,setDescription:c,step:d}=e;return i?(0,s.jsxs)("div",{className:a().div_drop_file_done,children:[(0,s.jsx)("div",{className:a().div_preview_file,children:(0,s.jsx)(l(),{src:URL.createObjectURL(i),alt:"preview_file",fill:!0,priority:!0,className:a().preview_file})}),(0,s.jsxs)("div",{className:"div_info",children:[(0,s.jsxs)("div",{children:["NFT Name",(0,s.jsx)(l(),{src:"/edit_pen.svg",alt:"edit_pen",width:14.5,height:14.5,priority:!0})]}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{type:"text",value:t,onChange:e=>r(e.target.value),disabled:3===d})})]}),(0,s.jsxs)("div",{className:"div_info",children:[(0,s.jsxs)("div",{children:["NFT Description",(0,s.jsx)(l(),{src:"/edit_pen.svg",alt:"edit_pen",width:14.5,height:14.5,priority:!0})]}),(0,s.jsx)("div",{children:(0,s.jsx)("input",{type:"text",value:n,placeholder:3===d?"":"The description of the NFT.",onChange:e=>c(e.target.value),disabled:3===d})})]})]}):(0,s.jsxs)("div",{className:a().div_drop_file_here,children:["Drop your file here or",(0,s.jsx)(l(),{src:"/upload_button.svg",alt:"upload_button",width:49,height:49,priority:!0})]})}},710:function(e){e.exports={button_type:"Button_button_type__ytaw2",white:"Button_white__KmZLB",red:"Button_red__snEEU"}},3613:function(e){e.exports={div_feature_card:"FeatureCard_div_feature_card__5Iyg5",div_header:"FeatureCard_div_header__YZo_K",div_title:"FeatureCard_div_title__jg_iZ",control_icon:"FeatureCard_control_icon__o4N_2"}},7636:function(e){e.exports={div_plus_minus:"PlusMinusInput_div_plus_minus__AAqVd",min:"PlusMinusInput_min__aeZRj",max:"PlusMinusInput_max__3HVOM",minus_multi:"PlusMinusInput_minus_multi__QHZQ2",plus_multi:"PlusMinusInput_plus_multi__Nuh2l",div_input:"PlusMinusInput_div_input__4BVDB"}},5883:function(e){e.exports={div_setting_card:"SettingCard_div_setting_card__IhptY",div_header:"SettingCard_div_header__be8qS",div_title:"SettingCard_div_title__6LIyq",div_description:"SettingCard_div_description___nDwT"}},369:function(e){e.exports={card_div:"StepCard_card_div__V30kF",card_div_active:"StepCard_card_div_active__2LYZk",card_div_active_done:"StepCard_card_div_active_done__9a4sC",title:"StepCard_title__J3E2v",description:"StepCard_description__IVFIJ"}},5868:function(e){e.exports={div_drop_file_here:"Mint_div_drop_file_here__JKVo0",div_drop_file_done:"Mint_div_drop_file_done__NbYrx",div_preview_file:"Mint_div_preview_file__tS6c4",preview_file:"Mint_preview_file__00aQv",div_step2:"Mint_div_step2__c41TG",setting_card_description:"Mint_setting_card_description__fTeCo",div_batch_mint:"Mint_div_batch_mint__ql9Yb",soulbound_receiver:"Mint_soulbound_receiver__c4nYR",div_voucher:"Mint_div_voucher__TuiIP",div_attribute:"Mint_div_attribute__IlvpN",div_title:"Mint_div_title__fxfip",div_input:"Mint_div_input__CpqPG",red_hint:"Mint_red_hint__5ufa7",white_hint:"Mint_white_hint___bOVS",button_add_attribute:"Mint_button_add_attribute__A8MhJ",div_upgradable:"Mint_div_upgradable__yKY7g",div_nav:"Mint_div_nav__wD3Oa",div_content:"Mint_div_content__3u1ex"}}},function(e){e.O(0,[93,945,774,888,179],function(){return e(e.s=7537)}),_N_E=e.O()}]);