<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/commons/include/html_doctype.html"%>
<html>
<head>
<%@include file="/commons/include/list.jsp" %>
<script type="text/javascript">
var id = '${id}';
var prem = '${prem}';
</script>
<script type="text/javascript" src="${ctx}/js/lc/platform/org/partyOrgGradePositionList.js"></script>
</head>
<body>
<div class="wrapper wrapper-content  animated fadeInRight col-sm-12">
		<div  class="toolbar-panel ">
			<div class="toolbar-box">
				<div class="toolbar-head clearfix">
					<!-- 顶部按钮 -->
					<div class="buttons"> 		
						<a class="btn btn-primary fa fa-search" href="javascript:void(0);" ><span>搜索</span></a>
						<c:if test="${fn:contains(prem, 'add')}">
						<a class="btn btn-primary fa fa-add" href="${ctx}/platform/org/partyPosition/edit.htm?orgId=${id}&mainOrgrade=grade&prem=${prem}" ><span>添加</span></a>
						</c:if>
			        	<c:if test="${fn:contains(prem, 'edit')}">
				        <a class="btn btn-primary fa fa-edit" href="javascript:void(0);"  action="${ctx}/platform/org/partyPosition/edit.htm?orgId=${id}&mainOrgrade=grade&prem=${prem}" ><span>编辑</span></a>	 
						</c:if>
			        	<c:if test="${fn:contains(prem, 'delete')}">
				        <a class="btn btn-primary fa fa-remove" href="javascript:void(0);"  action="${ctx}/platform/org/partyPosition/remove.htm"><span>删除</span></a>
			        	</c:if>
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
									<label   class="search-label">岗位名称</label>:
									<input type="text"  name="Q^NAME_^SL"  class="form-control"  />
								</div> 
								<div class="form-group">
									<label   class="search-label">等级数值</label>:
									<input type="text"  name="Q^LEVEL_^SL"  class="form-control"  />
								</div> 
							</div>
					</form>
				</div><!--/ 查询条件-->
			</div>
		</div>
		<div class="jqGrid_wrapper">
			<table id="orgPositionAssignGrid" ></table>
			<div id="orgPositionAssignPager"></div>
		</div>
	</div>
</body>
</html>