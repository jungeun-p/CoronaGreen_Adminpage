package com.corona.green.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.corona.green.model.dto.MemberDto;

@Mapper
public interface AdminpageMapper {
	
	@Select(" SELECT id, phone, address, email, role FROM member ORDER BY id ")
	List<MemberDto> userList();
	
	@Select(" SELECT id, phone, address, email, role FROM member WHERE id = #{id} ")
	MemberDto fetchUserByID(String id);
	
	@Update(" UPDATE member "
		  + " SET phone = #{phone}, address = #{address}, role = #{role} "
		  + " WHERE id = #{id} ")
	void updateUser(MemberDto dto);
	
	@Insert(" INSERT INTO member "
		  + " VALUES(#{id}, #{phone}, #{address}, #{email}, #{role}) ")
	void insertUser(MemberDto dto);
	
	@Delete(" DELETE member "
		  + " SET enabled = Y WHERE id = #{id} ")
	void deleteUser(String id);

}
