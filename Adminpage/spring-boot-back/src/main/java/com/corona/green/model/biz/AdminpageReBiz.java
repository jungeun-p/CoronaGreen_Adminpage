package com.corona.green.model.biz;

import java.util.List;

import com.corona.green.model.dto.QnaboardReDto;

public interface AdminpageReBiz {
	
	List<QnaboardReDto> qnaList();
	QnaboardReDto fetchQnaByNo(int boardno);
	void updateQna(QnaboardReDto qna);

}
