(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.input-component{display:flex;flex-flow:column-reverse;width:100%;align-items:flex-start;transition:all .2s ease-in-out;position:relative;height:40px;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.input-component>*{box-sizing:border-box}.input-component.read-only-input-disabled-movement input:not(:placeholder-shown)+label,.input-component.read-only-input-disabled-movement input:focus+label{color:var(--secondary-color);font-size:15px;transform:translate(10px,2.5px) scale(1)}.input-component.is-invalid input{border:1px solid var(--error-color)}.input-component.is-invalid input:focus{border:1px solid var(--error-color)}.input-component.is-invalid label{color:var(--error-color)}.input-component.is-invalid input:focus+label{color:var(--error-color)}.input-component.is-invalid input:not(:placeholder-shown)+label{color:var(--error-color)}.input-component .clear-input{opacity:0;position:absolute;right:0;width:40px;height:calc(100% - 1px);padding:10px;display:flex;justify-content:center;align-items:center;transition:all .2s ease-in-out}.input-component .clear-input.show{opacity:1;cursor:pointer;background-color:transparent;animation:fadeIn .2s ease-in-out;z-index:2}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.input-component .clear-input.show:before,.input-component .clear-input.show:after{position:absolute;content:"";width:50%;height:1px;background-color:var(--black-color)}.input-component .clear-input.show:before{transform:rotate(45deg)}.input-component .clear-input.show:after{transform:rotate(-45deg)}.input-component .clear-input.show:hover:before,.input-component .clear-input.show:hover:after{background-color:var(--hover-color)}.input-component input{width:100%;height:100%;border:1px solid var(--secondary-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:8px;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);padding:10px 40px 10px 15px;background-color:transparent}.input-component input:focus,.input-component input:hover{cursor:pointer;outline:none}.input-component input:hover{border:.01rem solid var(--hover-color)}.input-component input:focus{border:.01rem solid var(--primary-color)}.input-component input:read-only{padding-right:0}.input-component label{font-weight:400;font-size:15px;line-height:100%;display:inline-block;flex-shrink:1;flex-grow:0;color:var(--secondary-color);background-color:var(--white-color);padding:5px;position:absolute;top:5px}.input-component label:hover{cursor:pointer}.input-component input:placeholder-shown+label{transform:translate(10px,2.5px) scale(1)}.input-component input:focus+label{font-weight:400;font-size:12px;color:var(--black-color)}.input-component ::-webkit-input-placeholder{opacity:0;transition:inherit}.input-component input:not(:placeholder-shown)+label{font-weight:400;font-size:12px;color:var(--black-color)}.input-component input:not(:placeholder-shown)+label,.input-component input:focus+label{color:var(--black-color);font-size:12px;transform:translate(10px,-15px) scale(1)}.input-component label,.input-component input{transition:all .2s;touch-action:manipulation}.input-component.input-component-border-bottom.is-invalid input{border:0;border-bottom:1px solid var(--error-color)}.input-component.input-component-border-bottom.is-invalid input:focus{border:0;border-bottom:1px solid var(--error-color)}.input-component.input-component-border-bottom.read-only-input-disabled-movement input:not(:placeholder-shown)+label,.input-component.input-component-border-bottom.read-only-input-disabled-movement input:focus+label{transform:translate(-5px,8px) scale(1)}.input-component.input-component-border-bottom input{border:0;border-bottom:.1rem solid var(--secondary-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;padding:10px 40px 5px 10px}.input-component.input-component-border-bottom input:focus,.input-component.input-component-border-bottom input:hover{cursor:pointer;outline:none}.input-component.input-component-border-bottom input:hover{border-bottom:.01rem solid var(--hover-color)}.input-component.input-component-border-bottom input:focus{border-bottom:.01rem solid var(--primary-color)}.input-component.input-component-border-bottom input:placeholder-shown+label{transform:translate(-5px,8px) scale(1)}.input-component.input-component-border-bottom input:not(:placeholder-shown)+label,.input-component.input-component-border-bottom input:focus+label{transform:translate(-5px,-15px) scale(1)}.input-component.input-component-full-border{height:auto;gap:10px}.input-component.input-component-full-border.is-invalid input{border:1px solid var(--error-color)}.input-component.input-component-full-border.is-invalid input:focus{border:1px solid var(--error-color)}.input-component.input-component-full-border.is-invalid label{color:var(--error-color)}.input-component.input-component-full-border.is-invalid input:focus+label{color:var(--error-color)}.input-component.input-component-full-border.is-invalid input:not(:placeholder-shown)+label{color:var(--error-color)}.input-component.input-component-full-border .clear-input{bottom:0;height:40px}.input-component.input-component-full-border input{height:40px;border:1px solid var(--black-color);border-radius:0;color:var(--black-color)}.input-component.input-component-full-border label{display:inline-flex;color:var(--black-color);background-color:transparent;padding:0;position:relative}.input-component.input-component-full-border input:placeholder-shown+label{transform:translateY(-2.5px) scale(1)}.input-component.input-component-full-border input:focus+label{font-size:15px;color:var(--black-color)}.input-component.input-component-full-border ::-webkit-input-placeholder{opacity:0;transition:inherit}.input-component.input-component-full-border input:not(:placeholder-shown)+label{font-size:15px;color:var(--black-color)}.input-component.input-component-full-border input:not(:placeholder-shown)+label,.input-component.input-component-full-border input:focus+label{color:var(--black-color);font-size:15px;transform:translateY(-2.5px) scale(1)}.dropdown-component{display:flex;flex-direction:column;width:100%;height:auto;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.dropdown-component *{box-sizing:border-box}.dropdown-component input[type=checkbox],.dropdown-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.dropdown-component.is-invalid .dropdown-component-outside{border:1px solid var(--error-color)}.dropdown-component.is-invalid .dropdown-component-outside .dropdown-arrow-box{border-left:1px solid var(--error-color)}.dropdown-component.is-invalid .dropdown-component-outside p{color:var(--error-color)}.dropdown-component.is-invalid .dropdown-component-opened{border:1px solid var(--error-color);border-top:none}.dropdown-component.is-invalid .dropdown-component-opened.up-side-down{border:1px solid var(--error-color);border-bottom:none}.dropdown-component .dropdown-component-outside{display:flex;align-items:center;justify-content:space-between;height:40px;width:100%;background:var(--white-color);border:1px solid var(--secondary-color);border-radius:8px}.dropdown-component .dropdown-component-outside.dropdown-list-opened{border-radius:8px 8px 0 0}.dropdown-component .dropdown-component-outside.dropdown-list-opened .dropdown-arrow-box:before{margin-top:5px;transform:rotate(135deg)}.dropdown-component .dropdown-component-outside.dropdown-list-opened.up-side-down{border-radius:0 0 8px 8px}.dropdown-component .dropdown-component-outside.dropdown-list-opened.up-side-down .dropdown-component-outside-text{top:auto;bottom:-10px}.dropdown-component .dropdown-component-outside .dropdown-component-outside-title{font-weight:400;font-size:15px;line-height:22px;color:var(--secondary-color);width:calc(100% - 40px);padding:0 10px;flex:1;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dropdown-component .dropdown-component-outside .dropdown-component-outside-title.normal-color{color:var(--black-color)}.dropdown-component .dropdown-component-outside .dropdown-arrow-box{display:flex;align-items:center;justify-content:center;padding:7px 10px;border-left:1px solid var(--secondary-color);height:100%;box-sizing:border-box;width:40px}.dropdown-component .dropdown-component-outside .dropdown-arrow-box:before{content:"";display:inline-block;width:11.5px;height:11.5px;margin-top:-5px;border-bottom:2px solid var(--primary-color);border-left:2px solid var(--primary-color);transform:rotate(-45deg)}.dropdown-component .dropdown-component-outside .dropdown-component-outside-text{height:auto;position:absolute;top:-10px;left:10px;font-weight:400;font-size:12px;line-height:100%;color:var(--black-color);padding:5px;z-index:5;margin:0;background-color:var(--white-color)}.dropdown-component .dropdown-component-outside:hover{cursor:pointer;border:1px solid var(--primary-color)}.dropdown-component .dropdown-component-outside:hover .dropdown-arrow-box{border-left:1px solid var(--primary-color)}.dropdown-component .dropdown-component-opened{display:flex;flex-direction:column;background-color:var(--white-color);border-radius:0 0 8px 8px;height:auto;position:absolute;top:40px;left:0;width:100%;border:1px solid var(--secondary-color);border-top:none;z-index:6;padding:0}.dropdown-component .dropdown-component-opened.up-side-down{top:auto;bottom:40px;flex-direction:column-reverse;border-radius:8px 8px 0 0;border-top:1px solid var(--secondary-color);border-bottom:none}.dropdown-component .dropdown-component-opened.up-side-down .search-box{border-bottom:none;border-top:1px solid var(--secondary-color)}.dropdown-component .dropdown-component-opened .search-box{padding:10px;border-bottom:1px solid var(--secondary-color)}.dropdown-component .dropdown-component-opened ul{overflow:hidden;display:flex;flex-direction:column;list-style:none;margin:0;overflow-y:auto;padding:0 10px;width:100%;max-height:40vh;height:auto}.dropdown-component .dropdown-component-opened ul li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.dropdown-component .dropdown-component-opened ul li .checkbox{display:flex;align-items:center;width:100%;height:100%}.dropdown-component .dropdown-component-opened ul li .checkbox input[type=checkbox]+label:before{content:"";display:inline-block;width:17px;height:17px;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCAxNyA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQgMjguNDAwOEw3Ljg0MjAxIDMxLjc1MzVDNy45ODY4MyAzMS44Nzk5IDguMjExNDggMzEuODM5NCA4LjMwMzA0IDMxLjY3MDRMMTMgMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzgpIiBmaWxsPSIjOEQ5NkE4Ii8+CjxwYXRoIGQ9Ik00IDQ3LjQwMDhMNy44NDIwMSA1MC43NTM1QzcuOTg2ODMgNTAuODc5OSA4LjIxMTQ4IDUwLjgzOTQgOC4zMDMwNCA1MC42NzA0TDEzIDQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==) 0 0;background-repeat:no-repeat;margin-right:6px;margin-bottom:-3px;flex-shrink:0}.dropdown-component .dropdown-component-opened ul li .checkbox input[type=checkbox]:checked+label:before{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCAxNyA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQgMjguNDAwOEw3Ljg0MjAxIDMxLjc1MzVDNy45ODY4MyAzMS44Nzk5IDguMjExNDggMzEuODM5NCA4LjMwMzA0IDMxLjY3MDRMMTMgMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzgpIiBmaWxsPSIjOEQ5NkE4Ii8+CjxwYXRoIGQ9Ik00IDQ3LjQwMDhMNy44NDIwMSA1MC43NTM1QzcuOTg2ODMgNTAuODc5OSA4LjIxMTQ4IDUwLjgzOTQgOC4zMDMwNCA1MC42NzA0TDEzIDQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==) 0 -19px;background-repeat:no-repeat}.dropdown-component .dropdown-component-opened ul li:last-child{border-bottom:none}.dropdown-component .dropdown-component-opened ul li label{display:inline-block;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px 0;height:100%}.dropdown-component .dropdown-component-opened ul li label:hover{cursor:pointer;color:var(--hover-color)}.input-with-suggestions-component{display:flex;flex-direction:column;width:100%;height:auto;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.input-with-suggestions-component *{box-sizing:border-box}.input-with-suggestions-component input[type=checkbox],.input-with-suggestions-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.input-with-suggestions-component.is-invalid .input-with-suggestions-component-list{border:.1rem solid var(--error-color);border-top:0 none}.input-with-suggestions-component.is-invalid .input-component input{border:1px solid var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.input-with-suggestions-component.is-invalid .input-component label{color:var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.input-with-suggestions-component.input-with-suggestions-component-opened .input-component input{border-radius:8px 8px 0 0}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list{top:auto;bottom:40px;flex-direction:column-reverse;border-radius:8px 8px 0 0;border-top:1px solid var(--secondary-color);border-bottom:none}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list li{border-bottom:none;border-top:1px solid var(--secondary-color)}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list li:last-child{border-top:none}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input{border-radius:0 0 8px 8px}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input:not(:placeholder-shown)+label,.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input:focus+label{transform:translate(10px,25px) scale(1)}.input-with-suggestions-component .input-with-suggestions-component-list{display:flex;flex-direction:column;background-color:var(--white-color);border-radius:0 0 8px 8px;height:auto;position:absolute;top:40px;left:0;width:100%;border:1px solid var(--secondary-color);border-top:none;z-index:6;overflow:hidden;list-style:none;margin:0;overflow-y:auto;padding:0 10px;max-height:40vh}.input-with-suggestions-component .input-with-suggestions-component-list li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.input-with-suggestions-component .input-with-suggestions-component-list li:last-child{border-bottom:none}.input-with-suggestions-component .input-with-suggestions-component-list li label{display:inline-block;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px 0;height:100%}.input-with-suggestions-component .input-with-suggestions-component-list li label:hover{cursor:pointer;color:var(--hover-color)}.date-input-component{display:flex;flex-direction:column;width:100%;gap:10px;--black-color: #000000;--error-color: #ff6565}.date-input-component *{box-sizing:border-box;margin:0;padding:0}.date-input-component.is-invalid .date-input-component-title{color:var(--error-color)}.date-input-component.is-invalid .input-component input{border:1px solid var(--error-color)}.date-input-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.date-input-component.is-invalid .input-component label{color:var(--error-color)}.date-input-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.date-input-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.date-input-component .date-input-component-title{font-weight:400;font-size:15px;line-height:22px;color:var(--black-color)}.date-input-component .date-input-components{display:flex;flex-direction:row;gap:20px;width:100%}.date-input-component .date-input-components .input-component{width:calc(33.3333333333% - 10px)}.time-picker-dropdown-component{display:flex;flex-direction:column;background-color:var(--white-color);z-index:3;overflow:hidden;width:100%;height:auto;transition:all .2s ease-in-out;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.time-picker-dropdown-component *{box-sizing:border-box;padding:0;margin:0}.time-picker-dropdown-component input[type=checkbox],.time-picker-dropdown-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.time-picker-dropdown-component.is-invalid .time-picker-dropdown-component-title{background-color:var(--error-color)}.time-picker-dropdown-component.is-invalid ul{border:1px solid var(--error-color)}.time-picker-dropdown-component .time-picker-dropdown-component-title{position:sticky;top:0;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--secondary-color);color:var(--white-color);font-size:15px;line-height:100%;z-index:3;border:1px solid transparent}.time-picker-dropdown-component ul{border:1px solid var(--secondary-color);border-radius:0 0 8px 8px;list-style:none;margin:0;max-height:40vh;overflow-y:auto;padding:0 10px}.time-picker-dropdown-component ul li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.time-picker-dropdown-component ul li:last-child{border-bottom:none}.time-picker-dropdown-component ul li.picked-value{background-color:var(--primary-color)}.time-picker-dropdown-component ul li.picked-value label{color:var(--white-color)}.time-picker-dropdown-component ul li label{display:flex;align-items:center;justify-content:center;margin-left:10px;font-size:15px;line-height:22px;color:var(--black-color);width:100%;height:100%;z-index:1}.time-picker-dropdown-component ul li:hover:not(.picked-value){background-color:var(--secondary-color)}.time-picker-dropdown-component ul li:hover:not(.picked-value) label{cursor:pointer;color:var(--white-color)}.time-picker-component{display:flex;flex-direction:column;position:relative}.time-picker-component .time-picker-dropdowns{display:flex;position:absolute;top:40px;width:100%}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component{width:50%}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-radius:0 0 0 8px}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-radius:0 0 8px}.time-picker-component.time-picker-component-opened .input-component input{border-radius:8px 8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns{top:auto;bottom:40px}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:first-child .time-picker-dropdown-component-title{border-radius:8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-radius:0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:last-child .time-picker-dropdown-component-title{border-radius:0 8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-radius:0}.time-picker-component.time-picker-component-up-side-down .input-component input{border-radius:0 0 8px 8px}.time-picker-component.time-picker-component-up-side-down .input-component input:not(:placeholder-shown)+label,.time-picker-component.time-picker-component-up-side-down .input-component input:focus+label{transform:translate(10px,25px) scale(1)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:first-child .time-picker-dropdown-component-title{border-left:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-left:1px solid var(--error-color);border-bottom:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:last-child .time-picker-dropdown-component-title{border-right:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-right:1px solid var(--error-color);border-bottom:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component input{border:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component label{color:var(--error-color)}.time-picker-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.time-picker-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.textarea-component{display:flex;flex-flow:column-reverse;width:100%;align-items:flex-start;transition:all .2s ease-in-out;height:100%;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.textarea-component *{box-sizing:border-box;padding:0;margin:0}.textarea-component.read-only-textarea-disabled-movement textarea:not(:placeholder-shown)+label,.textarea-component.read-only-textarea-disabled-movement textarea:focus+label{color:var(--secondary-color);font-size:15px;transform:translate(10px,4px) scale(1)}.textarea-component.resize-textarea{height:auto}.textarea-component.is-invalid textarea{border:1px solid var(--error-color)}.textarea-component.is-invalid textarea:focus{border:1px solid var(--error-color)}.textarea-component.is-invalid label{color:var(--error-color)}.textarea-component.is-invalid textarea:focus+label{color:var(--error-color)}.textarea-component.is-invalid textarea:not(:placeholder-shown)+label{color:var(--error-color)}.textarea-component textarea{width:100%;height:42px;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);border:1px solid var(--secondary-color);border-radius:8px;padding:9px 15px;background:var(--white-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;resize:none}.textarea-component textarea:focus,.textarea-component textarea:hover{cursor:pointer;outline:none}.textarea-component textarea:hover{border:.01rem solid var(--hover-color)}.textarea-component textarea:focus{border:.01rem solid var(--primary-color)}.textarea-component label{display:inline-block;flex-shrink:1;flex-grow:0;font-weight:400;font-size:15px;line-height:100%;color:var(--secondary-color);background-color:var(--white-color);padding:5px;position:absolute;top:5px}.textarea-component label:hover{cursor:pointer}.textarea-component textarea:placeholder-shown+label{transform:translate(10px,4px) scale(1)}.textarea-component ::-webkit-input-placeholder{opacity:0;transition:inherit}.textarea-component textarea:not(:placeholder-shown)+label{font-weight:400;font-size:12px;color:var(--black-color)}.textarea-component textarea:not(:placeholder-shown)+label,.textarea-component textarea:focus+label{color:var(--black-color);font-size:12px;transform:translate(10px,-15px) scale(1)}.textarea-component label,.textarea-component textarea{transition:all .2s;touch-action:manipulation}.slider-component{width:100%;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.slider-component *{box-sizing:border-box;padding:0;margin:0}.slider-component .slider{height:2px;background:var(--secondary-color);cursor:pointer;position:relative}.slider-component .slider .slider-start{position:absolute;left:0;background-color:var(--primary-color);height:2px;top:0}.slider-component .slider .slider-dot{background:var(--primary-color);height:16px;width:40px;border-radius:20px;position:absolute;top:-7px;display:flex;align-items:center;justify-content:center}.slider-component .slider .slider-dot .slider-display-value{font-weight:600;font-size:12px;line-height:100%;color:var(--white-color)}.slider-component.is-invalid .slider .slider-start{background-color:var(--error-color)}.slider-component.is-invalid .slider .slider-dot{background:var(--error-color)}.calendar-component{position:relative;display:flex;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.calendar-component *{box-sizing:border-box;padding:0;margin:0}.calendar-component.is-invalid .input-component input{border:1px solid var(--error-color)}.calendar-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.calendar-component.is-invalid .input-component label{color:var(--error-color)}.calendar-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.calendar-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.calendar-component.is-invalid .calendar-container{border:1px solid var(--error-color);border-top:none 0}.calendar-component.calendar-component-opened .input-component input{border-radius:8px 8px 0 0}.calendar-component .calendar-container{width:100%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;z-index:10;background-color:var(--white-color);border:1px solid var(--secondary-color);border-top:none;border-radius:0 0 8px 8px;position:absolute;top:40px}.calendar-component .calendar-container .calendar-header{display:flex;justify-content:center;align-items:center;padding:10px;width:100%;gap:20px}.calendar-component .calendar-container .calendar-header .date-text{width:150px;text-align:center}.calendar-component .calendar-container .calendar-header .calendar-arrow{width:11px;height:18px;display:block;display:flex;align-items:center;flex-shrink:0}.calendar-component .calendar-container .calendar-header .calendar-arrow.left{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI3XzYpIj4KPHBhdGggZD0iTTkuMDAwMDEgOC45OTk5OUw5LjcwNzEyIDkuNzA3MUwxMC40MTQyIDguOTk5OTlMOS43MDcxMiA4LjI5Mjg4TDkuMDAwMDEgOC45OTk5OVpNMC4yOTI5MSAxLjcwNzA5TDguMjkyOSA5LjcwNzFMOS43MDcxMiA4LjI5Mjg4TDEuNzA3MTIgMC4yOTI4ODdMMC4yOTI5MSAxLjcwNzA5Wk04LjI5MjkgOC4yOTI4OEwwLjI5MjkwOCAxNi4yOTI5TDEuNzA3MTIgMTcuNzA3MUw5LjcwNzEyIDkuNzA3MUw4LjI5MjkgOC4yOTI4OFoiIGZpbGw9IiMxQTJDNTEiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMjdfNikiPgo8cGF0aCBkPSJNMi4wMDAwMyAyN0wxLjI5MjkyIDI2LjI5MjlMMC41ODU4MTUgMjdMMS4yOTI5MiAyNy43MDcxTDIuMDAwMDMgMjdaTTEwLjcwNzEgMzQuMjkyOUwyLjcwNzE0IDI2LjI5MjlMMS4yOTI5MiAyNy43MDcxTDkuMjkyOTIgMzUuNzA3MUwxMC43MDcxIDM0LjI5MjlaTTIuNzA3MTQgMjcuNzA3MUwxMC43MDcxIDE5LjcwNzFMOS4yOTI5MiAxOC4yOTI5TDEuMjkyOTIgMjYuMjkyOUwyLjcwNzE0IDI3LjcwNzFaIiBmaWxsPSIjMUEyQzUxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMTgpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMzYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==) 0 -18px}.calendar-component .calendar-container .calendar-header .calendar-arrow.right{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI3XzYpIj4KPHBhdGggZD0iTTkuMDAwMDEgOC45OTk5OUw5LjcwNzEyIDkuNzA3MUwxMC40MTQyIDguOTk5OTlMOS43MDcxMiA4LjI5Mjg4TDkuMDAwMDEgOC45OTk5OVpNMC4yOTI5MSAxLjcwNzA5TDguMjkyOSA5LjcwNzFMOS43MDcxMiA4LjI5Mjg4TDEuNzA3MTIgMC4yOTI4ODdMMC4yOTI5MSAxLjcwNzA5Wk04LjI5MjkgOC4yOTI4OEwwLjI5MjkwOCAxNi4yOTI5TDEuNzA3MTIgMTcuNzA3MUw5LjcwNzEyIDkuNzA3MUw4LjI5MjkgOC4yOTI4OFoiIGZpbGw9IiMxQTJDNTEiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMjdfNikiPgo8cGF0aCBkPSJNMi4wMDAwMyAyN0wxLjI5MjkyIDI2LjI5MjlMMC41ODU4MTUgMjdMMS4yOTI5MiAyNy43MDcxTDIuMDAwMDMgMjdaTTEwLjcwNzEgMzQuMjkyOUwyLjcwNzE0IDI2LjI5MjlMMS4yOTI5MiAyNy43MDcxTDkuMjkyOTIgMzUuNzA3MUwxMC43MDcxIDM0LjI5MjlaTTIuNzA3MTQgMjcuNzA3MUwxMC43MDcxIDE5LjcwNzFMOS4yOTI5MiAxOC4yOTI5TDEuMjkyOTIgMjYuMjkyOUwyLjcwNzE0IDI3LjcwNzFaIiBmaWxsPSIjMUEyQzUxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMTgpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMzYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==)-0 0rem}.calendar-component .calendar-container .calendar-header .calendar-arrow:hover{cursor:pointer;opacity:.7}.calendar-component .calendar-container .calendar-days{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;border-top:1px solid var(--secondary-color);height:49.5px}.calendar-component .calendar-container .calendar-days.day-names{border-top:none}.calendar-component .calendar-container .calendar-days .calendar-day{width:14.2857142857%;height:100%;display:flex;justify-content:center;align-items:center;border-right:1px solid var(--secondary-color);font-weight:400;font-size:12px;line-height:12px;color:var(--black-color)}.calendar-component .calendar-container .calendar-days .calendar-day:nth-child(7n){border-right:none}.calendar-component .calendar-container .calendar-days .calendar-day:hover{cursor:pointer;background-color:var(--secondary-color);color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-pass,.calendar-component .calendar-container .calendar-days .calendar-day.date-future{color:var(--secondary-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-pass:hover,.calendar-component .calendar-container .calendar-days .calendar-day.date-future:hover{color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-disabled{color:var(--secondary-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-disabled:hover{color:var(--secondary-color);cursor:not-allowed;background-color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-active,.calendar-component .calendar-container .calendar-days .calendar-day.date-current,.calendar-component .calendar-container .calendar-days .calendar-day.date-active:hover,.calendar-component .calendar-container .calendar-days .calendar-day.date-current:hover{background-color:var(--primary-color);color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.day-name{border-right:none}.calendar-component .calendar-container .calendar-days .calendar-day.day-name:hover{cursor:default;background-color:var(--white-color);color:var(--black-color)}.checkbox-slider{display:flex;align-items:center;justify-content:flex-start;gap:10px;width:auto;user-select:none;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff;--green-color: #7cd920}.checkbox-slider *{box-sizing:border-box;padding:0;margin:0}.checkbox-slider .checkbox-switch{position:relative;display:inline-flex;width:40px;height:18px;cursor:pointer}.checkbox-slider .checkbox-switch:hover{cursor:pointer;opacity:.7}.checkbox-slider .checkbox-switch label{display:flex;vertical-align:middle;justify-content:flex-start;position:relative;display:inline-block;width:40px;height:18px;cursor:pointer}.checkbox-slider .checkbox-switch input{opacity:0;width:0;height:0}.checkbox-slider .checkbox-switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--secondary-color);transition:.4s;border-radius:40px}.checkbox-slider .checkbox-switch .slider:before{position:absolute;content:"";height:10px;width:10px;border-radius:18px;left:5px;bottom:4px;background-color:var(--white-color);transition:.25s}.checkbox-slider .checkbox-switch input:checked+.slider{background-color:var(--green-color)}.checkbox-slider .checkbox-switch input:checked+.slider:before{transform:translate(20px)}.checkbox-slider .checkbox-slider-label{font-size:15px;line-height:140%;padding-top:2px;color:var(--black-color);cursor:pointer}.checkbox-slider.is-invalid .checkbox-switch .slider{background-color:var(--error-color)}.checkbox-slider.is-invalid .checkbox-slider-label{color:var(--error-color)}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as Ie, ref as U, computed as Z, openBlock as x, createElementBlock as F, normalizeClass as fe, withDirectives as ge, createElementVNode as _, unref as A, isRef as ee, vModelDynamic as fi, createTextVNode as Ue, toDisplayString as B, Fragment as Te, createCommentVNode as K, onMounted as Et, resolveDirective as Jt, createVNode as De, renderList as Ke, vModelCheckbox as br, vModelRadio as kn, nextTick as Ye, vModelText as hi, reactive as mi, watch as zt, normalizeStyle as nr, createBlock as rr } from "vue";
const pi = ["type", "id", "readonly"], vi = ["for"], qe = /* @__PURE__ */ Ie({
  __name: "InputComponent",
  props: {
    inputType: { default: "text" },
    placeHolder: null,
    errorMessage: null,
    modelValue: null,
    readOnly: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(n, { expose: e, emit: t }) {
    const r = n, s = U(null), l = Math.random().toString(36).slice(2), o = Z({
      get: () => r.modelValue,
      set: (h) => {
        t("update:modelValue", h);
      }
    });
    function c() {
      o.value = "";
    }
    function d() {
      var h;
      (h = s.value) == null || h.focus();
    }
    return e({ focusInput: d }), (h, T) => (x(), F("div", {
      class: fe(["input-component", {
        "read-only-input-disabled-movement": n.readOnly && !n.modelValue
      }])
    }, [
      ge(_("input", {
        type: n.inputType,
        placeholder: " ",
        id: "input" + A(l),
        "onUpdate:modelValue": T[0] || (T[0] = (O) => ee(o) ? o.value = O : null),
        readonly: n.readOnly,
        ref_key: "inputComponent",
        ref: s
      }, null, 8, pi), [
        [fi, A(o)]
      ]),
      _("label", {
        for: "input" + A(l)
      }, [
        Ue(B(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), F(Te, { key: 0 }, [
          Ue("- " + B(n.errorMessage), 1)
        ], 64)) : K("", !0)
      ], 8, vi),
      n.readOnly ? K("", !0) : (x(), F("div", {
        key: 0,
        class: fe(["clear-input", { show: n.modelValue }]),
        onClick: c
      }, null, 2))
    ], 2));
  }
});
const yi = { class: "dropdown-component" }, gi = {
  key: 0,
  class: "dropdown-component-outside-text"
}, Ti = /* @__PURE__ */ _("div", { class: "dropdown-arrow-box" }, null, -1), wi = {
  key: 0,
  class: "search-box"
}, Ei = {
  key: 0,
  class: "checkbox"
}, Si = ["value", "id"], Oi = ["for", "title"], Ii = ["value", "id"], Mi = ["for", "title"], Ni = { key: 0 }, ki = /* @__PURE__ */ _("label", null, "No results found", -1), Ci = [
  ki
], sr = /* @__PURE__ */ Ie({
  __name: "DropdownComponent",
  props: {
    placeHolder: { default: "Please select" },
    errorMessage: null,
    modelValue: null,
    options: null,
    displayFunction: { type: Function, default: (n) => n.name ?? "--" },
    valueFunction: { type: Function, default: (n) => n.value ?? "--" },
    multiSelect: { type: Boolean, default: !1 },
    searchBox: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = U(!1), s = U(!1), l = U(), o = U(""), c = U(), d = Z({
      get() {
        if (!t.options)
          return null;
        if (t.multiSelect)
          return t.modelValue ?? [];
        for (let m = 0; m < t.options.length; m++)
          if (t.valueFunction(t.options[m]) === t.modelValue)
            return t.options[m];
        return null;
      },
      set(m) {
        m && (t.multiSelect ? e("update:modelValue", m) : (e("update:modelValue", t.valueFunction(m)), v()));
      }
    }), h = Z(() => t.options ? o.value ? t.options.filter((m) => t.displayFunction(m).toLowerCase().includes(o.value.toLowerCase())) : t.options : []);
    Et(() => {
      T();
    });
    function T() {
      t.options && t.options.length == 1 && (d.value = t.options[0]);
    }
    function O() {
      return d.value ? t.displayFunction(d.value) : t.placeHolder;
    }
    function S() {
      r.value = !0, M(), t.searchBox && Ye(() => {
        var m;
        (m = c.value) == null || m.focusInput();
      });
    }
    function v() {
      r.value = !1, s.value = !1, o.value = "";
    }
    function M() {
      Ye(() => {
        const m = l.value;
        if (!m)
          return;
        const E = m.getBoundingClientRect();
        window.innerHeight - E.bottom > 0 ? s.value = !1 : s.value = !0;
      });
    }
    function g() {
      const m = d.value;
      if (t.multiSelect && m && (m == null ? void 0 : m.length) > 0) {
        let E = "";
        for (let N = 0; N < (m == null ? void 0 : m.length); N++) {
          if (!t.options)
            return null;
          for (let k = 0; k < t.options.length; k++)
            t.options[k] === m[N] && (E += t.displayFunction(t.options[k]) + ", ");
          E = E.replace(/\w\S*/g, function(k) {
            return k.charAt(0).toUpperCase() + k.substr(1).toLowerCase();
          });
        }
        return E = E.slice(0, -2), (m == null ? void 0 : m.length) > 3 && (E = (m == null ? void 0 : m.length) + " " + t.placeHolder + "s selected "), E;
      }
      return null;
    }
    return (m, E) => {
      const N = Jt("click-outside");
      return x(), F("div", yi, [
        _("div", {
          class: fe(["dropdown-component-outside", { "up-side-down": s.value && r.value, "dropdown-list-opened": r.value }]),
          onClick: S
        }, [
          (n.multiSelect ? g() : A(d)) ? (x(), F("p", gi, B(n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder), 1)) : K("", !0),
          _("p", {
            class: fe(["dropdown-component-outside-title", { "normal-color": n.multiSelect ? g() : A(d) }])
          }, B(n.multiSelect ? g() ? g() : n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder : A(d) && O() ? O() : n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder), 3),
          Ti
        ], 2),
        r.value ? ge((x(), F("div", {
          key: 0,
          class: fe(["dropdown-component-opened", { "up-side-down": s.value }]),
          ref_key: "dropdownComponent",
          ref: l
        }, [
          n.searchBox ? (x(), F("div", wi, [
            De(qe, {
              ref_key: "inputComponent",
              ref: c,
              modelValue: o.value,
              "onUpdate:modelValue": E[0] || (E[0] = (k) => o.value = k),
              placeHolder: "Search"
            }, null, 8, ["modelValue"])
          ])) : K("", !0),
          _("ul", null, [
            (x(!0), F(Te, null, Ke(A(h), (k, I) => (x(), F("li", { key: I }, [
              n.multiSelect ? (x(), F("div", Ei, [
                ge(_("input", {
                  type: "checkbox",
                  value: k,
                  id: n.valueFunction(k) + "_" + I,
                  "onUpdate:modelValue": E[1] || (E[1] = (C) => ee(d) ? d.value = C : null)
                }, null, 8, Si), [
                  [br, A(d)]
                ]),
                _("label", {
                  for: n.valueFunction(k) + "_" + I,
                  title: n.displayFunction(k),
                  class: "body-text radio-label"
                }, B(n.displayFunction(k)), 9, Oi)
              ])) : (x(), F(Te, { key: 1 }, [
                ge(_("input", {
                  type: "radio",
                  value: k,
                  id: n.valueFunction(k) + "_" + I,
                  "onUpdate:modelValue": E[2] || (E[2] = (C) => ee(d) ? d.value = C : null)
                }, null, 8, Ii), [
                  [kn, A(d)]
                ]),
                _("label", {
                  for: n.valueFunction(k) + "_" + I,
                  title: n.displayFunction(k)
                }, B(n.displayFunction(k)), 9, Mi)
              ], 64))
            ]))), 128)),
            A(h).length == 0 ? (x(), F("li", Ni, Ci)) : K("", !0)
          ])
        ], 2)), [
          [N, v]
        ]) : K("", !0)
      ]);
    };
  }
});
const Di = ["value", "id"], xi = ["for", "title"], Vi = { key: 0 }, bi = /* @__PURE__ */ _("label", null, "No results found", -1), Fi = [
  bi
], nl = /* @__PURE__ */ Ie({
  __name: "InputComponentWithSuggestions",
  props: {
    placeHolder: { default: "Please select" },
    errorMessage: null,
    modelValue: null,
    suggestions: null,
    valueKey: null,
    displayKey: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = U(!1), s = U(!1), l = U(), o = Z({
      get() {
        return c.value;
      },
      set(S) {
        c.value = S, T();
      }
    });
    let c = Z({
      get() {
        return t.modelValue;
      },
      set(S) {
        e("update:modelValue", S);
      }
    });
    const d = Z(() => t.suggestions ? c.value ? t.suggestions.filter((S) => {
      if (typeof S == "string" && c.value && typeof c.value == "string")
        return S.toLowerCase().includes(c.value.toLowerCase());
    }) : t.suggestions : []);
    function h() {
      r.value = !0, O();
    }
    function T() {
      r.value = !1, s.value = !1;
    }
    function O() {
      Ye(() => {
        const S = l.value;
        if (!S)
          return;
        const v = S.getBoundingClientRect();
        window.innerHeight - v.bottom > 0 ? s.value = !1 : s.value = !0;
      });
    }
    return (S, v) => {
      const M = Jt("click-outside");
      return ge((x(), F("div", {
        class: fe(["input-with-suggestions-component", {
          "input-with-suggestions-component-opened": r.value,
          "input-with-suggestions-component-upside-down": s.value
        }])
      }, [
        De(qe, {
          placeHolder: n.placeHolder,
          modelValue: A(c),
          "onUpdate:modelValue": v[0] || (v[0] = (g) => ee(c) ? c.value = g : c = g),
          "error-message": n.errorMessage,
          onClick: h
        }, null, 8, ["placeHolder", "modelValue", "error-message"]),
        r.value ? (x(), F("ul", {
          key: 0,
          class: "input-with-suggestions-component-list",
          ref_key: "dropdownComponent",
          ref: l
        }, [
          (x(!0), F(Te, null, Ke(A(d), (g, m) => (x(), F("li", { key: m }, [
            ge(_("input", {
              type: "radio",
              value: g,
              id: m + "",
              "onUpdate:modelValue": v[1] || (v[1] = (E) => ee(o) ? o.value = E : null)
            }, null, 8, Di), [
              [kn, A(o)]
            ]),
            _("label", {
              for: m + "",
              title: g + ""
            }, B(g), 9, xi)
          ]))), 128)),
          A(d).length == 0 ? (x(), F("li", Vi, Fi)) : K("", !0)
        ], 512)) : K("", !0)
      ], 2)), [
        [M, T]
      ]);
    };
  }
});
const _i = { class: "date-input-component-title" }, Ai = { class: "date-input-components" }, rl = /* @__PURE__ */ Ie({
  __name: "InputDateComponent",
  props: {
    placeHolder: { default: "Date" },
    errorMessage: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = U(null), s = U(null), l = U();
    let o = U(t.modelValue ? t.modelValue.toString().split("-")[2] : ""), c = U(t.modelValue ? t.modelValue.toString().split("-")[1] : ""), d = U(t.modelValue ? t.modelValue.toString().split("-")[0] : "");
    const h = Z({
      get: () => o.value,
      set: (v) => {
        const M = parseInt(v, 10);
        o.value = "0", Ye(() => {
          M > 31 && (v = "31"), o.value = v, S();
        }), v && M > 4 && s.value && s.value.focusInput(), S();
      }
    }), T = Z({
      get: () => c.value,
      set: (v) => {
        const M = parseInt(v, 10);
        c.value = "0", Ye(() => {
          M > 12 && (v = "12"), c.value = v, S();
        }), v && M > 2 && r.value && r.value.focusInput(), S();
      }
    }), O = Z({
      get: () => d.value,
      set: (v) => {
        const M = parseInt(v, 10);
        if (M < 1e3)
          return;
        const g = d.value;
        d.value = "0", Ye(() => {
          M > 9999 && (v = g), d.value = v, S();
        }), S();
      }
    });
    function S() {
      const v = parseInt(O.value, 10), M = parseInt(T.value, 10) - 1, g = parseInt(h.value, 10), m = new Date(v, M, g, 0, 0, 0);
      if (!h.value || !T.value || !O.value || Number.isNaN(m))
        return;
      const E = m.getFullYear(), N = m.getMonth() + 1, k = N < 10 ? "0" + N : N, I = m.getDate(), C = I < 10 ? "0" + I : I, J = `${E}-${k}-${C}`;
      e("update:modelValue", J);
    }
    return (v, M) => (x(), F("div", {
      class: "date-input-component",
      ref_key: "parentComponent",
      ref: l
    }, [
      _("p", _i, [
        Ue(B(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), F(Te, { key: 0 }, [
          Ue("- " + B(n.errorMessage), 1)
        ], 64)) : K("", !0)
      ]),
      _("div", Ai, [
        De(qe, {
          "input-type": "number",
          modelValue: A(h),
          "onUpdate:modelValue": M[0] || (M[0] = (g) => ee(h) ? h.value = g : null),
          "place-holder": "D"
        }, null, 8, ["modelValue"]),
        De(qe, {
          "input-type": "number",
          ref_key: "monthRef",
          ref: s,
          modelValue: A(T),
          "onUpdate:modelValue": M[1] || (M[1] = (g) => ee(T) ? T.value = g : null),
          "place-holder": "M"
        }, null, 8, ["modelValue"]),
        De(qe, {
          "input-type": "number",
          ref_key: "yearRef",
          ref: r,
          modelValue: A(O),
          "onUpdate:modelValue": M[2] || (M[2] = (g) => ee(O) ? O.value = g : null),
          "place-holder": "Y"
        }, null, 8, ["modelValue"])
      ])
    ], 512));
  }
});
const Pi = { class: "time-picker-dropdown-component" }, Li = { class: "time-picker-dropdown-component-title" }, Ui = ["value", "id"], Ri = ["for", "title"], ir = /* @__PURE__ */ Ie({
  __name: "TimePickerDropdownComponent",
  props: {
    placeHolder: { default: "Please select" },
    modelValue: null,
    options: null,
    displayFunction: { type: Function, default: (n) => n.name ?? "--" },
    valueFunction: { type: Function, default: (n) => n.value ?? "--" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = Z({
      get() {
        if (!t.options)
          return null;
        for (let l = 0; l < t.options.length; l++)
          if (t.valueFunction(t.options[l]) === t.modelValue)
            return t.options[l];
        return null;
      },
      set(l) {
        l && e("update:modelValue", t.valueFunction(l));
      }
    });
    Et(() => {
      s();
    });
    function s() {
      t.options && t.options.length == 1 && (r.value = t.options[0]);
    }
    return (l, o) => (x(), F("div", Pi, [
      _("p", Li, B(n.placeHolder), 1),
      _("ul", null, [
        (x(!0), F(Te, null, Ke(n.options, (c, d) => (x(), F("li", {
          key: d,
          class: fe({ "picked-value": n.valueFunction(c) === n.modelValue })
        }, [
          ge(_("input", {
            type: "radio",
            value: c,
            id: n.valueFunction(c) + "_" + d,
            "onUpdate:modelValue": o[0] || (o[0] = (h) => ee(r) ? r.value = h : null)
          }, null, 8, Ui), [
            [kn, A(r)]
          ]),
          _("label", {
            for: n.valueFunction(c) + "_" + d,
            title: n.displayFunction(c)
          }, B(n.displayFunction(c)), 9, Ri)
        ], 2))), 128))
      ])
    ]));
  }
});
const sl = /* @__PURE__ */ Ie({
  __name: "TimePickerComponent",
  props: {
    modelValue: null,
    minuteInterval: null,
    timeTo: { default: 24 },
    timeFrom: { default: 0 },
    errorMessage: null,
    placeHolder: { default: "Please select" }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = U(!1), s = U(), l = U(!1), o = Z(() => {
      const g = [];
      for (let m = t.timeFrom; m < t.timeTo; m++)
        g.push({ value: O(m), name: O(m) });
      return g;
    }), c = Z(() => {
      const g = [];
      let m = t.minuteInterval;
      m === 0 ? m = 60 : m || (m = 1);
      for (let E = 0; E < 60; E += m)
        g.push({ value: O(E), name: O(E) });
      return g;
    }), d = Z({
      get() {
        var g;
        return ((g = t.modelValue) == null ? void 0 : g.hour) ?? "--";
      },
      set(g) {
        var m;
        e("update:modelValue", {
          hour: g,
          minute: (m = t.modelValue) == null ? void 0 : m.minute
        });
      }
    }), h = Z({
      get: () => {
        var g;
        return ((g = t.modelValue) == null ? void 0 : g.minute) ?? "--";
      },
      set: (g) => {
        var m;
        e("update:modelValue", {
          hour: (m = t.modelValue) == null ? void 0 : m.hour,
          minute: g
        });
      }
    }), T = Z(() => `${d.value}:${h.value}`);
    function O(g) {
      return g < 10 ? `0${g}` : String(g);
    }
    function S() {
      r.value = !0, M();
    }
    function v() {
      r.value = !1, l.value = !1;
    }
    function M() {
      Ye(() => {
        const g = s.value;
        if (!g)
          return;
        const m = g.getBoundingClientRect();
        window.innerHeight - m.bottom > 0 ? l.value = !1 : l.value = !0;
      });
    }
    return (g, m) => {
      const E = Jt("click-outside");
      return x(), F("div", {
        class: fe(["time-picker-component", {
          "time-picker-component-opened": r.value,
          "time-picker-component-up-side-down": l.value
        }])
      }, [
        De(qe, {
          "model-value": A(T),
          onClick: S,
          "read-only": !0,
          "place-holder": n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder
        }, null, 8, ["model-value", "place-holder"]),
        r.value ? ge((x(), F("div", {
          key: 0,
          class: "time-picker-dropdowns",
          ref_key: "timePickerComponentDropdowns",
          ref: s
        }, [
          De(ir, {
            modelValue: A(d),
            "onUpdate:modelValue": m[0] || (m[0] = (N) => ee(d) ? d.value = N : null),
            options: A(o),
            "place-holder": "HH"
          }, null, 8, ["modelValue", "options"]),
          De(ir, {
            modelValue: A(h),
            "onUpdate:modelValue": m[1] || (m[1] = (N) => ee(h) ? h.value = N : null),
            options: A(c),
            "place-holder": "MM"
          }, null, 8, ["modelValue", "options"])
        ])), [
          [E, v]
        ]) : K("", !0)
      ], 2);
    };
  }
});
const Hi = ["id", "readonly"], $i = ["for"], il = /* @__PURE__ */ Ie({
  __name: "TextAreaComponent",
  props: {
    placeHolder: null,
    errorMessage: null,
    modelValue: null,
    shouldResize: { type: Boolean },
    readOnly: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = Math.random().toString(36).slice(2), s = U(null), l = Z({
      get: () => t.modelValue,
      set: (c) => {
        e("update:modelValue", c);
      }
    });
    Et(() => {
      o();
    });
    function o() {
      t.shouldResize && s.value && (s.value.style.height = "42px", s.value.style.height = s.value.scrollHeight + 2 + "px", s.value.scrollHeight > s.value.offsetHeight && (s.value.style.height = s.value.scrollHeight + 2 + "px"), t.modelValue === "" && (s.value.style.height = "42px"));
    }
    return (c, d) => (x(), F("div", {
      class: fe(["textarea-component", {
        "read-only-textarea-disabled-movement": n.readOnly && !n.modelValue,
        "resize-textarea": n.shouldResize
      }])
    }, [
      ge(_("textarea", {
        placeholder: " ",
        id: "textarea" + A(r),
        "onUpdate:modelValue": d[0] || (d[0] = (h) => ee(l) ? l.value = h : null),
        onInput: d[1] || (d[1] = (h) => o()),
        ref_key: "textAreaComponent",
        ref: s,
        readonly: n.readOnly
      }, null, 40, Hi), [
        [hi, A(l)]
      ]),
      _("label", {
        for: "textarea" + A(r)
      }, [
        Ue(B(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), F(Te, { key: 0 }, [
          Ue("- " + B(n.errorMessage), 1)
        ], 64)) : K("", !0)
      ], 8, $i)
    ], 2));
  }
});
var wn = {}, Zi = {
  get exports() {
    return wn;
  },
  set exports(n) {
    wn = n;
  }
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(n) {
  (function(e, t, r, s) {
    var l = ["", "webkit", "Moz", "MS", "ms", "o"], o = t.createElement("div"), c = "function", d = Math.round, h = Math.abs, T = Date.now;
    function O(i, a, u) {
      return setTimeout(k(i, u), a);
    }
    function S(i, a, u) {
      return Array.isArray(i) ? (v(i, u[a], u), !0) : !1;
    }
    function v(i, a, u) {
      var f;
      if (i)
        if (i.forEach)
          i.forEach(a, u);
        else if (i.length !== s)
          for (f = 0; f < i.length; )
            a.call(u, i[f], f, i), f++;
        else
          for (f in i)
            i.hasOwnProperty(f) && a.call(u, i[f], f, i);
    }
    function M(i, a, u) {
      var f = "DEPRECATED METHOD: " + a + `
` + u + ` AT 
`;
      return function() {
        var p = new Error("get-stack-trace"), w = p && p.stack ? p.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", b = e.console && (e.console.warn || e.console.log);
        return b && b.call(e.console, f, w), i.apply(this, arguments);
      };
    }
    var g;
    typeof Object.assign != "function" ? g = function(a) {
      if (a === s || a === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var u = Object(a), f = 1; f < arguments.length; f++) {
        var p = arguments[f];
        if (p !== s && p !== null)
          for (var w in p)
            p.hasOwnProperty(w) && (u[w] = p[w]);
      }
      return u;
    } : g = Object.assign;
    var m = M(function(a, u, f) {
      for (var p = Object.keys(u), w = 0; w < p.length; )
        (!f || f && a[p[w]] === s) && (a[p[w]] = u[p[w]]), w++;
      return a;
    }, "extend", "Use `assign`."), E = M(function(a, u) {
      return m(a, u, !0);
    }, "merge", "Use `assign`.");
    function N(i, a, u) {
      var f = a.prototype, p;
      p = i.prototype = Object.create(f), p.constructor = i, p._super = f, u && g(p, u);
    }
    function k(i, a) {
      return function() {
        return i.apply(a, arguments);
      };
    }
    function I(i, a) {
      return typeof i == c ? i.apply(a && a[0] || s, a) : i;
    }
    function C(i, a) {
      return i === s ? a : i;
    }
    function J(i, a, u) {
      v(he(a), function(f) {
        i.addEventListener(f, u, !1);
      });
    }
    function V(i, a, u) {
      v(he(a), function(f) {
        i.removeEventListener(f, u, !1);
      });
    }
    function H(i, a) {
      for (; i; ) {
        if (i == a)
          return !0;
        i = i.parentNode;
      }
      return !1;
    }
    function se(i, a) {
      return i.indexOf(a) > -1;
    }
    function he(i) {
      return i.trim().split(/\s+/g);
    }
    function $(i, a, u) {
      if (i.indexOf && !u)
        return i.indexOf(a);
      for (var f = 0; f < i.length; ) {
        if (u && i[f][u] == a || !u && i[f] === a)
          return f;
        f++;
      }
      return -1;
    }
    function Ve(i) {
      return Array.prototype.slice.call(i, 0);
    }
    function Je(i, a, u) {
      for (var f = [], p = [], w = 0; w < i.length; ) {
        var b = a ? i[w][a] : i[w];
        $(p, b) < 0 && f.push(i[w]), p[w] = b, w++;
      }
      return u && (a ? f = f.sort(function(j, ne) {
        return j[a] > ne[a];
      }) : f = f.sort()), f;
    }
    function be(i, a) {
      for (var u, f, p = a[0].toUpperCase() + a.slice(1), w = 0; w < l.length; ) {
        if (u = l[w], f = u ? u + p : a, f in i)
          return f;
        w++;
      }
      return s;
    }
    var en = 1;
    function bs() {
      return en++;
    }
    function An(i) {
      var a = i.ownerDocument || i;
      return a.defaultView || a.parentWindow || e;
    }
    var Fs = /mobile|tablet|ip(ad|hone|od)|android/i, Pn = "ontouchstart" in e, _s = be(e, "PointerEvent") !== s, As = Pn && Fs.test(navigator.userAgent), at = "touch", Ps = "pen", tn = "mouse", Ls = "kinect", Us = 25, te = 1, Re = 2, Y = 4, ie = 8, Nt = 1, ot = 2, lt = 4, ut = 8, ct = 16, Ee = ot | lt, He = ut | ct, Ln = Ee | He, Un = ["x", "y"], kt = ["clientX", "clientY"];
    function oe(i, a) {
      var u = this;
      this.manager = i, this.callback = a, this.element = i.element, this.target = i.options.inputTarget, this.domHandler = function(f) {
        I(i.options.enable, [i]) && u.handler(f);
      }, this.init();
    }
    oe.prototype = {
      /**
       * should handle the inputEvent data and trigger the callback
       * @virtual
       */
      handler: function() {
      },
      /**
       * bind the events
       */
      init: function() {
        this.evEl && J(this.element, this.evEl, this.domHandler), this.evTarget && J(this.target, this.evTarget, this.domHandler), this.evWin && J(An(this.element), this.evWin, this.domHandler);
      },
      /**
       * unbind the events
       */
      destroy: function() {
        this.evEl && V(this.element, this.evEl, this.domHandler), this.evTarget && V(this.target, this.evTarget, this.domHandler), this.evWin && V(An(this.element), this.evWin, this.domHandler);
      }
    };
    function Rs(i) {
      var a, u = i.options.inputClass;
      return u ? a = u : _s ? a = rn : As ? a = xt : Pn ? a = sn : a = Dt, new a(i, Hs);
    }
    function Hs(i, a, u) {
      var f = u.pointers.length, p = u.changedPointers.length, w = a & te && f - p === 0, b = a & (Y | ie) && f - p === 0;
      u.isFirst = !!w, u.isFinal = !!b, w && (i.session = {}), u.eventType = a, $s(i, u), i.emit("hammer.input", u), i.recognize(u), i.session.prevInput = u;
    }
    function $s(i, a) {
      var u = i.session, f = a.pointers, p = f.length;
      u.firstInput || (u.firstInput = Rn(a)), p > 1 && !u.firstMultiple ? u.firstMultiple = Rn(a) : p === 1 && (u.firstMultiple = !1);
      var w = u.firstInput, b = u.firstMultiple, X = b ? b.center : w.center, j = a.center = Hn(f);
      a.timeStamp = T(), a.deltaTime = a.timeStamp - w.timeStamp, a.angle = nn(X, j), a.distance = Ct(X, j), Zs(u, a), a.offsetDirection = Zn(a.deltaX, a.deltaY);
      var ne = $n(a.deltaTime, a.deltaX, a.deltaY);
      a.overallVelocityX = ne.x, a.overallVelocityY = ne.y, a.overallVelocity = h(ne.x) > h(ne.y) ? ne.x : ne.y, a.scale = b ? Ys(b.pointers, f) : 1, a.rotation = b ? zs(b.pointers, f) : 0, a.maxPointers = u.prevInput ? a.pointers.length > u.prevInput.maxPointers ? a.pointers.length : u.prevInput.maxPointers : a.pointers.length, Ws(u, a);
      var Oe = i.element;
      H(a.srcEvent.target, Oe) && (Oe = a.srcEvent.target), a.target = Oe;
    }
    function Zs(i, a) {
      var u = a.center, f = i.offsetDelta || {}, p = i.prevDelta || {}, w = i.prevInput || {};
      (a.eventType === te || w.eventType === Y) && (p = i.prevDelta = {
        x: w.deltaX || 0,
        y: w.deltaY || 0
      }, f = i.offsetDelta = {
        x: u.x,
        y: u.y
      }), a.deltaX = p.x + (u.x - f.x), a.deltaY = p.y + (u.y - f.y);
    }
    function Ws(i, a) {
      var u = i.lastInterval || a, f = a.timeStamp - u.timeStamp, p, w, b, X;
      if (a.eventType != ie && (f > Us || u.velocity === s)) {
        var j = a.deltaX - u.deltaX, ne = a.deltaY - u.deltaY, Oe = $n(f, j, ne);
        w = Oe.x, b = Oe.y, p = h(Oe.x) > h(Oe.y) ? Oe.x : Oe.y, X = Zn(j, ne), i.lastInterval = a;
      } else
        p = u.velocity, w = u.velocityX, b = u.velocityY, X = u.direction;
      a.velocity = p, a.velocityX = w, a.velocityY = b, a.direction = X;
    }
    function Rn(i) {
      for (var a = [], u = 0; u < i.pointers.length; )
        a[u] = {
          clientX: d(i.pointers[u].clientX),
          clientY: d(i.pointers[u].clientY)
        }, u++;
      return {
        timeStamp: T(),
        pointers: a,
        center: Hn(a),
        deltaX: i.deltaX,
        deltaY: i.deltaY
      };
    }
    function Hn(i) {
      var a = i.length;
      if (a === 1)
        return {
          x: d(i[0].clientX),
          y: d(i[0].clientY)
        };
      for (var u = 0, f = 0, p = 0; p < a; )
        u += i[p].clientX, f += i[p].clientY, p++;
      return {
        x: d(u / a),
        y: d(f / a)
      };
    }
    function $n(i, a, u) {
      return {
        x: a / i || 0,
        y: u / i || 0
      };
    }
    function Zn(i, a) {
      return i === a ? Nt : h(i) >= h(a) ? i < 0 ? ot : lt : a < 0 ? ut : ct;
    }
    function Ct(i, a, u) {
      u || (u = Un);
      var f = a[u[0]] - i[u[0]], p = a[u[1]] - i[u[1]];
      return Math.sqrt(f * f + p * p);
    }
    function nn(i, a, u) {
      u || (u = Un);
      var f = a[u[0]] - i[u[0]], p = a[u[1]] - i[u[1]];
      return Math.atan2(p, f) * 180 / Math.PI;
    }
    function zs(i, a) {
      return nn(a[1], a[0], kt) + nn(i[1], i[0], kt);
    }
    function Ys(i, a) {
      return Ct(a[0], a[1], kt) / Ct(i[0], i[1], kt);
    }
    var qs = {
      mousedown: te,
      mousemove: Re,
      mouseup: Y
    }, Gs = "mousedown", Bs = "mousemove mouseup";
    function Dt() {
      this.evEl = Gs, this.evWin = Bs, this.pressed = !1, oe.apply(this, arguments);
    }
    N(Dt, oe, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(a) {
        var u = qs[a.type];
        u & te && a.button === 0 && (this.pressed = !0), u & Re && a.which !== 1 && (u = Y), this.pressed && (u & Y && (this.pressed = !1), this.callback(this.manager, u, {
          pointers: [a],
          changedPointers: [a],
          pointerType: tn,
          srcEvent: a
        }));
      }
    });
    var Js = {
      pointerdown: te,
      pointermove: Re,
      pointerup: Y,
      pointercancel: ie,
      pointerout: ie
    }, Xs = {
      2: at,
      3: Ps,
      4: tn,
      5: Ls
      // see https://twitter.com/jacobrossi/status/480596438489890816
    }, Wn = "pointerdown", zn = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Wn = "MSPointerDown", zn = "MSPointerMove MSPointerUp MSPointerCancel");
    function rn() {
      this.evEl = Wn, this.evWin = zn, oe.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    N(rn, oe, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(a) {
        var u = this.store, f = !1, p = a.type.toLowerCase().replace("ms", ""), w = Js[p], b = Xs[a.pointerType] || a.pointerType, X = b == at, j = $(u, a.pointerId, "pointerId");
        w & te && (a.button === 0 || X) ? j < 0 && (u.push(a), j = u.length - 1) : w & (Y | ie) && (f = !0), !(j < 0) && (u[j] = a, this.callback(this.manager, w, {
          pointers: u,
          changedPointers: [a],
          pointerType: b,
          srcEvent: a
        }), f && u.splice(j, 1));
      }
    });
    var js = {
      touchstart: te,
      touchmove: Re,
      touchend: Y,
      touchcancel: ie
    }, Qs = "touchstart", Ks = "touchstart touchmove touchend touchcancel";
    function Yn() {
      this.evTarget = Qs, this.evWin = Ks, this.started = !1, oe.apply(this, arguments);
    }
    N(Yn, oe, {
      handler: function(a) {
        var u = js[a.type];
        if (u === te && (this.started = !0), !!this.started) {
          var f = ei.call(this, a, u);
          u & (Y | ie) && f[0].length - f[1].length === 0 && (this.started = !1), this.callback(this.manager, u, {
            pointers: f[0],
            changedPointers: f[1],
            pointerType: at,
            srcEvent: a
          });
        }
      }
    });
    function ei(i, a) {
      var u = Ve(i.touches), f = Ve(i.changedTouches);
      return a & (Y | ie) && (u = Je(u.concat(f), "identifier", !0)), [u, f];
    }
    var ti = {
      touchstart: te,
      touchmove: Re,
      touchend: Y,
      touchcancel: ie
    }, ni = "touchstart touchmove touchend touchcancel";
    function xt() {
      this.evTarget = ni, this.targetIds = {}, oe.apply(this, arguments);
    }
    N(xt, oe, {
      handler: function(a) {
        var u = ti[a.type], f = ri.call(this, a, u);
        f && this.callback(this.manager, u, {
          pointers: f[0],
          changedPointers: f[1],
          pointerType: at,
          srcEvent: a
        });
      }
    });
    function ri(i, a) {
      var u = Ve(i.touches), f = this.targetIds;
      if (a & (te | Re) && u.length === 1)
        return f[u[0].identifier] = !0, [u, u];
      var p, w, b = Ve(i.changedTouches), X = [], j = this.target;
      if (w = u.filter(function(ne) {
        return H(ne.target, j);
      }), a === te)
        for (p = 0; p < w.length; )
          f[w[p].identifier] = !0, p++;
      for (p = 0; p < b.length; )
        f[b[p].identifier] && X.push(b[p]), a & (Y | ie) && delete f[b[p].identifier], p++;
      if (X.length)
        return [
          // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
          Je(w.concat(X), "identifier", !0),
          X
        ];
    }
    var si = 2500, qn = 25;
    function sn() {
      oe.apply(this, arguments);
      var i = k(this.handler, this);
      this.touch = new xt(this.manager, i), this.mouse = new Dt(this.manager, i), this.primaryTouch = null, this.lastTouches = [];
    }
    N(sn, oe, {
      /**
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */
      handler: function(a, u, f) {
        var p = f.pointerType == at, w = f.pointerType == tn;
        if (!(w && f.sourceCapabilities && f.sourceCapabilities.firesTouchEvents)) {
          if (p)
            ii.call(this, u, f);
          else if (w && ai.call(this, f))
            return;
          this.callback(a, u, f);
        }
      },
      /**
       * remove the event listeners
       */
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    function ii(i, a) {
      i & te ? (this.primaryTouch = a.changedPointers[0].identifier, Gn.call(this, a)) : i & (Y | ie) && Gn.call(this, a);
    }
    function Gn(i) {
      var a = i.changedPointers[0];
      if (a.identifier === this.primaryTouch) {
        var u = { x: a.clientX, y: a.clientY };
        this.lastTouches.push(u);
        var f = this.lastTouches, p = function() {
          var w = f.indexOf(u);
          w > -1 && f.splice(w, 1);
        };
        setTimeout(p, si);
      }
    }
    function ai(i) {
      for (var a = i.srcEvent.clientX, u = i.srcEvent.clientY, f = 0; f < this.lastTouches.length; f++) {
        var p = this.lastTouches[f], w = Math.abs(a - p.x), b = Math.abs(u - p.y);
        if (w <= qn && b <= qn)
          return !0;
      }
      return !1;
    }
    var Bn = be(o.style, "touchAction"), Jn = Bn !== s, Xn = "compute", jn = "auto", an = "manipulation", $e = "none", dt = "pan-x", ft = "pan-y", Vt = li();
    function on(i, a) {
      this.manager = i, this.set(a);
    }
    on.prototype = {
      /**
       * set the touchAction value on the element or enable the polyfill
       * @param {String} value
       */
      set: function(i) {
        i == Xn && (i = this.compute()), Jn && this.manager.element.style && Vt[i] && (this.manager.element.style[Bn] = i), this.actions = i.toLowerCase().trim();
      },
      /**
       * just re-set the touchAction value
       */
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      /**
       * compute the value for the touchAction property based on the recognizer's settings
       * @returns {String} value
       */
      compute: function() {
        var i = [];
        return v(this.manager.recognizers, function(a) {
          I(a.options.enable, [a]) && (i = i.concat(a.getTouchAction()));
        }), oi(i.join(" "));
      },
      /**
       * this method is called on each input cycle and provides the preventing of the browser behavior
       * @param {Object} input
       */
      preventDefaults: function(i) {
        var a = i.srcEvent, u = i.offsetDirection;
        if (this.manager.session.prevented) {
          a.preventDefault();
          return;
        }
        var f = this.actions, p = se(f, $e) && !Vt[$e], w = se(f, ft) && !Vt[ft], b = se(f, dt) && !Vt[dt];
        if (p) {
          var X = i.pointers.length === 1, j = i.distance < 2, ne = i.deltaTime < 250;
          if (X && j && ne)
            return;
        }
        if (!(b && w) && (p || w && u & Ee || b && u & He))
          return this.preventSrc(a);
      },
      /**
       * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
       * @param {Object} srcEvent
       */
      preventSrc: function(i) {
        this.manager.session.prevented = !0, i.preventDefault();
      }
    };
    function oi(i) {
      if (se(i, $e))
        return $e;
      var a = se(i, dt), u = se(i, ft);
      return a && u ? $e : a || u ? a ? dt : ft : se(i, an) ? an : jn;
    }
    function li() {
      if (!Jn)
        return !1;
      var i = {}, a = e.CSS && e.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(u) {
        i[u] = a ? e.CSS.supports("touch-action", u) : !0;
      }), i;
    }
    var bt = 1, le = 2, Xe = 4, Fe = 8, Me = Fe, ht = 16, Se = 32;
    function Ne(i) {
      this.options = g({}, this.defaults, i || {}), this.id = bs(), this.manager = null, this.options.enable = C(this.options.enable, !0), this.state = bt, this.simultaneous = {}, this.requireFail = [];
    }
    Ne.prototype = {
      /**
       * @virtual
       * @type {Object}
       */
      defaults: {},
      /**
       * set options
       * @param {Object} options
       * @return {Recognizer}
       */
      set: function(i) {
        return g(this.options, i), this.manager && this.manager.touchAction.update(), this;
      },
      /**
       * recognize simultaneous with an other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      recognizeWith: function(i) {
        if (S(i, "recognizeWith", this))
          return this;
        var a = this.simultaneous;
        return i = Ft(i, this), a[i.id] || (a[i.id] = i, i.recognizeWith(this)), this;
      },
      /**
       * drop the simultaneous link. it doesnt remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRecognizeWith: function(i) {
        return S(i, "dropRecognizeWith", this) ? this : (i = Ft(i, this), delete this.simultaneous[i.id], this);
      },
      /**
       * recognizer can only run when an other is failing
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      requireFailure: function(i) {
        if (S(i, "requireFailure", this))
          return this;
        var a = this.requireFail;
        return i = Ft(i, this), $(a, i) === -1 && (a.push(i), i.requireFailure(this)), this;
      },
      /**
       * drop the requireFailure link. it does not remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRequireFailure: function(i) {
        if (S(i, "dropRequireFailure", this))
          return this;
        i = Ft(i, this);
        var a = $(this.requireFail, i);
        return a > -1 && this.requireFail.splice(a, 1), this;
      },
      /**
       * has require failures boolean
       * @returns {boolean}
       */
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      /**
       * if the recognizer can recognize simultaneous with an other recognizer
       * @param {Recognizer} otherRecognizer
       * @returns {Boolean}
       */
      canRecognizeWith: function(i) {
        return !!this.simultaneous[i.id];
      },
      /**
       * You should use `tryEmit` instead of `emit` directly to check
       * that all the needed recognizers has failed before emitting.
       * @param {Object} input
       */
      emit: function(i) {
        var a = this, u = this.state;
        function f(p) {
          a.manager.emit(p, i);
        }
        u < Fe && f(a.options.event + Qn(u)), f(a.options.event), i.additionalEvent && f(i.additionalEvent), u >= Fe && f(a.options.event + Qn(u));
      },
      /**
       * Check that all the require failure recognizers has failed,
       * if true, it emits a gesture event,
       * otherwise, setup the state to FAILED.
       * @param {Object} input
       */
      tryEmit: function(i) {
        if (this.canEmit())
          return this.emit(i);
        this.state = Se;
      },
      /**
       * can we emit?
       * @returns {boolean}
       */
      canEmit: function() {
        for (var i = 0; i < this.requireFail.length; ) {
          if (!(this.requireFail[i].state & (Se | bt)))
            return !1;
          i++;
        }
        return !0;
      },
      /**
       * update the recognizer
       * @param {Object} inputData
       */
      recognize: function(i) {
        var a = g({}, i);
        if (!I(this.options.enable, [this, a])) {
          this.reset(), this.state = Se;
          return;
        }
        this.state & (Me | ht | Se) && (this.state = bt), this.state = this.process(a), this.state & (le | Xe | Fe | ht) && this.tryEmit(a);
      },
      /**
       * return the state of the recognizer
       * the actual recognizing happens in this method
       * @virtual
       * @param {Object} inputData
       * @returns {Const} STATE
       */
      process: function(i) {
      },
      // jshint ignore:line
      /**
       * return the preferred touch-action
       * @virtual
       * @returns {Array}
       */
      getTouchAction: function() {
      },
      /**
       * called when the gesture isn't allowed to recognize
       * like when another is being recognized or it is disabled
       * @virtual
       */
      reset: function() {
      }
    };
    function Qn(i) {
      return i & ht ? "cancel" : i & Fe ? "end" : i & Xe ? "move" : i & le ? "start" : "";
    }
    function Kn(i) {
      return i == ct ? "down" : i == ut ? "up" : i == ot ? "left" : i == lt ? "right" : "";
    }
    function Ft(i, a) {
      var u = a.manager;
      return u ? u.get(i) : i;
    }
    function me() {
      Ne.apply(this, arguments);
    }
    N(me, Ne, {
      /**
       * @namespace
       * @memberof AttrRecognizer
       */
      defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
      },
      /**
       * Used to check if it the recognizer receives valid input, like input.distance > 10.
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {Boolean} recognized
       */
      attrTest: function(i) {
        var a = this.options.pointers;
        return a === 0 || i.pointers.length === a;
      },
      /**
       * Process the input and return the state for the recognizer
       * @memberof AttrRecognizer
       * @param {Object} input
       * @returns {*} State
       */
      process: function(i) {
        var a = this.state, u = i.eventType, f = a & (le | Xe), p = this.attrTest(i);
        return f && (u & ie || !p) ? a | ht : f || p ? u & Y ? a | Fe : a & le ? a | Xe : le : Se;
      }
    });
    function _t() {
      me.apply(this, arguments), this.pX = null, this.pY = null;
    }
    N(_t, me, {
      /**
       * @namespace
       * @memberof PanRecognizer
       */
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Ln
      },
      getTouchAction: function() {
        var i = this.options.direction, a = [];
        return i & Ee && a.push(ft), i & He && a.push(dt), a;
      },
      directionTest: function(i) {
        var a = this.options, u = !0, f = i.distance, p = i.direction, w = i.deltaX, b = i.deltaY;
        return p & a.direction || (a.direction & Ee ? (p = w === 0 ? Nt : w < 0 ? ot : lt, u = w != this.pX, f = Math.abs(i.deltaX)) : (p = b === 0 ? Nt : b < 0 ? ut : ct, u = b != this.pY, f = Math.abs(i.deltaY))), i.direction = p, u && f > a.threshold && p & a.direction;
      },
      attrTest: function(i) {
        return me.prototype.attrTest.call(this, i) && (this.state & le || !(this.state & le) && this.directionTest(i));
      },
      emit: function(i) {
        this.pX = i.deltaX, this.pY = i.deltaY;
        var a = Kn(i.direction);
        a && (i.additionalEvent = this.options.event + a), this._super.emit.call(this, i);
      }
    });
    function ln() {
      me.apply(this, arguments);
    }
    N(ln, me, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [$e];
      },
      attrTest: function(i) {
        return this._super.attrTest.call(this, i) && (Math.abs(i.scale - 1) > this.options.threshold || this.state & le);
      },
      emit: function(i) {
        if (i.scale !== 1) {
          var a = i.scale < 1 ? "in" : "out";
          i.additionalEvent = this.options.event + a;
        }
        this._super.emit.call(this, i);
      }
    });
    function un() {
      Ne.apply(this, arguments), this._timer = null, this._input = null;
    }
    N(un, Ne, {
      /**
       * @namespace
       * @memberof PressRecognizer
       */
      defaults: {
        event: "press",
        pointers: 1,
        time: 251,
        // minimal time of the pointer to be pressed
        threshold: 9
        // a minimal movement is ok, but keep it low
      },
      getTouchAction: function() {
        return [jn];
      },
      process: function(i) {
        var a = this.options, u = i.pointers.length === a.pointers, f = i.distance < a.threshold, p = i.deltaTime > a.time;
        if (this._input = i, !f || !u || i.eventType & (Y | ie) && !p)
          this.reset();
        else if (i.eventType & te)
          this.reset(), this._timer = O(function() {
            this.state = Me, this.tryEmit();
          }, a.time, this);
        else if (i.eventType & Y)
          return Me;
        return Se;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(i) {
        this.state === Me && (i && i.eventType & Y ? this.manager.emit(this.options.event + "up", i) : (this._input.timeStamp = T(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function cn() {
      me.apply(this, arguments);
    }
    N(cn, me, {
      /**
       * @namespace
       * @memberof RotateRecognizer
       */
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [$e];
      },
      attrTest: function(i) {
        return this._super.attrTest.call(this, i) && (Math.abs(i.rotation) > this.options.threshold || this.state & le);
      }
    });
    function dn() {
      me.apply(this, arguments);
    }
    N(dn, me, {
      /**
       * @namespace
       * @memberof SwipeRecognizer
       */
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: Ee | He,
        pointers: 1
      },
      getTouchAction: function() {
        return _t.prototype.getTouchAction.call(this);
      },
      attrTest: function(i) {
        var a = this.options.direction, u;
        return a & (Ee | He) ? u = i.overallVelocity : a & Ee ? u = i.overallVelocityX : a & He && (u = i.overallVelocityY), this._super.attrTest.call(this, i) && a & i.offsetDirection && i.distance > this.options.threshold && i.maxPointers == this.options.pointers && h(u) > this.options.velocity && i.eventType & Y;
      },
      emit: function(i) {
        var a = Kn(i.offsetDirection);
        a && this.manager.emit(this.options.event + a, i), this.manager.emit(this.options.event, i);
      }
    });
    function At() {
      Ne.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    N(At, Ne, {
      /**
       * @namespace
       * @memberof PinchRecognizer
       */
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        // max time between the multi-tap taps
        time: 250,
        // max time of the pointer to be down (like finger on the screen)
        threshold: 9,
        // a minimal movement is ok, but keep it low
        posThreshold: 10
        // a multi-tap can be a bit off the initial position
      },
      getTouchAction: function() {
        return [an];
      },
      process: function(i) {
        var a = this.options, u = i.pointers.length === a.pointers, f = i.distance < a.threshold, p = i.deltaTime < a.time;
        if (this.reset(), i.eventType & te && this.count === 0)
          return this.failTimeout();
        if (f && p && u) {
          if (i.eventType != Y)
            return this.failTimeout();
          var w = this.pTime ? i.timeStamp - this.pTime < a.interval : !0, b = !this.pCenter || Ct(this.pCenter, i.center) < a.posThreshold;
          this.pTime = i.timeStamp, this.pCenter = i.center, !b || !w ? this.count = 1 : this.count += 1, this._input = i;
          var X = this.count % a.taps;
          if (X === 0)
            return this.hasRequireFailures() ? (this._timer = O(function() {
              this.state = Me, this.tryEmit();
            }, a.interval, this), le) : Me;
        }
        return Se;
      },
      failTimeout: function() {
        return this._timer = O(function() {
          this.state = Se;
        }, this.options.interval, this), Se;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == Me && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function ke(i, a) {
      return a = a || {}, a.recognizers = C(a.recognizers, ke.defaults.preset), new fn(i, a);
    }
    ke.VERSION = "2.0.7", ke.defaults = {
      /**
       * set if DOM events are being triggered.
       * But this is slower and unused by simple implementations, so disabled by default.
       * @type {Boolean}
       * @default false
       */
      domEvents: !1,
      /**
       * The value for the touchAction property/fallback.
       * When set to `compute` it will magically set the correct value based on the added recognizers.
       * @type {String}
       * @default compute
       */
      touchAction: Xn,
      /**
       * @type {Boolean}
       * @default true
       */
      enable: !0,
      /**
       * EXPERIMENTAL FEATURE -- can be removed/changed
       * Change the parent input target element.
       * If Null, then it is being set the to main element.
       * @type {Null|EventTarget}
       * @default null
       */
      inputTarget: null,
      /**
       * force an input class
       * @type {Null|Function}
       * @default null
       */
      inputClass: null,
      /**
       * Default recognizer setup when calling `Hammer()`
       * When creating a new Manager these will be skipped.
       * @type {Array}
       */
      preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [cn, { enable: !1 }],
        [ln, { enable: !1 }, ["rotate"]],
        [dn, { direction: Ee }],
        [_t, { direction: Ee }, ["swipe"]],
        [At],
        [At, { event: "doubletap", taps: 2 }, ["tap"]],
        [un]
      ],
      /**
       * Some CSS properties can be used to improve the working of Hammer.
       * Add them to this method and they will be set when creating a new Manager.
       * @namespace
       */
      cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: "none",
        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: "none",
        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: "none",
        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: "none",
        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: "none",
        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var ui = 1, er = 2;
    function fn(i, a) {
      this.options = g({}, ke.defaults, a || {}), this.options.inputTarget = this.options.inputTarget || i, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = i, this.input = Rs(this), this.touchAction = new on(this, this.options.touchAction), tr(this, !0), v(this.options.recognizers, function(u) {
        var f = this.add(new u[0](u[1]));
        u[2] && f.recognizeWith(u[2]), u[3] && f.requireFailure(u[3]);
      }, this);
    }
    fn.prototype = {
      /**
       * set options
       * @param {Object} options
       * @returns {Manager}
       */
      set: function(i) {
        return g(this.options, i), i.touchAction && this.touchAction.update(), i.inputTarget && (this.input.destroy(), this.input.target = i.inputTarget, this.input.init()), this;
      },
      /**
       * stop recognizing for this session.
       * This session will be discarded, when a new [input]start event is fired.
       * When forced, the recognizer cycle is stopped immediately.
       * @param {Boolean} [force]
       */
      stop: function(i) {
        this.session.stopped = i ? er : ui;
      },
      /**
       * run the recognizers!
       * called by the inputHandler function on every movement of the pointers (touches)
       * it walks through all the recognizers and tries to detect the gesture that is being made
       * @param {Object} inputData
       */
      recognize: function(i) {
        var a = this.session;
        if (!a.stopped) {
          this.touchAction.preventDefaults(i);
          var u, f = this.recognizers, p = a.curRecognizer;
          (!p || p && p.state & Me) && (p = a.curRecognizer = null);
          for (var w = 0; w < f.length; )
            u = f[w], a.stopped !== er && // 1
            (!p || u == p || // 2
            u.canRecognizeWith(p)) ? u.recognize(i) : u.reset(), !p && u.state & (le | Xe | Fe) && (p = a.curRecognizer = u), w++;
        }
      },
      /**
       * get a recognizer by its event name.
       * @param {Recognizer|String} recognizer
       * @returns {Recognizer|Null}
       */
      get: function(i) {
        if (i instanceof Ne)
          return i;
        for (var a = this.recognizers, u = 0; u < a.length; u++)
          if (a[u].options.event == i)
            return a[u];
        return null;
      },
      /**
       * add a recognizer to the manager
       * existing recognizers with the same event name will be removed
       * @param {Recognizer} recognizer
       * @returns {Recognizer|Manager}
       */
      add: function(i) {
        if (S(i, "add", this))
          return this;
        var a = this.get(i.options.event);
        return a && this.remove(a), this.recognizers.push(i), i.manager = this, this.touchAction.update(), i;
      },
      /**
       * remove a recognizer by name or instance
       * @param {Recognizer|String} recognizer
       * @returns {Manager}
       */
      remove: function(i) {
        if (S(i, "remove", this))
          return this;
        if (i = this.get(i), i) {
          var a = this.recognizers, u = $(a, i);
          u !== -1 && (a.splice(u, 1), this.touchAction.update());
        }
        return this;
      },
      /**
       * bind event
       * @param {String} events
       * @param {Function} handler
       * @returns {EventEmitter} this
       */
      on: function(i, a) {
        if (i !== s && a !== s) {
          var u = this.handlers;
          return v(he(i), function(f) {
            u[f] = u[f] || [], u[f].push(a);
          }), this;
        }
      },
      /**
       * unbind event, leave emit blank to remove all handlers
       * @param {String} events
       * @param {Function} [handler]
       * @returns {EventEmitter} this
       */
      off: function(i, a) {
        if (i !== s) {
          var u = this.handlers;
          return v(he(i), function(f) {
            a ? u[f] && u[f].splice($(u[f], a), 1) : delete u[f];
          }), this;
        }
      },
      /**
       * emit event to the listeners
       * @param {String} event
       * @param {Object} data
       */
      emit: function(i, a) {
        this.options.domEvents && ci(i, a);
        var u = this.handlers[i] && this.handlers[i].slice();
        if (!(!u || !u.length)) {
          a.type = i, a.preventDefault = function() {
            a.srcEvent.preventDefault();
          };
          for (var f = 0; f < u.length; )
            u[f](a), f++;
        }
      },
      /**
       * destroy the manager and unbinds all events
       * it doesn't unbind dom events, that is the user own responsibility
       */
      destroy: function() {
        this.element && tr(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function tr(i, a) {
      var u = i.element;
      if (u.style) {
        var f;
        v(i.options.cssProps, function(p, w) {
          f = be(u.style, w), a ? (i.oldCssProps[f] = u.style[f], u.style[f] = p) : u.style[f] = i.oldCssProps[f] || "";
        }), a || (i.oldCssProps = {});
      }
    }
    function ci(i, a) {
      var u = t.createEvent("Event");
      u.initEvent(i, !0, !0), u.gesture = a, a.target.dispatchEvent(u);
    }
    g(ke, {
      INPUT_START: te,
      INPUT_MOVE: Re,
      INPUT_END: Y,
      INPUT_CANCEL: ie,
      STATE_POSSIBLE: bt,
      STATE_BEGAN: le,
      STATE_CHANGED: Xe,
      STATE_ENDED: Fe,
      STATE_RECOGNIZED: Me,
      STATE_CANCELLED: ht,
      STATE_FAILED: Se,
      DIRECTION_NONE: Nt,
      DIRECTION_LEFT: ot,
      DIRECTION_RIGHT: lt,
      DIRECTION_UP: ut,
      DIRECTION_DOWN: ct,
      DIRECTION_HORIZONTAL: Ee,
      DIRECTION_VERTICAL: He,
      DIRECTION_ALL: Ln,
      Manager: fn,
      Input: oe,
      TouchAction: on,
      TouchInput: xt,
      MouseInput: Dt,
      PointerEventInput: rn,
      TouchMouseInput: sn,
      SingleTouchInput: Yn,
      Recognizer: Ne,
      AttrRecognizer: me,
      Tap: At,
      Pan: _t,
      Swipe: dn,
      Pinch: ln,
      Rotate: cn,
      Press: un,
      on: J,
      off: V,
      each: v,
      merge: E,
      extend: m,
      assign: g,
      inherit: N,
      bindFn: k,
      prefixed: be
    });
    var di = typeof e < "u" ? e : typeof self < "u" ? self : {};
    di.Hammer = ke, typeof s == "function" && s.amd ? s(function() {
      return ke;
    }) : n.exports ? n.exports = ke : e[r] = ke;
  })(window, document, "Hammer");
})(Zi);
const ar = wn, Wi = { class: "slider-component" }, zi = { class: "slider-display-value" }, al = /* @__PURE__ */ Ie({
  __name: "SliderComponent",
  props: {
    modelValue: null,
    displayValue: null,
    min: { default: 0 },
    max: { default: 100 },
    steps: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = U(0);
    U(0);
    const s = U(0), l = U(0), o = U(!0);
    mi({
      right: 0,
      left: 0
    });
    const c = U(null), d = U(null), h = Z(() => {
      if (t.steps && t.steps.length > 0) {
        let m = null;
        for (let E = 0; E < t.steps.length; E++)
          (m === null || m > t.steps[E]) && (m = t.steps[E]);
        return m ?? 0;
      }
      return t.min;
    }), T = Z(() => {
      if (t.steps && t.steps.length > 0) {
        let m = null;
        for (let E = 0; E < t.steps.length; E++)
          (m === null || m < t.steps[E]) && (m = t.steps[E]);
        return m ?? 0;
      }
      return t.max;
    }), O = Z(() => {
      let m = h.value + s.value * (T.value - h.value);
      if (t.steps && t.steps.length > 0) {
        let E = null, N = null;
        for (let k = 0; k < t.steps.length; k++)
          (E === null || N == null || N > Math.abs(t.steps[k] - m)) && (E = t.steps[k], N = Math.abs(t.steps[k] - m));
        return E ?? 0;
      }
      return m;
    }), S = Z(() => t.steps && t.steps.length > 0 && !o.value ? (O.value - h.value) / (T.value - h.value) * l.value : s.value * l.value);
    Et(() => {
      v(), M(), window.addEventListener("resize", () => {
        var E, N;
        !c.value || !d.value || ((E = c.value) == null ? void 0 : E.getBoundingClientRect().width) > 0 && ((N = d.value) == null ? void 0 : N.getBoundingClientRect().width) > 0 && v();
      });
      let m = t.modelValue;
      isNaN(m) && (m = 0), g((m - h.value) / (T.value - h.value) * l.value);
    }), zt(
      () => r.value,
      () => {
        e("update:modelValue", O.value);
      }
    ), zt(
      () => t.modelValue,
      () => {
        g(
          (t.modelValue - h.value) / (T.value - h.value) * l.value
        );
      }
    );
    function v() {
      var m, E;
      !c.value || !d.value || (l.value = ((m = c.value) == null ? void 0 : m.getBoundingClientRect().width) - ((E = d.value) == null ? void 0 : E.getBoundingClientRect().width), g(
        (t.modelValue - h.value) / (T.value - h.value) * l.value
      ));
    }
    function M() {
      var V;
      let m = 0, E = 0, N = 0;
      (V = d.value) == null || V.addEventListener("mousedown", (H) => {
        m = H.pageX, N = r.value, document.addEventListener("mouseup", I), document.addEventListener("mousemove", k);
      });
      let k = (H) => {
        o.value = !0, E = H.pageX - m, g(N + E);
      }, I = () => {
        o.value = !1, document.removeEventListener("mouseup", I), document.removeEventListener("mousemove", k);
      };
      if (!d.value)
        return;
      let C = new ar.Manager(d.value), J = new ar.Pan();
      C.add(J), C.on("panstart", (H) => {
        m = H.center.x, N = r.value;
      }), C.on("pan", (H) => {
        o.value = !0, E = H.center.x - m, g(N + E);
      }), C.on("panend", () => {
        o.value = !1;
      });
    }
    function g(m) {
      var E, N, k, I;
      !c.value || !d.value || (r.value = m, r.value < 0 && (r.value = 0), r.value > ((E = c.value) == null ? void 0 : E.getBoundingClientRect().width) - ((N = d.value) == null ? void 0 : N.getBoundingClientRect().width) && (r.value = ((k = c.value) == null ? void 0 : k.getBoundingClientRect().width) - ((I = d.value) == null ? void 0 : I.getBoundingClientRect().width)), s.value = r.value / l.value);
    }
    return (m, E) => (x(), F("div", Wi, [
      _("div", {
        class: "slider",
        ref_key: "slider",
        ref: c
      }, [
        _("div", {
          class: "slider-start",
          style: nr({ width: A(S) + "px" })
        }, null, 4),
        _("div", {
          class: fe(["slider-dot", { moving: o.value }]),
          ref_key: "dot",
          ref: d,
          style: nr({ transform: "translateX(" + A(S) + "px)" })
        }, [
          _("p", zi, B(n.displayValue), 1)
        ], 6)
      ], 512)
    ]));
  }
});
class Be extends Error {
}
class Yi extends Be {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class qi extends Be {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Gi extends Be {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class yt extends Be {
}
class Fr extends Be {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ce extends Be {
}
class _e extends Be {
  constructor() {
    super("Zone is an abstract class");
  }
}
const y = "numeric", we = "short", ae = "long", Yt = {
  year: y,
  month: y,
  day: y
}, _r = {
  year: y,
  month: we,
  day: y
}, Bi = {
  year: y,
  month: we,
  day: y,
  weekday: we
}, Ar = {
  year: y,
  month: ae,
  day: y
}, Pr = {
  year: y,
  month: ae,
  day: y,
  weekday: ae
}, Lr = {
  hour: y,
  minute: y
}, Ur = {
  hour: y,
  minute: y,
  second: y
}, Rr = {
  hour: y,
  minute: y,
  second: y,
  timeZoneName: we
}, Hr = {
  hour: y,
  minute: y,
  second: y,
  timeZoneName: ae
}, $r = {
  hour: y,
  minute: y,
  hourCycle: "h23"
}, Zr = {
  hour: y,
  minute: y,
  second: y,
  hourCycle: "h23"
}, Wr = {
  hour: y,
  minute: y,
  second: y,
  hourCycle: "h23",
  timeZoneName: we
}, zr = {
  hour: y,
  minute: y,
  second: y,
  hourCycle: "h23",
  timeZoneName: ae
}, Yr = {
  year: y,
  month: y,
  day: y,
  hour: y,
  minute: y
}, qr = {
  year: y,
  month: y,
  day: y,
  hour: y,
  minute: y,
  second: y
}, Gr = {
  year: y,
  month: we,
  day: y,
  hour: y,
  minute: y
}, Br = {
  year: y,
  month: we,
  day: y,
  hour: y,
  minute: y,
  second: y
}, Ji = {
  year: y,
  month: we,
  day: y,
  weekday: we,
  hour: y,
  minute: y
}, Jr = {
  year: y,
  month: ae,
  day: y,
  hour: y,
  minute: y,
  timeZoneName: we
}, Xr = {
  year: y,
  month: ae,
  day: y,
  hour: y,
  minute: y,
  second: y,
  timeZoneName: we
}, jr = {
  year: y,
  month: ae,
  day: y,
  weekday: ae,
  hour: y,
  minute: y,
  timeZoneName: ae
}, Qr = {
  year: y,
  month: ae,
  day: y,
  weekday: ae,
  hour: y,
  minute: y,
  second: y,
  timeZoneName: ae
};
class St {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new _e();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new _e();
  }
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new _e();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, t) {
    throw new _e();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    throw new _e();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new _e();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new _e();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new _e();
  }
}
let hn = null;
class Xt extends St {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return hn === null && (hn = new Xt()), hn;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: r }) {
    return es(e, t, r);
  }
  /** @override **/
  formatOffset(e, t) {
    return wt(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
let Zt = {};
function Xi(n) {
  return Zt[n] || (Zt[n] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: n,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Zt[n];
}
const ji = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Qi(n, e) {
  const t = n.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, s, l, o, c, d, h, T] = r;
  return [o, s, l, c, d, h, T];
}
function Ki(n, e) {
  const t = n.formatToParts(e), r = [];
  for (let s = 0; s < t.length; s++) {
    const { type: l, value: o } = t[s], c = ji[l];
    l === "era" ? r[c] = o : P(c) || (r[c] = parseInt(o, 10));
  }
  return r;
}
let Pt = {};
class xe extends St {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Pt[e] || (Pt[e] = new xe(e)), Pt[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Pt = {}, Zt = {};
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = xe.isValidZone(e);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: r }) {
    return es(e, t, r, this.name);
  }
  /** @override **/
  formatOffset(e, t) {
    return wt(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    const t = new Date(e);
    if (isNaN(t))
      return NaN;
    const r = Xi(this.name);
    let [s, l, o, c, d, h, T] = r.formatToParts ? Ki(r, t) : Qi(r, t);
    c === "BC" && (s = -Math.abs(s) + 1);
    const S = xn({
      year: s,
      month: l,
      day: o,
      hour: d === 24 ? 0 : d,
      minute: h,
      second: T,
      millisecond: 0
    });
    let v = +t;
    const M = v % 1e3;
    return v -= M >= 0 ? M : 1e3 + M, (S - v) / (60 * 1e3);
  }
  /** @override **/
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this.valid;
  }
}
let or = {};
function ea(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = or[t];
  return r || (r = new Intl.ListFormat(n, e), or[t] = r), r;
}
let En = {};
function Sn(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = En[t];
  return r || (r = new Intl.DateTimeFormat(n, e), En[t] = r), r;
}
let On = {};
function ta(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = On[t];
  return r || (r = new Intl.NumberFormat(n, e), On[t] = r), r;
}
let In = {};
function na(n, e = {}) {
  const { base: t, ...r } = e, s = JSON.stringify([n, r]);
  let l = In[s];
  return l || (l = new Intl.RelativeTimeFormat(n, e), In[s] = l), l;
}
let gt = null;
function ra() {
  return gt || (gt = new Intl.DateTimeFormat().resolvedOptions().locale, gt);
}
function sa(n) {
  const e = n.indexOf("-x-");
  e !== -1 && (n = n.substring(0, e));
  const t = n.indexOf("-u-");
  if (t === -1)
    return [n];
  {
    let r, s;
    try {
      r = Sn(n).resolvedOptions(), s = n;
    } catch {
      const d = n.substring(0, t);
      r = Sn(d).resolvedOptions(), s = d;
    }
    const { numberingSystem: l, calendar: o } = r;
    return [s, l, o];
  }
}
function ia(n, e, t) {
  return (t || e) && (n.includes("-u-") || (n += "-u"), t && (n += `-ca-${t}`), e && (n += `-nu-${e}`)), n;
}
function aa(n) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const r = D.utc(2016, t, 1);
    e.push(n(r));
  }
  return e;
}
function oa(n) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const r = D.utc(2016, 11, 13 + t);
    e.push(n(r));
  }
  return e;
}
function Lt(n, e, t, r, s) {
  const l = n.listingMode(t);
  return l === "error" ? null : l === "en" ? r(e) : s(e);
}
function la(n) {
  return n.numberingSystem && n.numberingSystem !== "latn" ? !1 : n.numberingSystem === "latn" || !n.locale || n.locale.startsWith("en") || new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem === "latn";
}
class ua {
  constructor(e, t, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: s, floor: l, ...o } = r;
    if (!t || Object.keys(o).length > 0) {
      const c = { useGrouping: !1, ...r };
      r.padTo > 0 && (c.minimumIntegerDigits = r.padTo), this.inf = ta(e, c);
    }
  }
  format(e) {
    if (this.inf) {
      const t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(e) : Dn(e, 3);
      return G(t, this.padTo);
    }
  }
}
class ca {
  constructor(e, t, r) {
    this.opts = r, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const o = -1 * (e.offset / 60), c = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
      e.offset !== 0 && xe.create(c).valid ? (s = c, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const l = { ...this.opts };
    l.timeZone = l.timeZone || s, this.dtf = Sn(t, l);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((t) => {
      if (t.type === "timeZoneName") {
        const r = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...t,
          value: r
        };
      } else
        return t;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class da {
  constructor(e, t, r) {
    this.opts = { style: "long", ...r }, !t && Kr() && (this.rtf = na(e, r));
  }
  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : Ca(t, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
class W {
  static fromOpts(e) {
    return W.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
  }
  static create(e, t, r, s = !1) {
    const l = e || q.defaultLocale, o = l || (s ? "en-US" : ra()), c = t || q.defaultNumberingSystem, d = r || q.defaultOutputCalendar;
    return new W(o, c, d, l);
  }
  static resetCache() {
    gt = null, En = {}, On = {}, In = {};
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    return W.create(e, t, r);
  }
  constructor(e, t, r, s) {
    const [l, o, c] = sa(e);
    this.locale = l, this.numberingSystem = t || o || null, this.outputCalendar = r || c || null, this.intl = ia(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = la(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : W.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, t = !1, r = !0) {
    return Lt(this, e, r, rs, () => {
      const s = t ? { month: e, day: "numeric" } : { month: e }, l = t ? "format" : "standalone";
      return this.monthsCache[l][e] || (this.monthsCache[l][e] = aa((o) => this.extract(o, s, "month"))), this.monthsCache[l][e];
    });
  }
  weekdays(e, t = !1, r = !0) {
    return Lt(this, e, r, as, () => {
      const s = t ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, l = t ? "format" : "standalone";
      return this.weekdaysCache[l][e] || (this.weekdaysCache[l][e] = oa(
        (o) => this.extract(o, s, "weekday")
      )), this.weekdaysCache[l][e];
    });
  }
  meridiems(e = !0) {
    return Lt(
      this,
      void 0,
      e,
      () => os,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [D.utc(2016, 11, 13, 9), D.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, t, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e, t = !0) {
    return Lt(this, e, t, ls, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [D.utc(-40, 1, 1), D.utc(2017, 1, 1)].map(
        (s) => this.extract(s, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, t, r) {
    const s = this.dtFormatter(e, t), l = s.formatToParts(), o = l.find((c) => c.type.toLowerCase() === r);
    return o ? o.value : null;
  }
  numberFormatter(e = {}) {
    return new ua(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new ca(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new da(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return ea(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let mn = null;
class re extends St {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return mn === null && (mn = new re(0)), mn;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? re.utcInstance : new re(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new re(Qt(t[1], t[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /** @override **/
  get type() {
    return "fixed";
  }
  /** @override **/
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${wt(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${wt(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, t) {
    return wt(this.fixed, t);
  }
  /** @override **/
  get isUniversal() {
    return !0;
  }
  /** @override **/
  offset() {
    return this.fixed;
  }
  /** @override **/
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
class fa extends St {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function Le(n, e) {
  if (P(n) || n === null)
    return e;
  if (n instanceof St)
    return n;
  if (ha(n)) {
    const t = n.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? Xt.instance : t === "utc" || t === "gmt" ? re.utcInstance : re.parseSpecifier(t) || xe.create(n);
  } else
    return Ge(n) ? re.instance(n) : typeof n == "object" && n.offset && typeof n.offset == "number" ? n : new fa(n);
}
let lr = () => Date.now(), ur = "system", cr = null, dr = null, fr = null, hr = 60, mr;
class q {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return lr;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    lr = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    ur = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Le(ur, Xt.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return cr;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    cr = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return dr;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    dr = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return fr;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    fr = e;
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return hr;
  }
  /**
   * Set the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // cut-off year is 0, so all 'yy' are interpretted as current century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 1949; '50' -> 2050
   * @example Settings.twoDigitCutoffYear = 1950 // interpretted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpretted as 50
   */
  static set twoDigitCutoffYear(e) {
    hr = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return mr;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    mr = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    W.resetCache(), xe.resetCache();
  }
}
function P(n) {
  return typeof n > "u";
}
function Ge(n) {
  return typeof n == "number";
}
function jt(n) {
  return typeof n == "number" && n % 1 === 0;
}
function ha(n) {
  return typeof n == "string";
}
function ma(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function Kr() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function pa(n) {
  return Array.isArray(n) ? n : [n];
}
function pr(n, e, t) {
  if (n.length !== 0)
    return n.reduce((r, s) => {
      const l = [e(s), s];
      return r && t(r[0], l[0]) === r[0] ? r : l;
    }, null)[1];
}
function va(n, e) {
  return e.reduce((t, r) => (t[r] = n[r], t), {});
}
function tt(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Ce(n, e, t) {
  return jt(n) && n >= e && n <= t;
}
function ya(n, e) {
  return n - e * Math.floor(n / e);
}
function G(n, e = 2) {
  const t = n < 0;
  let r;
  return t ? r = "-" + ("" + -n).padStart(e, "0") : r = ("" + n).padStart(e, "0"), r;
}
function Pe(n) {
  if (!(P(n) || n === null || n === ""))
    return parseInt(n, 10);
}
function Ze(n) {
  if (!(P(n) || n === null || n === ""))
    return parseFloat(n);
}
function Cn(n) {
  if (!(P(n) || n === null || n === "")) {
    const e = parseFloat("0." + n) * 1e3;
    return Math.floor(e);
  }
}
function Dn(n, e, t = !1) {
  const r = 10 ** e;
  return (t ? Math.trunc : Math.round)(n * r) / r;
}
function Ot(n) {
  return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
}
function Tt(n) {
  return Ot(n) ? 366 : 365;
}
function qt(n, e) {
  const t = ya(e - 1, 12) + 1, r = n + (e - t) / 12;
  return t === 2 ? Ot(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function xn(n) {
  let e = Date.UTC(
    n.year,
    n.month - 1,
    n.day,
    n.hour,
    n.minute,
    n.second,
    n.millisecond
  );
  return n.year < 100 && n.year >= 0 && (e = new Date(e), e.setUTCFullYear(n.year, n.month - 1, n.day)), +e;
}
function Gt(n) {
  const e = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7, t = n - 1, r = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
  return e === 4 || r === 3 ? 53 : 52;
}
function Mn(n) {
  return n > 99 ? n : n > q.twoDigitCutoffYear ? 1900 + n : 2e3 + n;
}
function es(n, e, t, r = null) {
  const s = new Date(n), l = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  r && (l.timeZone = r);
  const o = { timeZoneName: e, ...l }, c = new Intl.DateTimeFormat(t, o).formatToParts(s).find((d) => d.type.toLowerCase() === "timezonename");
  return c ? c.value : null;
}
function Qt(n, e) {
  let t = parseInt(n, 10);
  Number.isNaN(t) && (t = 0);
  const r = parseInt(e, 10) || 0, s = t < 0 || Object.is(t, -0) ? -r : r;
  return t * 60 + s;
}
function ts(n) {
  const e = Number(n);
  if (typeof n == "boolean" || n === "" || Number.isNaN(e))
    throw new ce(`Invalid unit value ${n}`);
  return e;
}
function Bt(n, e) {
  const t = {};
  for (const r in n)
    if (tt(n, r)) {
      const s = n[r];
      if (s == null)
        continue;
      t[e(r)] = ts(s);
    }
  return t;
}
function wt(n, e) {
  const t = Math.trunc(Math.abs(n / 60)), r = Math.trunc(Math.abs(n % 60)), s = n >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${G(t, 2)}:${G(r, 2)}`;
    case "narrow":
      return `${s}${t}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${s}${G(t, 2)}${G(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Kt(n) {
  return va(n, ["hour", "minute", "second", "millisecond"]);
}
const ga = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], ns = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], Ta = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function rs(n) {
  switch (n) {
    case "narrow":
      return [...Ta];
    case "short":
      return [...ns];
    case "long":
      return [...ga];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const ss = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], is = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], wa = ["M", "T", "W", "T", "F", "S", "S"];
function as(n) {
  switch (n) {
    case "narrow":
      return [...wa];
    case "short":
      return [...is];
    case "long":
      return [...ss];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const os = ["AM", "PM"], Ea = ["Before Christ", "Anno Domini"], Sa = ["BC", "AD"], Oa = ["B", "A"];
function ls(n) {
  switch (n) {
    case "narrow":
      return [...Oa];
    case "short":
      return [...Sa];
    case "long":
      return [...Ea];
    default:
      return null;
  }
}
function Ia(n) {
  return os[n.hour < 12 ? 0 : 1];
}
function Ma(n, e) {
  return as(e)[n.weekday - 1];
}
function Na(n, e) {
  return rs(e)[n.month - 1];
}
function ka(n, e) {
  return ls(e)[n.year < 0 ? 0 : 1];
}
function Ca(n, e, t = "always", r = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, l = ["hours", "minutes", "seconds"].indexOf(n) === -1;
  if (t === "auto" && l) {
    const O = n === "days";
    switch (e) {
      case 1:
        return O ? "tomorrow" : `next ${s[n][0]}`;
      case -1:
        return O ? "yesterday" : `last ${s[n][0]}`;
      case 0:
        return O ? "today" : `this ${s[n][0]}`;
    }
  }
  const o = Object.is(e, -0) || e < 0, c = Math.abs(e), d = c === 1, h = s[n], T = r ? d ? h[1] : h[2] || h[1] : d ? s[n][0] : n;
  return o ? `${c} ${T} ago` : `in ${c} ${T}`;
}
function vr(n, e) {
  let t = "";
  for (const r of n)
    r.literal ? t += r.val : t += e(r.val);
  return t;
}
const Da = {
  D: Yt,
  DD: _r,
  DDD: Ar,
  DDDD: Pr,
  t: Lr,
  tt: Ur,
  ttt: Rr,
  tttt: Hr,
  T: $r,
  TT: Zr,
  TTT: Wr,
  TTTT: zr,
  f: Yr,
  ff: Gr,
  fff: Jr,
  ffff: jr,
  F: qr,
  FF: Br,
  FFF: Xr,
  FFFF: Qr
};
class Q {
  static create(e, t = {}) {
    return new Q(e, t);
  }
  static parseFormat(e) {
    let t = null, r = "", s = !1;
    const l = [];
    for (let o = 0; o < e.length; o++) {
      const c = e.charAt(o);
      c === "'" ? (r.length > 0 && l.push({ literal: s || /^\s+$/.test(r), val: r }), t = null, r = "", s = !s) : s || c === t ? r += c : (r.length > 0 && l.push({ literal: /^\s+$/.test(r), val: r }), r = c, t = c);
    }
    return r.length > 0 && l.push({ literal: s || /^\s+$/.test(r), val: r }), l;
  }
  static macroTokenToFormatOpts(e) {
    return Da[e];
  }
  constructor(e, t) {
    this.opts = t, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, t) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format();
  }
  formatDateTime(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t }).format();
  }
  formatDateTimeParts(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t }).formatToParts();
  }
  formatInterval(e, t = {}) {
    return this.loc.dtFormatter(e.start, { ...this.opts, ...t }).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t }).resolvedOptions();
  }
  num(e, t = 0) {
    if (this.opts.forceSimple)
      return G(e, t);
    const r = { ...this.opts };
    return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, t) {
    const r = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", l = (v, M) => this.loc.extract(e, v, M), o = (v) => e.isOffsetFixed && e.offset === 0 && v.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, v.format) : "", c = () => r ? Ia(e) : l({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), d = (v, M) => r ? Na(e, v) : l(M ? { month: v } : { month: v, day: "numeric" }, "month"), h = (v, M) => r ? Ma(e, v) : l(
      M ? { weekday: v } : { weekday: v, month: "long", day: "numeric" },
      "weekday"
    ), T = (v) => {
      const M = Q.macroTokenToFormatOpts(v);
      return M ? this.formatWithSystemDefault(e, M) : v;
    }, O = (v) => r ? ka(e, v) : l({ era: v }, "era"), S = (v) => {
      switch (v) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return o({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return o({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return o({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return c();
        case "d":
          return s ? l({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return s ? l({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return h("short", !0);
        case "cccc":
          return h("long", !0);
        case "ccccc":
          return h("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return h("short", !1);
        case "EEEE":
          return h("long", !1);
        case "EEEEE":
          return h("narrow", !1);
        case "L":
          return s ? l({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return s ? l({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return d("short", !0);
        case "LLLL":
          return d("long", !0);
        case "LLLLL":
          return d("narrow", !0);
        case "M":
          return s ? l({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return s ? l({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return d("short", !1);
        case "MMMM":
          return d("long", !1);
        case "MMMMM":
          return d("narrow", !1);
        case "y":
          return s ? l({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return s ? l({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? l({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return s ? l({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return O("short");
        case "GG":
          return O("long");
        case "GGGGG":
          return O("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return T(v);
      }
    };
    return vr(Q.parseFormat(t), S);
  }
  formatDurationFromString(e, t) {
    const r = (d) => {
      switch (d[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "w":
          return "week";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, s = (d) => (h) => {
      const T = r(h);
      return T ? this.num(d.get(T), h.length) : h;
    }, l = Q.parseFormat(t), o = l.reduce(
      (d, { literal: h, val: T }) => h ? d : d.concat(T),
      []
    ), c = e.shiftTo(...o.map(r).filter((d) => d));
    return vr(l, s(c));
  }
}
class ye {
  constructor(e, t) {
    this.reason = e, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const us = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function nt(...n) {
  const e = n.reduce((t, r) => t + r.source, "");
  return RegExp(`^${e}$`);
}
function rt(...n) {
  return (e) => n.reduce(
    ([t, r, s], l) => {
      const [o, c, d] = l(e, s);
      return [{ ...t, ...o }, c || r, d];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function st(n, ...e) {
  if (n == null)
    return [null, null];
  for (const [t, r] of e) {
    const s = t.exec(n);
    if (s)
      return r(s);
  }
  return [null, null];
}
function cs(...n) {
  return (e, t) => {
    const r = {};
    let s;
    for (s = 0; s < n.length; s++)
      r[n[s]] = Pe(e[t + s]);
    return [r, null, t + s];
  };
}
const ds = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, xa = `(?:${ds.source}?(?:\\[(${us.source})\\])?)?`, Vn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, fs = RegExp(`${Vn.source}${xa}`), bn = RegExp(`(?:T${fs.source})?`), Va = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, ba = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Fa = /(\d{4})-?(\d{3})/, _a = cs("weekYear", "weekNumber", "weekDay"), Aa = cs("year", "ordinal"), Pa = /(\d{4})-(\d\d)-(\d\d)/, hs = RegExp(
  `${Vn.source} ?(?:${ds.source}|(${us.source}))?`
), La = RegExp(`(?: ${hs.source})?`);
function et(n, e, t) {
  const r = n[e];
  return P(r) ? t : Pe(r);
}
function Ua(n, e) {
  return [{
    year: et(n, e),
    month: et(n, e + 1, 1),
    day: et(n, e + 2, 1)
  }, null, e + 3];
}
function it(n, e) {
  return [{
    hours: et(n, e, 0),
    minutes: et(n, e + 1, 0),
    seconds: et(n, e + 2, 0),
    milliseconds: Cn(n[e + 3])
  }, null, e + 4];
}
function It(n, e) {
  const t = !n[e] && !n[e + 1], r = Qt(n[e + 1], n[e + 2]), s = t ? null : re.instance(r);
  return [{}, s, e + 3];
}
function Mt(n, e) {
  const t = n[e] ? xe.create(n[e]) : null;
  return [{}, t, e + 1];
}
const Ra = RegExp(`^T?${Vn.source}$`), Ha = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function $a(n) {
  const [e, t, r, s, l, o, c, d, h] = n, T = e[0] === "-", O = d && d[0] === "-", S = (v, M = !1) => v !== void 0 && (M || v && T) ? -v : v;
  return [
    {
      years: S(Ze(t)),
      months: S(Ze(r)),
      weeks: S(Ze(s)),
      days: S(Ze(l)),
      hours: S(Ze(o)),
      minutes: S(Ze(c)),
      seconds: S(Ze(d), d === "-0"),
      milliseconds: S(Cn(h), O)
    }
  ];
}
const Za = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Fn(n, e, t, r, s, l, o) {
  const c = {
    year: e.length === 2 ? Mn(Pe(e)) : Pe(e),
    month: ns.indexOf(t) + 1,
    day: Pe(r),
    hour: Pe(s),
    minute: Pe(l)
  };
  return o && (c.second = Pe(o)), n && (c.weekday = n.length > 3 ? ss.indexOf(n) + 1 : is.indexOf(n) + 1), c;
}
const Wa = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function za(n) {
  const [
    ,
    e,
    t,
    r,
    s,
    l,
    o,
    c,
    d,
    h,
    T,
    O
  ] = n, S = Fn(e, s, r, t, l, o, c);
  let v;
  return d ? v = Za[d] : h ? v = 0 : v = Qt(T, O), [S, new re(v)];
}
function Ya(n) {
  return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const qa = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Ga = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Ba = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function yr(n) {
  const [, e, t, r, s, l, o, c] = n;
  return [Fn(e, s, r, t, l, o, c), re.utcInstance];
}
function Ja(n) {
  const [, e, t, r, s, l, o, c] = n;
  return [Fn(e, c, t, r, s, l, o), re.utcInstance];
}
const Xa = nt(Va, bn), ja = nt(ba, bn), Qa = nt(Fa, bn), Ka = nt(fs), ms = rt(
  Ua,
  it,
  It,
  Mt
), eo = rt(
  _a,
  it,
  It,
  Mt
), to = rt(
  Aa,
  it,
  It,
  Mt
), no = rt(
  it,
  It,
  Mt
);
function ro(n) {
  return st(
    n,
    [Xa, ms],
    [ja, eo],
    [Qa, to],
    [Ka, no]
  );
}
function so(n) {
  return st(Ya(n), [Wa, za]);
}
function io(n) {
  return st(
    n,
    [qa, yr],
    [Ga, yr],
    [Ba, Ja]
  );
}
function ao(n) {
  return st(n, [Ha, $a]);
}
const oo = rt(it);
function lo(n) {
  return st(n, [Ra, oo]);
}
const uo = nt(Pa, La), co = nt(hs), fo = rt(
  it,
  It,
  Mt
);
function ho(n) {
  return st(
    n,
    [uo, ms],
    [co, fo]
  );
}
const mo = "Invalid Duration", ps = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, po = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...ps
}, ue = 146097 / 400, je = 146097 / 4800, vo = {
  years: {
    quarters: 4,
    months: 12,
    weeks: ue / 7,
    days: ue,
    hours: ue * 24,
    minutes: ue * 24 * 60,
    seconds: ue * 24 * 60 * 60,
    milliseconds: ue * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: ue / 28,
    days: ue / 4,
    hours: ue * 24 / 4,
    minutes: ue * 24 * 60 / 4,
    seconds: ue * 24 * 60 * 60 / 4,
    milliseconds: ue * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: je / 7,
    days: je,
    hours: je * 24,
    minutes: je * 24 * 60,
    seconds: je * 24 * 60 * 60,
    milliseconds: je * 24 * 60 * 60 * 1e3
  },
  ...ps
}, ze = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], yo = ze.slice(0).reverse();
function Ae(n, e, t = !1) {
  const r = {
    values: t ? e.values : { ...n.values, ...e.values || {} },
    loc: n.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || n.conversionAccuracy,
    matrix: e.matrix || n.matrix
  };
  return new L(r);
}
function go(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}
function vs(n, e, t, r, s) {
  const l = n[s][t], o = e[t] / l, c = Math.sign(o) === Math.sign(r[s]), d = !c && r[s] !== 0 && Math.abs(o) <= 1 ? go(o) : Math.trunc(o);
  r[s] += d, e[t] -= d * l;
}
function To(n, e) {
  yo.reduce((t, r) => P(e[r]) ? t : (t && vs(n, e, t, e, r), r), null);
}
function wo(n) {
  const e = {};
  for (const [t, r] of Object.entries(n))
    r !== 0 && (e[t] = r);
  return e;
}
class L {
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let r = t ? vo : po;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || W.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, t) {
    return L.fromObject({ milliseconds: e }, t);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, t = {}) {
    if (e == null || typeof e != "object")
      throw new ce(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new L({
      values: Bt(e, L.normalizeUnit),
      loc: W.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (Ge(e))
      return L.fromMillis(e);
    if (L.isDuration(e))
      return e;
    if (typeof e == "object")
      return L.fromObject(e);
    throw new ce(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, t) {
    const [r] = ao(e);
    return r ? L.fromObject(r, t) : L.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, t) {
    const [r] = lo(e);
    return r ? L.fromObject(r, t) : L.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ce("need to specify a reason the Duration is invalid");
    const r = e instanceof ye ? e : new ye(e, t);
    if (q.throwOnInvalid)
      throw new Gi(r);
    return new L({ invalid: r });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!t)
      throw new Fr(e);
    return t;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, t = {}) {
    const r = {
      ...t,
      floor: t.round !== !1 && t.floor !== !1
    };
    return this.isValid ? Q.create(this.loc, r).formatDurationFromString(this, e) : mo;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    const t = ze.map((r) => {
      const s = this.values[r];
      return P(s) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(s);
    }).filter((r) => r);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(t);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Dn(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const t = this.toMillis();
    if (t < 0 || t >= 864e5)
      return null;
    e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e
    };
    const r = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let s = e.format === "basic" ? "hhmm" : "hh:mm";
    (!e.suppressSeconds || r.seconds !== 0 || r.milliseconds !== 0) && (s += e.format === "basic" ? "ss" : ":ss", (!e.suppressMilliseconds || r.milliseconds !== 0) && (s += ".SSS"));
    let l = r.toFormat(s);
    return e.includePrefix && (l = "T" + l), l;
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.as("milliseconds");
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const t = L.fromDurationLike(e), r = {};
    for (const s of ze)
      (tt(t.values, s) || tt(this.values, s)) && (r[s] = t.get(s) + this.get(s));
    return Ae(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const t = L.fromDurationLike(e);
    return this.plus(t.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const t = {};
    for (const r of Object.keys(this.values))
      t[r] = ts(e(this.values[r], r));
    return Ae(this, { values: t }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[L.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const t = { ...this.values, ...Bt(e, L.normalizeUnit) };
    return Ae(this, { values: t });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r, matrix: s } = {}) {
    const o = { loc: this.loc.clone({ locale: e, numberingSystem: t }), matrix: s, conversionAccuracy: r };
    return Ae(this, o);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return To(this.matrix, e), Ae(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = wo(this.normalize().shiftToAll().toObject());
    return Ae(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid)
      return this;
    if (e.length === 0)
      return this;
    e = e.map((o) => L.normalizeUnit(o));
    const t = {}, r = {}, s = this.toObject();
    let l;
    for (const o of ze)
      if (e.indexOf(o) >= 0) {
        l = o;
        let c = 0;
        for (const h in r)
          c += this.matrix[h][o] * r[h], r[h] = 0;
        Ge(s[o]) && (c += s[o]);
        const d = Math.trunc(c);
        t[o] = d, r[o] = (c * 1e3 - d * 1e3) / 1e3;
        for (const h in s)
          ze.indexOf(h) > ze.indexOf(o) && vs(this.matrix, s, h, t, o);
      } else
        Ge(s[o]) && (r[o] = s[o]);
    for (const o in r)
      r[o] !== 0 && (t[l] += o === l ? r[o] : r[o] / this.matrix[l][o]);
    return Ae(this, { values: t }, !0).normalize();
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    for (const t of Object.keys(this.values))
      e[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return Ae(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function t(r, s) {
      return r === void 0 || r === 0 ? s === void 0 || s === 0 : r === s;
    }
    for (const r of ze)
      if (!t(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const Qe = "Invalid Interval";
function Eo(n, e) {
  return !n || !n.isValid ? z.invalid("missing or invalid start") : !e || !e.isValid ? z.invalid("missing or invalid end") : e < n ? z.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${n.toISO()} and end=${e.toISO()}`
  ) : null;
}
class z {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ce("need to specify a reason the Interval is invalid");
    const r = e instanceof ye ? e : new ye(e, t);
    if (q.throwOnInvalid)
      throw new qi(r);
    return new z({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, t) {
    const r = vt(e), s = vt(t), l = Eo(r, s);
    return l ?? new z({
      start: r,
      end: s
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, t) {
    const r = L.fromDurationLike(t), s = vt(e);
    return z.fromDateTimes(s, s.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, t) {
    const r = L.fromDurationLike(t), s = vt(e);
    return z.fromDateTimes(s.minus(r), s);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, t) {
    const [r, s] = (e || "").split("/", 2);
    if (r && s) {
      let l, o;
      try {
        l = D.fromISO(r, t), o = l.isValid;
      } catch {
        o = !1;
      }
      let c, d;
      try {
        c = D.fromISO(s, t), d = c.isValid;
      } catch {
        d = !1;
      }
      if (o && d)
        return z.fromDateTimes(l, c);
      if (o) {
        const h = L.fromISO(s, t);
        if (h.isValid)
          return z.after(l, h);
      } else if (d) {
        const h = L.fromISO(r, t);
        if (h.isValid)
          return z.before(c, h);
      }
    }
    return z.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */
  count(e = "milliseconds") {
    if (!this.isValid)
      return NaN;
    const t = this.start.startOf(e), r = this.end.startOf(e);
    return Math.floor(r.diff(t, e).get(e)) + (r.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: t } = {}) {
    return this.isValid ? z.fromDateTimes(e || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const t = e.map(vt).filter((o) => this.contains(o)).sort(), r = [];
    let { s } = this, l = 0;
    for (; s < this.e; ) {
      const o = t[l] || this.e, c = +o > +this.e ? this.e : o;
      r.push(z.fromDateTimes(s, c)), s = c, l += 1;
    }
    return r;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const t = L.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let { s: r } = this, s = 1, l;
    const o = [];
    for (; r < this.e; ) {
      const c = this.start.plus(t.mapUnits((d) => d * s));
      l = +c > +this.e ? this.e : c, o.push(z.fromDateTimes(r, l)), r = l, s += 1;
    }
    return o;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid)
      return this;
    const t = this.s > e.s ? this.s : e.s, r = this.e < e.e ? this.e : e.e;
    return t >= r ? null : z.fromDateTimes(t, r);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid)
      return this;
    const t = this.s < e.s ? this.s : e.s, r = this.e > e.e ? this.e : e.e;
    return z.fromDateTimes(t, r);
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [t, r] = e.sort((s, l) => s.s - l.s).reduce(
      ([s, l], o) => l ? l.overlaps(o) || l.abutsStart(o) ? [s, l.union(o)] : [s.concat([l]), o] : [s, o],
      [[], null]
    );
    return r && t.push(r), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let t = null, r = 0;
    const s = [], l = e.map((d) => [
      { time: d.s, type: "s" },
      { time: d.e, type: "e" }
    ]), o = Array.prototype.concat(...l), c = o.sort((d, h) => d.time - h.time);
    for (const d of c)
      r += d.type === "s" ? 1 : -1, r === 1 ? t = d.time : (t && +t != +d.time && s.push(z.fromDateTimes(t, d.time)), t = null);
    return z.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return z.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Qe;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = Yt, t = {}) {
    return this.isValid ? Q.create(this.s.loc.clone(t), e).formatInterval(this) : Qe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Qe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Qe;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Qe;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: t = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Qe;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, t) {
    return this.isValid ? this.e.diff(this.s, e, t) : L.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return z.fromDateTimes(e(this.s), e(this.e));
  }
}
class Ut {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = q.defaultZone) {
    const t = D.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return xe.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return Le(e, q.defaultZone);
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null, outputCalendar: l = "gregory" } = {}) {
    return (s || W.create(t, r, l)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null, outputCalendar: l = "gregory" } = {}) {
    return (s || W.create(t, r, l)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || W.create(t, r, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: t = null, numberingSystem: r = null, locObj: s = null } = {}) {
    return (s || W.create(t, r, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return W.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: t = null } = {}) {
    return W.create(t, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */
  static features() {
    return { relative: Kr() };
  }
}
function gr(n, e) {
  const t = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = t(e) - t(n);
  return Math.floor(L.fromMillis(r).as("days"));
}
function So(n, e, t) {
  const r = [
    ["years", (d, h) => h.year - d.year],
    ["quarters", (d, h) => h.quarter - d.quarter + (h.year - d.year) * 4],
    ["months", (d, h) => h.month - d.month + (h.year - d.year) * 12],
    [
      "weeks",
      (d, h) => {
        const T = gr(d, h);
        return (T - T % 7) / 7;
      }
    ],
    ["days", gr]
  ], s = {}, l = n;
  let o, c;
  for (const [d, h] of r)
    t.indexOf(d) >= 0 && (o = d, s[d] = h(n, e), c = l.plus(s), c > e ? (s[d]--, n = l.plus(s)) : n = c);
  return [n, s, c, o];
}
function Oo(n, e, t, r) {
  let [s, l, o, c] = So(n, e, t);
  const d = e - s, h = t.filter(
    (O) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(O) >= 0
  );
  h.length === 0 && (o < e && (o = s.plus({ [c]: 1 })), o !== s && (l[c] = (l[c] || 0) + d / (o - s)));
  const T = L.fromObject(l, r);
  return h.length > 0 ? L.fromMillis(d, r).shiftTo(...h).plus(T) : T;
}
const _n = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, Tr = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Io = _n.hanidec.replace(/[\[|\]]/g, "").split("");
function Mo(n) {
  let e = parseInt(n, 10);
  if (isNaN(e)) {
    e = "";
    for (let t = 0; t < n.length; t++) {
      const r = n.charCodeAt(t);
      if (n[t].search(_n.hanidec) !== -1)
        e += Io.indexOf(n[t]);
      else
        for (const s in Tr) {
          const [l, o] = Tr[s];
          r >= l && r <= o && (e += r - l);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function pe({ numberingSystem: n }, e = "") {
  return new RegExp(`${_n[n || "latn"]}${e}`);
}
const No = "missing Intl.DateTimeFormat.formatToParts support";
function R(n, e = (t) => t) {
  return { regex: n, deser: ([t]) => e(Mo(t)) };
}
const ko = String.fromCharCode(160), ys = `[ ${ko}]`, gs = new RegExp(ys, "g");
function Co(n) {
  return n.replace(/\./g, "\\.?").replace(gs, ys);
}
function wr(n) {
  return n.replace(/\./g, "").replace(gs, " ").toLowerCase();
}
function ve(n, e) {
  return n === null ? null : {
    regex: RegExp(n.map(Co).join("|")),
    deser: ([t]) => n.findIndex((r) => wr(t) === wr(r)) + e
  };
}
function Er(n, e) {
  return { regex: n, deser: ([, t, r]) => Qt(t, r), groups: e };
}
function Rt(n) {
  return { regex: n, deser: ([e]) => e };
}
function Do(n) {
  return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function xo(n, e) {
  const t = pe(e), r = pe(e, "{2}"), s = pe(e, "{3}"), l = pe(e, "{4}"), o = pe(e, "{6}"), c = pe(e, "{1,2}"), d = pe(e, "{1,3}"), h = pe(e, "{1,6}"), T = pe(e, "{1,9}"), O = pe(e, "{2,4}"), S = pe(e, "{4,6}"), v = (m) => ({ regex: RegExp(Do(m.val)), deser: ([E]) => E, literal: !0 }), g = ((m) => {
    if (n.literal)
      return v(m);
    switch (m.val) {
      case "G":
        return ve(e.eras("short", !1), 0);
      case "GG":
        return ve(e.eras("long", !1), 0);
      case "y":
        return R(h);
      case "yy":
        return R(O, Mn);
      case "yyyy":
        return R(l);
      case "yyyyy":
        return R(S);
      case "yyyyyy":
        return R(o);
      case "M":
        return R(c);
      case "MM":
        return R(r);
      case "MMM":
        return ve(e.months("short", !0, !1), 1);
      case "MMMM":
        return ve(e.months("long", !0, !1), 1);
      case "L":
        return R(c);
      case "LL":
        return R(r);
      case "LLL":
        return ve(e.months("short", !1, !1), 1);
      case "LLLL":
        return ve(e.months("long", !1, !1), 1);
      case "d":
        return R(c);
      case "dd":
        return R(r);
      case "o":
        return R(d);
      case "ooo":
        return R(s);
      case "HH":
        return R(r);
      case "H":
        return R(c);
      case "hh":
        return R(r);
      case "h":
        return R(c);
      case "mm":
        return R(r);
      case "m":
        return R(c);
      case "q":
        return R(c);
      case "qq":
        return R(r);
      case "s":
        return R(c);
      case "ss":
        return R(r);
      case "S":
        return R(d);
      case "SSS":
        return R(s);
      case "u":
        return Rt(T);
      case "uu":
        return Rt(c);
      case "uuu":
        return R(t);
      case "a":
        return ve(e.meridiems(), 0);
      case "kkkk":
        return R(l);
      case "kk":
        return R(O, Mn);
      case "W":
        return R(c);
      case "WW":
        return R(r);
      case "E":
      case "c":
        return R(t);
      case "EEE":
        return ve(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return ve(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return ve(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return ve(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Er(new RegExp(`([+-]${c.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return Er(new RegExp(`([+-]${c.source})(${r.source})?`), 2);
      case "z":
        return Rt(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Rt(/[^\S\n\r]/);
      default:
        return v(m);
    }
  })(n) || {
    invalidReason: No
  };
  return g.token = n, g;
}
const Vo = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function bo(n, e) {
  const { type: t, value: r } = n;
  if (t === "literal") {
    const o = /^\s+$/.test(r);
    return {
      literal: !o,
      val: o ? " " : r
    };
  }
  const s = e[t];
  let l = Vo[t];
  if (typeof l == "object" && (l = l[s]), l)
    return {
      literal: !1,
      val: l
    };
}
function Fo(n) {
  return [`^${n.map((t) => t.regex).reduce((t, r) => `${t}(${r.source})`, "")}$`, n];
}
function _o(n, e, t) {
  const r = n.match(e);
  if (r) {
    const s = {};
    let l = 1;
    for (const o in t)
      if (tt(t, o)) {
        const c = t[o], d = c.groups ? c.groups + 1 : 1;
        !c.literal && c.token && (s[c.token.val[0]] = c.deser(r.slice(l, l + d))), l += d;
      }
    return [r, s];
  } else
    return [r, {}];
}
function Ao(n) {
  const e = (l) => {
    switch (l) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let t = null, r;
  return P(n.z) || (t = xe.create(n.z)), P(n.Z) || (t || (t = new re(n.Z)), r = n.Z), P(n.q) || (n.M = (n.q - 1) * 3 + 1), P(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), P(n.u) || (n.S = Cn(n.u)), [Object.keys(n).reduce((l, o) => {
    const c = e(o);
    return c && (l[c] = n[o]), l;
  }, {}), t, r];
}
let pn = null;
function Po() {
  return pn || (pn = D.fromMillis(1555555555555)), pn;
}
function Lo(n, e) {
  if (n.literal)
    return n;
  const t = Q.macroTokenToFormatOpts(n.val), r = Es(t, e);
  return r == null || r.includes(void 0) ? n : r;
}
function Ts(n, e) {
  return Array.prototype.concat(...n.map((t) => Lo(t, e)));
}
function ws(n, e, t) {
  const r = Ts(Q.parseFormat(t), n), s = r.map((o) => xo(o, n)), l = s.find((o) => o.invalidReason);
  if (l)
    return { input: e, tokens: r, invalidReason: l.invalidReason };
  {
    const [o, c] = Fo(s), d = RegExp(o, "i"), [h, T] = _o(e, d, c), [O, S, v] = T ? Ao(T) : [null, null, void 0];
    if (tt(T, "a") && tt(T, "H"))
      throw new yt(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: d, rawMatches: h, matches: T, result: O, zone: S, specificOffset: v };
  }
}
function Uo(n, e, t) {
  const { result: r, zone: s, specificOffset: l, invalidReason: o } = ws(n, e, t);
  return [r, s, l, o];
}
function Es(n, e) {
  return n ? Q.create(e, n).formatDateTimeParts(Po()).map((s) => bo(s, n)) : null;
}
const Ss = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Os = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function de(n, e) {
  return new ye(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${n}, which is invalid`
  );
}
function Is(n, e, t) {
  const r = new Date(Date.UTC(n, e - 1, t));
  n < 100 && n >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const s = r.getUTCDay();
  return s === 0 ? 7 : s;
}
function Ms(n, e, t) {
  return t + (Ot(n) ? Os : Ss)[e - 1];
}
function Ns(n, e) {
  const t = Ot(n) ? Os : Ss, r = t.findIndex((l) => l < e), s = e - t[r];
  return { month: r + 1, day: s };
}
function Nn(n) {
  const { year: e, month: t, day: r } = n, s = Ms(e, t, r), l = Is(e, t, r);
  let o = Math.floor((s - l + 10) / 7), c;
  return o < 1 ? (c = e - 1, o = Gt(c)) : o > Gt(e) ? (c = e + 1, o = 1) : c = e, { weekYear: c, weekNumber: o, weekday: l, ...Kt(n) };
}
function Sr(n) {
  const { weekYear: e, weekNumber: t, weekday: r } = n, s = Is(e, 1, 4), l = Tt(e);
  let o = t * 7 + r - s - 3, c;
  o < 1 ? (c = e - 1, o += Tt(c)) : o > l ? (c = e + 1, o -= Tt(e)) : c = e;
  const { month: d, day: h } = Ns(c, o);
  return { year: c, month: d, day: h, ...Kt(n) };
}
function vn(n) {
  const { year: e, month: t, day: r } = n, s = Ms(e, t, r);
  return { year: e, ordinal: s, ...Kt(n) };
}
function Or(n) {
  const { year: e, ordinal: t } = n, { month: r, day: s } = Ns(e, t);
  return { year: e, month: r, day: s, ...Kt(n) };
}
function Ro(n) {
  const e = jt(n.weekYear), t = Ce(n.weekNumber, 1, Gt(n.weekYear)), r = Ce(n.weekday, 1, 7);
  return e ? t ? r ? !1 : de("weekday", n.weekday) : de("week", n.week) : de("weekYear", n.weekYear);
}
function Ho(n) {
  const e = jt(n.year), t = Ce(n.ordinal, 1, Tt(n.year));
  return e ? t ? !1 : de("ordinal", n.ordinal) : de("year", n.year);
}
function ks(n) {
  const e = jt(n.year), t = Ce(n.month, 1, 12), r = Ce(n.day, 1, qt(n.year, n.month));
  return e ? t ? r ? !1 : de("day", n.day) : de("month", n.month) : de("year", n.year);
}
function Cs(n) {
  const { hour: e, minute: t, second: r, millisecond: s } = n, l = Ce(e, 0, 23) || e === 24 && t === 0 && r === 0 && s === 0, o = Ce(t, 0, 59), c = Ce(r, 0, 59), d = Ce(s, 0, 999);
  return l ? o ? c ? d ? !1 : de("millisecond", s) : de("second", r) : de("minute", t) : de("hour", e);
}
const yn = "Invalid DateTime", Ir = 864e13;
function Ht(n) {
  return new ye("unsupported zone", `the zone "${n.name}" is not supported`);
}
function gn(n) {
  return n.weekData === null && (n.weekData = Nn(n.c)), n.weekData;
}
function mt(n, e) {
  const t = {
    ts: n.ts,
    zone: n.zone,
    c: n.c,
    o: n.o,
    loc: n.loc,
    invalid: n.invalid
  };
  return new D({ ...t, ...e, old: t });
}
function Ds(n, e, t) {
  let r = n - e * 60 * 1e3;
  const s = t.offset(r);
  if (e === s)
    return [r, e];
  r -= (s - e) * 60 * 1e3;
  const l = t.offset(r);
  return s === l ? [r, s] : [n - Math.min(s, l) * 60 * 1e3, Math.max(s, l)];
}
function Mr(n, e) {
  n += e * 60 * 1e3;
  const t = new Date(n);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function Wt(n, e, t) {
  return Ds(xn(n), e, t);
}
function Nr(n, e) {
  const t = n.o, r = n.c.year + Math.trunc(e.years), s = n.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, l = {
    ...n.c,
    year: r,
    month: s,
    day: Math.min(n.c.day, qt(r, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, o = L.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), c = xn(l);
  let [d, h] = Ds(c, t, n.zone);
  return o !== 0 && (d += o, h = n.zone.offset(d)), { ts: d, o: h };
}
function pt(n, e, t, r, s, l) {
  const { setZone: o, zone: c } = t;
  if (n && Object.keys(n).length !== 0 || e) {
    const d = e || c, h = D.fromObject(n, {
      ...t,
      zone: d,
      specificOffset: l
    });
    return o ? h : h.setZone(c);
  } else
    return D.invalid(
      new ye("unparsable", `the input "${s}" can't be parsed as ${r}`)
    );
}
function $t(n, e, t = !0) {
  return n.isValid ? Q.create(W.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(n, e) : null;
}
function Tn(n, e) {
  const t = n.c.year > 9999 || n.c.year < 0;
  let r = "";
  return t && n.c.year >= 0 && (r += "+"), r += G(n.c.year, t ? 6 : 4), e ? (r += "-", r += G(n.c.month), r += "-", r += G(n.c.day)) : (r += G(n.c.month), r += G(n.c.day)), r;
}
function kr(n, e, t, r, s, l) {
  let o = G(n.c.hour);
  return e ? (o += ":", o += G(n.c.minute), (n.c.second !== 0 || !t) && (o += ":")) : o += G(n.c.minute), (n.c.second !== 0 || !t) && (o += G(n.c.second), (n.c.millisecond !== 0 || !r) && (o += ".", o += G(n.c.millisecond, 3))), s && (n.isOffsetFixed && n.offset === 0 && !l ? o += "Z" : n.o < 0 ? (o += "-", o += G(Math.trunc(-n.o / 60)), o += ":", o += G(Math.trunc(-n.o % 60))) : (o += "+", o += G(Math.trunc(n.o / 60)), o += ":", o += G(Math.trunc(n.o % 60)))), l && (o += "[" + n.zone.ianaName + "]"), o;
}
const xs = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, $o = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Zo = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Vs = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Wo = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], zo = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Cr(n) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[n.toLowerCase()];
  if (!e)
    throw new Fr(n);
  return e;
}
function Dr(n, e) {
  const t = Le(e.zone, q.defaultZone), r = W.fromObject(e), s = q.now();
  let l, o;
  if (P(n.year))
    l = s;
  else {
    for (const h of Vs)
      P(n[h]) && (n[h] = xs[h]);
    const c = ks(n) || Cs(n);
    if (c)
      return D.invalid(c);
    const d = t.offset(s);
    [l, o] = Wt(n, d, t);
  }
  return new D({ ts: l, zone: t, loc: r, o });
}
function xr(n, e, t) {
  const r = P(t.round) ? !0 : t.round, s = (o, c) => (o = Dn(o, r || t.calendary ? 0 : 2, !0), e.loc.clone(t).relFormatter(t).format(o, c)), l = (o) => t.calendary ? e.hasSame(n, o) ? 0 : e.startOf(o).diff(n.startOf(o), o).get(o) : e.diff(n, o).get(o);
  if (t.unit)
    return s(l(t.unit), t.unit);
  for (const o of t.units) {
    const c = l(o);
    if (Math.abs(c) >= 1)
      return s(c, o);
  }
  return s(n > e ? -0 : 0, t.units[t.units.length - 1]);
}
function Vr(n) {
  let e = {}, t;
  return n.length > 0 && typeof n[n.length - 1] == "object" ? (e = n[n.length - 1], t = Array.from(n).slice(0, n.length - 1)) : t = Array.from(n), [e, t];
}
class D {
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || q.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new ye("invalid input") : null) || (t.isValid ? null : Ht(t));
    this.ts = P(e.ts) ? q.now() : e.ts;
    let s = null, l = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
        [s, l] = [e.old.c, e.old.o];
      else {
        const c = t.offset(this.ts);
        s = Mr(this.ts, c), r = Number.isNaN(s.year) ? new ye("invalid input") : null, s = r ? null : s, l = r ? null : c;
      }
    this._zone = t, this.loc = e.loc || W.create(), this.invalid = r, this.weekData = null, this.c = s, this.o = l, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new D({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, t] = Vr(arguments), [r, s, l, o, c, d, h] = t;
    return Dr({ year: r, month: s, day: l, hour: o, minute: c, second: d, millisecond: h }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, t] = Vr(arguments), [r, s, l, o, c, d, h] = t;
    return e.zone = re.utcInstance, Dr({ year: r, month: s, day: l, hour: o, minute: c, second: d, millisecond: h }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const r = ma(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return D.invalid("invalid input");
    const s = Le(t.zone, q.defaultZone);
    return s.isValid ? new D({
      ts: r,
      zone: s,
      loc: W.fromObject(t)
    }) : D.invalid(Ht(s));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, t = {}) {
    if (Ge(e))
      return e < -Ir || e > Ir ? D.invalid("Timestamp out of range") : new D({
        ts: e,
        zone: Le(t.zone, q.defaultZone),
        loc: W.fromObject(t)
      });
    throw new ce(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, t = {}) {
    if (Ge(e))
      return new D({
        ts: e * 1e3,
        zone: Le(t.zone, q.defaultZone),
        loc: W.fromObject(t)
      });
    throw new ce("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */
  static fromObject(e, t = {}) {
    e = e || {};
    const r = Le(t.zone, q.defaultZone);
    if (!r.isValid)
      return D.invalid(Ht(r));
    const s = q.now(), l = P(t.specificOffset) ? r.offset(s) : t.specificOffset, o = Bt(e, Cr), c = !P(o.ordinal), d = !P(o.year), h = !P(o.month) || !P(o.day), T = d || h, O = o.weekYear || o.weekNumber, S = W.fromObject(t);
    if ((T || c) && O)
      throw new yt(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && c)
      throw new yt("Can't mix ordinal dates with month/day");
    const v = O || o.weekday && !T;
    let M, g, m = Mr(s, l);
    v ? (M = Wo, g = $o, m = Nn(m)) : c ? (M = zo, g = Zo, m = vn(m)) : (M = Vs, g = xs);
    let E = !1;
    for (const H of M) {
      const se = o[H];
      P(se) ? E ? o[H] = g[H] : o[H] = m[H] : E = !0;
    }
    const N = v ? Ro(o) : c ? Ho(o) : ks(o), k = N || Cs(o);
    if (k)
      return D.invalid(k);
    const I = v ? Sr(o) : c ? Or(o) : o, [C, J] = Wt(I, l, r), V = new D({
      ts: C,
      zone: r,
      o: J,
      loc: S
    });
    return o.weekday && T && e.weekday !== V.weekday ? D.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${o.weekday} and a date of ${V.toISO()}`
    ) : V;
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, t = {}) {
    const [r, s] = ro(e);
    return pt(r, s, t, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, t = {}) {
    const [r, s] = so(e);
    return pt(r, s, t, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, t = {}) {
    const [r, s] = io(e);
    return pt(r, s, t, "HTTP", t);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, t, r = {}) {
    if (P(e) || P(t))
      throw new ce("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: l = null } = r, o = W.fromOpts({
      locale: s,
      numberingSystem: l,
      defaultToEN: !0
    }), [c, d, h, T] = Uo(o, e, t);
    return T ? D.invalid(T) : pt(c, d, r, `format ${t}`, e, h);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, r = {}) {
    return D.fromFormat(e, t, r);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, t = {}) {
    const [r, s] = ho(e);
    return pt(r, s, t, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ce("need to specify a reason the DateTime is invalid");
    const r = e instanceof ye ? e : new ye(e, t);
    if (q.throwOnInvalid)
      throw new Yi(r);
    return new D({ invalid: r });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, t = {}) {
    const r = Es(e, W.fromObject(t));
    return r ? r.map((s) => s ? s.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, t = {}) {
    return Ts(Q.parseFormat(e), W.fromObject(t)).map((s) => s.val).join("");
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? gn(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? gn(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? gn(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? vn(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Ut.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Ut.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Ut.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Ut.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return Ot(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return qt(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? Tt(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Gt(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: t, numberingSystem: r, calendar: s } = Q.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: t, numberingSystem: r, outputCalendar: s };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, t = {}) {
    return this.setZone(re.instance(e), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(q.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: t = !1, keepCalendarTime: r = !1 } = {}) {
    if (e = Le(e, q.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (t || r) {
        const l = e.offset(this.ts), o = this.toObject();
        [s] = Wt(o, l, e);
      }
      return mt(this, { ts: s, zone: e });
    } else
      return D.invalid(Ht(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return mt(this, { loc: s });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const t = Bt(e, Cr), r = !P(t.weekYear) || !P(t.weekNumber) || !P(t.weekday), s = !P(t.ordinal), l = !P(t.year), o = !P(t.month) || !P(t.day), c = l || o, d = t.weekYear || t.weekNumber;
    if ((c || s) && d)
      throw new yt(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && s)
      throw new yt("Can't mix ordinal dates with month/day");
    let h;
    r ? h = Sr({ ...Nn(this.c), ...t }) : P(t.ordinal) ? (h = { ...this.toObject(), ...t }, P(t.day) && (h.day = Math.min(qt(h.year, h.month), h.day))) : h = Or({ ...vn(this.c), ...t });
    const [T, O] = Wt(h, this.o, this.zone);
    return mt(this, { ts: T, o: O });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const t = L.fromDurationLike(e);
    return mt(this, Nr(this, t));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const t = L.fromDurationLike(e).negate();
    return mt(this, Nr(this, t));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e) {
    if (!this.isValid)
      return this;
    const t = {}, r = L.normalizeUnit(e);
    switch (r) {
      case "years":
        t.month = 1;
      case "quarters":
      case "months":
        t.day = 1;
      case "weeks":
      case "days":
        t.hour = 0;
      case "hours":
        t.minute = 0;
      case "minutes":
        t.second = 0;
      case "seconds":
        t.millisecond = 0;
        break;
    }
    if (r === "weeks" && (t.weekday = 1), r === "quarters") {
      const s = Math.ceil(this.month / 3);
      t.month = (s - 1) * 3 + 1;
    }
    return this.set(t);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, t = {}) {
    return this.isValid ? Q.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : yn;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = Yt, t = {}) {
    return this.isValid ? Q.create(this.loc.clone(t), e).formatDateTime(this) : yn;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? Q.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: s = !0,
    extendedZone: l = !1
  } = {}) {
    if (!this.isValid)
      return null;
    const o = e === "extended";
    let c = Tn(this, o);
    return c += "T", c += kr(this, o, t, r, s, l), c;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? Tn(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return $t(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: s = !1,
    extendedZone: l = !1,
    format: o = "extended"
  } = {}) {
    return this.isValid ? (s ? "T" : "") + kr(
      this,
      o === "extended",
      t,
      e,
      r,
      l
    ) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return $t(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return $t(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? Tn(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: r = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (t || e) && (r && (s += " "), t ? s += "z" : e && (s += "ZZ")), $t(this, s, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : yn;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid)
      return {};
    const t = { ...this.c };
    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, t = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return L.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, l = pa(t).map(L.normalizeUnit), o = e.valueOf() > this.valueOf(), c = o ? this : e, d = o ? e : this, h = Oo(c, d, l, s);
    return o ? h.negate() : h;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(D.now(), e, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? z.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, t) {
    if (!this.isValid)
      return !1;
    const r = e.valueOf(), s = this.setZone(e.zone, { keepLocalTime: !0 });
    return s.startOf(t) <= r && r <= s.endOf(t);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const t = e.base || D.fromObject({}, { zone: this.zone }), r = e.padding ? this < t ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], l = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, l = void 0), xr(t, this.plus(r), {
      ...e,
      numeric: "always",
      units: s,
      unit: l
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? xr(e.base || D.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(D.isDateTime))
      throw new ce("min requires all arguments be DateTimes");
    return pr(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(D.isDateTime))
      throw new ce("max requires all arguments be DateTimes");
    return pr(e, (t) => t.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, t, r = {}) {
    const { locale: s = null, numberingSystem: l = null } = r, o = W.fromOpts({
      locale: s,
      numberingSystem: l,
      defaultToEN: !0
    });
    return ws(o, e, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, r = {}) {
    return D.fromFormatExplain(e, t, r);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Yt;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return _r;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Bi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Ar;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return Pr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Lr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Ur;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Rr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Hr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return $r;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Zr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Wr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return zr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Yr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return qr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return Gr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Br;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Ji;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Jr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Xr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return jr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Qr;
  }
}
function vt(n) {
  if (D.isDateTime(n))
    return n;
  if (n && n.valueOf && Ge(n.valueOf()))
    return D.fromJSDate(n);
  if (n && typeof n == "object")
    return D.fromObject(n);
  throw new ce(
    `Unknown datetime argument: ${n}, of type ${typeof n}`
  );
}
D.prototype.format = function(n) {
  return this.toFormat(n);
};
class We {
  static locationTime() {
    return D.local().setZone(window.timezone);
  }
  static parse(e) {
    return D.fromISO(e).setZone(window.timezone);
  }
  static parseTimestamp(e) {
    return D.fromMillis(+e).setZone(window.timezone);
  }
}
const Yo = {
  key: 0,
  class: "calendar-container"
}, qo = { class: "calendar-header" }, Go = { key: 0 }, Bo = { class: "calendar-days" }, Jo = ["onClick"], ol = /* @__PURE__ */ Ie({
  __name: "CalendarComponent",
  props: {
    modelValue: null,
    format: { default: "YYYY-MM-DD" },
    errorMessage: null,
    disableFutureDates: { type: Boolean, default: !1 },
    disablePastDates: { type: Boolean, default: !1 },
    monthDropdown: { type: Boolean, default: !1 },
    yearDropdown: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = U(!1), s = U(We.locationTime()), l = U([]), o = U(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), c = U(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]), d = U([
      {
        name: "January",
        value: 0
      },
      {
        name: "February",
        value: 1
      },
      {
        name: "March",
        value: 2
      },
      {
        name: "April",
        value: 3
      },
      {
        name: "May",
        value: 4
      },
      {
        name: "June",
        value: 5
      },
      {
        name: "July",
        value: 6
      },
      {
        name: "August",
        value: 7
      },
      {
        name: "September",
        value: 8
      },
      {
        name: "October",
        value: 9
      },
      {
        name: "November",
        value: 10
      },
      {
        name: "December",
        value: 11
      }
    ]), h = Z(() => {
      const I = [];
      for (let C = 1900; C <= 2100; C++)
        I.push({
          name: C.toString(),
          value: C
        });
      return I;
    }), T = Z({
      get: () => s.value.year,
      set: (I) => {
        s.value = s.value.set({ year: I });
      }
    }), O = Z({
      get() {
        return t.modelValue;
      },
      set(I) {
        e("update:modelValue", I);
      }
    }), S = Z(() => {
      let I = "";
      if (O.value == null)
        I = "--.--.----";
      else {
        let C = k(O.value), J = C.substring(8, 10), V = C.substring(5, 7), H = C.substring(0, 4);
        I = J + "." + V + "." + H;
      }
      return I;
    }), v = Z({
      get: () => s.value.month - 1,
      set: (I) => {
        console.log(I), s.value = s.value.set({ month: I + 1 });
      }
    });
    Et(() => {
      O.value && O.value.toString() == "Invalid DateTime" ? s.value = We.locationTime() : O.value && (s.value = O.value || We.locationTime());
    }), zt(s, () => {
      m();
    }), zt(r, () => {
      m();
    });
    function M() {
      r.value = !0;
    }
    function g() {
      r.value = !1;
    }
    function m() {
      let I = [], C = s.value.set({ day: 1 }), J = C.weekday;
      C = C.minus({ months: 1 }).endOf("month");
      let V = C.day;
      for (let $ = J - 1; $ > 0; $--)
        I.push({
          text: V - $ + 1,
          time: C.set({ day: V - $ + 1 }),
          status: "date-pass"
        });
      C = C.plus({ months: 1 }).endOf("month");
      let H = C.day, se = S.value || k(We.locationTime());
      for (let $ = 0; $ < H; $++) {
        let Ve = C.set({ day: $ + 1 }), Je = "", be = se.split("."), en = be[2] + "-" + be[1] + "-" + be[0];
        k(Ve) === en && (Je = "date-active"), k(We.locationTime()) === k(Ve) && (Je += " date-current"), I.push({
          text: $ + 1,
          time: Ve,
          status: Je
        });
      }
      let he = 1;
      for (; I.length < 42; )
        I.push({
          text: he,
          time: C.plus({ months: 1 }).set({ day: he }),
          status: "date-future"
        }), he++;
      t.disableFutureDates && I.forEach(($) => {
        $.time > We.locationTime() && ($.status += " date-disabled");
      }), t.disablePastDates && I.forEach(($) => {
        $.time < We.locationTime() && ($.status += " date-disabled");
      }), l.value = I;
    }
    function E(I) {
      s.value = s.value.set({ month: s.value.month + I });
    }
    function N(I) {
      l.value[I].status.includes("date-disabled") || (s.value = l.value[I].time.set({ hour: 7, minute: 0 }), e("update:modelValue", s.value), r.value = !1);
    }
    function k(I = s.value, C = t.format) {
      let J = I.year, V = I.month, H = I.day, se = o.value[I.month - 1];
      const he = {
        YYYY: J,
        MMM: se,
        MM: ("0" + V).slice(-2),
        M: V,
        DD: ("0" + H).slice(-2),
        D: H
      };
      return C.replace(/Y+|M+|D+/g, ($) => $ in he ? he[$] : $);
    }
    return (I, C) => {
      const J = Jt("click-outside");
      return x(), F("div", {
        class: fe(["calendar-component", {
          "calendar-component-opened": r.value
        }])
      }, [
        De(qe, {
          "read-only": !0,
          onClick: M,
          modelValue: A(S),
          "onUpdate:modelValue": C[0] || (C[0] = (V) => ee(S) ? S.value = V : null),
          "place-holder": "Select Date",
          "error-message": n.errorMessage
        }, null, 8, ["modelValue", "error-message"]),
        r.value ? ge((x(), F("div", Yo, [
          _("div", qo, [
            _("div", {
              class: "calendar-arrow left",
              onClick: C[1] || (C[1] = (V) => E(-1))
            }),
            n.monthDropdown ? K("", !0) : (x(), F("p", Go, B(o.value[s.value.month - 1]) + " " + B(s.value.year), 1)),
            n.monthDropdown ? (x(), rr(sr, {
              key: 1,
              options: d.value,
              "place-holder": "Month",
              modelValue: A(v),
              "onUpdate:modelValue": C[2] || (C[2] = (V) => ee(v) ? v.value = V : null)
            }, null, 8, ["options", "modelValue"])) : K("", !0),
            n.yearDropdown ? (x(), rr(sr, {
              key: 2,
              options: A(h),
              "place-holder": "Year",
              modelValue: A(T),
              "onUpdate:modelValue": C[3] || (C[3] = (V) => ee(T) ? T.value = V : null)
            }, null, 8, ["options", "modelValue"])) : K("", !0),
            _("div", {
              class: "calendar-arrow right",
              onClick: C[4] || (C[4] = (V) => E(1))
            })
          ]),
          _("div", Bo, [
            (x(!0), F(Te, null, Ke(c.value, (V) => (x(), F("p", {
              class: "calendar-day day-name",
              key: V
            }, B(V), 1))), 128))
          ]),
          (x(), F(Te, null, Ke(6, (V) => _("div", {
            class: "calendar-days",
            key: V
          }, [
            (x(), F(Te, null, Ke(7, (H) => _("p", {
              class: fe(["calendar-day", l.value[(V - 1) * 7 + (H - 1)] && l.value[(V - 1) * 7 + (H - 1)].status]),
              key: H,
              onClick: (se) => N((V - 1) * 7 + (H - 1))
            }, B(l.value[(V - 1) * 7 + (H - 1)] && l.value[(V - 1) * 7 + (H - 1)].text), 11, Jo)), 64))
          ])), 64))
        ])), [
          [J, g]
        ]) : K("", !0)
      ], 2);
    };
  }
});
const Xo = { class: "checkbox-slider" }, jo = ["for"], Qo = ["value", "id"], Ko = /* @__PURE__ */ _("span", { class: "slider" }, null, -1), el = ["for"], ll = /* @__PURE__ */ Ie({
  __name: "CheckBoxSliderComponent",
  props: {
    valueKey: null,
    placeHolder: { default: "Checkbox" },
    errorMessage: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = Math.random().toString(36).slice(2), s = Z({
      get: () => t.modelValue,
      set: (l) => {
        e("update:modelValue", l);
      }
    });
    return (l, o) => (x(), F("div", Xo, [
      _("label", {
        class: "checkbox-switch",
        for: "switch_" + A(r)
      }, [
        ge(_("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (c) => ee(s) ? s.value = c : null),
          value: n.valueKey,
          id: "switch_" + A(r)
        }, null, 8, Qo), [
          [br, A(s)]
        ]),
        Ko
      ], 8, jo),
      _("label", {
        for: "switch_" + A(r),
        class: "checkbox-slider-label"
      }, [
        Ue(B(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), F(Te, { key: 0 }, [
          Ue("- " + B(n.errorMessage), 1)
        ], 64)) : K("", !0)
      ], 8, el)
    ]));
  }
});
export {
  ol as CalendarComponent,
  ll as CheckBoxSliderComponent,
  sr as DropdownComponent,
  qe as InputComponent,
  nl as InputComponentWithSuggestions,
  rl as InputDateComponent,
  al as SliderComponent,
  il as TextAreaComponent,
  sl as TimePickerComponent
};
