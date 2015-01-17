( $(document).ready(
    function() {
        $('input[type="radio"]').change(function () {
                if ($(this).prop("checked") == true) {
                    $(this).closest('label').addClass('selected');
                    $(this).closest('label').siblings().removeClass('selected');
                }
                else {
                    $(this).closest('label').removeClass('selected');
                }
            }
        );
        $('.button.campaign-button').click(
            function(){
                var parent = $(this).parent();
                if(parent.find('input').val() == '20prcntrabatt'){
                    parent.append('<div class="dis"></div>');
                    parent.children().addClass('disabled');
                }
            });
    }
))();
