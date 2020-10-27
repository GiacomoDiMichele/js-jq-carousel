
$(document).ready(function() {

    // inserisco l'interazione del click sull'icona arrow-right
    $('.next i').click(function() {
        // creo una variabile per salvare l'immagine visualizzata al momento
        var img_corrente = $('img.active');

        // rimuovo l'active all'immagine per darla poi a quella successiva
        img_corrente.removeClass('active');

        // controllo tramite length se c'è un'altra immagine(0/no - 1/si)
        if(img_corrente.next('img').length) {

            // se c'è inserisco la classe active all'immagine successiva
            img_corrente.next('img').addClass('active');
        } else {
            // se non c'è devo ridare la classe active al primo elemento/figlio
            $('.carousel :first-child').addClass('active');
        }
    });

        //inserisco l'interazione del click sull'arrow right facendo muovere anche il riempimento dei cerchi
        //seguo lo stessa procedura ma cambiando le i al posto delle img questa volta
    $('.next i').click(function() {
        var i_corrente = $('i.active');

        i_corrente.removeClass('active');

        if(i_corrente.next('i').length) {
            i_corrente.next('i').addClass('active');
        } else {
            $('.circles :first-child').addClass('active');
        }
    });


    //ora bisogna far si che le foto tornino indietro, quindi l'active dovrà spostarsi indietro di 1
    //faccio la stessa procedura ma eseguita inserendo prev e last al posto di next e first

    $('.prev i').click(function() {
        var img_corrente = $('img.active');

        img_corrente.removeClass('active');

        if(img_corrente.prev('img').length) {

            img_corrente.prev('img').addClass('active');
        } else {
            $('.carousel img:last-of-type').addClass('active');
        }
    });


    $('.prev i').click(function() {
        var i_corrente = $('i.active');

        i_corrente.removeClass('active');

        if(i_corrente.prev('i').length) {

            i_corrente.prev('i').addClass('active');
        } else {
            $('.circles i:last-of-type').addClass('active');
        }
    });

});
