package com.hot.news.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 马东 on 2018/7/2.
 *
 * @Author:madong
 * @Description:
 * @Date:Create in 22:54 2018/7/2
 * 关关雎鸠，在河之洲，
 * 窈窕淑女，君子好逑。
 */
@Controller
public class IndexController {
    @RequestMapping("/index")
    public String index() {
        return "/index";
    }
}
