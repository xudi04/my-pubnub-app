import PubNub from "pubnub";

var Dom = {
    input : document.getElementById("message"),
    button : document.getElementById("sender"),
    messaageArea : document.getElementById("textArea"),
    nameInput : document.getElementById("name"),
    loginButton : document.getElementById("logined"),
    loginCard : document.getElementById("loginCard")
}

const pubnub = new PubNub({
    publishKey:"pub-c-8e7b53c7-4c11-44fd-b5d4-39579a030a1b",
    subscribeKey:"sub-c-3c31105b-4269-4d9a-8c69-873c477e6076",
    userId:"sec-c-NTk0ZTMyMTMtOTRkNy00NmUwLWFhOWYtYjk3NmM3YjQyMzcw"
});


const channel = pubnub.channel("start");
const sub = channel.subscription();
sub.subscribe();

const publishMesage = async (Message,name)=>{
    const publishPayload = {
        channel:"start",
        message:{
            title:name,
            description: Message
        }
    }

    await pubnub.publish(publishPayload);
}

// localStorage.removeItem("uuid")
if (localStorage.getItem("uuid")) {
    Dom.loginCard.style.display = "none";
}


Dom.loginButton.onclick = function(){
    var name = Dom.nameInput.value;
    if(name != ""){
        localStorage.setItem("uuid", name);
        Dom.nameInput.value = "";

        if (localStorage.getItem("uuid")) {
            setTimeout(() => {
                Dom.loginCard.style.display = "none";
                window.location.reload()
            }, 1000);
        }
    } else {
        alert("lütfen bir kullanıcı adı girin");
    }
}

var uuid = localStorage.getItem("uuid");

Dom.button.onclick = function() {
    var message = Dom.input.value;
    if (message != "") {
        publishMesage(message,{uuid: uuid, time: (new Date()).getTime()}); 
        Dom.input.value = "";
    }
}

window.addEventListener("keydown", (e)=>{
    // console.log(e.key);
    if (e.key == "Enter") {
        // console.log("gönder");
        var message = Dom.input.value;
        if (message != "") {
            publishMesage(message,{uuid: uuid, time: (new Date()).getTime()}); 
            Dom.input.value = "";
        } 
    }
})

var snumber = 100;
sub.onMessage = (messageEvent) =>{
    var getUuid = messageEvent.message.title.uuid;
    var getTime = messageEvent.message.title.time;
    var getMessage = messageEvent.message.description;
    // console.log("Message is  : ", messageEvent);
    var time = new Date(getTime);
    var timeis = time.getHours() + ":" + time.getMinutes();
    // console.log(timeis);
    
    // console.log(Dom.messaageArea);
    if (getUuid == uuid) {
        // console.log("benim mesajım");
        var app = `<div class="left">
                        <div class="my-msg">
                            <i>`+ getMessage +`</i>
                            <i class="time">`+ timeis +`</i>
                        </div>
                    </div>`;
        Dom.messaageArea.innerHTML += app;
        
    } else {
        // console.log("onun mesajı");
        var app = `<div class="right">
                        <div class="her-msg">
                            <i class="name">`+ getUuid +`</i>
                            <i>`+ getMessage +`</i>
                            <i class="time">`+ timeis +`</i>
                        </div>
                    </div>`;
        Dom.messaageArea.innerHTML += app;
    }
    
    Dom.messaageArea.scrollTop = snumber + 1000;
}


// pubnub.addListener({
//     status: (s)=>{
//         console.log(s.category);
        
//     }
// })
