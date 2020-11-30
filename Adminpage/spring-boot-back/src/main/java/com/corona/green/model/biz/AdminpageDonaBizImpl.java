package com.corona.green.model.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corona.green.model.dto.DonaDto;
import com.corona.green.model.mapper.AdminpageDonaMapper;

@Service
public class AdminpageDonaBizImpl implements AdminpageDonaBiz {

	@Autowired
	private AdminpageDonaMapper DonaMapper;
	
	@Override
	public List<DonaDto> donaList() {
		return DonaMapper.donaList();
	}

	@Override
	public DonaDto selectOne(String id) {
		return DonaMapper.SelectOne(id);
	}

}
