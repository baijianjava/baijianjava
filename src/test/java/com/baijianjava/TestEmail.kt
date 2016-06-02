//package com.baijianjava
//
//import org.junit.Test
//import org.springframework.beans.factory.annotation.Autowired
//
///**
// * Created by baijian on 2016/6/2.
// */
//@ContextConfiguration(locations = {"classpath*:/spring_core/*"})
//public class  TestEmail {
//
//    @Autowired
//    private Mailer mailer;
//
//    @Test
//    public void test(){
//        //这是要异步发送邮件
//        val email = com.baijianjava.email.ApplicationEmail()
//        email.addressee = "285990341@qq.com"
//        email.subject = "测试邮件有一份"
//        email.content = "这个是内容html内容"
//        mailer.sendMailByAsynchronousMode(email)
//    }
//
//
//}