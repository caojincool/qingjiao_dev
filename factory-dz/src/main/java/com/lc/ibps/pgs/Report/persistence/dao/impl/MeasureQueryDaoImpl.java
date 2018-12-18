
package com.lc.ibps.pgs.Report.persistence.dao.impl;


import org.springframework.stereotype.Repository;

import com.lc.ibps.base.db.ddd.dao.MyBatisQueryDaoImpl;
import com.lc.ibps.pgs.Report.persistence.dao.MeasureQueryDao;
import com.lc.ibps.pgs.Report.persistence.entity.MeasurePo;

/**
 *t_p_khhlxjxpjbyyqpj 查询Dao的实现类
 *
 *<pre> 
 * 开发公司：广州流辰信息技术有限公司
 * 开发人员：eddy
 * 邮箱地址：1546077710@qq.com
 * 创建时间：2018-03-15 18:07:41
 *</pre>
 */
 @SuppressWarnings("serial")
@Repository
public class MeasureQueryDaoImpl extends MyBatisQueryDaoImpl<String, MeasurePo> implements MeasureQueryDao{

    @Override
    public String getNamespace() {
        return MeasurePo.class.getName();
    }
}
