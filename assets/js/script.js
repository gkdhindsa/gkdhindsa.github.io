function updateTab(arg){
  document.querySelector(".content-section").innerHTML=document.querySelector('.'+arg.id).innerHTML;
}

function updatePhoto(arg){
  console.log(arg);
  document.querySelector('#slide-main').src=arg.src;
}

var tabs=document.querySelectorAll(".tab-icon");
tabs.forEach(tab => {
    tab.addEventListener('click', function(){
      updateTab(tab)
    });
});

/*var slides=document.getElementsByClassName('gallery-photo')
for(child of slides){
  child.addEventListener('click', function(){
    console.log('clicked');
  })
}*/
$('#slide').click(function(){
  console.log('this');
})
