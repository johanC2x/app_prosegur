$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {

        var users = [
            {'user' : 'user1-123'},
            {'user' : 'user2-123'},
            {'user' : 'user3-123'},
            {'user' : 'user4-123'},
            {'user' : 'admin-123'}
        ];

        $("#btn_login").click(function(){
            var user_val = $("#username").val();
            var pass_Val = $("#password").val();
            if(user_val !== '' && pass_Val !== ''){
                var result = users.find( user => user.user === user_val+'-'+pass_Val);
                if(result !== undefined){
                    switch(user_val){
                        case 'user1':
                            window.location.href = 'prosegur_view_1.html';
                            break;
                        case 'user2':
                            window.location.href = 'prosegur_view_2.html';
                            break;
                        case 'user3':
                            window.location.href = 'prosegur_view_3.html';
                            break;
                        case 'user4':
                            window.location.href = 'prosegur_view_4.html';
                            break;
                        case 'admin':
                            window.location.href = 'prosegur_view_reporte.html';
                            break;
                    }
                }else{
                    $("#modal_error_login").modal("show");
                }
            }else{
                $("#modal_error_login").modal("show");
            }
        });

        $("#btn_view_1").click(function(){
            var v1_emp_trans = $("#v1_emp_trans").val();
            var v1_placa_tractor = $("#v1_placa_tractor").val();
            var v1_placa_plataforma = $("#v1_placa_plataforma").val();
            var v1_destino_proveedor = $("#v1_destino_proveedor").val();
            if(v1_emp_trans !== '' && v1_placa_tractor !== '' && v1_placa_plataforma !== '' && v1_destino_proveedor !==  ''){
                document.getElementById("form_view_1").reset();
                $("#modal_qr").modal("show");
            }
        });

        $("#btn_view_2").click(function(){
            var v2_productos = $("#v2_productos").val();
            var v2_guia_remi = $("#v2_guia_remi").val();
            var v2_guia_trans = $("#v2_guia_trans").val();
            var v2_onu = $("#v2_onu").val();
            var v2_clase_riesgo = $("#v2_clase_riesgo").val();
            if(v2_productos !== '' && v2_guia_remi !== '' && v2_guia_trans !== '' && v2_onu !== '' && v2_clase_riesgo !== ''){
                document.getElementById("form_view_2").reset();
                $("#success").modal("show");
            }
        });

        $("#btn_view_3").click(function(){
            document.getElementById("form_view_3").reset();
            $("#success").modal("show");
        });

        $("#btn_view_4").click(function(){
            document.getElementById("form_view_4").reset();
            $("#success").modal("show");
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