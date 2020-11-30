// Esercizio: creare una to-do list utilizzando Handlebars come templating engine.

$(document).ready(function () {
    //START JS

    // var source = document.getElementById("entry-template").innerHTML;
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var todoList = [
        "Fare gli esercizi",
        "Fare la spesa",
        "Pagare le bollette",
        "Guardare un film",
    ];

    console.log("Lista dei contenuti:", todoList);

    for (i = 0; i < todoList.length; i++) {

        var context = {
            text: todoList[i],
        };
        console.log("Singolo elemento della lista:", todoList[i]);

        var html = template(context);
        $("#result").append(html);

    }

    $(document).on("click", ".delete",
        function(){
            $(this).parent().remove();
        }
    );

    $("input").keydown(
        function (event) { 
            // console.log("Tasto premuto", event.which);
            if (event.which == 13) {
                var newContent = $("[name='todo-list']").val();
                console.log("Contenuto dell'input salvato:", newContent);
                
                var context = {
                    text: newContent,
                }

                var html = template(context);
                $("#result").append(html);

                //Svuota il campo di input dopo l'enter
                $("[name='todo-list']").val("")
            }
        }
    );

    //END JS
});

// MY FUNCTIONS--------------------------
