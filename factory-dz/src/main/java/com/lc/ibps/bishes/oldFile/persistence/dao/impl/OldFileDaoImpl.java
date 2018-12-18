package com.lc.ibps.bishes.oldFile.persistence.dao.impl;

import org.springframework.stereotype.Repository;

import com.lc.ibps.base.db.ddd.dao.MyBatisDaoImpl;
import com.lc.ibps.bishes.oldFile.persistence.dao.OldFileDao;
import com.lc.ibps.bishes.oldFile.persistence.entity.OldFilePo;

/**
 * t_oldfile Dao接口的实现类
 *
 *<pre> 
 * 开发公司：广州流辰信息技术有限公司
 * 开发人员：eddy
 * 邮箱地址：1546077710@qq.com
 * 创建时间：2017-11-29 16:49:23
 *</pre>
 */
@SuppressWarnings("serial")
@Repository
public class OldFileDaoImpl extends MyBatisDaoImpl<String, OldFilePo> implements OldFileDao{

    @Override
    public String getNamespace() {
        return OldFilePo.class.getName();
    }
}
