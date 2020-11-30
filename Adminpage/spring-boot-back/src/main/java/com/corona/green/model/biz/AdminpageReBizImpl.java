package com.corona.green.model.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corona.green.model.dto.QnaboardReDto;
import com.corona.green.model.mapper.AdminpageQnaMapper;

@Service
public class AdminpageReBizImpl implements AdminpageReBiz {

	@Autowired
	private AdminpageQnaMapper QnaMapper;
	
	@Override
	public List<QnaboardReDto> qnaList() {
		return QnaMapper.qnaList();
	}
	
	@Override
	public QnaboardReDto fetchQnaByNo(int boardno) {
		return QnaMapper.fetchQnaByNo(boardno);
	}

	@Override
	public void updateQna(QnaboardReDto qna) {
		QnaMapper.updateQna(qna);
		
	}

	
	
}
