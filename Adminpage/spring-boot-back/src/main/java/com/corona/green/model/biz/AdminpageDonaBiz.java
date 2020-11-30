package com.corona.green.model.biz;

import java.util.List;

import com.corona.green.model.dto.DonaDto;

public interface AdminpageDonaBiz {
	
	List<DonaDto> donaList();
	DonaDto selectOne(String id);

}
