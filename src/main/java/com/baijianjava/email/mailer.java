package com.baijianjava.email;

/**
 * Created by baijian on 2016/6/2.
 */
public interface Mailer {
    public void sendMailByAsynchronousMode(final ApplicationEmail email);
}