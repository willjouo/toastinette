(function(root){

    'use strict';

    var doc = document,
        create = (t)=>doc.createElement(t),
        id = (id)=>doc.getElementById(id),
        initialized = false,
        name = 'toastinette',
        
        init = ()=>{
            initialized = true;
            let toaster = create('div');
            toaster.id = name;
            doc.body.appendChild(toaster);
            lib.setPosition('br');
        },
        
        pos = (top, right, bottom, left)=>{
            let style = id(name).style;
            style.top = top;
            style.right = right;
            style.bottom = bottom;
            style.left = left;
        },
        
        lib = {
            show: (type, duration, html)=>{
                if(!initialized) init();
                let toast = create('div'),
                    toaster = id(name);
                toast.classList.add(name+'-'+type);
                toast.innerHTML = html;
                toaster.appendChild(toast);
                setTimeout(()=>{
                    toast.style.opacity = 0;
                    setTimeout(()=>{
                        toaster.removeChild(toast);
                    }, 300);
                }, duration);
            },

            setPosition: (position, margin=12)=>{
                if(!initialized) init();
                let no = 'auto', yes = margin+'px';
                if(position == 'tr')
                    pos(yes, yes, no, no);
                else if(position == 'tl')
                    pos(yes, no, no, yes);
                else if(position == 'br')
                    pos(no, yes, yes, no);
                else
                    pos(no, no, yes, yes);
            }
        };

    if(typeof exports === 'object')
        module.exports = lib;
    else if(typeof define === 'function' && define.amd)
        define([], function(){return lib});
    else
        root.Toastinette = lib;
})(this);