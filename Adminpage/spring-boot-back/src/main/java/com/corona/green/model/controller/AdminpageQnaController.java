package com.corona.green.model.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.corona.green.model.biz.AdminpageReBiz;
import com.corona.green.model.dto.QnaboardReDto;

@CrossOrigin(origins="*", maxAge = 3600)
@RestController
public class AdminpageQnaController {
	
	@Autowired
	AdminpageReBiz qnabiz;
	
	// qna list
	@RequestMapping(value="/qnas", method=RequestMethod.GET)
	public List<QnaboardReDto> qnaList(){
		System.out.println(qnabiz.qnaList());
		System.out.println("print qnalist!!!");
		return qnabiz.qnaList();
	}
	
	@RequestMapping(value="/qnas/{boardno}", method=RequestMethod.GET)
	public QnaboardReDto fetchQnaByNO(@PathVariable int boardno){
		System.out.println(qnabiz.fetchQnaByNo(boardno));
		QnaboardReDto fetchQna = qnabiz.fetchQnaByNo(boardno);
		return fetchQna;
	}
	
	@RequestMapping(value="/qnas/{boardno}", method=RequestMethod.PUT)
	void updateQna(@PathVariable int boardno, @RequestBody QnaboardReDto qna) {

		QnaboardReDto updateQna = qna;
		System.out.println("update qna" + updateQna);
		
		updateQna.setContent(qna.getContent());
		updateQna.setRegdate(qna.getRegdate());

		qnabiz.updateQna(updateQna);
	}

}
