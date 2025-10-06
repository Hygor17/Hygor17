<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
        <style>
            .nova-div{
                background: green;
                padding: 20px;

            }
        </style>


</head>
<body>
    <h1 id="TituloMaster"> titulo</h1>
        <p>Imagine aq um <strong> paragrafo </strong>  legal</p>
        <p>mais um paragrafo</p>
        <div class="nova-div">
                mais um texto
        </div>

    <script>
        //window.document.getElementById("TituloMaster").innerText = "Um novo titulo";
        //console.log(window.document.getElementById("TituloMaster"));
        
        var titulo = document.getElementById("TituloMaster");
        console.log(titulo);
        console.log(titulo.innerHTML);
        console.log(titulo.innerText);

        var texto = document.getElementsByTagName("p")[0];
        console.log(texto);
        console.log(titulo.innerHTML);
        console.log(titulo.innerText);

        texto.innerText = "mudando o valor do texto";

        var corpo = window.document.body;
        corpo.style.background = "blue";

        texto.style.color = "yellow";

        var minhaDiv = document.querySelector(".nova-dix");
        minhaDiv.style.backgroundColor = "yellow";
        minhaDiv.style.color = "white";
        minhaDiv.style.innerText = "alternando as cores...";


        </script>
    </body>
</html>
