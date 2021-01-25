(this["webpackJsonpdiem-js-challenge"]=this["webpackJsonpdiem-js-challenge"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),i=a.n(n),r=a(7),c=a.n(r),o=(a(13),a(2)),l=a(3),d=a(5),p=a(4),u=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).onClick=function(t){e.props.toggleButton(e.props.index)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("button",{type:"button",className:"btn btn-sm ".concat(this.props.isInRightTab?"right-button":"btn-success"),onClick:this.onClick,children:this.props.name})}}]),a}(i.a.Component);function m(e){e.preventDefault()}var h=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onFocusName=function(e){""===e.target.value&&s.props.updateName("",1)},s.onBlurName=function(e){var t=e.target.value;s.props.updateName(t,2)},s.onFocusBirthday=function(e){""===e.target.value&&s.props.updateAge(-1,1)},s.onBlurBirthday=function(e){var t=new Date(e.target.value);if(isNaN(t))s.props.updateAge(-1,3);else{var a=new Date;a.getTime()-t.getTime()>0?s.props.updateAge(a.getFullYear()-t.getFullYear(),2):s.props.updateAge(-1,2)}},s.onClickModeOptions=function(e){s.props.updateMode(e.target.value)},s.state={name:"",age:-1},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.skills.map((function(t,a){return e.props.addedSkills[a]?null:Object(s.jsx)(u,{index:a,name:t,toggleButton:e.props.addSkill,isInRightTab:!1},t)}));return Object(s.jsx)("div",{className:"col-12 col-sm-12 col-md-6",children:Object(s.jsx)("div",{className:"panel bg-light",children:Object(s.jsx)("div",{className:"panel-body p-3",children:Object(s.jsxs)("form",{action:"#",onSubmit:m,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"control-label",children:"Name:"}),Object(s.jsx)("input",{className:"form-control",type:"text",id:"name",name:"name",onFocus:this.onFocusName,onBlur:this.onBlurName})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"control-label",children:"Birthday:"}),Object(s.jsx)("input",{className:"form-control",id:"date",name:"date",type:"date",onFocus:this.onFocusBirthday,onBlur:this.onBlurBirthday})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"control-label mr-3",children:"Choose Theme:"}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"modeOptions",id:"light",value:"light",onClick:this.onClickModeOptions}),Object(s.jsx)("label",{className:"form-check-label",children:"Light Mode"})]}),Object(s.jsxs)("div",{className:"form-check form-check-inline",children:[Object(s.jsx)("input",{className:"form-check-input",type:"radio",name:"modeOptions",id:"dark",value:"dark",onClick:this.onClickModeOptions}),Object(s.jsx)("label",{className:"form-check-label",children:"Dark Mode"})]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{className:"control-label mr-3",children:"Skills:"}),t]})]})})})})}}]),a}(i.a.Component),j=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t="";1===this.props.enterNameStage?t="Hello there! What's your name?":2===this.props.enterNameStage&&(t=""===this.props.name?"Can't you tell me your name? Please?":"Hi, ".concat(this.props.name,"!"));var a="";1===this.props.enterAgeStage?a="Lemme guess, your age is...":2===this.props.enterAgeStage?a=this.props.age<0?"Are you a time traveller? Cause you seem to be born in the future!":"Your age is ".concat(this.props.age," years old!"):3===this.props.enterAgeStage&&(a="Can't you tell me your age? Please?");var n="";"light"===this.props.mode?n="You chose Light mode!":"dark"===this.props.mode&&(n="You chose Dark mode!");var i="dark"===this.props.mode?"bg-dark text-white":"bg-light text-dark",r=this.props.skills.map((function(t,a){return e.props.addedSkills[a]?Object(s.jsx)(u,{index:a,name:t,toggleButton:e.props.removeSkill,isInRightTab:!0},t):null}));return Object(s.jsx)("div",{className:"col-12 col-sm-12 col-md-6 h-100",children:Object(s.jsx)("div",{className:"panel ".concat(i),children:Object(s.jsxs)("div",{className:"panel-body p-3",children:[Object(s.jsx)("p",{id:"nameOutput",children:t}),Object(s.jsx)("p",{id:"ageOutput",children:a}),Object(s.jsx)("p",{id:"themeOutput",children:n}),Object(s.jsx)("p",{id:"skillsOutput",children:r})]})})})}}]),a}(i.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).updateName=function(e,t){s.setState({name:e,enterNameStage:t})},s.updateAge=function(e,t){s.setState({age:e,enterAgeStage:t})},s.updateMode=function(e){s.setState({mode:e})},s.addSkill=function(e){var t=s.state.addedSkills.slice();t[e]=!0,s.setState({addedSkills:t})},s.removeSkill=function(e){var t=s.state.addedSkills.slice();t[e]=!1,s.setState({addedSkills:t})},s.state={enterNameStage:0,name:"",enterAgeStage:0,age:-1,mode:"",skills:["HTML","CSS","JavaScript"],addedSkills:[!1,!1,!1]},s}return Object(l.a)(a,[{key:"render",value:function(){return Object(s.jsx)("main",{className:"m-3 p-3 d-flex justify-content-center align-items-center h-100",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsxs)("div",{className:"row h-100",children:[Object(s.jsx)(h,{updateName:this.updateName,updateAge:this.updateAge,updateMode:this.updateMode,addSkill:this.addSkill,skills:this.state.skills,addedSkills:this.state.addedSkills}),Object(s.jsx)(j,{removeSkill:this.removeSkill,enterNameStage:this.state.enterNameStage,name:this.state.name,enterAgeStage:this.state.enterAgeStage,age:this.state.age,mode:this.state.mode,skills:this.state.skills,addedSkills:this.state.addedSkills})]})})})}}]),a}(i.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))},O=i.a.Fragment;c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsxs)(O,{children:[Object(s.jsx)(b,{}),Object(s.jsx)("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossOrigin:"anonymous"}),Object(s.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossOrigin:"anonymous"}),Object(s.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",crossOrigin:"anonymous"})]})}),document.getElementById("root")),g()}},[[14,1,2]]]);
//# sourceMappingURL=main.85df8ed6.chunk.js.map