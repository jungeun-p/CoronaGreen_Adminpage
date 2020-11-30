package com.corona.green.model.biz;

import java.util.List;

import com.corona.green.model.dto.MemberDto;

public interface AdminpageBiz {
	
	List<MemberDto> userList();
	MemberDto fetchUserByID(String id);
	void updateUser(MemberDto user);
	void insertUser(MemberDto user);
	void deleteUser(String id);

}
