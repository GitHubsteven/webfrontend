/**
 * Created by dell on 2018/2/27.
 */
function test1(url){
    return new Promise((resolve , reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("GET",url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
};