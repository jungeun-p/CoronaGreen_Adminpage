package com.corona.green.model.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corona.green.model.dto.MemberDto;
import com.corona.green.model.mapper.AdminpageMapper;

@Service
public class AdminpageBizImpl implements AdminpageBiz {
	
	@Autowired  
	private AdminpageMapper AdminpageMapper;

	@Override
	public List<MemberDto> userList() {
		return AdminpageMapper.userList();
	}

	@Override
	public MemberDto fetchUserByID(String id) {
		return AdminpageMapper.fetchUserByID(id);
	}

	@Override
	public void updateUser(MemberDto user) {
		AdminpageMapper.updateUser(user);
	}

	@Override
	public void insertUser(MemberDto user) {
		AdminpageMapper.insertUser(user);
	}

	@Override
	public void deleteUser(String id) {
		AdminpageMapper.deleteUser(id);
	}

}