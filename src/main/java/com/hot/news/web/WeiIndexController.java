package com.hot.news.web;

import com.alibaba.fastjson.JSON;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.hot.news.common.ResponseCode;
import com.hot.news.common.ResultObj;
import com.hot.news.common.entity.TestBean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by 马东 on 2018/7/10.
 *
 * @Author:madong
 * @Description:
 * @Date:Create in 21:56 2018/7/10
 * 关关雎鸠，在河之洲，
 * 窈窕淑女，君子好逑。
 */
@RestController
@RequestMapping("/wei")
public class WeiIndexController {
    @RequestMapping("/index")
    public ResultObj index(String schoolName){
        ResultObj obj = new ResultObj();
        List<TestBean> testBeens = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            TestBean testBean = new TestBean();
            testBean.setId(i);
            testBean.setName("TestName" + i + "----");
            testBeens.add(testBean);
        }
        String json = JSON.toJSONString(testBeens);
        obj.setCode(ResponseCode.SUCCESS);
        obj.setDatas(testBeens);
        return obj;
    }
}
