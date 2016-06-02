package com.baijianjava.web.controller;

import com.baijianjava.email.ApplicationEmail;
import com.baijianjava.email.Mailer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by baijian on 2016/6/2.
 */
@Controller
public class SedEmail {

    @Autowired
    private Mailer mailer;


    @RequestMapping("/index")
    public String  index(){

        //这是要异步发送邮件
        ApplicationEmail email = new ApplicationEmail();
        email.setAddressee("285990341@qq.com");
        email.setSubject("测试邮件有一份");
        email.setContent("这个是内容html内容");
        mailer.sendMailByAsynchronousMode(email);
        return "index";
    }
}
