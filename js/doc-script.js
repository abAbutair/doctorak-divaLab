$(document).ready(function () {
    $('.custom-select').select2({
        minimumResultsForSearch: Infinity,
        // width: '100%'
    });
});

//-------------------------------
function motionLink() {
    $('.motion-under ').each(function () {
        // var motion = $(this);
        var ele = $(this).find('a');
        var aTag = ele.css('color');

        /* item details page*/
        // Create a new style tag
        var style = document.createElement("style");
        // Append the style tag to head
        document.head.appendChild(style);
        // Grab the stylesheet object
        sheet = style.sheet;

        sheet.insertRule( '.motion-under a:before{background:'+ aTag + '}');
    })
}motionLink();

//----------------Sticky-HEADER---------------
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var headerHeight = $('header').height();

    if(scroll >= $(window).height()*0.8){
        $('header').addClass('sticky');
        $('main').css('padding-top', headerHeight + 3)
    }else{
        $('header').removeClass('sticky');
        $('main').css('padding-top', 0)
    }
});

//------------------
$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
    $('body, html').toggleClass('stopScroll')
});

//switch flight types --------------------------------------------------------
function showForm() {
    var checked = $('input[name="paymentMethod"]:checked');
    var target = checked.attr('data-target');
    $('.method-info.active-payment').removeClass('active-payment');
    $('.method-info input').attr('disabled', 'disabled');
    $('.method-info .btn').attr('disabled', 'disabled');
    $('.method-info[data-type="' + target + '"]').addClass('active-payment');
    $('.method-info[data-type="' + target + '"].active-payment input').removeAttr('disabled', 'disabled');
    $('.method-info[data-type="' + target + '"].active-payment .btn').removeAttr('disabled', 'disabled');
    $('.method-info[data-type="' + target + '"]').closest('[class^="col"]').siblings().find('.method-info').removeClass('active-payment');
}
showForm();
$('input[name="paymentMethod"]').on('change', function(){
    //setTimeout(function() { showForm(); }, 1000);
    showForm();
});

//------------------------------
$(document).ready(function() {

    // get the name of uploaded file
    $('input[type="file"]').change(function(){
        var value = $("input[type='file']").val();
        if(value != ""){
            $('.js-value').text(value);
        }else {
            $('.js-value').text("upload image");
        }
    });

});

//-----------------------
$('.review-bio').children().css("margin-bottom" , "8px");

//-----
$('.more-read-btn').click(function () {
    $('.more-read').addClass('more-active');
    $('.more-read-btn').css('display','none');
    $('.less-read-btn').css('display','inline-block');
});
$('.less-read-btn').click(function () {
    $('.more-read').removeClass('more-active');
    $('.more-read-btn').css('display','inline-block');
    $('.less-read-btn').css('display','none');

})

//--------------------------
$('#docCalender').jalendar();
//------
$('#appointmentDate').jalendar({
    type: 'selector'
});