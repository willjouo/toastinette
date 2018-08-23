(function(root){

    'use strict';

    var create = (t)=>document.createElement(t),
        id = (id)=>document.getElementById(id),
        initialized = false;
    
    function init(){
        let toaster = create('div');
        toaster.id = 'toastinette';
        document.body.appendChild(toaster);
        initialized = true;
    }

    function add(type, duration, html){
        if(!initialized) init();
        let toast = create('div'),
            toaster = id('toastinette');
        toast.classList.add('toastinette-'+type);
        toast.innerHTML = html;
        toaster.appendChild(toast);
        toast.style.opacity = '1';
        setTimeout(()=>{
            toast.style.opacity = 0;
            setTimeout(()=>{
                toaster.removeChild(toast);
            }, 1000);
        }, duration);
    }

    if(typeof exports === 'object')
        module.exports = add;
    else if(typeof define === 'function' && define.amd)
        define([], function(){return add});
    else
        root.Toastinette = add;
})(this);