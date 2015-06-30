$ ->
	$('#msg').hide()
	
	# 登入
		# Back 驗證資料
			# 失敗
		# Front 驗證格式
			# 成功	
			# 失敗

	# 重送密碼
		# Back 驗證資料
			# 成功
			# 失敗
		# Front 驗證格式
			# 成功
			# 失敗

	loginMsg =
		bk:
			error: 'Email帳號或密碼格式錯誤!'
		fe:
			warning: 'Email帳號或密碼格式錯誤!'
	rePwMsg =
		bk:
			success: '請到您的信箱收信，以重新設定密碼。'
			error: 'Invail email address. 無效的電子郵件地址'
		fe:
			warning: 'Email帳號或密碼格式錯誤!'
	msgIcon =
		error: '<i class="fa fa-times"></i>'
		warning: '<i class="fa fa-exclamation-triangle"></i>'
		sucess: '<i class="fa fa-check"></i>'


	apnMsg = ->
		$('#msg').append()
	
	# 顯示隱藏 Alert

	warningAuto = (currentFormId)->
		$this = $('#' + currentFormId).find('#msg')
		$this.empty().append(msgIcon.warning + rePwMsg.fe.warning)
		$this.addClass('alert-warning').show()
		$this.delay(3000).fadeOut 'slow'
	
	errorAuto = (currentFormId)->
		$this = $('#' + currentFormId).find('#msg')
		$this.empty().append(msgIcon.error + rePwMsg.fe.error)
		$this.addClass('alert-error').show()
		$this.delay(3000).fadeOut 'slow'
	
	successAuto = (currentFormId)->
		$this = $('#' + currentFormId).find('#msg')
		$this.empty().append(msgIcon.sucess + rePwMsg.bk.sucess)
		$this.addClass('alert-sucess').show()
		$this.delay(3000).fadeOut 'slow'
	
	msgHide = (currentFormId)->
		$this = $('#' + currentFormId).find('#msg')
		$this.hide()
	
	# 隱藏送出選單
	disabledBtn = ->
		# $('.submitBtn').prop 'disabled', true
		$('#fopw-submit').attr('disabled', 'disabled')



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

		# 按下submit後，執行驗證，所以驗證都成功，在呼叫form.submit之前
		submitHandler: (url,data,successCallback) ->

		# 按下submit後，執行驗證，發生錯誤時。
		invalidHandler: (form, validator) ->
			currentFormId = this.currentForm.id
			errorAuto(currentFormId)
		
		# 每一個驗證對向驗證失敗時
		# fe 驗證格式
		highlight: (element, errorClass, validClass) ->
			currentFormId = this.currentForm.id
			$(element).closest('.field').addClass(errorClass).removeClass validClass
			if this.numberOfInvalids() > 0
				warningAuto(currentFormId)
		
		# 每一個驗證對向驗證成功時
		# fe 驗證格式
		unhighlight: (element, errorClass, validClass) ->
			currentFormId = this.currentForm.id
			$(element).closest('.field').removeClass(errorClass).addClass validClass
			# if @numberOfInvalids() == 0
			if @numberOfInvalids() > 0
				msgHide(currentFormId)
		
		errorPlacement: (error, element) ->
			error.appendTo '#msg'



	$('#forget-password-form').validate
		# success: 'valid'
		# submitHandler: ->
		# 	hasSuccess()

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
			currentFormId = this.currentForm.id
			errorAuto(currentForm.id)
		
		highlight: (element, errorClass, validClass) ->
			currentFormId = this.currentForm.id
			$(element).closest('.field').addClass(errorClass).removeClass validClass
			if @numberOfInvalids() > 0
				warningAuto(currentFormId)
		
		unhighlight: (element, errorClass, validClass) ->
			currentFormId = this.currentForm.id
			$(element).closest('.field').removeClass(errorClass).addClass validClass
			if @numberOfInvalids() > 0
				msgHide(currentFormId)
		
		errorPlacement: (error, element) ->
			error.appendTo '#msg'
