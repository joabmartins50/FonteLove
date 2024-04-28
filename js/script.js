$(document).ready(function(){

    /* ---- Countdown timer ---- */

    // Calcula o timestamp para 08/06/2024
    var targetDate = new Date(2024, 5, 8); // Mês é baseado em zero, então 5 representa junho
    var timestamp = targetDate.getTime();

    // Configura o contador com o timestamp calculado
    $('#counter').countdown({
        timestamp: timestamp
    });

    /* ---- Animations ---- */

    $('#links a').hover(
        function(){ $(this).animate({ left: 3 }, 'fast'); },
        function(){ $(this).animate({ left: 0 }, 'fast'); }
    );

    $('footer a').hover(
        function(){ $(this).animate({ top: 3 }, 'fast'); },
        function(){ $(this).animate({ top: 0 }, 'fast'); }
    );
});
