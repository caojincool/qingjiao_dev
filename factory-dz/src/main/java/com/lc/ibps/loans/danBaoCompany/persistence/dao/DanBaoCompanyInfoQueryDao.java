package com.lc.ibps.loans.danBaoCompany.persistence.dao;

import java.util.List;

import com.lc.ibps.base.framework.persistence.dao.IQueryDao;
import com.lc.ibps.loans.danBaoCompany.persistence.entity.DanBaoCompanyInfoPo;

/**
 * t_dbgs 查询Dao接口
 *
 *<pre> 
 * 开发公司：广州流辰信息技术有限公司
 * 开发人员：litao
 * 邮箱地址：1546077710@qq.com
 * 创建时间：2017-07-24 18:38:26
 *</pre>
 */
public interface DanBaoCompanyInfoQueryDao extends IQueryDao<String, DanBaoCompanyInfoPo> {


	List<DanBaoCompanyInfoPo> getByJdidAndGsmc(String jdid, String gsmc);

}
