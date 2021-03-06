
package com.lc.ibps.loans.danBaoCompany.persistence.dao.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.lc.ibps.base.db.ddd.dao.MyBatisQueryDaoImpl;
import com.lc.ibps.loans.danBaoCompany.persistence.dao.DanBaoCompanyInfoQueryDao;
import com.lc.ibps.loans.danBaoCompany.persistence.entity.DanBaoCompanyInfoPo;

/**
 *t_dbgs 查询Dao的实现类
 *
 *<pre> 
 * 开发公司：广州流辰信息技术有限公司
 * 开发人员：litao
 * 邮箱地址：1546077710@qq.com
 * 创建时间：2017-07-24 18:38:26
 *</pre>
 */
 @SuppressWarnings("serial")
@Repository
public class DanBaoCompanyInfoQueryDaoImpl extends MyBatisQueryDaoImpl<String, DanBaoCompanyInfoPo> implements DanBaoCompanyInfoQueryDao{

    @Override
    public String getNamespace() {
        return DanBaoCompanyInfoPo.class.getName();
    }

	@Override
	public List<DanBaoCompanyInfoPo> getByJdidAndGsmc(String jdid, String gsmc) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("jdid", jdid);
		params.put("gsmc", gsmc);
		return this.findByKey("getByJdidAndGsmc", params);
	}

}
