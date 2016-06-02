package com.baijianjava.email;

/**
 * Created by baijian on 2016/6/2.
 */
public class MainClass {
    public  static void main(String[] args){
        Mailer mailer = new ApplicationMailer();

        //这是要异步发送邮件
        ApplicationEmail email = new ApplicationEmail();
        email.setAddressee("285990341@qq.com");
        email.setSubject("测试邮件有一份");
        email.setContent("这个是内容html内容");
        mailer.sendMailByAsynchronousMode(email);
    }
}
