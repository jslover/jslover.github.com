$(function () {
    $('.demo').append('<a href="#" class="btn-show-code">查看源码</a>');
    $('.btn-show-code').click(function () {
        var $demo = $(this).parent().clone();
        $demo.find('a.btn-show-code').remove();
        if (!$.$codeViewWin) {
            $.$codeViewWin = $('<div id="code-view-win" style="display:none;"><textarea></textarea><a href="#" class="btn-close-code">x</a></div>').appendTo($('body'));
            $.$codeViewWin.find('.btn-close-code').click(function () {
                $.$codeViewWin.fadeOut(200);
                return false;
            });
        }
        $.$codeViewWin.fadeIn(200).find('textarea').val($demo.html());
        return false;
    });
});