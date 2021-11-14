function a(){
    alert("test")
}
function play(){
    if(playing == null) toast('Find your favorite songs first~')
    else{
    playing.play()
    document.getElementsByClassName('player_play')[0].style.display="none"
    document.getElementsByClassName('player_pause')[0].style.display="initial"}
}
function pause(){
    playing.pause()
    document.getElementsByClassName('player_play')[0].style.display="initial"
    document.getElementsByClassName('player_pause')[0].style.display="none"
}
//init
function good(){
    var good = new Date().getHours();
    if(good>=5&&good<11){
        document.getElementById('good').innerHTML = "Good Morning!"
        document.getElementById('subgood').innerHTML = "Have some bread and a cup of tea please~"
        document.title = "早安！看看你几点起的床？"
    }else if(good>=11&&good<14){
        document.getElementById('good').innerHTML = "Good Hot Time!"
        document.getElementById('subgood').innerHTML = "It is noon now! Enjoy your lunch please~"
        document.title = "大中午好热啊"
    }else if(good>=14&&good<17){
        document.getElementById('good').innerHTML = "Good Afternoon"
        document.getElementById('subgood').innerHTML = "Have a piece of cake, and enjoy your warm rest time~"
        document.title = "温馨的闲憩时光"
    }else if(good>=17&&good<19){
        document.getElementById('good').innerHTML = "Good Evening"
        document.getElementById('subgood').innerHTML = "Let us prepare our dinner, and recovery ourselves~"
        document.title = "天色渐暗..."
    }else if(good>=19&&good<23){
        document.getElementById('good').innerHTML = "Good Night"
        document.getElementById('subgood').innerHTML = "Before sleeping, what are we doing now?"
        document.title = "亲爱的，你在看电视嘛？"
    }else if(good>=23||good<5){
        document.getElementById('good').innerHTML = "Good Midnight"
        document.getElementById('subgood').innerHTML = "Cherish our lives~QAQ"
        document.title = "又在熬夜"
    }else {
        document.getElementById('good').innerHTML = "Alien Detected!!"
        document.getElementById('subgood').innerHTML = "Is it 25P.M. now???"
        document.title = "我敬爱的造物主啊..."}
}

function home(){
    document.getElementsByClassName('search_page')[0].style.display = "none"
    document.getElementsByClassName('detail_page')[0].style.display = "none"
    document.getElementsByClassName('home')[0].style.display = "initial"
}

function toast(text){
    document.getElementById('toast').innerHTML = text
    document.getElementById('toast').style.opacity = 1
    setTimeout(function(){document.getElementById('toast').style.opacity = 0},2000)
}
function load(num){
    for(var i = 0;i<num;i++){
    document.getElementById('loading').innerHTML+="<svg><rect class='loading_block'></svg>"
}}

function searchButtonCd(){
    document.getElementsByClassName('search_button')[0].setAttribute('onclick','')
    document.getElementsByClassName('load_more')[0].setAttribute('onclick','')
    var i = -4
    document.getElementById('button_cd').height=document.getElementById('button_cd').height;
    setTimeout(function(){document.getElementById('button_cd').style.display = "none";clearInterval(buttonCdInt);document.getElementsByClassName('search_button')[0].setAttribute('onclick','search(searchform.keywords.value,offset)');document.getElementsByClassName('load_more')[0].setAttribute('onclick','loadMore()')},2000)
    document.getElementById('button_cd').style.display = "initial"
    var arc = document.getElementById('button_cd').getContext('2d')
    buttonCdInt = setInterval(function(){
        document.getElementById('button_cd').height=document.getElementById('button_cd').height;
        arc.beginPath()
        arc.arc(20,20,20,Math.PI/10*i,-Math.PI/2)
        arc.lineTo(20,20)
        arc.closePath()
        arc.fillStyle='rgba(0, 0, 0, 0.5)';
        arc.fill()
        i++
    },100)
}

function loadMore(){
    page++
    offset = ( page - 1 ) * 30
    result = undefined
    document.getElementsByClassName('search_button')[0].click()
}

function returnFromDetail(){
    document.getElementsByClassName('detail_page')[0].style.display = "none"
}

function change(picUrl,id){
    if(playing != null) playing.pause()
    document.getElementsByClassName('player_cover')[0].setAttribute('src',picUrl)
    currentSongUrl = "https://music.163.com/song/media/outer/url?id=" + id
    playing = new Audio(currentSongUrl)
}

function download(){
    toast('e')
    window.open(currentSongUrl)
}