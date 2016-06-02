package com.baijianjava.entity;

public class Module {

	private String  id;
	private String url;
	private String img;
	private String words;
	private String pid;
	private String urlid;


	
	
	public Module() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Module(String id, String url, String img, String words) {
		super();
		this.id = id;
		this.url = url;
		this.img = img;
		this.words = words;
	}
	public Module(String id, String url, String img, String words,String pid) {
		super();
		this.id = id;
		this.url = url;
		this.img = img;
		this.words = words;
		this.pid=pid;
	}

	public Module(String id, String url, String img, String words,String pid,String  urlid) {
		super();
		this.id = id;
		this.url = url;
		this.img = img;
		this.words = words;
		this.pid=pid;
		this.urlid=urlid;

	}

	public String getUrlid() {
		return urlid;
	}

	public void setUrlid(String urlid) {
		this.urlid = urlid;
	}


	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public String getWords() {
		return words;
	}
	public void setWords(String words) {
		this.words = words;
	}
	
	
}
