package com.hot.news.service.impl;

import com.hot.news.service.WeiService;
import com.qiniu.util.Auth;
import org.springframework.stereotype.Service;

/**
 * Created by 马东 on 2018/12/25.
 *
 * @Author:madong
 * @Description:
 * @Date:Create in 23:11 2018/12/25
 * 关关雎鸠，在河之洲，
 * 窈窕淑女，君子好逑。
 */
@Service
public class WeiServiceImpl implements WeiService {
    @Override
    public String creatToken() {
        String accessKey = "access key";
        String secretKey = "secret key";
        String bucket = "bucket name";

        Auth auth = Auth.create(accessKey, secretKey);
        String upToken = auth.uploadToken(bucket);
        System.out.println(upToken);

        return null;
    }
}
