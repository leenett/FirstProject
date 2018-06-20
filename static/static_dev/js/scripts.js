$(document).ready(function () {
    var form = $('#form-buying-product');
    console.log(form);
    form.on('submit', function (e) {
        // var csrf_token;
        e.preventDefault();
        var nmb = $('#nmb').val();
        console.log(nmb);
        var submit_btn = $('#submit_btn');
        var product_id = submit_btn.data("product_id");
        var product_name = submit_btn.data("name");
        var product_price = submit_btn.data("price");
        console.log(product_id);
        console.log(product_name);


        // var data = {};
        // data.product_id = product_id;
        // data.nmb = nmb;
        // var csrf_token = $('#form-buying-product[name="csrfmiddlewaretoken"]').val();
        // data["csrfmiddlewaretoken"] = csrf_token;
        //
        //     var url = form.attr("action");
        //
        // console.log(data);
        //     $.ajax({
        //         url: url,
        //         type: 'POST',
        //         data: data,
        //         cache: true,
        //         success: function (data) {
        //             console.log("OK");
        //         },
        //         error: function () {
        //             console.log("error")
        //         }
        //     });

        $('.basket-items ul').append('<li>'+product_name+', ' + 'кількість курсів: '  + nmb + ' по ' + product_price + ' грн за заняття. ' +
            '<a class="delete-item" href="">x</a>' + '</li>');
    });

    function showingBasket(){
       $('.basket-items').removeClass('hidden');
    };

    // $('.basket-container').on('click', function (e) {
    //     e.preventDefault();
    //     showingBasket();
    // });

    $('.basket-container').mouseover(function () {
        showingBasket();
    });

    // $('.basket-container').mouseout(function () {
    //     showingBasket();
    // });

    $(document).on('click', '.delete-item', function (e) {
        e.preventDefault();
        $(this).closest('li').remove();
    })
});


