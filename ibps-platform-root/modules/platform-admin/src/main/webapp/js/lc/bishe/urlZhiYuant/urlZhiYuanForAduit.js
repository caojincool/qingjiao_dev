
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
			    this._bindBtns();
			if ($(this.consts.FORM).length > 0){//表单
				this._initForm();
				this._initData();
			}
		},
		_bindBtns : function(){
			var me = this;
			$(document).on('click', 'a.fa-caret-square-o-right', function () {
            	var ids = $(me.consts.GRID).jqGrid('getGridParam','selarrrow');
            	if (ids == null || ids.length == 0) {
            		DialogUtil.toastr('请选择数据！');
            		return;
            	}

            	var lid = DialogUtil.load();
            	var url = __ctx + "/bishe/urlZhiYuant/urlZhiYuan/startFlow.htm"
                $.post(url, {'id': ids.join(','), 'flowKey':'Process_2vpnon6back'}, function (responseText) {
                	DialogUtil.close(lid);
                	var msg = new com.lc.form.ResultMessage(responseText);
        			if (msg.isSuccess()) {
        				DialogUtil.msg(msg.getMessage());
                        $(urlZhiYuan.consts.GRID).trigger('reloadGrid');
        			} else {
        				DialogUtil.error(msg.getMessage());
        			}
                });
            });
		},
		
		allotJudgeTch : function(){
            DialogUtil.confirm('是否一键分配盲审教师',
                function(rtn) {
                    if(rtn){
                        debugger
                        var lid = DialogUtil.load();
                        var url = __ctx + "/bishe/groupuser/groupUser/allotJudgeTch.htm";
                        $.ajax({
                            type: "POST",
                            url: url,
                            //async: false,
                            dataType:"json",
                            success:function (data) {
                                debugger
                                if (data.status) {
                                    DialogUtil.close(lid);
                                    //allotStu._initGridList(data.msg);
                                    $(urlZhiYuan.consts.GRID).trigger('reloadGrid');
                                    DialogUtil.msg(data.msg);
                                } else {
                                    DialogUtil.error(data.msg);
                                }
                            }
                        })
					}
                    else{
                        DialogUtil.close();
					};
                });


            //DialogUtil.alert('正在分配盲审教师，<br>请耐心等候...');


		},
		/**
		 * 初始列表
		 */
		_initGridList : function() {
			var me = this;
			$(this.consts.GRID).GridList(
					{
						url :  __ctx+'/bishe/urlZhiYuant/urlZhiYuan/listJson.htm?flag=1',
						pager :this.consts.PAGER,
						colNames: ['主键','班级','学号','姓名','指导教师','评审教师','匹配度','管理'],
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

						                	 					                },{
						               name:'name',
						               index: 'name'

						                	 					                },{
												name:'finalteacher',
                             					index: 'finalteacher'

											},{
												name:'judgeTchName',
                            					index: 'judge_tch_Name_'

											},{
												name:'match',
												sortable:false,

											},{
                            name : '__manage',
                            width : 30,
                            sortable:false,
                            classes:'rowOps',
                            formatter : 'manage',
                            formatoptions :[{
                                label:'指定盲审教师',
                                classes:'btn btn-primary fa fa-add',
                                action : 'javascript:urlZhiYuan.setJudgeTch("{id}")',
                            },{
                                label:'指导教师评语',
                                classes:'btn btn-primary fa fa-add',
                                action :__ctx+'/platform/report/raqsoft/preview2.htm?reportId=444582348479004672&cname1=arg1&cval1={id}'

                            },{
                                label:'盲审教师评语',
                                classes:'btn btn-primary fa fa-add',
                                action :__ctx+'/platform/report/raqsoft/preview2.htm?reportId=444530856816541696&cname1=arg1&cval1={id}'

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

        setJudgeTch :function(id){
            debugger;
            var me = this;
            var url =__ctx+"/bishe/urlZhiYuant/urlZhiYuan/setJudgeTch.htm";
            new TchDialog({
                url:__ctx + '/bishe/audit/tchLabel/tchdialog.htm',
                params : {url: __ctx + '/bishe/audit/tchLabel/listJsonForTchBox.htm', isHidden : true},
                callback : function(userIds, fullNames) {
                    var param = {
                        id:id+'',
                        tchIds:userIds.toString()+'',
                    };
                    debugger;
                    me.post(url,param);
                }
            }).show();
		},

        post : function(url,param){
            $.ajax({
                type: "POST",
                url: url,
				data:param,
                async: false,
                dataType:"json",
                success:function (data) {
                    if (data.status) {
                        //allotStu._initGridList(data.msg);
                        DialogUtil.msg(data.msg);
                        $(urlZhiYuan.consts.GRID).trigger('reloadGrid');
                    } else {
                        DialogUtil.error(data.msg);
                    }
                }
            })
        },
		/**
		 *
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
							window.location.href = __ctx+'/bishe/urlZhiYuant/urlZhiYuan/listForStudents.htm';
						});
			} else {
				DialogUtil.error(msg.getMessage());
			}
		}
	};
})();


