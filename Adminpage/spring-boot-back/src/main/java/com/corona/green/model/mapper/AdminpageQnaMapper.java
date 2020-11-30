package com.corona.green.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.corona.green.model.dto.QnaboardReDto;

@Mapper
public interface AdminpageQnaMapper {
	
	@Select(" SELECT boardno, content, regdate FROM qna_board_re ORDER BY boardno ")
	List<QnaboardReDto> qnaList();
	
	@Select(" SELECT boardno, content, regdate FROM qna_board_re WHERE boardno = #{boardno} ")
	QnaboardReDto fetchQnaByNo(int boardno);

	@Update(" UPDATE qna_board_re "
			+ " SET content = #{content}, regdate = sysdate "
			+ " WHERE boardno = #{boardno} ")
	void updateQna(QnaboardReDto dto);


}
