
package com.lc.ibps.loans.files.persistence.dao.impl;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.lc.ibps.base.db.ddd.dao.MyBatisQueryDaoImpl;
import com.lc.ibps.loans.files.persistence.dao.FileQueryDao;
import com.lc.ibps.loans.files.persistence.entity.FilePo;

/**
 *t_file 查询Dao的实现类
 *
 *<pre> 
 * 开发公司：广州流辰信息技术有限公司
 * 开发人员：litao
 * 邮箱地址：1546077710@qq.com
 * 创建时间：2017-08-26 11:50:51
 *</pre>
 */
 @SuppressWarnings("serial")
@Repository
public class FileQueryDaoImpl extends MyBatisQueryDaoImpl<String, FilePo> implements FileQueryDao{

    @Override
    public String getNamespace() {
        return FilePo.class.getName();
    }

	@Override
	public List<FilePo> getByJdid(String jdid) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("jdid", jdid);
		return this.findByKey("getByJdid", params);
	}
}
