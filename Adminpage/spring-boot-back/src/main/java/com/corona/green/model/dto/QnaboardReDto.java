package com.corona.green.model.dto;

import java.util.Date;

import lombok.Data;

@Data
public class QnaboardReDto {
	
	private int boardno;
	private String content;
	private Date regdate;
	
	public QnaboardReDto() {
		
	}

	public QnaboardReDto(int boardno, String content, Date regdate) {
		super();
		this.boardno = boardno;
		this.content = content;
		this.regdate = regdate;
	}

	public int getBoardno() {
		return boardno;
	}

	public void setBoardno(int boardno) {
		this.boardno = boardno;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getRegdate() {
		return regdate;
	}

	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	
		
}
