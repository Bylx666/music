function a(){
    alert("test")
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