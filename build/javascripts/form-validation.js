$(function() {
  var hasSuccess, warningAuto;

  $('.alert-autocloseable-success').hide();
  $('.alert-autocloseable-warning').hide();
  $('.alert-autocloseable-danger').hide();
  $('.alert-autocloseable-info').hide();
  warningAuto = function() {
    $('.alert-autocloseable-warning').show();
    $('.alert-autocloseable-warning').delay(3000).fadeOut('slow');
  };
  $('.errorsContainer').hide();
  $('#login-form').validate({
    errorClass: 'state-error',
    validClass: 'state-success',
    errorElement: 'span',
    rules: {
      useremail: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6,
        maxlength: 16
      }
    },
    messages: {
      useremail: {
        required: '輸入 email帳號',
        email: '輸入 email 帳號格式錯誤'
      },
      password: {
        required: '密碼必填',
        minlength: '密碼不得少於6個字',
        maxlength: '密碼不得超過16個字',
        regex: '/^[0-9a-zA-Z]+$/'
      }
    },
    invalidHandler: function(form, validator) {
      $('.errorsContainer').fadeOut().fadeIn();
    },
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.field').addClass(errorClass).removeClass(validClass);
      if (this.numberOfInvalids() > 0) {
        $('.errorsContainer').show();
        warningAuto();
      }
    },
    unhighlight: function(element, errorClass, validClass) {},
    errorPlacement: function(error, element) {
      error.appendTo('#smartErrors');
    }
  });
  return;
  hasSuccess = function() {
    $('.successContainer').fadeIn(500);
    $('.forgot-password').fadeOut(400);
    return $('#fopw-submit').attr('disabled', 'disabled');
  };
  $('.successContainer').hide();
  $('#forget-password-form').validate({
    success: 'valid',
    submitHandler: function() {
      hasSuccess();
    },
    errorClass: 'state-error',
    validClass: 'state-success',
    errorElement: 'span',
    rules: {
      useremail: {
        required: true,
        email: true
      }
    },
    messages: {
      useremail: {
        required: '輸入 email帳號',
        email: '輸入 email 帳號格式錯誤'
      }
    },
    invalidHandler: function(form, validator) {
      $('.errorsContainer').show();
    },
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.field').addClass(errorClass).removeClass(validClass);
      if (this.numberOfInvalids() > 0) {
        $('.errorsContainer').show();
      }
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.field').removeClass(errorClass).addClass(validClass);
      if (this.numberOfInvalids() === 0) {
        $('.errorsContainer').hide();
      }
    },
    errorPlacement: function(error, element) {
      error.appendTo('#smartErrors');
    }
  });
});
