package com.hot.news.common;

import com.hot.news.common.entity.TestBean;

import java.util.List;

/**
 * Created by 马东 on 2018/7/10.
 *
 * @Author:madong
 * @Description:
 * @Date:Create in 22:34 2018/7/10
 * 关关雎鸠，在河之洲，
 * 窈窕淑女，君子好逑。
 */
public class ResultObj {
    private int code;
    private List<TestBean> datas;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public List<TestBean> getDatas() {
        return datas;
    }

    public void setDatas(List<TestBean> datas) {
        this.datas = datas;
    }
}
