/**
 * ibps_SCRPIT_PERSON【人员脚本】
 * 
 * <pre>
 * 作者：hugh zhuang
 * 邮箱：3378340995@qq.com
 * 日期：2016-02-22 11:49:22
 * 版权：广州流辰信息技术有限公司
 * </pre>
 */
$(function() {
	var personScript = new PersonScript();
	personScript.init();
	$("select[name='className']").change(personScript._classNameChange)
			.trigger("change");
});

(function() {
	// 定义常量
	var _consts = {
		GRID : "#personScriptGrid",// 列表对象
		PAGER : "#personScriptPager",// 列表分页
		FORM : '#personScriptForm'// 表单form
	};
	/**
	 * ibps_SCRPIT_PERSON【人员脚本】 对象
	 * 
	 * @returns {PersonScript}
	 */
	PersonScript = function() {
		// 定义属性
	};

	/**
	 * 方法
	 */
	PersonScript.prototype = {
		consts : _consts,
		/**
		 * 初始化
		 */
		init : function() {
			if (this.hasInit) // 是否已初始化
				return false;
			this.hasInit = true;
			if ($(this.consts.GRID).length > 0)// 列表
				this._initGridList();
			if ($(this.consts.FORM).length > 0)// 表单
				this._initForm();
		},
		/**
		 * 初始列表
		 */
		_initGridList : function() {
			var me = this;
			$(this.consts.GRID)
					.GridList(
							{
								url : __ctx
										+ '/platform/script/personScript/listJson.htm',
								pager : this.consts.PAGER,
								colNames : [ '主键', '脚本别名', '调用类路径', '调用类对象名',
										'调用方法名', '调用方法的描述', '是否有效', '管理' ],
								colModel : [
										{
											name : 'id',
											index : 'id_',
											hidden : true,
											key : true
										},
										{
											name : 'aliasName',
											index : 'alias_name_'
										},
										{
											name : 'className',
											index : 'class_name_'
										},
										{
											name : 'classInsName',
											index : 'class_ins_name_'
										},
										{
											name : 'methodName',
											index : 'method_name_'
										},
										{
											name : 'methodDesc',
											index : 'method_desc_'
										},
										{
											name : 'enable',
											index : 'enable_',
											formatter : function(cellvalue,
													options, row) {
												if (cellvalue == '1') {
													return '有效';
												} else
													return '无效';
											}
										},
										{
											name : '__manage',
											width : 30,
											sortable : false,
											classes : 'rowOps',
											formatter : 'manage',
											formatoptions : [
													{
														label : '编辑',
														classes : 'btn btn-primary fa fa-edit',
														action : __ctx
																+ '/platform/script/personScript/edit.htm?id={id}'
													},
													{
														label : '删除',
														classes : 'btn btn-primary fa fa-remove',
														action : __ctx
																+ '/platform/script/personScript/remove.htm?id={id}'
													},
													{
														label : '明细',
														classes : 'btn btn-primary fa fa-detail',
														action : __ctx
																+ '/platform/script/personScript/get.htm?id={id}'
													} ]
										} ]

							});
		},
		/**
		 * 初始化表单
		 */
		_initForm : function() {
			var me = this, form = $(this.consts.FORM), frm = form.form();
			// 触发表单验证
			frm.valid();
			// 处理表单保存
			$(document).on('click', 'a.fa-save', function() {
				var $el = $(this);
				$el.button('loading'); 
				frm.ajaxForm({
					success : function(responseText){
						$el.button('reset'); 
                    	me._showResponse(responseText);
                    },
                    error: function(){
                    	$el.button('reset'); 
                    }
				});
				if (frm.valid()) {
					var json = scriptEdit._getTrJson();
					json = JSON2.stringify(json);
					if (json == '[]') {
						json = '';
					}
					$("textarea[name='argument']").val(json);
					form.submit();
				}else{
					$el.button('reset'); 
				}
			});
		},

		// 类名选择事件
		_classNameChange : function() {
			var className = $(this).val();
			if (!className)
				return;

			var match = /^.*\.(\w*)$/.exec(className), name = '';
			if (match != null) {
				name = match[1];
			}
			if (!name)
				return;
			name = name.toLowerCase().split("", 1) + name.slice(1);
			$("input[name='classInsName']").val(name);
			var id = $("input[name='id']").val();
			var url = __ctx
					+ '/platform/script/personScript/getMethodsByClassName.htm?className='
					+ className + '&id=' + id;
			scriptEdit._getMethods(url);
		},
		/**
		 * 表单成功返回信息
		 * 
		 * @param responseText
		 */
		_showResponse : function(responseText) {
			var msg = new com.lc.form.ResultMessage(responseText);
			if (msg.isSuccess()) {
				DialogUtil.confirm(msg.getMessage() + ',是否继续操作', function(rtn) {
					if (rtn)
						window.location.reload(true);
					else
						window.location.href = __ctx
								+ '/platform/script/personScript/list.htm';
				});
			} else {
				DialogUtil.error(msg.getMessage());
			}
		}
	};
})();
