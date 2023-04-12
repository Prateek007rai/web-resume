// // window.scrollTo(0 , 400);
// //window.scrollBy(0,100);

// // for smooth scrolling
// /*var targetPos =1500;
// var currPos =0;

// var scollInterval = setInterval(
//                      function(){
//                        if(currPos >= targetPos){
//                         clearInterval(scollInterval);
//                         return;
//                        }
//                        currPos += 50;
//                        window.scrollBy(0 , 50);
//                      } ,  50    
// );
//        */





// // scrolling 
// var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// var interval;                                                         // declared globally bcz we need it in function
// for(var i=0 ; i< navMenuAnchorTags.length ;i++){
//     navMenuAnchorTags[i].addEventListener('click' , function(event){
//           event.preventDefault();
//           var targetSectionID = this.textContent.trim().toLowerCase();             //changed the nav menu option into lower case
//           var targetSection = document.getElementById(targetSectionID);             // use the lower case tag as an id already declared in html section
//            console.log(targetSectionID);
         
//           // interval = setInterval(scrollVertically, 50 , targetSection);                    //tine in mili-sec   // we have to pass 'targetSection' here so that fun can fetch it later
    
//           interval = setInterval(function(){                                                //2nd way
//               scrollVertically(targetSection , targetSectionID);
//           } , 1);
//         });
// } 

// // I added this targetSectionId all by my self in this function , to stop the scrolling going down to infinity

// function scrollVertically(targetSection , targetSectionID){
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();        //this will provide the coordinates of the section
//             if(targetSectionCoordinates.top <= 0 && targetSectionID != 'contact' ){
//                 clearInterval(interval);
//                 console.log("Done---------------",targetSectionCoordinates , window);
//                 return;
//             }
//             if(targetSectionID == 'contact' && targetSectionCoordinates.top - 300 <= 0){
//                 clearInterval(interval);
//                 console.log('finally here');
//                 return;
//             }
//             // console.log(targetSectionCoordinates);
//             // console.log('My window===', window);
            
//             window.scrollBy(0 , 15000);    //distance in px
// }





// // skill-bar-Auto-fill starts

// // handle scoll event on window

// //check that skill  section container (ex- c , java , python etc) is visible or not
// // initialize bars with 0 width
// //start animation on every skill indicators --> increase skill level from 0 to the respective maximum

// //store skill level --> HTML with help of data attribute


// var progressBars = document.querySelectorAll(".skill-progress > div");
// var skillContainer = document.getElementById('skills-container');
// window.addEventListener('scroll' , checkScroll);

// var animationDone = false ;


// function initializeBars(){
//     for(var bar of progressBars){
//         bar.style.width = 0 + '%' ;
//     }
// }

// initializeBars();

// function fillBars(){
//     for(let bar of progressBars){
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currWidth = 0;
//         let interval = setInterval(function(){

//               if(currWidth > targetWidth){
//                  clearInterval(interval);
//                  return;
//               }
//               currWidth ++;
//               bar.style.width = currWidth + '%';

//         } , 8);       //decrease the time for faster filling
//     }
// }


function checkScroll(){

         //you have to check whether skill-container is visible or not
         var coordinates = skillContainer.getBoundingClientRect();
         if(!animationDone && coordinates.top < window.innerHeight){
            animationDone = true ;
            //  console.log("skill visible");
            fillBars();
         }
         else if(coordinates.top > window.innerHeight){
            animationDone = false ;
            initializeBars();
         }

}

