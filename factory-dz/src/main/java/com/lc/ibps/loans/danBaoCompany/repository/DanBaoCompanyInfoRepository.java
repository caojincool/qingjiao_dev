package com.lc.ibps.loans.danBaoCompany.repository;

import com.lc.ibps.base.framework.repository.IRepository;
import com.lc.ibps.loans.danBaoCompany.domain.DanBaoCompanyInfo;
import com.lc.ibps.loans.danBaoCompany.persistence.entity.DanBaoCompanyInfoPo;

/**
 * t_dbgs 仓库接口
 *
 *<pre> 
 * 开发公司：广州流辰信息技术有限公司
 * 开发人员：litao
 * 邮箱地址：1546077710@qq.com
 * 创建时间：2017-07-24 18:38:26
 *</pre>
 */
public interface DanBaoCompanyInfoRepository extends IRepository<String, DanBaoCompanyInfoPo,DanBaoCompanyInfo>{

	DanBaoCompanyInfoPo getByJdidAndGsmc(String jdid, String gsmc);

}
