package com.baijianjava.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by baijian on 2016/06/02
 */
@Controller
public class IndexController {

    /**
     * 用户界面
     * @return
     */
    @RequestMapping("/index.do")
    public String newIndex(){

      return "index";
    }


}

