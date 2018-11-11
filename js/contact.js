$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {

        $("#btn_view_1").click(function(){
            var v1_emp_trans = $("#v1_emp_trans").val();
            var v1_placa_tractor = $("#v1_placa_tractor").val();
            var v1_placa_plataforma = $("#v1_placa_plataforma").val();
            var v1_destino_proveedor = $("#v1_destino_proveedor").val();
            if(v1_emp_trans !== '' && v1_placa_tractor !== '' && v1_placa_plataforma !== '' && v1_destino_proveedor !==  ''){
                $("#modal_qr").modal("show");
            }
        });

        $('#contactForm').validate({
            rules: {
                v1_emp_trans: {
                    required: true
                },
                v1_placa_tractor: {
                    required: true
                },
                v1_placa_plataforma: {
                    required: true
                },
                v1_destino_proveedor: {
                    required: true
                }
            },
            messages: {
                v1_emp_trans: {
                    required: "El campo nombre es requerido"
                }
            }
        });

        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})