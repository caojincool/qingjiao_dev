
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/commons/include/html_doctype.html" %>
<html>
	<head>
		<%@include file="/commons/page/codegen.jsp" %>
		<script type="text/javascript" src="${ctx}/js/lc/platform/dialog/bpmn/BpmDefineDialog.js"></script>
		<script type="text/javascript" src="${ctx}/js/lc/platform/utils/SelectorDialog.js"></script>
		<script type="text/javascript" src="${ctx}/js/lc/platform/bpmn/bpmOperNotify.js"></script>
		<title>流程通知管理列表</title>
	</head>
	<body>
		<div class="wrapper wrapper-content  animated fadeInRight col-sm-12">
			<div  class="toolbar-panel ">
				<div class="toolbar-box">
					<div class="toolbar-head clearfix">
						<!-- 顶部按钮 -->
						<div class="buttons"> 		
							<a class="btn btn-primary fa fa-search" href="javascript:void(0);" ><span>搜索</span></a>
							<a class="btn btn-primary fa fa-check-circle"  href="javascript:void(0);" id="mark"  ><span>标记为已读</span></a>
						</div>
						<!-- 收缩 -->
						<div class="tools">
							<a href="javascript:void(0);" class="collapse">
								<i class="bigger-180 fa  fa-angle-double-up"></i>
							</a>
						</div>
					</div>
					<!-- #查询条件-->
					<div class="toolbar-body" >
						<form role="form" class="search-form">
							<div  class="form-inline p-xxs">
								<div class="form-group">
									<label   class="search-label">流程定义</label>:
									<div class="input-group ">
										<input type="hidden" name="Q^PROC_DEF_ID_^S"  id="procDefId" /> 
		                               	<input type="text" class="form-control"  id="procDefName" readonly="readonly"/>
		                           	  	<span class="input-group-btn">
		                           	  		<button type="button" class="btn  btn-info btn-mm"  
		                           	  			 data-toggle="selector"  data-type="flow" data-single="true"  data-id="#procDefId" data-name="#procDefName" >
		                           	  			<i class="fa fa-fire"></i></button> &nbsp;&nbsp;
		                           	  		<button type="button" class="btn btn-info btn-mm" 
				                               	 data-toggle="clear" data-id="#procDefId" data-name="#procDefName">
				                               	 <i class="fa fa-times"></i></button>
		                           	  	</span>
		                            </div>
								</div> 
								<div class="form-group">
									<label   class="search-label">通知人</label>:
									<div class="input-group ">
										<input type="hidden" name="Q^NOTIFIER_^S"  id="notifier" /> 
		                               	<input type="text" class="form-control"  id="notifierName" readonly="readonly"/>
		                           	  	<span class="input-group-btn">
		                           	  		<button type="button" class="btn  btn-info btn-mm"  
		                           	  			 data-toggle="selector"  data-type="user" data-single="true"  data-id="#notifier" data-name="#notifierName" >
		                           	  			<i class="fa fa-user"></i></button> &nbsp;&nbsp;
		                           	  		<button type="button" class="btn btn-info btn-mm" 
				                               	 data-toggle="clear" data-id="#notifier" data-name="#notifierName">
				                               	 <i class="fa fa-times"></i></button>
		                           	  	</span>
		                            </div>
								</div> 
								<div class="form-group">
									<label class="search-label">通知时间 </label>:
									<input type="text" name="Q^CREATE_TIME_^DL"  class="form-control date"  />
								</div>
								
							</div>
						</form>
					</div><!--/ 查询条件-->
				</div>
			</div><!--/ 操作、查询-->
			<div class="jqGrid_wrapper">
				<table id="bpmOperNotifyGrid" ></table>
				<div id="bpmOperNotifyPager"></div>
			</div>
		</div>
	
	</body>
	
</html>
