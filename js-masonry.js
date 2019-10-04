/*
 * Js Masonry
 * javascript library to create masnory layout of elements 
 * https://ujwolbastakoti.wordpress.com/
 * MIT license
 *  
 */


 'use strict'
 class jsMasonry{
    constructor(elems,opt){

        let masArr =  Array.from(document.querySelectorAll(elems));
        masArr.map(el=>{
                        let elFirstChild    = undefined != opt && undefined != opt.elSelector ? el.querySelector(opt.elSelector)  :  el.children[0];
                        if(undefined  != elFirstChild){
                          let brkPer = undefined != opt && undefined == opt.elWidth  && true === opt.percentWidth ? elFirstChild.offsetWidth/el.offsetWidth: null;    
                          this.layoutBrks(el,opt,brkPer);
                          window.addEventListener('resize',()=>this.layoutBrks(el,opt,brkPer,event));  
                        }  
        });
    }

  layoutBrks(el,opt,brkPer,resizeEvnt){
            let allBrks    = undefined != opt && undefined != opt.elSelector ? Array.from(el.querySelectorAll(opt.elSelector))  :  Array.from(el.children); 
            let contWidth    = el.offsetWidth;
            let brkWidth    = undefined != opt && undefined != opt.elWidth ? opt.elWidth :  undefined != brkPer || null != brkPer ?contWidth*brkPer :allBrks[0].offsetWidth ; 
            let rawBrkMargin = undefined != opt && undefined != opt.elMargin ?  opt.elMargin : 0;
            let rawBrkPerRow = (contWidth-rawBrkMargin )/(brkWidth+rawBrkMargin );
            let brkPerRow = Math.floor(rawBrkPerRow); 
            let brkMargin = (((rawBrkPerRow - brkPerRow)*brkWidth) + ((rawBrkPerRow+1)*(rawBrkMargin)))/(brkPerRow+1);
            let availSpots =  Array();
            let availTop =  Array();
            for(let z = 0; z<=brkPerRow-1; z++ ){
                availTop.push(el.offsetTop+rawBrkMargin);
                availSpots.push([el.offsetTop+rawBrkMargin, el.offsetLeft+(z*brkWidth)+((z+1)*brkMargin)]);     
            } 
            allBrks.map((x,i)=>{
                let placeCount =  1;
                    availSpots.map((n,l) =>{
                        if( availTop[0] === n[0] && 1 === placeCount){
                            x.style.width = `${brkWidth}px`;
                            x.style.position = 'absolute'; 
                            x.style.top = `${n[0]}px`;
                            x.style.left = `${n[1]}px`;
                            placeCount++;
                            if(x.nodeName.toLowerCase() === 'img'){
                                x.style.height = '';
                            let  brkHt = brkWidth/ x.offsetWidth * x.offsetHeight;
                                x.style.height = `${brkHt}px`;
                                availTop[0] =  n[0]+brkHt+brkMargin;
                                availSpots[l] = [n[0]+brkHt+brkMargin, n[1]]
                                availTop.sort((a, b)=> a-b);
                            }else{
                                availTop[0] =  n[0]+x.offsetHeight+brkMargin;
                                availSpots[l] = [n[0]+x.offsetHeight+brkMargin, n[1]]
                                availTop.sort((a, b)=> a-b);
                            }   
                        }
                    });

                    if(i === allBrks.length-1){
                        availTop.sort((a, b)=> b-a);
                        el.style.height =  (availTop[0] - el.offsetTop + rawBrkMargin)+'px';
                        if(undefined != opt && 'function' == typeof(opt.callback) && undefined == resizeEvnt){
                            opt.callback(el);
                        }
                        if(undefined == brkPer){
                            window.dispatchEvent(new Event('resize'));
                        }
                    }
                }); 
    }

 }