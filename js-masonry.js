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
        masArr.map(
           
            el=>{
           
            this.layoutBrks(el,opt);
            window.addEventListener('resize',()=> setTimeout(()=>this.layoutBrks(el,opt)),1000);    
        });
       
    }

  layoutBrks(el,opt){

        let allBrks    = undefined != opt && undefined != opt.elSelector ? Array.from(el.querySelectorAll(opt.elSelector))  :  Array.from(el.querySelectorAll('*')); 
        let brkWidth    = undefined != opt && undefined != opt.elWidth ? opt.elWidth : allBrks[0].offsetWidth; 
        let contWidth    = el.offsetWidth;
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
                let brkDim = this.optBrkSize(brkWidth, el.offsetHeight, x.offsetWidth, x.offsetHeight);
                let placeCount =  1;
                availSpots.map((n,l) =>{
                    if( availTop[0] === n[0] && 1 === placeCount){
                        x.style.width = `${brkDim.width}px`;
                        x.style.height = `${brkDim.height}px`;
                        x.style.position = 'absolute'; 
                        x.style.top = `${n[0]}px`;
                        x.style.left = `${n[1]}px`;
                        availTop[0] =  n[0]+brkDim.height+brkMargin;
                        availSpots[l] = [n[0]+brkDim.height+brkMargin, n[1]]
                        availTop.sort((a, b)=> a-b);
                        placeCount++;
                    }
                }); 
                if(i === allBrks.length-1){
                    availTop.sort(function(a, b){return b-a});
                    el.style.height =  (availTop[0] - el.offsetTop + rawBrkMargin)+'px';
                }
            });
    }

    optBrkSize(availWidth, availHeight, actWidth, actHeight) {
        let availHtRatio = 0, availWtRatio = 0, optElHt = 0, optElWt = 0;
        let elPercent = 1, marginPercent = 0;
        if ((actWidth >= availWidth) && (actHeight >= availHeight)) {
            if (actWidth >= actHeight) {
                if (actWidth > actHeight) {
                    availWtRatio = actWidth / availWidth;
                    optElWt = (actWidth / availWtRatio) - (marginPercent * availWidth);
                    optElHt = actHeight * (optElWt / actWidth);
                    if (optElHt >= (elPercent * availHeight)) {
                        availHtRatio = availHeight / actHeight;
                        optElHt = actHeight * availHtRatio - (marginPercent * availHeight);
                        optElWt = actWidth * (optElHt / actHeight);
                    }
                } else {
                    if (availWidth > availHeight) {
                        optElHt = (elPercent * availHeight);
                        optElWt = optElHt;
                    } else if (availHeight > availWidth) {
                        optElWt = (elPercent * availWidth);
                        optElHt = optElWt;
                    } else {
                        availHtRatio = availHeight / actHeight;
                        optElHt = actHeight * availHtRatio - (marginPercent * availHeight);
                        optElWt = actWidth * (optElHt / actHeight);
                    }
                }
            } else {
                availHtRatio = actHeight / availHeight;
                optElHt = (actHeight / availHtRatio) - (marginPercent * availHeight);
                optElWt = actWidth * (optElHt / actHeight);
            }
        } else if (actWidth >= availWidth && actHeight < availHeight) {
            availWtRatio = availWidth / actWidth;
            optElWt = actWidth * availWtRatio - (marginPercent * availWidth);
            optElHt = actHeight * (optElWt / actWidth);
        } else if (actHeight >= availHeight && actWidth < availWidth) {
            availHtRatio = availHeight / actHeight;
            optElHt = actHeight * availHtRatio - (marginPercent * availHeight);
            optElWt = actWidth * (optElHt / actHeight);
            optElHt = actHeight * (optElWt / actWidth);
        } else {
            var availElWt = elPercent * availWidth;
            var availElHt = elPercent * availHeight;
            if (actWidth >= availElWt && actHeight >= availElHt) {
                var availElWtRatio = availElWt / actWidth;
                availElHtRatio = availElHt / actHeight;
                optElWt = availElWt * availElWtRatio;
                optElHt = availHeight * availHtRatio;
            } else if (actWidth >= availElWt && actHeight < availElHt) {
                var availElWtRatio = availElWt / actWidth;
                optElWt = actWidth * availElWtRatio;
                optElHt = actHeight * (optElWt / actWidth);
            } else if (actHeight >= availElHt && actWidth < availElWt) {
                var availElHtRatio = availElHt / actHeight;
                optElHt = actHeight * availElHtRatio;
                optElWt = actWidth * (optElHt / actHeight);
            } else {
                optElWt = actWidth;
                optElHt = actHeight;
            }
            optElHt = actHeight * (optElWt / actWidth);
        }
        //at last check it optimized width is still large			
        if (optElWt > (elPercent * availWidth)) {
            optElWt = elPercent * availWidth;
            optElHt = actHeight * (optElWt / actWidth);
        }
        return {
            width: optElWt,
            height: optElHt
        };
    }


 }