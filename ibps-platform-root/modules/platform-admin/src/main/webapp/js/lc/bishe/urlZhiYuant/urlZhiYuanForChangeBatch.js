
/**
 * t_zyurl
 * 
 *
 *<pre> 
 * 开发公司：广州流辰信息技术有限公司
 * 开发人员：litao
 * 邮箱地址：1546077710@qq.com
 * 创建时间：2017-07-04 23:52:07
 *</pre>
 */
$(function() {
	urlZhiYuan  = new UrlZhiYuan();
	urlZhiYuan.init();
	
	formUrl = urlZhiYuan.formUrl;
});

(function() {
	//定义常量
	var 	_consts = {
			GRID : "#urlZhiYuanGrid",// 列表对象
			PAGER : "#urlZhiYuanPager",// 列表分页
			FORM : '#urlZhiYuanForm'// 表单form
	};
	/**
	 * t_zyurl 对象
	 * @returns {UrlZhiYuan}
	 */
	UrlZhiYuan = function() {
		//定义属性
	};

	/**
	 * 方法
	 */
	UrlZhiYuan.prototype = {
		consts:	_consts,
		/**
		 * 初始化
		 */
		init : function() {
			if (this.hasInit) // 是否已初始化
				return false;
			this.hasInit = true;
			if ($(this.consts.GRID).length > 0)//列表
				this._initGridList();
			if ($(this.consts.FORM).length > 0){//表单
				this._initForm();
				this._initData();
			}
		},
		/**
		 * 初始列表
		 */
		_initGridList : function() {
			var me = this;
			$(this.consts.GRID).GridList(
					{
						url :  __ctx+'/bishe/urlZhiYuant/urlZhiYuan/listJsonForBatch.htm',
						pager :this.consts.PAGER,
						colNames: ['主键','班级','学号','姓名','指导教师','答辩批次','管理'],
				        colModel: [{
				                 	   name:'id',
				                	   index: 'id_'

				                	 	,hidden:true,key:true
				                	 	}, {
								               name:'classr',
								               index: 'classr'

								                	 					                }, {
						               name:'xh',
						               index: 'xh'

						                	 					                }, {
						               name:'name',
						               index: 'name'

						                	 					                },{
                            name:'finalteacher',
                            index: 'finalteacher'

                        },{
                            name:'dbBatch',
                            index: 'db_batch_'

                        },   {
                            name : '__manage',
                            width : 30,
                            sortable:false,
                            classes:'rowOps',
                            formatter : 'manage',
                            formatoptions :[{
                                label:'修改批次',
                                classes:'btn btn-primary fa fa-edit',
                                action:__ctx+'/bishe/urlZhiYuant/urlZhiYuan/editBatch.htm?id={id}'
                            },{
                                label:'指定小组',
                                classes:'btn btn-primary fa fa-add',
                                action:'javascript:urlZhiYuan.appointGroup("{id}")',
                            }]
                        } ],
								loadComplete: function(){
									try{
										$('.rowOps').each(function() {
											$(this).rowOps();
										});
									}catch(e){}
								}
	
					});
		},

        appointGroup : function(userId){
            debugger
            DialogUtil.dialog({
                title : '指定小组',
                content : __ctx + '/bishe/groupuser/groupUser/listForAppoint.htm?userId='
                + userId,
                index : 'appointGroup',
                area : [ '80%', '80%' ],
                btn : [
                    {
                        label : '关闭',
                        iconCls : 'btn btn-success fa fa-cancel',
                        action : function(a, b) {
                            debugger
                            DialogUtil.close(b);
                        }
                    } ],
                end:function(){
                    debugger
                    window.location.reload(true);
                }
            });
        },
		/**
		 * 初始化表单
		 */
		_initForm : function() {
			var me = this, form = $(this.consts.FORM), frm = form.form();
			me.formUrl = new com.lc.form.FormData(form);
			// 触发表单验证
			frm.valid();
			// 处理表单保存
			$(document).on('click', 'a.fa-save', function() {
				me.formUrl.submit(me._showResponse);
			});
		},
		/**
		 * 初始化数据
		 */
		_initData : function(){
			if(!$.isEmpty(frameElement) 
				&& !$.isEmpty(frameElement.dialog) 
				&& !$.isEmpty(frameElement.dialog.params)
				&& !$.isEmpty(frameElement.dialog.params.data)){
				var data = frameElement.dialog.params.data;
				this.formUrl.setData("[name^='m:']", data);
			}
			this.formUrl.validate();
		},
		/**
		 * 表单成功返回信息
		 * 
		 * @param responseText
		 */
		_showResponse : function(responseText) {
			var msg = new com.lc.form.ResultMessage(responseText);
			if (msg.isSuccess()) {
				DialogUtil.confirm(msg.getMessage() + ',是否继续操作',
						function(rtn) {
						if(rtn)
							window.location.reload(true);
						else
							window.location.href = __ctx+'/bishe/urlZhiYuant/urlZhiYuan/listForChangeBatch.htm';
						});
			} else {
				DialogUtil.error(msg.getMessage());
			}
		}
	};
})();


