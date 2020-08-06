<script>

</script>

<form id="contact" name="contact" method="POST" data-netlify="true">
    <p style="display:none !important">
        <label>Don’t fill this out if you're human: 
            <input name="bot-field" />
        </label>
    </p>
    <h1>contact</h1>
    <p>
        <label>name<br>
            <input type="text" name="name" required />
        </label>   
    </p>
    <p>
        <label>email<br>
            <input type="email" name="email"required />
        </label>
    </p>
    <p>
        <label>phone<br>
            <input type="tel" name="phone" />
        </label>
    </p>
    <p>
        <label>message<br>
            <textarea name="message" required ></textarea>
        </label>
    </p>
    <p>
        <button type="submit">send</button>
    </p>
</form>

<style>
    form {
        width: 100%;
        max-width: 400px; 
        margin:15vh auto;
    }
    label {
        font-size:1.25em;
    }
    input, textarea {
        width:100%;
        border-radius: 0;
        -webkit-appearance: none;
        box-sizing: border-box;
        padding:0em;
    }
    input, button, textarea {
        text-align: left;
        font-size:1.25em;
        font-family: inherit;
        padding:.3em;
        margin:0;
        border:2px solid white;
    }
    textarea {
        height:5em;
    }
    button {
        height:2em;
        box-sizing: border-box;
        padding: 0em .4em 0em .4em;
        background-color: black;
        color:white;
        border-radius: 0;
        transition: .5s;
    }
    button:hover {
        background-color: white;
        color:black;
        border:2px solid white;
    }
    @media only screen and (max-width: 600px) {
        input, button, textarea {
            width:100%;
        }
        button {
            text-align: center;
        }
        p {
            margin: 0em .25em;
        }
    }
</style>
