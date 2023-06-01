// DARK MODE
$(document).ready(function () {
    $("#btn-contrast").click(function () {
        $("body").toggleClass("dark-mode");
    });
});


//INCREASE FONT
$(document).ready(function () {
    $("#btn-font-up").click(function () {
        var currentFontSize = $("body").css("font-size");
        var newSize = parseFloat(currentFontSize) + 1;
        $("body").css("font-size", newSize);
    });
});

//DECREASE FONT 
$(document).ready(function () {
    function diminuirFonte() {
        var tamanhoAtual = parseInt($('body').css('font-size'));
        var novoTamanho = tamanhoAtual * 0.9;
        $('body').css('font-size', novoTamanho + 'px');
    }

    $('#btn-font-down').click(function () {
        diminuirFonte();
    });
});

$(document).ready(function() {
    $('.product-description-container').hide();
    $('#btn-toggle').click(function() {
      $('.product-description-container').toggle();
    });
  });
