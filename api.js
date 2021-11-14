var api = 'https://sukmusicapi.vercel.app'
// api core
var result
function get(url){
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', url, true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            result = Function('"use strict";return (' + json + ')')();
            }
        };
}
function getUrl(id){
    return window.location.href = "https://music.163.com/song/media/outer/url?id=" + id
}
function search(keywords,offset){
    document.getElementById('page_number').innerHTML = "Page " + page
    document.getElementsByClassName('detail_page')[0].style.display = "none"
    searchButtonCd()
    let intSearch = null
    clearInterval(intSearch)
    var keywords = keywords.replace(/ /g,'')
    if(keywords.length == 0){toast("只输入"+keywords+"，想烧服务器啊?");return}
    document.getElementById('loading').innerHTML=""
    time=0
    document.getElementsByClassName('search_page')[0].style.display = "initial"
    document.getElementsByClassName('home')[0].style.display = "none"
    var url = api + "/cloudsearch?offset=" + offset + "&keywords=" + keywords;
    get(url)
    result = undefined
    document.getElementsByClassName('list')[0].remove()
    var list = document.createElement('div')
    list.setAttribute('class','list')
    document.getElementsByClassName('search_page')[0].appendChild(list)
    intSearch = setInterval (function(){
        if(result!=undefined){
        console.log(result.result.songs[0].name);clearInterval(intSearch)
        toast("Searched in "+time/10 + "s");
            if(result.result.songs.length==30) {document.getElementsByClassName('search_input')[0].style.right="110px";
                document.getElementsByClassName('search_input')[0].style.width="240px";
                document.getElementsByClassName('load_more')[0].style.opacity="1";
                document.getElementsByClassName('load_more')[0].style.display="initial";}
            else{document.getElementsByClassName('search_input')[0].style.right="70px";
                document.getElementsByClassName('search_input')[0].style.width="280px";
                document.getElementsByClassName('load_more')[0].style.opacity="0";
                document.getElementsByClassName('load_more')[0].style.display="none";}
        for(var i=0;i<result.result.songs.length;i++){
            var item = document.createElement('div')
            item.setAttribute('class','item')
            document.getElementsByClassName('list')[0].appendChild(item)

            var title = document.createElement('p')
            title.setAttribute('class','title')
            title.setAttribute('onclick',"change('"+result.result.songs[i].al.picUrl+"',"+result.result.songs[i].id+');play();')
            var titleContent = document.createTextNode(result.result.songs[i].name)
            title.appendChild(titleContent)
            document.getElementsByClassName('item')[i].appendChild(title)
            if(result.result.songs[i].alia.length != 0){ var alia = document.createElement('span');alia.setAttribute('class','alia');var aliaContent = document.createTextNode(" -(" + result.result.songs[i].alia[0] + ")");alia.appendChild(aliaContent);document.getElementsByClassName('title')[i].appendChild(alia)}

            var cover = document.createElement('img')
            cover.setAttribute('class','cover')
            cover.setAttribute('onclick',"change('"+result.result.songs[i].al.picUrl+"',"+result.result.songs[i].id+');play();')
            cover.setAttribute('src',result.result.songs[i].al.picUrl)
            document.getElementsByClassName('item')[i].appendChild(cover)

            var id = document.createElement('p')
            id.setAttribute('class','id')
            var idContent = document.createTextNode(result.result.songs[i].id)
            id.appendChild(idContent)
            document.getElementsByClassName('item')[i].appendChild(id)

            var artists = document.createElement('div')
            artists.setAttribute('class','artists')
            document.getElementsByClassName('item')[i].appendChild(artists)
            for(j=0;j<result.result.songs[i].ar.length;j++){
                var artist = document.createElement('p')
                artist.setAttribute('class','artist')
                var artistContent = document.createTextNode(result.result.songs[i].ar[j].name)
                artist.appendChild(artistContent)
                document.getElementsByClassName('artists')[i].appendChild(artist)
            }

            var album = document.createElement('p')
            album.setAttribute('class','album')
            var albumContent = document.createTextNode(result.result.songs[i].al.name)
            album.appendChild(albumContent)
            document.getElementsByClassName('item')[i].appendChild(album)
        }}
        else {load(1);time++}
    },100)
}

function albumDetail(id){
    
    document.getElementsByClassName('detail_page')[0].style.display = "initial"

}
