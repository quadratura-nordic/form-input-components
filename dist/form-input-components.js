(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.input-component{display:flex;flex-flow:column-reverse;width:100%;align-items:flex-start;transition:all .2s ease-in-out;position:relative;height:40px;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.input-component>*{box-sizing:border-box}.input-component.read-only-input-disabled-movement input:not(:placeholder-shown)+label,.input-component.read-only-input-disabled-movement input:focus+label{color:var(--secondary-color);font-size:15px;transform:translate(10px,2.5px) scale(1)}.input-component.is-invalid input{border:1px solid var(--error-color)}.input-component.is-invalid input:focus{border:1px solid var(--error-color)}.input-component.is-invalid label{color:var(--error-color)}.input-component.is-invalid input:focus+label{color:var(--error-color)}.input-component.is-invalid input:not(:placeholder-shown)+label{color:var(--error-color)}.input-component .clear-input{opacity:0;position:absolute;right:0;width:40px;height:calc(100% - 1px);padding:10px;display:flex;justify-content:center;align-items:center;transition:all .2s ease-in-out}.input-component .clear-input.show{opacity:1;cursor:pointer;background-color:transparent;animation:fadeIn .2s ease-in-out;z-index:2}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.input-component .clear-input.show:before,.input-component .clear-input.show:after{position:absolute;content:"";width:50%;height:1px;background-color:var(--black-color)}.input-component .clear-input.show:before{transform:rotate(45deg)}.input-component .clear-input.show:after{transform:rotate(-45deg)}.input-component .clear-input.show:hover:before,.input-component .clear-input.show:hover:after{background-color:var(--hover-color)}.input-component input{width:100%;height:100%;border:1px solid var(--secondary-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:8px;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);padding:10px 40px 10px 15px;background-color:transparent}.input-component input:focus,.input-component input:hover{cursor:pointer;outline:none}.input-component input:hover{border:.01rem solid var(--hover-color)}.input-component input:focus{border:.01rem solid var(--primary-color)}.input-component input:read-only{padding-right:0}.input-component label{font-weight:400;font-size:15px;line-height:100%;display:inline-block;flex-shrink:1;flex-grow:0;color:var(--secondary-color);background-color:var(--white-color);padding:5px;position:absolute;top:5px}.input-component label:hover{cursor:pointer}.input-component input:placeholder-shown+label{transform:translate(10px,2.5px) scale(1)}.input-component input:focus+label{font-weight:400;font-size:12px;color:var(--black-color)}.input-component ::-webkit-input-placeholder{opacity:0;transition:inherit}.input-component input:not(:placeholder-shown)+label{font-weight:400;font-size:12px;color:var(--black-color)}.input-component input:not(:placeholder-shown)+label,.input-component input:focus+label{color:var(--black-color);font-size:12px;transform:translate(10px,-15px) scale(1)}.input-component label,.input-component input{transition:all .2s;touch-action:manipulation}.input-component.input-component-border-bottom.is-invalid input{border:0;border-bottom:1px solid var(--error-color)}.input-component.input-component-border-bottom.is-invalid input:focus{border:0;border-bottom:1px solid var(--error-color)}.input-component.input-component-border-bottom.read-only-input-disabled-movement input:not(:placeholder-shown)+label,.input-component.input-component-border-bottom.read-only-input-disabled-movement input:focus+label{transform:translate(-5px,8px) scale(1)}.input-component.input-component-border-bottom input{border:0;border-bottom:.1rem solid var(--secondary-color);-moz-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;padding:10px 40px 5px 10px}.input-component.input-component-border-bottom input:focus,.input-component.input-component-border-bottom input:hover{cursor:pointer;outline:none}.input-component.input-component-border-bottom input:hover{border-bottom:.01rem solid var(--hover-color)}.input-component.input-component-border-bottom input:focus{border-bottom:.01rem solid var(--primary-color)}.input-component.input-component-border-bottom input:placeholder-shown+label{transform:translate(-5px,8px) scale(1)}.input-component.input-component-border-bottom input:not(:placeholder-shown)+label,.input-component.input-component-border-bottom input:focus+label{transform:translate(-5px,-15px) scale(1)}.input-component.input-component-full-border{height:auto;gap:10px}.input-component.input-component-full-border.is-invalid input{border:1px solid var(--error-color)}.input-component.input-component-full-border.is-invalid input:focus{border:1px solid var(--error-color)}.input-component.input-component-full-border.is-invalid label{color:var(--error-color)}.input-component.input-component-full-border.is-invalid input:focus+label{color:var(--error-color)}.input-component.input-component-full-border.is-invalid input:not(:placeholder-shown)+label{color:var(--error-color)}.input-component.input-component-full-border .clear-input{bottom:0;height:40px}.input-component.input-component-full-border input{height:40px;border:1px solid var(--black-color);border-radius:0;color:var(--black-color)}.input-component.input-component-full-border label{display:inline-flex;color:var(--black-color);background-color:transparent;padding:0;position:relative}.input-component.input-component-full-border input:placeholder-shown+label{transform:translateY(-2.5px) scale(1)}.input-component.input-component-full-border input:focus+label{font-size:15px;color:var(--black-color)}.input-component.input-component-full-border ::-webkit-input-placeholder{opacity:0;transition:inherit}.input-component.input-component-full-border input:not(:placeholder-shown)+label{font-size:15px;color:var(--black-color)}.input-component.input-component-full-border input:not(:placeholder-shown)+label,.input-component.input-component-full-border input:focus+label{color:var(--black-color);font-size:15px;transform:translateY(-2.5px) scale(1)}.dropdown-component{display:flex;flex-direction:column;width:100%;height:auto;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.dropdown-component *{box-sizing:border-box}.dropdown-component input[type=checkbox],.dropdown-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.dropdown-component.is-invalid .dropdown-component-outside{border:1px solid var(--error-color)}.dropdown-component.is-invalid .dropdown-component-outside .dropdown-arrow-box{border-left:1px solid var(--error-color)}.dropdown-component.is-invalid .dropdown-component-outside p{color:var(--error-color)}.dropdown-component.is-invalid .dropdown-component-opened{border:1px solid var(--error-color);border-top:none}.dropdown-component.is-invalid .dropdown-component-opened.up-side-down{border:1px solid var(--error-color);border-bottom:none}.dropdown-component .dropdown-component-outside{display:flex;align-items:center;justify-content:space-between;height:40px;width:100%;background:var(--white-color);border:1px solid var(--secondary-color);border-radius:8px}.dropdown-component .dropdown-component-outside.dropdown-list-opened{border-radius:8px 8px 0 0}.dropdown-component .dropdown-component-outside.dropdown-list-opened .dropdown-arrow-box:before{margin-top:5px;transform:rotate(135deg)}.dropdown-component .dropdown-component-outside.dropdown-list-opened.up-side-down{border-radius:0 0 8px 8px}.dropdown-component .dropdown-component-outside.dropdown-list-opened.up-side-down .dropdown-component-outside-text{top:auto;bottom:-10px}.dropdown-component .dropdown-component-outside .dropdown-component-outside-title{font-weight:400;font-size:15px;line-height:22px;color:var(--secondary-color);width:calc(100% - 40px);padding:0 10px;flex:1;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.dropdown-component .dropdown-component-outside .dropdown-component-outside-title.normal-color{color:var(--black-color)}.dropdown-component .dropdown-component-outside .dropdown-arrow-box{display:flex;align-items:center;justify-content:center;padding:7px 10px;border-left:1px solid var(--secondary-color);height:100%;box-sizing:border-box;width:40px}.dropdown-component .dropdown-component-outside .dropdown-arrow-box:before{content:"";display:inline-block;width:11.5px;height:11.5px;margin-top:-5px;border-bottom:2px solid var(--primary-color);border-left:2px solid var(--primary-color);transform:rotate(-45deg)}.dropdown-component .dropdown-component-outside .dropdown-component-outside-text{height:auto;position:absolute;top:-10px;left:10px;font-weight:400;font-size:12px;line-height:100%;color:var(--black-color);padding:5px;z-index:5;margin:0;background-color:var(--white-color)}.dropdown-component .dropdown-component-outside:hover{cursor:pointer;border:1px solid var(--primary-color)}.dropdown-component .dropdown-component-outside:hover .dropdown-arrow-box{border-left:1px solid var(--primary-color)}.dropdown-component .dropdown-component-opened{display:flex;flex-direction:column;background-color:var(--white-color);border-radius:0 0 8px 8px;height:auto;position:absolute;top:40px;left:0;width:100%;border:1px solid var(--secondary-color);border-top:none;z-index:6;padding:0}.dropdown-component .dropdown-component-opened.up-side-down{top:auto;bottom:40px;flex-direction:column-reverse;border-radius:8px 8px 0 0;border-top:1px solid var(--secondary-color);border-bottom:none}.dropdown-component .dropdown-component-opened.up-side-down .search-box{border-bottom:none;border-top:1px solid var(--secondary-color)}.dropdown-component .dropdown-component-opened .search-box{padding:10px;border-bottom:1px solid var(--secondary-color)}.dropdown-component .dropdown-component-opened ul{overflow:hidden;display:flex;flex-direction:column;list-style:none;margin:0;overflow-y:auto;padding:0 10px;width:100%;max-height:40vh;height:auto}.dropdown-component .dropdown-component-opened ul li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.dropdown-component .dropdown-component-opened ul li .checkbox{display:flex;align-items:center;width:100%;height:100%}.dropdown-component .dropdown-component-opened ul li .checkbox input[type=checkbox]+label:before{content:"";display:inline-block;width:17px;height:17px;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCAxNyA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQgMjguNDAwOEw3Ljg0MjAxIDMxLjc1MzVDNy45ODY4MyAzMS44Nzk5IDguMjExNDggMzEuODM5NCA4LjMwMzA0IDMxLjY3MDRMMTMgMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzgpIiBmaWxsPSIjOEQ5NkE4Ii8+CjxwYXRoIGQ9Ik00IDQ3LjQwMDhMNy44NDIwMSA1MC43NTM1QzcuOTg2ODMgNTAuODc5OSA4LjIxMTQ4IDUwLjgzOTQgOC4zMDMwNCA1MC42NzA0TDEzIDQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==) 0 0;background-repeat:no-repeat;margin-right:6px;margin-bottom:-3px;flex-shrink:0}.dropdown-component .dropdown-component-opened ul li .checkbox input[type=checkbox]:checked+label:before{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iNTUiIHZpZXdCb3g9IjAgMCAxNyA1NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KPHBhdGggZD0iTTQgMjguNDAwOEw3Ljg0MjAxIDMxLjc1MzVDNy45ODY4MyAzMS44Nzk5IDguMjExNDggMzEuODM5NCA4LjMwMzA0IDMxLjY3MDRMMTMgMjMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMyIvPgo8cmVjdCB4PSIwLjUiIHk9IjE5LjUiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3Ryb2tlPSJibGFjayIvPgo8cmVjdCB3aWR0aD0iMTciIGhlaWdodD0iMTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzgpIiBmaWxsPSIjOEQ5NkE4Ii8+CjxwYXRoIGQ9Ik00IDQ3LjQwMDhMNy44NDIwMSA1MC43NTM1QzcuOTg2ODMgNTAuODc5OSA4LjIxMTQ4IDUwLjgzOTQgOC4zMDMwNCA1MC42NzA0TDEzIDQyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMiLz4KPC9zdmc+Cg==) 0 -19px;background-repeat:no-repeat}.dropdown-component .dropdown-component-opened ul li:last-child{border-bottom:none}.dropdown-component .dropdown-component-opened ul li label{display:inline-block;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px 0;height:100%}.dropdown-component .dropdown-component-opened ul li label:hover{cursor:pointer;color:var(--hover-color)}.input-with-suggestions-component{display:flex;flex-direction:column;width:100%;height:auto;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.input-with-suggestions-component *{box-sizing:border-box}.input-with-suggestions-component input[type=checkbox],.input-with-suggestions-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.input-with-suggestions-component.is-invalid .input-with-suggestions-component-list{border:.1rem solid var(--error-color);border-top:0 none}.input-with-suggestions-component.is-invalid .input-component input{border:1px solid var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.input-with-suggestions-component.is-invalid .input-component label{color:var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.input-with-suggestions-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.input-with-suggestions-component.input-with-suggestions-component-opened .input-component input{border-radius:8px 8px 0 0}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list{top:auto;bottom:40px;flex-direction:column-reverse;border-radius:8px 8px 0 0;border-top:1px solid var(--secondary-color);border-bottom:none}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list li{border-bottom:none;border-top:1px solid var(--secondary-color)}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-with-suggestions-component-list li:last-child{border-top:none}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input{border-radius:0 0 8px 8px}.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input:not(:placeholder-shown)+label,.input-with-suggestions-component.input-with-suggestions-component-upside-down .input-component input:focus+label{transform:translate(10px,25px) scale(1)}.input-with-suggestions-component .input-with-suggestions-component-list{display:flex;flex-direction:column;background-color:var(--white-color);border-radius:0 0 8px 8px;height:auto;position:absolute;top:40px;left:0;width:100%;border:1px solid var(--secondary-color);border-top:none;z-index:6;overflow:hidden;list-style:none;margin:0;overflow-y:auto;padding:0 10px;max-height:40vh}.input-with-suggestions-component .input-with-suggestions-component-list li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.input-with-suggestions-component .input-with-suggestions-component-list li:last-child{border-bottom:none}.input-with-suggestions-component .input-with-suggestions-component-list li label{display:inline-block;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:10px 0;height:100%}.input-with-suggestions-component .input-with-suggestions-component-list li label:hover{cursor:pointer;color:var(--hover-color)}.date-input-component{display:flex;flex-direction:column;width:100%;gap:10px;--black-color: #000000;--error-color: #ff6565}.date-input-component *{box-sizing:border-box;margin:0;padding:0}.date-input-component.is-invalid .date-input-component-title{color:var(--error-color)}.date-input-component.is-invalid .input-component input{border:1px solid var(--error-color)}.date-input-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.date-input-component.is-invalid .input-component label{color:var(--error-color)}.date-input-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.date-input-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.date-input-component .date-input-component-title{font-weight:400;font-size:15px;line-height:22px;color:var(--black-color)}.date-input-component .date-input-components{display:flex;flex-direction:row;gap:20px;width:100%}.date-input-component .date-input-components .input-component{width:calc(33.3333333333% - 10px)}.time-picker-dropdown-component{display:flex;flex-direction:column;background-color:var(--white-color);z-index:3;overflow:hidden;width:100%;height:auto;transition:all .2s ease-in-out;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.time-picker-dropdown-component *{box-sizing:border-box;padding:0;margin:0}.time-picker-dropdown-component input[type=checkbox],.time-picker-dropdown-component input[type=radio]{position:absolute;opacity:0;left:-99999px}.time-picker-dropdown-component.is-invalid .time-picker-dropdown-component-title{background-color:var(--error-color)}.time-picker-dropdown-component.is-invalid ul{border:1px solid var(--error-color)}.time-picker-dropdown-component .time-picker-dropdown-component-title{position:sticky;top:0;height:40px;display:flex;align-items:center;justify-content:center;background-color:var(--secondary-color);color:var(--white-color);font-size:15px;line-height:100%;z-index:3;border:1px solid transparent}.time-picker-dropdown-component ul{border:1px solid var(--secondary-color);border-radius:0 0 8px 8px;list-style:none;margin:0;max-height:40vh;overflow-y:auto;padding:0 10px}.time-picker-dropdown-component ul li{height:40px;border-bottom:1px solid var(--secondary-color);display:flex;align-items:center;justify-content:flex-start;width:100%}.time-picker-dropdown-component ul li:last-child{border-bottom:none}.time-picker-dropdown-component ul li.picked-value{background-color:var(--primary-color)}.time-picker-dropdown-component ul li.picked-value label{color:var(--white-color)}.time-picker-dropdown-component ul li label{display:flex;align-items:center;justify-content:center;margin-left:10px;font-size:15px;line-height:22px;color:var(--black-color);width:100%;height:100%;z-index:1}.time-picker-dropdown-component ul li:hover:not(.picked-value){background-color:var(--secondary-color)}.time-picker-dropdown-component ul li:hover:not(.picked-value) label{cursor:pointer;color:var(--white-color)}.time-picker-component{display:flex;flex-direction:column;position:relative}.time-picker-component .time-picker-dropdowns{display:flex;position:absolute;top:40px;width:100%}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component{width:50%}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-radius:0 0 0 8px}.time-picker-component .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-radius:0 0 8px}.time-picker-component.time-picker-component-opened .input-component input{border-radius:8px 8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns{top:auto;bottom:40px}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:first-child .time-picker-dropdown-component-title{border-radius:8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-radius:0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:last-child .time-picker-dropdown-component-title{border-radius:0 8px 0 0}.time-picker-component.time-picker-component-up-side-down .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-radius:0}.time-picker-component.time-picker-component-up-side-down .input-component input{border-radius:0 0 8px 8px}.time-picker-component.time-picker-component-up-side-down .input-component input:not(:placeholder-shown)+label,.time-picker-component.time-picker-component-up-side-down .input-component input:focus+label{transform:translate(10px,25px) scale(1)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:first-child .time-picker-dropdown-component-title{border-left:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:first-child ul{border-left:1px solid var(--error-color);border-bottom:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:last-child .time-picker-dropdown-component-title{border-right:1px solid var(--error-color)}.time-picker-component.is-invalid .time-picker-dropdowns .time-picker-dropdown-component:last-child ul{border-right:1px solid var(--error-color);border-bottom:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component input{border:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.time-picker-component.is-invalid .input-component label{color:var(--error-color)}.time-picker-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.time-picker-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.textarea-component{display:flex;flex-flow:column-reverse;width:100%;align-items:flex-start;transition:all .2s ease-in-out;height:100%;position:relative;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.textarea-component *{box-sizing:border-box;padding:0;margin:0}.textarea-component.read-only-textarea-disabled-movement textarea:not(:placeholder-shown)+label,.textarea-component.read-only-textarea-disabled-movement textarea:focus+label{color:var(--secondary-color);font-size:15px;transform:translate(10px,4px) scale(1)}.textarea-component.is-invalid textarea{border:1px solid var(--error-color)}.textarea-component.is-invalid textarea:focus{border:1px solid var(--error-color)}.textarea-component.is-invalid label{color:var(--error-color)}.textarea-component.is-invalid textarea:focus+label{color:var(--error-color)}.textarea-component.is-invalid textarea:not(:placeholder-shown)+label{color:var(--error-color)}.textarea-component textarea{width:100%;height:42px;font-weight:400;font-size:15px;line-height:22px;color:var(--black-color);border:1px solid var(--secondary-color);border-radius:8px;padding:9px 15px;background:transparent;-moz-appearance:none;-webkit-appearance:none;appearance:none;resize:none}.textarea-component textarea:focus,.textarea-component textarea:hover{cursor:pointer;outline:none}.textarea-component textarea:hover{border:.01rem solid var(--hover-color)}.textarea-component textarea:focus{border:.01rem solid var(--primary-color)}.textarea-component label{display:inline-block;flex-shrink:1;flex-grow:0;font-weight:400;font-size:15px;line-height:100%;color:var(--secondary-color);background-color:var(--white-color);padding:5px;position:absolute;top:5px}.textarea-component label:hover{cursor:pointer}.textarea-component textarea:placeholder-shown+label{transform:translate(10px,4px) scale(1)}.textarea-component ::-webkit-input-placeholder{opacity:0;transition:inherit}.textarea-component textarea:not(:placeholder-shown)+label{font-weight:400;font-size:12px;color:var(--black-color)}.textarea-component textarea:not(:placeholder-shown)+label,.textarea-component textarea:focus+label{color:var(--black-color);font-size:12px;transform:translate(10px,-15px) scale(1)}.textarea-component label,.textarea-component textarea{transition:all .2s;touch-action:manipulation}.slider-component{width:100%;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.slider-component *{box-sizing:border-box;padding:0;margin:0}.slider-component .slider{height:2px;background:var(--secondary-color);cursor:pointer;position:relative}.slider-component .slider .slider-start{position:absolute;left:0;background-color:var(--primary-color);height:2px;top:0}.slider-component .slider .slider-dot{background:var(--primary-color);height:16px;width:40px;border-radius:20px;position:absolute;top:-7px;display:flex;align-items:center;justify-content:center}.slider-component .slider .slider-dot .slider-display-value{font-weight:600;font-size:12px;line-height:100%;color:var(--white-color)}.slider-component.is-invalid .slider .slider-start{background-color:var(--error-color)}.slider-component.is-invalid .slider .slider-dot{background:var(--error-color)}.calendar-component{position:relative;display:flex;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff}.calendar-component *{box-sizing:border-box;padding:0;margin:0}.calendar-component.is-invalid .input-component input{border:1px solid var(--error-color)}.calendar-component.is-invalid .input-component input:focus{border:1px solid var(--error-color)}.calendar-component.is-invalid .input-component label{color:var(--error-color)}.calendar-component.is-invalid .input-component input:focus+label{color:var(--error-color)}.calendar-component.is-invalid .input-component input:not(:placeholder-shown)+label{color:var(--error-color)}.calendar-component.is-invalid .calendar-container{border:1px solid var(--error-color);border-top:none 0}.calendar-component.calendar-component-opened .input-component input{border-radius:8px 8px 0 0}.calendar-component .calendar-container{width:100%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;z-index:10;background-color:var(--white-color);border:1px solid var(--secondary-color);border-top:none;border-radius:0 0 8px 8px;position:absolute;top:40px}.calendar-component .calendar-container .calendar-header{display:flex;justify-content:center;align-items:center;padding:10px;width:100%;gap:20px}.calendar-component .calendar-container .calendar-header .date-text{width:150px;text-align:center}.calendar-component .calendar-container .calendar-header .calendar-arrow{width:11px;height:18px;display:block;display:flex;align-items:center}.calendar-component .calendar-container .calendar-header .calendar-arrow.left{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI3XzYpIj4KPHBhdGggZD0iTTkuMDAwMDEgOC45OTk5OUw5LjcwNzEyIDkuNzA3MUwxMC40MTQyIDguOTk5OTlMOS43MDcxMiA4LjI5Mjg4TDkuMDAwMDEgOC45OTk5OVpNMC4yOTI5MSAxLjcwNzA5TDguMjkyOSA5LjcwNzFMOS43MDcxMiA4LjI5Mjg4TDEuNzA3MTIgMC4yOTI4ODdMMC4yOTI5MSAxLjcwNzA5Wk04LjI5MjkgOC4yOTI4OEwwLjI5MjkwOCAxNi4yOTI5TDEuNzA3MTIgMTcuNzA3MUw5LjcwNzEyIDkuNzA3MUw4LjI5MjkgOC4yOTI4OFoiIGZpbGw9IiMxQTJDNTEiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMjdfNikiPgo8cGF0aCBkPSJNMi4wMDAwMyAyN0wxLjI5MjkyIDI2LjI5MjlMMC41ODU4MTUgMjdMMS4yOTI5MiAyNy43MDcxTDIuMDAwMDMgMjdaTTEwLjcwNzEgMzQuMjkyOUwyLjcwNzE0IDI2LjI5MjlMMS4yOTI5MiAyNy43MDcxTDkuMjkyOTIgMzUuNzA3MUwxMC43MDcxIDM0LjI5MjlaTTIuNzA3MTQgMjcuNzA3MUwxMC43MDcxIDE5LjcwNzFMOS4yOTI5MiAxOC4yOTI5TDEuMjkyOTIgMjYuMjkyOUwyLjcwNzE0IDI3LjcwNzFaIiBmaWxsPSIjMUEyQzUxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMTgpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMzYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==) 0 -18px}.calendar-component .calendar-container .calendar-header .calendar-arrow.right{background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAxMSAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzI3XzYpIj4KPHBhdGggZD0iTTkuMDAwMDEgOC45OTk5OUw5LjcwNzEyIDkuNzA3MUwxMC40MTQyIDguOTk5OTlMOS43MDcxMiA4LjI5Mjg4TDkuMDAwMDEgOC45OTk5OVpNMC4yOTI5MSAxLjcwNzA5TDguMjkyOSA5LjcwNzFMOS43MDcxMiA4LjI5Mjg4TDEuNzA3MTIgMC4yOTI4ODdMMC4yOTI5MSAxLjcwNzA5Wk04LjI5MjkgOC4yOTI4OEwwLjI5MjkwOCAxNi4yOTI5TDEuNzA3MTIgMTcuNzA3MUw5LjcwNzEyIDkuNzA3MUw4LjI5MjkgOC4yOTI4OFoiIGZpbGw9IiMxQTJDNTEiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDFfMjdfNikiPgo8cGF0aCBkPSJNMi4wMDAwMyAyN0wxLjI5MjkyIDI2LjI5MjlMMC41ODU4MTUgMjdMMS4yOTI5MiAyNy43MDcxTDIuMDAwMDMgMjdaTTEwLjcwNzEgMzQuMjkyOUwyLjcwNzE0IDI2LjI5MjlMMS4yOTI5MiAyNy43MDcxTDkuMjkyOTIgMzUuNzA3MUwxMC43MDcxIDM0LjI5MjlaTTIuNzA3MTQgMjcuNzA3MUwxMC43MDcxIDE5LjcwNzFMOS4yOTI5MiAxOC4yOTI5TDEuMjkyOTIgMjYuMjkyOUwyLjcwNzE0IDI3LjcwNzFaIiBmaWxsPSIjMUEyQzUxIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMTgpIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMjdfNiI+CjxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0ibWF0cml4KDAgLTEgMSAwIDAgMzYpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==)-0 0rem}.calendar-component .calendar-container .calendar-header .calendar-arrow:hover{cursor:pointer;opacity:.7}.calendar-component .calendar-container .calendar-days{display:flex;justify-content:flex-start;align-items:flex-start;width:100%;border-top:1px solid var(--secondary-color);height:49.5px}.calendar-component .calendar-container .calendar-days.day-names{border-top:none}.calendar-component .calendar-container .calendar-days .calendar-day{width:14.2857142857%;height:100%;display:flex;justify-content:center;align-items:center;border-right:1px solid var(--secondary-color);font-weight:400;font-size:12px;line-height:12px;color:var(--black-color)}.calendar-component .calendar-container .calendar-days .calendar-day:nth-child(7n){border-right:none}.calendar-component .calendar-container .calendar-days .calendar-day:hover{cursor:pointer;background-color:var(--secondary-color);color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-pass,.calendar-component .calendar-container .calendar-days .calendar-day.date-future{color:var(--secondary-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-pass:hover,.calendar-component .calendar-container .calendar-days .calendar-day.date-future:hover{color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-disabled{color:var(--secondary-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-disabled:hover{color:var(--secondary-color);cursor:not-allowed;background-color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.date-active,.calendar-component .calendar-container .calendar-days .calendar-day.date-current,.calendar-component .calendar-container .calendar-days .calendar-day.date-active:hover,.calendar-component .calendar-container .calendar-days .calendar-day.date-current:hover{background-color:var(--primary-color);color:var(--white-color)}.calendar-component .calendar-container .calendar-days .calendar-day.day-name{border-right:none}.calendar-component .calendar-container .calendar-days .calendar-day.day-name:hover{cursor:default;background-color:var(--white-color);color:var(--black-color)}.checkbox-slider{display:flex;align-items:center;justify-content:flex-start;gap:10px;width:auto;user-select:none;--error-color: #ff6565;--primary-color: #1a2c51;--secondary-color: #8d96a8;--hover-color: #223a6b;--black-color: #000;--white-color: #fff;--green-color: #7cd920}.checkbox-slider *{box-sizing:border-box;padding:0;margin:0}.checkbox-slider .checkbox-switch{position:relative;display:inline-flex;width:40px;height:18px;cursor:pointer}.checkbox-slider .checkbox-switch:hover{cursor:pointer;opacity:.7}.checkbox-slider .checkbox-switch label{display:flex;vertical-align:middle;justify-content:flex-start;position:relative;display:inline-block;width:40px;height:18px;cursor:pointer}.checkbox-slider .checkbox-switch input{opacity:0;width:0;height:0}.checkbox-slider .checkbox-switch .slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--secondary-color);transition:.4s;border-radius:40px}.checkbox-slider .checkbox-switch .slider:before{position:absolute;content:"";height:10px;width:10px;border-radius:18px;left:5px;bottom:4px;background-color:var(--white-color);transition:.25s}.checkbox-slider .checkbox-switch input:checked+.slider{background-color:var(--green-color)}.checkbox-slider .checkbox-switch input:checked+.slider:before{transform:translate(20px)}.checkbox-slider .checkbox-slider-label{font-size:15px;line-height:140%;padding-top:2px;color:var(--black-color);cursor:pointer}.checkbox-slider.is-invalid .checkbox-switch .slider{background-color:var(--error-color)}.checkbox-slider.is-invalid .checkbox-slider-label{color:var(--error-color)}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { defineComponent as Se, ref as U, computed as H, openBlock as x, createElementBlock as V, normalizeClass as de, withDirectives as ve, createElementVNode as D, unref as A, isRef as ne, vModelDynamic as ci, createTextVNode as Pe, toDisplayString as q, Fragment as ye, createCommentVNode as se, onMounted as Gt, resolveDirective as Bt, createVNode as Ce, renderList as Xe, vModelCheckbox as Dr, vModelRadio as Mn, nextTick as Je, vModelText as di, reactive as fi, watch as Zt, normalizeStyle as tr } from "vue";
const hi = ["type", "id", "readonly"], mi = ["for"], We = /* @__PURE__ */ Se({
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
    const r = n, s = U(null), l = Math.random().toString(36).slice(2), o = H({
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
    return e({ focusInput: d }), (h, E) => (x(), V("div", {
      class: de(["input-component", {
        "read-only-input-disabled-movement": n.readOnly && !n.modelValue
      }])
    }, [
      ve(D("input", {
        type: n.inputType,
        placeholder: " ",
        id: "input" + A(l),
        "onUpdate:modelValue": E[0] || (E[0] = (M) => ne(o) ? o.value = M : null),
        readonly: n.readOnly,
        ref_key: "inputComponent",
        ref: s
      }, null, 8, hi), [
        [ci, A(o)]
      ]),
      D("label", {
        for: "input" + A(l)
      }, [
        Pe(q(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), V(ye, { key: 0 }, [
          Pe("- " + q(n.errorMessage), 1)
        ], 64)) : se("", !0)
      ], 8, mi),
      n.readOnly ? se("", !0) : (x(), V("div", {
        key: 0,
        class: de(["clear-input", { show: n.modelValue }]),
        onClick: c
      }, null, 2))
    ], 2));
  }
});
const pi = { class: "dropdown-component" }, vi = {
  key: 0,
  class: "dropdown-component-outside-text"
}, yi = /* @__PURE__ */ D("div", { class: "dropdown-arrow-box" }, null, -1), gi = {
  key: 0,
  class: "search-box"
}, Ti = {
  key: 0,
  class: "checkbox"
}, wi = ["value", "id"], Ei = ["for", "title"], Si = ["value", "id"], Oi = ["for", "title"], Ii = { key: 0 }, Mi = /* @__PURE__ */ D("label", null, "No results found", -1), Ni = [
  Mi
], Ko = /* @__PURE__ */ Se({
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
    const t = n, r = U(!1), s = U(!1), l = U(), o = U(""), c = H({
      get() {
        if (!t.options)
          return null;
        if (t.multiSelect)
          return t.modelValue ?? [];
        for (let p = 0; p < t.options.length; p++)
          if (t.valueFunction(t.options[p]) === t.modelValue)
            return t.options[p];
        return null;
      },
      set(p) {
        p && (t.multiSelect ? e("update:modelValue", p) : (e("update:modelValue", t.valueFunction(p)), O()));
      }
    }), d = H(() => t.options ? o.value ? t.options.filter((p) => t.displayFunction(p).toLowerCase().includes(o.value.toLowerCase())) : t.options : []);
    Gt(() => {
      h();
    });
    function h() {
      t.options && t.options.length == 1 && (c.value = t.options[0]);
    }
    function E() {
      return c.value ? t.displayFunction(c.value) : t.placeHolder;
    }
    function M() {
      r.value = !0, y();
    }
    function O() {
      r.value = !1, s.value = !1, o.value = "";
    }
    function y() {
      Je(() => {
        const p = l.value;
        if (!p)
          return;
        const m = p.getBoundingClientRect();
        window.innerHeight - m.bottom > 0 ? s.value = !1 : s.value = !0;
      });
    }
    function I() {
      const p = c.value;
      if (t.multiSelect && p && (p == null ? void 0 : p.length) > 0) {
        let m = "";
        for (let g = 0; g < (p == null ? void 0 : p.length); g++) {
          if (!t.options)
            return null;
          for (let w = 0; w < t.options.length; w++)
            t.options[w] === p[g] && (m += t.displayFunction(t.options[w]) + ", ");
          m = m.replace(/\w\S*/g, function(w) {
            return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase();
          });
        }
        return m = m.slice(0, -2), (p == null ? void 0 : p.length) > 3 && (m = (p == null ? void 0 : p.length) + " " + t.placeHolder + "s selected "), m;
      }
      return null;
    }
    return (p, m) => {
      const g = Bt("click-outside");
      return x(), V("div", pi, [
        D("div", {
          class: de(["dropdown-component-outside", { "up-side-down": s.value && r.value, "dropdown-list-opened": r.value }]),
          onClick: M
        }, [
          (n.multiSelect ? I() : A(c)) ? (x(), V("p", vi, q(n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder), 1)) : se("", !0),
          D("p", {
            class: de(["dropdown-component-outside-title", { "normal-color": n.multiSelect ? I() : A(c) }])
          }, q(n.multiSelect ? I() ? I() : n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder : A(c) && E() ? E() : n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder), 3),
          yi
        ], 2),
        r.value ? ve((x(), V("div", {
          key: 0,
          class: de(["dropdown-component-opened", { "up-side-down": s.value }]),
          ref_key: "dropdownComponent",
          ref: l
        }, [
          n.searchBox ? (x(), V("div", gi, [
            Ce(We, {
              modelValue: o.value,
              "onUpdate:modelValue": m[0] || (m[0] = (w) => o.value = w),
              placeHolder: "Search"
            }, null, 8, ["modelValue"])
          ])) : se("", !0),
          D("ul", null, [
            (x(!0), V(ye, null, Xe(A(d), (w, N) => (x(), V("li", { key: N }, [
              n.multiSelect ? (x(), V("div", Ti, [
                ve(D("input", {
                  type: "checkbox",
                  value: w,
                  id: n.valueFunction(w) + "_" + N,
                  "onUpdate:modelValue": m[1] || (m[1] = (_) => ne(c) ? c.value = _ : null)
                }, null, 8, wi), [
                  [Dr, A(c)]
                ]),
                D("label", {
                  for: n.valueFunction(w) + "_" + N,
                  title: n.displayFunction(w),
                  class: "body-text radio-label"
                }, q(n.displayFunction(w)), 9, Ei)
              ])) : (x(), V(ye, { key: 1 }, [
                ve(D("input", {
                  type: "radio",
                  value: w,
                  id: n.valueFunction(w) + "_" + N,
                  "onUpdate:modelValue": m[2] || (m[2] = (_) => ne(c) ? c.value = _ : null)
                }, null, 8, Si), [
                  [Mn, A(c)]
                ]),
                D("label", {
                  for: n.valueFunction(w) + "_" + N,
                  title: n.displayFunction(w)
                }, q(n.displayFunction(w)), 9, Oi)
              ], 64))
            ]))), 128)),
            A(d).length == 0 ? (x(), V("li", Ii, Ni)) : se("", !0)
          ])
        ], 2)), [
          [g, O]
        ]) : se("", !0)
      ]);
    };
  }
});
const Ci = ["value", "id"], ki = ["for", "title"], Di = { key: 0 }, xi = /* @__PURE__ */ D("label", null, "No results found", -1), Vi = [
  xi
], el = /* @__PURE__ */ Se({
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
    const t = n, r = U(!1), s = U(!1), l = U(), o = H({
      get() {
        return c.value;
      },
      set(O) {
        c.value = O;
      }
    });
    let c = H({
      get() {
        return t.modelValue;
      },
      set(O) {
        e("update:modelValue", O);
      }
    });
    const d = H(() => t.suggestions ? c.value ? t.suggestions.filter((O) => {
      if (typeof O == "string")
        return O.toLowerCase().includes(c.value.toLowerCase());
    }) : t.suggestions : []);
    function h() {
      r.value = !0, M();
    }
    function E() {
      r.value = !1, s.value = !1;
    }
    function M() {
      Je(() => {
        const O = l.value;
        if (!O)
          return;
        const y = O.getBoundingClientRect();
        window.innerHeight - y.bottom > 0 ? s.value = !1 : s.value = !0;
      });
    }
    return (O, y) => {
      const I = Bt("click-outside");
      return ve((x(), V("div", {
        class: de(["input-with-suggestions-component", {
          "input-with-suggestions-component-opened": r.value,
          "input-with-suggestions-component-upside-down": s.value
        }])
      }, [
        Ce(We, {
          placeHolder: n.placeHolder,
          modelValue: A(c),
          "onUpdate:modelValue": y[0] || (y[0] = (p) => ne(c) ? c.value = p : c = p),
          "error-message": n.errorMessage,
          onClick: h
        }, null, 8, ["placeHolder", "modelValue", "error-message"]),
        r.value ? (x(), V("ul", {
          key: 0,
          class: "input-with-suggestions-component-list",
          ref_key: "dropdownComponent",
          ref: l
        }, [
          (x(!0), V(ye, null, Xe(A(d), (p, m) => (x(), V("li", { key: m }, [
            ve(D("input", {
              type: "radio",
              value: p,
              id: m + "",
              "onUpdate:modelValue": y[1] || (y[1] = (g) => ne(o) ? o.value = g : null)
            }, null, 8, Ci), [
              [Mn, A(o)]
            ]),
            D("label", {
              for: m + "",
              title: p + ""
            }, q(p), 9, ki)
          ]))), 128)),
          A(d).length == 0 ? (x(), V("li", Di, Vi)) : se("", !0)
        ], 512)) : se("", !0)
      ], 2)), [
        [I, E]
      ]);
    };
  }
});
const bi = { class: "date-input-component-title" }, _i = { class: "date-input-components" }, tl = /* @__PURE__ */ Se({
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
    const h = H({
      get: () => o.value,
      set: (y) => {
        const I = parseInt(y, 10);
        o.value = "0", Je(() => {
          I > 31 && (y = "31"), o.value = y, O();
        }), y && I > 4 && s.value && s.value.focusInput(), O();
      }
    }), E = H({
      get: () => c.value,
      set: (y) => {
        const I = parseInt(y, 10);
        c.value = "0", Je(() => {
          I > 12 && (y = "12"), c.value = y, O();
        }), y && I > 2 && r.value && r.value.focusInput(), O();
      }
    }), M = H({
      get: () => d.value,
      set: (y) => {
        const I = parseInt(y, 10);
        if (I < 1e3)
          return;
        const p = d.value;
        d.value = "0", Je(() => {
          I > 9999 && (y = p), d.value = y, O();
        }), O();
      }
    });
    function O() {
      const y = parseInt(M.value, 10), I = parseInt(E.value, 10) - 1, p = parseInt(h.value, 10), m = new Date(y, I, p, 0, 0, 0);
      if (!h.value || !E.value || !M.value || Number.isNaN(m))
        return;
      const g = m.getFullYear(), w = m.getMonth() + 1, N = w < 10 ? "0" + w : w, _ = m.getDate(), J = _ < 10 ? "0" + _ : _, B = `${g}-${N}-${J}`;
      e("update:modelValue", B);
    }
    return (y, I) => (x(), V("div", {
      class: "date-input-component",
      ref_key: "parentComponent",
      ref: l
    }, [
      D("p", bi, [
        Pe(q(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), V(ye, { key: 0 }, [
          Pe("- " + q(n.errorMessage), 1)
        ], 64)) : se("", !0)
      ]),
      D("div", _i, [
        Ce(We, {
          "input-type": "number",
          modelValue: A(h),
          "onUpdate:modelValue": I[0] || (I[0] = (p) => ne(h) ? h.value = p : null),
          "place-holder": "D"
        }, null, 8, ["modelValue"]),
        Ce(We, {
          "input-type": "number",
          ref_key: "monthRef",
          ref: s,
          modelValue: A(E),
          "onUpdate:modelValue": I[1] || (I[1] = (p) => ne(E) ? E.value = p : null),
          "place-holder": "M"
        }, null, 8, ["modelValue"]),
        Ce(We, {
          "input-type": "number",
          ref_key: "yearRef",
          ref: r,
          modelValue: A(M),
          "onUpdate:modelValue": I[2] || (I[2] = (p) => ne(M) ? M.value = p : null),
          "place-holder": "Y"
        }, null, 8, ["modelValue"])
      ])
    ], 512));
  }
});
const Fi = { class: "time-picker-dropdown-component" }, Ai = { class: "time-picker-dropdown-component-title" }, Pi = ["value", "id"], Li = ["for", "title"], nr = /* @__PURE__ */ Se({
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
    const t = n, r = H({
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
    Gt(() => {
      s();
    });
    function s() {
      t.options && t.options.length == 1 && (r.value = t.options[0]);
    }
    return (l, o) => (x(), V("div", Fi, [
      D("p", Ai, q(n.placeHolder), 1),
      D("ul", null, [
        (x(!0), V(ye, null, Xe(n.options, (c, d) => (x(), V("li", {
          key: d,
          class: de({ "picked-value": n.valueFunction(c) === n.modelValue })
        }, [
          ve(D("input", {
            type: "radio",
            value: c,
            id: n.valueFunction(c) + "_" + d,
            "onUpdate:modelValue": o[0] || (o[0] = (h) => ne(r) ? r.value = h : null)
          }, null, 8, Pi), [
            [Mn, A(r)]
          ]),
          D("label", {
            for: n.valueFunction(c) + "_" + d,
            title: n.displayFunction(c)
          }, q(n.displayFunction(c)), 9, Li)
        ], 2))), 128))
      ])
    ]));
  }
});
const nl = /* @__PURE__ */ Se({
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
    const t = n, r = U(!1), s = U(), l = U(!1), o = H(() => {
      const p = [];
      for (let m = t.timeFrom; m < t.timeTo; m++)
        p.push({ value: M(m), name: M(m) });
      return p;
    }), c = H(() => {
      const p = [];
      let m = t.minuteInterval;
      m === 0 ? m = 60 : m || (m = 1);
      for (let g = 0; g < 60; g += m)
        p.push({ value: M(g), name: M(g) });
      return p;
    }), d = H({
      get() {
        var p;
        return ((p = t.modelValue) == null ? void 0 : p.hour) ?? "--";
      },
      set(p) {
        var m;
        e("update:modelValue", {
          hour: p,
          minute: (m = t.modelValue) == null ? void 0 : m.minute
        });
      }
    }), h = H({
      get: () => {
        var p;
        return ((p = t.modelValue) == null ? void 0 : p.minute) ?? "--";
      },
      set: (p) => {
        var m;
        e("update:modelValue", {
          hour: (m = t.modelValue) == null ? void 0 : m.hour,
          minute: p
        });
      }
    }), E = H(() => `${d.value}:${h.value}`);
    function M(p) {
      return p < 10 ? `0${p}` : String(p);
    }
    function O() {
      r.value = !0, I();
    }
    function y() {
      r.value = !1, l.value = !1;
    }
    function I() {
      Je(() => {
        const p = s.value;
        if (!p)
          return;
        const m = p.getBoundingClientRect();
        window.innerHeight - m.bottom > 0 ? l.value = !1 : l.value = !0;
      });
    }
    return (p, m) => {
      const g = Bt("click-outside");
      return x(), V("div", {
        class: de(["time-picker-component", {
          "time-picker-component-opened": r.value,
          "time-picker-component-up-side-down": l.value
        }])
      }, [
        Ce(We, {
          "model-value": A(E),
          onClick: O,
          "read-only": !0,
          "place-holder": n.errorMessage ? n.placeHolder + " - " + n.errorMessage : n.placeHolder
        }, null, 8, ["model-value", "place-holder"]),
        r.value ? ve((x(), V("div", {
          key: 0,
          class: "time-picker-dropdowns",
          ref_key: "timePickerComponentDropdowns",
          ref: s
        }, [
          Ce(nr, {
            modelValue: A(d),
            "onUpdate:modelValue": m[0] || (m[0] = (w) => ne(d) ? d.value = w : null),
            options: A(o),
            "place-holder": "HH"
          }, null, 8, ["modelValue", "options"]),
          Ce(nr, {
            modelValue: A(h),
            "onUpdate:modelValue": m[1] || (m[1] = (w) => ne(h) ? h.value = w : null),
            options: A(c),
            "place-holder": "MM"
          }, null, 8, ["modelValue", "options"])
        ])), [
          [g, y]
        ]) : se("", !0)
      ], 2);
    };
  }
});
const Ui = ["id", "readonly"], Ri = ["for"], rl = /* @__PURE__ */ Se({
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
    const t = n, r = Math.random().toString(36).slice(2), s = U(null), l = H({
      get: () => t.modelValue,
      set: (c) => {
        e("update:modelValue", c);
      }
    });
    function o() {
      t.shouldResize && s.value && (s.value.style.height = "42px", s.value.style.height = s.value.scrollHeight + 2 + "px", s.value.scrollHeight > s.value.offsetHeight && (s.value.style.height = s.value.scrollHeight + 2 + "px"), t.modelValue === "" && (s.value.style.height = "42px"));
    }
    return (c, d) => (x(), V("div", {
      class: de(["textarea-component", {
        "read-only-textarea-disabled-movement": n.readOnly && !n.modelValue
      }])
    }, [
      ve(D("textarea", {
        placeholder: " ",
        id: "textarea" + A(r),
        "onUpdate:modelValue": d[0] || (d[0] = (h) => ne(l) ? l.value = h : null),
        onInput: d[1] || (d[1] = (h) => o()),
        ref_key: "textAreaComponent",
        ref: s,
        readonly: n.readOnly
      }, null, 40, Ui), [
        [di, A(l)]
      ]),
      D("label", {
        for: "textarea" + A(r)
      }, [
        Pe(q(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), V(ye, { key: 0 }, [
          Pe("- " + q(n.errorMessage), 1)
        ], 64)) : se("", !0)
      ], 8, Ri)
    ], 2));
  }
});
var gn = {}, Hi = {
  get exports() {
    return gn;
  },
  set exports(n) {
    gn = n;
  }
};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(n) {
  (function(e, t, r, s) {
    var l = ["", "webkit", "Moz", "MS", "ms", "o"], o = t.createElement("div"), c = "function", d = Math.round, h = Math.abs, E = Date.now;
    function M(i, a, u) {
      return setTimeout(N(i, u), a);
    }
    function O(i, a, u) {
      return Array.isArray(i) ? (y(i, u[a], u), !0) : !1;
    }
    function y(i, a, u) {
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
    function I(i, a, u) {
      var f = "DEPRECATED METHOD: " + a + `
` + u + ` AT 
`;
      return function() {
        var v = new Error("get-stack-trace"), S = v && v.stack ? v.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace", k = e.console && (e.console.warn || e.console.log);
        return k && k.call(e.console, f, S), i.apply(this, arguments);
      };
    }
    var p;
    typeof Object.assign != "function" ? p = function(a) {
      if (a === s || a === null)
        throw new TypeError("Cannot convert undefined or null to object");
      for (var u = Object(a), f = 1; f < arguments.length; f++) {
        var v = arguments[f];
        if (v !== s && v !== null)
          for (var S in v)
            v.hasOwnProperty(S) && (u[S] = v[S]);
      }
      return u;
    } : p = Object.assign;
    var m = I(function(a, u, f) {
      for (var v = Object.keys(u), S = 0; S < v.length; )
        (!f || f && a[v[S]] === s) && (a[v[S]] = u[v[S]]), S++;
      return a;
    }, "extend", "Use `assign`."), g = I(function(a, u) {
      return m(a, u, !0);
    }, "merge", "Use `assign`.");
    function w(i, a, u) {
      var f = a.prototype, v;
      v = i.prototype = Object.create(f), v.constructor = i, v._super = f, u && p(v, u);
    }
    function N(i, a) {
      return function() {
        return i.apply(a, arguments);
      };
    }
    function _(i, a) {
      return typeof i == c ? i.apply(a && a[0] || s, a) : i;
    }
    function J(i, a) {
      return i === s ? a : i;
    }
    function B(i, a, u) {
      y(De(a), function(f) {
        i.addEventListener(f, u, !1);
      });
    }
    function P(i, a, u) {
      y(De(a), function(f) {
        i.removeEventListener(f, u, !1);
      });
    }
    function Z(i, a) {
      for (; i; ) {
        if (i == a)
          return !0;
        i = i.parentNode;
      }
      return !1;
    }
    function re(i, a) {
      return i.indexOf(a) > -1;
    }
    function De(i) {
      return i.trim().split(/\s+/g);
    }
    function xe(i, a, u) {
      if (i.indexOf && !u)
        return i.indexOf(a);
      for (var f = 0; f < i.length; ) {
        if (u && i[f][u] == a || !u && i[f] === a)
          return f;
        f++;
      }
      return -1;
    }
    function St(i) {
      return Array.prototype.slice.call(i, 0);
    }
    function _n(i, a, u) {
      for (var f = [], v = [], S = 0; S < i.length; ) {
        var k = a ? i[S][a] : i[S];
        xe(v, k) < 0 && f.push(i[S]), v[S] = k, S++;
      }
      return u && (a ? f = f.sort(function(X, K) {
        return X[a] > K[a];
      }) : f = f.sort()), f;
    }
    function Ot(i, a) {
      for (var u, f, v = a[0].toUpperCase() + a.slice(1), S = 0; S < l.length; ) {
        if (u = l[S], f = u ? u + v : a, f in i)
          return f;
        S++;
      }
      return s;
    }
    var Ds = 1;
    function xs() {
      return Ds++;
    }
    function Fn(i) {
      var a = i.ownerDocument || i;
      return a.defaultView || a.parentWindow || e;
    }
    var Vs = /mobile|tablet|ip(ad|hone|od)|android/i, An = "ontouchstart" in e, bs = Ot(e, "PointerEvent") !== s, _s = An && Vs.test(navigator.userAgent), rt = "touch", Fs = "pen", Kt = "mouse", As = "kinect", Ps = 25, Q = 1, Le = 2, W = 4, te = 8, It = 1, st = 2, it = 4, at = 8, ot = 16, Te = st | it, Ue = at | ot, Pn = Te | Ue, Ln = ["x", "y"], Mt = ["clientX", "clientY"];
    function ae(i, a) {
      var u = this;
      this.manager = i, this.callback = a, this.element = i.element, this.target = i.options.inputTarget, this.domHandler = function(f) {
        _(i.options.enable, [i]) && u.handler(f);
      }, this.init();
    }
    ae.prototype = {
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
        this.evEl && B(this.element, this.evEl, this.domHandler), this.evTarget && B(this.target, this.evTarget, this.domHandler), this.evWin && B(Fn(this.element), this.evWin, this.domHandler);
      },
      /**
       * unbind the events
       */
      destroy: function() {
        this.evEl && P(this.element, this.evEl, this.domHandler), this.evTarget && P(this.target, this.evTarget, this.domHandler), this.evWin && P(Fn(this.element), this.evWin, this.domHandler);
      }
    };
    function Ls(i) {
      var a, u = i.options.inputClass;
      return u ? a = u : bs ? a = tn : _s ? a = kt : An ? a = nn : a = Ct, new a(i, Us);
    }
    function Us(i, a, u) {
      var f = u.pointers.length, v = u.changedPointers.length, S = a & Q && f - v === 0, k = a & (W | te) && f - v === 0;
      u.isFirst = !!S, u.isFinal = !!k, S && (i.session = {}), u.eventType = a, Rs(i, u), i.emit("hammer.input", u), i.recognize(u), i.session.prevInput = u;
    }
    function Rs(i, a) {
      var u = i.session, f = a.pointers, v = f.length;
      u.firstInput || (u.firstInput = Un(a)), v > 1 && !u.firstMultiple ? u.firstMultiple = Un(a) : v === 1 && (u.firstMultiple = !1);
      var S = u.firstInput, k = u.firstMultiple, G = k ? k.center : S.center, X = a.center = Rn(f);
      a.timeStamp = E(), a.deltaTime = a.timeStamp - S.timeStamp, a.angle = en(G, X), a.distance = Nt(G, X), Hs(u, a), a.offsetDirection = $n(a.deltaX, a.deltaY);
      var K = Hn(a.deltaTime, a.deltaX, a.deltaY);
      a.overallVelocityX = K.x, a.overallVelocityY = K.y, a.overallVelocity = h(K.x) > h(K.y) ? K.x : K.y, a.scale = k ? Ws(k.pointers, f) : 1, a.rotation = k ? Zs(k.pointers, f) : 0, a.maxPointers = u.prevInput ? a.pointers.length > u.prevInput.maxPointers ? a.pointers.length : u.prevInput.maxPointers : a.pointers.length, $s(u, a);
      var Ee = i.element;
      Z(a.srcEvent.target, Ee) && (Ee = a.srcEvent.target), a.target = Ee;
    }
    function Hs(i, a) {
      var u = a.center, f = i.offsetDelta || {}, v = i.prevDelta || {}, S = i.prevInput || {};
      (a.eventType === Q || S.eventType === W) && (v = i.prevDelta = {
        x: S.deltaX || 0,
        y: S.deltaY || 0
      }, f = i.offsetDelta = {
        x: u.x,
        y: u.y
      }), a.deltaX = v.x + (u.x - f.x), a.deltaY = v.y + (u.y - f.y);
    }
    function $s(i, a) {
      var u = i.lastInterval || a, f = a.timeStamp - u.timeStamp, v, S, k, G;
      if (a.eventType != te && (f > Ps || u.velocity === s)) {
        var X = a.deltaX - u.deltaX, K = a.deltaY - u.deltaY, Ee = Hn(f, X, K);
        S = Ee.x, k = Ee.y, v = h(Ee.x) > h(Ee.y) ? Ee.x : Ee.y, G = $n(X, K), i.lastInterval = a;
      } else
        v = u.velocity, S = u.velocityX, k = u.velocityY, G = u.direction;
      a.velocity = v, a.velocityX = S, a.velocityY = k, a.direction = G;
    }
    function Un(i) {
      for (var a = [], u = 0; u < i.pointers.length; )
        a[u] = {
          clientX: d(i.pointers[u].clientX),
          clientY: d(i.pointers[u].clientY)
        }, u++;
      return {
        timeStamp: E(),
        pointers: a,
        center: Rn(a),
        deltaX: i.deltaX,
        deltaY: i.deltaY
      };
    }
    function Rn(i) {
      var a = i.length;
      if (a === 1)
        return {
          x: d(i[0].clientX),
          y: d(i[0].clientY)
        };
      for (var u = 0, f = 0, v = 0; v < a; )
        u += i[v].clientX, f += i[v].clientY, v++;
      return {
        x: d(u / a),
        y: d(f / a)
      };
    }
    function Hn(i, a, u) {
      return {
        x: a / i || 0,
        y: u / i || 0
      };
    }
    function $n(i, a) {
      return i === a ? It : h(i) >= h(a) ? i < 0 ? st : it : a < 0 ? at : ot;
    }
    function Nt(i, a, u) {
      u || (u = Ln);
      var f = a[u[0]] - i[u[0]], v = a[u[1]] - i[u[1]];
      return Math.sqrt(f * f + v * v);
    }
    function en(i, a, u) {
      u || (u = Ln);
      var f = a[u[0]] - i[u[0]], v = a[u[1]] - i[u[1]];
      return Math.atan2(v, f) * 180 / Math.PI;
    }
    function Zs(i, a) {
      return en(a[1], a[0], Mt) + en(i[1], i[0], Mt);
    }
    function Ws(i, a) {
      return Nt(a[0], a[1], Mt) / Nt(i[0], i[1], Mt);
    }
    var zs = {
      mousedown: Q,
      mousemove: Le,
      mouseup: W
    }, Ys = "mousedown", qs = "mousemove mouseup";
    function Ct() {
      this.evEl = Ys, this.evWin = qs, this.pressed = !1, ae.apply(this, arguments);
    }
    w(Ct, ae, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(a) {
        var u = zs[a.type];
        u & Q && a.button === 0 && (this.pressed = !0), u & Le && a.which !== 1 && (u = W), this.pressed && (u & W && (this.pressed = !1), this.callback(this.manager, u, {
          pointers: [a],
          changedPointers: [a],
          pointerType: Kt,
          srcEvent: a
        }));
      }
    });
    var Gs = {
      pointerdown: Q,
      pointermove: Le,
      pointerup: W,
      pointercancel: te,
      pointerout: te
    }, Bs = {
      2: rt,
      3: Fs,
      4: Kt,
      5: As
      // see https://twitter.com/jacobrossi/status/480596438489890816
    }, Zn = "pointerdown", Wn = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Zn = "MSPointerDown", Wn = "MSPointerMove MSPointerUp MSPointerCancel");
    function tn() {
      this.evEl = Zn, this.evWin = Wn, ae.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    w(tn, ae, {
      /**
       * handle mouse events
       * @param {Object} ev
       */
      handler: function(a) {
        var u = this.store, f = !1, v = a.type.toLowerCase().replace("ms", ""), S = Gs[v], k = Bs[a.pointerType] || a.pointerType, G = k == rt, X = xe(u, a.pointerId, "pointerId");
        S & Q && (a.button === 0 || G) ? X < 0 && (u.push(a), X = u.length - 1) : S & (W | te) && (f = !0), !(X < 0) && (u[X] = a, this.callback(this.manager, S, {
          pointers: u,
          changedPointers: [a],
          pointerType: k,
          srcEvent: a
        }), f && u.splice(X, 1));
      }
    });
    var Xs = {
      touchstart: Q,
      touchmove: Le,
      touchend: W,
      touchcancel: te
    }, Js = "touchstart", js = "touchstart touchmove touchend touchcancel";
    function zn() {
      this.evTarget = Js, this.evWin = js, this.started = !1, ae.apply(this, arguments);
    }
    w(zn, ae, {
      handler: function(a) {
        var u = Xs[a.type];
        if (u === Q && (this.started = !0), !!this.started) {
          var f = Qs.call(this, a, u);
          u & (W | te) && f[0].length - f[1].length === 0 && (this.started = !1), this.callback(this.manager, u, {
            pointers: f[0],
            changedPointers: f[1],
            pointerType: rt,
            srcEvent: a
          });
        }
      }
    });
    function Qs(i, a) {
      var u = St(i.touches), f = St(i.changedTouches);
      return a & (W | te) && (u = _n(u.concat(f), "identifier", !0)), [u, f];
    }
    var Ks = {
      touchstart: Q,
      touchmove: Le,
      touchend: W,
      touchcancel: te
    }, ei = "touchstart touchmove touchend touchcancel";
    function kt() {
      this.evTarget = ei, this.targetIds = {}, ae.apply(this, arguments);
    }
    w(kt, ae, {
      handler: function(a) {
        var u = Ks[a.type], f = ti.call(this, a, u);
        f && this.callback(this.manager, u, {
          pointers: f[0],
          changedPointers: f[1],
          pointerType: rt,
          srcEvent: a
        });
      }
    });
    function ti(i, a) {
      var u = St(i.touches), f = this.targetIds;
      if (a & (Q | Le) && u.length === 1)
        return f[u[0].identifier] = !0, [u, u];
      var v, S, k = St(i.changedTouches), G = [], X = this.target;
      if (S = u.filter(function(K) {
        return Z(K.target, X);
      }), a === Q)
        for (v = 0; v < S.length; )
          f[S[v].identifier] = !0, v++;
      for (v = 0; v < k.length; )
        f[k[v].identifier] && G.push(k[v]), a & (W | te) && delete f[k[v].identifier], v++;
      if (G.length)
        return [
          // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
          _n(S.concat(G), "identifier", !0),
          G
        ];
    }
    var ni = 2500, Yn = 25;
    function nn() {
      ae.apply(this, arguments);
      var i = N(this.handler, this);
      this.touch = new kt(this.manager, i), this.mouse = new Ct(this.manager, i), this.primaryTouch = null, this.lastTouches = [];
    }
    w(nn, ae, {
      /**
       * handle mouse and touch events
       * @param {Hammer} manager
       * @param {String} inputEvent
       * @param {Object} inputData
       */
      handler: function(a, u, f) {
        var v = f.pointerType == rt, S = f.pointerType == Kt;
        if (!(S && f.sourceCapabilities && f.sourceCapabilities.firesTouchEvents)) {
          if (v)
            ri.call(this, u, f);
          else if (S && si.call(this, f))
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
    function ri(i, a) {
      i & Q ? (this.primaryTouch = a.changedPointers[0].identifier, qn.call(this, a)) : i & (W | te) && qn.call(this, a);
    }
    function qn(i) {
      var a = i.changedPointers[0];
      if (a.identifier === this.primaryTouch) {
        var u = { x: a.clientX, y: a.clientY };
        this.lastTouches.push(u);
        var f = this.lastTouches, v = function() {
          var S = f.indexOf(u);
          S > -1 && f.splice(S, 1);
        };
        setTimeout(v, ni);
      }
    }
    function si(i) {
      for (var a = i.srcEvent.clientX, u = i.srcEvent.clientY, f = 0; f < this.lastTouches.length; f++) {
        var v = this.lastTouches[f], S = Math.abs(a - v.x), k = Math.abs(u - v.y);
        if (S <= Yn && k <= Yn)
          return !0;
      }
      return !1;
    }
    var Gn = Ot(o.style, "touchAction"), Bn = Gn !== s, Xn = "compute", Jn = "auto", rn = "manipulation", Re = "none", lt = "pan-x", ut = "pan-y", Dt = ai();
    function sn(i, a) {
      this.manager = i, this.set(a);
    }
    sn.prototype = {
      /**
       * set the touchAction value on the element or enable the polyfill
       * @param {String} value
       */
      set: function(i) {
        i == Xn && (i = this.compute()), Bn && this.manager.element.style && Dt[i] && (this.manager.element.style[Gn] = i), this.actions = i.toLowerCase().trim();
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
        return y(this.manager.recognizers, function(a) {
          _(a.options.enable, [a]) && (i = i.concat(a.getTouchAction()));
        }), ii(i.join(" "));
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
        var f = this.actions, v = re(f, Re) && !Dt[Re], S = re(f, ut) && !Dt[ut], k = re(f, lt) && !Dt[lt];
        if (v) {
          var G = i.pointers.length === 1, X = i.distance < 2, K = i.deltaTime < 250;
          if (G && X && K)
            return;
        }
        if (!(k && S) && (v || S && u & Te || k && u & Ue))
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
    function ii(i) {
      if (re(i, Re))
        return Re;
      var a = re(i, lt), u = re(i, ut);
      return a && u ? Re : a || u ? a ? lt : ut : re(i, rn) ? rn : Jn;
    }
    function ai() {
      if (!Bn)
        return !1;
      var i = {}, a = e.CSS && e.CSS.supports;
      return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(u) {
        i[u] = a ? e.CSS.supports("touch-action", u) : !0;
      }), i;
    }
    var xt = 1, oe = 2, qe = 4, Ve = 8, Oe = Ve, ct = 16, we = 32;
    function Ie(i) {
      this.options = p({}, this.defaults, i || {}), this.id = xs(), this.manager = null, this.options.enable = J(this.options.enable, !0), this.state = xt, this.simultaneous = {}, this.requireFail = [];
    }
    Ie.prototype = {
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
        return p(this.options, i), this.manager && this.manager.touchAction.update(), this;
      },
      /**
       * recognize simultaneous with an other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      recognizeWith: function(i) {
        if (O(i, "recognizeWith", this))
          return this;
        var a = this.simultaneous;
        return i = Vt(i, this), a[i.id] || (a[i.id] = i, i.recognizeWith(this)), this;
      },
      /**
       * drop the simultaneous link. it doesnt remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRecognizeWith: function(i) {
        return O(i, "dropRecognizeWith", this) ? this : (i = Vt(i, this), delete this.simultaneous[i.id], this);
      },
      /**
       * recognizer can only run when an other is failing
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      requireFailure: function(i) {
        if (O(i, "requireFailure", this))
          return this;
        var a = this.requireFail;
        return i = Vt(i, this), xe(a, i) === -1 && (a.push(i), i.requireFailure(this)), this;
      },
      /**
       * drop the requireFailure link. it does not remove the link on the other recognizer.
       * @param {Recognizer} otherRecognizer
       * @returns {Recognizer} this
       */
      dropRequireFailure: function(i) {
        if (O(i, "dropRequireFailure", this))
          return this;
        i = Vt(i, this);
        var a = xe(this.requireFail, i);
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
        function f(v) {
          a.manager.emit(v, i);
        }
        u < Ve && f(a.options.event + jn(u)), f(a.options.event), i.additionalEvent && f(i.additionalEvent), u >= Ve && f(a.options.event + jn(u));
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
        this.state = we;
      },
      /**
       * can we emit?
       * @returns {boolean}
       */
      canEmit: function() {
        for (var i = 0; i < this.requireFail.length; ) {
          if (!(this.requireFail[i].state & (we | xt)))
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
        var a = p({}, i);
        if (!_(this.options.enable, [this, a])) {
          this.reset(), this.state = we;
          return;
        }
        this.state & (Oe | ct | we) && (this.state = xt), this.state = this.process(a), this.state & (oe | qe | Ve | ct) && this.tryEmit(a);
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
    function jn(i) {
      return i & ct ? "cancel" : i & Ve ? "end" : i & qe ? "move" : i & oe ? "start" : "";
    }
    function Qn(i) {
      return i == ot ? "down" : i == at ? "up" : i == st ? "left" : i == it ? "right" : "";
    }
    function Vt(i, a) {
      var u = a.manager;
      return u ? u.get(i) : i;
    }
    function fe() {
      Ie.apply(this, arguments);
    }
    w(fe, Ie, {
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
        var a = this.state, u = i.eventType, f = a & (oe | qe), v = this.attrTest(i);
        return f && (u & te || !v) ? a | ct : f || v ? u & W ? a | Ve : a & oe ? a | qe : oe : we;
      }
    });
    function bt() {
      fe.apply(this, arguments), this.pX = null, this.pY = null;
    }
    w(bt, fe, {
      /**
       * @namespace
       * @memberof PanRecognizer
       */
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Pn
      },
      getTouchAction: function() {
        var i = this.options.direction, a = [];
        return i & Te && a.push(ut), i & Ue && a.push(lt), a;
      },
      directionTest: function(i) {
        var a = this.options, u = !0, f = i.distance, v = i.direction, S = i.deltaX, k = i.deltaY;
        return v & a.direction || (a.direction & Te ? (v = S === 0 ? It : S < 0 ? st : it, u = S != this.pX, f = Math.abs(i.deltaX)) : (v = k === 0 ? It : k < 0 ? at : ot, u = k != this.pY, f = Math.abs(i.deltaY))), i.direction = v, u && f > a.threshold && v & a.direction;
      },
      attrTest: function(i) {
        return fe.prototype.attrTest.call(this, i) && (this.state & oe || !(this.state & oe) && this.directionTest(i));
      },
      emit: function(i) {
        this.pX = i.deltaX, this.pY = i.deltaY;
        var a = Qn(i.direction);
        a && (i.additionalEvent = this.options.event + a), this._super.emit.call(this, i);
      }
    });
    function an() {
      fe.apply(this, arguments);
    }
    w(an, fe, {
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
        return [Re];
      },
      attrTest: function(i) {
        return this._super.attrTest.call(this, i) && (Math.abs(i.scale - 1) > this.options.threshold || this.state & oe);
      },
      emit: function(i) {
        if (i.scale !== 1) {
          var a = i.scale < 1 ? "in" : "out";
          i.additionalEvent = this.options.event + a;
        }
        this._super.emit.call(this, i);
      }
    });
    function on() {
      Ie.apply(this, arguments), this._timer = null, this._input = null;
    }
    w(on, Ie, {
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
        return [Jn];
      },
      process: function(i) {
        var a = this.options, u = i.pointers.length === a.pointers, f = i.distance < a.threshold, v = i.deltaTime > a.time;
        if (this._input = i, !f || !u || i.eventType & (W | te) && !v)
          this.reset();
        else if (i.eventType & Q)
          this.reset(), this._timer = M(function() {
            this.state = Oe, this.tryEmit();
          }, a.time, this);
        else if (i.eventType & W)
          return Oe;
        return we;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(i) {
        this.state === Oe && (i && i.eventType & W ? this.manager.emit(this.options.event + "up", i) : (this._input.timeStamp = E(), this.manager.emit(this.options.event, this._input)));
      }
    });
    function ln() {
      fe.apply(this, arguments);
    }
    w(ln, fe, {
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
        return [Re];
      },
      attrTest: function(i) {
        return this._super.attrTest.call(this, i) && (Math.abs(i.rotation) > this.options.threshold || this.state & oe);
      }
    });
    function un() {
      fe.apply(this, arguments);
    }
    w(un, fe, {
      /**
       * @namespace
       * @memberof SwipeRecognizer
       */
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: Te | Ue,
        pointers: 1
      },
      getTouchAction: function() {
        return bt.prototype.getTouchAction.call(this);
      },
      attrTest: function(i) {
        var a = this.options.direction, u;
        return a & (Te | Ue) ? u = i.overallVelocity : a & Te ? u = i.overallVelocityX : a & Ue && (u = i.overallVelocityY), this._super.attrTest.call(this, i) && a & i.offsetDirection && i.distance > this.options.threshold && i.maxPointers == this.options.pointers && h(u) > this.options.velocity && i.eventType & W;
      },
      emit: function(i) {
        var a = Qn(i.offsetDirection);
        a && this.manager.emit(this.options.event + a, i), this.manager.emit(this.options.event, i);
      }
    });
    function _t() {
      Ie.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    w(_t, Ie, {
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
        return [rn];
      },
      process: function(i) {
        var a = this.options, u = i.pointers.length === a.pointers, f = i.distance < a.threshold, v = i.deltaTime < a.time;
        if (this.reset(), i.eventType & Q && this.count === 0)
          return this.failTimeout();
        if (f && v && u) {
          if (i.eventType != W)
            return this.failTimeout();
          var S = this.pTime ? i.timeStamp - this.pTime < a.interval : !0, k = !this.pCenter || Nt(this.pCenter, i.center) < a.posThreshold;
          this.pTime = i.timeStamp, this.pCenter = i.center, !k || !S ? this.count = 1 : this.count += 1, this._input = i;
          var G = this.count % a.taps;
          if (G === 0)
            return this.hasRequireFailures() ? (this._timer = M(function() {
              this.state = Oe, this.tryEmit();
            }, a.interval, this), oe) : Oe;
        }
        return we;
      },
      failTimeout: function() {
        return this._timer = M(function() {
          this.state = we;
        }, this.options.interval, this), we;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == Oe && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    });
    function Me(i, a) {
      return a = a || {}, a.recognizers = J(a.recognizers, Me.defaults.preset), new cn(i, a);
    }
    Me.VERSION = "2.0.7", Me.defaults = {
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
        [ln, { enable: !1 }],
        [an, { enable: !1 }, ["rotate"]],
        [un, { direction: Te }],
        [bt, { direction: Te }, ["swipe"]],
        [_t],
        [_t, { event: "doubletap", taps: 2 }, ["tap"]],
        [on]
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
    var oi = 1, Kn = 2;
    function cn(i, a) {
      this.options = p({}, Me.defaults, a || {}), this.options.inputTarget = this.options.inputTarget || i, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = i, this.input = Ls(this), this.touchAction = new sn(this, this.options.touchAction), er(this, !0), y(this.options.recognizers, function(u) {
        var f = this.add(new u[0](u[1]));
        u[2] && f.recognizeWith(u[2]), u[3] && f.requireFailure(u[3]);
      }, this);
    }
    cn.prototype = {
      /**
       * set options
       * @param {Object} options
       * @returns {Manager}
       */
      set: function(i) {
        return p(this.options, i), i.touchAction && this.touchAction.update(), i.inputTarget && (this.input.destroy(), this.input.target = i.inputTarget, this.input.init()), this;
      },
      /**
       * stop recognizing for this session.
       * This session will be discarded, when a new [input]start event is fired.
       * When forced, the recognizer cycle is stopped immediately.
       * @param {Boolean} [force]
       */
      stop: function(i) {
        this.session.stopped = i ? Kn : oi;
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
          var u, f = this.recognizers, v = a.curRecognizer;
          (!v || v && v.state & Oe) && (v = a.curRecognizer = null);
          for (var S = 0; S < f.length; )
            u = f[S], a.stopped !== Kn && // 1
            (!v || u == v || // 2
            u.canRecognizeWith(v)) ? u.recognize(i) : u.reset(), !v && u.state & (oe | qe | Ve) && (v = a.curRecognizer = u), S++;
        }
      },
      /**
       * get a recognizer by its event name.
       * @param {Recognizer|String} recognizer
       * @returns {Recognizer|Null}
       */
      get: function(i) {
        if (i instanceof Ie)
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
        if (O(i, "add", this))
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
        if (O(i, "remove", this))
          return this;
        if (i = this.get(i), i) {
          var a = this.recognizers, u = xe(a, i);
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
          return y(De(i), function(f) {
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
          return y(De(i), function(f) {
            a ? u[f] && u[f].splice(xe(u[f], a), 1) : delete u[f];
          }), this;
        }
      },
      /**
       * emit event to the listeners
       * @param {String} event
       * @param {Object} data
       */
      emit: function(i, a) {
        this.options.domEvents && li(i, a);
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
        this.element && er(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    };
    function er(i, a) {
      var u = i.element;
      if (u.style) {
        var f;
        y(i.options.cssProps, function(v, S) {
          f = Ot(u.style, S), a ? (i.oldCssProps[f] = u.style[f], u.style[f] = v) : u.style[f] = i.oldCssProps[f] || "";
        }), a || (i.oldCssProps = {});
      }
    }
    function li(i, a) {
      var u = t.createEvent("Event");
      u.initEvent(i, !0, !0), u.gesture = a, a.target.dispatchEvent(u);
    }
    p(Me, {
      INPUT_START: Q,
      INPUT_MOVE: Le,
      INPUT_END: W,
      INPUT_CANCEL: te,
      STATE_POSSIBLE: xt,
      STATE_BEGAN: oe,
      STATE_CHANGED: qe,
      STATE_ENDED: Ve,
      STATE_RECOGNIZED: Oe,
      STATE_CANCELLED: ct,
      STATE_FAILED: we,
      DIRECTION_NONE: It,
      DIRECTION_LEFT: st,
      DIRECTION_RIGHT: it,
      DIRECTION_UP: at,
      DIRECTION_DOWN: ot,
      DIRECTION_HORIZONTAL: Te,
      DIRECTION_VERTICAL: Ue,
      DIRECTION_ALL: Pn,
      Manager: cn,
      Input: ae,
      TouchAction: sn,
      TouchInput: kt,
      MouseInput: Ct,
      PointerEventInput: tn,
      TouchMouseInput: nn,
      SingleTouchInput: zn,
      Recognizer: Ie,
      AttrRecognizer: fe,
      Tap: _t,
      Pan: bt,
      Swipe: un,
      Pinch: an,
      Rotate: ln,
      Press: on,
      on: B,
      off: P,
      each: y,
      merge: g,
      extend: m,
      assign: p,
      inherit: w,
      bindFn: N,
      prefixed: Ot
    });
    var ui = typeof e < "u" ? e : typeof self < "u" ? self : {};
    ui.Hammer = Me, typeof s == "function" && s.amd ? s(function() {
      return Me;
    }) : n.exports ? n.exports = Me : e[r] = Me;
  })(window, document, "Hammer");
})(Hi);
const rr = gn, $i = { class: "slider-component" }, Zi = { class: "slider-display-value" }, sl = /* @__PURE__ */ Se({
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
    fi({
      right: 0,
      left: 0
    });
    const c = U(null), d = U(null), h = H(() => {
      if (t.steps && t.steps.length > 0) {
        let m = null;
        for (let g = 0; g < t.steps.length; g++)
          (m === null || m > t.steps[g]) && (m = t.steps[g]);
        return m ?? 0;
      }
      return t.min;
    }), E = H(() => {
      if (t.steps && t.steps.length > 0) {
        let m = null;
        for (let g = 0; g < t.steps.length; g++)
          (m === null || m < t.steps[g]) && (m = t.steps[g]);
        return m ?? 0;
      }
      return t.max;
    }), M = H(() => {
      let m = h.value + s.value * (E.value - h.value);
      if (t.steps && t.steps.length > 0) {
        let g = null, w = null;
        for (let N = 0; N < t.steps.length; N++)
          (g === null || w == null || w > Math.abs(t.steps[N] - m)) && (g = t.steps[N], w = Math.abs(t.steps[N] - m));
        return g ?? 0;
      }
      return m;
    }), O = H(() => t.steps && t.steps.length > 0 && !o.value ? (M.value - h.value) / (E.value - h.value) * l.value : s.value * l.value);
    Gt(() => {
      y(), I(), window.addEventListener("resize", () => {
        var g, w;
        !c.value || !d.value || ((g = c.value) == null ? void 0 : g.getBoundingClientRect().width) > 0 && ((w = d.value) == null ? void 0 : w.getBoundingClientRect().width) > 0 && y();
      });
      let m = t.modelValue;
      isNaN(m) && (m = 0), p((m - h.value) / (E.value - h.value) * l.value);
    }), Zt(
      () => r.value,
      () => {
        e("update:modelValue", M.value);
      }
    ), Zt(
      () => t.modelValue,
      () => {
        p(
          (t.modelValue - h.value) / (E.value - h.value) * l.value
        );
      }
    );
    function y() {
      var m, g;
      !c.value || !d.value || (l.value = ((m = c.value) == null ? void 0 : m.getBoundingClientRect().width) - ((g = d.value) == null ? void 0 : g.getBoundingClientRect().width), p(
        (t.modelValue - h.value) / (E.value - h.value) * l.value
      ));
    }
    function I() {
      var P;
      let m = 0, g = 0, w = 0;
      (P = d.value) == null || P.addEventListener("mousedown", (Z) => {
        m = Z.pageX, w = r.value, document.addEventListener("mouseup", _), document.addEventListener("mousemove", N);
      });
      let N = (Z) => {
        o.value = !0, g = Z.pageX - m, p(w + g);
      }, _ = () => {
        o.value = !1, document.removeEventListener("mouseup", _), document.removeEventListener("mousemove", N);
      };
      if (!d.value)
        return;
      let J = new rr.Manager(d.value), B = new rr.Pan();
      J.add(B), J.on("panstart", (Z) => {
        m = Z.center.x, w = r.value;
      }), J.on("pan", (Z) => {
        o.value = !0, g = Z.center.x - m, p(w + g);
      }), J.on("panend", () => {
        o.value = !1;
      });
    }
    function p(m) {
      var g, w, N, _;
      !c.value || !d.value || (r.value = m, r.value < 0 && (r.value = 0), r.value > ((g = c.value) == null ? void 0 : g.getBoundingClientRect().width) - ((w = d.value) == null ? void 0 : w.getBoundingClientRect().width) && (r.value = ((N = c.value) == null ? void 0 : N.getBoundingClientRect().width) - ((_ = d.value) == null ? void 0 : _.getBoundingClientRect().width)), s.value = r.value / l.value);
    }
    return (m, g) => (x(), V("div", $i, [
      D("div", {
        class: "slider",
        ref_key: "slider",
        ref: c
      }, [
        D("div", {
          class: "slider-start",
          style: tr({ width: A(O) + "px" })
        }, null, 4),
        D("div", {
          class: de(["slider-dot", { moving: o.value }]),
          ref_key: "dot",
          ref: d,
          style: tr({ transform: "translateX(" + A(O) + "px)" })
        }, [
          D("p", Zi, q(n.displayValue), 1)
        ], 6)
      ], 512)
    ]));
  }
});
class Ye extends Error {
}
class Wi extends Ye {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class zi extends Ye {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Yi extends Ye {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class mt extends Ye {
}
class xr extends Ye {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ue extends Ye {
}
class be extends Ye {
  constructor() {
    super("Zone is an abstract class");
  }
}
const T = "numeric", ge = "short", ie = "long", Wt = {
  year: T,
  month: T,
  day: T
}, Vr = {
  year: T,
  month: ge,
  day: T
}, qi = {
  year: T,
  month: ge,
  day: T,
  weekday: ge
}, br = {
  year: T,
  month: ie,
  day: T
}, _r = {
  year: T,
  month: ie,
  day: T,
  weekday: ie
}, Fr = {
  hour: T,
  minute: T
}, Ar = {
  hour: T,
  minute: T,
  second: T
}, Pr = {
  hour: T,
  minute: T,
  second: T,
  timeZoneName: ge
}, Lr = {
  hour: T,
  minute: T,
  second: T,
  timeZoneName: ie
}, Ur = {
  hour: T,
  minute: T,
  hourCycle: "h23"
}, Rr = {
  hour: T,
  minute: T,
  second: T,
  hourCycle: "h23"
}, Hr = {
  hour: T,
  minute: T,
  second: T,
  hourCycle: "h23",
  timeZoneName: ge
}, $r = {
  hour: T,
  minute: T,
  second: T,
  hourCycle: "h23",
  timeZoneName: ie
}, Zr = {
  year: T,
  month: T,
  day: T,
  hour: T,
  minute: T
}, Wr = {
  year: T,
  month: T,
  day: T,
  hour: T,
  minute: T,
  second: T
}, zr = {
  year: T,
  month: ge,
  day: T,
  hour: T,
  minute: T
}, Yr = {
  year: T,
  month: ge,
  day: T,
  hour: T,
  minute: T,
  second: T
}, Gi = {
  year: T,
  month: ge,
  day: T,
  weekday: ge,
  hour: T,
  minute: T
}, qr = {
  year: T,
  month: ie,
  day: T,
  hour: T,
  minute: T,
  timeZoneName: ge
}, Gr = {
  year: T,
  month: ie,
  day: T,
  hour: T,
  minute: T,
  second: T,
  timeZoneName: ge
}, Br = {
  year: T,
  month: ie,
  day: T,
  weekday: ie,
  hour: T,
  minute: T,
  timeZoneName: ie
}, Xr = {
  year: T,
  month: ie,
  day: T,
  weekday: ie,
  hour: T,
  minute: T,
  second: T,
  timeZoneName: ie
};
class gt {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new be();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new be();
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
    throw new be();
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
    throw new be();
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
    throw new be();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new be();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new be();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new be();
  }
}
let dn = null;
class Xt extends gt {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return dn === null && (dn = new Xt()), dn;
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
    return jr(e, t, r);
  }
  /** @override **/
  formatOffset(e, t) {
    return yt(this.offset(e), t);
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
let Ht = {};
function Bi(n) {
  return Ht[n] || (Ht[n] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: n,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  })), Ht[n];
}
const Xi = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Ji(n, e) {
  const t = n.format(e).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, s, l, o, c, d, h, E] = r;
  return [o, s, l, c, d, h, E];
}
function ji(n, e) {
  const t = n.formatToParts(e), r = [];
  for (let s = 0; s < t.length; s++) {
    const { type: l, value: o } = t[s], c = Xi[l];
    l === "era" ? r[c] = o : b(c) || (r[c] = parseInt(o, 10));
  }
  return r;
}
let Ft = {};
class ke extends gt {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Ft[e] || (Ft[e] = new ke(e)), Ft[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Ft = {}, Ht = {};
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
    super(), this.zoneName = e, this.valid = ke.isValidZone(e);
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
    return jr(e, t, r, this.name);
  }
  /** @override **/
  formatOffset(e, t) {
    return yt(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    const t = new Date(e);
    if (isNaN(t))
      return NaN;
    const r = Bi(this.name);
    let [s, l, o, c, d, h, E] = r.formatToParts ? ji(r, t) : Ji(r, t);
    c === "BC" && (s = -Math.abs(s) + 1);
    const O = kn({
      year: s,
      month: l,
      day: o,
      hour: d === 24 ? 0 : d,
      minute: h,
      second: E,
      millisecond: 0
    });
    let y = +t;
    const I = y % 1e3;
    return y -= I >= 0 ? I : 1e3 + I, (O - y) / (60 * 1e3);
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
let sr = {};
function Qi(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = sr[t];
  return r || (r = new Intl.ListFormat(n, e), sr[t] = r), r;
}
let Tn = {};
function wn(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = Tn[t];
  return r || (r = new Intl.DateTimeFormat(n, e), Tn[t] = r), r;
}
let En = {};
function Ki(n, e = {}) {
  const t = JSON.stringify([n, e]);
  let r = En[t];
  return r || (r = new Intl.NumberFormat(n, e), En[t] = r), r;
}
let Sn = {};
function ea(n, e = {}) {
  const { base: t, ...r } = e, s = JSON.stringify([n, r]);
  let l = Sn[s];
  return l || (l = new Intl.RelativeTimeFormat(n, e), Sn[s] = l), l;
}
let pt = null;
function ta() {
  return pt || (pt = new Intl.DateTimeFormat().resolvedOptions().locale, pt);
}
function na(n) {
  const e = n.indexOf("-x-");
  e !== -1 && (n = n.substring(0, e));
  const t = n.indexOf("-u-");
  if (t === -1)
    return [n];
  {
    let r, s;
    try {
      r = wn(n).resolvedOptions(), s = n;
    } catch {
      const d = n.substring(0, t);
      r = wn(d).resolvedOptions(), s = d;
    }
    const { numberingSystem: l, calendar: o } = r;
    return [s, l, o];
  }
}
function ra(n, e, t) {
  return (t || e) && (n.includes("-u-") || (n += "-u"), t && (n += `-ca-${t}`), e && (n += `-nu-${e}`)), n;
}
function sa(n) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const r = C.utc(2016, t, 1);
    e.push(n(r));
  }
  return e;
}
function ia(n) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const r = C.utc(2016, 11, 13 + t);
    e.push(n(r));
  }
  return e;
}
function At(n, e, t, r, s) {
  const l = n.listingMode(t);
  return l === "error" ? null : l === "en" ? r(e) : s(e);
}
function aa(n) {
  return n.numberingSystem && n.numberingSystem !== "latn" ? !1 : n.numberingSystem === "latn" || !n.locale || n.locale.startsWith("en") || new Intl.DateTimeFormat(n.intl).resolvedOptions().numberingSystem === "latn";
}
class oa {
  constructor(e, t, r) {
    this.padTo = r.padTo || 0, this.floor = r.floor || !1;
    const { padTo: s, floor: l, ...o } = r;
    if (!t || Object.keys(o).length > 0) {
      const c = { useGrouping: !1, ...r };
      r.padTo > 0 && (c.minimumIntegerDigits = r.padTo), this.inf = Ki(e, c);
    }
  }
  format(e) {
    if (this.inf) {
      const t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(e) : Cn(e, 3);
      return Y(t, this.padTo);
    }
  }
}
class la {
  constructor(e, t, r) {
    this.opts = r, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const o = -1 * (e.offset / 60), c = o >= 0 ? `Etc/GMT+${o}` : `Etc/GMT${o}`;
      e.offset !== 0 && ke.create(c).valid ? (s = c, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else
      e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const l = { ...this.opts };
    l.timeZone = l.timeZone || s, this.dtf = wn(t, l);
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
class ua {
  constructor(e, t, r) {
    this.opts = { style: "long", ...r }, !t && Jr() && (this.rtf = ea(e, r));
  }
  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : Na(t, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
class R {
  static fromOpts(e) {
    return R.create(e.locale, e.numberingSystem, e.outputCalendar, e.defaultToEN);
  }
  static create(e, t, r, s = !1) {
    const l = e || z.defaultLocale, o = l || (s ? "en-US" : ta()), c = t || z.defaultNumberingSystem, d = r || z.defaultOutputCalendar;
    return new R(o, c, d, l);
  }
  static resetCache() {
    pt = null, Tn = {}, En = {}, Sn = {};
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    return R.create(e, t, r);
  }
  constructor(e, t, r, s) {
    const [l, o, c] = na(e);
    this.locale = l, this.numberingSystem = t || o || null, this.outputCalendar = r || c || null, this.intl = ra(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = s, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = aa(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : R.create(
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
    return At(this, e, r, es, () => {
      const s = t ? { month: e, day: "numeric" } : { month: e }, l = t ? "format" : "standalone";
      return this.monthsCache[l][e] || (this.monthsCache[l][e] = sa((o) => this.extract(o, s, "month"))), this.monthsCache[l][e];
    });
  }
  weekdays(e, t = !1, r = !0) {
    return At(this, e, r, rs, () => {
      const s = t ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, l = t ? "format" : "standalone";
      return this.weekdaysCache[l][e] || (this.weekdaysCache[l][e] = ia(
        (o) => this.extract(o, s, "weekday")
      )), this.weekdaysCache[l][e];
    });
  }
  meridiems(e = !0) {
    return At(
      this,
      void 0,
      e,
      () => ss,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [C.utc(2016, 11, 13, 9), C.utc(2016, 11, 13, 19)].map(
            (r) => this.extract(r, t, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e, t = !0) {
    return At(this, e, t, is, () => {
      const r = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [C.utc(-40, 1, 1), C.utc(2017, 1, 1)].map(
        (s) => this.extract(s, r, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, t, r) {
    const s = this.dtFormatter(e, t), l = s.formatToParts(), o = l.find((c) => c.type.toLowerCase() === r);
    return o ? o.value : null;
  }
  numberFormatter(e = {}) {
    return new oa(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new la(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new ua(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Qi(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
}
let fn = null;
class ee extends gt {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return fn === null && (fn = new ee(0)), fn;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? ee.utcInstance : new ee(e);
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
        return new ee(jt(t[1], t[2]));
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
    return this.fixed === 0 ? "UTC" : `UTC${yt(this.fixed, "narrow")}`;
  }
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${yt(-this.fixed, "narrow")}`;
  }
  /** @override **/
  offsetName() {
    return this.name;
  }
  /** @override **/
  formatOffset(e, t) {
    return yt(this.fixed, t);
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
class ca extends gt {
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
function Ae(n, e) {
  if (b(n) || n === null)
    return e;
  if (n instanceof gt)
    return n;
  if (da(n)) {
    const t = n.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? Xt.instance : t === "utc" || t === "gmt" ? ee.utcInstance : ee.parseSpecifier(t) || ke.create(n);
  } else
    return ze(n) ? ee.instance(n) : typeof n == "object" && n.offset && typeof n.offset == "number" ? n : new ca(n);
}
let ir = () => Date.now(), ar = "system", or = null, lr = null, ur = null, cr = 60, dr;
class z {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return ir;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    ir = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    ar = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return Ae(ar, Xt.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return or;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    or = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return lr;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    lr = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return ur;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    ur = e;
  }
  /**
   * Get the cutoff year after which a string encoding a year as two digits is interpreted to occur in the current century.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return cr;
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
    cr = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return dr;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    dr = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    R.resetCache(), ke.resetCache();
  }
}
function b(n) {
  return typeof n > "u";
}
function ze(n) {
  return typeof n == "number";
}
function Jt(n) {
  return typeof n == "number" && n % 1 === 0;
}
function da(n) {
  return typeof n == "string";
}
function fa(n) {
  return Object.prototype.toString.call(n) === "[object Date]";
}
function Jr() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function ha(n) {
  return Array.isArray(n) ? n : [n];
}
function fr(n, e, t) {
  if (n.length !== 0)
    return n.reduce((r, s) => {
      const l = [e(s), s];
      return r && t(r[0], l[0]) === r[0] ? r : l;
    }, null)[1];
}
function ma(n, e) {
  return e.reduce((t, r) => (t[r] = n[r], t), {});
}
function Qe(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Ne(n, e, t) {
  return Jt(n) && n >= e && n <= t;
}
function pa(n, e) {
  return n - e * Math.floor(n / e);
}
function Y(n, e = 2) {
  const t = n < 0;
  let r;
  return t ? r = "-" + ("" + -n).padStart(e, "0") : r = ("" + n).padStart(e, "0"), r;
}
function Fe(n) {
  if (!(b(n) || n === null || n === ""))
    return parseInt(n, 10);
}
function He(n) {
  if (!(b(n) || n === null || n === ""))
    return parseFloat(n);
}
function Nn(n) {
  if (!(b(n) || n === null || n === "")) {
    const e = parseFloat("0." + n) * 1e3;
    return Math.floor(e);
  }
}
function Cn(n, e, t = !1) {
  const r = 10 ** e;
  return (t ? Math.trunc : Math.round)(n * r) / r;
}
function Tt(n) {
  return n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0);
}
function vt(n) {
  return Tt(n) ? 366 : 365;
}
function zt(n, e) {
  const t = pa(e - 1, 12) + 1, r = n + (e - t) / 12;
  return t === 2 ? Tt(r) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function kn(n) {
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
function Yt(n) {
  const e = (n + Math.floor(n / 4) - Math.floor(n / 100) + Math.floor(n / 400)) % 7, t = n - 1, r = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
  return e === 4 || r === 3 ? 53 : 52;
}
function On(n) {
  return n > 99 ? n : n > z.twoDigitCutoffYear ? 1900 + n : 2e3 + n;
}
function jr(n, e, t, r = null) {
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
function jt(n, e) {
  let t = parseInt(n, 10);
  Number.isNaN(t) && (t = 0);
  const r = parseInt(e, 10) || 0, s = t < 0 || Object.is(t, -0) ? -r : r;
  return t * 60 + s;
}
function Qr(n) {
  const e = Number(n);
  if (typeof n == "boolean" || n === "" || Number.isNaN(e))
    throw new ue(`Invalid unit value ${n}`);
  return e;
}
function qt(n, e) {
  const t = {};
  for (const r in n)
    if (Qe(n, r)) {
      const s = n[r];
      if (s == null)
        continue;
      t[e(r)] = Qr(s);
    }
  return t;
}
function yt(n, e) {
  const t = Math.trunc(Math.abs(n / 60)), r = Math.trunc(Math.abs(n % 60)), s = n >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${Y(t, 2)}:${Y(r, 2)}`;
    case "narrow":
      return `${s}${t}${r > 0 ? `:${r}` : ""}`;
    case "techie":
      return `${s}${Y(t, 2)}${Y(r, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Qt(n) {
  return ma(n, ["hour", "minute", "second", "millisecond"]);
}
const va = [
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
], Kr = [
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
], ya = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function es(n) {
  switch (n) {
    case "narrow":
      return [...ya];
    case "short":
      return [...Kr];
    case "long":
      return [...va];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const ts = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], ns = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], ga = ["M", "T", "W", "T", "F", "S", "S"];
function rs(n) {
  switch (n) {
    case "narrow":
      return [...ga];
    case "short":
      return [...ns];
    case "long":
      return [...ts];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const ss = ["AM", "PM"], Ta = ["Before Christ", "Anno Domini"], wa = ["BC", "AD"], Ea = ["B", "A"];
function is(n) {
  switch (n) {
    case "narrow":
      return [...Ea];
    case "short":
      return [...wa];
    case "long":
      return [...Ta];
    default:
      return null;
  }
}
function Sa(n) {
  return ss[n.hour < 12 ? 0 : 1];
}
function Oa(n, e) {
  return rs(e)[n.weekday - 1];
}
function Ia(n, e) {
  return es(e)[n.month - 1];
}
function Ma(n, e) {
  return is(e)[n.year < 0 ? 0 : 1];
}
function Na(n, e, t = "always", r = !1) {
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
    const M = n === "days";
    switch (e) {
      case 1:
        return M ? "tomorrow" : `next ${s[n][0]}`;
      case -1:
        return M ? "yesterday" : `last ${s[n][0]}`;
      case 0:
        return M ? "today" : `this ${s[n][0]}`;
    }
  }
  const o = Object.is(e, -0) || e < 0, c = Math.abs(e), d = c === 1, h = s[n], E = r ? d ? h[1] : h[2] || h[1] : d ? s[n][0] : n;
  return o ? `${c} ${E} ago` : `in ${c} ${E}`;
}
function hr(n, e) {
  let t = "";
  for (const r of n)
    r.literal ? t += r.val : t += e(r.val);
  return t;
}
const Ca = {
  D: Wt,
  DD: Vr,
  DDD: br,
  DDDD: _r,
  t: Fr,
  tt: Ar,
  ttt: Pr,
  tttt: Lr,
  T: Ur,
  TT: Rr,
  TTT: Hr,
  TTTT: $r,
  f: Zr,
  ff: zr,
  fff: qr,
  ffff: Br,
  F: Wr,
  FF: Yr,
  FFF: Gr,
  FFFF: Xr
};
class j {
  static create(e, t = {}) {
    return new j(e, t);
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
    return Ca[e];
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
      return Y(e, t);
    const r = { ...this.opts };
    return t > 0 && (r.padTo = t), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(e, t) {
    const r = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", l = (y, I) => this.loc.extract(e, y, I), o = (y) => e.isOffsetFixed && e.offset === 0 && y.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, y.format) : "", c = () => r ? Sa(e) : l({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), d = (y, I) => r ? Ia(e, y) : l(I ? { month: y } : { month: y, day: "numeric" }, "month"), h = (y, I) => r ? Oa(e, y) : l(
      I ? { weekday: y } : { weekday: y, month: "long", day: "numeric" },
      "weekday"
    ), E = (y) => {
      const I = j.macroTokenToFormatOpts(y);
      return I ? this.formatWithSystemDefault(e, I) : y;
    }, M = (y) => r ? Ma(e, y) : l({ era: y }, "era"), O = (y) => {
      switch (y) {
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
          return M("short");
        case "GG":
          return M("long");
        case "GGGGG":
          return M("narrow");
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
          return E(y);
      }
    };
    return hr(j.parseFormat(t), O);
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
      const E = r(h);
      return E ? this.num(d.get(E), h.length) : h;
    }, l = j.parseFormat(t), o = l.reduce(
      (d, { literal: h, val: E }) => h ? d : d.concat(E),
      []
    ), c = e.shiftTo(...o.map(r).filter((d) => d));
    return hr(l, s(c));
  }
}
class pe {
  constructor(e, t) {
    this.reason = e, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const as = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function Ke(...n) {
  const e = n.reduce((t, r) => t + r.source, "");
  return RegExp(`^${e}$`);
}
function et(...n) {
  return (e) => n.reduce(
    ([t, r, s], l) => {
      const [o, c, d] = l(e, s);
      return [{ ...t, ...o }, c || r, d];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function tt(n, ...e) {
  if (n == null)
    return [null, null];
  for (const [t, r] of e) {
    const s = t.exec(n);
    if (s)
      return r(s);
  }
  return [null, null];
}
function os(...n) {
  return (e, t) => {
    const r = {};
    let s;
    for (s = 0; s < n.length; s++)
      r[n[s]] = Fe(e[t + s]);
    return [r, null, t + s];
  };
}
const ls = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, ka = `(?:${ls.source}?(?:\\[(${as.source})\\])?)?`, Dn = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, us = RegExp(`${Dn.source}${ka}`), xn = RegExp(`(?:T${us.source})?`), Da = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, xa = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Va = /(\d{4})-?(\d{3})/, ba = os("weekYear", "weekNumber", "weekDay"), _a = os("year", "ordinal"), Fa = /(\d{4})-(\d\d)-(\d\d)/, cs = RegExp(
  `${Dn.source} ?(?:${ls.source}|(${as.source}))?`
), Aa = RegExp(`(?: ${cs.source})?`);
function je(n, e, t) {
  const r = n[e];
  return b(r) ? t : Fe(r);
}
function Pa(n, e) {
  return [{
    year: je(n, e),
    month: je(n, e + 1, 1),
    day: je(n, e + 2, 1)
  }, null, e + 3];
}
function nt(n, e) {
  return [{
    hours: je(n, e, 0),
    minutes: je(n, e + 1, 0),
    seconds: je(n, e + 2, 0),
    milliseconds: Nn(n[e + 3])
  }, null, e + 4];
}
function wt(n, e) {
  const t = !n[e] && !n[e + 1], r = jt(n[e + 1], n[e + 2]), s = t ? null : ee.instance(r);
  return [{}, s, e + 3];
}
function Et(n, e) {
  const t = n[e] ? ke.create(n[e]) : null;
  return [{}, t, e + 1];
}
const La = RegExp(`^T?${Dn.source}$`), Ua = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Ra(n) {
  const [e, t, r, s, l, o, c, d, h] = n, E = e[0] === "-", M = d && d[0] === "-", O = (y, I = !1) => y !== void 0 && (I || y && E) ? -y : y;
  return [
    {
      years: O(He(t)),
      months: O(He(r)),
      weeks: O(He(s)),
      days: O(He(l)),
      hours: O(He(o)),
      minutes: O(He(c)),
      seconds: O(He(d), d === "-0"),
      milliseconds: O(Nn(h), M)
    }
  ];
}
const Ha = {
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
function Vn(n, e, t, r, s, l, o) {
  const c = {
    year: e.length === 2 ? On(Fe(e)) : Fe(e),
    month: Kr.indexOf(t) + 1,
    day: Fe(r),
    hour: Fe(s),
    minute: Fe(l)
  };
  return o && (c.second = Fe(o)), n && (c.weekday = n.length > 3 ? ts.indexOf(n) + 1 : ns.indexOf(n) + 1), c;
}
const $a = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Za(n) {
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
    E,
    M
  ] = n, O = Vn(e, s, r, t, l, o, c);
  let y;
  return d ? y = Ha[d] : h ? y = 0 : y = jt(E, M), [O, new ee(y)];
}
function Wa(n) {
  return n.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const za = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Ya = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, qa = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function mr(n) {
  const [, e, t, r, s, l, o, c] = n;
  return [Vn(e, s, r, t, l, o, c), ee.utcInstance];
}
function Ga(n) {
  const [, e, t, r, s, l, o, c] = n;
  return [Vn(e, c, t, r, s, l, o), ee.utcInstance];
}
const Ba = Ke(Da, xn), Xa = Ke(xa, xn), Ja = Ke(Va, xn), ja = Ke(us), ds = et(
  Pa,
  nt,
  wt,
  Et
), Qa = et(
  ba,
  nt,
  wt,
  Et
), Ka = et(
  _a,
  nt,
  wt,
  Et
), eo = et(
  nt,
  wt,
  Et
);
function to(n) {
  return tt(
    n,
    [Ba, ds],
    [Xa, Qa],
    [Ja, Ka],
    [ja, eo]
  );
}
function no(n) {
  return tt(Wa(n), [$a, Za]);
}
function ro(n) {
  return tt(
    n,
    [za, mr],
    [Ya, mr],
    [qa, Ga]
  );
}
function so(n) {
  return tt(n, [Ua, Ra]);
}
const io = et(nt);
function ao(n) {
  return tt(n, [La, io]);
}
const oo = Ke(Fa, Aa), lo = Ke(cs), uo = et(
  nt,
  wt,
  Et
);
function co(n) {
  return tt(
    n,
    [oo, ds],
    [lo, uo]
  );
}
const fo = "Invalid Duration", fs = {
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
}, ho = {
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
  ...fs
}, le = 146097 / 400, Ge = 146097 / 4800, mo = {
  years: {
    quarters: 4,
    months: 12,
    weeks: le / 7,
    days: le,
    hours: le * 24,
    minutes: le * 24 * 60,
    seconds: le * 24 * 60 * 60,
    milliseconds: le * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: le / 28,
    days: le / 4,
    hours: le * 24 / 4,
    minutes: le * 24 * 60 / 4,
    seconds: le * 24 * 60 * 60 / 4,
    milliseconds: le * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Ge / 7,
    days: Ge,
    hours: Ge * 24,
    minutes: Ge * 24 * 60,
    seconds: Ge * 24 * 60 * 60,
    milliseconds: Ge * 24 * 60 * 60 * 1e3
  },
  ...fs
}, Ze = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], po = Ze.slice(0).reverse();
function _e(n, e, t = !1) {
  const r = {
    values: t ? e.values : { ...n.values, ...e.values || {} },
    loc: n.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || n.conversionAccuracy,
    matrix: e.matrix || n.matrix
  };
  return new F(r);
}
function vo(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
}
function hs(n, e, t, r, s) {
  const l = n[s][t], o = e[t] / l, c = Math.sign(o) === Math.sign(r[s]), d = !c && r[s] !== 0 && Math.abs(o) <= 1 ? vo(o) : Math.trunc(o);
  r[s] += d, e[t] -= d * l;
}
function yo(n, e) {
  po.reduce((t, r) => b(e[r]) ? t : (t && hs(n, e, t, e, r), r), null);
}
function go(n) {
  const e = {};
  for (const [t, r] of Object.entries(n))
    r !== 0 && (e[t] = r);
  return e;
}
class F {
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let r = t ? mo : ho;
    e.matrix && (r = e.matrix), this.values = e.values, this.loc = e.loc || R.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = r, this.isLuxonDuration = !0;
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
    return F.fromObject({ milliseconds: e }, t);
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
      throw new ue(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new F({
      values: qt(e, F.normalizeUnit),
      loc: R.fromObject(t),
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
    if (ze(e))
      return F.fromMillis(e);
    if (F.isDuration(e))
      return e;
    if (typeof e == "object")
      return F.fromObject(e);
    throw new ue(
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
    const [r] = so(e);
    return r ? F.fromObject(r, t) : F.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    const [r] = ao(e);
    return r ? F.fromObject(r, t) : F.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ue("need to specify a reason the Duration is invalid");
    const r = e instanceof pe ? e : new pe(e, t);
    if (z.throwOnInvalid)
      throw new Yi(r);
    return new F({ invalid: r });
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
      throw new xr(e);
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
    return this.isValid ? j.create(this.loc, r).formatDurationFromString(this, e) : fo;
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
    const t = Ze.map((r) => {
      const s = this.values[r];
      return b(s) ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: r.slice(0, -1) }).format(s);
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
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Cn(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
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
    const t = F.fromDurationLike(e), r = {};
    for (const s of Ze)
      (Qe(t.values, s) || Qe(this.values, s)) && (r[s] = t.get(s) + this.get(s));
    return _e(this, { values: r }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const t = F.fromDurationLike(e);
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
      t[r] = Qr(e(this.values[r], r));
    return _e(this, { values: t }, !0);
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
    return this[F.normalizeUnit(e)];
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
    const t = { ...this.values, ...qt(e, F.normalizeUnit) };
    return _e(this, { values: t });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r, matrix: s } = {}) {
    const o = { loc: this.loc.clone({ locale: e, numberingSystem: t }), matrix: s, conversionAccuracy: r };
    return _e(this, o);
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
    return yo(this.matrix, e), _e(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = go(this.normalize().shiftToAll().toObject());
    return _e(this, { values: e }, !0);
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
    e = e.map((o) => F.normalizeUnit(o));
    const t = {}, r = {}, s = this.toObject();
    let l;
    for (const o of Ze)
      if (e.indexOf(o) >= 0) {
        l = o;
        let c = 0;
        for (const h in r)
          c += this.matrix[h][o] * r[h], r[h] = 0;
        ze(s[o]) && (c += s[o]);
        const d = Math.trunc(c);
        t[o] = d, r[o] = (c * 1e3 - d * 1e3) / 1e3;
        for (const h in s)
          Ze.indexOf(h) > Ze.indexOf(o) && hs(this.matrix, s, h, t, o);
      } else
        ze(s[o]) && (r[o] = s[o]);
    for (const o in r)
      r[o] !== 0 && (t[l] += o === l ? r[o] : r[o] / this.matrix[l][o]);
    return _e(this, { values: t }, !0).normalize();
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
    return _e(this, { values: e }, !0);
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
    for (const r of Ze)
      if (!t(this.values[r], e.values[r]))
        return !1;
    return !0;
  }
}
const Be = "Invalid Interval";
function To(n, e) {
  return !n || !n.isValid ? $.invalid("missing or invalid start") : !e || !e.isValid ? $.invalid("missing or invalid end") : e < n ? $.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${n.toISO()} and end=${e.toISO()}`
  ) : null;
}
class $ {
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
      throw new ue("need to specify a reason the Interval is invalid");
    const r = e instanceof pe ? e : new pe(e, t);
    if (z.throwOnInvalid)
      throw new zi(r);
    return new $({ invalid: r });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, t) {
    const r = ht(e), s = ht(t), l = To(r, s);
    return l ?? new $({
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
    const r = F.fromDurationLike(t), s = ht(e);
    return $.fromDateTimes(s, s.plus(r));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, t) {
    const r = F.fromDurationLike(t), s = ht(e);
    return $.fromDateTimes(s.minus(r), s);
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
        l = C.fromISO(r, t), o = l.isValid;
      } catch {
        o = !1;
      }
      let c, d;
      try {
        c = C.fromISO(s, t), d = c.isValid;
      } catch {
        d = !1;
      }
      if (o && d)
        return $.fromDateTimes(l, c);
      if (o) {
        const h = F.fromISO(s, t);
        if (h.isValid)
          return $.after(l, h);
      } else if (d) {
        const h = F.fromISO(r, t);
        if (h.isValid)
          return $.before(c, h);
      }
    }
    return $.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
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
    return this.isValid ? $.fromDateTimes(e || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid)
      return [];
    const t = e.map(ht).filter((o) => this.contains(o)).sort(), r = [];
    let { s } = this, l = 0;
    for (; s < this.e; ) {
      const o = t[l] || this.e, c = +o > +this.e ? this.e : o;
      r.push($.fromDateTimes(s, c)), s = c, l += 1;
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
    const t = F.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let { s: r } = this, s = 1, l;
    const o = [];
    for (; r < this.e; ) {
      const c = this.start.plus(t.mapUnits((d) => d * s));
      l = +c > +this.e ? this.e : c, o.push($.fromDateTimes(r, l)), r = l, s += 1;
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
    return t >= r ? null : $.fromDateTimes(t, r);
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
    return $.fromDateTimes(t, r);
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
      r += d.type === "s" ? 1 : -1, r === 1 ? t = d.time : (t && +t != +d.time && s.push($.fromDateTimes(t, d.time)), t = null);
    return $.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return $.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Be;
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
  toLocaleString(e = Wt, t = {}) {
    return this.isValid ? j.create(this.s.loc.clone(t), e).formatInterval(this) : Be;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Be;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Be;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Be;
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
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Be;
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
    return this.isValid ? this.e.diff(this.s, e, t) : F.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return $.fromDateTimes(e(this.s), e(this.e));
  }
}
class Pt {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = z.defaultZone) {
    const t = C.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return ke.isValidZone(e);
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
    return Ae(e, z.defaultZone);
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
    return (s || R.create(t, r, l)).months(e);
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
    return (s || R.create(t, r, l)).months(e, !0);
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
    return (s || R.create(t, r, null)).weekdays(e);
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
    return (s || R.create(t, r, null)).weekdays(e, !0);
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
    return R.create(e).meridiems();
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
    return R.create(t, null, "gregory").eras(e);
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
    return { relative: Jr() };
  }
}
function pr(n, e) {
  const t = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), r = t(e) - t(n);
  return Math.floor(F.fromMillis(r).as("days"));
}
function wo(n, e, t) {
  const r = [
    ["years", (d, h) => h.year - d.year],
    ["quarters", (d, h) => h.quarter - d.quarter + (h.year - d.year) * 4],
    ["months", (d, h) => h.month - d.month + (h.year - d.year) * 12],
    [
      "weeks",
      (d, h) => {
        const E = pr(d, h);
        return (E - E % 7) / 7;
      }
    ],
    ["days", pr]
  ], s = {}, l = n;
  let o, c;
  for (const [d, h] of r)
    t.indexOf(d) >= 0 && (o = d, s[d] = h(n, e), c = l.plus(s), c > e ? (s[d]--, n = l.plus(s)) : n = c);
  return [n, s, c, o];
}
function Eo(n, e, t, r) {
  let [s, l, o, c] = wo(n, e, t);
  const d = e - s, h = t.filter(
    (M) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(M) >= 0
  );
  h.length === 0 && (o < e && (o = s.plus({ [c]: 1 })), o !== s && (l[c] = (l[c] || 0) + d / (o - s)));
  const E = F.fromObject(l, r);
  return h.length > 0 ? F.fromMillis(d, r).shiftTo(...h).plus(E) : E;
}
const bn = {
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
}, vr = {
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
}, So = bn.hanidec.replace(/[\[|\]]/g, "").split("");
function Oo(n) {
  let e = parseInt(n, 10);
  if (isNaN(e)) {
    e = "";
    for (let t = 0; t < n.length; t++) {
      const r = n.charCodeAt(t);
      if (n[t].search(bn.hanidec) !== -1)
        e += So.indexOf(n[t]);
      else
        for (const s in vr) {
          const [l, o] = vr[s];
          r >= l && r <= o && (e += r - l);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
function he({ numberingSystem: n }, e = "") {
  return new RegExp(`${bn[n || "latn"]}${e}`);
}
const Io = "missing Intl.DateTimeFormat.formatToParts support";
function L(n, e = (t) => t) {
  return { regex: n, deser: ([t]) => e(Oo(t)) };
}
const Mo = String.fromCharCode(160), ms = `[ ${Mo}]`, ps = new RegExp(ms, "g");
function No(n) {
  return n.replace(/\./g, "\\.?").replace(ps, ms);
}
function yr(n) {
  return n.replace(/\./g, "").replace(ps, " ").toLowerCase();
}
function me(n, e) {
  return n === null ? null : {
    regex: RegExp(n.map(No).join("|")),
    deser: ([t]) => n.findIndex((r) => yr(t) === yr(r)) + e
  };
}
function gr(n, e) {
  return { regex: n, deser: ([, t, r]) => jt(t, r), groups: e };
}
function Lt(n) {
  return { regex: n, deser: ([e]) => e };
}
function Co(n) {
  return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function ko(n, e) {
  const t = he(e), r = he(e, "{2}"), s = he(e, "{3}"), l = he(e, "{4}"), o = he(e, "{6}"), c = he(e, "{1,2}"), d = he(e, "{1,3}"), h = he(e, "{1,6}"), E = he(e, "{1,9}"), M = he(e, "{2,4}"), O = he(e, "{4,6}"), y = (m) => ({ regex: RegExp(Co(m.val)), deser: ([g]) => g, literal: !0 }), p = ((m) => {
    if (n.literal)
      return y(m);
    switch (m.val) {
      case "G":
        return me(e.eras("short", !1), 0);
      case "GG":
        return me(e.eras("long", !1), 0);
      case "y":
        return L(h);
      case "yy":
        return L(M, On);
      case "yyyy":
        return L(l);
      case "yyyyy":
        return L(O);
      case "yyyyyy":
        return L(o);
      case "M":
        return L(c);
      case "MM":
        return L(r);
      case "MMM":
        return me(e.months("short", !0, !1), 1);
      case "MMMM":
        return me(e.months("long", !0, !1), 1);
      case "L":
        return L(c);
      case "LL":
        return L(r);
      case "LLL":
        return me(e.months("short", !1, !1), 1);
      case "LLLL":
        return me(e.months("long", !1, !1), 1);
      case "d":
        return L(c);
      case "dd":
        return L(r);
      case "o":
        return L(d);
      case "ooo":
        return L(s);
      case "HH":
        return L(r);
      case "H":
        return L(c);
      case "hh":
        return L(r);
      case "h":
        return L(c);
      case "mm":
        return L(r);
      case "m":
        return L(c);
      case "q":
        return L(c);
      case "qq":
        return L(r);
      case "s":
        return L(c);
      case "ss":
        return L(r);
      case "S":
        return L(d);
      case "SSS":
        return L(s);
      case "u":
        return Lt(E);
      case "uu":
        return Lt(c);
      case "uuu":
        return L(t);
      case "a":
        return me(e.meridiems(), 0);
      case "kkkk":
        return L(l);
      case "kk":
        return L(M, On);
      case "W":
        return L(c);
      case "WW":
        return L(r);
      case "E":
      case "c":
        return L(t);
      case "EEE":
        return me(e.weekdays("short", !1, !1), 1);
      case "EEEE":
        return me(e.weekdays("long", !1, !1), 1);
      case "ccc":
        return me(e.weekdays("short", !0, !1), 1);
      case "cccc":
        return me(e.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return gr(new RegExp(`([+-]${c.source})(?::(${r.source}))?`), 2);
      case "ZZZ":
        return gr(new RegExp(`([+-]${c.source})(${r.source})?`), 2);
      case "z":
        return Lt(/[a-z_+-/]{1,256}?/i);
      case " ":
        return Lt(/[^\S\n\r]/);
      default:
        return y(m);
    }
  })(n) || {
    invalidReason: Io
  };
  return p.token = n, p;
}
const Do = {
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
function xo(n, e) {
  const { type: t, value: r } = n;
  if (t === "literal") {
    const o = /^\s+$/.test(r);
    return {
      literal: !o,
      val: o ? " " : r
    };
  }
  const s = e[t];
  let l = Do[t];
  if (typeof l == "object" && (l = l[s]), l)
    return {
      literal: !1,
      val: l
    };
}
function Vo(n) {
  return [`^${n.map((t) => t.regex).reduce((t, r) => `${t}(${r.source})`, "")}$`, n];
}
function bo(n, e, t) {
  const r = n.match(e);
  if (r) {
    const s = {};
    let l = 1;
    for (const o in t)
      if (Qe(t, o)) {
        const c = t[o], d = c.groups ? c.groups + 1 : 1;
        !c.literal && c.token && (s[c.token.val[0]] = c.deser(r.slice(l, l + d))), l += d;
      }
    return [r, s];
  } else
    return [r, {}];
}
function _o(n) {
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
  return b(n.z) || (t = ke.create(n.z)), b(n.Z) || (t || (t = new ee(n.Z)), r = n.Z), b(n.q) || (n.M = (n.q - 1) * 3 + 1), b(n.h) || (n.h < 12 && n.a === 1 ? n.h += 12 : n.h === 12 && n.a === 0 && (n.h = 0)), n.G === 0 && n.y && (n.y = -n.y), b(n.u) || (n.S = Nn(n.u)), [Object.keys(n).reduce((l, o) => {
    const c = e(o);
    return c && (l[c] = n[o]), l;
  }, {}), t, r];
}
let hn = null;
function Fo() {
  return hn || (hn = C.fromMillis(1555555555555)), hn;
}
function Ao(n, e) {
  if (n.literal)
    return n;
  const t = j.macroTokenToFormatOpts(n.val), r = gs(t, e);
  return r == null || r.includes(void 0) ? n : r;
}
function vs(n, e) {
  return Array.prototype.concat(...n.map((t) => Ao(t, e)));
}
function ys(n, e, t) {
  const r = vs(j.parseFormat(t), n), s = r.map((o) => ko(o, n)), l = s.find((o) => o.invalidReason);
  if (l)
    return { input: e, tokens: r, invalidReason: l.invalidReason };
  {
    const [o, c] = Vo(s), d = RegExp(o, "i"), [h, E] = bo(e, d, c), [M, O, y] = E ? _o(E) : [null, null, void 0];
    if (Qe(E, "a") && Qe(E, "H"))
      throw new mt(
        "Can't include meridiem when specifying 24-hour format"
      );
    return { input: e, tokens: r, regex: d, rawMatches: h, matches: E, result: M, zone: O, specificOffset: y };
  }
}
function Po(n, e, t) {
  const { result: r, zone: s, specificOffset: l, invalidReason: o } = ys(n, e, t);
  return [r, s, l, o];
}
function gs(n, e) {
  return n ? j.create(e, n).formatDateTimeParts(Fo()).map((s) => xo(s, n)) : null;
}
const Ts = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ws = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function ce(n, e) {
  return new pe(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${n}, which is invalid`
  );
}
function Es(n, e, t) {
  const r = new Date(Date.UTC(n, e - 1, t));
  n < 100 && n >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  const s = r.getUTCDay();
  return s === 0 ? 7 : s;
}
function Ss(n, e, t) {
  return t + (Tt(n) ? ws : Ts)[e - 1];
}
function Os(n, e) {
  const t = Tt(n) ? ws : Ts, r = t.findIndex((l) => l < e), s = e - t[r];
  return { month: r + 1, day: s };
}
function In(n) {
  const { year: e, month: t, day: r } = n, s = Ss(e, t, r), l = Es(e, t, r);
  let o = Math.floor((s - l + 10) / 7), c;
  return o < 1 ? (c = e - 1, o = Yt(c)) : o > Yt(e) ? (c = e + 1, o = 1) : c = e, { weekYear: c, weekNumber: o, weekday: l, ...Qt(n) };
}
function Tr(n) {
  const { weekYear: e, weekNumber: t, weekday: r } = n, s = Es(e, 1, 4), l = vt(e);
  let o = t * 7 + r - s - 3, c;
  o < 1 ? (c = e - 1, o += vt(c)) : o > l ? (c = e + 1, o -= vt(e)) : c = e;
  const { month: d, day: h } = Os(c, o);
  return { year: c, month: d, day: h, ...Qt(n) };
}
function mn(n) {
  const { year: e, month: t, day: r } = n, s = Ss(e, t, r);
  return { year: e, ordinal: s, ...Qt(n) };
}
function wr(n) {
  const { year: e, ordinal: t } = n, { month: r, day: s } = Os(e, t);
  return { year: e, month: r, day: s, ...Qt(n) };
}
function Lo(n) {
  const e = Jt(n.weekYear), t = Ne(n.weekNumber, 1, Yt(n.weekYear)), r = Ne(n.weekday, 1, 7);
  return e ? t ? r ? !1 : ce("weekday", n.weekday) : ce("week", n.week) : ce("weekYear", n.weekYear);
}
function Uo(n) {
  const e = Jt(n.year), t = Ne(n.ordinal, 1, vt(n.year));
  return e ? t ? !1 : ce("ordinal", n.ordinal) : ce("year", n.year);
}
function Is(n) {
  const e = Jt(n.year), t = Ne(n.month, 1, 12), r = Ne(n.day, 1, zt(n.year, n.month));
  return e ? t ? r ? !1 : ce("day", n.day) : ce("month", n.month) : ce("year", n.year);
}
function Ms(n) {
  const { hour: e, minute: t, second: r, millisecond: s } = n, l = Ne(e, 0, 23) || e === 24 && t === 0 && r === 0 && s === 0, o = Ne(t, 0, 59), c = Ne(r, 0, 59), d = Ne(s, 0, 999);
  return l ? o ? c ? d ? !1 : ce("millisecond", s) : ce("second", r) : ce("minute", t) : ce("hour", e);
}
const pn = "Invalid DateTime", Er = 864e13;
function Ut(n) {
  return new pe("unsupported zone", `the zone "${n.name}" is not supported`);
}
function vn(n) {
  return n.weekData === null && (n.weekData = In(n.c)), n.weekData;
}
function dt(n, e) {
  const t = {
    ts: n.ts,
    zone: n.zone,
    c: n.c,
    o: n.o,
    loc: n.loc,
    invalid: n.invalid
  };
  return new C({ ...t, ...e, old: t });
}
function Ns(n, e, t) {
  let r = n - e * 60 * 1e3;
  const s = t.offset(r);
  if (e === s)
    return [r, e];
  r -= (s - e) * 60 * 1e3;
  const l = t.offset(r);
  return s === l ? [r, s] : [n - Math.min(s, l) * 60 * 1e3, Math.max(s, l)];
}
function Sr(n, e) {
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
function $t(n, e, t) {
  return Ns(kn(n), e, t);
}
function Or(n, e) {
  const t = n.o, r = n.c.year + Math.trunc(e.years), s = n.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, l = {
    ...n.c,
    year: r,
    month: s,
    day: Math.min(n.c.day, zt(r, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, o = F.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), c = kn(l);
  let [d, h] = Ns(c, t, n.zone);
  return o !== 0 && (d += o, h = n.zone.offset(d)), { ts: d, o: h };
}
function ft(n, e, t, r, s, l) {
  const { setZone: o, zone: c } = t;
  if (n && Object.keys(n).length !== 0 || e) {
    const d = e || c, h = C.fromObject(n, {
      ...t,
      zone: d,
      specificOffset: l
    });
    return o ? h : h.setZone(c);
  } else
    return C.invalid(
      new pe("unparsable", `the input "${s}" can't be parsed as ${r}`)
    );
}
function Rt(n, e, t = !0) {
  return n.isValid ? j.create(R.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(n, e) : null;
}
function yn(n, e) {
  const t = n.c.year > 9999 || n.c.year < 0;
  let r = "";
  return t && n.c.year >= 0 && (r += "+"), r += Y(n.c.year, t ? 6 : 4), e ? (r += "-", r += Y(n.c.month), r += "-", r += Y(n.c.day)) : (r += Y(n.c.month), r += Y(n.c.day)), r;
}
function Ir(n, e, t, r, s, l) {
  let o = Y(n.c.hour);
  return e ? (o += ":", o += Y(n.c.minute), (n.c.second !== 0 || !t) && (o += ":")) : o += Y(n.c.minute), (n.c.second !== 0 || !t) && (o += Y(n.c.second), (n.c.millisecond !== 0 || !r) && (o += ".", o += Y(n.c.millisecond, 3))), s && (n.isOffsetFixed && n.offset === 0 && !l ? o += "Z" : n.o < 0 ? (o += "-", o += Y(Math.trunc(-n.o / 60)), o += ":", o += Y(Math.trunc(-n.o % 60))) : (o += "+", o += Y(Math.trunc(n.o / 60)), o += ":", o += Y(Math.trunc(n.o % 60)))), l && (o += "[" + n.zone.ianaName + "]"), o;
}
const Cs = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ro = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ho = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, ks = ["year", "month", "day", "hour", "minute", "second", "millisecond"], $o = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Zo = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function Mr(n) {
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
    throw new xr(n);
  return e;
}
function Nr(n, e) {
  const t = Ae(e.zone, z.defaultZone), r = R.fromObject(e), s = z.now();
  let l, o;
  if (b(n.year))
    l = s;
  else {
    for (const h of ks)
      b(n[h]) && (n[h] = Cs[h]);
    const c = Is(n) || Ms(n);
    if (c)
      return C.invalid(c);
    const d = t.offset(s);
    [l, o] = $t(n, d, t);
  }
  return new C({ ts: l, zone: t, loc: r, o });
}
function Cr(n, e, t) {
  const r = b(t.round) ? !0 : t.round, s = (o, c) => (o = Cn(o, r || t.calendary ? 0 : 2, !0), e.loc.clone(t).relFormatter(t).format(o, c)), l = (o) => t.calendary ? e.hasSame(n, o) ? 0 : e.startOf(o).diff(n.startOf(o), o).get(o) : e.diff(n, o).get(o);
  if (t.unit)
    return s(l(t.unit), t.unit);
  for (const o of t.units) {
    const c = l(o);
    if (Math.abs(c) >= 1)
      return s(c, o);
  }
  return s(n > e ? -0 : 0, t.units[t.units.length - 1]);
}
function kr(n) {
  let e = {}, t;
  return n.length > 0 && typeof n[n.length - 1] == "object" ? (e = n[n.length - 1], t = Array.from(n).slice(0, n.length - 1)) : t = Array.from(n), [e, t];
}
class C {
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || z.defaultZone;
    let r = e.invalid || (Number.isNaN(e.ts) ? new pe("invalid input") : null) || (t.isValid ? null : Ut(t));
    this.ts = b(e.ts) ? z.now() : e.ts;
    let s = null, l = null;
    if (!r)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
        [s, l] = [e.old.c, e.old.o];
      else {
        const c = t.offset(this.ts);
        s = Sr(this.ts, c), r = Number.isNaN(s.year) ? new pe("invalid input") : null, s = r ? null : s, l = r ? null : c;
      }
    this._zone = t, this.loc = e.loc || R.create(), this.invalid = r, this.weekData = null, this.c = s, this.o = l, this.isLuxonDateTime = !0;
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
    return new C({});
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
    const [e, t] = kr(arguments), [r, s, l, o, c, d, h] = t;
    return Nr({ year: r, month: s, day: l, hour: o, minute: c, second: d, millisecond: h }, e);
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
    const [e, t] = kr(arguments), [r, s, l, o, c, d, h] = t;
    return e.zone = ee.utcInstance, Nr({ year: r, month: s, day: l, hour: o, minute: c, second: d, millisecond: h }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const r = fa(e) ? e.valueOf() : NaN;
    if (Number.isNaN(r))
      return C.invalid("invalid input");
    const s = Ae(t.zone, z.defaultZone);
    return s.isValid ? new C({
      ts: r,
      zone: s,
      loc: R.fromObject(t)
    }) : C.invalid(Ut(s));
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
    if (ze(e))
      return e < -Er || e > Er ? C.invalid("Timestamp out of range") : new C({
        ts: e,
        zone: Ae(t.zone, z.defaultZone),
        loc: R.fromObject(t)
      });
    throw new ue(
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
    if (ze(e))
      return new C({
        ts: e * 1e3,
        zone: Ae(t.zone, z.defaultZone),
        loc: R.fromObject(t)
      });
    throw new ue("fromSeconds requires a numerical input");
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
    const r = Ae(t.zone, z.defaultZone);
    if (!r.isValid)
      return C.invalid(Ut(r));
    const s = z.now(), l = b(t.specificOffset) ? r.offset(s) : t.specificOffset, o = qt(e, Mr), c = !b(o.ordinal), d = !b(o.year), h = !b(o.month) || !b(o.day), E = d || h, M = o.weekYear || o.weekNumber, O = R.fromObject(t);
    if ((E || c) && M)
      throw new mt(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (h && c)
      throw new mt("Can't mix ordinal dates with month/day");
    const y = M || o.weekday && !E;
    let I, p, m = Sr(s, l);
    y ? (I = $o, p = Ro, m = In(m)) : c ? (I = Zo, p = Ho, m = mn(m)) : (I = ks, p = Cs);
    let g = !1;
    for (const Z of I) {
      const re = o[Z];
      b(re) ? g ? o[Z] = p[Z] : o[Z] = m[Z] : g = !0;
    }
    const w = y ? Lo(o) : c ? Uo(o) : Is(o), N = w || Ms(o);
    if (N)
      return C.invalid(N);
    const _ = y ? Tr(o) : c ? wr(o) : o, [J, B] = $t(_, l, r), P = new C({
      ts: J,
      zone: r,
      o: B,
      loc: O
    });
    return o.weekday && E && e.weekday !== P.weekday ? C.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${o.weekday} and a date of ${P.toISO()}`
    ) : P;
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
    const [r, s] = to(e);
    return ft(r, s, t, "ISO 8601", e);
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
    const [r, s] = no(e);
    return ft(r, s, t, "RFC 2822", e);
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
    const [r, s] = ro(e);
    return ft(r, s, t, "HTTP", t);
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
    if (b(e) || b(t))
      throw new ue("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: l = null } = r, o = R.fromOpts({
      locale: s,
      numberingSystem: l,
      defaultToEN: !0
    }), [c, d, h, E] = Po(o, e, t);
    return E ? C.invalid(E) : ft(c, d, r, `format ${t}`, e, h);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, r = {}) {
    return C.fromFormat(e, t, r);
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
    const [r, s] = co(e);
    return ft(r, s, t, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {DateTime} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ue("need to specify a reason the DateTime is invalid");
    const r = e instanceof pe ? e : new pe(e, t);
    if (z.throwOnInvalid)
      throw new Wi(r);
    return new C({ invalid: r });
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
    const r = gs(e, R.fromObject(t));
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
    return vs(j.parseFormat(e), R.fromObject(t)).map((s) => s.val).join("");
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
    return this.isValid ? vn(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? vn(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? vn(this).weekday : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? mn(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? Pt.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? Pt.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? Pt.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? Pt.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
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
    return Tt(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return zt(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? vt(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Yt(this.weekYear) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: t, numberingSystem: r, calendar: s } = j.create(
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
    return this.setZone(ee.instance(e), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(z.defaultZone);
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
    if (e = Ae(e, z.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (t || r) {
        const l = e.offset(this.ts), o = this.toObject();
        [s] = $t(o, l, e);
      }
      return dt(this, { ts: s, zone: e });
    } else
      return C.invalid(Ut(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return dt(this, { loc: s });
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
    const t = qt(e, Mr), r = !b(t.weekYear) || !b(t.weekNumber) || !b(t.weekday), s = !b(t.ordinal), l = !b(t.year), o = !b(t.month) || !b(t.day), c = l || o, d = t.weekYear || t.weekNumber;
    if ((c || s) && d)
      throw new mt(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (o && s)
      throw new mt("Can't mix ordinal dates with month/day");
    let h;
    r ? h = Tr({ ...In(this.c), ...t }) : b(t.ordinal) ? (h = { ...this.toObject(), ...t }, b(t.day) && (h.day = Math.min(zt(h.year, h.month), h.day))) : h = wr({ ...mn(this.c), ...t });
    const [E, M] = $t(h, this.o, this.zone);
    return dt(this, { ts: E, o: M });
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
    const t = F.fromDurationLike(e);
    return dt(this, Or(this, t));
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
    const t = F.fromDurationLike(e).negate();
    return dt(this, Or(this, t));
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
    const t = {}, r = F.normalizeUnit(e);
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
    return this.isValid ? j.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : pn;
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
  toLocaleString(e = Wt, t = {}) {
    return this.isValid ? j.create(this.loc.clone(t), e).formatDateTime(this) : pn;
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
    return this.isValid ? j.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
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
    let c = yn(this, o);
    return c += "T", c += Ir(this, o, t, r, s, l), c;
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
    return this.isValid ? yn(this, e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Rt(this, "kkkk-'W'WW-c");
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
    return this.isValid ? (s ? "T" : "") + Ir(
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
    return Rt(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
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
    return Rt(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? yn(this, !0) : null;
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
    return (t || e) && (r && (s += " "), t ? s += "z" : e && (s += "ZZ")), Rt(this, s, !0);
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
    return this.isValid ? this.toISO() : pn;
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
      return F.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...r }, l = ha(t).map(F.normalizeUnit), o = e.valueOf() > this.valueOf(), c = o ? this : e, d = o ? e : this, h = Eo(c, d, l, s);
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
    return this.diff(C.now(), e, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */
  until(e) {
    return this.isValid ? $.fromDateTimes(this, e) : this;
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
    const t = e.base || C.fromObject({}, { zone: this.zone }), r = e.padding ? this < t ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], l = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, l = void 0), Cr(t, this.plus(r), {
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
    return this.isValid ? Cr(e.base || C.fromObject({}, { zone: this.zone }), this, {
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
    if (!e.every(C.isDateTime))
      throw new ue("min requires all arguments be DateTimes");
    return fr(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(C.isDateTime))
      throw new ue("max requires all arguments be DateTimes");
    return fr(e, (t) => t.valueOf(), Math.max);
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
    const { locale: s = null, numberingSystem: l = null } = r, o = R.fromOpts({
      locale: s,
      numberingSystem: l,
      defaultToEN: !0
    });
    return ys(o, e, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, r = {}) {
    return C.fromFormatExplain(e, t, r);
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Wt;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return Vr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return qi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return br;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return _r;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Fr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Ar;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Pr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return Lr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Ur;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Rr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return Hr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return $r;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Zr;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Wr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return zr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Yr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Gi;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return qr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Gr;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Br;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Xr;
  }
}
function ht(n) {
  if (C.isDateTime(n))
    return n;
  if (n && n.valueOf && ze(n.valueOf()))
    return C.fromJSDate(n);
  if (n && typeof n == "object")
    return C.fromObject(n);
  throw new ue(
    `Unknown datetime argument: ${n}, of type ${typeof n}`
  );
}
C.prototype.format = function(n) {
  return this.toFormat(n);
};
class $e {
  static locationTime() {
    return C.local().setZone(window.timezone);
  }
  static parse(e) {
    return C.fromISO(e).setZone(window.timezone);
  }
  static parseTimestamp(e) {
    return C.fromMillis(+e).setZone(window.timezone);
  }
}
const Wo = {
  key: 0,
  class: "calendar-container"
}, zo = { class: "calendar-header" }, Yo = { class: "calendar-days" }, qo = ["onClick"], il = /* @__PURE__ */ Se({
  __name: "CalendarComponent",
  props: {
    modelValue: null,
    format: { default: "YYYY-MM-DD" },
    errorMessage: null,
    disableFutureDates: { type: Boolean, default: !1 },
    disablePastDates: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = U(!1), s = U($e.locationTime()), l = U([]), o = U(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), c = U(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]), d = H({
      get() {
        return t.modelValue;
      },
      set(m) {
        e("update:modelValue", m);
      }
    }), h = H(() => {
      let m = "";
      if (d.value == null)
        m = "--.--.----";
      else {
        let g = p(d.value), w = g.substring(8, 10), N = g.substring(5, 7), _ = g.substring(0, 4);
        m = w + "." + N + "." + _;
      }
      return m;
    });
    Gt(() => {
      var m;
      ((m = d.value) == null ? void 0 : m.toString()) == "Invalid DateTime" ? s.value = $e.locationTime() : d.value && (s.value = d.value || $e.locationTime());
    }), Zt(s, () => {
      O();
    }), Zt(r, () => {
      O();
    });
    function E() {
      r.value = !0;
    }
    function M() {
      r.value = !1;
    }
    function O() {
      let m = [], g = s.value.set({ day: 1 }), w = g.weekday;
      g = g.minus({ months: 1 }).endOf("month");
      let N = g.day;
      for (let P = w - 1; P > 0; P--)
        m.push({
          text: N - P + 1,
          time: g.set({ day: N - P + 1 }),
          status: "date-pass"
        });
      g = g.plus({ months: 1 }).endOf("month");
      let _ = g.day, J = h.value || p($e.locationTime());
      for (let P = 0; P < _; P++) {
        let Z = g.set({ day: P + 1 }), re = "", De = J.split("."), xe = De[2] + "-" + De[1] + "-" + De[0];
        p(Z) === xe && (re = "date-active"), p($e.locationTime()) === p(Z) && (re += " date-current"), m.push({
          text: P + 1,
          time: Z,
          status: re
        });
      }
      let B = 1;
      for (; m.length < 42; )
        m.push({
          text: B,
          time: g.plus({ months: 1 }).set({ day: B }),
          status: "date-future"
        }), B++;
      t.disableFutureDates && m.forEach((P) => {
        P.time > $e.locationTime() && (P.status += " date-disabled");
      }), t.disablePastDates && m.forEach((P) => {
        P.time < $e.locationTime() && (P.status += " date-disabled");
      }), l.value = m;
    }
    function y(m) {
      s.value = s.value.set({ month: s.value.month + m });
    }
    function I(m) {
      s.value = l.value[m].time.set({ hour: 7, minute: 0 }), e("update:modelValue", s.value), r.value = !1;
    }
    function p(m = s.value, g = t.format) {
      let w = m.year, N = m.month, _ = m.day, J = o.value[m.month - 1];
      const B = {
        YYYY: w,
        MMM: J,
        MM: ("0" + N).slice(-2),
        M: N,
        DD: ("0" + _).slice(-2),
        D: _
      };
      return g.replace(/Y+|M+|D+/g, (P) => P in B ? B[P] : P);
    }
    return (m, g) => {
      const w = Bt("click-outside");
      return x(), V("div", {
        class: de(["calendar-component", {
          "calendar-component-opened": r.value
        }])
      }, [
        Ce(We, {
          "read-only": !0,
          onClick: E,
          modelValue: A(h),
          "onUpdate:modelValue": g[0] || (g[0] = (N) => ne(h) ? h.value = N : null),
          "place-holder": "Select Date",
          "error-message": n.errorMessage
        }, null, 8, ["modelValue", "error-message"]),
        r.value ? ve((x(), V("div", Wo, [
          D("div", zo, [
            D("div", {
              class: "calendar-arrow left",
              onClick: g[1] || (g[1] = (N) => y(-1))
            }),
            D("p", null, q(o.value[s.value.month - 1]) + " " + q(s.value.year), 1),
            D("div", {
              class: "calendar-arrow right",
              onClick: g[2] || (g[2] = (N) => y(1))
            })
          ]),
          D("div", Yo, [
            (x(!0), V(ye, null, Xe(c.value, (N) => (x(), V("p", {
              class: "calendar-day day-name",
              key: N
            }, q(N), 1))), 128))
          ]),
          (x(), V(ye, null, Xe(6, (N) => D("div", {
            class: "calendar-days",
            key: N
          }, [
            (x(), V(ye, null, Xe(7, (_) => D("p", {
              class: de(["calendar-day", l.value[(N - 1) * 7 + (_ - 1)] && l.value[(N - 1) * 7 + (_ - 1)].status]),
              key: _,
              onClick: (J) => I((N - 1) * 7 + (_ - 1))
            }, q(l.value[(N - 1) * 7 + (_ - 1)] && l.value[(N - 1) * 7 + (_ - 1)].text), 11, qo)), 64))
          ])), 64))
        ])), [
          [w, M]
        ]) : se("", !0)
      ], 2);
    };
  }
});
const Go = { class: "checkbox-slider" }, Bo = ["for"], Xo = ["value", "id"], Jo = /* @__PURE__ */ D("span", { class: "slider" }, null, -1), jo = ["for"], al = /* @__PURE__ */ Se({
  __name: "CheckBoxSliderComponent",
  props: {
    valueKey: null,
    placeHolder: { default: "Checkbox" },
    errorMessage: null,
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = Math.random().toString(36).slice(2), s = H({
      get: () => t.modelValue,
      set: (l) => {
        e("update:modelValue", l);
      }
    });
    return (l, o) => (x(), V("div", Go, [
      D("label", {
        class: "checkbox-switch",
        for: "switch_" + A(r)
      }, [
        ve(D("input", {
          type: "checkbox",
          "onUpdate:modelValue": o[0] || (o[0] = (c) => ne(s) ? s.value = c : null),
          value: n.valueKey,
          id: "switch_" + A(r)
        }, null, 8, Xo), [
          [Dr, A(s)]
        ]),
        Jo
      ], 8, Bo),
      D("label", {
        for: "switch_" + A(r),
        class: "checkbox-slider-label"
      }, [
        Pe(q(n.placeHolder) + " ", 1),
        n.errorMessage ? (x(), V(ye, { key: 0 }, [
          Pe("- " + q(n.errorMessage), 1)
        ], 64)) : se("", !0)
      ], 8, jo)
    ]));
  }
});
export {
  il as CalendarComponent,
  al as CheckBoxSliderComponent,
  Ko as DropdownComponent,
  We as InputComponent,
  el as InputComponentWithSuggestions,
  tl as InputDateComponent,
  sl as SliderComponent,
  rl as TextAreaComponent,
  nl as TimePickerComponent
};
