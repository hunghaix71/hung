music = ['music-1', 'music-2', 'music-3' , 'music-4' , 'music-5' , 'music-6' , 'music-7' , 'music-8' , 'music-9' , 'music-10' , 'music-11' , 'music-12' , 'music-13' , 'music-14' , 'music-15'];
document.querySelector("audio").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);
<script type=”text/JavaScript”>
function killCopy(e){
return false;
}
function reEnable(){
return true;
}
document.onselectstart= new Function (“return false”){
if (window.sidebar){
document.onmousedown=killCopy
document.onclick=reEnable
}
</script>