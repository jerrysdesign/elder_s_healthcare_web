$(function() {
  var apnMsg, disabledBtn, errorAuto, forgetpasswordHide, forgetpasswordShow, loginHide, loginMsg, loginShow, msgHide, msgIcon, rePwMsg, successAuto, warningAuto;

  $('#msg').hide();
  loginMsg = {
    bk: {
      error: 'Email帳號或密碼格式錯誤!'
    },
    fe: {
      warning: 'Email帳號或密碼格式錯誤!'
    }
  };
  rePwMsg = {
    bk: {
      success: '請到您的信箱收信，以重新設定密碼。',
      error: 'Invail email address. 無效的電子郵件地址'
    },
    fe: {
      warning: 'Email帳號或密碼格式錯誤!'
    }
  };
  msgIcon = {
    error: '<i class="fa fa-times"></i>',
    warning: '<i class="fa fa-exclamation-triangle"></i>',
    sucess: '<i class="fa fa-check"></i>'
  };
  apnMsg = function() {
    return $('#msg').append();
  };
  warningAuto = function(currentFormId) {
    var $this;

    $this = $('#' + currentFormId).find('#msg');
    $this.empty().append(msgIcon.warning + rePwMsg.fe.warning);
    $this.addClass('alert-warning').show();
    return $this.delay(3000).fadeOut('slow');
  };
  errorAuto = function(currentFormId) {
    var $this;

    $this = $('#' + currentFormId).find('#msg');
    $this.empty().append(msgIcon.error + rePwMsg.fe.error);
    $this.addClass('alert-error').show();
    return $this.delay(3000).fadeOut('slow');
  };
  successAuto = function(currentFormId) {
    var $this;

    $this = $('#' + currentFormId).find('#msg');
    $this.empty().append(msgIcon.sucess + rePwMsg.bk.sucess);
    $this.addClass('alert-sucess').show();
    return $this.delay(3000).fadeOut('slow');
  };
  msgHide = function(currentFormId) {
    var $this;

    $this = $('#' + currentFormId).find('#msg');
    return $this.hide();
  };
  forgetpasswordHide = function() {
    return $('.js--forget-password-content').fadeOut();
  };
  forgetpasswordShow = function() {
    return $('.js--forget-password-content').delay().fadeIn();
  };
  loginHide = function() {
    return $('.js--login-content').fadeOut();
  };
  loginShow = function() {
    return $('.js--login-content').delay().fadeIn();
  };
  disabledBtn = function() {
    return $('#fopw-submit').attr('disabled', 'disabled');
  };
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
    submitHandler: function(url, data, successCallback) {},
    invalidHandler: function(form, validator) {
      var currentFormId;

      currentFormId = this.currentForm.id;
      return errorAuto(currentFormId);
    },
    highlight: function(element, errorClass, validClass) {
      var currentFormId;

      currentFormId = this.currentForm.id;
      $(element).closest('.field').addClass(errorClass).removeClass(validClass);
      if (this.numberOfInvalids() > 0) {
        return warningAuto(currentFormId);
      }
    },
    unhighlight: function(element, errorClass, validClass) {
      var currentFormId;

      currentFormId = this.currentForm.id;
      $(element).closest('.field').removeClass(errorClass).addClass(validClass);
      if (this.numberOfInvalids() > 0) {
        return msgHide(currentFormId);
      }
    },
    errorPlacement: function(error, element) {
      return error.appendTo('#msg');
    }
  });
  $('#forget-password-form').validate({
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
      var currentFormId;

      currentFormId = this.currentForm.id;
      return errorAuto(currentForm.id);
    },
    highlight: function(element, errorClass, validClass) {
      var currentFormId;

      currentFormId = this.currentForm.id;
      $(element).closest('.field').addClass(errorClass).removeClass(validClass);
      if (this.numberOfInvalids() > 0) {
        return warningAuto(currentFormId);
      }
    },
    unhighlight: function(element, errorClass, validClass) {
      var currentFormId;

      currentFormId = this.currentForm.id;
      $(element).closest('.field').removeClass(errorClass).addClass(validClass);
      if (this.numberOfInvalids() > 0) {
        return msgHide(currentFormId);
      }
    },
    errorPlacement: function(error, element) {
      return error.appendTo('#msg');
    }
  });
  $('.js--forgot-password-toggler').click(function(e) {
    loginHide();
    forgetpasswordShow();
    return e.preventDefault;
  });
  return $('.js__back-login-toggler').click(function(e) {
    forgetpasswordHide();
    loginShow();
    return e.preventDefault;
  });
});
