<script>
//icon via https://loading.io/css/
</script>

<div class="lds-lines"><div></div><div></div><div></div></div>

<style>
    div.lds-lines {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    }
    div.lds-lines div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: white;
    animation: lds-lines 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    div.lds-lines div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
    }
    div.lds-lines div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
    }
    div.lds-lines div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
    }
    @keyframes lds-lines {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
</style>