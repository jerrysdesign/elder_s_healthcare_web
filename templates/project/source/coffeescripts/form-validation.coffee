$ ->

	$('.alert-autocloseable-success').hide()
	$('.alert-autocloseable-warning').hide()
	$('.alert-autocloseable-danger').hide()
	$('.alert-autocloseable-info').hide()

	warningAuto = ->
		# $('#autoclosable-btn-warning').prop 'disabled', true
		$('.alert-autocloseable-warning').show()
		$('.alert-autocloseable-warning').delay(3000).fadeOut 'slow'
		return
	$('.errorsContainer').hide()

	$('#login-form').validate

		# @validation states + elements 
		# ------------------------------------------- 
		errorClass: 'state-error'
		validClass: 'state-success'
		errorElement: 'span'
		
		# @validation rules 
		# ------------------------------------------ 
		rules:

			useremail:
				required: true
				email: true
			password:
				required: true
				minlength: 6
				maxlength: 16

		# @validation error messages 
		# ---------------------------------------------- 
		messages:
			
			useremail:
				required: '輸入 email帳號'
				email: '輸入 email 帳號格式錯誤'

			password:
				required: '密碼必填'
				minlength: '密碼不得少於6個字'
				maxlength: '密碼不得超過16個字'
				regex: '/^[0-9a-zA-Z]+$/'

		invalidHandler: (form, validator) ->
			$('.errorsContainer').fadeOut().fadeIn()
			
			return
		
		highlight: (element, errorClass, validClass) ->
			$(element).closest('.field').addClass(errorClass).removeClass validClass
			if @numberOfInvalids() > 0
				$('.errorsContainer').show()
				warningAuto()
			return
		
		unhighlight: (element, errorClass, validClass) ->
			# $(element).closest('.field').removeClass(errorClass).addClass validClass
			# if @numberOfInvalids() == 0
			# 	$('.errorsContainer').hide()
			# warningAuto()
			# return
		
		errorPlacement: (error, element) ->
			error.appendTo '#smartErrors'
			return
	
	return

	hasSuccess = ->
		$('.successContainer').fadeIn(500)
		$('.forgot-password').fadeOut(400)
		$('#fopw-submit').attr('disabled', 'disabled')

	$('.successContainer').hide()

	$('#forget-password-form').validate

		success: 'valid'
		submitHandler: ->
			hasSuccess()
			return

		# @validation states + elements 
		# ------------------------------------------- 
		errorClass: 'state-error'
		validClass: 'state-success'
		errorElement: 'span'
		
		# @validation rules 
		# ------------------------------------------ 
		rules:

			useremail:
				required: true
				email: true

		# @validation error messages 
		# ---------------------------------------------- 
		messages:
			
			useremail:
				required: '輸入 email帳號'
				email: '輸入 email 帳號格式錯誤'

		invalidHandler: (form, validator) ->
			$('.errorsContainer').show()
			return
		
		highlight: (element, errorClass, validClass) ->
			$(element).closest('.field').addClass(errorClass).removeClass validClass
			if @numberOfInvalids() > 0
				$('.errorsContainer').show()
			return
		
		unhighlight: (element, errorClass, validClass) ->
			$(element).closest('.field').removeClass(errorClass).addClass validClass
			if @numberOfInvalids() == 0
				$('.errorsContainer').hide()
			return
		
		errorPlacement: (error, element) ->
			error.appendTo '#smartErrors'
			return
	
	return

