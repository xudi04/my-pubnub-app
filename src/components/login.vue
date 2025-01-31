<template>
    <div class="login-card" id="loginCard">
        <div class="small-card">
            <input autocomplete="off" id="name" type="text">
            <button id="logined">Giriş yap</button>
        </div>
    </div>
</template>

<style scoped>
    .login-card {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 99vh;
        z-index: 9999;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .small-card {
        display: flex;
        justify-content: space-around;
        background-color: rgb(97, 83, 58);
        padding: 10px 5px;
        box-shadow: 2px 2px 2px white,
                    -2px 2px 2px white,
                    4px -4px 6px white,
                    -6px -7px 10px white;
        border-bottom: 5px solid wheat;
        border-right: 4px solid wheat;
        border-bottom-right-radius: 20px;
    }

    .small-card input {
        border-top-left-radius: 20px ;
        padding: 5px;
        text-align: center;
        font-size: 19px;
        border: none;
        border-bottom: 4px solid black;
        box-shadow: 0px 2px 2px white;
        outline: none;
        margin-right: 10px;
    }


    .small-card input:hover {
        box-shadow: 0px 20px 25px white,
                    20px 0px 25px white,
                    -20px 0px 25px white,
                    0px -20px 25px white;
    }

    .small-card input:active {
        border-bottom: 4px solid white;
        background-color: green;
        box-shadow: 0px 20px 25px green,
                    20px 0px 25px green,
                    -20px 0px 25px green,
                    0px -20px 25px green;
    }

    .small-card button {
        border-bottom-right-radius: 20px ;
        padding: 5px;
        text-align: center;
        font-size: 19px;
        border: none;
        border-top: 4px solid black;
        box-shadow: 0px 2px 2px white;
        outline: none;
        padding: 2px 5px;
        padding-right: 20px;
        text-shadow: 1px 1px white;
    }

    .small-card button:hover {
        background-color: rgb(240, 240, 165);
        box-shadow: 0px 20px 25px yellow,
                    20px 0px 25px yellow,
                    -20px 0px 25px yellow,
                    0px -20px 25px yellow;
    }

    .small-card button:active {
        background-color: red;
        color: aliceblue;
        box-shadow: 0px 20px 25px red,
                    20px 0px 25px red,
                    -20px 0px 25px red,
                    0px -20px 25px red;
        border-top: 4px solid white;

    }
</style>