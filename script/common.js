$(function () {  
    $('.demo').each(function (i, item) {
        var $demo = $('.demo').eq(i);
        var h = $demo.html();
        var $btn = $('<a href="#" class="btn-show-code">查看源码</a>').appendTo($demo); 
        $btn.click(function () {
            pop(h);
        });
    });
    function pop(msg) {
        if (!$.$codeViewWin) {
            $.$codeViewWin = $('<div id="code-view-win" style="display:none;"><textarea></textarea><a href="#" class="btn-close-code">x</a></div>').appendTo($('body'));
            $.$codeViewWin.find('.btn-close-code').click(function () {
                $.$codeViewWin.fadeOut(200);
                return false;
            });
        }
        $.$codeViewWin.fadeIn(200).find('textarea').val(msg);
    }
});